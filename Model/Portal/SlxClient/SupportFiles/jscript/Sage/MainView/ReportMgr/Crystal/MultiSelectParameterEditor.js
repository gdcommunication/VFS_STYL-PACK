﻿/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define([
    'dojo/_base/declare',
    'dojo/_base/array',
    'dojo/number',
    'Sage/MainView/ReportMgr/Crystal/ParameterHeaderWidget',
    'dojo/text!./templates/MultiSelectParameterEditor.html',
    'Sage/MainView/ReportMgr/Crystal/_ParameterEditorBase',
    'Sage/MainView/ReportMgr/ReportManagerUtility',
    'dijit/form/MultiSelect',
    'Sage/Utility',
    'Sage/MainView/ReportMgr/Crystal/ParameterRangeWidget',
    'Sage/Reporting/Enumerations'
],
function (
    declare,
    dojoArray,
    dojoNumber,
    ParameterHeaderWidget,
    template,
    _ParameterEditorBase,
    reportManagerUtility,
    MultiSelect,
    utility,
    ParameterRangeWidget,
    enumerations
) {
    var __widgetTemplate = utility.makeTemplateFromString(template);
    /**
    * Declare the MultiSelectParameterEditor class.
    * @constructor
    */
    var multiSelectParameterEditor = declare('Sage.MainView.ReportMgr.Crystal.MultiSelectParameterEditor', [_ParameterEditorBase], {
        widgetTemplate: __widgetTemplate,
        parameterRangeWidget: null,
        isNumeric: false,
        _setValueAttr: function (value) {
            this._set("value", value);
        },
        _getValueAttr: function () {
            var self = this;
            this._promptParameter.currentValues = [];
            dojoArray.forEach(this._selectedValues, function (option, i) {
                var parameterValue = self._getParameterValue(option);
                self._promptParameter.currentValues.push(parameterValue);
            });
            return this._promptParameter;
        },
        /**
        * StringParameterEditor class constructor.
        * @constructor
        * @param {Object} promptParameter - Parameter to be edited
        */
        constructor: function (promptParameter) {
            //Note that the base class constructor is automatically called prior to this.
        },
        /**
        * This is a last method in the initialization process. 
        * It is called after all the child widgets are rendered so it's good for a container widget to finish it's post rendering here. 
        * This is where the container widgets could for example set sizes of their children relative to it's own size.
        */
        startup: function () {
            this.inherited(arguments);
            this.isNumeric = (this.parameterValueKind === enumerations.SlxParameterValueKind.NumberParameter);
            var parameterHeaderWidget = new ParameterHeaderWidget({
                promptText: this._promptParameter.promptText,
                parameterFieldName: this._promptParameter.parameterFieldName
            }).placeAt(this.paramsHeaderContainer);

            if (!this._paramDiscreteType) {
                reportManagerUtility.setDomNodeVisible(this.parameterRangeDiv, true);
                this.parameterRangeWidget = new ParameterRangeWidget({
                    paramInitialIds: this._initialIds,
                    paramInitialValues: this._initialValues,
                    paramValues: this._values,
                    defaultValues: this._promptParameter.defaultValues,
                    parameterValueKind: this._promptParameter.parameterValueKind,
                    allowCustomValues: this._allowCustomValues
                }, "parameterRangeWidget");
                this.parameterRangeWidget.placeAt(this.parameterRangeWidgetContainer);
            }
            this.initializeTransferBoxWidget(this.transferBoxContainer, !this._paramRangeType);
            if (this.isNumeric) {
                this.connect(this.txtCustomValue, 'onKeyPress', this._onKeyPress, true);
            }
            reportManagerUtility.setDomNodeVisible(this.divValidationMessage, false);
            reportManagerUtility.setDomNodeVisible(this.rowCustomValues, this._allowCustomValues && !this._paramRangeType);
            this._initializeMessages();
        },
        isValid: function () {
            var valid = true;
            var msg = "";
            if (!this._promptParameter.isOptionalPrompt && !this._promptParameter.allowNullValue) {
                this._selectedValues = this.transferBox.getSelectedValues();
                if (this._selectedValues.length > 0) {
                    dojo.addClass(this.transferBox.errorValidation, 'display-none');
                } else {
                    dojo.removeClass(this.transferBox.errorValidation, 'display-none');
                    msg = this.txtPleaseSpecifyValue;
                    valid = false;
                }
            }
            this._showValidationMessage(msg);
            return valid;
        },
        _onKeyPress: function (e) {
            if (!utility.restrictToNumberOnKeyPress(e, 'number')) {
                dojo.stopEvent(e);
            }
        },
        _initializeMessages: function () {
            var minMaxMessage = this.getMinMaxInitializationMessage();
            this.spanMinMaxMessage.innerHTML = utility.htmlEncode(minMaxMessage);
            reportManagerUtility.setDomNodeVisible(this.divMinMaxMessage, (minMaxMessage !== ""));
        },
        _showValidationMessage: function (msg) {
            this.spanValidationMessage.innerHTML = utility.htmlEncode(msg);
            reportManagerUtility.setDomNodeVisible(this.divValidationMessage, (msg !== ""));
        },
        _getParameterValue: function (option) {
            var parameter;
            if (option.range) {
                parameter = {
                    className: enumerations.ParameterClassName.RangeValue,
                    description: option.displayValue,
                    rangeValue: {
                        beginValue: option.range.startValue, //dojoNumber.parse(option.range.startValue.replace(/\D/g, '')),
                        beginValueType: this.beginValueType,
                        endValue: option.range.endValue, //.parse(option.range.endValue.replace(/\D/g, '')),
                        endValueType: this.endValueType,
                        lowerBoundType: option.range.noLowerValue ? enumerations.SlxRangeBoundType.NoBound : option.range.includeFromRange ? enumerations.SlxRangeBoundType.BoundInclusive : enumerations.SlxRangeBoundType.BoundExclusive,
                        upperBoundType: option.range.noUpperValue ? enumerations.SlxRangeBoundType.NoBound : option.range.includeToRange ? enumerations.SlxRangeBoundType.BoundInclusive : enumerations.SlxRangeBoundType.BoundExclusive
                    }
                };
            } else {
                parameter = {
                    className: enumerations.ParameterClassName.DiscreteValue,
                    description: option.displayValue,
                    discreteValue: {
                        actualValue: option.value, //dojoNumber.parse(option.value),
                        actualValueType: this.actualValueType,
                        value: option.value, //dojoNumber.parse(option.value),
                        valueType: this.valueType
                    }
                };
            }
            return parameter;
        },
        _cmdAddRange_OnClick: function () {
            this.lblRangeValidationError.textContent = this.txtPleaseSpecifyValue;
            if (this.parameterRangeWidget.verifyRequiredAssignments()) {
                if (this.parameterRangeWidget.validateRangeWithinBoundaries()) {
                    dojo.addClass(this.lblRangeValidationError, 'display-none');
                    var range = this.parameterRangeWidget.getRangeValue();
                    if (this.isNumeric) {
                        range.startValue = range.startValue ? dojoNumber.parse(range.startValue.replace(/\D/g, '')) : null;
                        range.endValue = range.endValue ? dojoNumber.parse(range.endValue.replace(/\D/g, '')) : null;
                    }
                    var option = {
                        range: range,
                        displayValue: range.displayValue,
                        value: range.startValue ? range.startValue : range.endValue
                    };
                    this._addToSelectedValues(option);
                } else {
                    dojo.removeClass(this.lblRangeValidationError, 'display-none');
                    this.lblRangeValidationError.textContent = this.txtFromMustBeLessThanOrEqualToTo;
                }
            } else {
                dojo.removeClass(this.lblRangeValidationError, 'display-none');
            }
        },
        _cmdAddCustom_OnClick: function () {
            var value = this.txtCustomValue.get('value');
            if (value === "") {
                dojo.removeClass(this.errorCustomDate, 'display-none');
                this._showValidationMessage(this.txtPleaseSpecifyValue);
                this.txtCustomValue.focus();
            } else {
                this._showValidationMessage("");
                dojo.addClass(this.errorCustomDate, 'display-none');
                var option = { value: value, displayValue: value };
                this._addToSelectedValues(option);
            }
        },
        _addToSelectedValues: function (option) {
            if (option) {
                if (this.valueWithinMinMaxRange(option.value)) {
                    var item = {
                        id: option.displayValue,
                        value: option.value,
                        displayValue: option.displayValue,
                        range: option.range,
                        __selected: true,
                        destroyOnRemove: false
                    };
                    this.transferBox.addNewItem(item, true);
                    this._showValidationMessage("");
                } else {
                    this._showValidationMessage(this.getMinMaxValidationMessage(option.value));
                }
            }
            else {
                this._showValidationMessage(this.txtPleaseSpecifyValue);
            }
        }
    });
    return multiSelectParameterEditor;
});