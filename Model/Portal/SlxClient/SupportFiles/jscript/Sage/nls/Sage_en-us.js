require({cache:{
'Sage/Utility/File/nls/en/FallbackFilePicker':function(){
define("Sage/Utility/File/nls/en/FallbackFilePicker", {
    addLibraryFileText: 'Add Library File',
    attachFileText: 'Attach File',
    descriptionText: 'Description',
    uploadFileText: 'Attachment',
    okText: 'OK',
    cancelText: 'Cancel',
    invalidContext: 'The file(s) cannot be uploaded outside of the Sales Library.',
    fileTooLargeError: 'The file upload attempt was aborted because the file was too large.',
    pleaseSelectFile: 'Please select a file first.',
    slxErrorIdInfo: 'Saleslogix Error Id: '
});
},
'Sage/Utility/File/nls/en-us/FallbackFilePicker':function(){
define('Sage/Utility/File/nls/en-us/FallbackFilePicker',{});
},
'Sage/UI/nls/en/Boolean':function(){
define("Sage/UI/nls/en/Boolean", {
    yesText: 'Yes',
    noText: 'No'
});
},
'Sage/UI/nls/en-us/Boolean':function(){
define('Sage/UI/nls/en-us/Boolean',{});
},
'Sage/Services/nls/en/ActivityService':function(){
define("Sage/Services/nls/en/ActivityService", (
{ txtErrorActionMsg: 'I\'m sorry, the action was not successful an error occurred.',
  txtActivity: 'activity',
  txtActivities: 'activities',
  txtActionDeleteActivites: 'Delete Activities',
  txtActionDeleteActivitiesQuestion: 'Only activities that you have permission to delete will be deleted. <P> Are you sure you want to delete the {0} selected {1}?',
  txtAlarm: 'alarm',
  txtAlarms: 'alarms',
  txtActionSnoozeAlarm: 'Snooze Alarm',
  txtActionSnoozeQuestion: 'Are you sure you want to snooze the {0} selected {1} for {2} ?',
  txtActionSnoozeAllQuestion: 'Are you sure you want to snooze all {0} for {1} ?',
  txtActionDismissAlarms: 'Dismiss Alarms',
  txtActionDismissAlarmsQuestion: 'Are you sure you want to dismiss the {0} selected {1}?',
  txtEvent: 'event',
  txtEvents: 'events',
  txtActionDeleteEvents: 'Delete Events',
  txtActionDeleteEventsQuestion: 'Only events that you have permission to delete will be deleted. <P> Are you sure you want to delete the {0} selected {1}?',
  txtConfirmation: 'confirmation',
  txtConfirmations: 'confirmations',
  txtActionAcceptConfirmations: 'Accept Confirmations',
  txtActionAcceptConfirmQuestion: 'Are you sure you want to accept the {0} selected {1}? This action can only be performed on New or Chnaged confirmations. All others will be ignored.',
  txtDeclineConfirmations: 'Decline Confirmations',
  txtActionDeclineConfrimQuestion: 'Are you sure you want to decline the {0} selected {1}? This action can only be performed on New or Chnaged confirmations. All others will be ignored.',
  txtActionRemoveConfirmations: 'Delete Confirmations',
  txtActionRemoveConfirmationsQuestion: 'Are you sure you want to delete the {0} selected {1}? This action can only be performed on Leader, Declined or Deleted confirmations. All others will be ignored.',
  txtLiteratureRequest: 'literature request',
  txtLiteratureRequests: 'literature requests',
  txtActionDeleteLiteratureRequests: 'Delete Literature Requests',
  txtActionDeleteLiteratureRequestsQuestion: 'Only literature request that you have permission to delete will be deleted. <P> Are you sure you want to delete the {0} selected {1}?' }
));
},
'Sage/Services/nls/en-us/ActivityService':function(){
define('Sage/Services/nls/en-us/ActivityService',{});
},
'Sage/UI/Controls/nls/en/CopyToClipboard':function(){
define("Sage/UI/Controls/nls/en/CopyToClipboard", {
    closeText: 'Close',
    dialogTitle: 'Copy Text To Clipboard',
    helpText: 'Select desired text and press Control-C (Command-C on Mac) to copy to your clipboard.',
    textTab: 'Text',
    sourceTab: 'Source'
});
},
'Sage/UI/Controls/nls/en-us/CopyToClipboard':function(){
define('Sage/UI/Controls/nls/en-us/CopyToClipboard',{});
},
'Sage/Utility/nls/en/Activity':function(){
define("Sage/Utility/nls/en/Activity", (
{ ToDo: 'To-Do',
  PhoneCall: 'Phone Call',
  Meeting: 'Meeting',
  Personal: 'Personal Activity',
  Literature: 'Literature',
  Fax: 'Fax',
  Letter: 'Letter',
  Note: 'Note',
  Email: 'E-mail',
  Document: 'Document',
  DatabaseChange: 'Database Change',
  Event: 'Event',
  ScheduledEvent: 'Scheduled Event',
  Contact: 'Contact',
  Lead: 'Lead',
  New: 'New',
  Change: 'Change',
  Deleted: 'Deleted',
  Confirm: 'Confirm',
  Decline: 'Decline',
  Unknown: 'Unknown',
  Leader: 'Leader',
  Complete: 'Complete',
  confirmTypeChanged: 'Changed',
  confirmTypeConfirmed: 'Confirmed',
  confirmTypeDeleted: 'Deleted' }
));
},
'Sage/Utility/nls/en-us/Activity':function(){
define('Sage/Utility/nls/en-us/Activity',{});
},
'Sage/QuickForms/Design/nls/en/DesignPanel':function(){
define("Sage/QuickForms/Design/nls/en/DesignPanel", (
{ cultureListText: 
   { iv: '[invariant]',
     de_DE: 'de-DE',
     fr_FR: 'fr-FR',
     it_IT: 'it-IT',
     ru_RU: 'ru-RU' },
  helpText: 'Help',
  saveText: 'Save',
  cultureText: 'Culture:',
  loadingText: 'Loading...',
  savingText: 'Saving...',
  saveErrorText: 'An error occurred saving the form.',
  readErrorText: 'Could not load the requested form.',
  cultureReloadConfirmText: 'You have unsaved changes.  Are you sure you want to reload the form with a different culture?' }
));
},
'Sage/QuickForms/Design/nls/en-us/DesignPanel':function(){
define('Sage/QuickForms/Design/nls/en-us/DesignPanel',{});
},
'Sage/UI/nls/en/TimelessActivitiesPane':function(){
define("Sage/UI/nls/en/TimelessActivitiesPane", {
    header_complete: 'Complete',
    header_type: 'Type',
    header_contact: 'Name',
    header_regarding: 'Regarding',
    tooltip_type: 'Type',
    tooltip_contact: 'Contact',
    tooltip_account: 'Account',
    tooltip_lead: 'Lead',
    tooltip_phone: 'Phone',
    tooltip_leader: 'Leader',
    tooltip_regarding: 'Regarding',
    tooltip_location: 'Location',
    tooltip_notes: 'Notes',
    tooltip_company: 'Company'
});
},
'Sage/UI/nls/en-us/TimelessActivitiesPane':function(){
define('Sage/UI/nls/en-us/TimelessActivitiesPane',{});
},
'Sage/MainView/ActivityMgr/nls/en/ActivityEditor':function(){
define("Sage/MainView/ActivityMgr/nls/en/ActivityEditor", (
{ labelWidth: '100',
  tabNameGeneralText: 'General',
  tabNameAvailabilityText: 'Availability',
  tabNameAssociationsText: 'Associations',
  tabNameRecurringText: 'Recurring',
  tabNameAttachmentsText: 'Attachments',
  tabNameNotesText: 'Notes',
  scheduleText: 'Schedule',
  startTimeText: 'Start Time',
  timeLessText: 'Timeless',
  alarmText: 'Alarm',
  durationText: 'Duration',
  rolloverText: 'Auto rollover to next day',
  contactText: 'Contact',
  accountText: 'Account',
  leadText: 'Lead',
  opportunityText: 'Opportunity',
  ticketText: 'Ticket',
  companyText: 'Company',
  regardingText: 'Regarding',
  notesText: 'Notes',
  priorityText: 'Priority',
  leaderText: 'Leader',
  categoryText: 'Category',
  locationText: 'Location',
  dialogHeaderFormatText: '${actionText} ${activityType} - ${description}',
  scheduledByFormatText: 'Scheduled by ${user} on ${date}',
  completeScheduledByFormatText: 'Scheduled by ${user} on ${date} originally for ${startDate}',
  newConfirmationHeaderFormatText: 'Confirm ${activityType} Scheduled by ${user}',
  otherConfimationHeaderFormatText: '${activityType} ${actionText} by ${user}',
  acceptedText: 'Accepted',
  declinedText: 'Declined',
  scheduledText: 'Scheduled',
  updatedText: 'Updated',
  deletedText: 'Deleted',
  cancelText: 'Cancel',
  okText: 'OK',
  completeText: 'Complete',
  completeBtnText: 'Complete...',
  completedText: 'Completed',
  deleteText: 'Delete',
  lookupActText: 'Lookup Account',
  lookupContactText: 'Lookup Contact',
  lookupOpportunityText: 'Lookup Opportunity',
  lookupTicketText: 'Lookup Ticket',
  lookupLeadText: 'Lookup Lead',
  lookupLeaderText: 'Lookup Leader',
  lookupResourcesText: 'Add Members and Resources',
  addResourceText: 'Add Selected',
  mainPhoneText: 'Main Phone',
  typeText: 'Type',
  subTypeText: 'Sub-Type',
  nameText: 'Name',
  cityText: 'City',
  stateText: 'State',
  workphoneText: 'Work Phone',
  emailText: 'Email',
  acctMgrText: 'Acct Manager',
  descriptionText: 'Description',
  stageText: 'Stage',
  statusText: 'Status',
  ownerText: 'Owner',
  ticketNumberText: 'Ticket Number',
  phoneText: 'Phone',
  urgencyText: 'Urgency',
  areaText: 'Area',
  recurringText: 'Recurring',
  resultText: 'Result',
  followupText: 'Follow-up',
  noneText: 'None',
  carryOverAttachmentsText: 'Carry Over Attachments',
  carryOverNotesText: 'Carry Over Notes',
  asScheduledText: 'As Scheduled',
  nowText: 'Now',
  responseText: 'Response',
  acceptText: 'Accept',
  declineText: 'Decline',
  deleteConfText: 'Delete Confirmation',
  closeText: 'Close',
  leadFullNameText: 'Name',
  postalText: 'Postal Code',
  failedLoadingDataMsg: 'An error occurred loading data.',
  removeText: 'Remove',
  noText: 'No',
  yesText: 'Yes',
  areYouSureText: 'You are about to permanently delete this record.',
  couldNotSaveErrorText: 'We\'re sorry, the activity could not be saved because an error occurred.',
  couldNotDeleteErrorText: 'We\'re sorry, the activity could not be deleted because an error occurred.',
  couldNotCompleteErrorText: 'We\'re sorry, the activity could not be completed because an error occurred.',
  scheduleFollowUpErrorText: 'The follow up could not be scheduled because the HistoryId could not be determined.',
  tabNameParticipants: 'Participants' }
));
},
'Sage/MainView/ActivityMgr/nls/en-us/ActivityEditor':function(){
define('Sage/MainView/ActivityMgr/nls/en-us/ActivityEditor',{});
},
'Sage/TaskPane/User/nls/en/ContactUserAssociationEditor':function(){
define("Sage/TaskPane/User/nls/en/ContactUserAssociationEditor", (
{ btnCancel_Caption: 'Cancel',
  btnOK_Caption: 'OK',
  dialogTitleText: 'Associate User with Contact',
  associateContactText: 'Associate the selected user with the following contact',
  user_Caption: 'Contact',
  lookupContactText: 'Lookup Contact',
  lookupFirstNameColText: 'First Name',
  lookupLastNameColText: 'Last Name',
  lookupTitleColText: 'Title',
  lookupAccountColText: 'Account',
  lookupWorkPhoneColText: 'Work Phone',
  lookupEmailText: 'Email',
  disAssociateTitle: 'Disassociate from a Contact',
  associationExistsMessage: 'The contact you selected is already associated to a user. Select another contact.' }
));
},
'Sage/TaskPane/User/nls/en-us/ContactUserAssociationEditor':function(){
define('Sage/TaskPane/User/nls/en-us/ContactUserAssociationEditor',{});
},
'Sage/MainView/nls/en/ActivityManager':function(){
define("Sage/MainView/nls/en/ActivityManager", (
{ titleFmtString: '${0}',
  tabDisplayNameActivity: 'Activities',
  tabDisplayNameLit: 'Literature',
  tabDisplayNameEvent: 'Events',
  tabDisplayNameConfirm: 'Confirmations',
  activityColNameComplete: 'Complete',
  activityColNameAttachment: 'Attachment',
  activityColNameRecurring: 'Recurring',
  activityColNameAlarm: 'Alarm',
  activityColNameType: 'ActivityType',
  activityColNameStartDate: 'StartDate',
  activityColNameDuration: 'Duration',
  activityColNameContact: 'Contact',
  activityColNameLead: 'Lead',
  activityColNameAccount: 'Account',
  activityColNameRegarding: 'Regarding',
  activityColNamePriority: 'Priority',
  activityColNameUserId: 'leader',
  activityTypePhone: 'Phone',
  activityTypeCall: 'Call',
  activityTypeMeeting: 'Meeting',
  activityTypePersonal: 'Personal' }
));
},
'Sage/MainView/nls/en-us/ActivityManager':function(){
define('Sage/MainView/nls/en-us/ActivityManager',{});
},
'Sage/Services/nls/en/JobService':function(){
define(
"Sage/Services/nls/en/JobService", { 
    txtInvalidParameter: 'Invalid parameter: \'${0}\'.',
    txtTriggerJobError: 'Sorry an error occurred triggering job \'${0}\': ${1} ${2}.',
    txtScheduleJobError: 'Sorry an error occurred scheduling job \'${0}\': ${1} ${2}.',
    txtUnexpectedError: 'Sorry an error occurred: ${0} ${1}.'
});
},
'Sage/Services/nls/en-us/JobService':function(){
define('Sage/Services/nls/en-us/JobService',{});
},
'Sage/QuickForms/Design/nls/en/NumericControlDesigner':function(){
define("Sage/QuickForms/Design/nls/en/NumericControlDesigner", (
{ displayNameText: 'Numeric' }
));
},
'Sage/QuickForms/Design/nls/en-us/NumericControlDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/NumericControlDesigner',{});
},
'Sage/QuickForms/Design/Editors/nls/en/_PropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/_PropertyEditor", (
{ titleText: 'Properties' }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/_PropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/_PropertyEditor',{});
},
'Sage/Services/nls/en/ActivityActionProcessor':function(){
define("Sage/Services/nls/en/ActivityActionProcessor", (
{ btnOkayText: 'OK',
  btnCancelText: 'Cancel',
  btnCloseText: 'Close',
  btnHelpText: 'Help',
  processingText: 'Processing request please wait...',
  failureText: 'I\'m sorry, the action was not successful an error occurred.',
  titleText: 'Process' }
));
},
'Sage/Services/nls/en-us/ActivityActionProcessor':function(){
define('Sage/Services/nls/en-us/ActivityActionProcessor',{});
},
'Sage/QuickForms/Design/Editors/nls/en/TextBoxBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/TextBoxBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  captionText: 'Caption:',
  captionTooltipText: 'The label to display on the form for this control.',
  captionAlignmentText: 'Caption Alignment:',
  captionAlignmentTooltipText: 'Justification of the label text.',
  linesText: 'Lines:',
  linesTooltipText: 'Number of lines of text displayed.',
  isReadOnlyText: 'Read Only:',
  isReadOnlyTooltipText: 'Does not allow edits.',
  toolTipText: 'Tooltip:',
  toolTipTooltipText: 'Short help text about control.',
  alignmentText: { left: 'Left', center: 'Center', right: 'Right' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/TextBoxBasicPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/TextBoxBasicPropertyEditor',{});
},
'Sage/MainView/ActivityMgr/nls/en/QuickCompleteEditor':function(){
define("Sage/MainView/ActivityMgr/nls/en/QuickCompleteEditor", (
{ lblResultText: 'Result:',
  lblNoteText: 'Note (append to all items):',
  btnCompleteIndividuallyText: 'Individually',
  btnAsScheduledText: 'As Scheduled',
  btnCompleteNowText: 'Now',
  btnCancelText: 'Cancel',
  btnCloseText: 'Close',
  btnHelpText: 'Help',
  resultCompletedText: 'Complete',
  titleText: 'Quick Complete',
  actionMessage: 'Only activities that you have permission to complete will be completed.',
  completeMessage: 'Complete all {0} selected activities:',
  processingMessage: 'Processing all {0} selected activities please wait...'
}
));
},
'Sage/MainView/ActivityMgr/nls/en-us/QuickCompleteEditor':function(){
define('Sage/MainView/ActivityMgr/nls/en-us/QuickCompleteEditor',{});
},
'Sage/MainView/ActivityMgr/templates/nls/en/UserActivityDetailSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/en/UserActivityDetailSummary", (
{ txtPhone_Caption: 'Phone:',
  lnkOpportunityName_Caption: 'Opportunity:',
  txtStartTime_Caption: 'Start Time:',
  lnkContactName_Caption: 'Contact:',
  lnkLeadName_Caption: 'Lead:',
  lnkTicketNumber_Caption: 'Ticket:',
  txtLocation_Caption: 'Location:',
  txtLeader_Caption: 'Leader:',
  txtDuration_Caption: 'Duration:',
  lnkAccountName_Caption: 'Account:',
  lnkCompanyName_Caption: 'Company:',
  txtNotes_Caption: 'Notes:',
  btnComplete_Caption: 'Complete',
  txtAttendeeCount_Caption: 'Participant Count:' }
));
},
'Sage/MainView/ActivityMgr/templates/nls/en-us/UserActivityDetailSummary':function(){
define('Sage/MainView/ActivityMgr/templates/nls/en-us/UserActivityDetailSummary',{});
},
'Sage/MainView/ActivityMgr/templates/nls/en/ConfirmationDetailSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/en/ConfirmationDetailSummary", (
{ txtPhone_Caption: 'Phone:',
  lnkOpportunity_Caption: 'Opportunity:',
  txtStartTime_Caption: 'Start Time:',
  lnkContactName_Caption: 'Contact:',
  lnkLeadName_Caption: 'Lead:',
  lnkTicket_Caption: 'Ticket:',
  txtLocation_Caption: 'Location:',
  txtLeader_Caption: 'Leader:',
  txtDuration_Caption: 'Duration:',
  lnkAccountName_Caption: 'Account:',
  lnkCompanyName_Caption: 'Company:',
  txtNotes_Caption: 'Notes:',
  btnComplete_Caption: 'Complete',
  txtFromUser_Caption: 'From:',
  btnDelete_Caption: 'Delete',
  btnDecline_Caption: 'Decline',
  btnAccept_Caption: 'Accept' }
));
},
'Sage/MainView/ActivityMgr/templates/nls/en-us/ConfirmationDetailSummary':function(){
define('Sage/MainView/ActivityMgr/templates/nls/en-us/ConfirmationDetailSummary',{});
},
'Sage/Utility/File/nls/en/DefaultDropHandler':function(){
define("Sage/Utility/File/nls/en/DefaultDropHandler", {
    emailDroppedText: 'Dropped Email',
    attachmentTitleText: 'Save Attachements',
    attachmentQuestionText: 'Would you like to keep a copy of these attachment(s) in Saleslogix? <br />The attachments will be stored under the Attachments tab for relevant entities.'
});
},
'Sage/Utility/File/nls/en-us/DefaultDropHandler':function(){
define('Sage/Utility/File/nls/en-us/DefaultDropHandler',{});
},
'Sage/UI/nls/en/TransferBoxWidget':function(){
﻿define("Sage/UI/nls/en/TransferBoxWidget", {
    searchFilterText: 'Contains:',
    loadingText: 'Loading parameter options...',
    noResultsText: 'No results',
    btnAddTooltip: 'Add selection(s)',
    btnRemoveTooltip: 'Remove selection(s)',
    btnRemoveAllTooltip: 'Remove all',
    availableValuesText: 'Available Values:',
    selectedValuesText: 'Selected Values:',
    btnAddAllTooltip: 'Add all'
});
},
'Sage/UI/nls/en-us/TransferBoxWidget':function(){
define('Sage/UI/nls/en-us/TransferBoxWidget',{});
},
'Sage/Utility/File/nls/en/AttachmentPropertiesEditForm':function(){
define("Sage/Utility/File/nls/en/AttachmentPropertiesEditForm", {
    fileText: 'File',
    descriptionText: 'Description',
    sizeText: 'Size',
    attachDateText: 'Attached Date',
    attachedByText: 'Attached By',
    uploadFileText: 'Select Different File...',
    editText: 'Edit Attachment',
    okText: 'OK',
    cancelText: 'Cancel',
    browseText: 'Browse',
    urlText: 'URL',
    requestFailedMsg: 'The requested operation could not be completed, please try again later.'
});
},
'Sage/Utility/File/nls/en-us/AttachmentPropertiesEditForm':function(){
define('Sage/Utility/File/nls/en-us/AttachmentPropertiesEditForm',{});
},
'Sage/UI/Alarms/nls/en/AlarmPane':function(){
define("Sage/UI/Alarms/nls/en/AlarmPane", {
    dismissAllText: 'Dismiss all',
    dismissText: 'Dismiss',
    fiveMinText: '5 minutes',
    tenMinText: '10 minutes',
    fifteenMinText: '15 minutes',
    thirtyMinText: '30 minutes',
    oneHourText: '1 hour',
    twoHourText: '2 hours',
    fourHourText: '4 hours',
    eightHourText: '8 hours',
    oneDayText: '1 day',
    twoDayText: '2 days',
    threeDayText: '3 days',
    oneWeekText: '1 week',
    twoWeekText: '2 weeks',
    snoozeText: 'Snooze',
    snoozeByText: 'Snooze by:',
    snoozeAllText: 'Snooze All',
    showCalendarText: 'Show Calendar'
});
},
'Sage/UI/Alarms/nls/en-us/AlarmPane':function(){
define('Sage/UI/Alarms/nls/en-us/AlarmPane',{});
},
'Sage/TaskPane/nls/en/LiteratureManagementTasks':function(){
define("Sage/TaskPane/nls/en/LiteratureManagementTasks", (
{ errFulFillmentCancelled: 'The fulfillment of the literature request was canceled for LitReqId {0}.',
  errFulFillmentFailed: 'The literature request could not be fulfilled for LitReqId {0}.',
  errMailMergeService: 'The literature request(s) could not be fulfilled because the mail merge service could not be loaded. This may happen if Saleslogix Desktop Integration is not installed or is not installed properly.',
  errFulFillmentRequest: 'The literature request(s) could not be fulfilled.',
  errFulFillmentRequestEx: 'The following literature request(s) could not be fulfilled:',
  fulFillmentSuccess: 'The literature request fulfillment was successful.' }
));
},
'Sage/TaskPane/nls/en-us/LiteratureManagementTasks':function(){
define('Sage/TaskPane/nls/en-us/LiteratureManagementTasks',{});
},
'Sage/UI/Dashboard/nls/en/DashboardWidget':function(){
define("Sage/UI/Dashboard/nls/en/DashboardWidget", {
    noQueryDataText: 'The server has no data for query ',
    initializingText: 'Initializing'
});
},
'Sage/UI/Dashboard/nls/en-us/DashboardWidget':function(){
define('Sage/UI/Dashboard/nls/en-us/DashboardWidget',{});
},
'Sage/QuickForms/Design/Editors/nls/en/NumericAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/NumericAdvancedPropertyEditor", (
{ titleText: 'Advanced',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  controlInfoText: 'Control Info',
  dataText: 'Data',
  controlIdText: 'Control Id:',
  controlIdTooltipText: 'Identifier for this control.',
  controlLabelPlacementText: 'Label Placement:',
  controlLabelPlacementTooltipText: 'Label position in relation to the control.',
  controlTypeText: 'Control Type:',
  controlTypeTooltipText: 'Saleslogix control type.',
  decimalDigitsText: 'Decimal Digits:',
  decimalDigitsTooltipText: 'The number of digits after the decimal to display and allow for data entry.',
  defaultDataBindingText: 'Data Bindings:',
  defaultDataBindingTooltipText: 'Data field(s) in the database used by this control.',
  enabledText: 'Enabled:',
  enabledTooltipText: 'Allows user to interact with this control.',
  formatTypeText: 'Format Type:',
  formatTypeTooltipText: 'Type of format to use when converting number to string.',
  maxLengthText: 'Max Length:',
  maxLengthTooltipText: 'Maximum number of characters user can enter.',
  requiredText: 'Required:',
  requiredTooltipText: 'Requires a value when saving data.',
  strictText: 'Strict:',
  strictTooltipText: 'Pads display of number with trailing zeros as necessary.',
  visibleText: 'Visible:',
  visibleTooltipText: 'Show or hide this control on the form.',
  numberFormatText: 
   { Number: 'Number',
     Percent: 'Percent',
     Decimal: 'Decimal',
     Scientific: 'Scientific' },
  labelPlacementText: { left: 'Left', right: 'Right', top: 'Top', none: 'None' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/NumericAdvancedPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/NumericAdvancedPropertyEditor',{});
},
'Sage/MainView/IntegrationContract/nls/en/CustomerPaymentsRTDV':function(){
define("Sage/MainView/IntegrationContract/nls/en/CustomerPaymentsRTDV", (
{ dialogCaption: 'Payment Details',
  loadingText: 'loading...',
  lblReferenceCaption: 'Receipt Number:',
  lblDateCaption: 'Payment Date:',
  lblProcessDateCaption: 'Process Date:',
  lblNameCaption: 'Name:',
  lblTypeCaption: 'Type:',
  lblStatusCaption: 'Status:',
  lblCurrencyCaption: 'Currency:',
  lblTenderTypeCaption: 'Tender Type:',
  lblTenderReferenceCaption: 'Tender Reference:',
  lblNetTotalCaption: 'Net Total:',
  lblDiscountsCaption: 'Discounts:',
  lblChargesCaption: 'Charges:',
  lblTaxesCaption: 'Taxes:',
  lblGrossTotalCaption: 'Payment Amount:',
  lblSourceCaption: 'Source:',
  lblTaxCodeCaption: 'Tax Code:',
  grdPayments_Reference: 'Receipt Number',
  grdPayments_Date: 'Payment Date',
  grdPayments_Type: 'Type',
  grdPayments_Status: 'Status',
  grdPayments_GrossTotal: 'Payment Amount',
  grdPayments_Currency: 'Currency',
  btnCloseCaption: 'Close' }
));
},
'Sage/MainView/IntegrationContract/nls/en-us/CustomerPaymentsRTDV':function(){
define('Sage/MainView/IntegrationContract/nls/en-us/CustomerPaymentsRTDV',{});
},
'Sage/UI/Filters/nls/en/FilterPanel':function(){
define("Sage/UI/Filters/nls/en/FilterPanel", {
    editText: 'Edit Filters',
    noneText: 'No filters selected',
    clearText: 'Clear All'
});
},
'Sage/UI/Filters/nls/en-us/FilterPanel':function(){
define('Sage/UI/Filters/nls/en-us/FilterPanel',{});
},
'Sage/TaskPane/nls/en/_BaseTaskPaneTasklet':function(){
define("Sage/TaskPane/nls/en/_BaseTaskPaneTasklet", (
{ selectRecordsTitle: 'Invalid Selection',
  selectRecords: 'Please select a record before continuing.',
  selectSingleRecord: 'Please select a single record before continuing.',
  noRecordsSelectedProcessAll: 'No records selected. The full group, ${0} record(s), will be processed.  Proceed?',
  invalidSelectionTitle: 'Invalid Selection',
  errorSelectionInfo: 'There was an error retrieving information about the selected records.',
  errorNoData: 'No data available.',
  yesButtonText: 'Yes',
  noButtonText: 'No',
  salesLogixPageTitle: 'Saleslogix',
  okButtonText: 'OK',
  cancelButtonText: 'Cancel' }
));
},
'Sage/TaskPane/nls/en-us/_BaseTaskPaneTasklet':function(){
define('Sage/TaskPane/nls/en-us/_BaseTaskPaneTasklet',{});
},
'Sage/MainView/ReportMgr/nls/en/ReportManagerFormatter':function(){
define("Sage/MainView/ReportMgr/nls/en/ReportManagerFormatter", (
{ txtTrue: 'True', txtFalse: 'False' }
));
},
'Sage/MainView/ReportMgr/nls/en-us/ReportManagerFormatter':function(){
define('Sage/MainView/ReportMgr/nls/en-us/ReportManagerFormatter',{});
},
'Sage/UI/nls/en/OwnerType':function(){
define("Sage/UI/nls/en/OwnerType", {
    teamText: 'Team',
    departmentText: 'Department',
    systemText: 'System',
    userText: 'User'
});
},
'Sage/UI/nls/en-us/OwnerType':function(){
define('Sage/UI/nls/en-us/OwnerType',{});
},
'Sage/MainView/JobMgr/templates/nls/en/JobDefinitionsListSummary':function(){
define("Sage/MainView/JobMgr/templates/nls/en/JobDefinitionsListSummary", (
{}
));
},
'Sage/MainView/JobMgr/templates/nls/en-us/JobDefinitionsListSummary':function(){
define('Sage/MainView/JobMgr/templates/nls/en-us/JobDefinitionsListSummary',{});
},
'Sage/TaskPane/nls/en/LeadTasksTasklet':function(){
define("Sage/TaskPane/nls/en/LeadTasksTasklet", (
{ updateLeadsTitle: 'Update Leads',
  deleteLeadsTitle: 'Delete Leads',
  deleteJobError: 'Sorry an error occurred during the delete lead job: ${0}',
  confirmDeleteLeads: 'Are you sure you want to delete the selected records?' }
));
},
'Sage/TaskPane/nls/en-us/LeadTasksTasklet':function(){
define('Sage/TaskPane/nls/en-us/LeadTasksTasklet',{});
},
'Sage/MainView/ReportMgr/templates/nls/en/ReportDetailSummary':function(){
define("Sage/MainView/ReportMgr/templates/nls/en/ReportDetailSummary", (
{ txtReportName_Caption: 'Name:',
  txtReportType_Caption: 'Type:',
  txtTable_Caption: 'Table:',
  txtCreateUser_Caption: 'Create User:',
  txtCreateDate_Caption: 'Create Date:',
  txtModifyUser_Caption: 'Modify User:',
  txtModifyDate_Caption: 'Modify Date:',
  txtUserField_Caption: 'User Field:',
  txtDateField_Caption: 'Date Field:',
  txtUseGroupFilter_Caption: 'Use Group Filter:',
  txtUseUserFilter_Caption: 'Use User Filter:',
  txtUseDateFilter_Caption: 'Use Date Filter:',
  txtFileName_Caption: 'File Name:' }
));
},
'Sage/MainView/ReportMgr/templates/nls/en-us/ReportDetailSummary':function(){
define('Sage/MainView/ReportMgr/templates/nls/en-us/ReportDetailSummary',{});
},
'Sage/MainView/ReportMgr/Crystal/nls/en/_ParameterEditorBase':function(){
﻿define("Sage/MainView/ReportMgr/Crystal/nls/en/_ParameterEditorBase", {
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
});
},
'Sage/MainView/ReportMgr/Crystal/nls/en-us/_ParameterEditorBase':function(){
define('Sage/MainView/ReportMgr/Crystal/nls/en-us/_ParameterEditorBase',{});
},
'Sage/MailMerge/nls/en/Service':function(){
define("Sage/MailMerge/nls/en/Service", (
{ selectContactCaption: 'Select a Contact',
  selectOppContactCaption: 'Select an Opportunity Contact',
  selectLeadCaption: 'Select a Lead',
  errorAttachmentUpdate: 'Unable to update the Attachment record.',
  errorHistoryUpdate: 'Unable to update the History record.',
  errorXmlHttp: 'There was an error processing the request for ${0}. ${1} (${2}).' }
));
},
'Sage/MailMerge/nls/en-us/Service':function(){
define('Sage/MailMerge/nls/en-us/Service',{});
},
'Sage/MainView/ActivityMgr/templates/nls/en/ConfirmationListSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/en/ConfirmationListSummary", (
{ txtPhone_Caption: 'Phone:',
  lnkOpportunity_Caption: 'Opportunity:',
  txtStartTime_Caption: 'Start Time:',
  lnkContactName_Caption: 'Contact:',
  lnkLeadName_Caption: 'Lead:',
  lnkTicket_Caption: 'Ticket:',
  txtLocation_Caption: 'Location:',
  txtLeader_Caption: 'Leader:',
  txtDuration_Caption: 'Duration:',
  lnkAccountName_Caption: 'Account:',
  lnkCompanyName_Caption: 'Company:',
  txtNotes_Caption: 'Notes:',
  btnComplete_Caption: 'Complete',
  txtFromUser_Caption: 'From:',
  btnDelete_Caption: 'Delete',
  btnDecline_Caption: 'Decline',
  btnAccept_Caption: 'Accept' }
));
},
'Sage/MainView/ActivityMgr/templates/nls/en-us/ConfirmationListSummary':function(){
define('Sage/MainView/ActivityMgr/templates/nls/en-us/ConfirmationListSummary',{});
},
'Sage/MainView/ActivityMgr/nls/en/SnoozeOptions':function(){
define("Sage/MainView/ActivityMgr/nls/en/SnoozeOptions", (
{ fiveMinText: '5 minutes',
  tenMinText: '10 minutes',
  fifteenMinText: '15 minutes',
  thirtyMinText: '30 minutes',
  oneHourText: '1 hour',
  twoHourText: '2 hours',
  fourHourText: '4 hours',
  eightHourText: '8 hours',
  oneDayText: '1 day',
  twoDayText: '2 days',
  threeDayText: '3 days',
  oneWeekText: '1 week',
  twoWeekText: '2 weeks',
  snoozeText: 'Snooze',
  snoozeByText: 'Snooze by:',
  snoozeAllText: 'Snooze All',
  snoozeTitle: 'Snooze Alarms' }
));
},
'Sage/MainView/ActivityMgr/nls/en-us/SnoozeOptions':function(){
define('Sage/MainView/ActivityMgr/nls/en-us/SnoozeOptions',{});
},
'Sage/QuickForms/Design/Editors/nls/en/OwnerAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/OwnerAdvancedPropertyEditor", (
{ titleText: 'Advanced',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  controlInfoText: 'Control Info',
  dataText: 'Data',
  controlIdText: 'Control Id:',
  controlIdTooltipText: 'Identifier for this control.',
  controlLabelPlacementText: 'Label Placement:',
  controlLabelPlacementTooltipText: 'Label position in relation to the control.',
  controlTypeText: 'Control Type:',
  controlTypeTooltipText: 'Saleslogix control type.',
  defaultDataBindingText: 'Data Bindings:',
  defaultDataBindingTooltipText: 'Data field(s) in the database used by this control.',
  enabledText: 'Enabled:',
  enabledTooltipText: 'Allows user to interact with this control.',
  requiredText: 'Required:',
  requiredTooltipText: 'Requires a value when saving data.',
  visibleText: 'Visible:',
  visibleTooltipText: 'Show or hide this control on the form.',
  labelPlacementText: { left: 'Left', right: 'Right', top: 'Top', none: 'None' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/OwnerAdvancedPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/OwnerAdvancedPropertyEditor',{});
},
'Sage/QuickForms/Design/Editors/nls/en/NonVisibleAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/NonVisibleAdvancedPropertyEditor", (
{ titleText: 'Advanced',
  controlInfoText: 'Control Info',
  controlIdText: 'Control Id:',
  controlIdTooltipText: 'Identifier for this control.',
  controlTypeText: 'Control Type:',
  controlTypeTooltipText: 'Saleslogix control type.' }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/NonVisibleAdvancedPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/NonVisibleAdvancedPropertyEditor',{});
},
'Sage/MainView/IntegrationContract/nls/en/InvoiceRTDV':function(){
define("Sage/MainView/IntegrationContract/nls/en/InvoiceRTDV", (
{ dialogCaption: 'Invoice Details',
  loadingText: 'loading...',
  lblInvoiceCaption: 'Invoice:',
  lblNetTotalCaption: 'Invoice Amount:',
  lblInvoiceDateCaption: 'Invoice Date:',
  lblInvoiceDiscountAmountCaption: 'Discount:',
  lblDueDateCaption: 'Due Date:',
  lblInvoiceDiscountPercentCaption: 'Discount Percent:',
  lblCustomerPOCaption: 'Customer PO:',
  lblCarrierTotalPriceCaption: 'Shipping:',
  lblSettlementDiscountPercentCaption: 'Settlement Discount Percent:',
  lblTaxCaption: 'Tax:',
  lblSettlementDiscountTermsCaption: 'Payment Terms:',
  lblNotesCaption: 'Comments:',
  lblOperatingCompanyCurrencyCaption: 'Operating Company Currency:',
  lblCostTotalCaption: 'Total Cost:',
  lblOperatingCompanyCurrencyExchangeRateDateCaption: 'Exchange Rate Date:',
  lblProfitTotalCaption: 'Profit Total:',
  lblOperatingCompanyCurrencyExchangeRateCaption: 'Exchange Rate:',
  lblPriceListCaption: 'Price List:',
  lblOCCurrencyCaption: 'Operating Company Currency:',
  lblCurrencyCaption: 'Currency:',
  lblSalesPersonCaption: 'Sales Person:',
  detailsTabTitle: 'Details',
  addressTabTitle: 'Addresses',
  invoiceLinesTabTitle: 'Invoice Lines',
  paymentsTabTitle: 'Payments',
  deliveriesTabTitle: 'Deliveries',
  grdInvoice_Name: 'Invoice #',
  grdInvoice_Date: 'Invoice Date',
  grdInvoice_Amount: 'Invoice Amount',
  grdInvoice_PO: 'Customer PO',
  grdInvoice_PaymentTerms: 'Payment Terms',
  grdInvoice_NetTotal: 'Net Total',
  grdInvoice_Tax: 'Tax',
  grdAddress_Name: 'Description',
  grdAddress_address1: 'Address 1',
  grdAddress_address2: 'Address 2',
  grdAddress_City: 'City',
  grdAddress_State: 'State',
  grdAddress_Zip: 'Postal Code',
  grdItems_ActualPrice: 'Actual Price',
  grdItems_ChargesTotal: 'Charges Total',
  grdItems_Commodity: 'Commodity',
  grdItems_CommodityDimension: 'Dimension',
  grdItems_CommodityVariant: 'Variant',
  grdItems_DiscountTotal: 'Discount Total',
  grdItems_GrossTotal: 'Gross Total',
  grdItems_InitialPrice: 'Initial Price',
  grdItems_Line: 'Line Number',
  grdItems_NetTotal: 'Net Total',
  grdItems_Quantity: 'Quantity',
  grdItems_Status: 'Status',
  grdItems_TaxTotal: 'Tax Total',
  grdItems_Type: 'Line Type',
  grdItems_UnitOfMeasure: 'Unit',
  grdPayments_Charges: 'Charges',
  grdPayments_Currency: 'Currency',
  grdPayments_Date: 'Date',
  grdPayments_Discounts: 'Discounts',
  grdPayments_GrossTotal: 'Gross Total',
  grdPayments_Name: 'Name',
  grdPayments_NetTotal: 'Net Total',
  grdPayments_ProcessDate: 'Date Processed',
  grdPayments_Status: 'Status',
  grdPayments_Tax: 'Taxes',
  grdPayments_TenderReference: 'Tender Reference',
  grdPayments_TenderType: 'Tender Type',
  grdPayments_Type: 'Type',
  grdDeliveries_ActualDate: 'Actual Date',
  grdDeliveries_ActualTime: 'Actual Time',
  grdDeliveries_Carrier: 'Carrier',
  grdDeliveries_CarrierReference: 'Carrier Reference',
  grdDeliveries_DeliveredQuantity: 'Delivered Quantity',
  grdDeliveries_ExceptionReason: 'Exception Reason',
  grdDeliveries_Method: 'Method',
  grdDeliveries_Number: 'Number',
  grdDeliveries_RequestedDate: 'Requested Date',
  grdDeliveries_RequestedQuantity: 'Requested Quantity',
  grdDeliveries_Status: 'Status',
  grdDeliveries_Type: 'Type',
  btnCloseCaption: 'Close' }
));
},
'Sage/MainView/IntegrationContract/nls/en-us/InvoiceRTDV':function(){
define('Sage/MainView/IntegrationContract/nls/en-us/InvoiceRTDV',{});
},
'Sage/UI/nls/en/SDataLookup':function(){
define("Sage/UI/nls/en/SDataLookup", {
    closeText: 'Close',
    cancelText: 'Cancel',
    loadingText: 'Loading...',
    noDataText: 'No records returned'
});
},
'Sage/UI/nls/en-us/SDataLookup':function(){
define('Sage/UI/nls/en-us/SDataLookup',{});
},
'Sage/QuickForms/Design/nls/en/RowDesigner':function(){
define("Sage/QuickForms/Design/nls/en/RowDesigner", (
{ displayNameText: 'Row' }
));
},
'Sage/QuickForms/Design/nls/en-us/RowDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/RowDesigner',{});
},
'Sage/Groups/nls/en/GroupLookup':function(){
﻿define("Sage/Groups/nls/en/GroupLookup", {
    txtNoRecordsFound: 'No records found.'
});
},
'Sage/Groups/nls/en-us/GroupLookup':function(){
define('Sage/Groups/nls/en-us/GroupLookup',{});
},
'Sage/TaskPane/nls/en/OpportunityTasksTasklet':function(){
define("Sage/TaskPane/nls/en/OpportunityTasksTasklet", (
{ updateOpportunitiesTitle: 'Update Opportunities',
  opportunityStatisticsTitle: 'Opportunity Statistics' }
));
},
'Sage/TaskPane/nls/en-us/OpportunityTasksTasklet':function(){
define('Sage/TaskPane/nls/en-us/OpportunityTasksTasklet',{});
},
'Sage/UI/Filters/nls/en/CheckBoxFilter':function(){
define("Sage/UI/Filters/nls/en/CheckBoxFilter", {
    loadingText: 'Loading...',
    moreText: 'Edit Items',
    clearText: 'Clear',
    emptyText: '(Blank)',
    nullText: '(Null)',
    ofText: '/'
});
},
'Sage/UI/Filters/nls/en-us/CheckBoxFilter':function(){
define('Sage/UI/Filters/nls/en-us/CheckBoxFilter',{});
},
'Sage/Utility/File/nls/en/LibraryDocument':function(){
define("Sage/Utility/File/nls/en/LibraryDocument", {
    failureNumber: 'Failure #${0}: ',
    percentComplete: 'Uploading, please wait...',
    uploadError: 'There was an error attempting to upload one or more files (failed: ${0}; succeeded: ${1}).',
    invalidContext: 'The file(s) cannot be uploaded outside of the Sales Library.',
    unknownError: 'An unknown error occurred uploading a file.'
});
},
'Sage/Utility/File/nls/en-us/LibraryDocument':function(){
define('Sage/Utility/File/nls/en-us/LibraryDocument',{});
},
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/en/SpeedSearchLookup':function(){
define("Sage/MainView/ActivityMgr/AttendeeLookup/nls/en/SpeedSearchLookup", (
{ dialogTitle: 'Lookup Participants',
  okText: 'Add Selected',
  cancelText: 'Close',
  noDataText: 'No records match the selection criteria',
  srchBtnCaption: 'Search',
  colName: 'Name',
  colType: 'Type',
  colAccount: 'Company/Account',
  colTitle: 'Title',
  colEmail: 'Email',
  colWorkPhone: 'Work Phone' }
));
},
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/en-us/SpeedSearchLookup':function(){
define('Sage/MainView/ActivityMgr/AttendeeLookup/nls/en-us/SpeedSearchLookup',{});
},
'Sage/UI/nls/en/ConditionManager':function(){
define("Sage/UI/nls/en/ConditionManager", {
    addimgalttext: 'Add Condition',
    hideimgalttext: 'Remove Condition',
    addrowlabel: 'Lookup by:',
    hiderowlabel: 'And:',
    srchBtnCaption: 'Search',
    errorOperatorRequiresValue: 'The operator requires a value',
    startingWith: 'Starting With',
    endsWith: 'Ends With',
    contains: 'Contains',
    equalTo: 'Equal to',
    notEqualTo: 'Not Equal to',
    equalOrLessThan: 'Equal or Less than',
    equalOrGreaterThan: 'Equal or Greater than',
    lessThan: 'Less than',
    greaterThan: 'Greater than'
});
},
'Sage/UI/nls/en-us/ConditionManager':function(){
define('Sage/UI/nls/en-us/ConditionManager',{});
},
'Sage/MainView/JobMgr/templates/nls/en/SchedulesListSummary':function(){
define("Sage/MainView/JobMgr/templates/nls/en/SchedulesListSummary", (
{}
));
},
'Sage/MainView/JobMgr/templates/nls/en-us/SchedulesListSummary':function(){
define('Sage/MainView/JobMgr/templates/nls/en-us/SchedulesListSummary',{});
},
'Sage/MainView/ActivityMgr/templates/nls/en/UserActivityListSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/en/UserActivityListSummary", (
{ txtPhone_Caption: 'Phone:',
  lnkOpportunity_Caption: 'Opportunity:',
  txtStartTime_Caption: 'Start Time:',
  lnkContactName_Caption: 'Contact:',
  lnkLeadName_Caption: 'Lead:',
  lnkTicket_Caption: 'Ticket:',
  txtLocation_Caption: 'Location:',
  txtLeader_Caption: 'Leader:',
  txtDuration_Caption: 'Duration:',
  lnkAccountName_Caption: 'Account:',
  lnkCompanyName_Caption: 'Company:',
  txtNotes_Caption: 'Notes:',
  btnComplete_Caption: 'Complete',
  lnkAttendeeCount_Caption: 'Participant Count:' }
));
},
'Sage/MainView/ActivityMgr/templates/nls/en-us/UserActivityListSummary':function(){
define('Sage/MainView/ActivityMgr/templates/nls/en-us/UserActivityListSummary',{});
},
'Sage/UI/Dashboard/nls/en/WidgetDefinition':function(){
define("Sage/UI/Dashboard/nls/en/WidgetDefinition", {
    defaultWidgetText: 'Edit Widget Settings',
    settingsText: 'Settings',
    viewGroupText: 'View Group',
    Bar_Chart: 'Bar Chart',
    Column_Chart: 'Column Chart',
    Group_List: 'Group List',
    Pie_Chart: 'Pie Chart',
    Funnel_Chart: 'Funnel Chart',
    Line_Chart: 'Line Chart',
    SData_Feed: 'SData Feed',
    Web_Feed: 'Web Feed',
    Website: 'Website',
    Default: 'Default',
    Links: 'Link',
    Recently_Viewed: 'Recently Viewed',
    Todays_Activities: 'Today\'s Activities',
    Today_s_Activities: 'Today\'s Activities',
    Welcome: 'Welcome',
    Closing_Opportunities: 'Closing Opportunities',
    Quick_Actions: 'Quick Actions',
    Do_You_Know___: 'Do You Know...',
    All_Leads: 'All Leads',
    My_Notes: 'My Notes',
    Open_Opportunities: 'Open Opportunities',
    My_Top_Opportunities: 'My Top Opportunities',
    My_Pipeline: 'My Pipeline',
    Recent_Lead_Creation_History: 'Recent Lead Creation History',
    My_Activity_trend: 'My Activity trend',
    My_Completed_Activities_by_Type: 'My Completed Activities by Type',
    Active_Campaigns: 'Active Campaigns',
    All_Open_Opportunities: 'All Open Opportunities',
    Top_Opportunities: 'Top Opportunities',
    Open_Defect_Distribution: 'Open Defect Distribution',
    My_Dashboard: 'My Dashboard',
    Sales: 'Sales',
    Group_List_Description: 'Displays a list of group records by entity. For example, a group of active campaigns.',
    Welcome_Description: 'Displays an introduction to Saleslogix with a link to the help topic Introducing Saleslogix for Web.',
    Line_Chart_Description: 'Displays data as a series of data points connected by a line. Useful when the data represents many groups or categories.',
    Bar_Chart_Description: 'Displays data as a set of horizontal bars. Useful for comparing several sets of data.',
    Column_Chart_Description: 'Displays data as a set of vertical bars grouped by category. Useful for showing data changes over a period of time or for illustrating comparisons among items.',
    Funnel_Chart_Description: 'Displays data as progressive proportions in a funnel shape. The data is represented as portions of 100%, and there are no axes.',
    Pie_Chart_Description: 'Displays data as proportions of the whole. Each value is calculated as a percentage of the total. This chart has no axes.',
    Recently_Viewed_Description: 'Displays links to recently viewed records with an icon that identifies the type. For example, Account or Contact.',
    Todays_Activities_Description: 'Displays links to your activities for today.',
    Links_Description: 'Displays links you create. For example, to a detail view in Saleslogix or to an external Web site.',
    SData_Feed_Description: 'Displays a web feed using SData (Sage Data) feeds. For example, a feed from your accounting integration or Saleslogix database.',
    Web_Feed_Description: 'Displays RSS or Atom Feed information.',
    Website_Description: 'Displays a website of your choice.'
});
},
'Sage/UI/Dashboard/nls/en-us/WidgetDefinition':function(){
define('Sage/UI/Dashboard/nls/en-us/WidgetDefinition',{});
},
'Sage/MainView/ActivityMgr/templates/nls/en/AllOpenListSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/en/AllOpenListSummary", (
{ txtPhone_Caption: 'Phone:',
  lnkOpportunity_Caption: 'Opportunity:',
  txtStartTime_Caption: 'Start Time:',
  lnkContactName_Caption: 'Contact:',
  lnkLeadName_Caption: 'Lead:',
  lnkTicket_Caption: 'Ticket:',
  txtLocation_Caption: 'Location:',
  txtLeader_Caption: 'Leader:',
  txtDuration_Caption: 'Duration:',
  lnkAccountName_Caption: 'Account:',
  lnkCompanyName_Caption: 'Company:',
  txtNotes_Caption: 'Notes:',
  btnComplete_Caption: 'Complete',
  lnkAttendeeCount_Caption: 'Participant Count:' }
));
},
'Sage/MainView/ActivityMgr/templates/nls/en-us/AllOpenListSummary':function(){
define('Sage/MainView/ActivityMgr/templates/nls/en-us/AllOpenListSummary',{});
},
'Sage/UI/nls/en/SearchConditionWidget':function(){
define("Sage/UI/nls/en/SearchConditionWidget", {
    trueText: 'True',
    falseText: 'False',
    networkText: 'Network',
    remoteText: 'Remote',
    webText: 'Web',
    webViewerText: 'Web Viewer',
    concurrentText: 'Concurrent',
    retiredText: 'Retired',
    templateText: 'Template',
    addonText: 'Addon',
    adminText: 'Admin',
    userText: 'User',
    teamText: 'Team',
    departmentText: 'Department',
    systemText: 'System'
});
},
'Sage/UI/nls/en-us/SearchConditionWidget':function(){
define('Sage/UI/nls/en-us/SearchConditionWidget',{});
},
'Sage/QuickForms/Design/Editors/nls/en/GenericBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/GenericBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Appearance',
  captionText: 'Caption:',
  captionTooltipText: 'The label to display on the form for this control.',
  captionAlignmentText: 'Caption Alignment:',
  captionAlignmentTooltipText: 'Justification of the label text.',
  alignmentText: { left: 'Left', center: 'Center', right: 'Right' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/GenericBasicPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/GenericBasicPropertyEditor',{});
},
'Sage/MainView/JobMgr/nls/en/JobManagerActions':function(){
define("Sage/MainView/JobMgr/nls/en/JobManagerActions", (
{ txtInterruptExecutionMessage: 'A signal has been sent to the job to cancel execution.',
  txtInterruptExecutionTitle: 'Cancel Job',
  txtInterruptExecutionConfirmationMessage: 'Are you sure you want to cancel execution of job ${0}?',
  txtYes: 'Yes',
  txtNo: 'No',
  completedJobMessage: 'The selected job has already been completed.',
  jobStatusComplete: 'Complete',
  error_NoRecordSelected: 'You must select a record before continuing.',
  confirm_ScheduleDeletion: 'Are you sure you want to delete the selected schedule?' }
));
},
'Sage/MainView/JobMgr/nls/en-us/JobManagerActions':function(){
define('Sage/MainView/JobMgr/nls/en-us/JobManagerActions',{});
},
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/en/ContactLookupConfig':function(){
define("Sage/MainView/ActivityMgr/AttendeeLookup/nls/en/ContactLookupConfig", (
{ contactText: 'Contact',
  accountText: 'Account',
  lookupContactText: 'Lookup Contact',
  nameText: 'Name',
  cityText: 'City',
  stateText: 'State',
  workphoneText: 'Work Phone',
  emailText: 'Email',
  dialogButtonText: 'Add Selected',
  cancelText: 'Close',
  colFirstName: 'First Name',
  colLastName: 'Last Name',
  colTitle: 'Title',
  colAccount: 'Account',
  colWorkPhone: 'Work Phone',
  colEmail: 'Email',
  dialogTitleText: 'Lookup Contacts'}
));
},
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/en-us/ContactLookupConfig':function(){
define('Sage/MainView/ActivityMgr/AttendeeLookup/nls/en-us/ContactLookupConfig',{});
},
'Sage/QuickForms/Design/nls/en/DataSourcePanel':function(){
define("Sage/QuickForms/Design/nls/en/DataSourcePanel", (
{ loadingText: 'Loading...' }
));
},
'Sage/QuickForms/Design/nls/en-us/DataSourcePanel':function(){
define('Sage/QuickForms/Design/nls/en-us/DataSourcePanel',{});
},
'Sage/MainView/ReportMgr/templates/nls/en/SchedulesListSummary':function(){
define("Sage/MainView/ReportMgr/templates/nls/en/SchedulesListSummary", (
{}
));
},
'Sage/MainView/ReportMgr/templates/nls/en-us/SchedulesListSummary':function(){
define('Sage/MainView/ReportMgr/templates/nls/en-us/SchedulesListSummary',{});
},
'Sage/Library/nls/en/Manager':function(){
define("Sage/Library/nls/en/Manager", (
{ AddFiles: 'Add Files',
  AddFolder: 'Add Folder',
  Confirm: 'Confirm',
  ConfirmDownload: 'The file has not been downloaded. Would you like to get it the next time you synchornize?',
  ConfirmDownloadReorder: 'The file has not been downloaded but has already been ordered. Would you like re-order the file to get it the next time you synchornize?',
  Created: 'Created',
  DeleteFolder: 'Delete Folder',
  DeleteSelectedFile: 'Delete Selected File',
  Description: 'Description',
  DirectoryInformationError: 'There was an unexpected error attempting to retreive document directory information.',
  DocumentInformationError: 'There was an unexpected error attempting to retreive document information.',
  EditFolder: 'Edit Folder Name',
  Expires: 'Expires',
  File: 'File',
  FileProperties: 'File Properties',
  Help: 'Help',
  InvalidRoot: 'Invalid root directory: "${0}" (${1}).',
  Library: 'Library',
  LibraryDataError: 'There was an unexpected error processing library directory data.',
  Never: 'Never',
  No: 'No',
  Revised: 'Revised',
  Size: 'Size',
  Yes: 'Yes' }
));
},
'Sage/Library/nls/en-us/Manager':function(){
define('Sage/Library/nls/en-us/Manager',{});
},
'Sage/UI/nls/en/GroupsTitlePaneConfigProvider':function(){
define("Sage/UI/nls/en/GroupsTitlePaneConfigProvider", {
    groupText: 'Groups',
    addGroupButtonTooltip: 'Add Group',
    groupButtonTooltip: 'Manage Groups',
    lookupText: 'Lookup',
    lookupResultsText: 'Lookup Results',
    groupColumnText: 'Group',
    visibleColumnText: 'Visible'
});
},
'Sage/UI/nls/en-us/GroupsTitlePaneConfigProvider':function(){
define('Sage/UI/nls/en-us/GroupsTitlePaneConfigProvider',{});
},
'Sage/QuickForms/Design/nls/en/NonVisibleControlContainer':function(){
define("Sage/QuickForms/Design/nls/en/NonVisibleControlContainer", (
{ headerText: 'Non-Visual Controls' }
));
},
'Sage/QuickForms/Design/nls/en-us/NonVisibleControlContainer':function(){
define('Sage/QuickForms/Design/nls/en-us/NonVisibleControlContainer',{});
},
'Sage/UI/Controls/nls/en/Name':function(){
define("Sage/UI/Controls/nls/en/Name", {
    okText: 'OK',
    cancelText: 'Cancel',
    dialogTitle: 'Edit Name',
    prefixText: 'Prefix:',
    nameFirstText: 'First:',
    nameMiddleText: 'Middle:',
    nameLastText: 'Last:',
    suffixText: 'Suffix:',
    buttonTooltip: 'Edit'
});
},
'Sage/UI/Controls/nls/en-us/Name':function(){
define('Sage/UI/Controls/nls/en-us/Name',{});
},
'Sage/MainView/JobMgr/nls/en/ExecutionsListPanelConfig':function(){
define("Sage/MainView/JobMgr/nls/en/ExecutionsListPanelConfig", (
{ loadingText: 'Loading...',
  colNameJobName: 'Type',
  colNameUser: 'User',
  colNamePhase: 'Phase',
  colNamePhaseDetail: 'Phase Detail',
  colNameProgress: 'Progress',
  colNameElapsed: 'Elapsed Time',
  colNameStatus: 'Status',
  colNameResult: 'Result' }
));
},
'Sage/MainView/JobMgr/nls/en-us/ExecutionsListPanelConfig':function(){
define('Sage/MainView/JobMgr/nls/en-us/ExecutionsListPanelConfig',{});
},
'Sage/QuickForms/Design/nls/en/PhoneControlDesigner':function(){
define("Sage/QuickForms/Design/nls/en/PhoneControlDesigner", (
{ displayNameText: 'Phone' }
));
},
'Sage/QuickForms/Design/nls/en-us/PhoneControlDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/PhoneControlDesigner',{});
},
'Sage/MainView/Lead/nls/en/UpdateLeads':function(){
define("Sage/MainView/Lead/nls/en/UpdateLeads", (
{ updateMultipleLeads_Caption: 'Update Multiple Leads',
  labelWidth: '100',
  btnCancel_Caption: 'Cancel',
  ok_Text: 'OK',
  update_To_Caption: 'To:',
  update_Property_Caption: 'Update:',
  updateProp_Owner: 'Owner',
  lookupOwnerText: 'Lookup Owner:',
  lookupDescriptionColText: 'Description',
  updateProp_AcctMgr: 'Account Manager',
  lookupActMgrText: 'Lookup Account Manager',
  lookupNameColText: 'Name',
  lookupTitleColText: 'Title',
  lookupDepartmentColText: 'Department',
  lookupRegionColText: 'Region',
  lookupTypeColText: 'Type',
  errorUnspecifiedValue: 'Please specify a value before continuing.',
  errorRequestingJobMgr: 'An error occurred requesting the job manager.',
  updateLeadsTitle: 'Update Leads' }
));
},
'Sage/MainView/Lead/nls/en-us/UpdateLeads':function(){
define('Sage/MainView/Lead/nls/en-us/UpdateLeads',{});
},
'Sage/Library/nls/en/FileHandler':function(){
define("Sage/Library/nls/en/FileHandler", (
{ AccessError: 'You do not have the role security required to execute this action.',
  Available: 'Available',
  Confirm: 'Confirm',
  DeleteFileCnfmFmt: 'Are you sure you want to delete the file "${0}"?',
  Delivered: 'Delivered: Not read',
  DeliveredRead: 'Delivered: Read',
  DocumentPropertiesError: 'There was an unexpected error attempting to retrieve the document properties.',
  DocumentPropertiesUpdateError: 'There was an unexpected error attempting to update document properties.',
  DocumentUpdateConflictError: 'The file has been updated by another user, please refresh and retry.',
  FileDeleteError: 'There was an unexpected error attempting to delete a file.',
  FileStatusError: 'There was an unexpected error attempting to update the file status.',
  LogRequestError: 'There was an unexpected failure attempting to log the document synchronization request.',
  No: 'No',
  NoAccessMessage: 'You do not have permission to add files to the Library. For more information contact your Saleslogix administrator.',
  Ordered: 'Ordered',
  PleaseSelectFile: 'Please select a file.',
  PleaseWait: 'Please wait',
  Revised: 'Revised',
  RevisionOrdered: 'Revision Ordered',
  UploadError: 'There was an error attempting to upload a file.',
  Unknown: 'Unknown',
  Yes: 'Yes' }
));
},
'Sage/Library/nls/en-us/FileHandler':function(){
define('Sage/Library/nls/en-us/FileHandler',{});
},
'Sage/UI/nls/en/ListPanel':function(){
define("Sage/UI/nls/en/ListPanel", {
    listText: 'List',
    summaryText: 'Summary',
    detailText: 'Detail',
    hideDetailText: 'Hide Detail',
    unsavedDataText: '*unsaved data',
    helpText: 'Help',
    refreshText: 'Refresh',
    displayingText: 'Displaying',
    ofText: 'of',
    overflowText: 'Your search returned a large number of results. Narrow your search by applying filters.'
});
},
'Sage/UI/nls/en-us/ListPanel':function(){
define('Sage/UI/nls/en-us/ListPanel',{});
},
'Sage/Utility/nls/en/Sql':function(){
define("Sage/Utility/nls/en/Sql", (
{ InvalidApostropheCount: 'The number of apostrophes in the SQL IN clause is invalid.' }
));
},
'Sage/Utility/nls/en-us/Sql':function(){
define('Sage/Utility/nls/en-us/Sql',{});
},
'Sage/UI/Filters/nls/en/EditFilters':function(){
define("Sage/UI/Filters/nls/en/EditFilters", {
    selectAllText: 'Select All',
    dialogTitle: 'Edit Filters',
    okText: 'OK',
    cancelText: 'Cancel'
});
},
'Sage/UI/Filters/nls/en-us/EditFilters':function(){
define('Sage/UI/Filters/nls/en-us/EditFilters',{});
},
'Sage/QuickForms/Design/Editors/nls/en/FormUsagesPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/FormUsagesPropertyEditor", (
{ titleText: 'Usage',
  portalText: 'Portal',
  viewText: 'View',
  modesText: 'Modes',
  descriptionText: 'Description' }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/FormUsagesPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/FormUsagesPropertyEditor',{});
},
'Sage/UI/Controls/nls/en/DurationSelect':function(){
define("Sage/UI/Controls/nls/en/DurationSelect", {
    minuteText: 'minute',
    minutesText: 'minutes',
    hourText: 'hour',
    hoursText: 'hours',
    dayText: 'day',
    daysText: 'days'
});
},
'Sage/UI/Controls/nls/en-us/DurationSelect':function(){
define('Sage/UI/Controls/nls/en-us/DurationSelect',{});
},
'Sage/UI/Alarms/nls/en/AlarmCountDown':function(){
define("Sage/UI/Alarms/nls/en/AlarmCountDown", {
    startsInText: 'Starts in',
    overduebyText: 'Overdue by',
    minuteText: 'minute',
    minutesText: 'minutes',
    hourText: 'hour',
    hoursText: 'hours',
    dayText: 'day',
    daysText: 'days',
    weekText: 'week',
    weeksText: 'weeks',
    monthText: 'month',
    monthsText: 'months',
    yearText: 'year',
    yearsText: 'years',
    startsNowText: 'Starts now'
});
},
'Sage/UI/Alarms/nls/en-us/AlarmCountDown':function(){
define('Sage/UI/Alarms/nls/en-us/AlarmCountDown',{});
},
'Sage/UI/nls/en/AttachmentList':function(){
define("Sage/UI/nls/en/AttachmentList", {
    attachmentText: 'Attachment',
    userText: 'User',
    modDateText: 'Modify Date/Time',
    dateRangeText: 'Modify Date Range',
    sizeText: 'Size',
    extensionText: 'File Extension',
    addFileText: 'Add File',
    addUrlText: 'Add URL',
    editText: 'Edit',
    helpText: 'Help',
    addGoogleText: 'Add Google Document',
    deleteText: 'Delete',
    request: 'Request File',
    delivered: 'Delivered',
    requested: 'Requested',
    available: 'Available'
});
},
'Sage/UI/nls/en-us/AttachmentList':function(){
define('Sage/UI/nls/en-us/AttachmentList',{});
},
'Sage/MailMerge/nls/en/Lookup':function(){
define("Sage/MailMerge/nls/en/Lookup", (
{ accountCaption: 'Account',
  companyCaption: 'Company',
  contactTitle: 'Select a Contact',
  emailCaption: 'E-mail',
  firstNameCaption: 'First Name',
  invalidOptionsText: 'The options parameter or options.onSelect is undefined or defined incorrectly.',
  lastNameCaption: 'Last Name',
  leadTitle: 'Select a Lead',
  mobileCaption: 'Mobile',
  opportunityCaption: 'Opportunity',
  workCaption: 'Work',
  okText: 'OK' }
));
},
'Sage/MailMerge/nls/en-us/Lookup':function(){
define('Sage/MailMerge/nls/en-us/Lookup',{});
},
'Sage/QuickForms/Design/Editors/nls/en/RowBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/RowBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Appearance',
  indexText: 'Index:',
  indexTooltipText: 'Number of the row or column, beginning with zero.' }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/RowBasicPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/RowBasicPropertyEditor',{});
},
'Sage/MainView/JobMgr/nls/en/RunJobDialog':function(){
define("Sage/MainView/JobMgr/nls/en/RunJobDialog", (
{ dlgRunJob_Title: 'Run/Schedule Job',
  txtJobName_Caption: 'Job Name',
  txtTriggerDescription_Caption: 'Description',
  cmbScheduleType_Caption: 'Schedule',
  cmdOK_Caption: 'OK',
  cmdCancel_Caption: 'Cancel',
  txtInvalidNumber: 'Invalid number.',
  contentPaneParameters_Caption: 'Parameters',
  txtRunNow: 'Run Now',
  txtScheduledExecution: 'Scheduled Execution',
  colName_Caption: 'Name',
  colValue_Caption: 'Value',
  colDescription_Caption: 'Description',
  txtInvalidParameterTitle: 'Invalid Parameter',
  txtInvalidParameterMessage: 'Invalid Parameter: ${0}' }
));
},
'Sage/MainView/JobMgr/nls/en-us/RunJobDialog':function(){
define('Sage/MainView/JobMgr/nls/en-us/RunJobDialog',{});
},
'Sage/QuickForms/Design/nls/en/CheckBoxControlDesigner':function(){
define("Sage/QuickForms/Design/nls/en/CheckBoxControlDesigner", (
{ displayNameText: 'CheckBox' }
));
},
'Sage/QuickForms/Design/nls/en-us/CheckBoxControlDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/CheckBoxControlDesigner',{});
},
'Sage/QuickForms/Design/nls/en/EditableGridControlDesigner':function(){
define("Sage/QuickForms/Design/nls/en/EditableGridControlDesigner", (
{ displayNameText: 'Editable Grid' }
));
},
'Sage/QuickForms/Design/nls/en-us/EditableGridControlDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/EditableGridControlDesigner',{});
},
'Sage/MainView/Options/nls/en/OptionsDialog':function(){
﻿define("Sage/MainView/Options/nls/en/OptionsDialog", (
{
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
));
},
'Sage/MainView/Options/nls/en-us/OptionsDialog':function(){
define('Sage/MainView/Options/nls/en-us/OptionsDialog',{});
},
'Sage/QuickForms/Design/nls/en/HiddenControlDesigner':function(){
define("Sage/QuickForms/Design/nls/en/HiddenControlDesigner", (
{ displayNameText: 'Hidden Text' }
));
},
'Sage/QuickForms/Design/nls/en-us/HiddenControlDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/HiddenControlDesigner',{});
},
'Sage/UI/Dashboard/nls/en/DashboardWidgetCell':function(){
define("Sage/UI/Dashboard/nls/en/DashboardWidgetCell", {
    closeTooltipText: 'Close',
    minimizeTooltipText: 'Minimize',
    settingsTooltipText: 'Settings'
});
},
'Sage/UI/Dashboard/nls/en-us/DashboardWidgetCell':function(){
define('Sage/UI/Dashboard/nls/en-us/DashboardWidgetCell',{});
},
'Sage/QuickForms/Design/Editors/nls/en/UserBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/UserBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  captionText: 'Caption:',
  captionTooltipText: 'The label to display on the form for this control.',
  captionAlignmentText: 'Caption Alignment:',
  captionAlignmentTooltipText: 'Justification of the label text.',
  isReadOnlyText: 'Read Only:',
  isReadOnlyTooltipText: 'Does not allow edits.',
  toolTipText: 'Tooltip:',
  toolTipTooltipText: 'Short help text about control.',
  alignmentText: { left: 'Left', center: 'Center', right: 'Right' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/UserBasicPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/UserBasicPropertyEditor',{});
},
'Sage/UI/nls/en/Dialogs':function(){
define("Sage/UI/nls/en/Dialogs", {
    yesText: 'Yes',
    noText: 'No',
    okText: 'OK',
    cancelText: 'Cancel'
});
},
'Sage/UI/nls/en-us/Dialogs':function(){
define('Sage/UI/nls/en-us/Dialogs',{});
},
'Sage/MainView/IntegrationContract/nls/en/SyncResultsHistory':function(){
define("Sage/MainView/IntegrationContract/nls/en/SyncResultsHistory", (
{ grdSyncHistory_StampDate: 'Date/Time',
  grdSyncHistory_Status: 'Status',
  grdSyncHistory_SyncNote: 'Sync Notes' }
));
},
'Sage/MainView/IntegrationContract/nls/en-us/SyncResultsHistory':function(){
define('Sage/MainView/IntegrationContract/nls/en-us/SyncResultsHistory',{});
},
'Sage/TaskPane/nls/en/SecuredActionTasklet':function(){
define("Sage/TaskPane/nls/en/SecuredActionTasklet", (
{ addToRoleTitle: 'Add to Role' }
));
},
'Sage/TaskPane/nls/en-us/SecuredActionTasklet':function(){
define('Sage/TaskPane/nls/en-us/SecuredActionTasklet',{});
},
'Sage/UI/Dashboard/nls/en/DashboardTabController':function(){
define("Sage/UI/Dashboard/nls/en/DashboardTabController", {
    newTabText: 'New Tab',
    addContentText: 'Add Content',
    editOptionsText: 'Edit Options',
    hideTabText: 'Hide Tab',
    closeText: 'Close',
    copyTabText: 'Copy Tab',
    showTabText: 'Show Tab',
    shareTabText: 'Share Tab',
    deleteTabText: 'Delete Tab',
    deleteTabConfirmText: 'Are you sure you want to delete this tab?',
    descriptionText: 'Description',
    everyoneText: 'Everyone',
    saveTabText: 'Save Tab',
    helpText: 'Help',
    addText: 'Add',
    invalidMessage: 'Invalid Character',
    invalidDuplicateMessage: 'Title must be unique.',
    deleteText: 'Delete',
    titleText: 'Title:',
    chooseTemplateText: 'Choose the template you want to use:',
    oneColumnText: 'One column',
    twoColumnText: 'Two columns split',
    fatLeftText: 'Two column larger left',
    fatRightText: 'Two column larger right',
    makeDefaultText: 'Make default',
    releaseFetchErrorText: 'Error fetching release list.',
    releaseDeleteNoneSelected: 'No items selected.',
    releasedToText: 'Released To:',
    typeText: 'Type',
    addLookup: 'Add',
    okButton: 'OK',
    errorText: 'Error',
    warningText: 'Warning',
    permissionErrorText: 'Error: User does not have the right to perform this action.',
    permissionErrorPerformCopyText: 'Would you like to create a personal copy of the page?',
    yesText: 'Yes',
    noText: 'No'
});
},
'Sage/UI/Dashboard/nls/en-us/DashboardTabController':function(){
define('Sage/UI/Dashboard/nls/en-us/DashboardTabController',{});
},
'Sage/MainView/IntegrationContract/nls/en/SalesOrderRTDV':function(){
define("Sage/MainView/IntegrationContract/nls/en/SalesOrderRTDV", (
{ dialogCaption: 'Sales Order Details',
  loadingText: 'loading...',
  lblSalesOrderCaption: 'Sales Order:',
  lblStatusCaption: 'Status:',
  lblGrossTotalCaption: 'Order Amount:',
  lblOrderDateCaption: 'Order Date:',
  lblTaxTotalCaption: 'Tax Total:',
  lblHoldStatusCaption: 'Hold Status:',
  lblCurrencyCaption: 'Currency:',
  lblTypeCaption: 'Type:',
  lblCostTotalCaption: 'Total Cost:',
  lblPONumberCaption: 'PO Number:',
  lblProfitTotalCaption: 'Total Profit:',
  lblQuotationCaption: 'Quotation:',
  lblInvoiceStatusCaption: 'Invoice Status:',
  lblContactCaption: 'Contact:',
  lblDeliveryDateCaption: 'Delivery Date:',
  lblDueDateCaption: 'Due Date:',
  lblPriceListCaption: 'Price List:',
  lblCarrierCaption: 'Carrier:',
  lblNetTotalCaption: 'Net Total:',
  lblAllocationStatusCaption: 'Allocation Status:',
  lblDiscountTotalCaption: 'Discount Total:',
  lblDeliveryStatusCaption: 'Delivery Status:',
  lblChargesTotalCaption: 'Charges Total:',
  detailsTabTitle: 'Details',
  salesPersonsTabTitle: 'Sales Persons',
  addressTabTitle: 'Addresses',
  salesOrderLinesTabTitle: 'Sales Order Lines',
  paymentsTabTitle: 'Payments',
  deliveriesTabTitle: 'Deliveries',
  grdSalesOrder_Edit: 'Edit',
  grdSalesOrder_OrderNumber: 'Order Number',
  grdSalesOrder_OrderDate: 'Order Date',
  grdSalesOrder_Status: 'Status',
  grdSalesOrder_HoldStatus: 'Hold Status',
  grdSalesOrder_Type: 'Type',
  grdSalesOrder_PO: 'PO Number',
  grdSalesOrder_NetTotal: 'Net Total',
  grdSalesOrder_DiscountTotal: 'Discount Total',
  grdSalesOrder_ChargesTotal: 'Charges Total',
  grdSalesOrder_TaxTotal: 'Tax Total',
  grdSalesOrder_GrossTotal: 'Gross Total',
  grdSalesOrder_Currency: 'Currency',
  grdSalesPersons_Name: 'Name',
  grdSalesPersons_Type: 'Type',
  grdSalesPersons_Extension: 'Extension',
  grdSalesPersons_Relationship: 'Relationship',
  grdAddress_Name: 'Name',
  grdAddress_Address1: 'Address 1',
  grdAddress_Address2: 'Address 2',
  grdAddress_City: 'City',
  grdAddress_State: 'State',
  grdAddress_Zip: 'Zip',
  grdItems_Line: 'Line Number',
  grdItems_Type: 'Type',
  grdItems_Commodity: 'Commodity',
  grdItems_CommodityVariant: 'Variant',
  grdItems_CommodityDimension: 'Dimension',
  grdItems_UnitOfMeasure: 'Unit',
  grdItems_Location: 'Location',
  grdItems_PriceList: 'Price List',
  grdItems_Quantity: 'Quantity',
  grdItems_InitialPrice: 'Initial Price',
  grdItems_ActualPrice: 'Actual Price',
  grdItems_NetTotal: 'Net Total',
  grdItems_ChargesTotal: 'Charges Total',
  grdItems_DiscountTotal: 'Discount Total',
  grdItems_TaxTotal: 'Tax Total',
  grdItems_GrossTotal: 'Gross Total',
  grdPayments_Date: 'Payment Date',
  grdPayments_Name: 'Name',
  grdPayments_Type: 'Type',
  grdPayments_Status: 'Status',
  grdPayments_NetTotal: 'Net Total',
  grdPayments_Discounts: 'Discounts',
  grdPayments_Charges: 'Charges',
  grdPayments_Tax: 'Tax',
  grdPayments_GrossTotal: 'Gross Total',
  grdPayments_Currency: 'Currency',
  grdPayments_TenderType: 'Tender Type',
  grdPayments_TenderReference: 'Tender Reference',
  grdPayments_ProcessDate: 'Process Date',
  grdDeliveries_Number: 'Number',
  grdDeliveries_Type: 'Type',
  grdDeliveries_Status: 'Status',
  grdDeliveries_RequestedDate: 'Requested Date',
  grdDeliveries_ActualDate: 'Actual Date',
  grdDeliveries_ActualTime: 'Actual Time',
  grdDeliveries_RequestedQuantity: 'Requested Quantity',
  grdDeliveries_DeliveredQuantity: 'Delivered Quantity',
  grdDeliveries_Method: 'Method',
  grdDeliveries_Carrier: 'Carrier',
  grdDeliveries_CarrierReference: 'Carrier Reference',
  grdDeliveries_ExceptionReason: 'Exception Reason',
  errorERPRequest: 'An error occurred opening accounting systems sales order detail view. ',
  errorERPRequestDetails: '${0}, ${1} Request: ${2}',
  btnCloseCaption: 'Close' }
));
},
'Sage/MainView/IntegrationContract/nls/en-us/SalesOrderRTDV':function(){
define('Sage/MainView/IntegrationContract/nls/en-us/SalesOrderRTDV',{});
},
'Sage/QuickForms/Design/nls/en/UserControlDesigner':function(){
define("Sage/QuickForms/Design/nls/en/UserControlDesigner", (
{ displayNameText: 'User' }
));
},
'Sage/QuickForms/Design/nls/en-us/UserControlDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/UserControlDesigner',{});
},
'Sage/Groups/nls/en/GroupNavigator':function(){
define("Sage/Groups/nls/en/GroupNavigator", (
{ firstText: 'Move First',
  previousText: 'Move Previous',
  nextText: 'Move Next',
  lastText: 'Move Last',
  listText: 'List View',
  noRecordsText: 'No Records',
  labelFmtText: '${0} of ${1}' }
));
},
'Sage/Groups/nls/en-us/GroupNavigator':function(){
define('Sage/Groups/nls/en-us/GroupNavigator',{});
},
'Sage/Utility/File/nls/en/AddURLAttachment':function(){
define("Sage/Utility/File/nls/en/AddURLAttachment", {
    descriptionText: 'Description',
    urlText: 'URL',
    titleText: 'Add URL Attachment',
    okText: 'OK',
    cancelText: 'Cancel',
    requestFailedMsg: 'The requested operation could not be completed, please try again later.',
    urlBlankMsg: 'The URL or description property cannot be blank.'
});
},
'Sage/Utility/File/nls/en-us/AddURLAttachment':function(){
define('Sage/Utility/File/nls/en-us/AddURLAttachment',{});
},
'Sage/UI/Filters/nls/en/EditFilterItems':function(){
define("Sage/UI/Filters/nls/en/EditFilterItems", {
    selectAllText: 'Select All',
    findItemText: 'Find Item:',
    findText: 'Find',
    clearText: 'Clear',
    dialogTitle: 'Edit Filter Items',
    okText: 'OK',
    cancelText: 'Cancel'
});
},
'Sage/UI/Filters/nls/en-us/EditFilterItems':function(){
define('Sage/UI/Filters/nls/en-us/EditFilterItems',{});
},
'Sage/MainView/ReportMgr/Crystal/nls/en/CrystalReportsFormatter':function(){
define("Sage/MainView/ReportMgr/Crystal/nls/en/CrystalReportsFormatter", (
{ txtEdit: 'Edit',
  txtDelete: 'Delete',
  txtRangeValue: '${0} to ${1}' }
));
},
'Sage/MainView/ReportMgr/Crystal/nls/en-us/CrystalReportsFormatter':function(){
define('Sage/MainView/ReportMgr/Crystal/nls/en-us/CrystalReportsFormatter',{});
},
'Sage/Utility/File/nls/en/DragDropWatcher':function(){
define("Sage/Utility/File/nls/en/DragDropWatcher", {
    query0: 'The feature you are requesting requires the Saleslogix Desktop <br> Integration Module.',
    query1: 'Find out more...',
    query2: 'Would you like to install this feature now?',
    query3: 'Note: This module can be installed at any time from the logon or options pages.'
});
},
'Sage/Utility/File/nls/en-us/DragDropWatcher':function(){
define('Sage/Utility/File/nls/en-us/DragDropWatcher',{});
},
'Sage/QuickForms/Design/nls/en/DesignSurface':function(){
define("Sage/QuickForms/Design/nls/en/DesignSurface", (
{ bisectionErrorText: 'The placement will cause another control to be bisected.',
  rowBoundsErrorText: 'The chosen row is out of bounds.',
  columnBoundsErrorText: 'The chosen column is out of bounds.',
  rowSpanBoundsErrorText: 'The chosen row span is out of bounds.',
  columnSpanBoundsErrorText: 'The chosen column span is out of bounds.',
  occupiedErrorText: 'There is not enough empty space for the chosen size.' }
));
},
'Sage/QuickForms/Design/nls/en-us/DesignSurface':function(){
define('Sage/QuickForms/Design/nls/en-us/DesignSurface',{});
},
'Sage/MainView/ActivityMgr/nls/en/ConfirmListPanelConfig':function(){
define("Sage/MainView/ActivityMgr/nls/en/ConfirmListPanelConfig", (
{ colNameType: 'Activity Type',
  colNameNotification: 'Notification',
  colNameStartDate: 'Start Date',
  colNameDuration: 'Duration',
  colNameRegarding: 'Regarding',
  colNameFromUser: 'From',
  colNameToUser: 'To User' }
));
},
'Sage/MainView/ActivityMgr/nls/en-us/ConfirmListPanelConfig':function(){
define('Sage/MainView/ActivityMgr/nls/en-us/ConfirmListPanelConfig',{});
},
'Sage/QuickForms/Design/Editors/nls/en/FormAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/FormAdvancedPropertyEditor", (
{ titleText: 'Advanced',
  generalText: 'General',
  useEntityNameAsTitleText: 'Use Entity Name As Title:',
  useEntityNameAsTitleTooltipText: 'Use name of current entity in form title.' }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/FormAdvancedPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/FormAdvancedPropertyEditor',{});
},
'Sage/MainView/ActivityMgr/nls/en/EventListPanelConfig':function(){
define("Sage/MainView/ActivityMgr/nls/en/EventListPanelConfig", (
{ colNameType: 'Type',
  colNameStartDate: 'Start Date',
  colNameEndDate: 'End Date',
  colNameDescription: 'Description',
  colNameUser: 'User',
  colNameLocation: 'Location' }
));
},
'Sage/MainView/ActivityMgr/nls/en-us/EventListPanelConfig':function(){
define('Sage/MainView/ActivityMgr/nls/en-us/EventListPanelConfig',{});
},
'Sage/Extensions/Activity/ListPanelOverrides/nls/en/AllOpenListPanelConfig':function(){
define("Sage/Extensions/Activity/ListPanelOverrides/nls/en/AllOpenListPanelConfig", (
{ colNameAssociationCount: 'Participant Count' }
));
},
'Sage/Extensions/Activity/ListPanelOverrides/nls/en-us/AllOpenListPanelConfig':function(){
define('Sage/Extensions/Activity/ListPanelOverrides/nls/en-us/AllOpenListPanelConfig',{});
},
'Sage/MainView/nls/en/FormManager':function(){
define("Sage/MainView/nls/en/FormManager", (
{ nameText: 'Name',
  entityText: 'Entity',
  layoutText: 'Layout',
  titleFmtString: 'Form Designer - ${0}',
  pageTitle: 'Saleslogix - Form Designer' }
));
},
'Sage/MainView/nls/en-us/FormManager':function(){
define('Sage/MainView/nls/en-us/FormManager',{});
},
'Sage/UI/nls/en/ActivityScheduler':function(){
define("Sage/UI/nls/en/ActivityScheduler", {
    tooltipTime: 'Time',
    tooltipContactName: 'Contact',
    tooltipAccountName: 'Account',
    tooltipCompanyName: 'Company',
    tooltipLeadName: 'Lead',
    tooltipPhoneNumber: 'Phone',
    tooltipRegarding: 'Regarding',
    tooltipPriority: 'Priority',
    tooltipNotes: 'Notes',
    tooltipType: 'Type',
    tooltipDayType: 'Day Type',
    tooltipStartDate: 'Start Date',
    tooltipEndDate: 'End Date',
    tooltipLocation: 'Location',
    tooltipDescription: 'Description',
    completedText: '(Completed)',
    tooltipMoreActivities: 'Click for more activities',
    scheduler_dates:
    {
        month_full:
        [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ],
        month_short:
        [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        day_full:
        [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],
        day_short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    scheduler_labels:
    {
        dhx_cal_today_button: 'Today',
        day_tab: 'Day',
        week_tab: 'Week',
        workweek_tab: 'Work week',
        month_tab: 'Month',
        new_event: 'New event',
        icon_save: 'Save',
        icon_cancel: 'Cancel',
        icon_details: 'Details',
        icon_edit: 'Edit',
        icon_delete: 'Delete',
        confirm_closing: '',
        confirm_deleting: 'Event will be deleted permanently, are you sure?',
        section_description: 'Description',
        section_time: 'Time period',
        full_day: 'Full day',
        confirm_recurring: 'Do you want to edit the whole set of repeated events?',
        section_recurring: 'Repeat event',
        button_recurring: 'Disabled',
        button_recurring_open: 'Enabled',
        agenda_tab: 'Agenda',
        date: 'Date',
        description: 'Description',
        year_tab: 'Year',
        week_agenda_tab: 'Agenda'
    }
});
},
'Sage/UI/nls/en-us/ActivityScheduler':function(){
define('Sage/UI/nls/en-us/ActivityScheduler',{});
},
'Sage/MainView/nls/en/SecurityManager':function(){
define("Sage/MainView/nls/en/SecurityManager", (
{ accessText: 'Access',
  columnText: 'Column',
  entityText: 'Entity',
  noAccessText: 'No Access',
  profilesText: 'Profiles',
  propertyText: 'Property',
  securityManagerText: 'Security Manager',
  readOnlyText: 'Read Only',
  readWriteText: 'Read Write',
  resetText: 'Reset',
  saveText: 'Save',
  tableText: 'Table' }
));
},
'Sage/MainView/nls/en-us/SecurityManager':function(){
define('Sage/MainView/nls/en-us/SecurityManager',{});
},
'Sage/TaskPane/nls/en/ActivityTaskConfigurationProvider':function(){
define("Sage/TaskPane/nls/en/ActivityTaskConfigurationProvider", (
{ scheduleText: 'Schedule',
  eventText: 'Event',
  phoneCallText: 'Phone Call',
  toDoText: 'To-Do',
  meetingText: 'Meeting',
  personalActivityText: 'Personal Activity',
  deleteConfirmationText: 'Delete Confirmation',
  acceptConfirmationText: 'Accept Confirmation',
  declineConfirmationText: 'Decline Confirmation',
  completeActivityText: 'Complete Activity',
  deleteActivityText: 'Delete Activity',
  deleteEventText: 'Delete Event',
  scheduleEventText: 'Schedule Event',
  scheduleRequestText: 'Schedule Request',
  deleteRequestText: 'Delete Request',
  recordsSelectedText: 'record(s) selected',
  clearText: 'Clear' }
));
},
'Sage/TaskPane/nls/en-us/ActivityTaskConfigurationProvider':function(){
define('Sage/TaskPane/nls/en-us/ActivityTaskConfigurationProvider',{});
},
'Sage/UI/Controls/nls/en/EntityInfoToolTip':function(){
define("Sage/UI/Controls/nls/en/EntityInfoToolTip", {
    errorText: 'Information not found.',
    loadingText: 'Loading...',
    noInfoText: 'No information to show.',
    mainText: 'Main:',
    faxText: 'Fax:',
    tollFreeText: 'Toll Free:',
    urlText: 'Web URL:',
    workText: 'Work:',
    mobileText: 'Mobile:',
    emailText: 'Email:',
    contactNameText: 'Name:',
    phoneText: 'Phone:',
    accountText: 'Account:'
});
},
'Sage/UI/Controls/nls/en-us/EntityInfoToolTip':function(){
define('Sage/UI/Controls/nls/en-us/EntityInfoToolTip',{});
},
'Sage/MainView/ActivityMgr/nls/en/ActivityGroupContextService':function(){
define("Sage/MainView/ActivityMgr/nls/en/ActivityGroupContextService", (
{ activityTabDisplayName: 'My Activities',
  litTabDisplayName: 'Literature',
  eventTabDisplayName: 'Events',
  confirmTabDisplayName: 'Confirmations',
  pastDueTabDisplayName: 'Past Due',
  alarmTabDisplayName: 'Alarms',
  allOpenTabDisplayName: 'All Open' }
));
},
'Sage/MainView/ActivityMgr/nls/en-us/ActivityGroupContextService':function(){
define('Sage/MainView/ActivityMgr/nls/en-us/ActivityGroupContextService',{});
},
'Sage/MainView/ActivityMgr/templates/nls/en/AllOpenDetailSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/en/AllOpenDetailSummary", (
{ txtPhone_Caption: 'Phone:',
  lnkOpportunityName_Caption: 'Opportunity:',
  txtStartTime_Caption: 'Start Time:',
  lnkContactName_Caption: 'Contact:',
  lnkLeadName_Caption: 'Lead:',
  lnkTicketNumber_Caption: 'Ticket:',
  txtLocation_Caption: 'Location:',
  txtLeader_Caption: 'Leader:',
  txtDuration_Caption: 'Duration:',
  lnkAccountName_Caption: 'Account:',
  lnkCompanyName_Caption: 'Company:',
  txtNotes_Caption: 'Notes:',
  btnComplete_Caption: 'Complete',
  txtAttendeeCount_Caption: 'Participant Count:' }
));
},
'Sage/MainView/ActivityMgr/templates/nls/en-us/AllOpenDetailSummary':function(){
define('Sage/MainView/ActivityMgr/templates/nls/en-us/AllOpenDetailSummary',{});
},
'Sage/MainView/ReportMgr/templates/nls/en/ReportsListSummary':function(){
define("Sage/MainView/ReportMgr/templates/nls/en/ReportsListSummary", (
{}
));
},
'Sage/MainView/ReportMgr/templates/nls/en-us/ReportsListSummary':function(){
define('Sage/MainView/ReportMgr/templates/nls/en-us/ReportsListSummary',{});
},
'Sage/MainView/ReportMgr/Common/nls/en/ExportOptionsDialog':function(){
define("Sage/MainView/ReportMgr/Common/nls/en/ExportOptionsDialog", (
{ txtDialogTitle: 'Export Options',
  txtDialogTitleScheduling: 'Export And Scheduling Options',
  cmdBack_Caption: '< Back',
  cmdNext_Caption: 'Next >',
  cmdCancel_Caption: 'Cancel',
  txtName: 'Name',
  txtSelectUser: 'Select User',
  txtOK: 'OK',
  txtOutputFormat_Caption: 'Format',
  txtRunAs_Caption: 'Run As',
  txtScheduleDescription_Caption: 'Description' }
));
},
'Sage/MainView/ReportMgr/Common/nls/en-us/ExportOptionsDialog':function(){
define('Sage/MainView/ReportMgr/Common/nls/en-us/ExportOptionsDialog',{});
},
'Sage/MainView/ReportMgr/templates/nls/en/ScheduleDetailSummary':function(){
define("Sage/MainView/ReportMgr/templates/nls/en/ScheduleDetailSummary", {
    txtScheduleName_Caption: 'Job Name:',
    txtDescription_Caption: 'Description:',
    txtRunAsUser_Caption: 'Run As:',
    txtScheduledBy_Caption: 'Scheduled By:',
    txtOutputFormat_Caption: 'Output Format:',
    txtFrequency_Caption: 'Frequency:',
    txtUser_Caption: 'Author:',
    txtLastExecutionDate_Caption: 'Last Run:',
    txtExecutionCount_Caption: 'Execution Count:',
    txtReportName_Caption: "Report:"
});
},
'Sage/MainView/ReportMgr/templates/nls/en-us/ScheduleDetailSummary':function(){
define('Sage/MainView/ReportMgr/templates/nls/en-us/ScheduleDetailSummary',{});
},
'Sage/MainView/Opportunity/nls/en/UpdateOpportunities':function(){
define("Sage/MainView/Opportunity/nls/en/UpdateOpportunities", (
{ addToForecast_No: 'No',
  addToForecast_Yes: 'Yes',
  btnCancel_Caption: 'Cancel',
  btnOK_Caption: 'OK',
  estimatedClose_Days: 'days',
  estimatedClose_MoveOut: 'Move',
  estimatedClose_To: 'To',
  moveEstCloseDate_Backward: 'Backward',
  moveEstCloseDate_Forward: 'Forward',
  update_To_Caption: 'To:',
  update_Property_Caption: 'Update:',
  updateMultipleOpps_Caption: 'Update Opportunities',
  updateProp_AcctMgr: 'Account Manager',
  updateProp_Comments: 'Comments',
  updateProp_EstClose: 'Estimated Close',
  updateProp_Forecast: 'Add To Forecast',
  updateProp_Probability: 'Close Probability %',
  lookupActMgrText: 'Lookup Account Manager',
  lookupNameColText: 'Name',
  lookupTitleColText: 'Title',
  lookupDepartmentColText: 'Department',
  lookupRegionColText: 'Region',
  lookupTypeColText: 'Type',
  errorUnspecifiedValue: 'Please specify a value before continuing.',
  errorRequestingJobMgr: 'An error occurred performing update: ${0}' }
));
},
'Sage/MainView/Opportunity/nls/en-us/UpdateOpportunities':function(){
define('Sage/MainView/Opportunity/nls/en-us/UpdateOpportunities',{});
},
'Sage/UI/nls/en/EditCalendarUsers':function(){
define("Sage/UI/nls/en/EditCalendarUsers", {
    selectAllText: 'Select All',
    findItemText: 'Find User:',
    findText: 'Find',
    clearText: 'Clear',
    dialogTitle: 'Edit Calendar Users',
    okText: 'OK',
    cancelText: 'Cancel',
    maxUsersErrorMessage: 'Sorry, you cannot select more than ${0} users (including your own).  Clear one of the currently selected users and try again.',
    updateErrorMessage: 'Error updating calendar users'
});
},
'Sage/UI/nls/en-us/EditCalendarUsers':function(){
define('Sage/UI/nls/en-us/EditCalendarUsers',{});
},
'Sage/MainView/ReportMgr/Crystal/nls/en/CrystalReportParametersDialog':function(){
define("Sage/MainView/ReportMgr/Crystal/nls/en/CrystalReportParametersDialog", (
{ txtDialogTitle: 'Enter Values',
  cmdBack_Caption: '< Back',
  cmdNext_Caption: 'Next >',
  cmdCancel_Caption: 'Cancel' }
));
},
'Sage/MainView/ReportMgr/Crystal/nls/en-us/CrystalReportParametersDialog':function(){
define('Sage/MainView/ReportMgr/Crystal/nls/en-us/CrystalReportParametersDialog',{});
},
'Sage/QuickForms/Design/nls/en/DateTimePickerControlDesigner':function(){
define("Sage/QuickForms/Design/nls/en/DateTimePickerControlDesigner", (
{ displayNameText: 'DateTime Picker' }
));
},
'Sage/QuickForms/Design/nls/en-us/DateTimePickerControlDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/DateTimePickerControlDesigner',{});
},
'Sage/UI/Controls/nls/en/HelpMenu':function(){
define("Sage/UI/Controls/nls/en/HelpMenu", {
    helpText: 'Help',
    aboutText: 'About',
    webClientHelpText: 'Web Client Help',
    gettingStartedText: 'Getting Started Guide',
    quickReferenceText: 'Quick Reference Card'
});
},
'Sage/UI/Controls/nls/en-us/HelpMenu':function(){
define('Sage/UI/Controls/nls/en-us/HelpMenu',{});
},
'Sage/QuickForms/Design/Editors/nls/en/LayoutPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/LayoutPropertyEditor", (
{ titleText: 'Layout',
  positionText: 'Position',
  sizeText: 'Size',
  rowText: 'Row:',
  rowTooltipText: 'Row number of the control.',
  columnText: 'Column:',
  columnTooltipText: 'Column number of the control.',
  rowSpanText: 'Row Span:',
  rowSpanTooltipText: 'Number of cells the control occupies vertically.',
  columnSpanText: 'Column Span:',
  columnSpanTooltipText: 'Number of cells the control occupies horizontally.' }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/LayoutPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/LayoutPropertyEditor',{});
},
'Sage/TaskPane/nls/en/UserTasklet':function(){
define("Sage/TaskPane/nls/en/UserTasklet", (
{ addToRoleTitle: 'Add to Role',
  resetUsersTitle: 'Reset Users',
  associateContactTitle: 'Associate with Contact',
  disAssociateContactTitle: 'Disassociate from Contact',
  disAssociateDialogTitle: 'Disassociate from a Contact',
  confirmDisAssociate: 'Are you sure you want to disassociate the ${0} selected user from an associated contact?',
  confirmDisAssociateMultiple: 'Are you sure you want to disassociate the ${0} selected users from any associated contacts?',
  associationExistsMessage: 'The user you selected is already associated to a contact. To associate this user to a different contact, you must first disassociate the user and contact.',
  multipleSelectionErrorMessage: 'You can only perform this task for 1 user at a time. \n Please select a single user and select the task again.',
  noSelectionErrorMessage: 'You need to select at least one user to disassociate. \n Please select one or more user(s) and select the task again.',
  singleSelectionErrorMessage: 'You need to select a user to disassociate. \n Please select a single user and select the task again.' }
));
},
'Sage/TaskPane/nls/en-us/UserTasklet':function(){
define('Sage/TaskPane/nls/en-us/UserTasklet',{});
},
'Sage/UI/Alarms/nls/en/ActivityAlarm':function(){
define("Sage/UI/Alarms/nls/en/ActivityAlarm", {
    noSubjectText: 'No Subject',
    contactText: 'Contact',
    accountText: 'Account',
    opportunityText: 'Opportunity',
    leadText: 'Lead',
    companyText: 'Company',
    recurringText: 'Recurring',
    ticketText: 'Ticket',
    leaderText: 'Leader',
    locationText: 'Location'
});
},
'Sage/UI/Alarms/nls/en-us/ActivityAlarm':function(){
define('Sage/UI/Alarms/nls/en-us/ActivityAlarm',{});
},
'Sage/MainView/Opportunity/nls/en/OpportunityStatistics':function(){
define("Sage/MainView/Opportunity/nls/en/OpportunityStatistics", (
{ opportunityStatistics_Caption: 'Opportunity Statistics',
  loadingMessge: 'Loading...',
  opportunityCount: '# of Opportunities',
  salesPotentialTotal: 'Sales Potential Total (Average)',
  weightedPotentialTotal: 'Weighted Potential Total (Average)',
  averageCloseProbability: 'Average Close Probability',
  actualAmountTotal: 'Actual Amount Total (Average)',
  averageDaysOpen: 'Average # of Days Open',
  rangeEstClose: 'Range of Est. Close (Min - Max)',
  btnClose_Caption: 'Close',
  errorRequestingStatistics: 'Sorry an error occurred attempting to request opportunity statistics.' }
));
},
'Sage/MainView/Opportunity/nls/en-us/OpportunityStatistics':function(){
define('Sage/MainView/Opportunity/nls/en-us/OpportunityStatistics',{});
},
'Sage/TaskPane/nls/en/GroupListTasklet':function(){
﻿define(
    "Sage/TaskPane/nls/en/GroupListTasklet", ({
        GroupListOptionsTitle: 'Group List Options',
        maximizeTitle: 'Expand Group List',
        minimizeTitle: 'Minimize Group List'
    })
);
},
'Sage/TaskPane/nls/en-us/GroupListTasklet':function(){
define('Sage/TaskPane/nls/en-us/GroupListTasklet',{});
},
'Sage/MainView/ReportMgr/Crystal/nls/en/CrystalReportConditionEditor':function(){
define("Sage/MainView/ReportMgr/Crystal/nls/en/CrystalReportConditionEditor", (
{ dlgCrystalReportConditionDetails_Title: 'Add/Edit Condition',
  cmdOK_Caption: 'OK',
  cmdCancel_Caption: 'Cancel',
  cmbConditionType_Caption: 'Match By',
  txtInvalidParameterTitle: 'Invalid Parameter',
  txtInvalidParameterMessage: 'Invalid Parameter: ${0}',
  lkpUser_Caption: 'User',
  lkpGroup_Caption: 'Group',
  txtSelectUser: 'Select User',
  chkCurrentUser_Caption: 'Current User',
  txtName: 'Name',
  txtOK: 'OK',
  txtSelectGroup: 'Select Group',
  cmbDateRange_Caption: 'Date Range',
  cmbDateRange_SpecificDates_Caption: 'Specific Dates',
  cmbDateRange_ThisWeek_Caption: 'This Week',
  cmbDateRange_ThisMonth_Caption: 'This Month',
  cmbDateRange_ThisQuarter_Caption: 'This Quarter',
  cmbDateRange_ThisYear_Caption: 'This Year',
  cmbDateRange_LastWeek_Caption: 'Last Week',
  cmbDateRange_LastMonth_Caption: 'Last Month',
  cmbDateRange_LastQuarter_Caption: 'Last Quarter',
  cmbDateRange_LastYear_Caption: 'Last Year',
  cmbDateRange_MonthToDate_Caption: 'Month to Date',
  cmbDateRange_QuarterToDate_Caption: 'Quarter to Date',
  cmbDateRange_YearToDate_Caption: 'Year to Date',
  dtFromDate_Caption: 'From',
  dtToDate_Caption: 'To',
  cmbTable_Caption: 'Table',
  cmbField_Caption: 'Field',
  cmbOperator_Caption: 'Operator',
  txtValue_Caption: 'Value',
  txtNumericValueFrom_Caption: 'From',
  txtNumericValueTo_Caption: 'To' }
));
},
'Sage/MainView/ReportMgr/Crystal/nls/en-us/CrystalReportConditionEditor':function(){
define('Sage/MainView/ReportMgr/Crystal/nls/en-us/CrystalReportConditionEditor',{});
},
'Sage/MainView/IntegrationContract/nls/en/AdvancedSearchOptions':function(){
define("Sage/MainView/IntegrationContract/nls/en/AdvancedSearchOptions", (
{ dialogCaption: 'Link to Accounting',
  searchOptionsHeader: 'Search for Matches in ',
  searchOptionsText: 'The following criteria was used in the previous search. Modify the criteria for a new search. Click OK to begin searching.',
  propertyText: 'Property',
  operatorText: 'Operator',
  searchText: 'Search Value',
  loadingText: 'loading...',
  loadingDisplay: 'Searching for results...',
  hideImgAltText: 'Remove Condition',
  addImgAltText: 'Add Condition',
  okText: 'OK',
  cancelText: 'Cancel' }
));
},
'Sage/MainView/IntegrationContract/nls/en-us/AdvancedSearchOptions':function(){
define('Sage/MainView/IntegrationContract/nls/en-us/AdvancedSearchOptions',{});
},
'Sage/QuickForms/Design/nls/en/ColumnDesigner':function(){
define("Sage/QuickForms/Design/nls/en/ColumnDesigner", (
{ displayNameText: 'Column' }
));
},
'Sage/QuickForms/Design/nls/en-us/ColumnDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/ColumnDesigner',{});
},
'Sage/MainView/JobMgr/templates/nls/en/JobDefinitionDetailSummary':function(){
define("Sage/MainView/JobMgr/templates/nls/en/JobDefinitionDetailSummary", (
{ txtJobName_Caption: 'Job Name:',
  txtDescription_Caption: 'Description:' }
));
},
'Sage/MainView/JobMgr/templates/nls/en-us/JobDefinitionDetailSummary':function(){
define('Sage/MainView/JobMgr/templates/nls/en-us/JobDefinitionDetailSummary',{});
},
'Sage/UI/nls/en/SearchMenuItem':function(){
define("Sage/UI/nls/en/SearchMenuItem", {
    findText: 'Find',
    clearText: 'Clear',
    showHiddenText: 'Show Hidden: '
});
},
'Sage/UI/nls/en-us/SearchMenuItem':function(){
define('Sage/UI/nls/en-us/SearchMenuItem',{});
},
'Sage/Library/nls/en/DocumentProperties':function(){
define("Sage/Library/nls/en/DocumentProperties", (
{ Abstract: 'Abstract',
  Cancel: 'Cancel',
  DocumentProperties: 'Document Properties',
  Created: 'Created',
  Description: 'Description',
  Directory: 'Directory',
  DoNotExpire: 'Do Not Expire',
  Expires: 'Expires',
  FileName: 'File Name',
  ForceDistribution: 'Force distribution of this file',
  InvalidFileName: 'A filename cannot contain any of the following characters: \\ / : * ? " < > |',
  Never: 'Never',
  OK: 'OK',
  Revised: 'Revised',
  Size: 'Size',
  Status: 'Status' }
));
},
'Sage/Library/nls/en-us/DocumentProperties':function(){
define('Sage/Library/nls/en-us/DocumentProperties',{});
},
'Sage/UI/nls/en/NotesHistoryList':function(){
define("Sage/UI/nls/en/NotesHistoryList", {
    typeText: 'Type',
    showDbChangesText: 'Show Database Changes',
    selectAllText: 'Select All',
    dateText: 'Date',
    dateTimeText: 'Date/Time',
    dateRangeText: 'Date Range',
    userText: 'User',
    accountText: 'Account',
    contactText: 'Contact',
    opportunityText: 'Opportunity',
    regardingText: 'Regarding',
    notesText: 'Notes',
    resultText: 'Result',
    categoryText: 'Category',
    sendEmailText: 'Send via E-Mail',
    sendToWordText: 'Send to Word',
    addNoteText: 'Add Note',
    completeAnActivityText: 'Complete an Activity',
    helpText: 'Help',
    pleaseSelectRecordsText: 'Please select one or more records',
    UnableToFindWordMsg: 'Cannot start Microsoft Word.  Please check your security settings.',
    printedOnText: 'Printed On'
});
},
'Sage/UI/nls/en-us/NotesHistoryList':function(){
define('Sage/UI/nls/en-us/NotesHistoryList',{});
},
'Sage/Utility/nls/en/File':function(){
﻿define("Sage/Utility/nls/en/File", {
    unableToUploadText: 'Saleslogix Desktop Integration Module must be installed to use this feature.',
    unknownSizeText: 'unknown',
    largeFileWarningText: 'Warning: This request exceeds the size limit set by your administrator and failed to upload.',
    largeFileWarningTitle: 'Warning'
});
},
'Sage/Utility/nls/en-us/File':function(){
define('Sage/Utility/nls/en-us/File',{});
},
'Sage/MainView/ReportMgr/nls/en/HistoryListPanelConfig':function(){
define("Sage/MainView/ReportMgr/nls/en/HistoryListPanelConfig", (
{ colNameDate: 'Date',
  colNameScheduleName: 'Description',
  colNameExecutionType: 'Execution Type',
  colNameRunAs: 'Run As',
  colNameScheduledBy: 'Scheduled By',
  colNameReportName: 'Report',
  colNameSize: 'File Size',
  colNameOutputFormat: 'Output Format',
  colNameReportType: 'Type' }
));
},
'Sage/MainView/ReportMgr/nls/en-us/HistoryListPanelConfig':function(){
define('Sage/MainView/ReportMgr/nls/en-us/HistoryListPanelConfig',{});
},
'Sage/MainView/JobMgr/templates/nls/en/ScheduleDetailSummary':function(){
define("Sage/MainView/JobMgr/templates/nls/en/ScheduleDetailSummary", (
{ txtScheduleName_Caption: 'Schedule:',
  txtJobName_Caption: 'Job Name:',
  txtUser_Caption: 'Scheduled By:',
  txtRunAs_Caption: 'Run As:',
  txtStartTime_Caption: 'Start Time:',
  txtEndTime_Caption: 'End Time:',
  txtNextRunTime_Caption: 'Next Run Time:',
  txtRepeatCount_Caption: 'Repeat Count:',
  txtRepeatInterval_Caption: 'Repeat Interval:',
  txtPriority_Caption: 'Priority:',
  txtStatus_Caption: 'Status:',
  txtExecutionCount_Caption: 'Execution Count:' }
));
},
'Sage/MainView/JobMgr/templates/nls/en-us/ScheduleDetailSummary':function(){
define('Sage/MainView/JobMgr/templates/nls/en-us/ScheduleDetailSummary',{});
},
'Sage/QuickForms/Design/nls/en/UrlControlDesigner':function(){
define("Sage/QuickForms/Design/nls/en/UrlControlDesigner", (
{ displayNameText: 'Url' }
));
},
'Sage/QuickForms/Design/nls/en-us/UrlControlDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/UrlControlDesigner',{});
},
'Sage/TaskPane/nls/en/ContactTasksTasklet':function(){
define("Sage/TaskPane/nls/en/ContactTasksTasklet", (
{ associateContactTitle: 'Associate with User',
  disAssociateContactTitle: 'Disassociate from User',
  disAssociateDialogTitle: 'Disassociate from a User',
  confirmDisAssociate: 'Are you sure you want to disassociate the ${0} selected contact from an associated user?',
  confirmDisAssociateMultiple: 'Are you sure you want to disassociate the ${0} selected contacts from any associated users?',
  associationExistsMessage: 'The contact you selected is already associated to a user. To associate this contact to a different user, you must first disassociate the contact and user.',
  multipleSelectionErrorMessage: 'You can only perform this task for 1 contact at a time. \n Please select a single contact and select the task again.',
  noSelectionErrorMessage: 'You need to select at least one contact to disassociate. \n Please select one or more contact(s) and select the task again.',
  singleSelectionErrorMessage: 'You need to select a contact to disassociate. \n Please select a single contact and select the task again.' }
));
},
'Sage/TaskPane/nls/en-us/ContactTasksTasklet':function(){
define('Sage/TaskPane/nls/en-us/ContactTasksTasklet',{});
},
'Sage/MainView/ActivityMgr/templates/nls/en/EventSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/en/EventSummary", (
{ txtStartDate_Caption: 'Start Date:',
  txtEndDate_Caption: 'End Date:',
  txtLocation_Caption: 'Location:',
  txtUser_Caption: 'User:',
  txtDescription_Caption: 'Description:' }
));
},
'Sage/MainView/ActivityMgr/templates/nls/en-us/EventSummary':function(){
define('Sage/MainView/ActivityMgr/templates/nls/en-us/EventSummary',{});
},
'Sage/MainView/ReportMgr/Common/nls/en/_WizardDialogBase':function(){
define("Sage/MainView/ReportMgr/Common/nls/en/_WizardDialogBase", (
{ txtFinish: 'Finish' }
));
},
'Sage/MainView/ReportMgr/Common/nls/en-us/_WizardDialogBase':function(){
define('Sage/MainView/ReportMgr/Common/nls/en-us/_WizardDialogBase',{});
},
'Sage/MainView/JobMgr/nls/en/SchedulesListPanelConfig':function(){
define("Sage/MainView/JobMgr/nls/en/SchedulesListPanelConfig", (
{ colNameTriggerName: 'Schedule',
  colNameJobName: 'Job Name',
  colNameUser: 'Scheduled By',
  colNameStartTimeUtc: 'Start Time',
  colNameEndTimeUtc: 'End Time',
  colNamePriority: 'Priority',
  colNameStatus: 'Status',
  colNameTimesTriggered: 'Execution Count' }
));
},
'Sage/MainView/JobMgr/nls/en-us/SchedulesListPanelConfig':function(){
define('Sage/MainView/JobMgr/nls/en-us/SchedulesListPanelConfig',{});
},
'Sage/Utility/File/nls/en/GoogleDocPicker':function(){
define("Sage/Utility/File/nls/en/GoogleDocPicker", {
    googleDocumentsTitle: 'Google Documents',
    couldNotOpenWindowMsg: 'Could not open authentication window - please check your popup blocker settings.'
});
},
'Sage/Utility/File/nls/en-us/GoogleDocPicker':function(){
define('Sage/Utility/File/nls/en-us/GoogleDocPicker',{});
},
'Sage/QuickForms/Design/nls/en/ComboBoxControlDesigner':function(){
define("Sage/QuickForms/Design/nls/en/ComboBoxControlDesigner", (
{ displayNameText: 'ComboBox' }
));
},
'Sage/QuickForms/Design/nls/en-us/ComboBoxControlDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/ComboBoxControlDesigner',{});
},
'Sage/MainView/ActivityMgr/nls/en/LitRequestListPanelConfig':function(){
define("Sage/MainView/ActivityMgr/nls/en/LitRequestListPanelConfig", (
{ colNameView: 'View',
  colNameContact: 'Contact',
  colNameDescription: 'Description',
  colNameFillDate: 'Filled',
  colNameFillStatus: 'Status',
  colNameOptions: 'Options',
  colNamePriority: 'Priority',
  colNameReqestDate: 'Request Date',
  colNameSendDate: 'Send Date',
  colNameSendVia: 'Send Via',
  colNameTotalCost: 'Total Cost',
  colNameFillUser: 'Fill User',
  colNameReqestUser: 'Request User',
  colNameAccount: 'Account',
  colNamePostalCode: 'Postal Code' }
));
},
'Sage/MainView/ActivityMgr/nls/en-us/LitRequestListPanelConfig':function(){
define('Sage/MainView/ActivityMgr/nls/en-us/LitRequestListPanelConfig',{});
},
'Sage/MainView/ActivityMgr/nls/en/HistoryEditor':function(){
define("Sage/MainView/ActivityMgr/nls/en/HistoryEditor", (
{ labelWidth: '100',
  tabNameGeneralText: 'General',
  tabNameAttachmentsText: 'Attachments',
  scheduleText: 'Schedule',
  startTimeText: 'Scheduled',
  completedDateText: 'Completed',
  timeLessText: 'Timeless',
  durationText: 'Duration',
  contactText: 'Contact',
  accountText: 'Account',
  leadText: 'Lead',
  opportunityText: 'Opportunity',
  ticketText: 'Ticket',
  companyText: 'Company',
  regardingText: 'Regarding',
  resultText: 'Result',
  notesText: 'Notes',
  priorityText: 'Priority',
  leaderText: 'Leader',
  categoryText: 'Category',
  locationText: 'Location',
  scheduledByFormatText: 'Scheduled by ${user} on ${date}',
  cancelText: 'Cancel',
  okText: 'OK',
  deleteText: 'Delete',
  lookupActText: 'Lookup Account',
  lookupContactText: 'Lookup Contact',
  lookupOpportunityText: 'Lookup Opportunity',
  lookupTicketText: 'Lookup Ticket',
  lookupLeadText: 'Lookup Lead',
  lookupLeaderText: 'Lookup Leader',
  lookupResourcesText: 'Lookup',
  mainPhoneText: 'Main Phone',
  typeText: 'Type',
  subTypeText: 'Sub-Type',
  nameText: 'Name',
  cityText: 'City',
  stateText: 'State',
  workphoneText: 'Work Phone',
  emailText: 'Email',
  acctMgrText: 'Acct Manager',
  descriptionText: 'Description',
  stageText: 'Stage',
  statusText: 'Status',
  ownerText: 'Owner',
  ticketNumberText: 'Ticket Number',
  phoneText: 'Phone',
  urgencyText: 'Urgency',
  areaText: 'Area',
  recurringText: 'Recurring',
  followupText: 'Follow-up',
  noneText: 'None',
  carryOverAttachmentsText: 'Carry Over Attachments',
  carryOverNotesText: 'Carry Over Notes',
  asScheduledText: 'As Scheduled',
  insertText: 'Insert',
  couldNotSaveErrorText: 'We\'re sorry, the history could not be saved because an error occurred.',
  deleteMessage: 'You are about to permanently delete this record.',
  deleteTitle: 'Delete History',
  couldNotDeleteErrorText: 'We\'re sorry, the history could not be deleted because an error occurred.',
  postalText: 'Postal Code',
  tabNameParticipants: 'All Participants' }
));
},
'Sage/MainView/ActivityMgr/nls/en-us/HistoryEditor':function(){
define('Sage/MainView/ActivityMgr/nls/en-us/HistoryEditor',{});
},
'Sage/Groups/nls/en/GroupManager':function(){
define("Sage/Groups/nls/en/GroupManager", (
{ ConfirmDeleteMessage: 'Are you sure you want to delete the current group?',
  ConfirmDeleteFmtMessage: 'Are you sure you want to delete this group: ${0}',
  InvalidSortStringMessage: 'Error: Invalid sort string - ',
  InvalidConditionStringMessage: 'Error: Invalid condition string - ',
  InvalidLayoutConditionStringMessage: 'Error: Invalid layout string - ',
  noneSelectedTitle: 'No records selected',
  noneSelectedPromptFmt: 'No records selected. The full group, ${0} record(s), will be added.  Proceed?',
  noneSelectedRemovePromptFmt: 'No records selected. The full group, ${0} record(s), will be removed.  Proceed?',
  noRecordsInGroup: 'There are no records to be selected from this group.',
  newGroupTitle: 'Add Records to new Group',
  newGroupNamePrompt: '${0} selected record(s) will be added to this new group.<br><br>Group Name:<br>${1}',
  newGroupRePrompt: '&nbsp;&nbsp;<i>Please enter a group name.</i>',
  invalidCharMsg: 'Name Cannot contain: / \\ : * ? " <> | or \'',
  groupNameText: 'Group Name:',
  saveLookupDlgTitle: 'Save Lookup Results as New Group',
  yesCaption: 'Yes',
  noCaption: 'No',
  cancelCaption: 'Cancel',
  okCaption: 'OK',
  LOCALSTORE_NAMESPACE: 'SageGroups',
  exportToExcel: 'This method has been deprecated, please see Sage.TaskPane.CommonTasksTasklet.exportToExcel.' }
));
},
'Sage/Groups/nls/en-us/GroupManager':function(){
define('Sage/Groups/nls/en-us/GroupManager',{});
},
'Sage/QuickForms/Design/Editors/nls/en/DateTimePickerAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/DateTimePickerAdvancedPropertyEditor", (
{ titleText: 'Advanced',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  controlInfoText: 'Control Info',
  dataText: 'Data',
  buttonToolTipText: 'Button Tooltip:',
  buttonToolTipTooltipText: 'The tooltip  to display when the user\\\'s mouse hovers over the button part of the control.',
  controlIdText: 'Control Id:',
  controlIdTooltipText: 'Identifier for this control.',
  controlLabelPlacementText: 'Label Placement:',
  controlLabelPlacementTooltipText: 'Label position in relation to the control.',
  controlTypeText: 'Control Type:',
  controlTypeTooltipText: 'Saleslogix control type.',
  defaultDataBindingText: 'Data Bindings:',
  defaultDataBindingTooltipText: 'Data field(s) in the database used by this control.',
  displayModeText: 'Display Mode:',
  displayModeTooltipText: 'Mode of display of control: text box, hyperlink, or plain text.',
  enabledText: 'Enabled:',
  enabledTooltipText: 'Allows user to interact with this control.',
  requiredText: 'Required:',
  requiredTooltipText: 'Requires a value when saving data.',
  timelessText: 'Timeless:',
  timelessTooltipText: 'Use date without time and no DST conversion.',
  visibleText: 'Visible:',
  visibleTooltipText: 'Show or hide this control on the form.',
  labelPlacementText: { left: 'Left', right: 'Right', top: 'Top', none: 'None' },
  displayModeTypeText: 
   { AsControl: 'As Control',
     AsText: 'As Text',
     AsHyperlink: 'As Hyperlink' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/DateTimePickerAdvancedPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/DateTimePickerAdvancedPropertyEditor',{});
},
'Sage/QuickForms/Design/Editors/nls/en/ComboBoxBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/ComboBoxBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  captionText: 'Caption:',
  captionTooltipText: 'The label to display on the form for this control.',
  captionAlignmentText: 'Caption Alignment:',
  captionAlignmentTooltipText: 'Justification of the label text.',
  isReadOnlyText: 'Read Only:',
  isReadOnlyTooltipText: 'Does not allow edits.',
  toolTipText: 'Tooltip:',
  toolTipTooltipText: 'Short help text about control.',
  alignmentText: { left: 'Left', center: 'Center', right: 'Right' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/ComboBoxBasicPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/ComboBoxBasicPropertyEditor',{});
},
'Sage/MainView/ReportMgr/nls/en/ReportsListPanelConfig':function(){
define("Sage/MainView/ReportMgr/nls/en/ReportsListPanelConfig", (
{ colNameReportName: 'Name',
  colNameType: 'Type',
  colNameTable: 'Table',
  colNameCreateUser: 'Create User',
  colNameCreateDate: 'Create Date',
  colNameLastExecutionDate: 'Last Run',
  colNameLastExecutionUser: 'Last Run By',
  colNameModifyUser: 'Modify User',
  colNameModifyDate: 'Modify Date' }
));
},
'Sage/MainView/ReportMgr/nls/en-us/ReportsListPanelConfig':function(){
define('Sage/MainView/ReportMgr/nls/en-us/ReportsListPanelConfig',{});
},
'Sage/UI/Alarms/nls/en/JobNotificationButton':function(){
define("Sage/UI/Alarms/nls/en/JobNotificationButton", {
    notificationToolTip: 'You have ${0} job notifications.',
    notificationErrorToolTip: 'An error occured retrieving job notifications. Please contact your administrator.'
});
},
'Sage/UI/Alarms/nls/en-us/JobNotificationButton':function(){
define('Sage/UI/Alarms/nls/en-us/JobNotificationButton',{});
},
'Sage/MainView/ReportMgr/Crystal/nls/en/CrystalReportWizardController':function(){
define("Sage/MainView/ReportMgr/Crystal/nls/en/CrystalReportWizardController", (
    {
        txtOnDemandScheduleName: 'On Demand',
        txtReportSuccessfullyScheduled: 'Report successfully scheduled.',
        txtDynamicParametersMessage: 'Reports with dynamic parameters are currently not supported.',
        txtError: 'Error',
        txtScheduleSuccessfullyUpdated: 'Schedule successfully updated.',
        txtInvalidReportWithDynamicParameters: 'The "${0}:${1}" report cannot run or be scheduled because it is invalid for the following reason(s): ${2}',
        txtInvalidDynamicParameterDatasource: 'The dynamic parameter "${p.name}" ("${p.promptText}") is currently unsupported because its datasource requires parameter input.',
        txtInvalidDynamicParameterReason: 'The dynamic parameter "${p.name}" ("${p.promptText}") is invalid: ${p.invalidDynamicParameterReason}',
        txtInvalidDynamicParameterUnknownReason: 'The dynamic parameter "${p.name}" ("${p.promptText}") is invalid.'
    }
));
},
'Sage/MainView/ReportMgr/Crystal/nls/en-us/CrystalReportWizardController':function(){
define('Sage/MainView/ReportMgr/Crystal/nls/en-us/CrystalReportWizardController',{});
},
'Sage/MainView/JobMgr/nls/en/JobDefinitionsListPanelConfig':function(){
define("Sage/MainView/JobMgr/nls/en/JobDefinitionsListPanelConfig", (
{ colNameJobName: 'Job Name',
  colNameDescription: 'Description',
  colNameType: 'Type' }
));
},
'Sage/MainView/JobMgr/nls/en-us/JobDefinitionsListPanelConfig':function(){
define('Sage/MainView/JobMgr/nls/en-us/JobDefinitionsListPanelConfig',{});
},
'Sage/MainView/ActivityMgr/nls/en/RecurringEditor':function(){
define("Sage/MainView/ActivityMgr/nls/en/RecurringEditor", (
{ activityOccurrsText: 'This activity occurs...',
  onceText: 'Once',
  dailyText: 'Daily',
  weeklyText: 'Weekly',
  monthlyText: 'Monthly',
  yearlyText: 'Yearly',
  occursOnceText: 'This activity occurs only once',
  everyText: 'Every',
  daysText: 'Day(s)',
  daysAfterText: 'Day(s) after completion',
  startRecurringText: 'Start Recurring: ',
  endAfterText: 'End After',
  endOnText: 'End Recurring',
  occurrencesText: 'occurrences',
  weeksOnText: 'Week(s) on',
  monText: 'Monday',
  tueText: 'Tuesday',
  wedText: 'Wednesday',
  thurText: 'Thursday',
  friText: 'Friday',
  satText: 'Saturday',
  sunText: 'Sunday',
  weeksAfterText: 'Week(s) after completion',
  monthsOnText: 'Month(s) on day',
  monthsOnTheText: 'Month(s) on the',
  monthsAfterText: 'Month(s) after completion',
  firstText: '1st',
  secondText: '2nd',
  thirdText: '3rd',
  fourthText: '4th',
  lastText: 'last',
  yearsOnText: 'Year(s) on',
  yearsAfterText: 'Year(s) after completion',
  janText: 'January',
  febText: 'February',
  marText: 'March',
  aprText: 'April',
  mayText: 'May',
  junText: 'June',
  julText: 'July',
  augText: 'August',
  sepText: 'September',
  octText: 'October',
  novText: 'November',
  decText: 'December',
  theText: 'The',
  inText: 'in' }
));
},
'Sage/MainView/ActivityMgr/nls/en-us/RecurringEditor':function(){
define('Sage/MainView/ActivityMgr/nls/en-us/RecurringEditor',{});
},
'Sage/MainView/ReportMgr/Crystal/nls/en/CrystalReportsUtility':function(){
define("Sage/MainView/ReportMgr/Crystal/nls/en/CrystalReportsUtility", (
{ txtCurrentUser: 'Current User' }
));
},
'Sage/MainView/ReportMgr/Crystal/nls/en-us/CrystalReportsUtility':function(){
define('Sage/MainView/ReportMgr/Crystal/nls/en-us/CrystalReportsUtility',{});
},
'Sage/QuickForms/Design/Editors/nls/en/DataGridAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/DataGridAdvancedPropertyEditor", (
{ titleText: 'Advanced',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  controlInfoText: 'Control Info',
  dataText: 'Data',
  controlIdText: 'Control Id:',
  controlIdTooltipText: 'Identifier for this control.',
  controlTypeText: 'Control Type:',
  controlTypeTooltipText: 'Saleslogix control type.',
  dataSourceText: 'Data Source:',
  dataSourceTooltipText: 'Source of the data for this control such as another control or an entity.',
  emptyTableRowText: 'Empty Table Row Text:',
  emptyTableRowTooltipText: 'Text to display if grid shows no data.',
  expandableRowsText: 'Expandable Rows:',
  expandableRowsTooltipText: 'Allows user to expand grid rows to show more text.',
  renderVerticalText: 'Render Vertically:',
  renderVerticalTooltipText: 'Show grid rows as columns.',
  showSortIconText: 'Show Sort Icon:',
  showSortIconTooltipText: 'Show sort icon on columns that are sortable.',
  visibleText: 'Visible:',
  visibleTooltipText: 'Show or hide this control on the form.' }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/DataGridAdvancedPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/DataGridAdvancedPropertyEditor',{});
},
'Sage/MainView/ReportMgr/nls/en/BaseListPanelConfig':function(){
define("Sage/MainView/ReportMgr/nls/en/BaseListPanelConfig", (
{ titleFmtString: '${0}' }
));
},
'Sage/MainView/ReportMgr/nls/en-us/BaseListPanelConfig':function(){
define('Sage/MainView/ReportMgr/nls/en-us/BaseListPanelConfig',{});
},
'Sage/QuickForms/Design/nls/en/CurrencyControlDesigner':function(){
define("Sage/QuickForms/Design/nls/en/CurrencyControlDesigner", (
{ displayNameText: 'Currency' }
));
},
'Sage/QuickForms/Design/nls/en-us/CurrencyControlDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/CurrencyControlDesigner',{});
},
'Sage/QuickForms/Design/nls/en/DataGridControlDesigner':function(){
define("Sage/QuickForms/Design/nls/en/DataGridControlDesigner", (
{ displayNameText: 'Data Grid',
  emptyTableRowStringText: 'No records match the selection criteria.' }
));
},
'Sage/QuickForms/Design/nls/en-us/DataGridControlDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/DataGridControlDesigner',{});
},
'Sage/QuickForms/Design/nls/en/PickListControlDesigner':function(){
define("Sage/QuickForms/Design/nls/en/PickListControlDesigner", (
{ displayNameText: 'Pick List' }
));
},
'Sage/QuickForms/Design/nls/en-us/PickListControlDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/PickListControlDesigner',{});
},
'Sage/MainView/ActivityMgr/templates/nls/en/LitRequestSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/en/LitRequestSummary", (
{ txtSendDate_Caption: 'Send:',
  txtScheduled_Caption: 'Scheduled:',
  txtStatus_Caption: 'Status:',
  txtRequestedBy_Caption: 'Requested By:',
  lnkContact_Caption: 'Contact:',
  txtPriority_Caption: 'Priority:',
  txtVia_Caption: 'Send Via:',
  txtCost_Caption: 'Total Cost:',
  txtWorkPhone_Caption: 'Work Phone:',
  txtPostalCode_Caption: 'Postal Code:',
  txtHomePhone_Caption: 'Home Phone',
  lnkAccount_Caption: 'Account:',
  txtRequestDate_Caption: 'Requested:' }
));
},
'Sage/MainView/ActivityMgr/templates/nls/en-us/LitRequestSummary':function(){
define('Sage/MainView/ActivityMgr/templates/nls/en-us/LitRequestSummary',{});
},
'Sage/QuickForms/Design/Editors/nls/en/CheckBoxBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/CheckBoxBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  captionText: 'Caption:',
  captionTooltipText: 'The label to display on the form for this control.',
  captionAlignmentText: 'Caption Alignment:',
  captionAlignmentTooltipText: 'Justification of the label text.',
  isReadOnlyText: 'Read Only:',
  isReadOnlyTooltipText: 'Does not allow edits.',
  toolTipText: 'Tooltip:',
  toolTipTooltipText: 'Short help text about control.',
  alignmentText: { left: 'Left', center: 'Center', right: 'Right' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/CheckBoxBasicPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/CheckBoxBasicPropertyEditor',{});
},
'Sage/Library/nls/en/FolderHandler':function(){
define("Sage/Library/nls/en/FolderHandler", (
{ AccessError: 'You do not have the role security required to execute this action.',
  AddFolderError: 'There was an unexpected error attempting to add a library folder.',
  Cancel: 'Cancel',
  Confirm: 'Confirm',
  DeleteFolderCnfmFmt: 'Are you sure you want to delete the "${0}" folder and all of its contents?',
  DeleteFolderError: 'There was an unexpected error attempting to delete a library folder.',
  DontDeleteRoot: 'Please do not delete the root folder.',
  DontEditRoot: 'Please do not change the name of the root folder.',
  EnterFolderName: 'Please enter the name of the new folder:',
  EnterNewFolderName: 'Please enter the new name for this folder.',
  FolderUpdateConflictError: 'The folder has been updated by another user, please refresh and retry.',
  InvalidFolderName: 'A folder name cannot contain any of the following characters: \\ / : * ? " < > |',
  NewFolder: 'New Folder',
  No: 'No',
  OK: 'OK',
  PleaseSelectFolder: 'Please select a folder.',
  RenameFolderError: 'There was an unexpected error attempting to rename a library folder.',
  Yes: 'Yes' }
));
},
'Sage/Library/nls/en-us/FolderHandler':function(){
define('Sage/Library/nls/en-us/FolderHandler',{});
},
'Sage/QuickForms/Design/Editors/nls/en/ComboBoxAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/ComboBoxAdvancedPropertyEditor", (
{ titleText: 'Advanced',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  controlInfoText: 'Control Info',
  dataText: 'Data',
  itemGroupText: 'Items',
  controlIdText: 'Control Id:',
  controlIdTooltipText: 'Identifier for this control.',
  controlLabelPlacementText: 'Label Placement:',
  controlLabelPlacementTooltipText: 'Label position in relation to the control.',
  controlTypeText: 'Control Type:',
  controlTypeTooltipText: 'Saleslogix control type.',
  dataSourceText: 'Data Source:',
  dataSourceTooltipText: 'Source of the data for this control such as another control or an entity.',
  defaultDataBindingText: 'Data Bindings:',
  defaultDataBindingTooltipText: 'Data field(s) in the database used by this control.',
  enabledText: 'Enabled:',
  enabledTooltipText: 'Allows user to interact with this control.',
  itemsText: 'Items:',
  itemsTooltipText: 'Values the user can select.',
  textFieldText: 'Text Field:',
  textFieldTooltipText: 'The name of the data source field used to populate the visible text portion of the list items.',
  valueFieldText: 'Value Field:',
  valueFieldTooltipText: 'The name of the data source field used to populate the value portion of the list items.',
  visibleText: 'Visible:',
  visibleTooltipText: 'Show or hide this control on the form.',
  labelPlacementText: { left: 'Left', right: 'Right', top: 'Top', none: 'None' },
  hasItemsText: 'Set',
  noItemsText: 'Not Set' }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/ComboBoxAdvancedPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/ComboBoxAdvancedPropertyEditor',{});
},
'Sage/MainView/Contact/nls/en/ContactSearchForDuplicates':function(){
define("Sage/MainView/Contact/nls/en/ContactSearchForDuplicates", (
{ svAccount_Caption: 'Account:',
  svCompany_Caption: 'Company:',
  svEmail_Caption: 'Email:',
  svName_Caption: 'Name:',
  svTitle_Caption: 'Title:',
  svType_Caption: 'Type:',
  svSubType_Caption: 'Sub Type:',
  svAccMgr_Caption: 'Acct. Mgr.:',
  svHomePhone_Caption: 'Home phone:',
  svWorkPhone_Caption: 'Work phone:',
  svMobilePhone_Caption: 'Mobile phone:',
  svStatus_Caption: 'Status:',
  svWebAddress_Caption: 'Web:',
  svEntityAccount_Caption: 'Account',
  svEntityLead_Caption: 'Lead',
  svEntityContact_Contact: 'Contact',
  svTollFree_Caption: 'Toll free:',
  svIndustry_Caption: 'Industry:',
  svDivision_Caption: 'Division:',
  svMainPhone_Caption: 'Main phone:',
  LeadSummaryView_Title: 'Summary View - Lead',
  ContactSummaryView_Title: 'Summary View - Contact',
  AccountSummaryView_Title: 'Summary View - Account',
  closeText: 'Close',
  errorLoadingSummaryView: 'An error occurred loading summary view: ${0}' }
));
},
'Sage/MainView/Contact/nls/en-us/ContactSearchForDuplicates':function(){
define('Sage/MainView/Contact/nls/en-us/ContactSearchForDuplicates',{});
},
'Sage/QuickForms/Design/Editors/nls/en/DateTimePickerBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/DateTimePickerBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  captionText: 'Caption:',
  captionTooltipText: 'The label to display on the form for this control.',
  captionAlignmentText: 'Caption Alignment:',
  captionAlignmentTooltipText: 'Justification of the label text.',
  displayDateText: 'Display Date:',
  displayDateTooltipText: 'Display the date portion.',
  displayTimeText: 'Display Time:',
  displayTimeTooltipText: 'Display the time portion.',
  isReadOnlyText: 'Read Only:',
  isReadOnlyTooltipText: 'Does not allow edits.',
  toolTipText: 'Tooltip:',
  toolTipTooltipText: 'Short help text about control.',
  alignmentText: { left: 'Left', center: 'Center', right: 'Right' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/DateTimePickerBasicPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/DateTimePickerBasicPropertyEditor',{});
},
'Sage/TaskPane/nls/en/AccountingTasksTasklet':function(){
define("Sage/TaskPane/nls/en/AccountingTasksTasklet", (
{ updatePricingRecords: 'You may only select one record when performing this option.' }
));
},
'Sage/TaskPane/nls/en-us/AccountingTasksTasklet':function(){
define('Sage/TaskPane/nls/en-us/AccountingTasksTasklet',{});
},
'Sage/QuickForms/Design/Editors/nls/en/DataGridBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/DataGridBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  dataText: 'Data',
  captionText: 'Caption:',
  captionTooltipText: 'The label to display on the form for this control.',
  captionAlignmentText: 'Caption Alignment:',
  captionAlignmentTooltipText: 'Justification of the label text.',
  pageSizeText: 'Page Size:',
  pageSizeTooltipText: 'The number of grid records to display on a single page.',
  resizableColumnsText: 'Resizable Columns:',
  resizableColumnsTooltipText: 'Allows user to resize columns.',
  alignmentText: { left: 'Left', center: 'Center', right: 'Right' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/DataGridBasicPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/DataGridBasicPropertyEditor',{});
},
'Sage/QuickForms/Design/Editors/nls/en/CurrencyBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/CurrencyBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  captionText: 'Caption:',
  captionTooltipText: 'The label to display on the form for this control.',
  captionAlignmentText: 'Caption Alignment:',
  captionAlignmentTooltipText: 'Justification of the label text.',
  isReadOnlyText: 'Read Only:',
  isReadOnlyTooltipText: 'Does not allow edits.',
  toolTipText: 'Tooltip:',
  toolTipTooltipText: 'Short help text about control.',
  alignmentText: { left: 'Left', center: 'Center', right: 'Right' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/CurrencyBasicPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/CurrencyBasicPropertyEditor',{});
},
'Sage/UI/nls/en/EditableGrid':function(){
define("Sage/UI/nls/en/EditableGrid", {
    unsavedDataText: '*unsaved data',
    addText: 'Add',
    deleteText: 'Delete',
    saveText: 'Save',
    cancelText: 'Cancel',
    noSelectionsText: 'There are no records selected.',
    confirmDeleteFmtTxt: 'Are you sure you want to delete these ${0} items?',
    yesText: 'Yes',
    noText: 'No',
    createItemsInvalidArrayText: 'The items parameter in Sage.UI.EditableGrid.createItems() should be an array.',
    recordCountFormatString: 'Records ${0} - ${1} of ${2}',
    noDataMessage: 'No records match the selection criteria.',
    dirtyDataMessage: 'You have unsaved data.  If you continue you will lose the changes you have made.',
    okText: 'OK'
});
},
'Sage/UI/nls/en-us/EditableGrid':function(){
define('Sage/UI/nls/en-us/EditableGrid',{});
},
'Sage/MainView/IntegrationContract/nls/en/SalesQuoteRTDV':function(){
define("Sage/MainView/IntegrationContract/nls/en/SalesQuoteRTDV", (
{ dialogCaption: 'Sales Quote Details',
  loadingText: 'loading...',
  lblSalesQuoteCaption: 'Sales Quote:',
  lblStatusCaption: 'Status:',
  lblGrossTotalCaption: 'Quote Amount:',
  lblQuoteDateCaption: 'Quote Date:',
  lblTaxTotalCaption: 'Tax Total:',
  lblHoldStatusCaption: 'Hold Status:',
  lblCurrencyCaption: 'Currency:',
  lblTypeCaption: 'Type:',
  lblCostTotalCaption: 'Total Cost:',
  lblPONumberCaption: 'PO Number:',
  lblProfitTotalCaption: 'Total Profit:',
  lblQuotationCaption: 'Quotation:',
  lblInvoiceStatusCaption: 'Invoice Status:',
  lblContactCaption: 'Contact:',
  lblDeliveryDateCaption: 'Delivery Date:',
  lblDueDateCaption: 'Due Date:',
  lblPriceListCaption: 'Price List:',
  lblCarrierCaption: 'Carrier:',
  lblNetTotalCaption: 'Net Total:',
  lblAllocationStatusCaption: 'Allocation Status:',
  lblDiscountTotalCaption: 'Discount Total:',
  lblDeliveryStatusCaption: 'Delivery Status:',
  lblChargesTotalCaption: 'Charges Total:',
  detailsTabTitle: 'Details',
  salesPersonsTabTitle: 'Sales Persons',
  addressTabTitle: 'Addresses',
  salesQuoteLinesTabTitle: 'Sales Quote Lines',
  paymentsTabTitle: 'Payments',
  deliveriesTabTitle: 'Deliveries',
  grdSalesQuote_Edit: 'Edit',
  grdSalesQuote_QuoteNumber: 'Quote Number',
  grdSalesQuote_QuoteDate: 'Quote Date',
  grdSalesQuote_Status: 'Status',
  grdSalesQuote_HoldStatus: 'Hold Status',
  grdSalesQuote_Type: 'Type',
  grdSalesQuote_PO: 'PO Number',
  grdSalesQuote_NetTotal: 'Net Total',
  grdSalesQuote_DiscountTotal: 'Discount Total',
  grdSalesQuote_ChargesTotal: 'Charges Total',
  grdSalesQuote_TaxTotal: 'Tax Total',
  grdSalesQuote_GrossTotal: 'Gross Total',
  grdSalesQuote_Currency: 'Currency',
  grdSalesPersons_Name: 'Name',
  grdSalesPersons_Type: 'Type',
  grdSalesPersons_Extension: 'Extension',
  grdSalesPersons_Relationship: 'Relationship',
  grdAddress_Name: 'Name',
  grdAddress_Address1: 'Address 1',
  grdAddress_Address2: 'Address 2',
  grdAddress_City: 'City',
  grdAddress_State: 'State',
  grdAddress_Zip: 'Zip',
  grdItems_Line: 'Line Number',
  grdItems_Type: 'Type',
  grdItems_Commodity: 'Commodity',
  grdItems_CommodityVariant: 'Variant',
  grdItems_CommodityDimension: 'Dimension',
  grdItems_UnitOfMeasure: 'Unit',
  grdItems_Location: 'Location',
  grdItems_PriceList: 'Price List',
  grdItems_Quantity: 'Quantity',
  grdItems_InitialPrice: 'Initial Price',
  grdItems_ActualPrice: 'Actual Price',
  grdItems_NetTotal: 'Net Total',
  grdItems_ChargesTotal: 'Charges Total',
  grdItems_DiscountTotal: 'Discount Total',
  grdItems_TaxTotal: 'Tax Total',
  grdItems_GrossTotal: 'Gross Total',
  grdPayments_Date: 'Payment Date',
  grdPayments_Name: 'Name',
  grdPayments_Type: 'Type',
  grdPayments_Status: 'Status',
  grdPayments_NetTotal: 'Net Total',
  grdPayments_Discounts: 'Discounts',
  grdPayments_Charges: 'Charges',
  grdPayments_Tax: 'Tax',
  grdPayments_GrossTotal: 'Gross Total',
  grdPayments_Currency: 'Currency',
  grdPayments_TenderType: 'Tender Type',
  grdPayments_TenderReference: 'Tender Reference',
  grdPayments_ProcessDate: 'Process Date',
  grdDeliveries_Number: 'Number',
  grdDeliveries_Type: 'Type',
  grdDeliveries_Status: 'Status',
  grdDeliveries_RequestedDate: 'Requested Date',
  grdDeliveries_ActualDate: 'Actual Date',
  grdDeliveries_ActualTime: 'Actual Time',
  grdDeliveries_RequestedQuantity: 'Requested Quantity',
  grdDeliveries_DeliveredQuantity: 'Delivered Quantity',
  grdDeliveries_Method: 'Method',
  grdDeliveries_Carrier: 'Carrier',
  grdDeliveries_CarrierReference: 'Carrier Reference',
  grdDeliveries_ExceptionReason: 'Exception Reason',
  errorERPRequest: 'An error occurred opening accounting systems sales quote detail view. ',
  errorERPRequestDetails: '${0}, ${1} Request: ${2}',
  btnCloseCaption: 'Close' }
));
},
'Sage/MainView/IntegrationContract/nls/en-us/SalesQuoteRTDV':function(){
define('Sage/MainView/IntegrationContract/nls/en-us/SalesQuoteRTDV',{});
},
'Sage/MainView/SecurityMgr/nls/en/SecurityProfile':function(){
define("Sage/MainView/SecurityMgr/nls/en/SecurityProfile", (
{ securityProfile_Caption: 'Security Profile',
  btnCancel_Caption: 'Cancel',
  ok_Text: 'OK',
  description_Text: 'Description',
  profileType_Text: 'Profile Type' }
));
},
'Sage/MainView/SecurityMgr/nls/en-us/SecurityProfile':function(){
define('Sage/MainView/SecurityMgr/nls/en-us/SecurityProfile',{});
},
'Sage/MainView/ReportMgr/nls/en/ReportWizardController':function(){
﻿define("Sage/MainView/ReportMgr/nls/en/ReportWizardController", {
    txtLoadingScheduleDetails: 'Loading Schedule Details',
    txtError: 'Error',
    txtCannotDetermineReportId: 'Cannot determine report id.',
    txtCannotDetermineReportNameOrFamily: 'Cannot determine report name or family.',
    txtLoading: 'Loading ',
    txtLoadingReport: 'Loading Report',
    txtSorryAnErrorOccuredLoadingReport: 'Sorry, an error occurred loading report: ${0} ${1}.'
});
},
'Sage/MainView/ReportMgr/nls/en-us/ReportWizardController':function(){
define('Sage/MainView/ReportMgr/nls/en-us/ReportWizardController',{});
},
'Sage/QuickForms/Design/Editors/nls/en/UserAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/UserAdvancedPropertyEditor", (
{ titleText: 'Advanced',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  controlInfoText: 'Control Info',
  dataText: 'Data',
  controlIdText: 'Control Id:',
  controlIdTooltipText: 'Identifier for this control.',
  controlLabelPlacementText: 'Label Placement:',
  controlLabelPlacementTooltipText: 'Label position in relation to the control.',
  controlTypeText: 'Control Type:',
  controlTypeTooltipText: 'Saleslogix control type.',
  defaultDataBindingText: 'Data Bindings:',
  defaultDataBindingTooltipText: 'Data field(s) in the database used by this control.',
  enabledText: 'Enabled:',
  enabledTooltipText: 'Allows user to interact with this control.',
  lookupBindingModeText: 'Lookup Binding Mode:',
  lookupBindingModeTooltipText: 'Indicates whether you want to bind to an entity object or to a string value.',
  requiredText: 'Required:',
  requiredTooltipText: 'Requires a value when saving data.',
  visibleText: 'Visible:',
  visibleTooltipText: 'Show or hide this control on the form.',
  labelPlacementText: { left: 'Left', right: 'Right', top: 'Top', none: 'None' },
  bindingModeText: { Object: 'Object', String: 'String' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/UserAdvancedPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/UserAdvancedPropertyEditor',{});
},
'Sage/MainView/ReportMgr/nls/en/ReportManagerUtility':function(){
define("Sage/MainView/ReportMgr/nls/en/ReportManagerUtility", (
{}
));
},
'Sage/MainView/ReportMgr/nls/en-us/ReportManagerUtility':function(){
define('Sage/MainView/ReportMgr/nls/en-us/ReportManagerUtility',{});
},
'Sage/UI/nls/en/SpeedSearch':function(){
define("Sage/UI/nls/en/SpeedSearch", {
    standardText: 'standard',
    advancedText: 'advanced',
    speedSearchText: 'SpeedSearch'
});
},
'Sage/UI/nls/en-us/SpeedSearch':function(){
define('Sage/UI/nls/en-us/SpeedSearch',{});
},
'Sage/QuickForms/Design/Editors/nls/en/CurrencyAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/CurrencyAdvancedPropertyEditor", (
{ titleText: 'Advanced',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  controlInfoText: 'Control Info',
  dataText: 'Data',
  controlIdText: 'Control Id:',
  controlIdTooltipText: 'Identifier for this control.',
  controlLabelPlacementText: 'Label Placement:',
  controlLabelPlacementTooltipText: 'Label position in relation to the control.',
  controlTypeText: 'Control Type:',
  controlTypeTooltipText: 'Saleslogix control type.',
  decimalDigitsText: 'Decimal Digits:',
  decimalDigitsTooltipText: 'The number of digits after the decimal to display and allow for data entry.',
  defaultDataBindingText: 'Data Bindings:',
  defaultDataBindingTooltipText: 'Data field(s) in the database used by this control.',
  displayCurrencyCodeText: 'Display Exchange Rate Code:',
  displayCurrencyCodeTooltipText: 'Show the three character currency code when multi-currency is enabled.',
  displayModeText: 'Display Mode:',
  displayModeTooltipText: 'Mode of display of control: text box, hyperlink, or plain text.',
  enabledText: 'Enabled:',
  enabledTooltipText: 'Allows user to interact with this control.',
  exchangeRateTypeText: 'Exchange Rate Type:',
  exchangeRateTypeTooltipText: 'Type of exchange rate to show in currency fields.',
  maxLengthText: 'Max Length:',
  maxLengthTooltipText: 'Maximum number of characters user can enter.',
  requiredText: 'Required:',
  requiredTooltipText: 'Requires a value when saving data.',
  visibleText: 'Visible:',
  visibleTooltipText: 'Show or hide this control on the form.',
  displayTypeText: 
   { AsHyperlink: 'As Hyperlink',
     AsControl: 'As Control',
     AsText: 'As Text' },
  exchangeTypeText: 
   { BaseRate: 'Base Rate',
     OpportunityRate: 'Opportunity Rate (Deprecated)',
     MyRate: 'My Rate',
     SalesOrderRate: 'Sales Order Rate (Deprecated)',
     EntityRate: 'Entity Rate' },
  labelPlacementText: { left: 'Left', right: 'Right', top: 'Top', none: 'None' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/CurrencyAdvancedPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/CurrencyAdvancedPropertyEditor',{});
},
'Sage/TaskPane/nls/en/ReportManagerTasksTasklet':function(){
define("Sage/TaskPane/nls/en/ReportManagerTasksTasklet", (
{ taskRunReport_Caption: 'Run Report',
  taskScheduleReport_Caption: 'Schedule Report',
  taskDeleteReport_Caption: 'Delete Report',
  taskDeleteSchedule_Caption: 'Delete Schedule',
  taskEditSchedule_Caption: 'Edit Schedule',
  taskDeleteHistory_Caption: 'Delete History',
  txtRecordsSelected: 'record(s) selected',
  txtClear: 'Clear' }
));
},
'Sage/TaskPane/nls/en-us/ReportManagerTasksTasklet':function(){
define('Sage/TaskPane/nls/en-us/ReportManagerTasksTasklet',{});
},
'Sage/UI/nls/en/SLXPreviewGrid':function(){
define("Sage/UI/nls/en/SLXPreviewGrid", {
    applyText: 'Apply',
    resetText: 'Reset',
    filterText: 'Filter'
});
},
'Sage/UI/nls/en-us/SLXPreviewGrid':function(){
define('Sage/UI/nls/en-us/SLXPreviewGrid',{});
},
'Sage/UI/Alarms/nls/en/UnconfirmedPane':function(){
define("Sage/UI/Alarms/nls/en/UnconfirmedPane", {
    showConfirmationsText: 'Show Confirmations',
    showCalendarText: 'Show Calendar',
    acceptText: 'Accept',
    declineText: 'Decline'
});
},
'Sage/UI/Alarms/nls/en-us/UnconfirmedPane':function(){
define('Sage/UI/Alarms/nls/en-us/UnconfirmedPane',{});
},
'Sage/Utility/nls/en/Utility':function(){
define("Sage/Utility/nls/en/Utility", (
{ dangerousValueWarn: 'A potentially dangerous form value was detected.  Please avoid invalid character combinations.Example: "&lt;script&gt;&lt;/script&gt;" Also avoid invalid characters in filenames: \\ / : * ? " &lt; &gt; | ' }
));
},
'Sage/Utility/nls/en-us/Utility':function(){
define('Sage/Utility/nls/en-us/Utility',{});
},
'Sage/QuickForms/Design/nls/en/ControlDesigner':function(){
define("Sage/QuickForms/Design/nls/en/ControlDesigner", (
{ displayNameText: '' }
));
},
'Sage/QuickForms/Design/nls/en-us/ControlDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/ControlDesigner',{});
},
'Sage/UI/Controls/nls/en/Address':function(){
define("Sage/UI/Controls/nls/en/Address", {
    address1Text: 'Address 1:',
    address2Text: 'Address 2:',
    address3Text: 'Address 3:',
    cancelText: 'Cancel',
    cityText: 'City:',
    countryText: 'Country:',
    countyText: 'County:',
    descriptionText: 'Description:',
    dialogTitle: 'Address',
    isMailingText: 'Shipping:',
    isPrimaryText: 'Primary:',
    okText: 'OK',
    postalCodeText: 'Postal Code:',
    salutationText: 'Attention:',
    stateText: 'State:',
    imageEditToolTip: 'Edit',
    imageMapQuestToolTip: 'MapQuest'
});
},
'Sage/UI/Controls/nls/en-us/Address':function(){
define('Sage/UI/Controls/nls/en-us/Address',{});
},
'Sage/MainView/JobMgr/nls/en/JobManagerGroupContextService':function(){
define("Sage/MainView/JobMgr/nls/en/JobManagerGroupContextService", (
{ executionsTabDisplayName: 'Executions',
  jobDefinitionsTabDisplayName: 'Definitions',
  schedulesTabDisplayName: 'Schedules' }
));
},
'Sage/MainView/JobMgr/nls/en-us/JobManagerGroupContextService':function(){
define('Sage/MainView/JobMgr/nls/en-us/JobManagerGroupContextService',{});
},
'Sage/MainView/ActivityMgr/nls/en/BaseListPanelConfig':function(){
define("Sage/MainView/ActivityMgr/nls/en/BaseListPanelConfig", (
{ titleFmtString: '${0}' }
));
},
'Sage/MainView/ActivityMgr/nls/en-us/BaseListPanelConfig':function(){
define('Sage/MainView/ActivityMgr/nls/en-us/BaseListPanelConfig',{});
},
'Sage/QuickForms/Design/nls/en/OwnerControlDesigner':function(){
define("Sage/QuickForms/Design/nls/en/OwnerControlDesigner", (
{ displayNameText: 'Owner' }
));
},
'Sage/QuickForms/Design/nls/en-us/OwnerControlDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/OwnerControlDesigner',{});
},
'Sage/TaskPane/nls/en/JobManagerTasksTasklet':function(){
define("Sage/TaskPane/nls/en/JobManagerTasksTasklet", (
{ taskRunJob_Caption: 'Create Schedule',
  taskEditTrigger_Caption: 'Edit Schedule',
  taskCancelJob_Caption: 'Cancel Executing Job',
  taskDeleteScheduledJob_Caption: 'Delete Schedule' }
));
},
'Sage/TaskPane/nls/en-us/JobManagerTasksTasklet':function(){
define('Sage/TaskPane/nls/en-us/JobManagerTasksTasklet',{});
},
'Sage/MainView/ActivityMgr/nls/en/ActivityEditorAttendeesTab':function(){
define("Sage/MainView/ActivityMgr/nls/en/ActivityEditorAttendeesTab", (
{ header_Name: 'Name',
  header_AccountName: 'Account/Company',
  header_Type: 'Type',
  header_Primary: 'Primary',
  header_RoleName: 'Role',
  header_Phone: 'Phone',
  header_Email: 'Email',
  header_TimeZone: 'Time Zone',
  header_Notes: 'Notes',
  tooltip_speedSearch: 'Add Participant',
  tooltip_AddContact: 'Add Contact',
  tooltip_AddLead: 'Add Lead',
  tooltip_Delete: "Delete",
  header_Attendee: "Is Attendee"
}
));
},
'Sage/MainView/ActivityMgr/nls/en-us/ActivityEditorAttendeesTab':function(){
define('Sage/MainView/ActivityMgr/nls/en-us/ActivityEditorAttendeesTab',{});
},
'Sage/UI/nls/en/UserType':function(){
define("Sage/UI/nls/en/UserType", {
    administratorText: 'Administrator',
    templateText: 'Template',
    remoteText: 'Remote',
    webOnlyText: 'Web Only',
    retiredText: 'Retired',
    concurrentText: 'Concurrent',
    webViewerText: 'Web Viewer',
    networkText: 'Network',
    addOnUserText: 'Add-on User'
});
},
'Sage/UI/nls/en-us/UserType':function(){
define('Sage/UI/nls/en-us/UserType',{});
},
'Sage/MainView/ReportMgr/templates/nls/en/HistoryDetailSummary':function(){
define("Sage/MainView/ReportMgr/templates/nls/en/HistoryDetailSummary", (
{ txtCreateDate_Caption: 'Create Date:',
  txtReportType_Caption: 'Report Type:',
  txtOutputFormat_Caption: 'Output Format:',
  txtRunAsUser_Caption: 'Run As:',
  txtExecutionType_Caption: 'Execution Type:',
  txtScheduleName_Caption: 'Description:',
  txtScheduledBy_Caption: 'Scheduled By:',
  txtFileSize_Caption: 'File Size:',
  txtElapsedTime_Caption: 'Elapsed Time:' }
));
},
'Sage/MainView/ReportMgr/templates/nls/en-us/HistoryDetailSummary':function(){
define('Sage/MainView/ReportMgr/templates/nls/en-us/HistoryDetailSummary',{});
},
'Sage/QuickForms/Design/nls/en/FormDesigner':function(){
define("Sage/QuickForms/Design/nls/en/FormDesigner", (
{ displayNameText: 'Form' }
));
},
'Sage/QuickForms/Design/nls/en-us/FormDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/FormDesigner',{});
},
'Sage/MainView/ActivityMgr/nls/en/ActivityCalendar':function(){
define("Sage/MainView/ActivityMgr/nls/en/ActivityCalendar", (
{ completedText: '(Completed)' }
));
},
'Sage/MainView/ActivityMgr/nls/en-us/ActivityCalendar':function(){
define('Sage/MainView/ActivityMgr/nls/en-us/ActivityCalendar',{});
},
'Sage/Utility/nls/en/Jobs':function(){
define("Sage/Utility/nls/en/Jobs", {
    errorMessage: 'Sorry, an error occurred during the execution of job \'${0}\': ${1} ${2}.',
    jobCompletedSuccessfully: 'The job has completed successfully.',
    unexpectedErrorMessage: 'Sorry, an unexpected error occurred during the execution of job \'${0}\'.',
    repeatIndefinitely: 'Repeat indefinitely',
    cancelButtonCaption: 'Cancel',
    defaultProgressDialogTitle: 'Running Job',
    closeButtonCaption: 'Close'
});
},
'Sage/Utility/nls/en-us/Jobs':function(){
define('Sage/Utility/nls/en-us/Jobs',{});
},
'Sage/UI/Controls/nls/en/_DialogHelpIconMixin':function(){
define("Sage/UI/Controls/nls/en/_DialogHelpIconMixin", { helpTooltip: 'Help' });
},
'Sage/UI/Controls/nls/en-us/_DialogHelpIconMixin':function(){
define('Sage/UI/Controls/nls/en-us/_DialogHelpIconMixin',{});
},
'Sage/QuickForms/Design/Editors/nls/en/PickListAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/PickListAdvancedPropertyEditor", (
{ titleText: 'Advanced',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  controlInfoText: 'Control Info',
  dataText: 'Data',
  allowMultiplesText: 'Allow Multiple Selections:',
  allowMultiplesTooltipText: 'Allows user to select more than one item.',
  canEditTextText: 'Can Edit Text:',
  canEditTextTooltipText: 'Allows user to type value.',
  controlIdText: 'Control Id:',
  controlIdTooltipText: 'Identifier for this control.',
  controlLabelPlacementText: 'Label Placement:',
  controlLabelPlacementTooltipText: 'Label position in relation to the control.',
  controlTypeText: 'Control Type:',
  controlTypeTooltipText: 'Saleslogix control type.',
  defaultDataBindingText: 'Data Bindings:',
  defaultDataBindingTooltipText: 'Data field(s) in the database used by this control.',
  displayModeText: 'Display Mode:',
  displayModeTooltipText: 'Mode of display of control: text box, hyperlink, or plain text.',
  enabledText: 'Enabled:',
  enabledTooltipText: 'Allows user to interact with this control.',
  maxLengthText: 'Max Length:',
  maxLengthTooltipText: 'Maximum number of characters user can enter.',
  mustExistInListText: 'Item Must Exist:',
  mustExistInListTooltipText: 'Requires typed value to be on list.',
  pickListNameText: 'Pick List Name:',
  pickListNameTooltipText: 'Name of the list of values the user can select from when entering data.',
  requiredText: 'Required:',
  requiredTooltipText: 'Requires a value when saving data.',
  storageModeText: 'Storage Mode:',
  storageModeTooltipText: 'How the value is stored: Text, Id, or Code.',
  visibleText: 'Visible:',
  visibleTooltipText: 'Show or hide this control on the form.',
  labelPlacementText: { left: 'Left', right: 'Right', top: 'Top', none: 'None' },
  displayModeTypeText: 
   { AsControl: 'As Control',
     AsText: 'As Text',
     AsHyperlink: 'As Hyperlink' },
  storageModeTypeText: { Text: 'Text', Id: 'ID', Code: 'Code' },
  pickListRequestErrorText: 'Unable to retrieve picklists from server.' }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/PickListAdvancedPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/PickListAdvancedPropertyEditor',{});
},
'Sage/UI/nls/en/ActivityList':function(){
define("Sage/UI/nls/en/ActivityList", {
    addMeetingText: 'Schedule Meeting',
    addPhoneCallText: 'Schedule Phone Call',
    addToDoText: 'Schedule To-Do',
    helpText: 'Help',
    completeText: 'Complete',
    typeText: 'Type',
    startDateText: 'Date/Time',
    dateRangeText: 'Date Range',
    durationText: 'Duration',
    leaderText: 'Leader',
    contactText: 'Contact',
    opportunityText: 'Opportunity',
    descriptionText: 'Regarding',
    categoryText: 'Category',
    firstNameText: 'First Name',
    lastNameText: 'Last Name'
});
},
'Sage/UI/nls/en-us/ActivityList':function(){
define('Sage/UI/nls/en-us/ActivityList',{});
},
'Sage/UI/Alarms/nls/en/JobNotificationPopup':function(){
define("Sage/UI/Alarms/nls/en/JobNotificationPopup", {
    title: 'Job Notifications',
    helpText: 'Help',
    colNameJobName: 'Type',
    colNameProgress: 'Progress',
    colNameStatus: 'Status',
    colExecutionResult: 'Result'
});
},
'Sage/UI/Alarms/nls/en-us/JobNotificationPopup':function(){
define('Sage/UI/Alarms/nls/en-us/JobNotificationPopup',{});
},
'Sage/MainView/JobMgr/templates/nls/en/ExecutionsListSummary':function(){
define("Sage/MainView/JobMgr/templates/nls/en/ExecutionsListSummary", (
{}
));
},
'Sage/MainView/JobMgr/templates/nls/en-us/ExecutionsListSummary':function(){
define('Sage/MainView/JobMgr/templates/nls/en-us/ExecutionsListSummary',{});
},
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/en/LeadLookupConfig':function(){
define("Sage/MainView/ActivityMgr/AttendeeLookup/nls/en/LeadLookupConfig", (
{ contactText: 'Contact',
  accountText: 'Account',
  lookupContactText: 'Lookup Contact',
  nameText: 'Name',
  cityText: 'City',
  stateText: 'State',
  workphoneText: 'Work Phone',
  emailText: 'Email',
  dialogButtonText: 'Add Selected',
  cancelText: 'Close',
  colFirstName: 'First Name',
  colLastName: 'Last Name',
  colTitle: 'Title',
  colCompany: 'Company',
  colWorkPhone: 'Work Phone',
  colEmail: 'Email',
  dialogTitleText: 'Lookup Leads'
}
));
},
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/en-us/LeadLookupConfig':function(){
define('Sage/MainView/ActivityMgr/AttendeeLookup/nls/en-us/LeadLookupConfig',{});
},
'Sage/MainView/ReportMgr/nls/en/SchedulesListPanelConfig':function(){
define("Sage/MainView/ReportMgr/nls/en/SchedulesListPanelConfig", (
{ colJobName: 'Job Name',
  colNameDescription: 'Description',
  colNameRunAsUser: 'Scheduled By',
  colNameLastExecutionDate: 'Last Run',
  colNameExecutionCount: 'Execution Count',
  colNameStartTimeUtc: 'Start Time',
  colNameEndTimeUtc: 'End Time',
  colNamePriority: 'Priority',
  colNameStatus: 'Status',
  colNameTemplate: 'Template' }
));
},
'Sage/MainView/ReportMgr/nls/en-us/SchedulesListPanelConfig':function(){
define('Sage/MainView/ReportMgr/nls/en-us/SchedulesListPanelConfig',{});
},
'Sage/QuickForms/Design/Editors/nls/en/GenericAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/GenericAdvancedPropertyEditor", (
{ titleText: 'Advanced',
  appearanceText: 'Appearance',
  controlInfoText: 'Control Info',
  controlIdText: 'Control Id:',
  controlIdTooltipText: 'Identifier for this control.',
  controlTypeText: 'Control Type:',
  controlTypeTooltipText: 'Saleslogix control type.',
  visibleText: 'Visible:',
  visibleTooltipText: 'Show or hide this control on the form.' }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/GenericAdvancedPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/GenericAdvancedPropertyEditor',{});
},
'Sage/UI/nls/en/CalendarUsersListPane':function(){
define("Sage/UI/nls/en/CalendarUsersListPane", {
    header_color: 'Color',
    header_user: 'User',
    maxUsersErrorMessage: 'Sorry, you cannot view more than ${0} calendars (including your own) at one time.  Clear one of the currently-selected calendars and try again.',
    editUsersLinkText: 'Edit Calendar Users',
    noUsersMessage: 'No users added, add users by clicking \'Edit Calendar Users\' link above'
});
},
'Sage/UI/nls/en-us/CalendarUsersListPane':function(){
define('Sage/UI/nls/en-us/CalendarUsersListPane',{});
},
'Sage/QuickForms/Design/Editors/nls/en/PickListBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/PickListBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  captionText: 'Caption:',
  captionTooltipText: 'The label to display on the form for this control.',
  captionAlignmentText: 'Caption Alignment:',
  captionAlignmentTooltipText: 'Justification of the label text.',
  isReadOnlyText: 'Read Only:',
  isReadOnlyTooltipText: 'Does not allow edits.',
  toolTipText: 'Tooltip:',
  toolTipTooltipText: 'Short help text about control.',
  alignmentText: { left: 'Left', center: 'Center', right: 'Right' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/PickListBasicPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/PickListBasicPropertyEditor',{});
},
'Sage/QuickForms/Design/Editors/nls/en/ColumnBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/ColumnBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Appearance',
  indexText: 'Index:',
  indexTooltipText: 'Number of the row or column, beginning with zero.',
  widthText: 'Width:',
  widthTooltipText: 'Width of this column of controls.',
  sizeTypeText: 'Size Type:',
  sizeTypeTooltipText: 'Method of sizing: Absolute, AutoSize, or Percent.',
  rowSizeTypeText: 
   { Absolute: 'Absolute',
     Percent: 'Percent',
     AutoSize: 'AutoSize' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/ColumnBasicPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/ColumnBasicPropertyEditor',{});
},
'Sage/MainView/JobMgr/templates/nls/en/ExecutionDetailSummary':function(){
define("Sage/MainView/JobMgr/templates/nls/en/ExecutionDetailSummary", (
{ txtJobName_Caption: 'Type:',
  txtUser_Caption: 'User:',
  txtTriggerId_Caption: 'Schedule:',
  txtScheduledStartTime_Caption: 'Scheduled Start Time:',
  txtStartTime_Caption: 'Actual Start Time:',
  txtPhase_Caption: 'Phase:',
  txtPhaseDetail_Caption: 'Phase Detail:',
  txtProgress_Caption: 'Progress:',
  txtElapsedTime_Caption: 'Elapsed Time:',
  txtRemainingTime_Caption: 'Remaining Time:',
  txtStatus_Caption: 'Status:',
  txtResult_Caption: 'Result:' }
));
},
'Sage/MainView/JobMgr/templates/nls/en-us/ExecutionDetailSummary':function(){
define('Sage/MainView/JobMgr/templates/nls/en-us/ExecutionDetailSummary',{});
},
'Sage/MainView/ReportMgr/nls/en/ReportManagerGroupContextService':function(){
define("Sage/MainView/ReportMgr/nls/en/ReportManagerGroupContextService", (
{ reportsTabDisplayName: 'Reports',
  schedulesTabDisplayName: 'Schedules',
  historyTabDisplayName: 'History' }
));
},
'Sage/MainView/ReportMgr/nls/en-us/ReportManagerGroupContextService':function(){
define('Sage/MainView/ReportMgr/nls/en-us/ReportManagerGroupContextService',{});
},
'Sage/MainView/IntegrationContract/nls/en/MatchingOptionsConfig':function(){
define("Sage/MainView/IntegrationContract/nls/en/MatchingOptionsConfig", (
{ matchingCaption: 'Edit Match Criteria',
  matchingHeader: 'Match Criteria for ',
  matchingDescription: 'Add or remove operators to define the match criteria for all users who link Saleslogix records with an accounting system. This criteria determines the results returned when searching for matching records between accounting systems.',
  propertyText: 'Property',
  operatorText: 'Operator',
  loadingText: 'Loading...',
  filter_AddCondition: 'Add Condition',
  filter_RemoveCondition: 'Remove Condition',
  error_InvalidEndpoint: 'Please specify a valid endpoint before continuing.',
  okText: 'OK',
  cancelText: 'Cancel' }
));
},
'Sage/MainView/IntegrationContract/nls/en-us/MatchingOptionsConfig':function(){
define('Sage/MainView/IntegrationContract/nls/en-us/MatchingOptionsConfig',{});
},
'Sage/QuickForms/Design/Editors/nls/en/FormBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/FormBasicPropertyEditor", (
{ titleText: 'Basic',
  generalText: 'General',
  activeControlText: 'Active Control:',
  activeControlTooltipText: 'The control the user\\\'s cursor starts on.',
  descriptionText: 'Description:',
  descriptionTooltipText: 'Optional description of the purpose of the form.',
  nameText: 'Name:',
  nameTooltipText: 'Form identifier used by the system.' }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/FormBasicPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/FormBasicPropertyEditor',{});
},
'Sage/UI/Alarms/nls/en/AlarmButton':function(){
define("Sage/UI/Alarms/nls/en/AlarmButton", {
    pastDueToolTipFmt: ' You have ${0} activities that are past due.'
});
},
'Sage/UI/Alarms/nls/en-us/AlarmButton':function(){
define('Sage/UI/Alarms/nls/en-us/AlarmButton',{});
},
'Sage/MainView/ActivityMgr/nls/en/OccurrenceOrSeriesQueryDlg':function(){
define("Sage/MainView/ActivityMgr/nls/en/OccurrenceOrSeriesQueryDlg", (
{ titleFmt: '${type} - ${description}',
  actDateText: 'Activity Date:',
  contactText: 'Contact:',
  accountText: 'Account:',
  opportunityText: 'Opportunity:',
  editAllText: 'Edit all Occurrences',
  editOneText: 'Edit this Occurrence',
  completeAllText: 'Complete all Occurrences',
  completeOneText: 'Complete this Occurrence',
  deleteAllText: 'Delete all Occurrences',
  deleteOneText: 'Delete this Occurrence',
  continueText: 'Continue',
  failedToLoadMsg: 'Could not load activity' }
));
},
'Sage/MainView/ActivityMgr/nls/en-us/OccurrenceOrSeriesQueryDlg':function(){
define('Sage/MainView/ActivityMgr/nls/en-us/OccurrenceOrSeriesQueryDlg',{});
},
'Sage/Utility/File/nls/en/Attachment':function(){
define("Sage/Utility/File/nls/en/Attachment", {
    uploadingAttachments: 'Uploading attachments',
    uploadCompleted: 'Completed',
    uploadingPleaseWait: 'Uploading, please wait...',
    uploadFailed: 'Upload failed.'
});
},
'Sage/Utility/File/nls/en-us/Attachment':function(){
define('Sage/Utility/File/nls/en-us/Attachment',{});
},
'Sage/QuickForms/Design/nls/en/GenericControlDesigner':function(){
define("Sage/QuickForms/Design/nls/en/GenericControlDesigner", (
{ displayNameText: 'Unknown' }
));
},
'Sage/QuickForms/Design/nls/en-us/GenericControlDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/GenericControlDesigner',{});
},
'Sage/QuickForms/Design/nls/en/PropertyEditorContainer':function(){
define("Sage/QuickForms/Design/nls/en/PropertyEditorContainer", (
{ specificTitleFormatText: '${0} Properties (${1})',
  genericTitleFormatText: '${0} Properties' }
));
},
'Sage/QuickForms/Design/nls/en-us/PropertyEditorContainer':function(){
define('Sage/QuickForms/Design/nls/en-us/PropertyEditorContainer',{});
},
'Sage/Services/nls/en/ReportingService':function(){
define("Sage/Services/nls/en/ReportingService", {
    txtUnsupportedReportType: 'Unsupported report type: ${0}.',
    txtUnexpectedError: 'Sorry an error occurred: ${0} ${1}.',
    invalidEntityError: 'The entity ID has not been defined or could not be determined.',
    invalidReportPluginError: 'The report plugin ID has not been defined or could not be determined.',
    invalidTableNameError: 'The table name has not been defined or could not be determined.',
    noDefaultReportError: 'A default report could not be located for the current entity.',
    reportCannotBeShownError: 'The report cannot be shown.'
});
},
'Sage/Services/nls/en-us/ReportingService':function(){
define('Sage/Services/nls/en-us/ReportingService',{});
},
'Sage/MailMerge/nls/en/Helper':function(){
define("Sage/MailMerge/nls/en/Helper", (
{ destkopErrorsError: 'The call to DesktopErrors() failed.',
  mailMergeInfoStoreError: 'The call to MailMergeInfoStore() failed.' }
));
},
'Sage/MailMerge/nls/en-us/Helper':function(){
define('Sage/MailMerge/nls/en-us/Helper',{});
},
'Sage/UI/Dashboard/nls/en/Dashboard':function(){
define("Sage/UI/Dashboard/nls/en/Dashboard", {
    newTabTitleText: 'New Tab Title',
    inputTitleText: 'Input a Title',
    copiedPageText: 'Copied Tab',
    showText: 'Show'
});
},
'Sage/UI/Dashboard/nls/en-us/Dashboard':function(){
define('Sage/UI/Dashboard/nls/en-us/Dashboard',{});
},
'Sage/MainView/ActivityMgr/nls/en/ActivityListPanelConfig':function(){
define("Sage/MainView/ActivityMgr/nls/en/ActivityListPanelConfig", (
{ colNameComplete: 'Complete',
  colNameAttachment: 'Attachment',
  colNameRecurring: 'Recurring',
  colNameAlarm: 'Alarm',
  colNameType: 'Activity Type',
  colNameStartDate: 'Start Date',
  colNameDuration: 'Duration',
  colNameContact: 'Name',
  colNameLead: 'Lead',
  colNameAccount: 'Account/Company',
  colNameCompany: 'Company',
  colNameRegarding: 'Regarding',
  colNamePriority: 'Priority',
  colNameUserId: 'Leader',
  colNameTimeless: 'Timeless',
  colNameTypeName: 'Type',
  colNameContactName: 'Name',
  SnoozeAlarm: 'Snooze Alarm',
  DismissAlarm: 'Dismiss Alarm',
  colNameUnConfirmStatus: 'Unconfirmed',
  colNameAssociationCount: 'Participant Count' }
));
},
'Sage/MainView/ActivityMgr/nls/en-us/ActivityListPanelConfig':function(){
define('Sage/MainView/ActivityMgr/nls/en-us/ActivityListPanelConfig',{});
},
'Sage/UI/Controls/nls/en/PickList':function(){
define("Sage/UI/Controls/nls/en/PickList", {
    okText: 'OK',
    missingPickListText: 'The PickList Could Not be Found'
});
},
'Sage/UI/Controls/nls/en-us/PickList':function(){
define('Sage/UI/Controls/nls/en-us/PickList',{});
},
'Sage/MainView/ActivityMgr/nls/en/HistoryEditorAttendeesTab':function(){
define("Sage/MainView/ActivityMgr/nls/en/HistoryEditorAttendeesTab", (
{ header_Name: 'Name',
  header_AccountName: 'Account/Company',
  header_Type: 'Type',
  header_Primary: 'Primary',
  header_RoleName: 'Role',
  header_Phone: 'Phone',
  header_Email: 'Email',
  header_TimeZone: 'Time Zone',
  header_Notes: 'Notes',
  header_Status: 'Status' }
));
},
'Sage/MainView/ActivityMgr/nls/en-us/HistoryEditorAttendeesTab':function(){
define('Sage/MainView/ActivityMgr/nls/en-us/HistoryEditorAttendeesTab',{});
},
'Sage/Utility/nls/en/Email':function(){
define("Sage/Utility/nls/en/Email", (
{ RecipientInfoError: 'There was an unexpected error attempting to read the recipient information: ${0}',
  MailToProtocolError: 'There was an error attempting to generate an e-mail message using the mailto: protocol (href.length=${0}). The number of e-mail recipients may need to be reduced. Browser error: ${1}.',
  InvalidContextError: 'The e-mail request cannot be processed. This operation is only supported for Contacts or Leads.',
  InvalidArgumentError: 'The e-mail request cannot be processed. Invalid argument.',
  FilteredOutMsg: 'Filtered out: Non-solicitable: ${0}; Invalid: ${1}; Dupes: ${2}',
  AllInvalidEmailError: 'The collection does not include one entity with a valid and/or solicitable e-mail address.',
  EmailFieldQueried: 'The e-mail field queried was: ${0}.',
  EntityInfoError: 'The was a failure attempting to retrieve the entity information.',
  CapabilityModeError: 'The capability to write an e-mail to a group selection is only available in list views.',
  CapabilityEntityError: 'The capability to write an e-mail to a group selection is only available for Contacts or Leads.',
  NoRowsSelectedError: 'There are no rows selected.' }
));
},
'Sage/Utility/nls/en-us/Email':function(){
define('Sage/Utility/nls/en-us/Email',{});
},
'Sage/TaskPane/nls/en/SecurityManagerTasksTasklet':function(){
define("Sage/TaskPane/nls/en/SecurityManagerTasksTasklet", (
{ addSecurityProfileTitle: 'Add Profile',
  editSecurityProfileTitle: 'Edit Profile' }
));
},
'Sage/TaskPane/nls/en-us/SecurityManagerTasksTasklet':function(){
define('Sage/TaskPane/nls/en-us/SecurityManagerTasksTasklet',{});
},
'Sage/UI/nls/en/TimeZoneItem':function(){
define("Sage/UI/nls/en/TimeZoneItem", {
    buttonOKText: 'OK',
    buttonCancelText: 'Cancel',
    timeZoneText: 'Time zone',
    timeZoneSettingsText: 'Time Zone Settings',
    setTimeZoneText: 'Set the time zone:'
});
},
'Sage/UI/nls/en-us/TimeZoneItem':function(){
define('Sage/UI/nls/en-us/TimeZoneItem',{});
},
'Sage/MainView/ReportMgr/templates/nls/en/HistoryListSummary':function(){
define("Sage/MainView/ReportMgr/templates/nls/en/HistoryListSummary", (
{}
));
},
'Sage/MainView/ReportMgr/templates/nls/en-us/HistoryListSummary':function(){
define('Sage/MainView/ReportMgr/templates/nls/en-us/HistoryListSummary',{});
},
'Sage/UI/Columns/nls/en/SlxEdit':function(){
define("Sage/UI/Columns/nls/en/SlxEdit", { editText: 'Edit' });
},
'Sage/UI/Columns/nls/en-us/SlxEdit':function(){
define('Sage/UI/Columns/nls/en-us/SlxEdit',{});
},
'Sage/Reporting/nls/en/Enumerations':function(){
define(
"Sage/Reporting/nls/en/Enumerations", {
    txtGroup: 'Group',
    txtDateRange: 'Date Range',
    txtUser: 'User',
    txtQuery: 'Query',
    txtIsGreaterThan: 'Is Greater Than',
    txtIsLessThan: 'Is Less Than',
    txtIsInTheRange: 'Is In The Range',
    txtIsAfter: 'Is After',
    txtIsBefore: 'Is Before',
    txtContains: 'Contains',
    txtStartsWith: 'Starts With',
    txtEndsWith: 'Ends With',
    txtIs: 'Is',
    txtIsNot: 'Is Not',
    txtOnDemand: 'On Demand',
    txtScheduled: 'Scheduled',
    txtCrystalReport: 'Crystal Report',
    txtExportToFileReportType: 'Export to File',
    txtUnknownReportType: 'Unknown',
    txtNoFormat: 'No Format',
    txtPdf: 'PDF',
    txtExcel: 'Excel',
    txtExcelDataOnly: 'Excel-Data',
    txtCsv: 'CSV',
    txtWord: 'Word',
    txtXml: 'XML'
});
},
'Sage/Reporting/nls/en-us/Enumerations':function(){
define('Sage/Reporting/nls/en-us/Enumerations',{});
},
'Sage/QuickForms/Design/Editors/nls/en/CheckBoxAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/CheckBoxAdvancedPropertyEditor", (
{ titleText: 'Advanced',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  controlInfoText: 'Control Info',
  dataText: 'Data',
  checkedText: 'Checked:',
  checkedTooltipText: 'Sets default state of checkbox to selected.',
  controlIdText: 'Control Id:',
  controlIdTooltipText: 'Identifier for this control.',
  controlLabelPlacementText: 'Label Placement:',
  controlLabelPlacementTooltipText: 'Label position in relation to the control.',
  controlTypeText: 'Control Type:',
  controlTypeTooltipText: 'Saleslogix control type.',
  defaultDataBindingText: 'Data Bindings:',
  defaultDataBindingTooltipText: 'Data field(s) in the database used by this control.',
  enabledText: 'Enabled:',
  enabledTooltipText: 'Allows user to interact with this control.',
  visibleText: 'Visible:',
  visibleTooltipText: 'Show or hide this control on the form.',
  labelPlacementText: { left: 'Left', right: 'Right', top: 'Top', none: 'None' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/CheckBoxAdvancedPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/CheckBoxAdvancedPropertyEditor',{});
},
'Sage/MainView/ReportMgr/Crystal/nls/en/CrystalReportConditionsDialog':function(){
define("Sage/MainView/ReportMgr/Crystal/nls/en/CrystalReportConditionsDialog", (
{ txtDialogTitle: 'Select Records',
  cmdBack_Caption: '< Back',
  cmdNext_Caption: 'Next >',
  cmdCancel_Caption: 'Cancel',
  grdCrystalConditions_ConditionType_Caption: 'Type',
  grdCrystalConditions_TableName_Caption: 'Table',
  grdCrystalConditions_FieldName_Caption: 'Field',
  grdCrystalConditions_Operator_Caption: 'Operator',
  grdCrystalConditions_Value_Caption: 'Condition Value',
  txtShowRecordsThatMatch: 'Show records that match: ',
  txtMatch: 'Match:',
  txtOfTheFollowingConditions: 'of the following conditions:',
  txtAny: 'Any',
  txtAll: 'All',
  txtAllRecords: '[All Records]',
  txtSpecificConditions: '[Specific Conditions]',
  txtCurrentUser: '[Current User]' }
));
},
'Sage/MainView/ReportMgr/Crystal/nls/en-us/CrystalReportConditionsDialog':function(){
define('Sage/MainView/ReportMgr/Crystal/nls/en-us/CrystalReportConditionsDialog',{});
},
'Sage/Extensions/Activity/ListPanelOverrides/nls/en/ActivityListPanelConfig':function(){
define("Sage/Extensions/Activity/ListPanelOverrides/nls/en/ActivityListPanelConfig", (
{ colNameAssociationCount: 'Participant Count' }
));
},
'Sage/Extensions/Activity/ListPanelOverrides/nls/en-us/ActivityListPanelConfig':function(){
define('Sage/Extensions/Activity/ListPanelOverrides/nls/en-us/ActivityListPanelConfig',{});
},
'Sage/UI/nls/en/JobSchedulingWidget':function(){
define("Sage/UI/nls/en/JobSchedulingWidget", {
    lblCreateSchedule: 'Create job schedule to run',
    lblEveryText: 'Every',
    lblOnText: 'on',
    lblOnTheText: 'on the',
    lblAtText: 'at',
    lblMinutesPastHour: 'minutes past the hour',
    lblFromTimeText: 'Run from',
    lblToTimeText: 'to',
    lblMinutesFrequency: 'minutes',
    lblHourlyFrequency: 'hour(s)',
    lblDailyFrequency: 'day',
    lblWeekDayFrequency: 'week day',
    lblWeeklyFrequency: 'week',
    lblMonthlyFrequency: 'month',
    lblYearlyFrequency: 'year',
    lblSunday: 'Sunday',
    lblMonday: 'Monday',
    lblTuesday: 'Tuesday',
    lblWednesday: 'Wednesday',
    lblThursday: 'Thursday',
    lblFriday: 'Friday',
    lblSaturday: 'Saturday',
    lblFirstDay: 'first',
    lblSecondDay: 'second',
    lblThirdDay: 'third',
    lblFourthDay: 'fourth',
    lblCronExpressionText: 'Cron expression',
    txtInvalidScheduleTitle: 'Invalid Schedule',
    txtInvalidDatesMessage: 'The end time must be after the start time. Please correct this information before continuing.',
    txtInvalidScheduleTime: 'The start and end times specified will prevent this schedule from running. Please correct this information before continuing.',
    txtInvalidStartDate: 'A start date is required. Please specify a start date before continuing.',
    txtInvalidEndDate: 'A end date is required. Please specify a end date before continuing'
});
},
'Sage/UI/nls/en-us/JobSchedulingWidget':function(){
define('Sage/UI/nls/en-us/JobSchedulingWidget',{});
},
'Sage/UI/Controls/nls/en/LogOffButton':function(){
define("Sage/UI/Controls/nls/en/LogOffButton", { logOffText: 'Log Off' });
},
'Sage/UI/Controls/nls/en-us/LogOffButton':function(){
define('Sage/UI/Controls/nls/en-us/LogOffButton',{});
},
'Sage/QuickForms/Design/Editors/nls/en/TextBoxAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/TextBoxAdvancedPropertyEditor", (
{ titleText: 'Advanced',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  controlInfoText: 'Control Info',
  dataText: 'Data',
  controlIdText: 'Control Id:',
  controlIdTooltipText: 'Identifier for this control.',
  controlLabelPlacementText: 'Label Placement:',
  controlLabelPlacementTooltipText: 'Label position in relation to the control.',
  controlTypeText: 'Control Type:',
  controlTypeTooltipText: 'Saleslogix control type.',
  defaultDataBindingText: 'Data Bindings:',
  defaultDataBindingTooltipText: 'Data field(s) in the database used by this control.',
  enabledText: 'Enabled:',
  enabledTooltipText: 'Allows user to interact with this control.',
  maxLengthText: 'Max Length:',
  maxLengthTooltipText: 'Maximum number of characters user can enter.',
  requiredText: 'Required:',
  requiredTooltipText: 'Requires a value when saving data.',
  visibleText: 'Visible:',
  visibleTooltipText: 'Show or hide this control on the form.',
  labelPlacementText: { left: 'Left', right: 'Right', top: 'Top', none: 'None' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/TextBoxAdvancedPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/TextBoxAdvancedPropertyEditor',{});
},
'Sage/MainView/ActivityMgr/nls/en/EditEventEditor':function(){
define("Sage/MainView/ActivityMgr/nls/en/EditEventEditor", (
{ titleScheduleText: 'Schedule Event',
  titleEditText: 'Edit Event',
  lblDayTypeText: 'Day Type:',
  lblStartDateText: 'Start Date:',
  lblEndDateText: 'End Date:',
  lblUserText: 'User:',
  lookupUserText: 'Lookup User',
  lblCategoryText: 'Category:',
  lblLocationText: 'Location:',
  lblDescriptionText: 'Description:',
  btnOkayText: 'OK',
  btnCancelText: 'Cancel',
  btnHelpText: 'Help',
  eventTypeActiveText: 'Active',
  eventTypeBusinessTripText: 'Business Trip',
  eventTypeConferenceText: 'Conference',
  eventTypeHolidayText: 'Holiday',
  eventTypeOffText: 'Off',
  eventTypeTradeShowText: 'Trade Show',
  eventTypeUnavailableText: 'Unavailable',
  eventTypeVacationText: 'Vacation',
  errorText: 'I\'m sorry, the event could not be created because an error occurred.',
  invaildDatesText: 'I\'m sorry, the end date cannot be earlier than the start date.',
  nameText: 'Name' }
));
},
'Sage/MainView/ActivityMgr/nls/en-us/EditEventEditor':function(){
define('Sage/MainView/ActivityMgr/nls/en-us/EditEventEditor',{});
},
'Sage/MailMerge/nls/en/Loader':function(){
define("Sage/MailMerge/nls/en/Loader", (
{ decodeFailed: 'The call to DecodeMailMergeJsonFromUrl() failed.' }
));
},
'Sage/MailMerge/nls/en-us/Loader':function(){
define('Sage/MailMerge/nls/en-us/Loader',{});
},
'Sage/UI/Controls/nls/en/DateTimePicker':function(){
define("Sage/UI/Controls/nls/en/DateTimePicker", {
    okText: 'OK',
    cancelText: 'Cancel',
    convertDescription: 'Compare to another time zone.',
    convertText: 'Compare',
    calculatorText: 'Time Zone Calculator',
    timeZoneSourceText: 'Current Time Zone',
    timeZoneDestText: 'Comparison Time Zone',
    buttonToolTip: 'Calendar',
    timeStartText: 'Time',
    timeZoneCalculatorText: 'Time Zone Calculator'
});
},
'Sage/UI/Controls/nls/en-us/DateTimePicker':function(){
define('Sage/UI/Controls/nls/en-us/DateTimePicker',{});
},
'Sage/MainView/ReportMgr/nls/en/ReportManagerActions':function(){
define("Sage/MainView/ReportMgr/nls/en/ReportManagerActions", (
{ txtSelectRecord: 'Please select a record in the list before continuing.',
  txtInvalidSelectionCount: 'You must have at least one record selected before continuing.',
  confirm_Deletion: 'Are you sure you want to delete the selected ${0}?',
  confirm_Report: 'report',
  confirm_Schedule: 'schedule',
  confirm_ReportHistory: 'report history record',
  txtYes: 'Yes',
  txtNo: 'No',
  deleteJobError: 'Sorry an error occurred during the deletion process: ${0}',
  txtDeleteHistory: 'Deleting history records',
  txtDeleteTitle: 'Delete History',
  txtErrorDeleteReport: 'An error occurred deleting report: ${0}'
}
));
},
'Sage/MainView/ReportMgr/nls/en-us/ReportManagerActions':function(){
define('Sage/MainView/ReportMgr/nls/en-us/ReportManagerActions',{});
},
'Sage/UI/Alarms/nls/en/AlarmPopup':function(){
define("Sage/UI/Alarms/nls/en/AlarmPopup", {
    title: 'Alerts',
    alarmsText: 'Alarms',
    unconfirmedText: 'Unconfirmed',
    deleteText: 'Delete Selected',
    helpText: 'Help',
    completeText: 'Complete selected activities'
});
},
'Sage/UI/Alarms/nls/en-us/AlarmPopup':function(){
define('Sage/UI/Alarms/nls/en-us/AlarmPopup',{});
},
'Sage/MainView/Contact/nls/en/ContactUserAssociationEditor':function(){
define("Sage/MainView/Contact/nls/en/ContactUserAssociationEditor", (
{ btnCancel_Caption: 'Cancel',
  btnOK_Caption: 'OK',
  dialogTitleText: 'Associate Contact with User',
  associateContactText: 'Associate the selected contact with the following user',
  user_Caption: 'User',
  lookupUserText: 'Lookup User',
  lookupNameColText: 'Name',
  lookupTitleColText: 'Title',
  lookupDepartmentColText: 'Department',
  lookupRegionColText: 'Region',
  lookupTypeColText: 'Type',
  disAssociateTitle: 'Disassociate form a User',
  associationExistsMessage: 'The user you selected is already associated to a contact. Select another user.' }
));
},
'Sage/MainView/Contact/nls/en-us/ContactUserAssociationEditor':function(){
define('Sage/MainView/Contact/nls/en-us/ContactUserAssociationEditor',{});
},
'Sage/QuickForms/Design/Editors/nls/en/OwnerBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/OwnerBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  captionText: 'Caption:',
  captionTooltipText: 'The label to display on the form for this control.',
  captionAlignmentText: 'Caption Alignment:',
  captionAlignmentTooltipText: 'Justification of the label text.',
  isReadOnlyText: 'Read Only:',
  isReadOnlyTooltipText: 'Does not allow edits.',
  toolTipText: 'Tooltip:',
  toolTipTooltipText: 'Short help text about control.',
  alignmentText: { left: 'Left', center: 'Center', right: 'Right' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/OwnerBasicPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/OwnerBasicPropertyEditor',{});
},
'Sage/MainView/JobMgr/nls/en/BaseListPanelConfig':function(){
define("Sage/MainView/JobMgr/nls/en/BaseListPanelConfig", (
{ titleFmtString: '${0}' }
));
},
'Sage/MainView/JobMgr/nls/en-us/BaseListPanelConfig':function(){
define('Sage/MainView/JobMgr/nls/en-us/BaseListPanelConfig',{});
},
'Sage/QuickForms/Design/nls/en/TextBoxControlDesigner':function(){
define("Sage/QuickForms/Design/nls/en/TextBoxControlDesigner", (
{ displayNameText: 'TextBox' }
));
},
'Sage/QuickForms/Design/nls/en-us/TextBoxControlDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/TextBoxControlDesigner',{});
},
'Sage/QuickForms/Design/nls/en/EmailControlDesigner':function(){
define("Sage/QuickForms/Design/nls/en/EmailControlDesigner", (
{ displayNameText: 'Email' }
));
},
'Sage/QuickForms/Design/nls/en-us/EmailControlDesigner':function(){
define('Sage/QuickForms/Design/nls/en-us/EmailControlDesigner',{});
},
'Sage/UI/Controls/nls/en/Lookup':function(){
define("Sage/UI/Controls/nls/en/Lookup", { buttonToolTip: 'Find', closeButtonToolTip: 'Remove' });
},
'Sage/UI/Controls/nls/en-us/Lookup':function(){
define('Sage/UI/Controls/nls/en-us/Lookup',{});
},
'Sage/Utility/File/nls/en/DescriptionsForm':function(){
define("Sage/Utility/File/nls/en/DescriptionsForm", {
    titleFmt: 'Add Attachment(s) for ${0}',
    titleLibraryDoc: 'Add Library Document (s)',
    fileNameText: 'File name and size: ',
    descText: 'Description:',
    okText: 'OK',
    cancelText: 'Cancel'
});
},
'Sage/Utility/File/nls/en-us/DescriptionsForm':function(){
define('Sage/Utility/File/nls/en-us/DescriptionsForm',{});
},
'Sage/QuickForms/Design/Editors/nls/en/NumericBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/en/NumericBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Appearance',
  behaviorText: 'Behavior',
  captionText: 'Caption:',
  captionTooltipText: 'The label to display on the form for this control.',
  captionAlignmentText: 'Caption Alignment:',
  captionAlignmentTooltipText: 'Justification of the label text.',
  isReadOnlyText: 'Read Only:',
  isReadOnlyTooltipText: 'Does not allow edits.',
  toolTipText: 'Tooltip:',
  toolTipTooltipText: 'Short help text about control.',
  alignmentText: { left: 'Left', center: 'Center', right: 'Right' } }
));
},
'Sage/QuickForms/Design/Editors/nls/en-us/NumericBasicPropertyEditor':function(){
define('Sage/QuickForms/Design/Editors/nls/en-us/NumericBasicPropertyEditor',{});
},
'Sage/TaskPane/nls/en/CommonTasksTasklet':function(){
define("Sage/TaskPane/nls/en/CommonTasksTasklet", (
{ okButtonText: 'OK',
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
  exportProcessingJobMsg: 'Processing export, you may continue waiting for completion, or go to the reports view to open your file.' }
));
},
'Sage/TaskPane/nls/en-us/CommonTasksTasklet':function(){
define('Sage/TaskPane/nls/en-us/CommonTasksTasklet',{});
},
'Sage/Utility/nls/en/Dashboard':function(){
define("Sage/Utility/nls/en/Dashboard", (
{ pageText: 'Page' }
));
},
'Sage/Utility/nls/en-us/Dashboard':function(){
define('Sage/Utility/nls/en-us/Dashboard',{});
}}});
define("Sage/nls/Sage_en-us", [], 1);
