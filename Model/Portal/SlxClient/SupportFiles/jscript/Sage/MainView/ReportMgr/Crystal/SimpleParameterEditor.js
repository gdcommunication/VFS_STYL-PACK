/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define([
    'dojo/_base/declare',
    'dojo/_base/array',
    'Sage/MainView/ReportMgr/Crystal/ParameterHeaderWidget',
    'dojo/text!./templates/SimpleParameterEditor.html',
    'Sage/MainView/ReportMgr/Crystal/_ParameterEditorBase',
    'Sage/MainView/ReportMgr/ReportManagerUtility',
    'Sage/MainView/ReportMgr/Crystal/CrystalReportsUtility',
    'Sage/Utility',
    'Sage/Reporting/Enumerations',
    'dojo/number',
    'Sage/MainView/ReportMgr/Crystal/ParameterRangeWidget'
],
function (
    declare,
    dojoArray,
    ParameterHeaderWidget,
    template,
    _ParameterEditorBase,
    reportManagerUtility,
    crystalReportsUtility,
    utility,
    enumerations,
    dojoNumber,
    ParameterRangeWidget
) {
    var __widgetTemplate = utility.makeTemplateFromString(template);
    /**
    * Declare the SimpleParameterEditor class.
    * @constructor
    */
    var simpleParameterEditor = declare('Sage.MainView.ReportMgr.Crystal.SimpleParameterEditor', [_ParameterEditorBase], {
        widgetTemplate: __widgetTemplate,
        isNumeric: false,
        parameterRangeWidget: null,
        _setValueAttr: function (value) {
            this._set("value", value);
        },
        _getValueAttr: function () {
            this._promptParameter.currentValues = [];
            var option;
            if (this._paramRangeType) {
                var range = this.parameterRangeWidget.getRangeValue();
                option = { range: range, displayValue: range.displayValue, value: range.startValue ? range.startValue : range.endValue };
                this._promptParameter.currentValues.push(this._getParameterValue(option));
            } else {
                var currentValue = this._getCurrentValue();
                if (currentValue) {
                    var parameterValue = this._getParameterValue(currentValue);
                    this._promptParameter.currentValues.push(parameterValue);
                }
            }
            return this._promptParameter;
        },
        /**
        * SimpleParameterEditor class constructor.
        * @constructor
        * @param {Object} promptParameter - Parameter to be edited
        */
        constructor: function (promptParameter) {
            //Note that the base class constructor is automatically called prior to this.
            //Add initialization of internal properties here.
        },
        /**
        * This is a last method in the initialization process. 
        * It is called after all the child widgets are rendered so it's good for a container widget to finish it's post rendering here. 
        * This is where the container widgets could for example set sizes of their children relative to it's own size.
        */
        startup: function () {
            this.inherited(arguments);
            reportManagerUtility.setDomNodeVisible(this.divValidationMessage, false);
            this.isNumeric = (this.parameterValueKind === enumerations.SlxParameterValueKind.NumberParameter);
            var parameterHeaderWidget = new ParameterHeaderWidget({
                promptText: this._promptParameter.promptText,
                parameterFieldName: this._promptParameter.parameterFieldName
            }).placeAt(this.paramsHeaderContainer);

            if (this._paramRangeType) {
                this.parameterRangeWidget = new ParameterRangeWidget({
                    paramInitialIds: this._initialIds,
                    paramInitialValues: this._initialValues,
                    paramValues: this._values,
                    defaultValues: this._promptParameter.defaultValues,
                    parameterValueKind: this._promptParameter.parameterValueKind,
                    allowCustomValues: this._allowCustomValues
                }, "parameterRangeWidget");
                this.parameterRangeWidget.placeAt(this.parameterRangeWidgetContainer);
                reportManagerUtility.setDomNodeVisible(this.rowParameterRange, true);
            } else {
                if (this._values.length > 0) {
                    reportManagerUtility.setDomNodeVisible(this.rowSingleValue, true);
                    crystalReportsUtility.initializeComboBoxValues(this._values, crystalReportsUtility.getRangeInitialValue(this._initialValues, false), this.cmbValues);
                    this.connect(this.cmbValues, 'onBlur', this._onComboBoxChange, true);
                }
                reportManagerUtility.setDomNodeVisible(this.rowCustomValues, this._values.length === 0 || this._allowCustomValues);
            }

            reportManagerUtility.setDomNodeVisible(this.rowOrEnterValue, (this._allowCustomValues && this._values.length > 0 && !this._paramRangeType));
            this.connect(this.txtCustomValue, 'onBlur', this._onCustomChange, true);
            if (this.isNumeric) {
                this.connect(this.txtCustomValue, 'onKeyPress', this._onKeyPress, true);
            }

            this._initializeMessages();
        },
        _onKeyPress: function (e) {
            if (!utility.restrictToNumberOnKeyPress(e, 'number')) {
                dojo.stopEvent(e);
            }
        },
        _onCustomChange: function () {
            if (this.txtCustomValue.get('value') !== "") {
                this.cmbValues.set('displayedValue', '');
            }
        },
        _onComboBoxChange: function () {
            var item = this.cmbValues.item;
            if (item && item.value !== "") {
                this.txtCustomValue.set('value', "");
            }
        },
        isValid: function () {
            var msg = "";
            if (!this._promptParameter.isOptionalPrompt && !this._promptParameter.allowNullValue) {
                if (this._paramRangeType) {
                    if (!this.parameterRangeWidget.verifyRequiredAssignments()) {
                        msg = this.txtPleaseSpecifyValue;
                    } else if (!this.parameterRangeWidget.validateRangeWithinBoundaries()) {
                        msg = this.txtFromMustBeLessThanOrEqualToTo;
                    }
                } else {
                    var currentValue = this._getCurrentValue();
                    if (currentValue === null) {
                        msg = this.txtPleaseSpecifyValue;
                    }
                    else {
                        var value = this.isNumeric ? currentValue : currentValue.length;
                        msg = this.getMinMaxValidationMessage(value);
                    }
                }
            }
            this._showValidationMessage(msg);
            return msg === "";
        },
        _initializeMessages: function () {
            var minMaxMessage = this.getMinMaxInitializationMessage();
            this.spanMinMaxMessage.innerHTML = utility.htmlEncode(minMaxMessage);
            reportManagerUtility.setDomNodeVisible(this.divMinMaxMessage, (minMaxMessage !== ""));
        },
        _showValidationMessage: function (msg) {
            this.spanValidationMessage.innerHTML = utility.htmlEncode(msg);
            reportManagerUtility.setDomNodeVisible(this.divValidationMessage, (msg !== ""));
            reportManagerUtility.setDomNodeVisible(this.errorEndRange, (msg !== ""));
            reportManagerUtility.setDomNodeVisible(this.errorCustomValue, (msg !== ""));
            if (msg !== "" && !this._paramRangeType) {
                if (this._values.length > 0) {
                    this.cmbValues.focus();
                } else {
                    this.txtCustomValue.focus();
                }
            }
        },
        _getCurrentValue: function () {
            var value = null;
            if (this.txtCustomValue.get('value') !== "") {
                value = this.isNumeric ? dojoNumber.parse(this.txtCustomValue.get('value')) : this.txtCustomValue.get('value');
                return { value: value, displayValue: value };
            } else {
                var selectedItem = this.cmbValues.item;
                if (selectedItem && selectedItem.value !== "") {
                    value = this.isNumeric ? dojoNumber.parse(selectedItem.value) : selectedItem.value;
                    return { value: value, displayValue: selectedItem.description };
                }
            }
            return value;
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
                    className: "CrystalReports.ParameterFieldDiscreteValue",
                    computedText: this.isNumeric ? null : '\"' + option.value + '\"',
                    description: option.displayValue, //this.isNumeric ? null : option.value,
                    discreteValue: {
                        actualValue: option.value,
                        actualValueType: this.actualValueType,
                        value: option.value,
                        valueType: this.valueType
                    }
                };
            }
            return parameter;
        }
    });
    return simpleParameterEditor;
});