/*globals Sage, dojo, dojox, dijit, Simplate, window, Sys, define */
define([
    'dojo/date/locale',
    'dojo/i18n!./nls/CrystalReportsUtility',
    'Sage/Reporting/Enumerations',
    'Sage/MainView/ReportMgr/ReportManagerUtility',
    'dojo/_base/array',
    'dojo/store/Memory'
],
function (
    locale,
    nlsResources,
    enumerations,
    ReportManagerUtility,
    dojoArray,
    Memory
) {
    Sage.namespace('Sage.MainView.ReportMgr.Crystal.CrystalReportsUtility');
    dojo.mixin(Sage.MainView.ReportMgr.Crystal.CrystalReportsUtility, {
        _nlsResources: nlsResources,
        getConditionTypes: function (report) {
            var conditionTypes = [];
            if (report) {
                if (report.useDateFilter) {
                    conditionTypes.push({
                        conditionType: enumerations.ReportConditionType.DateRange,
                        caption: enumerations.getReportConditionTypeCaption(enumerations.ReportConditionType.DateRange)
                    });
                }
                if (report.useGroupFilter) {
                    conditionTypes.push({
                        conditionType: enumerations.ReportConditionType.Group,
                        caption: enumerations.getReportConditionTypeCaption(enumerations.ReportConditionType.Group)
                    });
                }
                conditionTypes.push({
                    conditionType: enumerations.ReportConditionType.Query,
                    caption: enumerations.getReportConditionTypeCaption(enumerations.ReportConditionType.Query)
                });
                if (report.useUserFilter) {
                    conditionTypes.push({
                        conditionType: enumerations.ReportConditionType.User,
                        caption: enumerations.getReportConditionTypeCaption(enumerations.ReportConditionType.User)
                    });
                }
            }
            return conditionTypes;
        },
        getCurrentEntityCondition: function () {
            var condition = null;
            var entityContext = ReportManagerUtility.getCurrentEntityContext();
            if (entityContext && entityContext.EntityTableName && entityContext.EntityId) {
                //Note that it is assumed that the keyfield has the form tablenameid. 
                //This holds true for most regular entities such as account, contact, opportunity, etc.
                var keyField = entityContext.EntityTableName.toUpperCase() + "ID";
                condition = {
                    conditionType: enumerations.ReportConditionType.Query,
                    table: entityContext.EntityTableName.toUpperCase(),
                    field: keyField,
                    operator: enumerations.ReportConditionOperator.Is,
                    value: entityContext.EntityId,
                    fromRange: null,
                    toRange: null,
                    dataType: enumerations.FieldDataTypes.String,
                    tag: null
                };
            }
            return condition;
        },
        getCurrentUserCondition: function () {
            var condition = {
                conditionType: enumerations.ReportConditionType.User,
                table: null,
                field: null,
                operator: enumerations.ReportConditionOperator.Is,
                value: nlsResources.txtCurrentUser,
                fromRange: null,
                toRange: null,
                dataType: enumerations.FieldDataTypes.String,
                tag: ':UserID'
            };
            return condition;
        },
        getDateOnlyFormattedDate: function (dateValue) {
            return locale.format(dateValue, { selector: 'date', fullYear: true });
        },
        initializeComboBoxValues: function (values, initialValue, comboBox) {
            var dataStore = new Memory({
                identifier: "id",
                name: 'description',
                value: 'value',
                data: values
            });
            comboBox.set('store', dataStore);
            comboBox.set('searchAttr', 'description');
            comboBox.set('value', '_id');
            comboBox.set('maxHeight', '150');
            comboBox.set('required', false);

            if (initialValue !== "") {
                dojoArray.some(values, function (entry, i) {
                    if (entry.value == initialValue) {
                        comboBox.set('displayedValue', entry.description);
                        return true;
                    }
                });
            } else {
                comboBox.set('displayedValue', '');
            }
        },
        getRangeInitialValue: function (initialValues, startValue) {
            var value = "";
            if (initialValues && initialValues.length > 0) {
                var initialValue = initialValues[0];
                if (initialValue.parameterClass === enumerations.SlxParameterValueRangeKind.Discrete) {
                    value = initialValue.value;
                } else {
                    if (startValue) {
                        value = initialValue.value.beginValue;
                    } else {
                        value = initialValue.value.endValue;
                    }
                }
            }
            return value;
        }
    });
    return Sage.MainView.ReportMgr.Crystal.CrystalReportsUtility;
});