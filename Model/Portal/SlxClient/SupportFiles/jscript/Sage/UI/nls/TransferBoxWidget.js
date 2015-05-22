define([
    'Sage/LanguageList',
    'dojo/_base/lang'
],
function (LanguageList, lang) {
    var nls = {
        root: {
            searchFilterText: 'Contains:',
            loadingText: 'Loading parameter options...',
            noResultsText: 'No results',
            btnAddTooltip: 'Add selection(s)',
            btnRemoveTooltip: 'Remove selection(s)',
            btnRemoveAllTooltip: 'Remove all',
            availableValuesText: 'Available Values:',
            selectedValuesText: 'Selected Values:',
            btnAddAllTooltip: 'Add all'
        }
    };
    return lang.mixin(LanguageList, nls);
});