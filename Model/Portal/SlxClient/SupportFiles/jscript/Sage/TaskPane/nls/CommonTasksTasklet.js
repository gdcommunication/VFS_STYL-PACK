﻿define([
        'Sage/LanguageList',
        'dojo/_base/lang'
],
function (LanguageList, lang) {
    var nls = {
        root: {
            okButtonText: 'OK',
            loadingText: 'loading...',
            noPrimaryEmail: 'No primary email available',
            selectFileFormat: 'Select a file format:',
            exportToFile_OptionCSV: 'Standard CSV',
            exportToFile_OptionTab: 'Tab delimited (recommended for Microsoft Excel)',
            exportToFile_OptionSaveFormat: 'Remember my selection and do not ask again.',
            exportToFile_OK: 'OK',
            exportToFile_Cancel: 'Cancel',
            exportToFile_DialogTitle: 'Export to File',
            exportToExcel_Caption: 'Exporting to Excel',
            errorRequestingJobMgr: 'An error occurred requesting job manager: ${0}',
            errorExecutionAction: 'An error occurred executing action ${0}',
            exportProcessingJobMsg: 'Processing export, you may continue waiting for completion, or go to the reports view to open your file.'
        }
    };
    return lang.mixin(LanguageList, nls);
});
