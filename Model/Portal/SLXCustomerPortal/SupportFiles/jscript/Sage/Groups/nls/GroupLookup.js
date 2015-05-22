define([
        'Sage/LanguageList',
        'dojo/_base/lang'
],
function (LanguageList, lang) {
    var nls = {
        root: {
            txtNoRecordsFound: 'No records found.'
        }
    };
    return lang.mixin(LanguageList, nls);
});