define([
        'Sage/LanguageList',
        'dojo/_base/lang'
],
function (LanguageList, lang) {
    var nls = {
        root: {
            GroupListOptionsTitle: 'Group List Options',
            maximizeTitle: 'Expand Group List',
            minimizeTitle: 'Minimize Group List'
        }
    };
    return lang.mixin(LanguageList, nls);
});