require({cache:{
'Sage/Utility/File/nls/ru/FallbackFilePicker':function(){
define("Sage/Utility/File/nls/ru/FallbackFilePicker", {
    addLibraryFileText: 'Добавить файл библиотеки',
    attachFileText: 'Прикрепить файл',
    descriptionText: 'Описание',
    uploadFileText: 'Вложение',
    okText: 'ОК',
    cancelText: 'Отмена',
    invalidContext: 'Файл(ы) не могут быть загружены за пределами библиотеки.',
    fileTooLargeError: 'Загрузка файла была прервана из-за слишком большого размера файла.',
    pleaseSelectFile: 'Сначала выберите файл.',
    slxErrorIdInfo: 'ИД ошибки Saleslogix: '
});
},
'Sage/UI/nls/ru/Boolean':function(){
define("Sage/UI/nls/ru/Boolean", {
    yesText: 'Да',
    noText: 'Нет'
});
},
'Sage/Services/nls/ru/ActivityService':function(){
define("Sage/Services/nls/ru/ActivityService", (
{ txtErrorActionMsg: 'К сожалению, действие не удалось т.к. произошла ошибка.',
  txtActivity: 'Дело',
  txtActivities: 'Дела',
  txtActionDeleteActivites: 'Удалить дела',
  txtActionDeleteActivitiesQuestion: 'Будут удалены только те дела на которые у вас есть права на удаление. <P> Вы уверены, что хотите удалить {0} выбранные {1}?',
  txtAlarm: 'оповещение',
  txtAlarms: 'оповещения',
  txtActionSnoozeAlarm: 'Отложить оповещение',
  txtActionSnoozeQuestion: 'Вы уверены, что хотите отложить {0} выбранные {1} для {2} ?',
  txtActionSnoozeAllQuestion: 'Вы уверены, что хотите отложить все {0} для {1} ?',
  txtActionDismissAlarms: 'Отклонение оповещений',
  txtActionDismissAlarmsQuestion: 'Вы уверены, что хотите отклонить {0} выбранные {1}?',
  txtEvent: 'событие',
  txtEvents: 'события',
  txtActionDeleteEvents: 'Удаление событий',
  txtActionDeleteEventsQuestion: 'Будут удалены только те события на которые у вас есть права на удаление. <P> Вы уверены, что хотите удалить {0} выбранные {1}?',
  txtConfirmation: 'подтверждение',
  txtConfirmations: 'подтверждения',
  txtActionAcceptConfirmations: 'Принятие подтверждений',
  txtActionAcceptConfirmQuestion: 'Вы уверены, что хотите принять {0} выбранные {1}? Это действие распространяется только на новые подтверждения. Все остальные будут игнорироваться. ',
  txtDeclineConfirmations: 'Отклонение подтверждений',
  txtActionDeclineConfrimQuestion: 'Вы уверены, что хотите отклонить {0} выбранные {1}? Это действие распространяется только на новые подтверждения. Все остальные будут игнорироваться. ',
  txtActionRemoveConfirmations: 'Удалить подтверждения',
  txtActionRemoveConfirmationsQuestion: 'Вы уверены, что хотите удалить {0} выбранных {1}? Это действие распространяется на ведущие, отклоненные и удаленные подтверждения. Все остальные будут игнорироваться.',
  txtLiteratureRequest: 'Запрос на информационные материалы',
  txtLiteratureRequests: 'Запросы на информационные материалы',
  txtActionDeleteLiteratureRequests: 'Удаление запросов на информационные материалы',
  txtActionDeleteLiteratureRequestsQuestion: 'Будут удалены только запросы информационных материалов на которые у вас есть разрешение. <P> Вы уверены что хотите удалить {0} выбранные {1}?' }
));
},
'Sage/UI/Controls/nls/ru/CopyToClipboard':function(){
define("Sage/UI/Controls/nls/ru/CopyToClipboard", {
    closeText: 'Закрыть',
    dialogTitle: 'Скопировать текст в буфер обмена',
    helpText: 'Выберите нужный текст и нажмите Control-C  (Command-C на Mac) для копирования в буфер обмена.',
    textTab: 'Текст',
    sourceTab: 'Источник'
});
},
'Sage/Utility/nls/ru/Activity':function(){
define("Sage/Utility/nls/ru/Activity", (
{ ToDo: 'Дело',
  PhoneCall: 'Звонок',
  Meeting: 'Встреча',
  Personal: 'Личные дела',
  Literature: 'Инф. материалы',
  Fax: 'Факс',
  Letter: 'Письмо',
  Note: 'Заметка',
  Email: 'Эл. почта',
  Document: 'Документ',
  DatabaseChange: 'Изменение БД',
  Event: 'Событие',
  ScheduledEvent: 'Запланированное событие',
  Contact: 'Контакт',
  Lead: 'Наводка',
  New: 'Создать',
  Change: 'Изменить',
  Deleted: 'Удалено',
  Confirm: 'Подтвердить',
  Decline: 'Отклонить',
  Unknown: 'Неизвестен',
  Leader: 'Руководитель',
  Complete: 'Завершить',
  confirmTypeChanged: 'Изменено',
  confirmTypeConfirmed: 'Подтверждено',
  confirmTypeDeleted: 'Удалено' }
));
},
'Sage/QuickForms/Design/nls/ru/DesignPanel':function(){
define("Sage/QuickForms/Design/nls/ru/DesignPanel", (
{ cultureListText: 
   { iv: '[Инвариантно]',
     de_DE: 'de-DE',
     fr_FR: 'fr-FR',
     it_IT: 'it-IT',
     ru_RU: 'ru-RU' },
  helpText: 'Помощь',
  saveText: 'Сохранить',
  cultureText: 'Культура:',
  loadingText: 'Загрузка...',
  savingText: 'Сохранение...',
  saveErrorText: 'Произошла ошибка при сохранении формы.',
  readErrorText: 'Не удалось загрузить запрашиваемую форму.',
  cultureReloadConfirmText: 'Имеются несохраненные изменения.  Вы уверены, что вы хотите, перезагрузить форму с другим языком?' }
));
},
'Sage/UI/nls/ru/TimelessActivitiesPane':function(){
define("Sage/UI/nls/ru/TimelessActivitiesPane", {
    header_complete: 'Завершить',
    header_type: 'Тип',
    header_contact: 'Имя',
    header_regarding: 'Тема',
    tooltip_type: 'Тип',
    tooltip_contact: 'Контакт',
    tooltip_account: 'Субъект',
    tooltip_lead: 'Наводка',
    tooltip_phone: 'Телефон',
    tooltip_leader: 'Руководитель',
    tooltip_regarding: 'Тема',
    tooltip_location: 'Размещение',
    tooltip_notes: 'Заметки',
    tooltip_company: 'Компания'
});
},
'Sage/MainView/ActivityMgr/nls/ru/ActivityEditor':function(){
define("Sage/MainView/ActivityMgr/nls/ru/ActivityEditor", (
{ labelWidth: '120',
  tabNameGeneralText: 'Общие',
  tabNameAvailabilityText: 'Доступность',
  tabNameAssociationsText: 'Взаимосвязи',
  tabNameRecurringText: 'Повторение',
  tabNameAttachmentsText: 'Вложения',
  tabNameNotesText: 'Заметки',
  scheduleText: 'Планировать',
  startTimeText: 'Время начала',
  timeLessText: 'В течение дня',
  alarmText: 'Оповещение',
  durationText: 'Длительность',
  rolloverText: 'Автоматически переносить на следующий день',
  contactText: 'Контакт',
  accountText: 'Субъект',
  leadText: 'Наводка',
  opportunityText: 'Сделка',
  ticketText: 'Заявка',
  companyText: 'Компания',
  regardingText: 'Тема',
  notesText: 'Заметки',
  priorityText: 'Приоритет',
  leaderText: 'Руководитель',
  categoryText: 'Категория',
  locationText: 'Размещение',
  dialogHeaderFormatText: '${actionText} ${activityType} - ${description}',
  scheduledByFormatText: 'Запланировал ${user} ${date}',
  completeScheduledByFormatText: 'Запланировал ${user} ${date} первоначально на ${startDate}',
  newConfirmationHeaderFormatText: 'Подтверждение ${activityType}. Запланировал ${user}',
  otherConfimationHeaderFormatText: '${activityType} ${actionText} ${user}',
  acceptedText: 'Принят',
  declinedText: 'Отклонено',
  scheduledText: 'Запланировано',
  updatedText: 'Изменено',
  deletedText: 'Удалено',
  cancelText: 'Отмена',
  okText: 'ОК',
  completeText: 'Завершить',
  completeBtnText: 'Завершить...',
  completedText: 'Заверш.',
  deleteText: 'Удалить',
  lookupActText: 'Поиск Субъекта',
  lookupContactText: 'Поиск Контакта',
  lookupOpportunityText: 'Поиск сделки',
  lookupTicketText: 'Поиск Заявки',
  lookupLeadText: 'Поиск Наводки',
  lookupLeaderText: 'Поиск лидера',
  lookupResourcesText: 'Добавить участников и ресурсы',
  addResourceText: 'Добавить выбранные',
  mainPhoneText: 'Основной тел.',
  typeText: 'Тип',
  subTypeText: 'Подтип',
  nameText: 'Имя',
  cityText: 'Город',
  stateText: 'Область',
  workphoneText: 'Раб. телефон',
  emailText: 'Эл.почта',
  acctMgrText: 'Менеджер',
  descriptionText: 'Описание',
  stageText: 'Стадия',
  statusText: 'Статус',
  ownerText: 'Доступ',
  ticketNumberText: 'Номер заявки',
  phoneText: 'Телефон',
  urgencyText: 'Срочность',
  areaText: 'Область',
  recurringText: 'Повторение',
  resultText: 'Результат',
  followupText: 'Последующее',
  noneText: 'Нет',
  carryOverAttachmentsText: 'Перенести вложения',
  carryOverNotesText: 'Перенести заметки',
  asScheduledText: 'Как запланировано',
  nowText: 'Сейчас',
  responseText: 'Ответ',
  acceptText: 'Принять',
  declineText: 'Отклонить',
  deleteConfText: 'Удалить подтверждение',
  closeText: 'Закрыть',
  leadFullNameText: 'Имя',
  postalText: 'Почтовый код',
  failedLoadingDataMsg: 'Произошла ошибка при загрузке данных.',
  removeText: 'Исключить',
  noText: 'Нет',
  yesText: 'Да',
  areYouSureText: 'Запись будет удалена без возможности восстановления',
  couldNotSaveErrorText: 'К сожалению, дело не может быть сохранено, потому что произошла ошибка.',
  couldNotDeleteErrorText: 'К сожалению, дело не может быть удалено, потому что произошла ошибка.',
  couldNotCompleteErrorText: 'К сожалению, дело не может быть завершено из-за ошибки.',
  scheduleFollowUpErrorText: 'Не удалось составить расписание дальнейших действий из-за ошибки определения ИД журнала.',
  tabNameParticipants: 'Участники' }
));
},
'Sage/TaskPane/User/nls/ru/ContactUserAssociationEditor':function(){
define("Sage/TaskPane/User/nls/ru/ContactUserAssociationEditor", (
{ btnCancel_Caption: 'Отмена',
  btnOK_Caption: 'ОК',
  dialogTitleText: 'Связать пользователя с контактом',
  associateContactText: 'Связать выбранного пользователя со следующим контактом',
  user_Caption: 'Контакт',
  lookupContactText: 'Поиск Контакта',
  lookupFirstNameColText: 'Имя',
  lookupLastNameColText: 'Фамилия',
  lookupTitleColText: 'Название',
  lookupAccountColText: 'Субъект',
  lookupWorkPhoneColText: 'Раб. телефон',
  lookupEmailText: 'Эл.почта',
  disAssociateTitle: 'Удалить связь с контактом',
  associationExistsMessage: 'Выбранный контакт уже связан с пользователем. Выберите другой контакт.' }
));
},
'Sage/MainView/nls/ru/ActivityManager':function(){
define("Sage/MainView/nls/ru/ActivityManager", (
{ titleFmtString: '${0}',
  tabDisplayNameActivity: 'Дела',
  tabDisplayNameLit: 'Инф. материалы',
  tabDisplayNameEvent: 'События',
  tabDisplayNameConfirm: 'Подтверждения',
  activityColNameComplete: 'Завершить',
  activityColNameAttachment: 'Вложение',
  activityColNameRecurring: 'Повторение',
  activityColNameAlarm: 'Оповещение',
  activityColNameType: 'ActivityType',
  activityColNameStartDate: 'Дата начала',
  activityColNameDuration: 'Длительность',
  activityColNameContact: 'Контакт',
  activityColNameLead: 'Наводка',
  activityColNameAccount: 'Субъект',
  activityColNameRegarding: 'Тема',
  activityColNamePriority: 'Приоритет',
  activityColNameUserId: 'Руководитель',
  activityTypePhone: 'Телефон',
  activityTypeCall: 'Звонок',
  activityTypeMeeting: 'Встреча',
  activityTypePersonal: 'Личные' }
));
},
'Sage/Services/nls/ru/JobService':function(){
define("Sage/Services/nls/ru/JobService", (
{ txtInvalidParameter: 'Недопустимый параметр: ${0}.',
  txtTriggerJobError: 'Возникла ошибка при запуске задания ${0}: ${1} ${2}.',
  txtScheduleJobError: 'Возникла ошибка при планировании задания ${0}: ${1} ${2}.',
  txtUnexpectedError: 'Возникла ошибка: ${0} ${1}.' }
));
},
'Sage/QuickForms/Design/nls/ru/NumericControlDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/NumericControlDesigner", (
{ displayNameText: 'Числовой' }
));
},
'Sage/QuickForms/Design/Editors/nls/ru/_PropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/_PropertyEditor", (
{ titleText: 'Свойства' }
));
},
'Sage/Services/nls/ru/ActivityActionProcessor':function(){
define("Sage/Services/nls/ru/ActivityActionProcessor", (
{ btnOkayText: 'ОК',
  btnCancelText: 'Отмена',
  btnCloseText: 'Закрыть',
  btnHelpText: 'Помощь',
  processingText: 'Обработка запроса, пожалуйста, подождите...',
  failureText: 'К сожалению, действие не удалось т.к. произошла ошибка.',
  titleText: 'Процесс' }
));
},
'Sage/QuickForms/Design/Editors/nls/ru/TextBoxBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/TextBoxBasicPropertyEditor", (
{ titleText: 'Бейсик',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  captionText: 'Заголовок:',
  captionTooltipText: 'Подпись для показа на форме для данного элемента управления.',
  captionAlignmentText: 'Выравнивание заголовка:',
  captionAlignmentTooltipText: 'Обоснование текста метки.',
  linesText: 'Строки:',
  linesTooltipText: 'Количество отображаемых строк текста.',
  isReadOnlyText: 'Только чтение:',
  isReadOnlyTooltipText: 'Не разрешает изменение.',
  toolTipText: 'Подсказка:',
  toolTipTooltipText: 'Короткий текст справки о контроле.',
  alignmentText: { left: 'Слева', center: 'Центр', right: 'Право' } }
));
},
'Sage/MainView/ActivityMgr/nls/ru/QuickCompleteEditor':function(){
define("Sage/MainView/ActivityMgr/nls/ru/QuickCompleteEditor", (
{ lblResultText: 'Результат:',
  lblNoteText: 'Примечание  (добавить ко всем элементам):',
  btnCompleteIndividuallyText: 'Индивидуально',
  btnAsScheduledText: 'Как запланировано',
  btnCompleteNowText: 'Сейчас',
  btnCancelText: 'Отмена',
  btnCloseText: 'Закрыть',
  btnHelpText: 'Помощь',
  resultCompletedText: 'Завершить',
  titleText: 'Быстрое завершение',
  actionMessage: 'Будут выполнены только операции, для которых у вас есть разрешение.',
  completeMessage: 'Выполнить все выбранные операции ({0}):',
  processingMessage: 'Подождите, идет выполнение всех выбранных операций ({0})...'
}
));
},
'Sage/MainView/ActivityMgr/templates/nls/ru/UserActivityDetailSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/ru/UserActivityDetailSummary", (
{ txtPhone_Caption: 'Телефон:',
  lnkOpportunityName_Caption: 'Сделка:',
  txtStartTime_Caption: 'Время начала:',
  lnkContactName_Caption: 'Контакт:',
  lnkLeadName_Caption: 'Наводка:',
  lnkTicketNumber_Caption: 'Заявка:',
  txtLocation_Caption: 'Размещение:',
  txtLeader_Caption: 'Руководитель:',
  txtDuration_Caption: 'Длительность:',
  lnkAccountName_Caption: 'Субъект:',
  lnkCompanyName_Caption: 'Компания:',
  txtNotes_Caption: 'Заметки:',
  btnComplete_Caption: 'Завершить',
  txtAttendeeCount_Caption: 'Число участников:' }
));
},
'Sage/MainView/ActivityMgr/templates/nls/ru/ConfirmationDetailSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/ru/ConfirmationDetailSummary", (
{ txtPhone_Caption: 'Телефон:',
  lnkOpportunity_Caption: 'Сделка:',
  txtStartTime_Caption: 'Время начала:',
  lnkContactName_Caption: 'Контакт:',
  lnkLeadName_Caption: 'Наводка:',
  lnkTicket_Caption: 'Заявка:',
  txtLocation_Caption: 'Размещение:',
  txtLeader_Caption: 'Руководитель:',
  txtDuration_Caption: 'Длительность:',
  lnkAccountName_Caption: 'Субъект:',
  lnkCompanyName_Caption: 'Компания:',
  txtNotes_Caption: 'Заметки:',
  btnComplete_Caption: 'Завершить',
  txtFromUser_Caption: 'От:',
  btnDelete_Caption: 'Удалить',
  btnDecline_Caption: 'Отклонить',
  btnAccept_Caption: 'Принять' }
));
},
'Sage/Utility/File/nls/ru/DefaultDropHandler':function(){
define("Sage/Utility/File/nls/ru/DefaultDropHandler", {
    emailDroppedText: 'Потерянная Эл.почта',
    attachmentTitleText: 'Сохранить вложения',
    attachmentQuestionText: 'Хотели бы вы, сохранить копии этих вложений в SalesLogix? <br /> Вложения будут храниться во вкладке Вложения для соответствующих сущностей.'
});
},
'Sage/UI/nls/ru/TransferBoxWidget':function(){
﻿define("Sage/UI/nls/ru/TransferBoxWidget", {
    searchFilterText: 'Содержит:',
    loadingText: 'Загрузка настроек параметра...',
    noResultsText: 'Нет результатов',
    btnAddTooltip: 'Добавить выбранные элементы',
    btnRemoveTooltip: 'Удалить выбранные элементы',
    btnRemoveAllTooltip: 'Удалить все',
    availableValuesText: 'Доступные значения:',
    selectedValuesText: 'Выбранные значения:',
    btnAddAllTooltip: 'Добавить все'
});
},
'Sage/Utility/File/nls/ru/AttachmentPropertiesEditForm':function(){
define("Sage/Utility/File/nls/ru/AttachmentPropertiesEditForm", {
    fileText: 'Файл',
    descriptionText: 'Описание',
    sizeText: 'Размер',
    attachDateText: 'Дата добавления',
    attachedByText: 'Кем добавлено',
    uploadFileText: 'Выбрать другой файл...',
    editText: 'Изменить вложение',
    okText: 'Ок',
    cancelText: 'Отмена',
    browseText: 'Просмотр',
    urlText: 'URL',
    requestFailedMsg: 'Запрошенная операция не может быть завершена, пожалуйста, повторите попытку позже.'
});
},
'Sage/UI/Alarms/nls/ru/AlarmPane':function(){
define("Sage/UI/Alarms/nls/ru/AlarmPane", {
    dismissAllText: 'Отклонить все',
    dismissText: 'Отклонить',
    fiveMinText: '5 минут',
    tenMinText: '10 минут',
    fifteenMinText: '15 минут',
    thirtyMinText: '30 минут',
    oneHourText: '1 час',
    twoHourText: '2 часа',
    fourHourText: '4 часа',
    eightHourText: '8 часов',
    oneDayText: '1 день',
    twoDayText: '2 дня',
    threeDayText: '3 дня',
    oneWeekText: '1 неделя',
    twoWeekText: '2 недели',
    snoozeText: 'Отложить',
    snoozeByText: 'Отложить на:',
    snoozeAllText: 'Отложить все',
    showCalendarText: 'Показать календарь'
});
},
'Sage/TaskPane/nls/ru/LiteratureManagementTasks':function(){
define("Sage/TaskPane/nls/ru/LiteratureManagementTasks", (
{ errFulFillmentCancelled: 'Заполнение запроса на инф. материалы было отменено для LitReqId {0}.',
  errFulFillmentFailed: 'Запрос на инф. материалы не может быть заполнен для LitReqId {0}.',
  errMailMergeService: 'Запрос на инф. материалы не может быть завершен т. к. не может быть загружен сервис рассылки почты. Это может произойти если не установлен  Saleslogix Desktop Integration или установлен неверно.',
  errFulFillmentRequest: 'Запрос на инф. материалы не может быть заполнен.',
  errFulFillmentRequestEx: 'Запрос на инф. материалы не может быть заполнен:',
  fulFillmentSuccess: 'Заполнение запрос на инф. материалы было успешно.' }
));
},
'Sage/UI/Dashboard/nls/ru/DashboardWidget':function(){
define("Sage/UI/Dashboard/nls/ru/DashboardWidget", {
    noQueryDataText: 'Сервер не располагает данными по запросу',
    initializingText: 'Инициализация'
});
},
'Sage/QuickForms/Design/Editors/nls/ru/NumericAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/NumericAdvancedPropertyEditor", (
{ titleText: 'Расширенный',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  controlInfoText: 'Информация о контроле',
  dataText: 'Данные',
  controlIdText: 'ИД контрола:',
  controlIdTooltipText: 'Идентификатор для данного элемента управления.',
  controlLabelPlacementText: 'Расположение подписи:',
  controlLabelPlacementTooltipText: 'Позиция подписи по отношению к элементу управления.',
  controlTypeText: 'Тип контрола:',
  controlTypeTooltipText: 'Тип управления Saleslogix.',
  decimalDigitsText: 'Кол-во десятичных цифр:',
  decimalDigitsTooltipText: 'Количество цифр после запятой для отображения и ввода данных.',
  defaultDataBindingText: 'Привязка данных:',
  defaultDataBindingTooltipText: 'Поле из базы данных, используемое этим элементом управления.',
  enabledText: 'Включен:',
  enabledTooltipText: 'Позволяет пользователю взаимодействовать с этим элементом управления.',
  formatTypeText: 'Формат типа:',
  formatTypeTooltipText: 'Тип формата для использования при преобразовании числа в строку.',
  maxLengthText: 'Макс. длина:',
  maxLengthTooltipText: 'Максимальное количество символов, которое пользователь может ввести.',
  requiredText: 'Обязательный:',
  requiredTooltipText: 'Требуется значение при сохранении данных.',
  strictText: 'Строгая:',
  strictTooltipText: 'Отображать числа с замыкающими нулями по мере необходимости.',
  visibleText: 'Видимый:',
  visibleTooltipText: 'Показать или скрыть этот элемент управления на форме.',
  numberFormatText: 
   { Number: 'Число',
     Percent: 'Процент',
     Decimal: 'Десятичный',
     Scientific: 'Научный' },
  labelPlacementText: { left: 'Слева', right: 'Право', top: 'Верх', none: 'Нет' } }
));
},
'Sage/MainView/IntegrationContract/nls/ru/CustomerPaymentsRTDV':function(){
define("Sage/MainView/IntegrationContract/nls/ru/CustomerPaymentsRTDV", (
{ dialogCaption: 'Детали платежа',
  loadingText: 'загрузка...',
  lblReferenceCaption: 'Номер квитанции:',
  lblDateCaption: 'Дата оплаты:',
  lblProcessDateCaption: 'Дата обработки:',
  lblNameCaption: 'Имя:',
  lblTypeCaption: 'Тип:',
  lblStatusCaption: 'Статус:',
  lblCurrencyCaption: 'Валюта:',
  lblTenderTypeCaption: 'Тип тендера:',
  lblTenderReferenceCaption: 'Ссылка на тендер:',
  lblNetTotalCaption: 'Всего нетто:',
  lblDiscountsCaption: 'Скидки:',
  lblChargesCaption: 'Расходы:',
  lblTaxesCaption: 'Налоги:',
  lblGrossTotalCaption: 'Сумма оплаты:',
  lblSourceCaption: 'Источник:',
  lblTaxCodeCaption: 'Код налога:',
  grdPayments_Reference: 'Номер квитанции',
  grdPayments_Date: 'Дата оплаты',
  grdPayments_Type: 'Тип',
  grdPayments_Status: 'Статус',
  grdPayments_GrossTotal: 'Сумма оплаты',
  grdPayments_Currency: 'Валюта',
  btnCloseCaption: 'Закрыть' }
));
},
'Sage/UI/Filters/nls/ru/FilterPanel':function(){
define("Sage/UI/Filters/nls/ru/FilterPanel", {
    editText: 'Изменить фильтры',
    noneText: 'Фильтры не выбраны',
    clearText: 'Очистить все'
});
},
'Sage/TaskPane/nls/ru/_BaseTaskPaneTasklet':function(){
define("Sage/TaskPane/nls/ru/_BaseTaskPaneTasklet", (
{ selectRecordsTitle: 'Неверное выделение',
  selectRecords: 'Пожалуйста, выберите запись, чтобы продолжить.',
  selectSingleRecord: 'Пожалуйста, выберите одну запись, прежде чем продолжить.',
  noRecordsSelectedProcessAll: 'Нет выбранных записей.Будет обрабатываться группа ${0} записи (ей).  Продолжить?',
  invalidSelectionTitle: 'Неверное выделение',
  errorSelectionInfo: 'Произошла ошибка получения информации по выделенным записям.',
  errorNoData: 'Нет данных.',
  yesButtonText: 'Да',
  noButtonText: 'Нет',
  salesLogixPageTitle: 'SalesLogix',
  okButtonText: 'ОК',
  cancelButtonText: 'Отмена' }
));
},
'Sage/MainView/ReportMgr/nls/ru/ReportManagerFormatter':function(){
define("Sage/MainView/ReportMgr/nls/ru/ReportManagerFormatter", (
{ txtTrue: 'Истина', txtFalse: 'Ложь' }
));
},
'Sage/UI/nls/ru/OwnerType':function(){
define("Sage/UI/nls/ru/OwnerType", {
    teamText: 'Команда',
    departmentText: 'Отдел',
    systemText: 'Система',
    userText: 'Пользователь'
});
},
'Sage/MainView/JobMgr/templates/nls/ru/JobDefinitionsListSummary':function(){
define("Sage/MainView/JobMgr/templates/nls/ru/JobDefinitionsListSummary", (
{}
));
},
'Sage/TaskPane/nls/ru/LeadTasksTasklet':function(){
define("Sage/TaskPane/nls/ru/LeadTasksTasklet", (
{ updateLeadsTitle: 'Обновление наводок',
  deleteLeadsTitle: 'Удалить наводки',
  deleteJobError: 'К сожалению, произошла ошибка во время работы по удалению наводки: ${0}',
  confirmDeleteLeads: 'Вы действительно хотите удалить выбранные записи?' }
));
},
'Sage/MainView/ReportMgr/templates/nls/ru/ReportDetailSummary':function(){
define("Sage/MainView/ReportMgr/templates/nls/ru/ReportDetailSummary", {
    txtReportName_Caption: 'Имя:',
    txtReportType_Caption: 'Тип:',
    txtTable_Caption: 'Таблица:',
    txtCreateUser_Caption: 'Создано:',
    txtCreateDate_Caption: 'Дата создания:',
    txtModifyUser_Caption: 'Изменил:',
    txtModifyDate_Caption: 'Дата изменения:',
    txtUserField_Caption: 'Поле пользователя:',
    txtDateField_Caption: 'Поле даты:',
    txtUseGroupFilter_Caption: 'Фильтр группы:',
    txtUseUserFilter_Caption: 'Фильтр пользователя:',
    txtUseDateFilter_Caption: 'Фильтр даты:',
    txtFileName_Caption: 'Название файла'
});
},
'Sage/MainView/ReportMgr/Crystal/nls/ru/_ParameterEditorBase':function(){
﻿define("Sage/MainView/ReportMgr/Crystal/nls/ru/_ParameterEditorBase", {
    txtPleaseSpecifyValue: 'Укажите значение.',
    lblAvailableValues_Caption: 'Доступные значения:',
    lblSelectedValues_Caption: 'Выбранные значения:',
    lblEnterValue_Caption: 'Введите значение:',
    btnOK_Caption: 'ОК',
    txtTheValueMustBeBetween: 'Длина значения должна составлять от {0} до {1} символов.',
    txtTheMinimumLengthForThisField: 'Минимальная длина этого поля - {0}.',
    txtTheMaximumLengthForThisField: 'Максимальная длина этого поля - {0}.',
    txtPleaseSpecifyNumberBetween: 'Укажите значение числа в диапазоне от {0} до {1}.',
    txtPleaseSpecifyNumberLesser: 'Укажите значение числа, меньшее или равное {0}.',
    txtPleaseSpecifyNumberGreater: 'Укажите значение числа, большее или равное {0}.',
    txtNoLowerValue: 'Нет меньшего значения',
    txtNoUpperValue: 'Нет большего значения',
    txtIncludeThisValue: 'Включить это значение',
    txtFrom: 'От:',
    txtTo: 'на:',
    txtPleaseSpecifyFromValue: 'Укажите значение начала диапазона',
    txtPleaseSpecifyToValue: 'Укажите значение конца диапазона',
    txtPleaseSpecifyDateBetween: 'Укажите значение даты в диапазоне от {0} до {1}.',
    txtPleaseSpecifyDateLesser: 'Укажите значение даты, меньшее или равное {0}.',
    txtPleaseSpecifyDateGreater: 'Укажите значение даты, большее или равное {0}.',
    txtFromMustBeLessThanOrEqualToTo: 'Значение начала диапазона должно быть меньше или равно значению конца диапазона.',
    txtStartOfRange: 'Начало диапазона:',
    txtEndOfRange: 'Конец диапазона:',
    txtAddRange: 'Добавить диапазон',
    lblSelectValue_Caption: 'Выберите значение:',
    lblOrValue_Caption: 'Или'
});
},
'Sage/MailMerge/nls/ru/Service':function(){
define("Sage/MailMerge/nls/ru/Service", (
{ selectContactCaption: 'Выберите контакт',
  selectOppContactCaption: 'Выберите Контакт для Сделки',
  selectLeadCaption: 'Выберите наводку',
  errorAttachmentUpdate: 'Не удается обновить запись Вложения.',
  errorHistoryUpdate: 'Не удалось обновить запись журнала.',
  errorXmlHttp: 'Произошла ошибка при обработке запроса ${0}. ${1} (${2}).' }
));
},
'Sage/MainView/ActivityMgr/templates/nls/ru/ConfirmationListSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/ru/ConfirmationListSummary", (
{ txtPhone_Caption: 'Телефон:',
  lnkOpportunity_Caption: 'Сделка:',
  txtStartTime_Caption: 'Время начала:',
  lnkContactName_Caption: 'Контакт:',
  lnkLeadName_Caption: 'Наводка:',
  lnkTicket_Caption: 'Заявка:',
  txtLocation_Caption: 'Размещение:',
  txtLeader_Caption: 'Руководитель:',
  txtDuration_Caption: 'Длительность:',
  lnkAccountName_Caption: 'Субъект:',
  lnkCompanyName_Caption: 'Компания:',
  txtNotes_Caption: 'Заметки:',
  btnComplete_Caption: 'Завершить',
  txtFromUser_Caption: 'От:',
  btnDelete_Caption: 'Удалить',
  btnDecline_Caption: 'Отклонить',
  btnAccept_Caption: 'Принять' }
));
},
'Sage/MainView/ActivityMgr/nls/ru/SnoozeOptions':function(){
define("Sage/MainView/ActivityMgr/nls/ru/SnoozeOptions", (
{ fiveMinText: '5 минут',
  tenMinText: '10 минут',
  fifteenMinText: '15 минут',
  thirtyMinText: '30 минут',
  oneHourText: '1 час',
  twoHourText: '2 часа',
  fourHourText: '4 часа',
  eightHourText: '8 часов',
  oneDayText: '1 день',
  twoDayText: '2 дня',
  threeDayText: '3 дня',
  oneWeekText: '1 неделя',
  twoWeekText: '2 недели',
  snoozeText: 'Отложить',
  snoozeByText: 'Отложить на:',
  snoozeAllText: 'Отложить все',
  snoozeTitle: 'Повтор оповещения' }
));
},
'Sage/QuickForms/Design/Editors/nls/ru/OwnerAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/OwnerAdvancedPropertyEditor", (
{ titleText: 'Расширенный',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  controlInfoText: 'Информация о контроле',
  dataText: 'Данные',
  controlIdText: 'ИД контрола:',
  controlIdTooltipText: 'Идентификатор для данного элемента управления.',
  controlLabelPlacementText: 'Расположение подписи:',
  controlLabelPlacementTooltipText: 'Позиция подписи по отношению к элементу управления.',
  controlTypeText: 'Тип контрола:',
  controlTypeTooltipText: 'Тип управления Saleslogix.',
  defaultDataBindingText: 'Привязка данных:',
  defaultDataBindingTooltipText: 'Поле из базы данных, используемое этим элементом управления.',
  enabledText: 'Включен:',
  enabledTooltipText: 'Позволяет пользователю взаимодействовать с этим элементом управления.',
  requiredText: 'Обязательный:',
  requiredTooltipText: 'Требуется значение при сохранении данных.',
  visibleText: 'Видимый:',
  visibleTooltipText: 'Показать или скрыть этот элемент управления на форме.',
  labelPlacementText: { left: 'Слева', right: 'Право', top: 'Верх', none: 'Нет' } }
));
},
'Sage/QuickForms/Design/Editors/nls/ru/NonVisibleAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/NonVisibleAdvancedPropertyEditor", (
{ titleText: 'Расширенный',
  controlInfoText: 'Информация о контроле',
  controlIdText: 'ИД контрола:',
  controlIdTooltipText: 'Идентификатор для данного элемента управления.',
  controlTypeText: 'Тип контрола:',
  controlTypeTooltipText: 'Тип управления Saleslogix.' }
));
},
'Sage/MainView/IntegrationContract/nls/ru/InvoiceRTDV':function(){
define("Sage/MainView/IntegrationContract/nls/ru/InvoiceRTDV", (
{ dialogCaption: 'Детали счета',
  loadingText: 'загрузка...',
  lblInvoiceCaption: 'Счет:',
  lblNetTotalCaption: 'Сумма счета:',
  lblInvoiceDateCaption: 'Дата счета:',
  lblInvoiceDiscountAmountCaption: 'Скидка:',
  lblDueDateCaption: 'Плановая дата:',
  lblInvoiceDiscountPercentCaption: 'Процент скидки:',
  lblCustomerPOCaption: 'Номер заказа:',
  lblCarrierTotalPriceCaption: 'Отгрузка:',
  lblSettlementDiscountPercentCaption: 'Урегулированный процент скидки:',
  lblTaxCaption: 'Налог:',
  lblSettlementDiscountTermsCaption: 'Сроки оплаты:',
  lblNotesCaption: 'Комм-рии:',
  lblOperatingCompanyCurrencyCaption: 'Валюта действующей Компании:',
  lblCostTotalCaption: 'Общая стоимость:',
  lblOperatingCompanyCurrencyExchangeRateDateCaption: 'Дата курса обмена:',
  lblProfitTotalCaption: 'Всего выгода:',
  lblOperatingCompanyCurrencyExchangeRateCaption: 'Курс обмена:',
  lblPriceListCaption: 'Прайс-лист:',
  lblOCCurrencyCaption: 'Действующая валюта компании:',
  lblCurrencyCaption: 'Валюта:',
  lblSalesPersonCaption: 'Продавец:',
  detailsTabTitle: 'Детали',
  addressTabTitle: 'Адреса',
  invoiceLinesTabTitle: 'Линии счета',
  paymentsTabTitle: 'Платежи',
  deliveriesTabTitle: 'Доставка',
  grdInvoice_Name: 'Счет #',
  grdInvoice_Date: 'Дата счета',
  grdInvoice_Amount: 'Сумма счета',
  grdInvoice_PO: 'Номер заказа',
  grdInvoice_PaymentTerms: 'Сроки оплаты',
  grdInvoice_NetTotal: 'Сумма нетто',
  grdInvoice_Tax: 'Налог',
  grdAddress_Name: 'Описание',
  grdAddress_address1: 'Улица',
  grdAddress_address2: 'Дом',
  grdAddress_City: 'Город',
  grdAddress_State: 'Область',
  grdAddress_Zip: 'Почтовый код',
  grdItems_ActualPrice: 'Фактическая цена',
  grdItems_ChargesTotal: 'Всего расходов',
  grdItems_Commodity: 'Товар',
  grdItems_CommodityDimension: 'Размеры',
  grdItems_CommodityVariant: 'Вариант',
  grdItems_DiscountTotal: 'Всего скидки',
  grdItems_GrossTotal: 'Всего брутто',
  grdItems_InitialPrice: 'Первоначальная цена',
  grdItems_Line: 'Номер линии',
  grdItems_NetTotal: 'Сумма нетто',
  grdItems_Quantity: 'Кол-во',
  grdItems_Status: 'Статус',
  grdItems_TaxTotal: 'Налог, всего',
  grdItems_Type: 'Тип линии',
  grdItems_UnitOfMeasure: 'Единица',
  grdPayments_Charges: 'Расходы',
  grdPayments_Currency: 'Валюта',
  grdPayments_Date: 'Дата',
  grdPayments_Discounts: 'Скидки',
  grdPayments_GrossTotal: 'Всего брутто',
  grdPayments_Name: 'Имя',
  grdPayments_NetTotal: 'Сумма нетто',
  grdPayments_ProcessDate: 'Дата обработки',
  grdPayments_Status: 'Статус',
  grdPayments_Tax: 'Налоги',
  grdPayments_TenderReference: 'Ссылка на тендер',
  grdPayments_TenderType: 'Тип тендера',
  grdPayments_Type: 'Тип',
  grdDeliveries_ActualDate: 'Фактическая дата',
  grdDeliveries_ActualTime: 'Фактическая время',
  grdDeliveries_Carrier: 'Перевозчик',
  grdDeliveries_CarrierReference: 'Ссылка на перевозчика',
  grdDeliveries_DeliveredQuantity: 'Кол-во доставленного',
  grdDeliveries_ExceptionReason: 'Причина исключения',
  grdDeliveries_Method: 'Метод',
  grdDeliveries_Number: 'Число',
  grdDeliveries_RequestedDate: 'Требуемая дата',
  grdDeliveries_RequestedQuantity: 'Требуемое количество',
  grdDeliveries_Status: 'Статус',
  grdDeliveries_Type: 'Тип',
  btnCloseCaption: 'Закрыть' }
));
},
'Sage/UI/nls/ru/SDataLookup':function(){
define("Sage/UI/nls/ru/SDataLookup", {
    closeText: 'Закрыть',
    cancelText: 'Отмена',
    loadingText: 'Загрузка...',
    noDataText: 'Нет записей'
});
},
'Sage/QuickForms/Design/nls/ru/RowDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/RowDesigner", (
{ displayNameText: 'Строка' }
));
},
'Sage/Groups/nls/ru/GroupLookup':function(){
﻿define("Sage/Groups/nls/ru/GroupLookup", {
    txtNoRecordsFound: 'Записи не найдены.'
});
},
'Sage/TaskPane/nls/ru/OpportunityTasksTasklet':function(){
define("Sage/TaskPane/nls/ru/OpportunityTasksTasklet", (
{ updateOpportunitiesTitle: 'Обновить сделки',
  opportunityStatisticsTitle: 'Статистика по сделке' }
));
},
'Sage/UI/Filters/nls/ru/CheckBoxFilter':function(){
define("Sage/UI/Filters/nls/ru/CheckBoxFilter", {
    loadingText: 'Загрузка...',
    moreText: 'Изменить элементы',
    clearText: 'Очистить',
    emptyText: '(пусто)',
    nullText: '(нуль)',
    ofText: '/'
});
},
'Sage/Utility/File/nls/ru/LibraryDocument':function(){
define("Sage/Utility/File/nls/ru/LibraryDocument", {
    failureNumber: 'Ошибка #${0}: ',
    percentComplete: 'Загрузка, пожалуйста подождите ...',
    uploadError: 'Произошла ошибка при попытке загрузить один или несколько файлов  (не удалось: ${0}; удалось: ${1}).',
    invalidContext: 'Файл(ы) не могут быть загружены за пределами библиотеки.',
    unknownError: 'Произошла неизвестная ошибка загрузки файла.'
});
},
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/ru/SpeedSearchLookup':function(){
define("Sage/MainView/ActivityMgr/AttendeeLookup/nls/ru/SpeedSearchLookup", (
{ dialogTitle: 'Поиск участников',
  okText: 'Добавить выбранные',
  cancelText: 'Закрыть',
  noDataText: 'Нет соответствующих записей.',
  srchBtnCaption: 'Поиск',
  colName: 'Имя',
  colType: 'Тип',
  colAccount: 'Субъект/Компания',
  colTitle: 'Должность',
  colEmail: 'E-mail',
  colWorkPhone: 'Раб. телефон'
}
));
},
'Sage/UI/nls/ru/ConditionManager':function(){
define("Sage/UI/nls/ru/ConditionManager", {
    addimgalttext: 'Добавить условие',
    hideimgalttext: 'Исключить условие',
    addrowlabel: 'Поиск по:',
    hiderowlabel: 'И:',
    srchBtnCaption: 'Поиск',
    errorOperatorRequiresValue: 'Оператор требует значение',
    startingWith: 'Начинается с',
    endsWith: 'Заканчивается на',
    contains: 'Содержит',
    equalTo: 'Равно',
    notEqualTo: 'Не равно',
    equalOrLessThan: 'Меньше или равно',
    equalOrGreaterThan: 'Больше или равно',
    lessThan: 'Меньше чем',
    greaterThan: 'Больше чем'
});
},
'Sage/MainView/JobMgr/templates/nls/ru/SchedulesListSummary':function(){
define("Sage/MainView/JobMgr/templates/nls/ru/SchedulesListSummary", (
{}
));
},
'Sage/MainView/ActivityMgr/templates/nls/ru/UserActivityListSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/ru/UserActivityListSummary", (
{ txtPhone_Caption: 'Телефон:',
  lnkOpportunity_Caption: 'Сделка:',
  txtStartTime_Caption: 'Время начала:',
  lnkContactName_Caption: 'Контакт:',
  lnkLeadName_Caption: 'Наводка:',
  lnkTicket_Caption: 'Заявка:',
  txtLocation_Caption: 'Размещение:',
  txtLeader_Caption: 'Руководитель:',
  txtDuration_Caption: 'Длительность:',
  lnkAccountName_Caption: 'Субъект:',
  lnkCompanyName_Caption: 'Компания:',
  txtNotes_Caption: 'Заметки:',
  btnComplete_Caption: 'Завершить',
  lnkAttendeeCount_Caption: 'Число участников:' }
));
},
'Sage/UI/Dashboard/nls/ru/WidgetDefinition':function(){
define("Sage/UI/Dashboard/nls/ru/WidgetDefinition", {
    defaultWidgetText: 'Изменение параметров виджета',
    settingsText: 'Параметры',
    viewGroupText: 'Показать группу',
    Bar_Chart: 'Панель диаграмм',
    Column_Chart: 'Гистограмма',
    Group_List: 'Группа',
    Pie_Chart: 'Круговая диаграмма',
    Funnel_Chart: 'Воронкообразная диаграмма',
    Line_Chart: 'Линейный график',
    SData_Feed: 'Поток SData',
    Web_Feed: 'Веб-канал',
    Website: 'Веб-сайт',
    Default: 'По умолчанию',
    Links: 'Ссылка',
    Recently_Viewed: 'Недавно просмотренные',
    Todays_Activities: 'Дела на сегодня',
    Today_s_Activities: 'Дела на сегодня',
    Welcome: 'Добро пожаловать',
    Closing_Opportunities: 'Закрытые сделки',
    Quick_Actions: 'Быстрые действия',
    Do_You_Know___: 'Знаете ли вы...',
    All_Leads: 'Все Наводки',
    My_Notes: 'Мои Заметки',
    Open_Opportunities: 'Открытые сделки',
    My_Top_Opportunities: 'Мои лучшие сделки',
    My_Pipeline: 'Моя воронка',
    Recent_Lead_Creation_History: 'Недавняя история создания наводок',
    My_Activity_trend: 'Направление моей деятельности',
    My_Completed_Activities_by_Type: 'Мои завершенные дела по типам',
    Active_Campaigns: 'Активн. Маркетинг',
    All_Open_Opportunities: 'Все открытые сделки',
    Top_Opportunities: 'Лучшие сделки',
    Open_Defect_Distribution: 'Распределение открытых дефектов',
    My_Dashboard: 'Моя аналитика',
    Sales: 'Продажи',
    Group_List_Description: 'Показывает список записей группы по сущности. Например, группу активных кампаний.',
    Welcome_Description: 'Показывает введение в Saleslogix со ссылкой на страницу помощи введения в Saleslogix для ВЕБ.',
    Line_Chart_Description: 'Показывает данные как серию точек данных связанных в линию. Полезно. когда данные представляют много групп или категорий.',
    Bar_Chart_Description: 'Показывает данные как набор горизонтальных прямоугольников. Полезно для сравнения нескольких наборов данных.',
    Column_Chart_Description: 'Показывает данные как набор вертикальных столбцев, сгруппированных по категориям. Полезно для показа изменений данных в период времени для иллюстрации сравнения элементов.',
    Funnel_Chart_Description: 'Показывает данные как прогрессивные пропорции в форме воронки. Эти данные представлены как порции по 100% и не имеют осей.',
    Pie_Chart_Description: 'Показывает данные как пропорцию от общего. Каждое значение вычисляется как процент от общего. Эта диаграмма не имет осей.',
    Recently_Viewed_Description: 'Показывает ссылки на недавно просмотренные записи с иконкой, определяющей тип. Например, Субъект или Контакт.',
    Todays_Activities_Description: 'Показывает ссылки на вашу активность сегодня.',
    Links_Description: 'Показвает ссылку создаваемую вами. Например, к детальному представлению в Saleslogix или к внешнему Веб-сайту.',
    SData_Feed_Description: 'Отображение веб-канала с использованием каналов данных SData (Saleslogix Data), например канала бухгалтерской интеграции или базы данных Saleslogix.',
    Web_Feed_Description: 'Отображение информации веб-канала RSS или Atom.',
    Website_Description: 'Отображение выбранного вами веб-сайта.'
});
},
'Sage/MainView/ActivityMgr/templates/nls/ru/AllOpenListSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/ru/AllOpenListSummary", (
{ txtPhone_Caption: 'Телефон:',
  lnkOpportunity_Caption: 'Сделка:',
  txtStartTime_Caption: 'Время начала:',
  lnkContactName_Caption: 'Контакт:',
  lnkLeadName_Caption: 'Наводка:',
  lnkTicket_Caption: 'Заявка:',
  txtLocation_Caption: 'Размещение:',
  txtLeader_Caption: 'Руководитель:',
  txtDuration_Caption: 'Длительность:',
  lnkAccountName_Caption: 'Субъект:',
  lnkCompanyName_Caption: 'Компания:',
  txtNotes_Caption: 'Заметки:',
  btnComplete_Caption: 'Завершить',
  lnkAttendeeCount_Caption: 'Число участников:' }
));
},
'Sage/UI/nls/ru/SearchConditionWidget':function(){
define("Sage/UI/nls/ru/SearchConditionWidget", {
    trueText: 'Истина',
    falseText: 'Ложь',
    networkText: 'Сеть',
    remoteText: 'Дистанционный',
    webText: 'Веб',
    webViewerText: 'Веб Viewer',
    concurrentText: 'Конкурент',
    retiredText: 'Уволен',
    templateText: 'Шаблон',
    addonText: 'Addon',
    adminText: 'Администратор',
    userText: 'Пользователь',
    teamText: 'Команда',
    departmentText: 'Отдел',
    systemText: 'Система'
});
},
'Sage/QuickForms/Design/Editors/nls/ru/GenericBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/GenericBasicPropertyEditor", (
{ titleText: 'Бейсик',
  appearanceText: 'Вид',
  captionText: 'Заголовок:',
  captionTooltipText: 'Подпись для показа на форме для данного элемента управления.',
  captionAlignmentText: 'Выравнивание заголовка:',
  captionAlignmentTooltipText: 'Обоснование текста метки.',
  alignmentText: { left: 'Слева', center: 'Центр', right: 'Право' } }
));
},
'Sage/MainView/JobMgr/nls/ru/JobManagerActions':function(){
define("Sage/MainView/JobMgr/nls/ru/JobManagerActions", (
{ txtInterruptExecutionMessage: 'Заданию был отправлен сигнал отменить выполнение.',
  txtInterruptExecutionTitle: 'Отменить задание',
  txtInterruptExecutionConfirmationMessage: 'Отменить выполнение задания ${0}?',
  txtYes: 'Да',
  txtNo: 'Нет',
  completedJobMessage: 'Выбранное задание уже выполнено.',
  jobStatusComplete: 'Завершить',
  error_NoRecordSelected: 'Выберите запись для продолжения.',
  confirm_ScheduleDeletion: 'Удалить выбранное расписание?' }
));
},
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/ru/ContactLookupConfig':function(){
define("Sage/MainView/ActivityMgr/AttendeeLookup/nls/ru/ContactLookupConfig", (
{ contactText: 'Контакт',
  accountText: 'Субъект',
  lookupContactText: 'Поиск Контакта',
  nameText: 'Имя',
  cityText: 'Город',
  stateText: 'Область',
  workphoneText: 'Раб. телефон',
  emailText: 'Эл.почта',
  dialogButtonText: 'Добавить выбранные',
  cancelText: 'Закрыть',
  colFirstName: 'Имя',
  colLastName: 'Фамилия',
  colTitle: 'Название',
  colAccount: 'Субъект',
  colWorkPhone: 'Раб. телефон',
  colEmail: 'Эл.почта',
  dialogTitleText: 'Запрос контактов'}
));
},
'Sage/QuickForms/Design/nls/ru/DataSourcePanel':function(){
define("Sage/QuickForms/Design/nls/ru/DataSourcePanel", (
{ loadingText: 'Загрузка...' }
));
},
'Sage/MainView/ReportMgr/templates/nls/ru/SchedulesListSummary':function(){
define("Sage/MainView/ReportMgr/templates/nls/ru/SchedulesListSummary", (
{}
));
},
'Sage/Library/nls/ru/Manager':function(){
define("Sage/Library/nls/ru/Manager", (
{ AddFiles: 'Добавить файлы',
  AddFolder: 'Добавить папку',
  Confirm: 'Подтвердить',
  ConfirmDownload: 'Файл не был загружен. Вы хотите, чтобы он был синхронизирован позже?',
  ConfirmDownloadReorder: 'Файл не был загружен, но уже запрошен. Хотели бы вы изменить порядок файлов, чтобы получить его при следующей синхронизации?',
  Created: 'Дата создания',
  DeleteFolder: 'Удалить папку',
  DeleteSelectedFile: 'Удалить выбранный файл',
  Description: 'Описание',
  DirectoryInformationError: 'Произошла ошибка при получении информации о папке документа.',
  DocumentInformationError: 'Произошла неожиданная ошибка при попытке получить информацию о документе.',
  EditFolder: 'Изменить имя папки',
  Expires: 'Истекает',
  File: 'Файл',
  FileProperties: 'Свойства файла',
  Help: 'Помощь',
  InvalidRoot: 'Неверный корневой каталог: "${0}" (${1}).',
  Library: 'Библиотека',
  LibraryDataError: 'Произошла непредвиденная ошибка обработки данных каталога библиотеки.',
  Never: 'Никогда',
  No: 'Нет',
  Revised: 'Исправлено',
  Size: 'Размер',
  Yes: 'Да' }
));
},
'Sage/UI/nls/ru/GroupsTitlePaneConfigProvider':function(){
define("Sage/UI/nls/ru/GroupsTitlePaneConfigProvider", {
    groupText: 'Группы',
    addGroupButtonTooltip: 'Добавить группу',
    groupButtonTooltip: 'Управление группами',
    lookupText: 'Поиск',
    lookupResultsText: 'Результаты поиска',
    groupColumnText: 'Группа',
    visibleColumnText: 'Видимый'
});
},
'Sage/QuickForms/Design/nls/ru/NonVisibleControlContainer':function(){
define("Sage/QuickForms/Design/nls/ru/NonVisibleControlContainer", (
{ headerText: 'Неотображаемые элементы управления' }
));
},
'Sage/UI/Controls/nls/ru/Name':function(){
define("Sage/UI/Controls/nls/ru/Name", {
    okText: 'Ок',
    cancelText: 'Отмена',
    dialogTitle: 'Изменить имя',
    prefixText: 'Префикс:',
    nameFirstText: 'Имя:',
    nameMiddleText: 'Отчество:',
    nameLastText: 'Фамилия:',
    suffixText: 'Суффикс:',
    buttonTooltip: 'Изменить'
});
},
'Sage/MainView/JobMgr/nls/ru/ExecutionsListPanelConfig':function(){
define("Sage/MainView/JobMgr/nls/ru/ExecutionsListPanelConfig", {
    loadingText: 'Загрузка...',
    colNameJobName: 'Тип',
    colNameUser: 'Пользователь',
    colNamePhase: 'Этап',
    colNamePhaseDetail: 'Подробности об этапе',
    colNameProgress: 'Ход выполнения',
    colNameElapsed: 'Истекшее время',
    colNameStatus: 'Статус',
    colNameResult: 'Результат выполнения'
});
},
'Sage/QuickForms/Design/nls/ru/PhoneControlDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/PhoneControlDesigner", (
{ displayNameText: 'Телефон' }
));
},
'Sage/MainView/Lead/nls/ru/UpdateLeads':function(){
define("Sage/MainView/Lead/nls/ru/UpdateLeads", (
{ updateMultipleLeads_Caption: 'Обновление нескольких Наводок',
  labelWidth: '120',
  btnCancel_Caption: 'Отмена',
  ok_Text: 'Ок',
  update_To_Caption: 'Кому:',
  update_Property_Caption: 'Обновление:',
  updateProp_Owner: 'Доступ',
  lookupOwnerText: 'Поиск владельца:',
  lookupDescriptionColText: 'Описание',
  updateProp_AcctMgr: 'Менеджер',
  lookupActMgrText: 'Поиск Менеджера',
  lookupNameColText: 'Имя',
  lookupTitleColText: 'Название',
  lookupDepartmentColText: 'Отдел',
  lookupRegionColText: 'Регион',
  lookupTypeColText: 'Тип',
  errorUnspecifiedValue: 'Пожалуйста укажите значение перед продолжением.',
  errorRequestingJobMgr: 'An error occurred requesting the job manager.',
  updateLeadsTitle: 'Обновление наводок' }
));
},
'Sage/Library/nls/ru/FileHandler':function(){
define("Sage/Library/nls/ru/FileHandler", (
{ AccessError: 'У вас нет прав, необходимых для выполнения этого действия.',
  Available: 'Доступный',
  Confirm: 'Подтвердить',
  DeleteFileCnfmFmt: 'Вы уверены, что хотите удалить этот файл "${0}"?',
  Delivered: 'Доставлено: не прочитано',
  DeliveredRead: 'Доставлено: прочитано',
  DocumentPropertiesError: 'Произошла неожиданная ошибка при попытке получить свойства документа.',
  DocumentPropertiesUpdateError: 'Произошла неожиданная ошибка при попытке обновления свойств документа.',
  DocumentUpdateConflictError: 'Файл был изменен другим пользователем, пожалуйста, обновите и повторите попытку.',
  FileDeleteError: 'Произошла неожиданная ошибка при попытке удаления файла.',
  FileStatusError: 'Произошла неожиданная ошибка при попытке обновить статус файла.',
  LogRequestError: 'Произошел неожиданный сбой при записи в лог запроса документов синхронизации.',
  No: 'Нет',
  NoAccessMessage: 'У вас нет разрешения на добавление файлов в библиотеку. Для получения дополнительной информации обратитесь к администратору Saleslogix.',
  Ordered: 'Упорядоченный',
  PleaseSelectFile: 'Пожалуйста, выберите файл.',
  PleaseWait: 'Пожалуйста, подождите',
  Revised: 'Исправленный',
  RevisionOrdered: 'Упорядоченные изменения',
  UploadError: 'Произошла ошибка при попытке загрузить файл.',
  Unknown: 'Неизвестен',
  Yes: 'Да' }
));
},
'Sage/UI/nls/ru/ListPanel':function(){
define("Sage/UI/nls/ru/ListPanel", {
    listText: 'Список',
    summaryText: 'Сводно',
    detailText: 'Детали',
    hideDetailText: 'Скрыть детали',
    unsavedDataText: '* несохраненные данные',
    helpText: 'Помощь',
    refreshText: 'Обновить',
    displayingText: 'Отображение',
    ofText: 'из',
    overflowText: 'При выполнении поиска получено слишком много результатов. Ограничьте область поиска с помощью фильтров.'
});
},
'Sage/Utility/nls/ru/Sql':function(){
define("Sage/Utility/nls/ru/Sql", (
{ InvalidApostropheCount: 'Недопустимое число апострофов в SQL-предложении IN.' }
));
},
'Sage/UI/Filters/nls/ru/EditFilters':function(){
define("Sage/UI/Filters/nls/ru/EditFilters", {
    selectAllText: 'Выбрать все',
    dialogTitle: 'Изменить фильтры',
    okText: 'Ок',
    cancelText: 'Отмена'
});
},
'Sage/QuickForms/Design/Editors/nls/ru/FormUsagesPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/FormUsagesPropertyEditor", (
{ titleText: 'Использование',
  portalText: 'Портал',
  viewText: 'Вид',
  modesText: 'Режимы',
  descriptionText: 'Описание' }
));
},
'Sage/UI/Controls/nls/ru/DurationSelect':function(){
define("Sage/UI/Controls/nls/ru/DurationSelect", {
    minuteText: 'минута',
    minutesText: 'минут',
    hourText: 'час',
    hoursText: 'часа',
    dayText: 'день',
    daysText: 'дня'
});
},
'Sage/UI/Alarms/nls/ru/AlarmCountDown':function(){
define("Sage/UI/Alarms/nls/ru/AlarmCountDown", {
    startsInText: 'Начатые в',
    overduebyText: 'Просроченные на',
    minuteText: 'минута',
    minutesText: 'минуты',
    hourText: 'час',
    hoursText: 'часов',
    dayText: 'день',
    daysText: 'Дней',
    weekText: 'неделя',
    weeksText: 'недель',
    monthText: 'месяц',
    monthsText: 'месяцев',
    yearText: 'год',
    yearsText: 'лет',
    startsNowText: 'Начинается сейчас'
});
},
'Sage/UI/nls/ru/AttachmentList':function(){
define("Sage/UI/nls/ru/AttachmentList", {
    attachmentText: 'Вложение',
    userText: 'Пользователь',
    modDateText: 'Дата/время обновления',
    dateRangeText: 'Диапазон даты изменения',
    sizeText: 'Размер',
    extensionText: 'Расширение файла',
    addFileText: 'Добавить файл',
    addUrlText: 'Добавить URL',
    editText: 'Изменить',
    helpText: 'Помощь',
    addGoogleText: 'Добавление документа Google',
    deleteText: 'Удалить',
    request: 'Запрос файла',
    delivered: 'Доставлено',
    requested: 'Запрошено',
    available: 'Доступный'
});
},
'Sage/MailMerge/nls/ru/Lookup':function(){
define("Sage/MailMerge/nls/ru/Lookup", (
{ accountCaption: 'Субъект',
  companyCaption: 'Компания',
  contactTitle: 'Выберите контакт',
  emailCaption: 'Эл. почта',
  firstNameCaption: 'Имя',
  invalidOptionsText: 'Параметр options или options.onSelect определены не корректно.',
  lastNameCaption: 'Фамилия',
  leadTitle: 'Выберите наводку',
  mobileCaption: 'Мобильный тел.',
  opportunityCaption: 'Сделка',
  workCaption: 'Рабочий',
  okText: 'ОК' }
));
},
'Sage/QuickForms/Design/Editors/nls/ru/RowBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/RowBasicPropertyEditor", (
{ titleText: 'Бейсик',
  appearanceText: 'Вид',
  indexText: 'Индекс:',
  indexTooltipText: 'Номер строки или столбца, начиная с нуля.' }
));
},
'Sage/MainView/JobMgr/nls/ru/RunJobDialog':function(){
define("Sage/MainView/JobMgr/nls/ru/RunJobDialog", {
    dlgRunJob_Title: 'Запуск/назначение задания',
    txtJobName_Caption: 'Имя задания',
    txtTriggerDescription_Caption: 'Описание',
    cmbScheduleType_Caption: 'Расписание:',
    cmdOK_Caption: 'Ок',
    cmdCancel_Caption: 'Отмена',
    txtInvalidNumber: 'Недопустимое число.',
    contentPaneParameters_Caption: 'Параметры',
    txtRunNow: 'Запустить сейчас',
    txtScheduledExecution: 'Выполнение по расписанию',
    colName_Caption: 'Имя',
    colValue_Caption: 'Значение',
    colDescription_Caption: 'Описание',
    txtInvalidParameterTitle: 'Недопустимый параметр',
    txtInvalidParameterMessage: 'Недопустимый параметр: ${0}'
});
},
'Sage/QuickForms/Design/nls/ru/CheckBoxControlDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/CheckBoxControlDesigner", (
{ displayNameText: 'Кнопка-флажок' }
));
},
'Sage/QuickForms/Design/nls/ru/EditableGridControlDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/EditableGridControlDesigner", (
{ displayNameText: 'Редактируемая таблица' }
));
},
'Sage/MainView/Options/nls/ru/OptionsDialog':function(){
﻿define("Sage/MainView/Options/nls/ru/OptionsDialog", (
{
    txtOptions: 'Параметры',
    txtColumns: 'Колонки',
    txtZero: '(0 для отображения всех столбцов групп)',
    txtHideOnSelection: 'Скрыть расширенный список групп при выборе записи',
    txtDisplayExtendedGroupListOnLookup: 'Отобразить расширенный список групп при запросе',
    cmdOk_Caption: 'ОК',
    cmdCancel_Caption: 'Отмена',
    txtListView: 'Представление в виде списка',
    txtDetailView: 'Подробное представление',
    txtStayInDetailViewOnLookup: 'Подробное представление при запросе'
}
));
},
'Sage/QuickForms/Design/nls/ru/HiddenControlDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/HiddenControlDesigner", (
{ displayNameText: 'Скрытый текст' }
));
},
'Sage/UI/Dashboard/nls/ru/DashboardWidgetCell':function(){
define("Sage/UI/Dashboard/nls/ru/DashboardWidgetCell", {
    closeTooltipText: 'Закрыть',
    minimizeTooltipText: 'Свернуть',
    settingsTooltipText: 'Параметры'
});
},
'Sage/QuickForms/Design/Editors/nls/ru/UserBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/UserBasicPropertyEditor", (
{ titleText: 'Бейсик',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  captionText: 'Заголовок:',
  captionTooltipText: 'Подпись для показа на форме для данного элемента управления.',
  captionAlignmentText: 'Выравнивание заголовка:',
  captionAlignmentTooltipText: 'Обоснование текста метки.',
  isReadOnlyText: 'Только чтение:',
  isReadOnlyTooltipText: 'Не разрешает изменение.',
  toolTipText: 'Подсказка:',
  toolTipTooltipText: 'Короткий текст справки о контроле.',
  alignmentText: { left: 'Слева', center: 'Центр', right: 'Право' } }
));
},
'Sage/UI/nls/ru/Dialogs':function(){
define("Sage/UI/nls/ru/Dialogs", {
    yesText: 'Да',
    noText: 'Нет',
    okText: 'ОК',
    cancelText: 'Отмена'
});
},
'Sage/MainView/IntegrationContract/nls/ru/SyncResultsHistory':function(){
﻿define("Sage/MainView/IntegrationContract/nls/ru/SyncResultsHistory", {
    grdSyncHistory_StampDate: 'Дата / Время',
    grdSyncHistory_Status: 'Статус',
    grdSyncHistory_SyncNote: 'Синхронизировать Заметки'
});
},
'Sage/TaskPane/nls/ru/SecuredActionTasklet':function(){
define("Sage/TaskPane/nls/ru/SecuredActionTasklet", (
{ addToRoleTitle: 'Добавить к роли' }
));
},
'Sage/UI/Dashboard/nls/ru/DashboardTabController':function(){
define("Sage/UI/Dashboard/nls/ru/DashboardTabController", {
    newTabText: 'Новая закладка',
    addContentText: 'Добавить наполнение',
    editOptionsText: 'Изменить свойства',
    hideTabText: 'Скрыть закладку',
    closeText: 'Закрыть',
    copyTabText: 'Копировать закладку',
    showTabText: 'Показать закладку',
    shareTabText: 'Доступ',
    deleteTabText: 'Удалить закладку',
    deleteTabConfirmText: 'Вы действительно хотите удалить эту закладку?',
    descriptionText: 'Описание',
    everyoneText: 'Всем',
    saveTabText: 'Сохранить закладку',
    helpText: 'Помощь',
    addText: 'Добавить',
    invalidMessage: 'Недопустимый символ',
    invalidDuplicateMessage: 'Название должно быть уникальным.',
    deleteText: 'Удалить',
    titleText: 'Название:',
    chooseTemplateText: 'Выберите шаблон, который вы хотите использовать:',
    oneColumnText: 'Один столбец',
    twoColumnText: 'Разделить на две колонки',
    fatLeftText: 'Две колонки, большая левая',
    fatRightText: 'Две колонки, большая правая',
    makeDefaultText: 'Использовать по умолчанию',
    releaseFetchErrorText: 'Ошибка выборки списка релизов',
    releaseDeleteNoneSelected: 'Элементы не выбраны.',
    releasedToText: 'Доступно:',
    typeText: 'Тип',
    addLookup: 'Добавить',
    okButton: 'Ок',
    errorText: 'Ошибка',
    warningText: 'Предупреждение',
    permissionErrorText: 'Ошибка: Пользователь не имеет права на выполнение этого действия.',
    permissionErrorPerformCopyText: 'Вы хотите создать персональную копию этой страницы?',
    yesText: 'Да',
    noText: 'Нет'
});
},
'Sage/MainView/IntegrationContract/nls/ru/SalesOrderRTDV':function(){
define("Sage/MainView/IntegrationContract/nls/ru/SalesOrderRTDV", (
{ dialogCaption: 'Детали заказа',
  loadingText: 'загрузка...',
  lblSalesOrderCaption: 'Заказ на продажи:',
  lblStatusCaption: 'Статус:',
  lblGrossTotalCaption: 'Сумма заказа:',
  lblOrderDateCaption: 'Дата заказа:',
  lblTaxTotalCaption: 'Налог, всего:',
  lblHoldStatusCaption: 'Статус:',
  lblCurrencyCaption: 'Валюта:',
  lblTypeCaption: 'Тип:',
  lblCostTotalCaption: 'Общая стоимость:',
  lblPONumberCaption: 'Номер заказа:',
  lblProfitTotalCaption: 'Общий доход:',
  lblQuotationCaption: 'Котировка:',
  lblInvoiceStatusCaption: 'Статус счета:',
  lblContactCaption: 'Контакт:',
  lblDeliveryDateCaption: 'Дата доставки:',
  lblDueDateCaption: 'Плановая дата:',
  lblPriceListCaption: 'Прайс-лист:',
  lblCarrierCaption: 'Перевозчик:',
  lblNetTotalCaption: 'Всего нетто:',
  lblAllocationStatusCaption: 'Статус размещения:',
  lblDiscountTotalCaption: 'Всего скидки:',
  lblDeliveryStatusCaption: 'Статус доставки:',
  lblChargesTotalCaption: 'Всего расходов:',
  detailsTabTitle: 'Детали',
  salesPersonsTabTitle: 'Продавец',
  addressTabTitle: 'Адреса',
  salesOrderLinesTabTitle: 'Линии заказа',
  paymentsTabTitle: 'Платежи',
  deliveriesTabTitle: 'Доставка',
  grdSalesOrder_Edit: 'Изменить',
  grdSalesOrder_OrderNumber: 'Номер заказа',
  grdSalesOrder_OrderDate: 'Дата заказа',
  grdSalesOrder_Status: 'Статус',
  grdSalesOrder_HoldStatus: 'Статус',
  grdSalesOrder_Type: 'Тип',
  grdSalesOrder_PO: '№ продукта заказа',
  grdSalesOrder_NetTotal: 'Сумма нетто',
  grdSalesOrder_DiscountTotal: 'Всего скидки',
  grdSalesOrder_ChargesTotal: 'Всего расходов',
  grdSalesOrder_TaxTotal: 'Налог, всего',
  grdSalesOrder_GrossTotal: 'Всего брутто',
  grdSalesOrder_Currency: 'Валюта',
  grdSalesPersons_Name: 'Имя',
  grdSalesPersons_Type: 'Тип',
  grdSalesPersons_Extension: 'Расширение',
  grdSalesPersons_Relationship: 'Связь',
  grdAddress_Name: 'Имя',
  grdAddress_Address1: 'Улица',
  grdAddress_Address2: 'Дом',
  grdAddress_City: 'Город',
  grdAddress_State: 'Область',
  grdAddress_Zip: 'Почт. индекс',
  grdItems_Line: 'Номер линии',
  grdItems_Type: 'Тип',
  grdItems_Commodity: 'Товар',
  grdItems_CommodityVariant: 'Вариант',
  grdItems_CommodityDimension: 'Размеры',
  grdItems_UnitOfMeasure: 'Единица',
  grdItems_Location: 'Размещение',
  grdItems_PriceList: 'Прайс-лист',
  grdItems_Quantity: 'Кол-во',
  grdItems_InitialPrice: 'Первоначальная цена',
  grdItems_ActualPrice: 'Фактическая цена',
  grdItems_NetTotal: 'Сумма нетто',
  grdItems_ChargesTotal: 'Всего расходов',
  grdItems_DiscountTotal: 'Всего скидки',
  grdItems_TaxTotal: 'Налог, всего',
  grdItems_GrossTotal: 'Всего брутто',
  grdPayments_Date: 'Дата оплаты',
  grdPayments_Name: 'Имя',
  grdPayments_Type: 'Тип',
  grdPayments_Status: 'Статус',
  grdPayments_NetTotal: 'Сумма нетто',
  grdPayments_Discounts: 'Скидки',
  grdPayments_Charges: 'Расходы',
  grdPayments_Tax: 'Налог',
  grdPayments_GrossTotal: 'Всего брутто',
  grdPayments_Currency: 'Валюта',
  grdPayments_TenderType: 'Тип тендера',
  grdPayments_TenderReference: 'Ссылка на тендер',
  grdPayments_ProcessDate: 'Дата обработки',
  grdDeliveries_Number: 'Число',
  grdDeliveries_Type: 'Тип',
  grdDeliveries_Status: 'Статус',
  grdDeliveries_RequestedDate: 'Требуемая дата',
  grdDeliveries_ActualDate: 'Фактическая дата',
  grdDeliveries_ActualTime: 'Фактическая время',
  grdDeliveries_RequestedQuantity: 'Требуемое количество',
  grdDeliveries_DeliveredQuantity: 'Кол-во доставленного',
  grdDeliveries_Method: 'Метод',
  grdDeliveries_Carrier: 'Перевозчик',
  grdDeliveries_CarrierReference: 'Ссылка на перевозчика',
  grdDeliveries_ExceptionReason: 'Причина исключения',
  errorERPRequest: 'Произошла ошибка открытия детального представления системы учета заказов.',
  errorERPRequestDetails: '${0}, ${1} Запрос: ${2}',
  btnCloseCaption: 'Закрыть' }
));
},
'Sage/QuickForms/Design/nls/ru/UserControlDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/UserControlDesigner", (
{ displayNameText: 'Пользователь' }
));
},
'Sage/Groups/nls/ru/GroupNavigator':function(){
define("Sage/Groups/nls/ru/GroupNavigator", (
{ firstText: 'К первому',
  previousText: 'К пред.',
  nextText: 'К след.',
  lastText: 'К последнему',
  listText: 'Представление в виде списка',
  noRecordsText: 'Нет записей',
  labelFmtText: '${0} из ${1}' }
));
},
'Sage/Utility/File/nls/ru/AddURLAttachment':function(){
define("Sage/Utility/File/nls/ru/AddURLAttachment", {
    descriptionText: 'Описание',
    urlText: 'URL',
    titleText: 'Добавить URL-вложение',
    okText: 'Ок',
    cancelText: 'Отмена',
    requestFailedMsg: 'Запрошенная операция не может быть завершена, пожалуйста, повторите попытку позже.',
    urlBlankMsg: 'URL или Описание не может быть пустым.'
});
},
'Sage/UI/Filters/nls/ru/EditFilterItems':function(){
define("Sage/UI/Filters/nls/ru/EditFilterItems", {
    selectAllText: 'Выбрать все',
    findItemText: 'Найти пункт:',
    findText: 'Найти',
    clearText: 'Очистить',
    dialogTitle: 'Редактировать элементы фильтра',
    okText: 'Ок',
    cancelText: 'Отмена'
});
},
'Sage/MainView/ReportMgr/Crystal/nls/ru/CrystalReportsFormatter':function(){
define("Sage/MainView/ReportMgr/Crystal/nls/ru/CrystalReportsFormatter", (
{ txtEdit: 'Изменить',
  txtDelete: 'Удалить',
  txtRangeValue: '${0} по ${1}' }
));
},
'Sage/Utility/File/nls/ru/DragDropWatcher':function(){
define("Sage/Utility/File/nls/ru/DragDropWatcher", {
    query0: 'Функция, которую вы запрашиваете, требует модуль Saleslogix <br> Desktop Integration.',
    query1: 'Искать еще...',
    query2: 'Хотите установить эту функцию сейчас?',
    query3: 'Примечание: Этот модуль может быть установлен в любое время со страницы входа в систему или со страницы Параметры.'
});
},
'Sage/QuickForms/Design/nls/ru/DesignSurface':function(){
define("Sage/QuickForms/Design/nls/ru/DesignSurface", (
{ bisectionErrorText: 'Размещение с другим контролом приведет к тому, что место будет поделено попалам.',
  rowBoundsErrorText: 'Выбранная строка выходит за границы.',
  columnBoundsErrorText: 'Выбранная колонка выходит за границы.',
  rowSpanBoundsErrorText: 'Выбранная высота выходит за пределы количества строк.',
  columnSpanBoundsErrorText: 'Выбранная ширина выходит за пределы количества колонок.',
  occupiedErrorText: 'Не достаточно свободного места для выбранного размера.' }
));
},
'Sage/MainView/ActivityMgr/nls/ru/ConfirmListPanelConfig':function(){
define("Sage/MainView/ActivityMgr/nls/ru/ConfirmListPanelConfig", (
{ colNameType: 'Тип дела',
  colNameNotification: 'Сообщение',
  colNameStartDate: 'Дата начала',
  colNameDuration: 'Длительность',
  colNameRegarding: 'Тема',
  colNameFromUser: 'От',
  colNameToUser: 'Кому' }
));
},
'Sage/QuickForms/Design/Editors/nls/ru/FormAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/FormAdvancedPropertyEditor", (
{ titleText: 'Расширенный',
  generalText: 'Общий',
  useEntityNameAsTitleText: 'Используйте имя сущности как название:',
  useEntityNameAsTitleTooltipText: 'Используете имя текущей сущности в название формы.' }
));
},
'Sage/MainView/ActivityMgr/nls/ru/EventListPanelConfig':function(){
define("Sage/MainView/ActivityMgr/nls/ru/EventListPanelConfig", (
{ colNameType: 'Тип',
  colNameStartDate: 'Дата начала',
  colNameEndDate: 'Дата окончания',
  colNameDescription: 'Описание',
  colNameUser: 'Пользователь',
  colNameLocation: 'Размещение' }
));
},
'Sage/Extensions/Activity/ListPanelOverrides/nls/ru/AllOpenListPanelConfig':function(){
define("Sage/Extensions/Activity/ListPanelOverrides/nls/ru/AllOpenListPanelConfig", (
{ colNameAssociationCount: 'Число участников' }
));
},
'Sage/MainView/nls/ru/FormManager':function(){
define("Sage/MainView/nls/ru/FormManager", (
{ nameText: 'Имя',
  entityText: 'Сущность',
  layoutText: 'Макет',
  titleFmtString: 'Дизайнер форм - ${0}',
  pageTitle: 'Saleslogix - дизайнер форм' }
));
},
'Sage/UI/nls/ru/ActivityScheduler':function(){
define("Sage/UI/nls/ru/ActivityScheduler", {
    tooltipTime: 'Время',
    tooltipContactName: 'Контакт',
    tooltipAccountName: 'Субъект',
    tooltipCompanyName: 'Компания',
    tooltipLeadName: 'Наводка',
    tooltipPhoneNumber: 'Телефон',
    tooltipRegarding: 'Тема',
    tooltipPriority: 'Приоритет',
    tooltipNotes: 'Заметки',
    tooltipType: 'Тип',
    tooltipDayType: 'Тип дня',
    tooltipStartDate: 'Дата начала',
    tooltipEndDate: 'Дата окончания',
    tooltipLocation: 'Размещение',
    tooltipDescription: 'Описание',
    completedText: '(Завершено)',
    tooltipMoreActivities: 'Нажмите, чтобы увидеть больше дел',
    scheduler_dates:
    {
        month_full:
        [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь'
        ],
        month_short:
        [
            'Янв',
            'Фев',
            'Мар',
            'Апр',
            'Май',
            'Июнь',
            'Июль',
            'Авг',
            'Сен',
            'Окт',
            'Ноя',
            'Дек'
        ],
        day_full:
        [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
        ],
        day_short: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    },
    scheduler_labels:
    {
        dhx_cal_today_button: 'Сегодня',
        day_tab: 'День',
        week_tab: 'Неделя',
        workweek_tab: 'Рабочая неделя',
        month_tab: 'Месяц',
        new_event: 'Новое событие',
        icon_save: 'Сохранить',
        icon_cancel: 'Отмена',
        icon_details: 'Детали',
        icon_edit: 'Изменить',
        icon_delete: 'Удалить',
        confirm_closing: '',
        confirm_deleting: 'События будут удалены окончательно, вы уверены?',
        section_description: 'Описание',
        section_time: 'Период времени',
        full_day: 'Полный рабочий день',
        confirm_recurring: 'Вы хотите редактировать весь набор повторяющихся событий?',
        section_recurring: 'Повторение событий',
        button_recurring: 'Запрещено',
        button_recurring_open: 'Доступен',
        agenda_tab: 'Повестка дня',
        date: 'Дата',
        description: 'Описание',
        year_tab: 'Год',
        week_agenda_tab: 'Повестка дня'
    }
});
},
'Sage/MainView/nls/ru/SecurityManager':function(){
define("Sage/MainView/nls/ru/SecurityManager", (
{ accessText: 'Доступ ',
  columnText: 'Колонка',
  entityText: 'Сущность',
  noAccessText: 'Нет доступа',
  profilesText: 'Профили',
  propertyText: 'Свойство',
  securityManagerText: 'Менеджер безопасности',
  readOnlyText: 'Только для чтения',
  readWriteText: 'Чтение запись',
  resetText: 'Сброс',
  saveText: 'Сохранить',
  tableText: 'Таблица' }
));
},
'Sage/TaskPane/nls/ru/ActivityTaskConfigurationProvider':function(){
define("Sage/TaskPane/nls/ru/ActivityTaskConfigurationProvider", (
{ scheduleText: 'Планировать',
  eventText: 'Событие',
  phoneCallText: 'Звонок',
  toDoText: 'Дело',
  meetingText: 'Встреча',
  personalActivityText: 'Личные дела',
  deleteConfirmationText: 'Удалить подтверждение',
  acceptConfirmationText: 'Подтвердить',
  declineConfirmationText: 'Отклонить',
  completeActivityText: 'Завершить дело',
  deleteActivityText: 'Удалить дело',
  deleteEventText: 'Удалить событие',
  scheduleEventText: 'Планировать событие',
  scheduleRequestText: 'Планировать запрос',
  deleteRequestText: 'Удалить запрос',
  recordsSelectedText: 'записей выбрано',
  clearText: 'Очистить' }
));
},
'Sage/UI/Controls/nls/ru/EntityInfoToolTip':function(){
define("Sage/UI/Controls/nls/ru/EntityInfoToolTip", {
    errorText: 'Информация не найдена.',
    loadingText: 'Загрузка...',
    noInfoText: 'Нет данных для отображения.',
    mainText: 'Основной:',
    faxText: 'Факс:',
    tollFreeText: 'Справочный тел.:',
    urlText: 'Веб URL:',
    workText: 'Рабочий:',
    mobileText: 'Мобильный тел.:',
    emailText: 'Эл.почта:',
    contactNameText: 'Имя:',
    phoneText: 'Телефон:',
    accountText: 'Субъект:'
});
},
'Sage/MainView/ActivityMgr/nls/ru/ActivityGroupContextService':function(){
define("Sage/MainView/ActivityMgr/nls/ru/ActivityGroupContextService", (
{ activityTabDisplayName: 'Мои дела',
  litTabDisplayName: 'Инф. материалы',
  eventTabDisplayName: 'События',
  confirmTabDisplayName: 'Подтверждения',
  pastDueTabDisplayName: 'Прошедшие',
  alarmTabDisplayName: 'Оповещения',
  allOpenTabDisplayName: 'Все открытые' }
));
},
'Sage/MainView/ActivityMgr/templates/nls/ru/AllOpenDetailSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/ru/AllOpenDetailSummary", (
{ txtPhone_Caption: 'Телефон:',
  lnkOpportunityName_Caption: 'Сделка:',
  txtStartTime_Caption: 'Время начала:',
  lnkContactName_Caption: 'Контакт:',
  lnkLeadName_Caption: 'Наводка:',
  lnkTicketNumber_Caption: 'Заявка:',
  txtLocation_Caption: 'Размещение:',
  txtLeader_Caption: 'Руководитель:',
  txtDuration_Caption: 'Длительность:',
  lnkAccountName_Caption: 'Субъект:',
  lnkCompanyName_Caption: 'Компания:',
  txtNotes_Caption: 'Заметки:',
  btnComplete_Caption: 'Завершить',
  txtAttendeeCount_Caption: 'Число участников:' }
));
},
'Sage/MainView/ReportMgr/templates/nls/ru/ReportsListSummary':function(){
define("Sage/MainView/ReportMgr/templates/nls/ru/ReportsListSummary", (
{}
));
},
'Sage/MainView/ReportMgr/Common/nls/ru/ExportOptionsDialog':function(){
define("Sage/MainView/ReportMgr/Common/nls/ru/ExportOptionsDialog", {
    txtDialogTitle: 'Параметры экспорта',
    txtDialogTitleScheduling: 'Экспорт и планирование Опции',
    cmdBack_Caption: '< Назад',
    cmdNext_Caption: 'Следующий>',
    cmdCancel_Caption: 'Отмена',
    txtName: 'Имя',
    txtSelectUser: 'Выберите польз.',
    txtOK: 'Ок',
    txtOutputFormat_Caption: 'Формат',
    txtRunAs_Caption: 'Запуск от имени',
    txtScheduleDescription_Caption: 'Описание'
});
},
'Sage/MainView/ReportMgr/templates/nls/ru/ScheduleDetailSummary':function(){
define("Sage/MainView/ReportMgr/templates/nls/ru/ScheduleDetailSummary", {
    txtScheduleName_Caption: "Работа Имя:",
    txtDescription_Caption: "Описание:",
    txtRunAsUser_Caption: "Запуск от имени:",
    txtScheduledBy_Caption: "Запланированное по:",
    txtOutputFormat_Caption: "Формат вывода:",
    txtFrequency_Caption: "Частота:",
    txtUser_Caption: "Автор:",
    txtLastExecutionDate_Caption: "Последний запуск:",
    txtExecutionCount_Caption: "Число выполнений:",
    txtReportName_Caption: "Доклад:"
});
},
'Sage/MainView/Opportunity/nls/ru/UpdateOpportunities':function(){
define("Sage/MainView/Opportunity/nls/ru/UpdateOpportunities", (
{ addToForecast_No: 'Нет',
  addToForecast_Yes: 'Да',
  btnCancel_Caption: 'Отмена',
  btnOK_Caption: 'Ок',
  estimatedClose_Days: 'Дней',
  estimatedClose_MoveOut: 'Переместить',
  estimatedClose_To: 'Кому',
  moveEstCloseDate_Backward: 'Назад',
  moveEstCloseDate_Forward: 'Вперед',
  update_To_Caption: 'Кому:',
  update_Property_Caption: 'Обновление:',
  updateMultipleOpps_Caption: 'Обновить сделки',
  updateProp_AcctMgr: 'Менеджер',
  updateProp_Comments: 'Комментарии',
  updateProp_EstClose: 'План. закрытие',
  updateProp_Forecast: 'Добавить в прогноз',
  updateProp_Probability: 'Вероятность закрытия %',
  lookupActMgrText: 'Поиск Менеджера',
  lookupNameColText: 'Имя',
  lookupTitleColText: 'Название',
  lookupDepartmentColText: 'Отдел',
  lookupRegionColText: 'Регион',
  lookupTypeColText: 'Тип',
  errorUnspecifiedValue: 'Пожалуйста укажите значение перед продолжением.',
  errorRequestingJobMgr: 'Ошибка при выполнении обновления: ${0}' }
));
},
'Sage/UI/nls/ru/EditCalendarUsers':function(){
define("Sage/UI/nls/ru/EditCalendarUsers", {
    selectAllText: 'Выбрать все',
    findItemText: 'Найти пользователя:',
    findText: 'Найти',
    clearText: 'Очистить',
    dialogTitle: 'Править пользователей календаря',
    okText: 'ОК',
    cancelText: 'Отмена',
    maxUsersErrorMessage: 'Нельзя выбрать более ${0} пользователей (включая вашего собственного).  Отмените выбор одного из выбранных пользователей и повторите попытку.',
    updateErrorMessage: 'Ошибка обновления пользователей календаря'
});
},
'Sage/MainView/ReportMgr/Crystal/nls/ru/CrystalReportParametersDialog':function(){
define("Sage/MainView/ReportMgr/Crystal/nls/ru/CrystalReportParametersDialog", (
{ txtDialogTitle: 'Ввод значений',
  cmdBack_Caption: '< Назад',
  cmdNext_Caption: 'Следующий>',
  cmdCancel_Caption: 'Отмена' }
));
},
'Sage/QuickForms/Design/nls/ru/DateTimePickerControlDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/DateTimePickerControlDesigner", (
{ displayNameText: 'Выбор Дата/Время' }
));
},
'Sage/UI/Controls/nls/ru/HelpMenu':function(){
define("Sage/UI/Controls/nls/ru/HelpMenu", {
    helpText: 'Помощь',
    aboutText: 'О программе',
    webClientHelpText: 'Помощь по Веб-клиенту',
    gettingStartedText: 'Руководство к началу работы',
    quickReferenceText: 'Краткое справочное руководство'
});
},
'Sage/QuickForms/Design/Editors/nls/ru/LayoutPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/LayoutPropertyEditor", (
{ titleText: 'Макет',
  positionText: 'Позиция',
  sizeText: 'Размер',
  rowText: 'Строка:',
  rowTooltipText: 'Номер строки для элементов управления.',
  columnText: 'Столбец:',
  columnTooltipText: 'Номер столбца элемента управления.',
  rowSpanText: 'Диапазон строк:',
  rowSpanTooltipText: 'Количество ячеек, которые элемент управления занимает вертикально.',
  columnSpanText: 'Диапазон столбцов:',
  columnSpanTooltipText: 'Количество ячеек, которые элемент управления занимает по горизонтали.' }
));
},
'Sage/TaskPane/nls/ru/UserTasklet':function(){
define("Sage/TaskPane/nls/ru/UserTasklet", (
{ addToRoleTitle: 'Добавить к роли',
  resetUsersTitle: 'Сброс пользователей',
  associateContactTitle: 'Связать с контактом',
  disAssociateContactTitle: 'Удалить связь с контактом',
  disAssociateDialogTitle: 'Удалить связь с контактом',
  confirmDisAssociate: 'Удалить связь выбранного пользователя ${0} со связанным контактом?',
  confirmDisAssociateMultiple: 'Удалить связь выбранных пользователей ${0} со всеми связанными контактами?',
  associationExistsMessage: 'Выбранный пользователь уже связан с контактом. Чтобы связать этого пользователя с другим контактом, сначала необходимо удалить связь пользователя с контактом.',
  multipleSelectionErrorMessage: 'Эту задачу можно выполнять только для одного пользователя за раз. \n Выберите одного пользователя и выберите задачу снова.',
  noSelectionErrorMessage: 'Должен быть выбран хотя бы один пользователь для отмены связи. \n Выберите одного или нескольких пользователей и повторите задачу.',
  singleSelectionErrorMessage: 'Вы должны выбрать пользователя для отмены связи. \n Выберите одного пользователя и повторите задачу.' }
));
},
'Sage/UI/Alarms/nls/ru/ActivityAlarm':function(){
define("Sage/UI/Alarms/nls/ru/ActivityAlarm", {
    noSubjectText: 'Без темы',
    contactText: 'Контакт',
    accountText: 'Субъект',
    opportunityText: 'Сделка',
    leadText: 'Наводка',
    companyText: 'Компания',
    recurringText: 'Повторение',
    ticketText: 'Заявка',
    leaderText: 'Руководитель',
    locationText: 'Размещение'
});
},
'Sage/MainView/Opportunity/nls/ru/OpportunityStatistics':function(){
define("Sage/MainView/Opportunity/nls/ru/OpportunityStatistics", (
{ opportunityStatistics_Caption: 'Статистика по сделке',
  loadingMessge: 'Загрузка...',
  opportunityCount: 'Количество сделок',
  salesPotentialTotal: 'Итого потенц. продаж (среднее)',
  weightedPotentialTotal: 'Итого прогноз. план. (Среднее)',
  averageCloseProbability: 'Ср. вероятность закрытия',
  actualAmountTotal: 'Всего по факту (в среднем)',
  averageDaysOpen: 'Ср.число дней открытия',
  rangeEstClose: 'Диапазон даты закрытия (Мин - Макс)',
  btnClose_Caption: 'Закрыть',
  errorRequestingStatistics: 'При попытке запроса статистики возможности возникла ошибка.' }
));
},
'Sage/TaskPane/nls/ru/GroupListTasklet':function(){
﻿define(
    "Sage/TaskPane/nls/ru/GroupListTasklet", ({
        GroupListOptionsTitle: 'Параметры списка групп',
        maximizeTitle: 'Развернуть список групп',
        minimizeTitle: 'Свернуть список групп'
    })
);
},
'Sage/MainView/ReportMgr/Crystal/nls/ru/CrystalReportConditionEditor':function(){
define("Sage/MainView/ReportMgr/Crystal/nls/ru/CrystalReportConditionEditor", {
    dlgCrystalReportConditionDetails_Title: 'Добавить/изменить условия',
    cmdOK_Caption: 'Ок',
    cmdCancel_Caption: 'Отмена',
    cmbConditionType_Caption: 'Поиск по',
    txtInvalidParameterTitle: 'Недопустимый параметр',
    txtInvalidParameterMessage: 'Недопустимый параметр: ${0}',
    lkpUser_Caption: 'Пользователь',
    lkpGroup_Caption: 'Группа',
    txtSelectUser: 'Выберите польз.',
    chkCurrentUser_Caption: 'Текущий пользователь',
    txtName: 'Имя',
    txtOK: 'Ок',
    txtSelectGroup: 'Выбрать Группу',
    cmbDateRange_Caption: 'Временной диапазон',
    cmbDateRange_SpecificDates_Caption: 'Точная дата',
    cmbDateRange_ThisWeek_Caption: 'На этой неделе',
    cmbDateRange_ThisMonth_Caption: 'В этом месяце',
    cmbDateRange_ThisQuarter_Caption: 'В этот квартал',
    cmbDateRange_ThisYear_Caption: 'В этом году',
    cmbDateRange_LastWeek_Caption: 'Последняя неделя',
    cmbDateRange_LastMonth_Caption: 'Прошлый месяц',
    cmbDateRange_LastQuarter_Caption: 'Прошлый квартал',
    cmbDateRange_LastYear_Caption: 'Прошлый год',
    cmbDateRange_MonthToDate_Caption: 'Текущий месяц',
    cmbDateRange_QuarterToDate_Caption: 'С начала квартала',
    cmbDateRange_YearToDate_Caption: 'С начала года',
    dtFromDate_Caption: 'От',
    dtToDate_Caption: 'Кому',
    cmbTable_Caption: 'Таблица',
    cmbField_Caption: 'Поле',
    cmbOperator_Caption: 'Оператор',
    txtValue_Caption: 'Значение',
    txtNumericValueFrom_Caption: 'От',
    txtNumericValueTo_Caption: 'Кому'
});
},
'Sage/MainView/IntegrationContract/nls/ru/AdvancedSearchOptions':function(){
define("Sage/MainView/IntegrationContract/nls/ru/AdvancedSearchOptions", (
{ dialogCaption: 'Ссылка на учет',
  searchOptionsHeader: 'Поиск совпадений в ',
  searchOptionsText: 'Следующий критерий использовался в предыдущем поиске. Измените критерий для нового поиска. Нажмите ОК для начала поиска..',
  propertyText: 'Свойство',
  operatorText: 'Оператор',
  searchText: 'Значение поиска',
  loadingText: 'загрузка...',
  loadingDisplay: 'Поиск результатов...',
  hideImgAltText: 'Исключить условие',
  addImgAltText: 'Добавить условие',
  okText: 'ОК',
  cancelText: 'Отмена' }
));
},
'Sage/QuickForms/Design/nls/ru/ColumnDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/ColumnDesigner", (
{ displayNameText: 'Колонка' }
));
},
'Sage/MainView/JobMgr/templates/nls/ru/JobDefinitionDetailSummary':function(){
define("Sage/MainView/JobMgr/templates/nls/ru/JobDefinitionDetailSummary", (
{ txtJobName_Caption: 'Имя задания:',
  txtDescription_Caption: 'Описание:' }
));
},
'Sage/UI/nls/ru/SearchMenuItem':function(){
define("Sage/UI/nls/ru/SearchMenuItem", {
    findText: 'Найти',
    clearText: 'Очистить',
    showHiddenText: 'Показать скрытые: '
});
},
'Sage/Library/nls/ru/DocumentProperties':function(){
define("Sage/Library/nls/ru/DocumentProperties", (
{ Abstract: 'Аннотация',
  Cancel: 'Отмена',
  DocumentProperties: 'Свойства Документа',
  Created: 'Дата создания',
  Description: 'Описание',
  Directory: 'Каталог',
  DoNotExpire: 'Не истекает',
  Expires: 'Истекает',
  FileName: 'Название файла',
  ForceDistribution: 'Принудительно распределить этот файл',
  InvalidFileName: 'Имя файла не может содержать любые из следующих символов: \\ / : * ? " < > |',
  Never: 'Никогда',
  OK: 'ОК',
  Revised: 'Дата изменения',
  Size: 'Размер',
  Status: 'Статус' }
));
},
'Sage/UI/nls/ru/NotesHistoryList':function(){
define("Sage/UI/nls/ru/NotesHistoryList", {
    typeText: 'Тип',
    showDbChangesText: 'Отобразить изменения в БД',
    selectAllText: 'Выбрать все',
    dateText: 'Дата',
    dateTimeText: 'Дата/Время',
    dateRangeText: 'Временной диапазон',
    userText: 'Пользователь',
    accountText: 'Субъект',
    contactText: 'Контакт',
    opportunityText: 'Сделка',
    regardingText: 'Тема',
    notesText: 'Заметки',
    resultText: 'Результат',
    categoryText: 'Категория',
    sendEmailText: 'Отправить по Эл. почте',
    sendToWordText: 'Передать в Word',
    addNoteText: 'Добавить заметку',
    completeAnActivityText: 'Завершить дело',
    helpText: 'Помощь',
    pleaseSelectRecordsText: 'Выберите одну или несколько записей',
    UnableToFindWordMsg: 'Невозможно запустить Microsoft Word.  Проверьте ваши установки по безопасности.',
    printedOnText: 'Напечатано на'
});
},
'Sage/Utility/nls/ru/File':function(){
﻿define("Sage/Utility/nls/ru/File", {
    unableToUploadText: 'Для использования этой функции должен быть установлен модуль интеграции рабочего стола Saleslogix.',
    unknownSizeText: 'Неизвестен',
    largeFileWarningText: 'Предупреждение: запрос не смог быть загружен так как он превышает ограничение на размер установленное администратором. ',
    largeFileWarningTitle: 'Предупреждение'
});
},
'Sage/MainView/ReportMgr/nls/ru/HistoryListPanelConfig':function(){
define("Sage/MainView/ReportMgr/nls/ru/HistoryListPanelConfig", {
    colNameDate: 'Дата',
    colNameScheduleName: 'Описание',
    colNameExecutionType: 'Тип выполнения',
    colNameRunAs: 'Запуск от имени',
    colNameScheduledBy: 'Запланировано от имени',
    colNameReportName: 'Отчет',
    colNameSize: 'Размер файла',
    colNameOutputFormat: 'Формат вывода',
    colNameReportType: 'Тип'
});
},
'Sage/MainView/JobMgr/templates/nls/ru/ScheduleDetailSummary':function(){
define("Sage/MainView/JobMgr/templates/nls/ru/ScheduleDetailSummary", {
    txtScheduleName_Caption: 'Расписание:',
    txtJobName_Caption: 'Имя задания:',
    txtUser_Caption: 'Scheduled By:',
    txtRunAs_Caption: 'Run As:',
    txtStartTime_Caption: 'Время начала:',
    txtEndTime_Caption: 'Время окончания:',
    txtNextRunTime_Caption: 'Время следующего запуска:',
    txtRepeatCount_Caption: 'Число повторений:',
    txtRepeatInterval_Caption: 'Интервал повторения:',
    txtPriority_Caption: 'Приоритет:',
    txtStatus_Caption: 'Статус:',
    txtExecutionCount_Caption: 'Число выполнений:'
});
},
'Sage/QuickForms/Design/nls/ru/UrlControlDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/UrlControlDesigner", (
{ displayNameText: 'URL' }
));
},
'Sage/TaskPane/nls/ru/ContactTasksTasklet':function(){
define("Sage/TaskPane/nls/ru/ContactTasksTasklet", (
{ associateContactTitle: 'Связать с пользователем',
  disAssociateContactTitle: 'Удалить связь с пользователем',
  disAssociateDialogTitle: 'Отменить связь с пользователем',
  confirmDisAssociate: 'Удалить связь выбранного контакта ${0} со связанным пользователем?',
  confirmDisAssociateMultiple: 'Удалить связь выбранных контактов ${0} со всеми связанными пользователями?',
  associationExistsMessage: 'Выбранный контакт уже связан с пользователем. Чтобы связать этот контакт с другим пользователем, сначала необходимо удалить связь контакта с пользователем.',
  multipleSelectionErrorMessage: 'Эту задачу можно выполнять только для одного контакта за раз. \n Выберите один контакт и выберите задачу снова.',
  noSelectionErrorMessage: 'Должен быть выбран хотя бы один контакт для отмены связи. \n Выберите один или несколько контактов и повторите задачу.',
  singleSelectionErrorMessage: 'Вы должны выбрать контакт для отмены связи. \n Выберите один контакт и повторите задачу.' }
));
},
'Sage/MainView/ActivityMgr/templates/nls/ru/EventSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/ru/EventSummary", (
{ txtStartDate_Caption: 'Дата начала:',
  txtEndDate_Caption: 'Дата окончания:',
  txtLocation_Caption: 'Размещение:',
  txtUser_Caption: 'Пользователь:',
  txtDescription_Caption: 'Описание:' }
));
},
'Sage/MainView/ReportMgr/Common/nls/ru/_WizardDialogBase':function(){
define("Sage/MainView/ReportMgr/Common/nls/ru/_WizardDialogBase", (
{ txtFinish: 'Завершить' }
));
},
'Sage/MainView/JobMgr/nls/ru/SchedulesListPanelConfig':function(){
define("Sage/MainView/JobMgr/nls/ru/SchedulesListPanelConfig", {
    colNameTriggerName: 'Планировать',
    colNameJobName: 'Имя задания',
    colNameUser: 'Запланированные По',
    colNameStartTimeUtc: 'время начала',
    colNameEndTimeUtc: 'Время окончания',
    colNamePriority: 'Приоритет',
    colNameStatus: 'Статус',
    colNameTimesTriggered: 'Число выполнений'
});
},
'Sage/Utility/File/nls/ru/GoogleDocPicker':function(){
define("Sage/Utility/File/nls/ru/GoogleDocPicker", {
    googleDocumentsTitle: 'Документы Google',
    couldNotOpenWindowMsg: 'Не могут открыть окно аутентификации - пожалуйста, проверьте ваши настройки всплывающих окон.'
});
},
'Sage/QuickForms/Design/nls/ru/ComboBoxControlDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/ComboBoxControlDesigner", (
{ displayNameText: 'Выпадающий список' }
));
},
'Sage/MainView/ActivityMgr/nls/ru/LitRequestListPanelConfig':function(){
define("Sage/MainView/ActivityMgr/nls/ru/LitRequestListPanelConfig", (
{ colNameView: 'Вид',
  colNameContact: 'Контакт',
  colNameDescription: 'Описание',
  colNameFillDate: 'Заполнено',
  colNameFillStatus: 'Статус',
  colNameOptions: 'Параметры',
  colNamePriority: 'Приоритет',
  colNameReqestDate: 'Дата запроса',
  colNameSendDate: 'Дата отправки',
  colNameSendVia: 'Отправить по',
  colNameTotalCost: 'Общая стоимость',
  colNameFillUser: 'Заполнить пользователя',
  colNameReqestUser: 'Запрос пользов.',
  colNameAccount: 'Субъект',
  colNamePostalCode: 'Почтовый код' }
));
},
'Sage/MainView/ActivityMgr/nls/ru/HistoryEditor':function(){
define("Sage/MainView/ActivityMgr/nls/ru/HistoryEditor", (
{ labelWidth: '120',
  tabNameGeneralText: 'Общие',
  tabNameAttachmentsText: 'Вложения',
  scheduleText: 'Планировать',
  startTimeText: 'Запланировано',
  completedDateText: 'Заверш.',
  timeLessText: 'В течение дня',
  durationText: 'Длительность',
  contactText: 'Контакт',
  accountText: 'Субъект',
  leadText: 'Наводка',
  opportunityText: 'Сделка',
  ticketText: 'Заявка',
  companyText: 'Компания',
  regardingText: 'Тема',
  resultText: 'Результат',
  notesText: 'Заметки',
  priorityText: 'Приоритет',
  leaderText: 'Руководитель',
  categoryText: 'Категория',
  locationText: 'Размещение',
  scheduledByFormatText: 'Запланировал ${user} ${date}',
  cancelText: 'Отмена',
  okText: 'Ок',
  deleteText: 'Удалить',
  lookupActText: 'Поиск Субъекта',
  lookupContactText: 'Поиск Контакта',
  lookupOpportunityText: 'Поиск сделки',
  lookupTicketText: 'Поиск Заявки',
  lookupLeadText: 'Поиск Наводки',
  lookupLeaderText: 'Поиск лидера',
  lookupResourcesText: 'Поиск',
  mainPhoneText: 'Основной тел.',
  typeText: 'Тип',
  subTypeText: 'Подтип',
  nameText: 'Имя',
  cityText: 'Город',
  stateText: 'Область',
  workphoneText: 'Раб. телефон',
  emailText: 'Эл.почта',
  acctMgrText: 'Менеджер',
  descriptionText: 'Описание',
  stageText: 'Стадия',
  statusText: 'Статус',
  ownerText: 'Доступ',
  ticketNumberText: 'Номер заявки',
  phoneText: 'Телефон',
  urgencyText: 'Срочность',
  areaText: 'Область',
  recurringText: 'Повторение',
  followupText: 'Последующее',
  noneText: 'Нет',
  carryOverAttachmentsText: 'Перенести вложения',
  carryOverNotesText: 'Перенести заметки',
  asScheduledText: 'Как запланировано',
  insertText: 'Добавить',
  couldNotSaveErrorText: 'К сожалению, история не может быть сохранена, потому что произошла ошибка.',
  deleteMessage: 'Запись будет удалена без возможности восстановления',
  deleteTitle: 'Удаление истории',
  couldNotDeleteErrorText: 'К сожалению, история не может быть удалена, потому что произошла ошибка.',
  postalText: 'Почтовый индекс',
  tabNameParticipants: 'Все участники' }
));
},
'Sage/Groups/nls/ru/GroupManager':function(){
define("Sage/Groups/nls/ru/GroupManager", (
{ ConfirmDeleteMessage: 'Вы действительно хотите удалить текущую группу?',
  ConfirmDeleteFmtMessage: 'Вы действительно хотите удалить эту группу: ${0}',
  InvalidSortStringMessage: 'Ошибка: Недопустимая строка сортировки - ',
  InvalidConditionStringMessage: 'Ошибка: Недопустимая строка условия - ',
  InvalidLayoutConditionStringMessage: 'Ошибка: Недопустимая строка разметки - ',
  noneSelectedTitle: 'Ни одной записи не выбрано',
  noneSelectedPromptFmt: 'Записи не выбраны. Группа, содержащая ${0} запись(ей), будет добавлена.  Продолжить?',
  noneSelectedRemovePromptFmt: 'Записи не выбраны. Группа, содержащая ${0} запись(ей), будет удалена.  Продолжить?',
  noRecordsInGroup: 'Нет записей, которые могут быть выбраны из этой группы.',
  newGroupTitle: 'Добавить записи в новую группу',
  newGroupNamePrompt: '${0} выбранная запись(и) будут добавлены к этой новой группе.<br><br>Название группы:<br>${1}',
  newGroupRePrompt: '&nbsp;&nbsp;<i>Пожалуйста введите имя группы.</i>',
  invalidCharMsg: 'Имя не может содержать: / \\ : * ? " <> | или \'',
  groupNameText: 'Название группы:',
  saveLookupDlgTitle: 'Сохранить результаты поиска как новую группу',
  yesCaption: 'Да',
  noCaption: 'Нет',
  cancelCaption: 'Отмена',
  okCaption: 'Ок',
  LOCALSTORE_NAMESPACE: 'SageGroups',
  exportToExcel: 'Этот метод является устаревшим, см. Sage.TaskPane.CommonTasksTasklet.exportToExcel.' }
));
},
'Sage/QuickForms/Design/Editors/nls/ru/DateTimePickerAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/DateTimePickerAdvancedPropertyEditor", (
{ titleText: 'Расширенный',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  controlInfoText: 'Информация о контроле',
  dataText: 'Данные',
  buttonToolTipText: 'Подсказка кнопки:',
  buttonToolTipTooltipText: 'Подсказка отображающаяся когда пользователь наводит указатель мыши на кнопку контрола.',
  controlIdText: 'ИД контрола:',
  controlIdTooltipText: 'Идентификатор для данного элемента управления.',
  controlLabelPlacementText: 'Расположение подписи:',
  controlLabelPlacementTooltipText: 'Позиция подписи по отношению к элементу управления.',
  controlTypeText: 'Тип контрола:',
  controlTypeTooltipText: 'Тип управления Saleslogix.',
  defaultDataBindingText: 'Привязка данных:',
  defaultDataBindingTooltipText: 'Поле из базы данных, используемое этим элементом управления.',
  displayModeText: 'Режим отображения:',
  displayModeTooltipText: 'Режим отображения контрола: текстовое поле, гиперссылка или обычный текст.',
  enabledText: 'Включен:',
  enabledTooltipText: 'Позволяет пользователю взаимодействовать с этим элементом управления.',
  requiredText: 'Обязательный:',
  requiredTooltipText: 'Требуется значение при сохранении данных.',
  timelessText: 'В течение дня:',
  timelessTooltipText: 'Использовать дату без времени и без преобразования на летнее время.',
  visibleText: 'Видимый:',
  visibleTooltipText: 'Показать или скрыть этот элемент управления на форме.',
  labelPlacementText: { left: 'Слева', right: 'Право', top: 'Верх', none: 'Нет' },
  displayModeTypeText: 
   { AsControl: 'Как элемент управления',
     AsText: 'Как текст',
     AsHyperlink: 'Как гиперссылку' } }
));
},
'Sage/QuickForms/Design/Editors/nls/ru/ComboBoxBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/ComboBoxBasicPropertyEditor", (
{ titleText: 'Бейсик',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  captionText: 'Заголовок:',
  captionTooltipText: 'Подпись для показа на форме для данного элемента управления.',
  captionAlignmentText: 'Выравнивание заголовка:',
  captionAlignmentTooltipText: 'Обоснование текста метки.',
  isReadOnlyText: 'Только чтение:',
  isReadOnlyTooltipText: 'Не разрешает изменение.',
  toolTipText: 'Подсказка:',
  toolTipTooltipText: 'Короткий текст справки о контроле.',
  alignmentText: { left: 'Слева', center: 'Центр', right: 'Право' } }
));
},
'Sage/MainView/ReportMgr/nls/ru/ReportsListPanelConfig':function(){
define("Sage/MainView/ReportMgr/nls/ru/ReportsListPanelConfig", {
    colNameReportName: 'Имя',
    colNameType: 'Тип',
    colNameTable: 'Таблица',
    colNameCreateUser: 'Создано',
    colNameCreateDate: 'Дата создания',
    colNameLastExecutionDate: 'Последний запуск',
    colNameLastExecutionUser: 'Последний запуск от имени',
    colNameModifyUser: 'Кто обновил',
    colNameModifyDate: 'Дата обновления'
});
},
'Sage/UI/Alarms/nls/ru/JobNotificationButton':function(){
define("Sage/UI/Alarms/nls/ru/JobNotificationButton", {
    notificationToolTip: 'Уведомлений о заданиях: ${0}.',
    notificationErrorToolTip: 'При загрузке уведомлений о задании произошла ошибка. Обратитесь к администратору.'
});
},
'Sage/MainView/ReportMgr/Crystal/nls/ru/CrystalReportWizardController':function(){
define("Sage/MainView/ReportMgr/Crystal/nls/ru/CrystalReportWizardController", (
    {
        txtOnDemandScheduleName: 'По запросу',
        txtReportSuccessfullyScheduled: 'Расписание отчета составлено.',
        txtDynamicParametersMessage: 'Отчеты с динамическими параметрами в настоящее время не поддерживаются.',
        txtError: 'Ошибка',
        txtScheduleSuccessfullyUpdated: 'Расписание успешно обновлено.',
        txtInvalidReportWithDynamicParameters: 'Отчет "${0}:${1}" не может быть запущен или внесен в график, поскольку является недопустимым по следующим причинам: ${2}',
        txtInvalidDynamicParameterDatasource: 'Динамический параметр "${p.name}" ("${p.promptText}") в настоящий момент не поддерживается, поскольку его источник данных требует ввода параметра.',
        txtInvalidDynamicParameterReason: 'Недопустимый динамический параметр "${p.name}" ("${p.promptText}"): ${p.invalidDynamicParameterReason}',
        txtInvalidDynamicParameterUnknownReason: 'Недопустимый динамический параметр "${p.name}" ("${p.promptText}").'
    }
));
},
'Sage/MainView/JobMgr/nls/ru/JobDefinitionsListPanelConfig':function(){
define("Sage/MainView/JobMgr/nls/ru/JobDefinitionsListPanelConfig", (
{ colNameJobName: 'Имя задания',
  colNameDescription: 'Описание',
  colNameType: 'Тип' }
));
},
'Sage/MainView/ActivityMgr/nls/ru/RecurringEditor':function(){
define("Sage/MainView/ActivityMgr/nls/ru/RecurringEditor", (
{ activityOccurrsText: 'Это дело выполняется...',
  onceText: 'Один раз',
  dailyText: 'Ежедневно',
  weeklyText: 'Еженедельно',
  monthlyText: 'Ежемесячно',
  yearlyText: 'Ежегодно',
  occursOnceText: 'Это дело происходит только один раз',
  everyText: 'Каждый(е)',
  daysText: 'День(дней)',
  daysAfterText: 'День(дней) после завершения',
  startRecurringText: 'Начало повторений: ',
  endAfterText: 'Заверишть после',
  endOnText: 'Конец повторений',
  occurrencesText: 'вхождения',
  weeksOnText: 'Неделя(и)',
  monText: 'Понедельник',
  tueText: 'Вторник',
  wedText: 'Среда',
  thurText: 'Четверг',
  friText: 'Пятница',
  satText: 'Суббота',
  sunText: 'Воскресенье',
  weeksAfterText: 'Недель после завершения',
  monthsOnText: 'День месяца',
  monthsOnTheText: 'месяц (а) в',
  monthsAfterText: 'Месяцев  после завершения',
  firstText: '1-й',
  secondText: '2-ой',
  thirdText: '3-й',
  fourthText: '4-ый',
  lastText: 'последний',
  yearsOnText: 'Год (лет)',
  yearsAfterText: 'Лет после окончания',
  janText: 'Январь',
  febText: 'Февраль',
  marText: 'Март',
  aprText: 'Апрель',
  mayText: 'Май',
  junText: 'Июнь',
  julText: 'Июль',
  augText: 'Август',
  sepText: 'Сентябрь',
  octText: 'Октябрь',
  novText: 'Ноябрь',
  decText: 'Декабрь',
  theText: 'Каждый(ое)',
  inText: 'в' }
));
},
'Sage/MainView/ReportMgr/Crystal/nls/ru/CrystalReportsUtility':function(){
﻿define("Sage/MainView/ReportMgr/Crystal/nls/ru/CrystalReportsUtility", {
    txtCurrentUser: 'Текущий пользователь'
});
},
'Sage/QuickForms/Design/Editors/nls/ru/DataGridAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/DataGridAdvancedPropertyEditor", (
{ titleText: 'Расширенный',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  controlInfoText: 'Информация о контроле',
  dataText: 'Данные',
  controlIdText: 'ИД контрола:',
  controlIdTooltipText: 'Идентификатор для данного элемента управления.',
  controlTypeText: 'Тип контрола:',
  controlTypeTooltipText: 'Тип управления Saleslogix.',
  dataSourceText: 'Источник данных:',
  dataSourceTooltipText: 'Источник данных для этого элемента управления, такой как другой элемент управления или сущность.',
  emptyTableRowText: 'Текст пустой таблицы:',
  emptyTableRowTooltipText: 'Текст для отображения, если в таблице нет данных.',
  expandableRowsText: 'Расширяемые строки:',
  expandableRowsTooltipText: 'Позволяет пользователю расширить строки таблицы, чтобы показать больше текста.',
  renderVerticalText: 'Вертикальная отрисовка:',
  renderVerticalTooltipText: 'Показывать строки как столбцы.',
  showSortIconText: 'Показать значок сортировки:',
  showSortIconTooltipText: 'Показать значок сортировки на сортируемых столбцах.',
  visibleText: 'Видимый:',
  visibleTooltipText: 'Показать или скрыть этот элемент управления на форме.' }
));
},
'Sage/MainView/ReportMgr/nls/ru/BaseListPanelConfig':function(){
define("Sage/MainView/ReportMgr/nls/ru/BaseListPanelConfig", (
{ titleFmtString: '${0}' }
));
},
'Sage/QuickForms/Design/nls/ru/CurrencyControlDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/CurrencyControlDesigner", (
{ displayNameText: 'Валюта' }
));
},
'Sage/QuickForms/Design/nls/ru/DataGridControlDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/DataGridControlDesigner", (
{ displayNameText: 'Грид данных',
  emptyTableRowStringText: 'Нет соответствующих записей.' }
));
},
'Sage/QuickForms/Design/nls/ru/PickListControlDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/PickListControlDesigner", (
{ displayNameText: 'Справочник' }
));
},
'Sage/MainView/ActivityMgr/templates/nls/ru/LitRequestSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/ru/LitRequestSummary", (
{ txtSendDate_Caption: 'Отправить:',
  txtScheduled_Caption: 'Запланир.:',
  txtStatus_Caption: 'Статус:',
  txtRequestedBy_Caption: 'Запрошено:',
  lnkContact_Caption: 'Контакт:',
  txtPriority_Caption: 'Приоритет:',
  txtVia_Caption: 'Отправить по:',
  txtCost_Caption: 'Общая стоимость:',
  txtWorkPhone_Caption: 'Раб. телефон:',
  txtPostalCode_Caption: 'Индекс:',
  txtHomePhone_Caption: 'Домашний тел.',
  lnkAccount_Caption: 'Субъект:',
  txtRequestDate_Caption: 'Запрошено:' }
));
},
'Sage/QuickForms/Design/Editors/nls/ru/CheckBoxBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/CheckBoxBasicPropertyEditor", (
{ titleText: 'Бейсик',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  captionText: 'Заголовок:',
  captionTooltipText: 'Подпись для показа на форме для данного элемента управления.',
  captionAlignmentText: 'Выравнивание заголовка:',
  captionAlignmentTooltipText: 'Обоснование текста метки.',
  isReadOnlyText: 'Только чтение:',
  isReadOnlyTooltipText: 'Не разрешает изменение.',
  toolTipText: 'Подсказка:',
  toolTipTooltipText: 'Короткий текст справки о контроле.',
  alignmentText: { left: 'Слева', center: 'Центр', right: 'Право' } }
));
},
'Sage/Library/nls/ru/FolderHandler':function(){
define("Sage/Library/nls/ru/FolderHandler", (
{ AccessError: 'У вас нет прав, необходимых для выполнения этого действия.',
  AddFolderError: 'Произошла ошибка при попытке добавить папку в библиотеку.',
  Cancel: 'Отмена',
  Confirm: 'Подтвердить',
  DeleteFolderCnfmFmt: 'Вы действительно хотите удалить папку "${0}" и все ее содержимое?',
  DeleteFolderError: 'Произошла ошибка при попытке удалить папку библиотеки.',
  DontDeleteRoot: 'Пожалуйста, не удаляйте корневую папку.',
  DontEditRoot: 'Пожалуйста, не изменяйте имя корневой папки.',
  EnterFolderName: 'Введите имя новой папки:',
  EnterNewFolderName: 'Введите новое имя для папки.',
  FolderUpdateConflictError: 'Папка была изменена ​​другим пользователем, пожалуйста, обновите и повторите попытку.',
  InvalidFolderName: 'Имя папки не может содержать любые из следующих символов:  \\ / : * ? " < > |',
  NewFolder: 'Новая Папка',
  No: 'Нет',
  OK: 'ОК',
  PleaseSelectFolder: 'Пожалуйста, выберите папку.',
  RenameFolderError: 'Произошла ошибка при попытке переименовать папку библиотеки.',
  Yes: 'Да' }
));
},
'Sage/QuickForms/Design/Editors/nls/ru/ComboBoxAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/ComboBoxAdvancedPropertyEditor", (
{ titleText: 'Расширенный',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  controlInfoText: 'Информация о контроле',
  dataText: 'Данные',
  itemGroupText: 'Элементы',
  controlIdText: 'ИД контрола:',
  controlIdTooltipText: 'Идентификатор для данного элемента управления.',
  controlLabelPlacementText: 'Расположение подписи:',
  controlLabelPlacementTooltipText: 'Позиция подписи по отношению к элементу управления.',
  controlTypeText: 'Тип контрола:',
  controlTypeTooltipText: 'Тип управления Saleslogix.',
  dataSourceText: 'Источник данных:',
  dataSourceTooltipText: 'Источник данных для этого элемента управления, такой как другой элемент управления или сущность.',
  defaultDataBindingText: 'Привязка данных:',
  defaultDataBindingTooltipText: 'Поле из базы данных, используемое этим элементом управления.',
  enabledText: 'Включен:',
  enabledTooltipText: 'Позволяет пользователю взаимодействовать с этим элементом управления.',
  itemsText: 'Элементы:',
  itemsTooltipText: 'Пользователь может выбирать значения.',
  textFieldText: 'Текстовое поле:',
  textFieldTooltipText: 'Имя поля источника данных, используемые для заполнения видимой части элементов списка.',
  valueFieldText: 'Поле с значением:',
  valueFieldTooltipText: 'Имя поля источника данных, используемого для заполнения значений списка.',
  visibleText: 'Видимый:',
  visibleTooltipText: 'Показать или скрыть этот элемент управления на форме.',
  labelPlacementText: { left: 'Слева', right: 'Право', top: 'Верх', none: 'Нет' },
  hasItemsText: 'Установлено',
  noItemsText: 'Не установлено' }
));
},
'Sage/MainView/Contact/nls/ru/ContactSearchForDuplicates':function(){
define("Sage/MainView/Contact/nls/ru/ContactSearchForDuplicates", (
{ svAccount_Caption: 'Субъект:',
  svCompany_Caption: 'Компания:',
  svEmail_Caption: 'Эл.почта:',
  svName_Caption: 'Имя:',
  svTitle_Caption: 'Должность:',
  svType_Caption: 'Тип:',
  svSubType_Caption: 'Подтип:',
  svAccMgr_Caption: 'Менеджер:',
  svHomePhone_Caption: 'Домашний тел.:',
  svWorkPhone_Caption: 'Раб. телефон:',
  svMobilePhone_Caption: 'Мобильный тел.:',
  svStatus_Caption: 'Статус:',
  svWebAddress_Caption: 'Веб:',
  svEntityAccount_Caption: 'Субъект',
  svEntityLead_Caption: 'Наводка',
  svEntityContact_Contact: 'Контакт',
  svTollFree_Caption: 'Справочный тел.:',
  svIndustry_Caption: 'Отрасль:',
  svDivision_Caption: 'Подразделение:',
  svMainPhone_Caption: 'Основной тел.:',
  LeadSummaryView_Title: 'Сводная информация - Наводка',
  ContactSummaryView_Title: 'Сводная информация - Контакт',
  AccountSummaryView_Title: 'Сводная информация - Субъект',
  closeText: 'Закрыть',
  errorLoadingSummaryView: 'Ошибка при загрузке сводного представления: ${0}' }
));
},
'Sage/QuickForms/Design/Editors/nls/ru/DateTimePickerBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/DateTimePickerBasicPropertyEditor", (
{ titleText: 'Бейсик',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  captionText: 'Заголовок:',
  captionTooltipText: 'Подпись для показа на форме для данного элемента управления.',
  captionAlignmentText: 'Выравнивание заголовка:',
  captionAlignmentTooltipText: 'Обоснование текста метки.',
  displayDateText: 'Отображать дату:',
  displayDateTooltipText: 'Отображение даты.',
  displayTimeText: 'Отображать время:',
  displayTimeTooltipText: 'Отображение времени.',
  isReadOnlyText: 'Только чтение:',
  isReadOnlyTooltipText: 'Не разрешает изменение.',
  toolTipText: 'Подсказка:',
  toolTipTooltipText: 'Короткий текст справки о контроле.',
  alignmentText: { left: 'Слева', center: 'Центр', right: 'Право' } }
));
},
'Sage/TaskPane/nls/ru/AccountingTasksTasklet':function(){
define("Sage/TaskPane/nls/ru/AccountingTasksTasklet", (
{ updatePricingRecords: 'Вы можете выделить одну запись при выполнении этой операции.' }
));
},
'Sage/QuickForms/Design/Editors/nls/ru/DataGridBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/DataGridBasicPropertyEditor", (
{ titleText: 'Бейсик',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  dataText: 'Данные',
  captionText: 'Заголовок:',
  captionTooltipText: 'Подпись для показа на форме для данного элемента управления.',
  captionAlignmentText: 'Выравнивание заголовка:',
  captionAlignmentTooltipText: 'Обоснование текста метки.',
  pageSizeText: 'Размер страницы:',
  pageSizeTooltipText: 'Количество строк таблицы для отображения на одной странице.',
  resizableColumnsText: 'Изменение размера столбцов:',
  resizableColumnsTooltipText: 'Позволяет пользователю изменять размер столбцов.',
  alignmentText: { left: 'Слева', center: 'Центр', right: 'Право' } }
));
},
'Sage/QuickForms/Design/Editors/nls/ru/CurrencyBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/CurrencyBasicPropertyEditor", (
{ titleText: 'Бейсик',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  captionText: 'Заголовок:',
  captionTooltipText: 'Подпись для показа на форме для данного элемента управления.',
  captionAlignmentText: 'Выравнивание заголовка:',
  captionAlignmentTooltipText: 'Обоснование текста метки.',
  isReadOnlyText: 'Только чтение:',
  isReadOnlyTooltipText: 'Не разрешает изменение.',
  toolTipText: 'Подсказка:',
  toolTipTooltipText: 'Короткий текст справки о контроле.',
  alignmentText: { left: 'Слева', center: 'Центр', right: 'Право' } }
));
},
'Sage/UI/nls/ru/EditableGrid':function(){
define("Sage/UI/nls/ru/EditableGrid", {
    unsavedDataText: '* несохраненные данные',
    addText: 'Добавить',
    deleteText: 'Удалить',
    saveText: 'Сохранить',
    cancelText: 'Отмена',
    noSelectionsText: 'Нет выбранных записей.',
    confirmDeleteFmtTxt: 'Вы уверены, что хотите удалить эти ${0} элементы?',
    yesText: 'Да',
    noText: 'Нет',
    createItemsInvalidArrayText: 'Параметр элементов Sage.UI.EditableGrid.createItems() должен быть массивом.',
    recordCountFormatString: 'Записи ${0} - ${1} of ${2}',
    noDataMessage: 'Нет соответствующих записей.',
    dirtyDataMessage: 'Данные не сохранены.  Если вы продолжите, то потеряете изменения, которые сделали.',
    okText: 'ОК'
});
},
'Sage/MainView/IntegrationContract/nls/ru/SalesQuoteRTDV':function(){
﻿define(
    "Sage/MainView/IntegrationContract/nls/ru/SalesQuoteRTDV", ({
        dialogCaption: "Сведения о коммерческом предложении",
        loadingText: "Загрузка...",
        lblSalesQuoteCaption: "Коммерческое предложение:",
        lblStatusCaption: "Статус:",
        lblGrossTotalCaption: "Сумма предложения:",
        lblQuoteDateCaption: "Дата предложения:",
        lblTaxTotalCaption: "Налог, всего:",
        lblHoldStatusCaption: "Статус:",
        lblCurrencyCaption: "Валюта:",
        lblTypeCaption: "Тип:",
        lblCostTotalCaption: "Общая стоимость:",
        lblPONumberCaption: "Номер заказа:",
        lblProfitTotalCaption: "Общий доход:",
        lblQuotationCaption: "Котировка:",
        lblInvoiceStatusCaption: "Статус счета:",
        lblContactCaption: "Контакт:",
        lblDeliveryDateCaption: "Дата доставки:",
        lblDueDateCaption: "Плановая дата:",
        lblPriceListCaption: "Прайс-лист:",
        lblCarrierCaption: "Перевозчик:",
        lblNetTotalCaption: "Всего нетто:",
        lblAllocationStatusCaption: "Статус размещения:",
        lblDiscountTotalCaption: "Всего скидки:",
        lblDeliveryStatusCaption: "Статус доставки:",
        lblChargesTotalCaption: "Всего расходов:",
        detailsTabTitle: "Детали",
        salesPersonsTabTitle: "Продавец",
        addressTabTitle: "Адреса",
        salesQuoteLinesTabTitle: "Строки коммерческого предложения",
        paymentsTabTitle: "Платежи",
        deliveriesTabTitle: "Доставка",
        grdSalesQuote_Edit: "Изменить",
        grdSalesQuote_QuoteNumber: "Номер предложения",
        grdSalesQuote_QuoteDate: "Дата предложения",
        grdSalesQuote_Status: "Статус",
        grdSalesQuote_HoldStatus: "Статус",
        grdSalesQuote_Type: "Тип",
        grdSalesQuote_PO: "№ продукта заказа",
        grdSalesQuote_NetTotal: "Сумма нетто",
        grdSalesQuote_DiscountTotal: "Всего скидки",
        grdSalesQuote_ChargesTotal: "Всего расходов",
        grdSalesQuote_TaxTotal: "Налог, всего",
        grdSalesQuote_GrossTotal: "Всего брутто",
        grdSalesQuote_Currency: "Валюта",
        grdSalesPersons_Name: "Имя",
        grdSalesPersons_Type: "Тип",
        grdSalesPersons_Extension: "Расширение",
        grdSalesPersons_Relationship: "Связь",
        grdAddress_Name: "Имя",
        grdAddress_Address1: "Адрес 1",
        grdAddress_Address2: "Адрес 2",
        grdAddress_City: "Город",
        grdAddress_State: "Область",
        grdAddress_Zip: "Почт. индекс",
        grdItems_Line: "Номер линии",
        grdItems_Type: "Тип",
        grdItems_Commodity: "Товар",
        grdItems_CommodityVariant: "Вариант",
        grdItems_CommodityDimension: "Размеры",
        grdItems_UnitOfMeasure: "Единица",
        grdItems_Location: "Размещение",
        grdItems_PriceList: "Прайс-лист",
        grdItems_Quantity: "Кол-во",
        grdItems_InitialPrice: "Первоначальная цена",
        grdItems_ActualPrice: "Фактическая цена",
        grdItems_NetTotal: "Сумма нетто",
        grdItems_ChargesTotal: "Всего расходов",
        grdItems_DiscountTotal: "Всего скидки",
        grdItems_TaxTotal: "Налог, всего",
        grdItems_GrossTotal: "Всего брутто",
        grdPayments_Date: "Дата оплаты",
        grdPayments_Name: "Имя",
        grdPayments_Type: "Тип",
        grdPayments_Status: "Статус",
        grdPayments_NetTotal: "Сумма нетто",
        grdPayments_Discounts: "Скидки",
        grdPayments_Charges: "Расходы",
        grdPayments_Tax: "Налог",
        grdPayments_GrossTotal: "Всего брутто",
        grdPayments_Currency: "Валюта",
        grdPayments_TenderType: "Тип тендера",
        grdPayments_TenderReference: "Ссылка на тендер",
        grdPayments_ProcessDate: "Дата обработки",
        grdDeliveries_Number: "Число",
        grdDeliveries_Type: "Тип",
        grdDeliveries_Status: "Статус",
        grdDeliveries_RequestedDate: "Требуемая дата",
        grdDeliveries_ActualDate: "Фактическая дата",
        grdDeliveries_ActualTime: "Фактическая время",
        grdDeliveries_RequestedQuantity: "Требуемое количество",
        grdDeliveries_DeliveredQuantity: "Кол-во доставленного",
        grdDeliveries_Method: "Метод",
        grdDeliveries_Carrier: "Перевозчик",
        grdDeliveries_CarrierReference: "Ссылка на перевозчика",
        grdDeliveries_ExceptionReason: "Причина исключения",
        errorERPRequest: "При открытии подробного представления коммерческого предложения бухгалтерской системы возникла ошибка. ",
        errorERPRequestDetails: "${0}, ${1} Запрос: ${2}",
        btnCloseCaption: "Закрыть"
    })
);
},
'Sage/MainView/SecurityMgr/nls/ru/SecurityProfile':function(){
define("Sage/MainView/SecurityMgr/nls/ru/SecurityProfile", (
{ securityProfile_Caption: 'Профиль безопасности',
  btnCancel_Caption: 'Отмена',
  ok_Text: 'Ок',
  description_Text: 'Описание',
  profileType_Text: 'Тип профиля' }
));
},
'Sage/MainView/ReportMgr/nls/ru/ReportWizardController':function(){
﻿define("Sage/MainView/ReportMgr/nls/ru/ReportWizardController", {
    txtLoadingScheduleDetails: 'Загрузка сведений о расписании',
    txtError: 'Ошибка',
    txtCannotDetermineReportId: 'Не удалось определить ИД отчета.',
    txtCannotDetermineReportNameOrFamily: 'Не удалось определить имя или семейство отчета.',
    txtLoading: 'Загрузка',
    txtLoadingReport: 'Загрузка отчета',
    txtSorryAnErrorOccuredLoadingReport: 'При загрузке отчета произошла ошибка: ${0} ${1}.'
});
},
'Sage/QuickForms/Design/Editors/nls/ru/UserAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/UserAdvancedPropertyEditor", (
{ titleText: 'Расширенный',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  controlInfoText: 'Информация о контроле',
  dataText: 'Данные',
  controlIdText: 'ИД контрола:',
  controlIdTooltipText: 'Идентификатор для данного элемента управления.',
  controlLabelPlacementText: 'Расположение подписи:',
  controlLabelPlacementTooltipText: 'Позиция подписи по отношению к элементу управления.',
  controlTypeText: 'Тип контрола:',
  controlTypeTooltipText: 'Тип управления Saleslogix.',
  defaultDataBindingText: 'Привязка данных:',
  defaultDataBindingTooltipText: 'Поле из базы данных, используемое этим элементом управления.',
  enabledText: 'Включен:',
  enabledTooltipText: 'Позволяет пользователю взаимодействовать с этим элементом управления.',
  lookupBindingModeText: 'Режим привязки поиска:',
  lookupBindingModeTooltipText: 'Указывает, хотите ли вы связать с объектом сущности или строкой.',
  requiredText: 'Обязательный:',
  requiredTooltipText: 'Требуется значение при сохранении данных.',
  visibleText: 'Видимый:',
  visibleTooltipText: 'Показать или скрыть этот элемент управления на форме.',
  labelPlacementText: { left: 'Слева', right: 'Право', top: 'Верх', none: 'Нет' },
  bindingModeText: { Object: 'Объект', String: 'Строка' } }
));
},
'Sage/MainView/ReportMgr/nls/ru/ReportManagerUtility':function(){
define("Sage/MainView/ReportMgr/nls/ru/ReportManagerUtility", (
{}
));
},
'Sage/UI/nls/ru/SpeedSearch':function(){
define("Sage/UI/nls/ru/SpeedSearch", {
    standardText: 'стандартный',
    advancedText: 'Расширенный',
    speedSearchText: 'Быстрый Поиск'
});
},
'Sage/QuickForms/Design/Editors/nls/ru/CurrencyAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/CurrencyAdvancedPropertyEditor", (
{ titleText: 'Расширенный',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  controlInfoText: 'Информация о контроле',
  dataText: 'Данные',
  controlIdText: 'ИД контрола:',
  controlIdTooltipText: 'Идентификатор для данного элемента управления.',
  controlLabelPlacementText: 'Расположение подписи:',
  controlLabelPlacementTooltipText: 'Позиция подписи по отношению к элементу управления.',
  controlTypeText: 'Тип контрола:',
  controlTypeTooltipText: 'Тип управления Saleslogix.',
  decimalDigitsText: 'Кол-во десятичных цифр:',
  decimalDigitsTooltipText: 'Количество цифр после запятой для отображения и ввода данных.',
  defaultDataBindingText: 'Привязка данных:',
  defaultDataBindingTooltipText: 'Поле из базы данных, используемое этим элементом управления.',
  displayCurrencyCodeText: 'Отображать код валюты:',
  displayCurrencyCodeTooltipText: 'Показывать 3-х буквенный код валюты при включении поддержки нескольких валют.',
  displayModeText: 'Режим отображения:',
  displayModeTooltipText: 'Режим отображения контрола: текстовое поле, гиперссылка или обычный текст.',
  enabledText: 'Включен:',
  enabledTooltipText: 'Позволяет пользователю взаимодействовать с этим элементом управления.',
  exchangeRateTypeText: 'Тип валюты:',
  exchangeRateTypeTooltipText: 'Тип обменного курса для отображения в полях валюты.',
  maxLengthText: 'Макс. длина:',
  maxLengthTooltipText: 'Максимальное количество символов, которое пользователь может ввести.',
  requiredText: 'Обязательный:',
  requiredTooltipText: 'Требуется значение при сохранении данных.',
  visibleText: 'Видимый:',
  visibleTooltipText: 'Показать или скрыть этот элемент управления на форме.',
  displayTypeText: 
   { AsHyperlink: 'Как гиперссылку',
     AsControl: 'Как элемент управления',
     AsText: 'Как текст' },
  exchangeTypeText: 
   { BaseRate: 'Основная ставка',
     OpportunityRate: 'Оценка сделки (Преуменьшенная)',
     MyRate: 'Моя оценка',
     SalesOrderRate: 'Уровень заказов (Преуменьшенный)',
     EntityRate: 'Ставка сущности' },
  labelPlacementText: { left: 'Слева', right: 'Право', top: 'Верх', none: 'Нет' } }
));
},
'Sage/TaskPane/nls/ru/ReportManagerTasksTasklet':function(){
define("Sage/TaskPane/nls/ru/ReportManagerTasksTasklet", {
    taskRunReport_Caption: 'Запустить отчет',
    taskScheduleReport_Caption: 'Запланировать отчет',
    taskDeleteReport_Caption: 'Удалить отчет',
    taskDeleteSchedule_Caption: 'Удалить расписание',
    taskEditSchedule_Caption: 'Редактировать расписание',
    taskDeleteHistory_Caption: 'Удаление истории',
    txtRecordsSelected: 'записей выбрано',
    txtClear: 'Очистить'
});
},
'Sage/UI/nls/ru/SLXPreviewGrid':function(){
define("Sage/UI/nls/ru/SLXPreviewGrid", {
    applyText: 'Применить',
    resetText: 'Сброс',
    filterText: 'Фильтр'
});
},
'Sage/UI/Alarms/nls/ru/UnconfirmedPane':function(){
define("Sage/UI/Alarms/nls/ru/UnconfirmedPane", {
    showConfirmationsText: 'Показать подтверждения',
    showCalendarText: 'Показать календарь',
    acceptText: 'Принять',
    declineText: 'Отклонить'
});
},
'Sage/Utility/nls/ru/Utility':function(){
define("Sage/Utility/nls/ru/Utility", (
{ dangerousValueWarn: 'Обнаружена потенциально опасная форма. Избегайте использования недопустимых комбинаций символов. Например: "&lt;script&gt;&lt;/script&gt;" Избегайте использования недопустимых символов в названиях файлов: \\ / : * ? " &lt; &gt; | ' }
));
},
'Sage/QuickForms/Design/nls/ru/ControlDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/ControlDesigner", (
{ displayNameText: '' }
));
},
'Sage/UI/Controls/nls/ru/Address':function(){
define("Sage/UI/Controls/nls/ru/Address", {
    address1Text: 'Улица:',
    address2Text: 'Дом:',
    address3Text: 'Квартира/Офис:',
    cancelText: 'Отмена',
    cityText: 'Город:',
    countryText: 'Страна:',
    countyText: 'Округ:',
    descriptionText: 'Описание:',
    dialogTitle: 'Адрес',
    isMailingText: 'Отгрузка:',
    isPrimaryText: 'Основной:',
    okText: 'Ок',
    postalCodeText: 'Индекс:',
    salutationText: 'Адресат(ы):',
    stateText: 'Регион/Обл.:',
    imageEditToolTip: 'Изменить',
    imageMapQuestToolTip: 'Сопоставления поиска'
});
},
'Sage/MainView/JobMgr/nls/ru/JobManagerGroupContextService':function(){
define("Sage/MainView/JobMgr/nls/ru/JobManagerGroupContextService", (
{ executionsTabDisplayName: 'Выполнения',
  jobDefinitionsTabDisplayName: 'Определения',
  schedulesTabDisplayName: 'Расписания' }
));
},
'Sage/MainView/ActivityMgr/nls/ru/BaseListPanelConfig':function(){
define("Sage/MainView/ActivityMgr/nls/ru/BaseListPanelConfig", (
{ titleFmtString: '${0}' }
));
},
'Sage/QuickForms/Design/nls/ru/OwnerControlDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/OwnerControlDesigner", (
{ displayNameText: 'Доступ' }
));
},
'Sage/TaskPane/nls/ru/JobManagerTasksTasklet':function(){
define("Sage/TaskPane/nls/ru/JobManagerTasksTasklet", (
{ taskRunJob_Caption: 'Создать расписание',
  taskEditTrigger_Caption: 'Редактировать расписание',
  taskCancelJob_Caption: 'Отменить выполнение задания',
  taskDeleteScheduledJob_Caption: 'Удалить расписание' }
));
},
'Sage/MainView/ActivityMgr/nls/ru/ActivityEditorAttendeesTab':function(){
define("Sage/MainView/ActivityMgr/nls/ru/ActivityEditorAttendeesTab", (
{ header_Name: 'Имя',
  header_AccountName: 'Субъект/Компания',
  header_Type: 'Тип',
  header_Primary: 'Основной',
  header_RoleName: 'Роль',
  header_Phone: 'Телефон',
  header_Email: 'Эл.почта',
  header_TimeZone: 'Часовой пояс',
  header_Notes: 'Заметки',
  tooltip_speedSearch: 'Добавить участника',
  tooltip_AddContact: 'Добавить контакт',
  tooltip_AddLead: 'Добавить наводку',
  tooltip_Delete: "Удалить",
  header_Attendee: "Является участником"
}
));
},
'Sage/UI/nls/ru/UserType':function(){
define("Sage/UI/nls/ru/UserType", {
    administratorText: 'Администратор',
    templateText: 'Шаблон',
    remoteText: 'Дистанционный',
    webOnlyText: 'Только Веб',
    retiredText: 'Уволен',
    concurrentText: 'Конкурент',
    webViewerText: 'Веб Viewer',
    networkText: 'Сеть',
    addOnUserText: 'Дополнительный пользователь'
});
},
'Sage/MainView/ReportMgr/templates/nls/ru/HistoryDetailSummary':function(){
define("Sage/MainView/ReportMgr/templates/nls/ru/HistoryDetailSummary", {
    txtCreateDate_Caption: 'Дата создания:',
    txtReportType_Caption: 'Тип отчета:',
    txtOutputFormat_Caption: 'Формат вывода:',
    txtRunAsUser_Caption: 'Запуск от имени:',
    txtExecutionType_Caption: 'Тип выполнения:',
    txtScheduleName_Caption: 'Описание:',
    txtScheduledBy_Caption: 'Запланированное по:',
    txtFileSize_Caption: 'Размер файла:',
    txtElapsedTime_Caption: 'Затраченное время:'
});
},
'Sage/QuickForms/Design/nls/ru/FormDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/FormDesigner", (
{ displayNameText: 'Форма' }
));
},
'Sage/MainView/ActivityMgr/nls/ru/ActivityCalendar':function(){
define("Sage/MainView/ActivityMgr/nls/ru/ActivityCalendar", (
{ completedText: '(Завершено)' }
));
},
'Sage/Utility/nls/ru/Jobs':function(){
define("Sage/Utility/nls/ru/Jobs", (
{ errorMessage: 'Возникла ошибка при выполнении задания ${0}: ${1} ${2}.',
  jobCompletedSuccessfully: 'Задание успешно завершено.',
  unexpectedErrorMessage: 'Возникла неизвестная ошибка при выполнении задания ${0}.',
  repeatIndefinitely: 'Повторять бесконечно',
  cancelButtonCaption: 'Отмена',
  defaultProgressDialogTitle: 'Задание выполняется',
  closeButtonCaption: 'Закрыть' }
));
},
'Sage/UI/Controls/nls/ru/_DialogHelpIconMixin':function(){
define("Sage/UI/Controls/nls/ru/_DialogHelpIconMixin", { helpTooltip: 'Помощь' });
},
'Sage/QuickForms/Design/Editors/nls/ru/PickListAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/PickListAdvancedPropertyEditor", (
{ titleText: 'Расширенный',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  controlInfoText: 'Информация о контроле',
  dataText: 'Данные',
  allowMultiplesText: 'Разрешить множественный выбор:',
  allowMultiplesTooltipText: 'Позволяет пользователю выбрать более одного значения.',
  canEditTextText: 'Можно редактировать текст:',
  canEditTextTooltipText: 'Позволяет пользователю вводить значение.',
  controlIdText: 'ИД контрола:',
  controlIdTooltipText: 'Идентификатор для данного элемента управления.',
  controlLabelPlacementText: 'Расположение подписи:',
  controlLabelPlacementTooltipText: 'Позиция подписи по отношению к элементу управления.',
  controlTypeText: 'Тип контрола:',
  controlTypeTooltipText: 'Тип управления Saleslogix.',
  defaultDataBindingText: 'Привязка данных:',
  defaultDataBindingTooltipText: 'Поле из базы данных, используемое этим элементом управления.',
  displayModeText: 'Режим отображения:',
  displayModeTooltipText: 'Режим отображения контрола: текстовое поле, гиперссылка или обычный текст.',
  enabledText: 'Включен:',
  enabledTooltipText: 'Позволяет пользователю взаимодействовать с этим элементом управления.',
  maxLengthText: 'Макс. длина:',
  maxLengthTooltipText: 'Максимальное количество символов, которое пользователь может ввести.',
  mustExistInListText: 'Элеменет должен существовать:',
  mustExistInListTooltipText: 'Введенное значение должно быть в списке.',
  pickListNameText: 'Имя справочника:',
  pickListNameTooltipText: 'Имя списка значений, которые пользователь может выбрать при вводе данных.',
  requiredText: 'Обязательный:',
  requiredTooltipText: 'Требуется значение при сохранении данных.',
  storageModeText: 'Режим хранения:',
  storageModeTooltipText: 'Как значение сохраняется: текст, ИД или код.',
  visibleText: 'Видимый:',
  visibleTooltipText: 'Показать или скрыть этот элемент управления на форме.',
  labelPlacementText: { left: 'Слева', right: 'Право', top: 'Верх', none: 'Нет' },
  displayModeTypeText: 
   { AsControl: 'Как элемент управления',
     AsText: 'Как текст',
     AsHyperlink: 'Как гиперссылку' },
  storageModeTypeText: { Text: 'Текст', Id: 'ИД', Code: 'Код' },
  pickListRequestErrorText: 'Не удается получить справочник с сервера.' }
));
},
'Sage/UI/nls/ru/ActivityList':function(){
define("Sage/UI/nls/ru/ActivityList", {
    addMeetingText: 'Планировать встречу',
    addPhoneCallText: 'Планировать звонок',
    addToDoText: 'Планировать дело',
    helpText: 'Помощь',
    completeText: 'Завершить',
    typeText: 'Тип',
    startDateText: 'Дата/Время',
    dateRangeText: 'Временной диапазон',
    durationText: 'Длительность',
    leaderText: 'Руководитель',
    contactText: 'Контакт',
    opportunityText: 'Сделка',
    descriptionText: 'Тема',
    categoryText: 'Категория',
    firstNameText: 'Имя',
    lastNameText: 'Фамилия'
});
},
'Sage/UI/Alarms/nls/ru/JobNotificationPopup':function(){
﻿define("Sage/UI/Alarms/nls/ru/JobNotificationPopup", {
    title: 'Работа Уведомления',
    helpText: 'Помощь',
    colNameJobName: 'Тип',
    colNameProgress: 'Ход выполнения',
    colNameStatus: 'Статус',
    colExecutionResult: 'Результат'
});
},
'Sage/MainView/JobMgr/templates/nls/ru/ExecutionsListSummary':function(){
define("Sage/MainView/JobMgr/templates/nls/ru/ExecutionsListSummary", (
{}
));
},
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/ru/LeadLookupConfig':function(){
define("Sage/MainView/ActivityMgr/AttendeeLookup/nls/ru/LeadLookupConfig", (
{ contactText: 'Контакт',
  accountText: 'Субъект',
  lookupContactText: 'Поиск Контакта',
  nameText: 'Имя',
  cityText: 'Город',
  stateText: 'Область',
  workphoneText: 'Раб. телефон',
  emailText: 'Эл.почта',
  dialogButtonText: 'Добавить выбранные',
  cancelText: 'Закрыть',
  colFirstName: 'Имя',
  colLastName: 'Фамилия',
  colTitle: 'Название',
  colCompany: 'Компания',
  colWorkPhone: 'Раб. телефон',
  colEmail: 'Эл.почта',
  dialogTitleText: 'Запрос идей'
}
));
},
'Sage/MainView/ReportMgr/nls/ru/SchedulesListPanelConfig':function(){
define("Sage/MainView/ReportMgr/nls/ru/SchedulesListPanelConfig", (
{ colJobName: 'Имя задания',
  colNameDescription: 'Описание',
  colNameRunAsUser: 'Запланировано от имени',
  colNameLastExecutionDate: 'Последний запуск',
  colNameExecutionCount: 'Число выполнений',
  colNameStartTimeUtc: 'Время начала',
  colNameEndTimeUtc: 'Время завершения',
  colNamePriority: 'Приоритет',
  colNameStatus: 'Статус',
  colNameTemplate: 'Шаблон' }
));
},
'Sage/QuickForms/Design/Editors/nls/ru/GenericAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/GenericAdvancedPropertyEditor", (
{ titleText: 'Расширенный',
  appearanceText: 'Вид',
  controlInfoText: 'Информация о контроле',
  controlIdText: 'ИД контрола:',
  controlIdTooltipText: 'Идентификатор для данного элемента управления.',
  controlTypeText: 'Тип контрола:',
  controlTypeTooltipText: 'Тип управления Saleslogix.',
  visibleText: 'Видимый:',
  visibleTooltipText: 'Показать или скрыть этот элемент управления на форме.' }
));
},
'Sage/UI/nls/ru/CalendarUsersListPane':function(){
define("Sage/UI/nls/ru/CalendarUsersListPane", {
    header_color: 'Цвет',
    header_user: 'Пользователь',
    maxUsersErrorMessage: 'К сожалению, нельзя просматривать более чем ${0} календарей  (включая свой собственный) в одно время.  Зактройте один из календарей и повторите попытку.',
    editUsersLinkText: 'Править пользователей календаря',
    noUsersMessage: 'Пользователи не добавлены. Добавьте пользователей, щелкнув выше ссылку \'Править пользователей календаря\''
});
},
'Sage/QuickForms/Design/Editors/nls/ru/PickListBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/PickListBasicPropertyEditor", (
{ titleText: 'Бейсик',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  captionText: 'Заголовок:',
  captionTooltipText: 'Подпись для показа на форме для данного элемента управления.',
  captionAlignmentText: 'Выравнивание заголовка:',
  captionAlignmentTooltipText: 'Обоснование текста метки.',
  isReadOnlyText: 'Только чтение:',
  isReadOnlyTooltipText: 'Не разрешает изменение.',
  toolTipText: 'Подсказка:',
  toolTipTooltipText: 'Короткий текст справки о контроле.',
  alignmentText: { left: 'Слева', center: 'Центр', right: 'Право' } }
));
},
'Sage/QuickForms/Design/Editors/nls/ru/ColumnBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/ColumnBasicPropertyEditor", (
{ titleText: 'Бейсик',
  appearanceText: 'Вид',
  indexText: 'Индекс:',
  indexTooltipText: 'Номер строки или столбца, начиная с нуля.',
  widthText: 'Ширина:',
  widthTooltipText: 'Ширина колонки контролов.',
  sizeTypeText: 'Размер типа:',
  sizeTypeTooltipText: 'Метод задания размера: Абсолютное значение, Автоподбор или Процент.',
  rowSizeTypeText: 
   { Absolute: 'Абсолютный',
     Percent: 'Процент',
     AutoSize: 'Автоподбор размера' } }
));
},
'Sage/MainView/JobMgr/templates/nls/ru/ExecutionDetailSummary':function(){
define("Sage/MainView/JobMgr/templates/nls/ru/ExecutionDetailSummary", {
    txtJobName_Caption: 'Type:',
    txtUser_Caption: 'Пользователь:',
    txtTriggerId_Caption: 'Расписание:',
    txtScheduledStartTime_Caption: 'Время начала по расписанию:',
    txtStartTime_Caption: 'Фактическое время начала:',
    txtPhase_Caption: 'Этап:',
    txtPhaseDetail_Caption: 'Подробности об этапе:',
    txtProgress_Caption: 'Ход выполнения:',
    txtElapsedTime_Caption: 'Затраченное время:',
    txtRemainingTime_Caption: 'Оставшееся время:',
    txtStatus_Caption: 'Статус:',
    txtResult_Caption: 'Результат:'
});
},
'Sage/MainView/ReportMgr/nls/ru/ReportManagerGroupContextService':function(){
define("Sage/MainView/ReportMgr/nls/ru/ReportManagerGroupContextService", (
{ reportsTabDisplayName: 'Отчеты',
  schedulesTabDisplayName: 'Расписания',
  historyTabDisplayName: 'История' }
));
},
'Sage/MainView/IntegrationContract/nls/ru/MatchingOptionsConfig':function(){
define("Sage/MainView/IntegrationContract/nls/ru/MatchingOptionsConfig", (
{ matchingCaption: 'Изменить критерий сравнения',
  matchingHeader: 'Соответствующий параметр для',
  matchingDescription: 'Добавить или удалить операторов для определения критерия сравнения для всех пользователей, кто ссылается на записи из ситемы учета. Этот критерий определяет результаты, возвращаемые поиском сравнения записей между системами учета.',
  propertyText: 'Свойство',
  operatorText: 'Оператор',
  loadingText: 'Загрузка...',
  filter_AddCondition: 'Добавить условие',
  filter_RemoveCondition: 'Исключить условие',
  error_InvalidEndpoint: 'Укажите правильную конечную точку перед продолжением.',
  okText: 'ОК',
  cancelText: 'Отмена' }
));
},
'Sage/QuickForms/Design/Editors/nls/ru/FormBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/FormBasicPropertyEditor", (
{ titleText: 'Бейсик',
  generalText: 'Общий',
  activeControlText: 'Активный контрол:',
  activeControlTooltipText: 'Управления курсором пользователя начинается.',
  descriptionText: 'Описание:',
  descriptionTooltipText: 'Дополнительное описание назначения формы.',
  nameText: 'Имя:',
  nameTooltipText: 'Идентификатор формы, который используется в системе.' }
));
},
'Sage/UI/Alarms/nls/ru/AlarmButton':function(){
define("Sage/UI/Alarms/nls/ru/AlarmButton", {
    pastDueToolTipFmt: ' У вас ${0} просроченных мероприятий.'
});
},
'Sage/MainView/ActivityMgr/nls/ru/OccurrenceOrSeriesQueryDlg':function(){
define("Sage/MainView/ActivityMgr/nls/ru/OccurrenceOrSeriesQueryDlg", (
{ titleFmt: '${type} - ${description}',
  actDateText: 'Дата дела:',
  contactText: 'Контакт:',
  accountText: 'Субъект:',
  opportunityText: 'Сделка:',
  editAllText: 'Изменить все вхождения',
  editOneText: 'Изменить текущее вхождение',
  completeAllText: 'Завершить все вхождения',
  completeOneText: 'Завершить текущее вхождение',
  deleteAllText: 'Удалить все вхождения',
  deleteOneText: 'Удалить это вхождение',
  continueText: 'Продолжить',
  failedToLoadMsg: 'Не удалось загрузить дело' }
));
},
'Sage/Utility/File/nls/ru/Attachment':function(){
define("Sage/Utility/File/nls/ru/Attachment", {
    uploadingAttachments: 'Загрузка вложений',
    uploadCompleted: 'Заверш.',
    uploadingPleaseWait: 'Загрузка, подождите...',
    uploadFailed: 'Сбой загрузки.'
});
},
'Sage/QuickForms/Design/nls/ru/GenericControlDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/GenericControlDesigner", (
{ displayNameText: 'Неизвестен' }
));
},
'Sage/QuickForms/Design/nls/ru/PropertyEditorContainer':function(){
define("Sage/QuickForms/Design/nls/ru/PropertyEditorContainer", (
{ specificTitleFormatText: '${0} Свойства  ($ {{1})',
  genericTitleFormatText: '${0} Свойства' }
));
},
'Sage/Services/nls/ru/ReportingService':function(){
define("Sage/Services/nls/ru/ReportingService", (
{ txtUnsupportedReportType: 'Неподдерживаемый тип отчета: ${0}.',
  txtUnexpectedError: 'Возникла ошибка: ${0} ${1}.',
  invalidEntityError: 'ИД объекта не указан или не определен.',
  invalidReportPluginError: 'ИД подключаемого модуля отчета не указан или не определен.',
  invalidTableNameError: 'Имя таблицы не указано или не определено.',
  noDefaultReportError: 'Не найден отчет по умолчанию для текущего объекта.',
  reportCannotBeShownError: 'Отчет не может быть отображен.' }
));
},
'Sage/MailMerge/nls/ru/Helper':function(){
define("Sage/MailMerge/nls/ru/Helper", (
{ destkopErrorsError: 'The call to DesktopErrors() failed.',
  mailMergeInfoStoreError: 'The call to MailMergeInfoStore() failed.' }
));
},
'Sage/UI/Dashboard/nls/ru/Dashboard':function(){
define("Sage/UI/Dashboard/nls/ru/Dashboard", {
    newTabTitleText: 'Новое название вкладки',
    inputTitleText: 'Введите название',
    copiedPageText: 'Скопированная закладка',
    showText: 'Отобразить'
});
},
'Sage/MainView/ActivityMgr/nls/ru/ActivityListPanelConfig':function(){
define("Sage/MainView/ActivityMgr/nls/ru/ActivityListPanelConfig", (
{ colNameComplete: 'Завершить',
  colNameAttachment: 'Вложение',
  colNameRecurring: 'Повторение',
  colNameAlarm: 'Оповещение',
  colNameType: 'Тип дела',
  colNameStartDate: 'Дата начала',
  colNameDuration: 'Длительность',
  colNameContact: 'Имя',
  colNameLead: 'Наводка',
  colNameAccount: 'Субъект/Компания',
  colNameCompany: 'Компания',
  colNameRegarding: 'Тема',
  colNamePriority: 'Приоритет',
  colNameUserId: 'Руководитель',
  colNameTimeless: 'В течение дня',
  colNameTypeName: 'Тип',
  colNameContactName: 'Имя',
  SnoozeAlarm: 'Отложить оповещение',
  DismissAlarm: 'Отклонить оповещение',
  colNameUnConfirmStatus: 'Неподтвержденные',
  colNameAssociationCount: 'Всего Участники'
}
));
},
'Sage/UI/Controls/nls/ru/PickList':function(){
define("Sage/UI/Controls/nls/ru/PickList", {
    okText: 'Ок',
    missingPickListText: 'PickList не может быть найден'
});
},
'Sage/MainView/ActivityMgr/nls/ru/HistoryEditorAttendeesTab':function(){
define("Sage/MainView/ActivityMgr/nls/ru/HistoryEditorAttendeesTab", (
{ header_Name: 'Имя',
  header_AccountName: 'Субъект/Компания',
  header_Type: 'Тип',
  header_Primary: 'Основной',
  header_RoleName: 'Роль',
  header_Phone: 'Телефон',
  header_Email: 'Эл.почта',
  header_TimeZone: 'Часовой пояс',
  header_Notes: 'Заметки',
  header_Status: 'Статус' }
));
},
'Sage/Utility/nls/ru/Email':function(){
define("Sage/Utility/nls/ru/Email", (
{ RecipientInfoError: 'Непредвиденная ошибка, при попытке прочитать сведения о получателях: ${0}',
  MailToProtocolError: 'Произошла ошибка при попытке создать сообщение электронной почты, использование MAILTO: протокол (href.length = $ {0}). Число получателей электронной почты, возможно, придется уменьшить. Ошибка: $ {1}.',
  InvalidContextError: 'Запрос на отправку электронной почты не может быть обработан. Эта операция поддерживается только для контактов или наводок.',
  InvalidArgumentError: 'Запрос на отправку электронной почты не может быть обработан. Неверный аргумент.',
  FilteredOutMsg: 'Отфильтрованы: ​​Не беспокоить: ${0}; Неправильные: ${1}, Дубликаты: ${2}',
  AllInvalidEmailError: 'Коллекция не включает в себя ни одной сущности с действительным адресом и/или разрешением на отправку электронной почты.',
  EmailFieldQueried: 'Поле e-mail было: ${0}.',
  EntityInfoError: 'Попытка получить информацию о сущности была неудачной.',
  CapabilityModeError: 'Возможность писать по электронной почте выбранной группе доступна только списочном представлении.',
  CapabilityEntityError: 'Возможность писать по электронной почте выбранной группе доступна только для контактов или наводок.',
  NoRowsSelectedError: 'Нет выбранных строк.' }
));
},
'Sage/TaskPane/nls/ru/SecurityManagerTasksTasklet':function(){
define("Sage/TaskPane/nls/ru/SecurityManagerTasksTasklet", (
{ addSecurityProfileTitle: 'Добавить профиль',
  editSecurityProfileTitle: 'Изменить профиль' }
));
},
'Sage/UI/nls/ru/TimeZoneItem':function(){
define("Sage/UI/nls/ru/TimeZoneItem", {
    buttonOKText: 'Ок',
    buttonCancelText: 'Отмена',
    timeZoneText: 'Часовой пояс',
    timeZoneSettingsText: 'Параметры часового пояса',
    setTimeZoneText: 'Установить часовой пояс:'
});
},
'Sage/MainView/ReportMgr/templates/nls/ru/HistoryListSummary':function(){
define("Sage/MainView/ReportMgr/templates/nls/ru/HistoryListSummary", (
{}
));
},
'Sage/UI/Columns/nls/ru/SlxEdit':function(){
define("Sage/UI/Columns/nls/ru/SlxEdit", { editText: 'Изменить' });
},
'Sage/Reporting/nls/ru/Enumerations':function(){
define(
"Sage/Reporting/nls/ru/Enumerations", {
    txtGroup: 'Группа',
    txtDateRange: 'Временной диапазон',
    txtUser: 'Пользователь',
    txtQuery: 'Запрос',
    txtIsGreaterThan: 'Больше чем',
    txtIsLessThan: 'Меньше чем',
    txtIsInTheRange: 'В диапазоне',
    txtIsAfter: 'После',
    txtIsBefore: 'До',
    txtContains: 'Содержит',
    txtStartsWith: 'Начинается с',
    txtEndsWith: 'Заканчивается на',
    txtIs: 'это',
    txtIsNot: 'Не',
    txtOnDemand: 'По запросу',
    txtScheduled: 'Запланировано',
    txtCrystalReport: 'Отчет Crystal Report',
    txtExportToFileReportType: 'Выгрузить в файл',
    txtUnknownReportType: 'Неизвестен',
    txtNoFormat: 'Без формата',
    txtPdf: 'PDF',
    txtExcel: 'Excel',
    txtExcelDataOnly: 'Данные Excel',
    txtCsv: 'CSV',
    txtWord: 'Word',
    txtXml: 'XML'
});
},
'Sage/QuickForms/Design/Editors/nls/ru/CheckBoxAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/CheckBoxAdvancedPropertyEditor", (
{ titleText: 'Расширенный',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  controlInfoText: 'Информация о контроле',
  dataText: 'Данные',
  checkedText: 'Состояние флажка:',
  checkedTooltipText: "Установить по умолчанию состояние флажок установлен.",
  controlIdText: 'ИД контрола:',
  controlIdTooltipText: 'Идентификатор для данного элемента управления.',
  controlLabelPlacementText: 'Расположение подписи:',
  controlLabelPlacementTooltipText: 'Позиция подписи по отношению к элементу управления.',
  controlTypeText: 'Тип контрола:',
  controlTypeTooltipText: 'Тип управления Saleslogix.',
  defaultDataBindingText: 'Привязка данных:',
  defaultDataBindingTooltipText: 'Поле из базы данных, используемое этим элементом управления.',
  enabledText: 'Включен:',
  enabledTooltipText: 'Позволяет пользователю взаимодействовать с этим элементом управления.',
  visibleText: 'Видимый:',
  visibleTooltipText: 'Показать или скрыть этот элемент управления на форме.',
  labelPlacementText: { left: 'Слева', right: 'Право', top: 'Верх', none: 'Нет' } }
));
},
'Sage/MainView/ReportMgr/Crystal/nls/ru/CrystalReportConditionsDialog':function(){
define("Sage/MainView/ReportMgr/Crystal/nls/ru/CrystalReportConditionsDialog", {
    txtDialogTitle: 'Выбор записей',
    cmdBack_Caption: '< Назад',
    cmdNext_Caption: 'Следующий>',
    cmdCancel_Caption: 'Отмена',
    grdCrystalConditions_ConditionType_Caption: 'Тип',
    grdCrystalConditions_TableName_Caption: 'Таблица',
    grdCrystalConditions_FieldName_Caption: 'Поле',
    grdCrystalConditions_Operator_Caption: 'Оператор',
    grdCrystalConditions_Value_Caption: 'Значение условия',
    txtShowRecordsThatMatch: 'Показать совпадения: ',
    txtMatch: 'Совпадение:',
    txtOfTheFollowingConditions: 'по следующим условиям:',
    txtAny: 'Любое',
    txtAll: 'Все',
    txtAllRecords: '[Все записи]',
    txtSpecificConditions: '[Особые условия]',
    txtCurrentUser: '[Текущий пользователь]'
});
},
'Sage/Extensions/Activity/ListPanelOverrides/nls/ru/ActivityListPanelConfig':function(){
define("Sage/Extensions/Activity/ListPanelOverrides/nls/ru/ActivityListPanelConfig", (
{ colNameAssociationCount: 'Число участников' }
));
},
'Sage/UI/nls/ru/JobSchedulingWidget':function(){
define("Sage/UI/nls/ru/JobSchedulingWidget", {
    lblCreateSchedule: 'Создать расписание задания для запуска',
    lblEveryText: 'Каждый',
    lblOnText: 'в',
    lblOnTheText: 'в',
    lblAtText: 'в',
    lblMinutesPastHour: 'мин. после часа',
    lblFromTimeText: 'Выполнять с',
    lblToTimeText: 'по',
    lblMinutesFrequency: 'мин.',
    lblHourlyFrequency: 'ч.',
    lblDailyFrequency: 'дн.',
    lblWeekDayFrequency: 'будний день',
    lblWeeklyFrequency: 'нед.',
    lblMonthlyFrequency: 'мес.',
    lblYearlyFrequency: 'г.',
    lblSunday: 'Воскресенье',
    lblMonday: 'Понедельник',
    lblTuesday: 'Вторник',
    lblWednesday: 'Среда',
    lblThursday: 'Четверг',
    lblFriday: 'Пятница',
    lblSaturday: 'Суббота',
    lblFirstDay: '1',
    lblSecondDay: '2',
    lblThirdDay: '3',
    lblFourthDay: '4',
    lblCronExpressionText: 'Cron-выражение',
    txtInvalidScheduleTitle: 'Неверный Расписание',
    txtInvalidDatesMessage: 'Время окончания должно быть после времени начала. Пожалуйста, исправьте эту информацию, прежде чем продолжить.',
    txtInvalidScheduleTime: 'Начальная и конечная раз указанные предотвратит этот график запуск. Пожалуйста, исправьте эту информацию, прежде чем продолжить.',
    txtInvalidStartDate: 'Дата начала требуется. Пожалуйста, указать дату начала, прежде чем продолжить.',
    txtInvalidEndDate: 'Дата окончания не требуется. Введи Конечная дата, прежде чем продолжить.'
});
},
'Sage/UI/Controls/nls/ru/LogOffButton':function(){
define("Sage/UI/Controls/nls/ru/LogOffButton", { logOffText: 'Выход' });
},
'Sage/QuickForms/Design/Editors/nls/ru/TextBoxAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/TextBoxAdvancedPropertyEditor", (
{ titleText: 'Расширенный',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  controlInfoText: 'Информация о контроле',
  dataText: 'Данные',
  controlIdText: 'ИД контрола:',
  controlIdTooltipText: 'Идентификатор для данного элемента управления.',
  controlLabelPlacementText: 'Расположение подписи:',
  controlLabelPlacementTooltipText: 'Позиция подписи по отношению к элементу управления.',
  controlTypeText: 'Тип контрола:',
  controlTypeTooltipText: 'Тип управления Saleslogix.',
  defaultDataBindingText: 'Привязка данных:',
  defaultDataBindingTooltipText: 'Поле из базы данных, используемое этим элементом управления.',
  enabledText: 'Включен:',
  enabledTooltipText: 'Позволяет пользователю взаимодействовать с этим элементом управления.',
  maxLengthText: 'Макс. длина:',
  maxLengthTooltipText: 'Максимальное количество символов, которое пользователь может ввести.',
  requiredText: 'Обязательный:',
  requiredTooltipText: 'Требуется значение при сохранении данных.',
  visibleText: 'Видимый:',
  visibleTooltipText: 'Показать или скрыть этот элемент управления на форме.',
  labelPlacementText: { left: 'Слева', right: 'Право', top: 'Верх', none: 'Нет' } }
));
},
'Sage/MainView/ActivityMgr/nls/ru/EditEventEditor':function(){
define("Sage/MainView/ActivityMgr/nls/ru/EditEventEditor", (
{ titleScheduleText: 'Планировать событие',
  titleEditText: 'Изменить событие',
  lblDayTypeText: 'Тип события:',
  lblStartDateText: 'Дата начала:',
  lblEndDateText: 'Дата окончания:',
  lblUserText: 'Пользователь:',
  lookupUserText: 'Поиск пользователя',
  lblCategoryText: 'Категория:',
  lblLocationText: 'Размещение:',
  lblDescriptionText: 'Описание:',
  btnOkayText: 'Ок',
  btnCancelText: 'Отмена',
  btnHelpText: 'Помощь',
  eventTypeActiveText: 'Активен',
  eventTypeBusinessTripText: 'Командировка',
  eventTypeConferenceText: 'Конференция',
  eventTypeHolidayText: 'Праздник',
  eventTypeOffText: 'Нет на месте',
  eventTypeTradeShowText: 'Выставка',
  eventTypeUnavailableText: 'Недоступен',
  eventTypeVacationText: 'Вакансия',
  errorText: 'Мне очень жаль, это событие не может быть создано, потому что произошла ошибка.',
  invaildDatesText: 'Мне очень жаль, дата окончания не может быть ранее, чем дата начала.',
  nameText: 'Имя' }
));
},
'Sage/MailMerge/nls/ru/Loader':function(){
define("Sage/MailMerge/nls/ru/Loader", (
{ decodeFailed: 'The call to DecodeMailMergeJsonFromUrl() failed.' }
));
},
'Sage/UI/Controls/nls/ru/DateTimePicker':function(){
define("Sage/UI/Controls/nls/ru/DateTimePicker", {
    okText: 'ОК',
    cancelText: 'Отмена',
    convertDescription: 'Сравнение в другим часовым поясом.',
    convertText: 'Сравнить',
    calculatorText: 'Калькулятор часового пояса',
    timeZoneSourceText: 'Часовой пояс',
    timeZoneDestText: 'Сравнение часовых поясов',
    buttonToolTip: 'Календарь',
    timeStartText: 'Время',
    timeZoneCalculatorText: 'Калькулятор часового пояса'
});
},
'Sage/MainView/ReportMgr/nls/ru/ReportManagerActions':function(){
define(
"Sage/MainView/ReportMgr/nls/ru/ReportManagerActions", {
    txtSelectRecord: 'Выберите запись из списка.',
    txtInvalidSelectionCount: 'Вы должны быть по крайней мере одна запись, выбранную прежде чем продолжить.',
    confirm_Deletion: 'Вы уверены, что хотите удалить выбранный ${0}?',
    confirm_Report: 'отчет',
    confirm_Schedule: 'график',
    confirm_ReportHistory: 'История отчет запись',
    txtYes: 'Да',
    txtNo: 'Нет',
    deleteJobError: 'К сожалению произошла ошибка во время процесса удаления: ${0}',
    txtDeleteHistory: 'Удаление записи журнала',
    txtDeleteTitle: 'Удалить историю',
    txtErrorDeleteReport: 'Произошла ошибка удаления отчета: ${0}'
});
},
'Sage/UI/Alarms/nls/ru/AlarmPopup':function(){
define("Sage/UI/Alarms/nls/ru/AlarmPopup", {
    title: 'Оповещения',
    alarmsText: 'Оповещения',
    unconfirmedText: 'Неподтвержденные',
    deleteText: 'Удалить выбранное',
    helpText: 'Помощь',
    completeText: 'Завершить выбранные дела'
});
},
'Sage/MainView/Contact/nls/ru/ContactUserAssociationEditor':function(){
define("Sage/MainView/Contact/nls/ru/ContactUserAssociationEditor", (
{ btnCancel_Caption: 'Отмена',
  btnOK_Caption: 'Ок',
  dialogTitleText: 'Связать контакт с пользователем',
  associateContactText: 'Связать выбранный контакт со следующим пользователем',
  user_Caption: 'Пользователь',
  lookupUserText: 'Поиск пользователя',
  lookupNameColText: 'Имя',
  lookupTitleColText: 'Название',
  lookupDepartmentColText: 'Отдел',
  lookupRegionColText: 'Регион',
  lookupTypeColText: 'Тип',
  disAssociateTitle: 'Удалить связь с пользователем',
  associationExistsMessage: 'Выбранный пользователь уже связан с контактом. Выберите другого пользователя.' }
));
},
'Sage/QuickForms/Design/Editors/nls/ru/OwnerBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/OwnerBasicPropertyEditor", (
{ titleText: 'Бейсик',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  captionText: 'Заголовок:',
  captionTooltipText: 'Подпись для показа на форме для данного элемента управления.',
  captionAlignmentText: 'Выравнивание заголовка:',
  captionAlignmentTooltipText: 'Обоснование текста метки.',
  isReadOnlyText: 'Только чтение:',
  isReadOnlyTooltipText: 'Не разрешает изменение.',
  toolTipText: 'Подсказка:',
  toolTipTooltipText: 'Короткий текст справки о контроле.',
  alignmentText: { left: 'Слева', center: 'Центр', right: 'Право' } }
));
},
'Sage/MainView/JobMgr/nls/ru/BaseListPanelConfig':function(){
define("Sage/MainView/JobMgr/nls/ru/BaseListPanelConfig", (
{ titleFmtString: '${0}' }
));
},
'Sage/QuickForms/Design/nls/ru/TextBoxControlDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/TextBoxControlDesigner", (
{ displayNameText: 'Текстовый бокс' }
));
},
'Sage/QuickForms/Design/nls/ru/EmailControlDesigner':function(){
define("Sage/QuickForms/Design/nls/ru/EmailControlDesigner", (
{ displayNameText: 'Эл.почта' }
));
},
'Sage/UI/Controls/nls/ru/Lookup':function(){
define("Sage/UI/Controls/nls/ru/Lookup", {
    buttonToolTip: 'Найти',
    closeButtonToolTip: 'Исключить'
});
},
'Sage/Utility/File/nls/ru/DescriptionsForm':function(){
define("Sage/Utility/File/nls/ru/DescriptionsForm", {
    titleFmt: 'Добавить документ(ы) для ${0}',
    titleLibraryDoc: 'Добавить документ(ы) в библиотеку',
    fileNameText: 'Имя и размер файла: ',
    descText: 'Описание:',
    okText: 'Ок',
    cancelText: 'Отмена'
});
},
'Sage/QuickForms/Design/Editors/nls/ru/NumericBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/ru/NumericBasicPropertyEditor", (
{ titleText: 'Бейсик',
  appearanceText: 'Вид',
  behaviorText: 'Тип операции',
  captionText: 'Заголовок:',
  captionTooltipText: 'Подпись для показа на форме для данного элемента управления.',
  captionAlignmentText: 'Выравнивание заголовка:',
  captionAlignmentTooltipText: 'Обоснование текста метки.',
  isReadOnlyText: 'Только чтение:',
  isReadOnlyTooltipText: 'Не разрешает изменение.',
  toolTipText: 'Подсказка:',
  toolTipTooltipText: 'Короткий текст справки о контроле.',
  alignmentText: { left: 'Слева', center: 'Центр', right: 'Право' } }
));
},
'Sage/TaskPane/nls/ru/CommonTasksTasklet':function(){
define("Sage/TaskPane/nls/ru/CommonTasksTasklet", (
{ okButtonText: 'Ок',
  loadingText: 'Загрузка...',
  noPrimaryEmail: 'Нет доступного основного эл. адреса',
  selectFileFormat: 'Выберите формат файла:',
  exportToFile_OptionCSV: 'Стандартный CSV',
  exportToFile_OptionTab: 'Разделитель табуляция (рекомендуется для Microsoft Excel)',
  exportToFile_OptionSaveFormat: 'Запомнить мой выбор и не спрашивать.',
  exportToFile_OK: 'Ок',
  exportToFile_Cancel: 'Отмена',
  exportToFile_DialogTitle: 'Выгрузить в файл',
  exportToExcel_Caption: 'Экспорт в Excel',
  errorRequestingJobMgr: 'Ошибка при запросе диспетчера заданий: ${0}',
  errorExecutionAction: 'Произошла ошибка во время выполнения ${0}',
  exportProcessingJobMsg: 'Во время выполнения экспорта вы можете ожидать завершения операции или перейти к отчетам, чтобы открыть файл.' }
));
},
'Sage/Utility/nls/ru/Dashboard':function(){
define("Sage/Utility/nls/ru/Dashboard", (
{ pageText: 'Страница' }
));
}}});
define("Sage/nls/Sage_ru", [], 1);
