define([
        'Sage/LanguageList',
        'dojo/_base/lang'
],
function (LanguageList, lang) {
    var nls = {
        root: {
            pastDueToolTipFmt: ' You have ${0} activities that are past due.'
        }
    };
    return lang.mixin(LanguageList, nls);
});
