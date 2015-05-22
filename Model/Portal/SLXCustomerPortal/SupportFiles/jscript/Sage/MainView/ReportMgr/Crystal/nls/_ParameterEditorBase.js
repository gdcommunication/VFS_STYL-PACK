﻿define([
        'Sage/LanguageList',
        'dojo/_base/lang'
],
function (LanguageList, lang) {
    var nls = {
        root: {
            txtPleaseSpecifyValue: 'Please specify a value.',
            lblAvailableValues_Caption: 'Available Values:',
            lblSelectedValues_Caption: 'Selected Values:',
            lblEnterValue_Caption: 'Enter a Value:',
            btnOK_Caption: 'OK',
            txtTheValueMustBeBetween: 'The value must be between {0} and {1} characters long.',
            txtTheMinimumLengthForThisField: 'The minimum length for this field is {0}.',
            txtTheMaximumLengthForThisField: 'The maximum length for this field is {0}.',
            txtPleaseSpecifyNumberBetween: 'Please specify a numeric value between {0} and {1}.',
            txtPleaseSpecifyNumberLesser: 'Please specify a numeric value less than or equal to {0}.',
            txtPleaseSpecifyNumberGreater: 'Please specify a numeric value greater than or equal to {0}.',
            txtNoLowerValue: 'No lower value',
            txtNoUpperValue: 'No upper value',
            txtIncludeThisValue: 'Include this value',
            txtFrom: 'From:',
            txtTo: 'To:',
            txtPleaseSpecifyFromValue: 'Please specify a start range value',
            txtPleaseSpecifyToValue: 'Please specify a end range value',
            txtPleaseSpecifyDateBetween: 'Please specify a date value between {0} and {1}.',
            txtPleaseSpecifyDateLesser: 'Please specify a date value less than or equal to {0}.',
            txtPleaseSpecifyDateGreater: 'Please specify a date value greater than or equal to {0}.',
            txtFromMustBeLessThanOrEqualToTo: 'The start range value must be less than or equal to the end range value.',
            txtStartOfRange: 'Start of Range:',
            txtEndOfRange: 'End of Range:',
            txtAddRange: 'Add Range',
            lblSelectValue_Caption: 'Select a Value:',
            lblOrValue_Caption: 'Or'
        }
    };
    return lang.mixin(LanguageList, nls);
});