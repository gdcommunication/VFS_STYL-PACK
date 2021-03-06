﻿define([
        'Sage/LanguageList',
        'dojo/_base/lang'
],
function (LanguageList, lang) {
    var nls = {
        root: {
            txtOptions: 'Options',
            txtColumns: 'Columns',
            txtZero: '(0 displays all group columns)',
            txtHideOnSelection: 'Hide extended group list on record selection',
            txtDisplayExtendedGroupListOnLookup: 'Display extended group list on lookup',
            cmdOk_Caption: 'OK',
            cmdCancel_Caption: 'Cancel',
            txtListView: 'List View',
            txtDetailView: 'Detail View',
            txtStayInDetailViewOnLookup: 'Stay in detail view on lookup'
        }
    };
    return lang.mixin(LanguageList, nls);
});