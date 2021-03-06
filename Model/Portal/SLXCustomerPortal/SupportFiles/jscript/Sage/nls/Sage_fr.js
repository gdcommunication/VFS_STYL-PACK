require({cache:{
'Sage/Utility/File/nls/fr/FallbackFilePicker':function(){
define("Sage/Utility/File/nls/fr/FallbackFilePicker", {
    addLibraryFileText: 'Ajouter un fichier de bibliothèque',
    attachFileText: 'Joindre un fichier',
    descriptionText: 'Description',
    uploadFileText: 'Pièce jointe',
    okText: 'OK',
    cancelText: 'Annuler',
    invalidContext: 'Le(s) fichier(s) ne peu(ven)t pas être téléchargé(s) à extérieur de la bibliothèque de ventes.',
    fileTooLargeError: 'importation du fichier a été annulée, car le fichier est trop volumineux.',
    pleaseSelectFile: 'Veuillez abord sélectionner un fichier.',
    slxErrorIdInfo: 'ID erreur Saleslogix : '
});
},
'Sage/UI/nls/fr/Boolean':function(){
define("Sage/UI/nls/fr/Boolean", {
    yesText: 'Oui',
    noText: 'Non'
});
},
'Sage/Services/nls/fr/ActivityService':function(){
define("Sage/Services/nls/fr/ActivityService", (
{ txtErrorActionMsg: 'Désolé, cette action a échoué car une erreur est survenue.',
  txtActivity: 'Activité',
  txtActivities: 'Activités',
  txtActionDeleteActivites: 'Supprimer des activités',
  txtActionDeleteActivitiesQuestion: 'Seules les activités que vous avez autorisation de supprimer seront supprimées.<P>Voulez-vous vraiment supprimer le/la {0} {1} sélectionné(e) ?',
  txtAlarm: 'Alarme',
  txtAlarms: 'Alarmes',
  txtActionSnoozeAlarm: 'Alarme de mise en veille',
  txtActionSnoozeQuestion: 'Voulez-vous vraiment mettre en veille le/la {0} {1} sélectionné(e) pour {2} ?',
  txtActionSnoozeAllQuestion: 'Voulez-vous vraiment mettre en veille tous les {0} pour {1} ?',
  txtActionDismissAlarms: 'Annuler les alarmes',
  txtActionDismissAlarmsQuestion: 'Voulez-vous vraiment annuler la {0} {1} sélectionnée ?',
  txtEvent: 'Evénement',
  txtEvents: 'Evénements',
  txtActionDeleteEvents: 'Supprimer les événements',
  txtActionDeleteEventsQuestion: 'Seuls les événements que vous avez autorisation de supprimer seront supprimés.<P>Voulez-vous vraiment supprimer le {0} {1} sélectionné ?',
  txtConfirmation: 'confirmations',
  txtConfirmations: 'Confirmations',
  txtActionAcceptConfirmations: 'Accepter les confirmations',
  txtActionAcceptConfirmQuestion: 'Voulez-vous vraiment accepter les {0} {1} sélectionnés ? Cette action ne peut être effectuée que sur les nouvelles confirmations. Toutes les autres seront ignorées.',
  txtDeclineConfirmations: 'Refuser les confirmations',
  txtActionDeclineConfrimQuestion: 'Voulez-vous vraiment refuser la {0} {1} sélectionnée ? Cette action peut uniquement être effectuée sur les nouvelles confirmations. Toutes les autres seront ignorées.',
  txtActionRemoveConfirmations: 'Supprimer les confirmations',
  txtActionRemoveConfirmationsQuestion: 'Voulez-vous vraiment supprimer les {1} sélectionnées ({0}) ? Cette action peut uniquement être effectuée sur les confirmations de type Organisateur, Refusé ou Supprimé. Toutes les autres seront ignorées.',
  txtLiteratureRequest: 'Demande de documentation',
  txtLiteratureRequests: 'Demandes de documentation',
  txtActionDeleteLiteratureRequests: 'Supprimer les demandes de documentation',
  txtActionDeleteLiteratureRequestsQuestion: 'Seules les demandes de documentation que vous avez autorisation de supprimer seront supprimées. <P> Voulez-vous vraiment supprimer la {0} {1} sélectionnée ?' }
));
},
'Sage/UI/Controls/nls/fr/CopyToClipboard':function(){
define("Sage/UI/Controls/nls/fr/CopyToClipboard", {
    closeText: 'Fermer',
    dialogTitle: 'Copier le lien vers le Presse-papiers',
    helpText: 'Sélectionnez le texte souhaité et appuyez sur Ctrl+C (Commande+C sur Mac) pour copier vers votre presse-papiers.',
    textTab: 'Texte',
    sourceTab: 'Source'
});
},
'Sage/Utility/nls/fr/Activity':function(){
define("Sage/Utility/nls/fr/Activity", (
{ ToDo: 'Tâche à faire',
  PhoneCall: 'Appel',
  Meeting: 'Rendez-vous',
  Personal: 'Activité personnelle',
  Literature: 'Documentation',
  Fax: 'Fax',
  Letter: 'Lettre',
  Note: 'Note',
  Email: 'Envoyer par e-mail',
  Document: 'Document',
  DatabaseChange: 'Modification de la base de données',
  Event: 'Evénement',
  ScheduledEvent: 'Evénement planifié',
  Contact: 'Contact',
  Lead: 'Lead',
  New: 'Nouveau',
  Change: 'Modifier',
  Deleted: 'Supprimé',
  Confirm: 'Confirmer',
  Decline: 'Refuser',
  Unknown: 'Inconnu',
  Leader: 'Responsable',
  Complete: 'Terminer',
  confirmTypeChanged: 'Modifié',
  confirmTypeConfirmed: 'Confirmé',
  confirmTypeDeleted: 'Supprimé' }
));
},
'Sage/QuickForms/Design/nls/fr/DesignPanel':function(){
define("Sage/QuickForms/Design/nls/fr/DesignPanel", (
{ cultureListText: 
   { iv: '[Invariable]',
     de_DE: 'de-DE',
     fr_FR: 'fr-FR',
     it_IT: 'it-IT',
     ru_RU: 'ru-RU' },
  helpText: 'Aide',
  saveText: 'Enregistrer',
  cultureText: 'Culture :',
  loadingText: 'Chargement ...',
  savingText: 'Enregistrement...',
  saveErrorText: 'Une erreur est produite lors de enregistrement du formulaire.',
  readErrorText: 'Impossible de charger le formulaire demandé.',
  cultureReloadConfirmText: 'Des modifications ont pas été enregistrées. Souhaitez-vous vraiment recharger le formulaire avec une culture différente ?' }
));
},
'Sage/UI/nls/fr/TimelessActivitiesPane':function(){
define("Sage/UI/nls/fr/TimelessActivitiesPane", {
    header_complete: 'Terminer',
    header_type: 'Type',
    header_contact: 'Nom',
    header_regarding: 'Objet',
    tooltip_type: 'Type',
    tooltip_contact: 'Contact',
    tooltip_account: 'Compte',
    tooltip_lead: 'Lead',
    tooltip_phone: 'Téléphone',
    tooltip_leader: 'Responsable',
    tooltip_regarding: 'Objet',
    tooltip_location: 'Emplacement',
    tooltip_notes: 'Notes',
    tooltip_company: 'Société'
});
},
'Sage/MainView/ActivityMgr/nls/fr/ActivityEditor':function(){
define("Sage/MainView/ActivityMgr/nls/fr/ActivityEditor", (
{ labelWidth: '120',
  tabNameGeneralText: 'Général',
  tabNameAvailabilityText: 'Disponibilité',
  tabNameAssociationsText: 'Associations',
  tabNameRecurringText: 'Périodicité',
  tabNameAttachmentsText: 'Pièces jointes',
  tabNameNotesText: 'Notes',
  scheduleText: 'Planification',
  startTimeText: 'Heure de début',
  timeLessText: 'Heure indéfinie',
  alarmText: 'Alarme',
  durationText: 'Durée',
  rolloverText: 'Reporter automatiquement au jour suivant',
  contactText: 'Contact',
  accountText: 'Compte',
  leadText: 'Lead',
  opportunityText: 'Opportunité',
  ticketText: 'Ticket',
  companyText: 'Société',
  regardingText: 'Objet',
  notesText: 'Notes',
  priorityText: 'Priorité',
  leaderText: 'Responsable',
  categoryText: 'Catégorie',
  locationText: 'Emplacement',
  dialogHeaderFormatText: '${actionText} ${activityType} - ${description}',
  scheduledByFormatText: 'Planifié par ${user} le ${date}',
  completeScheduledByFormatText: 'Planifié par ${user} le ${date} initialement pour ${startDate}',
  newConfirmationHeaderFormatText: 'Confirmer ${activityType} planifié par ${user}',
  otherConfimationHeaderFormatText: '${activityType} ${actionText} par ${user}',
  acceptedText: 'Accepté',
  declinedText: 'Refusé',
  scheduledText: 'Planifié',
  updatedText: 'Mis à jour',
  deletedText: 'Supprimé',
  cancelText: 'Annuler',
  okText: 'OK',
  completeText: 'Terminer',
  completeBtnText: 'Terminer...',
  completedText: 'Terminé',
  deleteText: 'Supprimer',
  lookupActText: 'Rechercher un compte',
  lookupContactText: 'Rechercher un contact',
  lookupOpportunityText: 'Rechercher une opportunité',
  lookupTicketText: 'Rechercher un ticket',
  lookupLeadText: 'Recherche un lead',
  lookupLeaderText: 'Rechercher le responsable',
  lookupResourcesText: 'Ajouter des membres et des ressources',
  addResourceText: 'Ajouter sélection',
  mainPhoneText: 'Tél. principal',
  typeText: 'Type',
  subTypeText: 'Sous-Type',
  nameText: 'Nom',
  cityText: 'Ville',
  stateText: 'Département',
  workphoneText: 'Téléphone professionnel',
  emailText: 'E-mail',
  acctMgrText: 'Resp. du compte',
  descriptionText: 'Description',
  stageText: 'Phase',
  statusText: 'Etat',
  ownerText: 'Propriétaire',
  ticketNumberText: 'Numéro de ticket',
  phoneText: 'Téléphone',
  urgencyText: 'Priorité',
  areaText: 'Zone',
  recurringText: 'Périodicité',
  resultText: 'Résultat',
  followupText: 'Suivi',
  noneText: 'Aucun',
  carryOverAttachmentsText: 'Reporter les pièces jointes',
  carryOverNotesText: 'Reporter les notes',
  asScheduledText: 'Telle que planifiée',
  nowText: 'Maintenant',
  responseText: 'Taux de retours',
  acceptText: 'Accepter',
  declineText: 'Refuser',
  deleteConfText: 'Confirmation de la suppression',
  closeText: 'Fermer',
  leadFullNameText: 'Nom',
  postalText: 'Code postal',
  failedLoadingDataMsg: 'Une erreur est survenue lors du chargement des données.',
  removeText: 'Retirer',
  noText: 'Non',
  yesText: 'Oui',
  areYouSureText: 'Vous êtes sur le point de supprimer définitivement cet enregistrement.',
  couldNotSaveErrorText: 'Impossible de sauvegarder activité car une erreur est produite.',
  couldNotDeleteErrorText: 'Impossible de supprimer activité car une erreur est produite.',
  couldNotCompleteErrorText: 'Impossible de terminer activité car une erreur est produite.',
  scheduleFollowUpErrorText: "Impossible de planifier le suivi, car ID historique a pas pu être déterminé.",
  tabNameParticipants: 'Participants' }
));
},
'Sage/TaskPane/User/nls/fr/ContactUserAssociationEditor':function(){
define("Sage/TaskPane/User/nls/fr/ContactUserAssociationEditor", (
{ btnCancel_Caption: 'Annuler',
  btnOK_Caption: 'OK',
  dialogTitleText: 'Associer utilisateur au contact',
  associateContactText: 'Associer utilisateur sélectionné au contact suivant',
  user_Caption: 'Contact',
  lookupContactText: 'Rechercher un contact',
  lookupFirstNameColText: 'Prénom',
  lookupLastNameColText: 'Nom',
  lookupTitleColText: 'Titre',
  lookupAccountColText: 'Compte',
  lookupWorkPhoneColText: 'Téléphone professionnel',
  lookupEmailText: 'E-mail',
  disAssociateTitle: 'Dissocier un contact',
  associationExistsMessage: 'Le contact que vous avez sélectionné est déjà associé à un utilisateur. Choisissez un autre contact.' }
));
},
'Sage/MainView/nls/fr/ActivityManager':function(){
define("Sage/MainView/nls/fr/ActivityManager", (
{ titleFmtString: '${0}',
  tabDisplayNameActivity: 'Activités',
  tabDisplayNameLit: 'Documentation',
  tabDisplayNameEvent: 'Evénements',
  tabDisplayNameConfirm: 'Confirmations',
  activityColNameComplete: 'Terminer',
  activityColNameAttachment: 'Pièce jointe',
  activityColNameRecurring: 'Périodicité',
  activityColNameAlarm: 'Alarme',
  activityColNameType: 'Type d\rquote activité',
  activityColNameStartDate: 'Date de début',
  activityColNameDuration: 'Durée',
  activityColNameContact: 'Contact',
  activityColNameLead: 'Lead',
  activityColNameAccount: 'Compte',
  activityColNameRegarding: 'Objet',
  activityColNamePriority: 'Priorité',
  activityColNameUserId: 'Responsable',
  activityTypePhone: 'Téléphone',
  activityTypeCall: 'Appel',
  activityTypeMeeting: 'Rendez-vous',
  activityTypePersonal: 'Personnel' }
));
},
'Sage/Services/nls/fr/JobService':function(){
define("Sage/Services/nls/fr/JobService", (
{ txtInvalidParameter: 'Paramètre non valide : ${0}.',
  txtTriggerJobError: 'Une erreur est survenue lors du déclenchement de action ${0} : ${1} ${2}.',
  txtScheduleJobError: 'Une erreur est survenue lors de la planification de action ${0} : ${1} ${2}.',
  txtUnexpectedError: 'Une erreur est survenue : ${0} ${1}.' }
));
},
'Sage/QuickForms/Design/nls/fr/NumericControlDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/NumericControlDesigner", (
{ displayNameText: 'Numérique' }
));
},
'Sage/QuickForms/Design/Editors/nls/fr/_PropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/_PropertyEditor", (
{ titleText: 'Propriétés' }
));
},
'Sage/Services/nls/fr/ActivityActionProcessor':function(){
define("Sage/Services/nls/fr/ActivityActionProcessor", (
{ btnOkayText: 'OK',
  btnCancelText: 'Annuler',
  btnCloseText: 'Fermer',
  btnHelpText: 'Aide',
  processingText: 'Traitement de la demande en cours, veuillez patienter...',
  failureText: 'Désolé, cette action a échoué car une erreur est survenue.',
  titleText: 'Processus' }
));
},
'Sage/QuickForms/Design/Editors/nls/fr/TextBoxBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/TextBoxBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  captionText: 'Légende :',
  captionTooltipText: 'étiquette à afficher sur le formulaire pour ce contrôle.',
  captionAlignmentText: 'Alignement de la légende :',
  captionAlignmentTooltipText: 'Justification du texte de étiquette.',
  linesText: 'Lignes :',
  linesTooltipText: 'Nombre de lignes de texte affichées.',
  isReadOnlyText: 'Lecture seule :',
  isReadOnlyTooltipText: 'Ne permet pas les modifications.',
  toolTipText: 'Info-bulle :',
  toolTipTooltipText: 'Court texte aide concernant le contrôle.',
  alignmentText: { left: 'Gauche', center: 'Centre', right: 'Droite' } }
));
},
'Sage/MainView/ActivityMgr/nls/fr/QuickCompleteEditor':function(){
define("Sage/MainView/ActivityMgr/nls/fr/QuickCompleteEditor", (
{ lblResultText: 'Résultat :',
  lblNoteText: 'Note  (ajouter à tous les articles):',
  btnCompleteIndividuallyText: 'Individuellement',
  btnAsScheduledText: 'Telle que planifiée',
  btnCompleteNowText: 'Maintenant',
  btnCancelText: 'Annuler',
  btnCloseText: 'Fermer',
  btnHelpText: 'Aide',
  resultCompletedText: 'Terminer',
  titleText: 'Saisie rapide',
  actionMessage: 'Seules les activités que vous êtes autorisé à exécuter seront terminées.',
  completeMessage: 'Terminer les {0} activités sélectionnées :',
  processingMessage: 'Traitement des {0} activités sélectionnées en cours, veuillez patienter…'
}
));
},
'Sage/MainView/ActivityMgr/templates/nls/fr/UserActivityDetailSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/fr/UserActivityDetailSummary", (
{ txtPhone_Caption: 'N° de téléphone :',
  lnkOpportunityName_Caption: 'Opportunité :',
  txtStartTime_Caption: 'Heure de début :',
  lnkContactName_Caption: 'Contact :',
  lnkLeadName_Caption: 'Lead :',
  lnkTicketNumber_Caption: 'Ticket :',
  txtLocation_Caption: 'Emplacement :',
  txtLeader_Caption: 'Responsable :',
  txtDuration_Caption: 'Durée :',
  lnkAccountName_Caption: 'Compte :',
  lnkCompanyName_Caption: 'Société :',
  txtNotes_Caption: 'Notes :',
  btnComplete_Caption: 'Terminer',
  txtAttendeeCount_Caption: 'Nombre de participants :' }
));
},
'Sage/MainView/ActivityMgr/templates/nls/fr/ConfirmationDetailSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/fr/ConfirmationDetailSummary", (
{ txtPhone_Caption: 'N° de téléphone :',
  lnkOpportunity_Caption: 'Opportunité :',
  txtStartTime_Caption: 'Heure de début :',
  lnkContactName_Caption: 'Contact :',
  lnkLeadName_Caption: 'Lead :',
  lnkTicket_Caption: 'Ticket :',
  txtLocation_Caption: 'Emplacement :',
  txtLeader_Caption: 'Responsable :',
  txtDuration_Caption: 'Durée :',
  lnkAccountName_Caption: 'Compte :',
  lnkCompanyName_Caption: 'Société :',
  txtNotes_Caption: 'Notes :',
  btnComplete_Caption: 'Terminer',
  txtFromUser_Caption: 'De :',
  btnDelete_Caption: 'Supprimer',
  btnDecline_Caption: 'Refuser',
  btnAccept_Caption: 'Accepter' }
));
},
'Sage/Utility/File/nls/fr/DefaultDropHandler':function(){
define("Sage/Utility/File/nls/fr/DefaultDropHandler", {
    emailDroppedText: 'E-mail déplacé',
    attachmentTitleText: 'Enregistrer les pièces jointes',
    attachmentQuestionText: 'Voulez-vous conserver une copie de ces pièces jointes dans SalesLogix ? <br>Les pièces jointes seront stockées sous onglet Pièces jointes pour les entités concernées.'
});
},
'Sage/UI/nls/fr/TransferBoxWidget':function(){
﻿define("Sage/UI/nls/fr/TransferBoxWidget", {
    searchFilterText: 'Contient :',
    loadingText: 'Chargement des options…',
    noResultsText: 'Aucun résultat',
    btnAddTooltip: 'Ajouter une ou plusieurs sélections',
    btnRemoveTooltip: 'Supprimer une ou plusieurs sélections',
    btnRemoveAllTooltip: 'Tout supprimer',
    availableValuesText: 'Valeurs disponibles :',
    selectedValuesText: 'Valeurs sélectionnées :',
    btnAddAllTooltip: 'Tout ajouter'
});
},
'Sage/Utility/File/nls/fr/AttachmentPropertiesEditForm':function(){
define("Sage/Utility/File/nls/fr/AttachmentPropertiesEditForm", {
    fileText: 'Fichier',
    descriptionText: 'Description',
    sizeText: 'Taille',
    attachDateText: 'Pièce jointe le',
    attachedByText: 'Joint par',
    uploadFileText: 'Sélectionner un autre fichier...',
    editText: 'Modifier la pièce jointe',
    okText: 'OK',
    cancelText: 'Annuler',
    browseText: 'Parcourir',
    urlText: 'Url',
    requestFailedMsg: 'opération demandée a pas pu être exécutée, veuillez réessayer ultérieurement.'
});
},
'Sage/UI/Alarms/nls/fr/AlarmPane':function(){
define("Sage/UI/Alarms/nls/fr/AlarmPane", {
    dismissAllText: 'Tout annuler',
    dismissText: 'Annuler',
    fiveMinText: '5 minutes',
    tenMinText: '10 minutes',
    fifteenMinText: '15 minutes',
    thirtyMinText: '30 minutes',
    oneHourText: '1 heure',
    twoHourText: '2 heures',
    fourHourText: '4 heures',
    eightHourText: '8 heures',
    oneDayText: '1 jour',
    twoDayText: '2 jours',
    threeDayText: '3 jours',
    oneWeekText: '1 semaine',
    twoWeekText: '2 semaines',
    snoozeText: 'Mise en veille',
    snoozeByText: 'Mettre en veille par :',
    snoozeAllText: 'Mettre tout en veille',
    showCalendarText: 'Afficher l’agenda'
});
},
'Sage/TaskPane/nls/fr/LiteratureManagementTasks':function(){
define("Sage/TaskPane/nls/fr/LiteratureManagementTasks", (
{ errFulFillmentCancelled: 'La réalisation de la demande de documentation a été annulée pour IdDemDoc {0}.',
  errFulFillmentFailed: 'La demande de documentation n\'a pas pu être complétée pour IdDemDoc {0}.',
  errMailMergeService: 'L\'étape de processus de vente n\'a pas pu être achevée car le service de publipostage n\'a pas pu être chargé. Cela peut se produire si l\'intégration de bureau Saleslogix n\'est pas installée ou est installée de manière incorrecte.',
  errFulFillmentRequest: 'Les demandes de documentation n\'ont pas pu être complétées.',
  errFulFillmentRequestEx: 'Les demandes de documentation suivantes n\'ont pas pu être complétées :',
  fulFillmentSuccess: 'La demande de documentation a été réalisée avec succès.' }
));
},
'Sage/UI/Dashboard/nls/fr/DashboardWidget':function(){
define("Sage/UI/Dashboard/nls/fr/DashboardWidget", {
    noQueryDataText: 'Le serveur a aucune donnée relative à la requête',
    initializingText: 'Initialisation'
});
},
'Sage/QuickForms/Design/Editors/nls/fr/NumericAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/NumericAdvancedPropertyEditor", (
{ titleText: 'Avancé',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  controlInfoText: 'Info contrôle',
  dataText: 'Données',
  controlIdText: 'ID de contrôle :',
  controlIdTooltipText: 'Identifiant pour ce contrôle.',
  controlLabelPlacementText: 'Placement des étiquettes :',
  controlLabelPlacementTooltipText: 'Position des étiquettes par rapport au contrôle.',
  controlTypeText: 'Type de contrôle :',
  controlTypeTooltipText: 'Type de contrôle Saleslogix.',
  decimalDigitsText: 'Décimales :',
  decimalDigitsTooltipText: 'Le nombre de chiffres après la virgule à afficher et à autoriser pour la saisie des données.',
  defaultDataBindingText: 'Associations de données :',
  defaultDataBindingTooltipText: 'Champ(s) de données dans la base de données utilisée par ce contrôle.',
  enabledText: 'Activé :',
  enabledTooltipText: 'Permet à utilisateur interagir avec ce contrôle.',
  formatTypeText: 'Type de format :',
  formatTypeTooltipText: 'Type de format à utiliser lors de la conversion un nombre en chaîne.',
  maxLengthText: 'Longueur maxi :',
  maxLengthTooltipText: 'Nombre maximal de caractères que utilisateur peut saisir.',
  requiredText: 'Obligatoire :',
  requiredTooltipText: 'Requiert une valeur lors de enregistrement des données.',
  strictText: 'Strict :',
  strictTooltipText: 'Affichage un nombre avec des zéros de fin si nécessaire.',
  visibleText: 'Visible :',
  visibleTooltipText: 'Afficher ou masquer ce contrôle sur le formulaire.',
  numberFormatText: 
   { Number: 'Nombre',
     Percent: 'Pourcentage',
     Decimal: 'Décimal',
     Scientific: 'Scientifique' },
  labelPlacementText: { left: 'Gauche', right: 'Droite', top: 'Haut', none: 'Aucun' } }
));
},
'Sage/MainView/IntegrationContract/nls/fr/CustomerPaymentsRTDV':function(){
define("Sage/MainView/IntegrationContract/nls/fr/CustomerPaymentsRTDV", (
{ dialogCaption: 'Détails du paiement',
  loadingText: 'Chargement ...',
  lblReferenceCaption: 'Numéro de reçu :',
  lblDateCaption: 'Date du paiement :',
  lblProcessDateCaption: 'Date de traitement :',
  lblNameCaption: 'Nom :',
  lblTypeCaption: 'Type :',
  lblStatusCaption: 'Etat :',
  lblCurrencyCaption: 'Devise :',
  lblTenderTypeCaption: 'Type de appel offre :',
  lblTenderReferenceCaption: 'Référence de appel offre :',
  lblNetTotalCaption: 'Total net :',
  lblDiscountsCaption: 'Remises :',
  lblChargesCaption: 'Frais :',
  lblTaxesCaption: 'Taxes :',
  lblGrossTotalCaption: 'Montant du paiement :',
  lblSourceCaption: 'Source :',
  lblTaxCodeCaption: 'Code de la taxe :',
  grdPayments_Reference: 'Numéro de reçu',
  grdPayments_Date: 'Date du paiement',
  grdPayments_Type: 'Type',
  grdPayments_Status: 'Etat',
  grdPayments_GrossTotal: 'Montant du paiement',
  grdPayments_Currency: 'Devise',
  btnCloseCaption: 'Fermer' }
));
},
'Sage/UI/Filters/nls/fr/FilterPanel':function(){
define("Sage/UI/Filters/nls/fr/FilterPanel", {
    editText: 'Modifier les filtres',
    noneText: 'Aucun filtre sélectionné',
    clearText: 'Effacer tout'
});
},
'Sage/TaskPane/nls/fr/_BaseTaskPaneTasklet':function(){
define("Sage/TaskPane/nls/fr/_BaseTaskPaneTasklet", (
{ selectRecordsTitle: 'Sélection non valide',
  selectRecords: 'Veuillez sélectionner un enregistrement avant de continuer.',
  selectSingleRecord: 'Veuillez sélectionner un enregistrement avant de continuer.',
  noRecordsSelectedProcessAll: 'Aucun enregistrement sélectionné. Le groupe entier, ${0}  enregistrements, sera supprimé. Continuer ?',
  invalidSelectionTitle: 'Sélection non valide',
  errorSelectionInfo: 'Une erreur est produite lors de la récupération informations concernant les enregistrements sélectionnés.',
  errorNoData: 'Aucune donnée est disponible',
  yesButtonText: 'Oui',
  noButtonText: 'Non',
  salesLogixPageTitle: 'SalesLogix',
  okButtonText: 'OK',
  cancelButtonText: 'Annuler' }
));
},
'Sage/MainView/ReportMgr/nls/fr/ReportManagerFormatter':function(){
define("Sage/MainView/ReportMgr/nls/fr/ReportManagerFormatter", (
{ txtTrue: 'Vrai', txtFalse: 'Faux' }
));
},
'Sage/UI/nls/fr/OwnerType':function(){
define("Sage/UI/nls/fr/OwnerType", {
    teamText: 'Equipe',
    departmentText: 'Service',
    systemText: 'Système',
    userText: 'Utilisateur'
});
},
'Sage/MainView/JobMgr/templates/nls/fr/JobDefinitionsListSummary':function(){
define("Sage/MainView/JobMgr/templates/nls/fr/JobDefinitionsListSummary", (
{}
));
},
'Sage/TaskPane/nls/fr/LeadTasksTasklet':function(){
define("Sage/TaskPane/nls/fr/LeadTasksTasklet", (
{ updateLeadsTitle: 'Mettre à jour le lead',
  deleteLeadsTitle: 'Supprimer les leads',
  deleteJobError: 'Désolé, une erreur est produite au cours de la tâche de suppression de lead : ${0}',
  confirmDeleteLeads: 'Voulez-vous vraiment supprimer les enregistrements sélectionnés ?' }
));
},
'Sage/MainView/ReportMgr/templates/nls/fr/ReportDetailSummary':function(){
define("Sage/MainView/ReportMgr/templates/nls/fr/ReportDetailSummary", {
    txtReportName_Caption: 'Nom:',
    txtReportType_Caption: 'Type:',
    txtTable_Caption: 'Tableau:',
    txtCreateUser_Caption: 'Utilisateur de création:',
    txtCreateDate_Caption: 'Date de création:',
    txtModifyUser_Caption: 'Modifier Utilisateur:',
    txtModifyDate_Caption: 'Date de modification:',
    txtUserField_Caption: 'Champ utilisateur:',
    txtDateField_Caption: 'Champ date:',
    txtUseGroupFilter_Caption: 'Utiliser le filtre de groupe:',
    txtUseUserFilter_Caption: 'Utiliser le filtre utilisateur:',
    txtUseDateFilter_Caption: 'Utiliser le filtre de date:',
    txtFileName_Caption: 'Nom du fichier:'
});
},
'Sage/MainView/ReportMgr/Crystal/nls/fr/_ParameterEditorBase':function(){
﻿define("Sage/MainView/ReportMgr/Crystal/nls/fr/_ParameterEditorBase", {
    txtPleaseSpecifyValue: 'Veuillez indiquer une valeur.',
    lblAvailableValues_Caption: 'Valeurs disponibles :',
    lblSelectedValues_Caption: 'Valeurs sélectionnées :',
    lblEnterValue_Caption: 'Entrer une valeur :',
    btnOK_Caption: 'OK',
    txtTheValueMustBeBetween: 'La valeur doit contenir entre {0} et {1} caractères.',
    txtTheMinimumLengthForThisField: 'La longueur minimale pour ce champ est de {0}.',
    txtTheMaximumLengthForThisField: 'La longueur maximale pour ce champ est de {0}.',
    txtPleaseSpecifyNumberBetween: 'Veuillez indiquer une valeur numérique comprise entre {0} et {1}.',
    txtPleaseSpecifyNumberLesser: 'Veuillez indiquer une valeur numérique inférieure ou égale à {0}.',
    txtPleaseSpecifyNumberGreater: 'Veuillez indiquer une valeur numérique supérieure ou égale à {0}.',
    txtNoLowerValue: 'Aucune valeur inférieure',
    txtNoUpperValue: 'Aucune valeur supérieure',
    txtIncludeThisValue: 'Inclure cette valeur',
    txtFrom: 'De :',
    txtTo: 'A :',
    txtPleaseSpecifyFromValue: 'Spécifiez une valeur pour la plage de début',
    txtPleaseSpecifyToValue: 'Spécifiez une valeur pour la plage de fin',
    txtPleaseSpecifyDateBetween: 'Veuillez indiquer une valeur de date comprise entre {0} et {1}.',
    txtPleaseSpecifyDateLesser: 'Veuillez indiquer une valeur de date inférieure ou égale à {0}.',
    txtPleaseSpecifyDateGreater: 'Veuillez indiquer une valeur de date supérieure ou égale à {0}.',
    txtFromMustBeLessThanOrEqualToTo: 'La valeur de plage de début doit être inférieure ou égale à la valeur de plage de fin.',
    txtStartOfRange: 'Début de la plage :',
    txtEndOfRange: 'Fin de la plage :',
    txtAddRange: 'Ajouter un intervalle',
    lblSelectValue_Caption: 'Sélectionner une valeur :',
    lblOrValue_Caption: 'Ou'
});
},
'Sage/MailMerge/nls/fr/Service':function(){
define("Sage/MailMerge/nls/fr/Service", (
{ selectContactCaption: 'Sélectionner un contact',
  selectOppContactCaption: "Sélectionner un contact opportunité",
  selectLeadCaption: 'Supprimer les Leads sélectionnés',
  errorAttachmentUpdate: "Impossible de mettre à jour enregistrement Pièce jointe.",
  errorHistoryUpdate: "Impossible de mettre à jour historique.",
  errorXmlHttp: "Une erreur est produite lors du traitement de la demande de ${0}. ${1} (${2})." }
));
},
'Sage/MainView/ActivityMgr/templates/nls/fr/ConfirmationListSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/fr/ConfirmationListSummary", (
{ txtPhone_Caption: 'N° de téléphone :',
  lnkOpportunity_Caption: 'Opportunité :',
  txtStartTime_Caption: 'Heure de début :',
  lnkContactName_Caption: 'Contact :',
  lnkLeadName_Caption: 'Lead :',
  lnkTicket_Caption: 'Ticket :',
  txtLocation_Caption: 'Emplacement :',
  txtLeader_Caption: 'Responsable :',
  txtDuration_Caption: 'Durée :',
  lnkAccountName_Caption: 'Compte :',
  lnkCompanyName_Caption: 'Société :',
  txtNotes_Caption: 'Notes :',
  btnComplete_Caption: 'Terminer',
  txtFromUser_Caption: 'De :',
  btnDelete_Caption: 'Supprimer',
  btnDecline_Caption: 'Refuser',
  btnAccept_Caption: 'Accepter' }
));
},
'Sage/MainView/ActivityMgr/nls/fr/SnoozeOptions':function(){
define("Sage/MainView/ActivityMgr/nls/fr/SnoozeOptions", (
{ fiveMinText: '5 minutes',
  tenMinText: '10 minutes',
  fifteenMinText: '15 minutes',
  thirtyMinText: '30 minutes',
  oneHourText: '1 heure',
  twoHourText: '2 heures',
  fourHourText: '4 heures',
  eightHourText: '8 heures',
  oneDayText: '1 jour',
  twoDayText: '2 jours',
  threeDayText: '3 jours',
  oneWeekText: '1 semaine',
  twoWeekText: '2 semaines',
  snoozeText: 'Mise en veille',
  snoozeByText: 'Mettre en veille par :',
  snoozeAllText: 'Mettre tout en veille',
  snoozeTitle: 'Alarmes de mise en veille' }
));
},
'Sage/QuickForms/Design/Editors/nls/fr/OwnerAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/OwnerAdvancedPropertyEditor", (
{ titleText: 'Avancé',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  controlInfoText: 'Info contrôle',
  dataText: 'Données',
  controlIdText: 'ID de contrôle :',
  controlIdTooltipText: 'Identifiant pour ce contrôle.',
  controlLabelPlacementText: 'Placement des étiquettes :',
  controlLabelPlacementTooltipText: 'Position des étiquettes par rapport au contrôle.',
  controlTypeText: 'Type de contrôle :',
  controlTypeTooltipText: 'Type de contrôle Saleslogix.',
  defaultDataBindingText: 'Associations de données :',
  defaultDataBindingTooltipText: 'Champ(s) de données dans la base de données utilisée par ce contrôle.',
  enabledText: 'Activé :',
  enabledTooltipText: 'Permet à utilisateur interagir avec ce contrôle.',
  requiredText: 'Obligatoire :',
  requiredTooltipText: 'Requiert une valeur lors de enregistrement des données.',
  visibleText: 'Visible :',
  visibleTooltipText: 'Afficher ou masquer ce contrôle sur le formulaire.',
  labelPlacementText: { left: 'Gauche', right: 'Droite', top: 'Haut', none: 'Aucun' } }
));
},
'Sage/QuickForms/Design/Editors/nls/fr/NonVisibleAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/NonVisibleAdvancedPropertyEditor", (
{ titleText: 'Avancé',
  controlInfoText: 'Info contrôle',
  controlIdText: 'ID de contrôle :',
  controlIdTooltipText: 'Identifiant pour ce contrôle.',
  controlTypeText: 'Type de contrôle :',
  controlTypeTooltipText: 'Type de contrôle Saleslogix.' }
));
},
'Sage/MainView/IntegrationContract/nls/fr/InvoiceRTDV':function(){
define("Sage/MainView/IntegrationContract/nls/fr/InvoiceRTDV", (
{ dialogCaption: 'Détails de la facture',
  loadingText: 'Chargement ...',
  lblInvoiceCaption: 'Facture :',
  lblNetTotalCaption: 'Montant de la facture :',
  lblInvoiceDateCaption: 'Date de la facture :',
  lblInvoiceDiscountAmountCaption: 'Remise :',
  lblDueDateCaption: 'Date échéance :',
  lblInvoiceDiscountPercentCaption: 'Pourcentage de remise :',
  lblCustomerPOCaption: 'Commande client :',
  lblCarrierTotalPriceCaption: 'Expédition :',
  lblSettlementDiscountPercentCaption: 'Pourcentage de remise accordée :',
  lblTaxCaption: 'Taxe :',
  lblSettlementDiscountTermsCaption: 'Conditions de paiement :',
  lblNotesCaption: 'Commentaires :',
  lblOperatingCompanyCurrencyCaption: 'Devise de la société exploitation :',
  lblCostTotalCaption: 'Coût total :',
  lblOperatingCompanyCurrencyExchangeRateDateCaption: 'Date du taux de change :',
  lblProfitTotalCaption: 'Total des bénéfices :',
  lblOperatingCompanyCurrencyExchangeRateCaption: 'Taux de change :',
  lblPriceListCaption: 'Liste de prix :',
  lblOCCurrencyCaption: 'Devise de la société exploitation :',
  lblCurrencyCaption: 'Devise :',
  lblSalesPersonCaption: 'Représentant commercial :',
  detailsTabTitle: 'Détails',
  addressTabTitle: 'Adresses',
  invoiceLinesTabTitle: 'Lignes de la facture',
  paymentsTabTitle: 'Paiements',
  deliveriesTabTitle: 'Livraisons',
  grdInvoice_Name: 'Facture N°',
  grdInvoice_Date: 'Date de la facture',
  grdInvoice_Amount: 'Montant de la facture',
  grdInvoice_PO: 'Commande client',
  grdInvoice_PaymentTerms: 'Conditions de paiement',
  grdInvoice_NetTotal: 'Total net',
  grdInvoice_Tax: 'TVA',
  grdAddress_Name: 'Description',
  grdAddress_address1: 'Adresse 1',
  grdAddress_address2: 'Adresse 2',
  grdAddress_City: 'Ville',
  grdAddress_State: 'Département',
  grdAddress_Zip: 'Code postal',
  grdItems_ActualPrice: 'Prix réel',
  grdItems_ChargesTotal: 'Total des frais',
  grdItems_Commodity: 'Marchandise',
  grdItems_CommodityDimension: 'Dimension',
  grdItems_CommodityVariant: 'Variable',
  grdItems_DiscountTotal: 'Total de la remise',
  grdItems_GrossTotal: 'Total brut',
  grdItems_InitialPrice: 'Prix origine',
  grdItems_Line: 'Numéro de la ligne',
  grdItems_NetTotal: 'Total net',
  grdItems_Quantity: 'Quantité',
  grdItems_Status: 'Etat',
  grdItems_TaxTotal: 'Montant de la taxe',
  grdItems_Type: 'Type de la ligne',
  grdItems_UnitOfMeasure: 'Unité',
  grdPayments_Charges: 'Frais',
  grdPayments_Currency: 'Devise',
  grdPayments_Date: 'Date',
  grdPayments_Discounts: 'Remises',
  grdPayments_GrossTotal: 'Total brut',
  grdPayments_Name: 'Nom',
  grdPayments_NetTotal: 'Total net',
  grdPayments_ProcessDate: 'Date de traitement',
  grdPayments_Status: 'Etat',
  grdPayments_Tax: 'Taxes',
  grdPayments_TenderReference: 'Référence de appel offre',
  grdPayments_TenderType: 'Type de appel offre',
  grdPayments_Type: 'Type',
  grdDeliveries_ActualDate: 'Date réelle',
  grdDeliveries_ActualTime: 'Heure réelle',
  grdDeliveries_Carrier: 'Transporteur',
  grdDeliveries_CarrierReference: 'Référence du transporteur',
  grdDeliveries_DeliveredQuantity: 'Quantité livrée',
  grdDeliveries_ExceptionReason: 'Motif de exception',
  grdDeliveries_Method: 'Méthode',
  grdDeliveries_Number: 'Nombre',
  grdDeliveries_RequestedDate: 'Date de la demande',
  grdDeliveries_RequestedQuantity: 'Quantité demandée',
  grdDeliveries_Status: 'Etat',
  grdDeliveries_Type: 'Type',
  btnCloseCaption: 'Fermer' }
));
},
'Sage/UI/nls/fr/SDataLookup':function(){
define("Sage/UI/nls/fr/SDataLookup", {
    closeText: 'Fermer',
    cancelText: 'Annuler',
    loadingText: 'Chargement ...',
    noDataText: 'Aucun enregistrement a été retourné'
});
},
'Sage/QuickForms/Design/nls/fr/RowDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/RowDesigner", (
{ displayNameText: 'Ligne' }
));
},
'Sage/Groups/nls/fr/GroupLookup':function(){
﻿define("Sage/Groups/nls/fr/GroupLookup", {
    txtNoRecordsFound: 'Aucune fiche trouvée.'
});
},
'Sage/TaskPane/nls/fr/OpportunityTasksTasklet':function(){
define("Sage/TaskPane/nls/fr/OpportunityTasksTasklet", (
{ updateOpportunitiesTitle: 'Mettre à jour les opportunités',
  opportunityStatisticsTitle: 'Statistiques de opportunité' }
));
},
'Sage/UI/Filters/nls/fr/CheckBoxFilter':function(){
define("Sage/UI/Filters/nls/fr/CheckBoxFilter", {
    loadingText: 'Chargement ...',
    moreText: 'Modifier les éléments',
    clearText: 'Effacer',
    emptyText: '(Vide)',
    nullText: '(Nul)',
    ofText: '/'
});
},
'Sage/Utility/File/nls/fr/LibraryDocument':function(){
define("Sage/Utility/File/nls/fr/LibraryDocument", {
    failureNumber: 'Echec #${0} : ',
    percentComplete: 'En cours de chargement, veuillez patienter...',
    uploadError: 'Une erreur est produite lors de la tentative de téléchargement un ou plusieurs fichiers (non téléchargés : ${0}; téléchargés : ${1}).',
    invalidContext: 'Le(s) fichier(s) ne peu(ven)t pas être téléchargé(s) à extérieur de la bibliothèque de ventes.',
    unknownError: 'Une erreur inconnue est produite pendant le téléchargement un fichier.'
});
},
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/fr/SpeedSearchLookup':function(){
define("Sage/MainView/ActivityMgr/AttendeeLookup/nls/fr/SpeedSearchLookup", (
{ dialogTitle: 'Rechercher des participants',
  okText: 'Ajouter sélection',
  cancelText: 'Fermer',
  noDataText: 'Aucun enregistrement ne correspond aux critères de sélection',
  srchBtnCaption: 'Rechercher',
  colName: 'Nom',
  colType: 'Type',
  colAccount: 'Entreprise/Compte',
  colTitle: 'Titre',
  colEmail: 'E-mail',
  colWorkPhone: 'Téléphone professionnel' }
));
},
'Sage/UI/nls/fr/ConditionManager':function(){
define("Sage/UI/nls/fr/ConditionManager", {
    addimgalttext: 'Ajouter une condition',
    hideimgalttext: 'Supprimer la condition',
    addrowlabel: 'Rechercher par :',
    hiderowlabel: 'Et :',
    srchBtnCaption: 'Rechercher',
    errorOperatorRequiresValue: 'L’opérateur requiert une valeur',
    startingWith: 'commençant par',
    endsWith: 'Finit par',
    contains: 'contient',
    equalTo: 'égal à',
    notEqualTo: 'non égal à',
    equalOrLessThan: 'Inférieur ou égal à',
    equalOrGreaterThan: 'Supérieur ou égal à',
    lessThan: 'Inférieur à',
    greaterThan: 'Supérieur à'
});
},
'Sage/MainView/JobMgr/templates/nls/fr/SchedulesListSummary':function(){
define("Sage/MainView/JobMgr/templates/nls/fr/SchedulesListSummary", (
{}
));
},
'Sage/MainView/ActivityMgr/templates/nls/fr/UserActivityListSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/fr/UserActivityListSummary", (
{ txtPhone_Caption: 'N° de téléphone :',
  lnkOpportunity_Caption: 'Opportunité :',
  txtStartTime_Caption: 'Heure de début :',
  lnkContactName_Caption: 'Contact :',
  lnkLeadName_Caption: 'Lead :',
  lnkTicket_Caption: 'Ticket :',
  txtLocation_Caption: 'Emplacement :',
  txtLeader_Caption: 'Responsable :',
  txtDuration_Caption: 'Durée :',
  lnkAccountName_Caption: 'Compte :',
  lnkCompanyName_Caption: 'Société :',
  txtNotes_Caption: 'Notes :',
  btnComplete_Caption: 'Terminer',
  lnkAttendeeCount_Caption: 'Nombre de participants :' }
));
},
'Sage/UI/Dashboard/nls/fr/WidgetDefinition':function(){
define("Sage/UI/Dashboard/nls/fr/WidgetDefinition", {
    defaultWidgetText: 'Modifier les paramètres de Widget',
    settingsText: 'Paramètres',
    viewGroupText: 'Afficher le groupe',
    Bar_Chart: 'Graphiques à barres',
    Column_Chart: 'Histogramme',
    Group_List: 'Liste de groupe',
    Pie_Chart: 'Graphique en secteurs',
    Funnel_Chart: 'Graphique en entonnoir',
    Line_Chart: 'Graphique en courbes',
    SData_Feed: 'Flux SData',
    Web_Feed: 'Flux Web',
    Website: 'Site Web',
    Default: 'Par défaut',
    Links: 'Lien',
    Recently_Viewed: 'Affiché récemment',
    Todays_Activities: 'Activités du jour',
    Today_s_Activities: 'Activités du jour',
    Welcome: 'Bienvenue',
    Closing_Opportunities: 'Opportunités en cours de fermeture',
    Quick_Actions: 'Actions rapides',
    Do_You_Know___: 'Savez-vous...',
    All_Leads: 'Tous les leads',
    My_Notes: 'Mes remarques',
    Open_Opportunities: 'Opportunités ouvertes',
    My_Top_Opportunities: 'Mes meilleures opportunités',
    My_Pipeline: 'Mon pipeline',
    Recent_Lead_Creation_History: 'Historique récent de création de leads',
    My_Activity_trend: 'Les tendances de mon activité',
    My_Completed_Activities_by_Type: 'Mes activités terminées par type',
    Active_Campaigns: 'Campagnes actives',
    All_Open_Opportunities: 'Toutes les opportunités ouvertes',
    Top_Opportunities: 'Meilleures opportunités',
    Open_Defect_Distribution: 'Distribution de défaut ouvert',
    My_Dashboard: 'Mon tableau de bord',
    Sales: 'Ventes',
    Group_List_Description: 'Affiche une liste d’enregistrements de groupe par entité. Par exemple, un groupe de campagnes actives.',
    Welcome_Description: 'Affiche une introduction à Sage SalesLogix avec un lien vers la rubrique d’aide Introduction à Saleslogix for Web.',
    Line_Chart_Description: 'Affiche des données sous la forme d’une série de points de données reliés par une courbe. Ceci est utile lorsque les données représentent plusieurs groupes ou plusieurs catégories.',
    Bar_Chart_Description: 'Affiche des données sous la forme de groupe de barres horizontales. Ceci est utile pour comparer plusieurs ensembles de données.',
    Column_Chart_Description: 'Affiche des données sous la forme densemble de barres verticales regroupées par catégorie. Ceci est utile pour afficher les modifications qui ont affecté les données pendant une période de temps donnée ou pour illustrer les comparaisons entre des éléments.',
    Funnel_Chart_Description: 'Affiche les données en tant que proportions progressives sous la forme d’un entonnoir. Les données sont représentées en pourcentages et il n’y a pas daxe.',
    Pie_Chart_Description: 'Affiche les données en tant que proportions d’un tout. Chaque valeur est calculée comme pourcentage du total. Ce graphique ne comporte pas d’axe.',
    Recently_Viewed_Description: 'Affiche les liens vers les enregistrements récemment consultés, dont le type de fichier est indentifié par une icône. Par exemple,  un compte ou un contact.',
    Todays_Activities_Description: 'Affiche les liens vers les activités du jour.',
    Links_Description: 'Affiche les liens que vous avez créés. Par exemple, des liens vers une vue Détails dans Saleslogix ou vers un site Web externe.',
    SData_Feed_Description: 'Affiche un flux Web dans les flux SData (Sage Data). Par exemple, un flux de votre base de données Saleslogix ou de lintégration de comptabilité.',
    Web_Feed_Description: 'Affiche des informations sur les flux RSS ou Atom.',
    Website_Description: 'Affiche le site Web de votre choix.'
});
},
'Sage/MainView/ActivityMgr/templates/nls/fr/AllOpenListSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/fr/AllOpenListSummary", (
{ txtPhone_Caption: 'N° de téléphone :',
  lnkOpportunity_Caption: 'Opportunité :',
  txtStartTime_Caption: 'Heure de début :',
  lnkContactName_Caption: 'Contact :',
  lnkLeadName_Caption: 'Lead :',
  lnkTicket_Caption: 'Ticket :',
  txtLocation_Caption: 'Emplacement :',
  txtLeader_Caption: 'Responsable :',
  txtDuration_Caption: 'Durée :',
  lnkAccountName_Caption: 'Compte :',
  lnkCompanyName_Caption: 'Société :',
  txtNotes_Caption: 'Notes :',
  btnComplete_Caption: 'Terminer',
  lnkAttendeeCount_Caption: 'Nombre de participants :' }
));
},
'Sage/UI/nls/fr/SearchConditionWidget':function(){
define("Sage/UI/nls/fr/SearchConditionWidget", {
    trueText: 'Vrai',
    falseText: 'Faux',
    networkText: 'Réseau',
    remoteText: 'Distant',
    webText: 'Web',
    webViewerText: 'Visualiseur Web',
    concurrentText: 'Simultané',
    retiredText: 'Désactivé',
    templateText: 'Modèle',
    addonText: 'Add-on',
    adminText: 'Admin',
    userText: 'Utilisateur',
    teamText: 'Equipe',
    departmentText: 'Service',
    systemText: 'Système'
});
},
'Sage/QuickForms/Design/Editors/nls/fr/GenericBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/GenericBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Apparence',
  captionText: 'Légende :',
  captionTooltipText: 'étiquette à afficher sur le formulaire pour ce contrôle.',
  captionAlignmentText: 'Alignement de la légende :',
  captionAlignmentTooltipText: 'Justification du texte de étiquette.',
  alignmentText: { left: 'Gauche', center: 'Centre', right: 'Droite' } }
));
},
'Sage/MainView/JobMgr/nls/fr/JobManagerActions':function(){
define("Sage/MainView/JobMgr/nls/fr/JobManagerActions", (
{ txtInterruptExecutionMessage: 'Un signal a été envoyé à action afin en interrompre exécution.',
  txtInterruptExecutionTitle: 'Annuler action',
  txtInterruptExecutionConfirmationMessage: 'Voulez-vous vraiment annuler exécution de action ${0} ?',
  txtYes: 'Oui',
  txtNo: 'Non',
  completedJobMessage: 'La tâche sélectionnée a déjà été exécutée.',
  jobStatusComplete: 'Terminer',
  error_NoRecordSelected: 'Vous devez sélectionner une fiche pour pouvoir continuer.',
  confirm_ScheduleDeletion: 'Voulez-vous vraiment supprimer le planning sélectionné ?' }
));
},
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/fr/ContactLookupConfig':function(){
define("Sage/MainView/ActivityMgr/AttendeeLookup/nls/fr/ContactLookupConfig", (
{ contactText: 'Contact',
  accountText: 'Compte',
  lookupContactText: 'Rechercher un contact',
  nameText: 'Nom',
  cityText: 'Ville',
  stateText: 'Département',
  workphoneText: 'Téléphone professionnel',
  emailText: 'E-mail',
  dialogButtonText: 'Ajouter sélection',
  cancelText: 'Fermer',
  colFirstName: 'Prénom',
  colLastName: 'Nom',
  colTitle: 'Titre',
  colAccount: 'Compte',
  colWorkPhone: 'Téléphone professionnel',
  colEmail: 'E-mail',
  dialogTitleText: 'Rechercher des contacts'}
));
},
'Sage/QuickForms/Design/nls/fr/DataSourcePanel':function(){
define("Sage/QuickForms/Design/nls/fr/DataSourcePanel", (
{ loadingText: 'Chargement ...' }
));
},
'Sage/MainView/ReportMgr/templates/nls/fr/SchedulesListSummary':function(){
define("Sage/MainView/ReportMgr/templates/nls/fr/SchedulesListSummary", (
{}
));
},
'Sage/Library/nls/fr/Manager':function(){
define("Sage/Library/nls/fr/Manager", (
{ AddFiles: 'Ajouter des fichiers',
  AddFolder: 'Ajouter un dossier',
  Confirm: 'Confirmer',
  ConfirmDownload: "Le fichier a pas été téléchargé. Voulez-vous le télécharger lors de la prochaine synchronisation ?",
  ConfirmDownloadReorder: "Le fichier a pas été téléchargé mais a déjà été commandé. Voulez-vous le recommander pour le télécharger lors de la prochaine synchronisation ?",
  Created: 'Créé',
  DeleteFolder: 'Supprimer le dossier',
  DeleteSelectedFile: 'Supprimer le fichier sélectionné',
  Description: 'Description',
  DirectoryInformationError: 'Une erreur inattendue est survenue pendant la tentative de récupération des informations sur le répertoire.',
  DocumentInformationError: 'Une erreur inattendue est survenue pendant la tentative de récupération des informations sur le document.',
  EditFolder: 'Modifier le nom du dossier',
  Expires: 'Expire le',
  File: 'Fichier',
  FileProperties: 'Propriétés du fichier',
  Help: 'Aide',
  InvalidRoot: 'Répertoire racine non valide : "${0}" (${1}).',
  Library: 'Bibliothèque',
  LibraryDataError: 'Une erreur inattendue est survenue pendant le traitement des données de répertoire de bibliothèque.',
  Never: 'Jamais',
  No: 'Non',
  Revised: 'Révisé',
  Size: 'Taille',
  Yes: 'Oui' }
));
},
'Sage/UI/nls/fr/GroupsTitlePaneConfigProvider':function(){
define("Sage/UI/nls/fr/GroupsTitlePaneConfigProvider", {
    groupText: 'Groupes',
    addGroupButtonTooltip: 'Ajouter un groupe',
    groupButtonTooltip: 'Gérer les groupes',
    lookupText: 'Recherche',
    lookupResultsText: 'Résultats de la recherche',
    groupColumnText: 'Groupe',
    visibleColumnText: 'Visible'
});
},
'Sage/QuickForms/Design/nls/fr/NonVisibleControlContainer':function(){
define("Sage/QuickForms/Design/nls/fr/NonVisibleControlContainer", (
{ headerText: 'Contrôles non visuels' }
));
},
'Sage/UI/Controls/nls/fr/Name':function(){
define("Sage/UI/Controls/nls/fr/Name", {
    okText: 'OK',
    cancelText: 'Annuler',
    dialogTitle: 'Modifier le nom',
    prefixText: 'Préfixe :',
    nameFirstText: 'Prénom :',
    nameMiddleText: '2e prénom :',
    nameLastText: 'Nom :',
    suffixText: 'Suffixe :',
    buttonTooltip: 'Modifier'
});
},
'Sage/MainView/JobMgr/nls/fr/ExecutionsListPanelConfig':function(){
define("Sage/MainView/JobMgr/nls/fr/ExecutionsListPanelConfig", {
    loadingText: 'Chargement ...',
    colNameJobName: 'Type',
    colNameUser: 'Utilisateur',
    colNamePhase: 'Phase',
    colNamePhaseDetail: 'Détails de la phase',
    colNameProgress: 'Progression',
    colNameElapsed: 'Temps écoulé',
    colNameStatus: 'Etat',
    colNameResult: 'Résultat de exécution'
});
},
'Sage/QuickForms/Design/nls/fr/PhoneControlDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/PhoneControlDesigner", (
{ displayNameText: 'Téléphone' }
));
},
'Sage/MainView/Lead/nls/fr/UpdateLeads':function(){
define("Sage/MainView/Lead/nls/fr/UpdateLeads", (
{ updateMultipleLeads_Caption: 'Mettre à jour plusieurs opportunités',
  labelWidth: '120',
  btnCancel_Caption: 'Annuler',
  ok_Text: 'OK',
  update_To_Caption: 'A :',
  update_Property_Caption: 'Mettre à jour :',
  updateProp_Owner: 'Propriétaire',
  lookupOwnerText: 'Rechercher un propriétaire :',
  lookupDescriptionColText: 'Description',
  updateProp_AcctMgr: 'Responsable du compte',
  lookupActMgrText: 'Responsable du compte',
  lookupNameColText: 'Nom',
  lookupTitleColText: 'Titre',
  lookupDepartmentColText: 'Service',
  lookupRegionColText: 'Région',
  lookupTypeColText: 'Type',
  errorUnspecifiedValue: 'Veuillez spécifier un point de terminaison valide avant de continuer.',
  errorRequestingJobMgr: 'Une erreur est produite lors de la requête sur le schéma.',
  updateLeadsTitle: 'Mettre à jour le lead' }
));
},
'Sage/Library/nls/fr/FileHandler':function(){
define("Sage/Library/nls/fr/FileHandler", (
{ AccessError: 'Votre rôle ne vous permet pas d\'exécuter cette action.',
  Available: 'Disponible',
  Confirm: 'Confirmer',
  DeleteFileCnfmFmt: 'Voulez-vous vraiment supprimer le fichier "${0}" ?',
  Delivered: 'Livré : Non lu',
  DeliveredRead: 'Livré : Lu',
  DocumentPropertiesError: 'Une erreur inattendue est survenue pendant la tentative de récupération des propriétés du document.',
  DocumentPropertiesUpdateError: 'Une erreur inattendue est survenue pendant la tentative de mise à jour des propriétés du document.',
  DocumentUpdateConflictError: 'Le fichier a été mis à jour par un autre utilisateur. Veuillez l\'actualiser et réessayer.',
  FileDeleteError: 'Une erreur inattendue est survenue lors de la tentative de suppression d\'un fichier.',
  FileStatusError: 'Une erreur inattendue est survenue pendant la tentative de mise à jour de l\'état du fichier.',
  LogRequestError: 'Une erreur inattendue est survenue pendant la tentative  de consignation de la demande de synchronisation du document.',
  No: 'Non',
  NoAccessMessage: 'Vous n\'avez pas l\'autorisation d\'ajouter des fichiers à la bibliothèque. Contactez votre administrateur Saleslogix pour obtenir des informations supplémentaires.',
  Ordered: 'Commandé',
  PleaseSelectFile: 'Veuillez sélectionner un fichier.',
  PleaseWait: 'Veuillez patienter',
  Revised: 'Révisé',
  RevisionOrdered: 'Révision commandée',
  UploadError: 'Une erreur est survenue pendant la tentative de téléchargement d\'un fichier.',
  Unknown: 'Inconnu',
  Yes: 'Oui' }
));
},
'Sage/UI/nls/fr/ListPanel':function(){
define("Sage/UI/nls/fr/ListPanel", {
    listText: 'Liste',
    summaryText: 'Résumé',
    detailText: 'Détail',
    hideDetailText: 'Masquer les détails',
    unsavedDataText: '*données non enregistrées',
    helpText: 'Aide',
    refreshText: 'Actualiser',
    displayingText: 'Affichage',
    ofText: 'de',
    overflowText: 'Votre recherche a renvoyé un grand nombre de résultats. Veuillez affiner en appliquant des filtres.'
});
},
'Sage/Utility/nls/fr/Sql':function(){
define("Sage/Utility/nls/fr/Sql", (
{ InvalidApostropheCount: 'Le nombre apostrophes dans la clause SQL IN est pas valide.' }
));
},
'Sage/UI/Filters/nls/fr/EditFilters':function(){
define("Sage/UI/Filters/nls/fr/EditFilters", {
    selectAllText: 'Sélectionner tous',
    dialogTitle: 'Modifier les filtres',
    okText: 'OK',
    cancelText: 'Annuler'
});
},
'Sage/QuickForms/Design/Editors/nls/fr/FormUsagesPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/FormUsagesPropertyEditor", (
{ titleText: 'Utilisation',
  portalText: 'Portail',
  viewText: 'Affichage',
  modesText: 'Modes',
  descriptionText: 'Description' }
));
},
'Sage/UI/Controls/nls/fr/DurationSelect':function(){
define("Sage/UI/Controls/nls/fr/DurationSelect", {
    minuteText: 'minute',
    minutesText: 'Minutes',
    hourText: 'heure',
    hoursText: 'Heures',
    dayText: 'Jour',
    daysText: 'Jours'
});
},
'Sage/UI/Alarms/nls/fr/AlarmCountDown':function(){
define("Sage/UI/Alarms/nls/fr/AlarmCountDown", {
    startsInText: 'Commence dans',
    overduebyText: 'en retard de',
    minuteText: 'minute',
    minutesText: 'Minutes',
    hourText: 'heure',
    hoursText: 'Heures',
    dayText: 'Jour',
    daysText: 'Jours',
    weekText: 'Semaine',
    weeksText: 'semaines',
    monthText: 'Mois',
    monthsText: 'mois',
    yearText: 'Année',
    yearsText: 'ans',
    startsNowText: 'Démarrer maintenant'
});
},
'Sage/UI/nls/fr/AttachmentList':function(){
define("Sage/UI/nls/fr/AttachmentList", {
    attachmentText: 'Pièce jointe',
    userText: 'Utilisateur',
    modDateText: 'Modifié le',
    dateRangeText: 'Modifier la plage de dates',
    sizeText: 'Taille',
    extensionText: 'Extension de fichier',
    addFileText: 'Ajouter un fichier',
    addUrlText: 'Ajouter une URL',
    editText: 'Modifier',
    helpText: 'Aide',
    addGoogleText: 'Ajouter un document Google',
    deleteText: 'Supprimer',
    request: 'Demander le fichier',
    delivered: 'Envoyé',
    requested: 'Demandé',
    available: 'Disponible'
});
},
'Sage/MailMerge/nls/fr/Lookup':function(){
define("Sage/MailMerge/nls/fr/Lookup", (
{ accountCaption: 'Compte',
  companyCaption: 'Société',
  contactTitle: 'Sélectionner un contact',
  emailCaption: 'Envoyer par e-mail',
  firstNameCaption: 'Prénom',
  invalidOptionsText: "Le paramètre des options ou options.onSelect est pas défini ou est mal défini.",
  lastNameCaption: 'Nom',
  leadTitle: 'Supprimer les Leads sélectionnés',
  mobileCaption: 'Mobile',
  opportunityCaption: 'Opportunité',
  workCaption: 'Bureau',
  okText: 'OK' }
));
},
'Sage/QuickForms/Design/Editors/nls/fr/RowBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/RowBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Apparence',
  indexText: 'Index :',
  indexTooltipText: 'Numéro de la ligne ou colonne, à partir de zéro.' }
));
},
'Sage/MainView/JobMgr/nls/fr/RunJobDialog':function(){
define("Sage/MainView/JobMgr/nls/fr/RunJobDialog", {
    dlgRunJob_Title: 'Exécuter/programmer une tâche',
    txtJobName_Caption: 'Nom de la tâche',
    txtTriggerDescription_Caption: 'Description',
    cmbScheduleType_Caption: 'Planification :',
    cmdOK_Caption: 'OK',
    cmdCancel_Caption: 'Annuler',
    txtInvalidNumber: 'Nombre non valide.',
    contentPaneParameters_Caption: 'Paramètres',
    txtRunNow: 'Exécuter maintenant',
    txtScheduledExecution: 'Exécution programmée',
    colName_Caption: 'Nom',
    colValue_Caption: 'Valeur',
    colDescription_Caption: 'Description',
    txtInvalidParameterTitle: 'Paramètre non valide',
    txtInvalidParameterMessage: 'Paramètre non valide : ${0}'
});
},
'Sage/QuickForms/Design/nls/fr/CheckBoxControlDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/CheckBoxControlDesigner", (
{ displayNameText: 'Case à cocher' }
));
},
'Sage/QuickForms/Design/nls/fr/EditableGridControlDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/EditableGridControlDesigner", (
{ displayNameText: 'Grille modifiable' }
));
},
'Sage/MainView/Options/nls/fr/OptionsDialog':function(){
﻿define("Sage/MainView/Options/nls/fr/OptionsDialog", (
{
    txtOptions: 'Options',
    txtColumns: 'Colonnes',
    txtZero: '(0 affiche tous les colonnes de groupe)',
    txtHideOnSelection: 'Masquer la liste de groupe étendue dans la sélection des fiches',
    txtDisplayExtendedGroupListOnLookup: 'Afficher la liste de groupe étendue lors de la recherche',
    cmdOk_Caption: 'OK',
    cmdCancel_Caption: 'Annuler',
    txtListView: 'Vue Liste',
    txtDetailView: 'Vue Détails',
    txtStayInDetailViewOnLookup: 'Rester en vue Détails lors de la recherche'
}
));
},
'Sage/QuickForms/Design/nls/fr/HiddenControlDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/HiddenControlDesigner", (
{ displayNameText: 'Texte masqué' }
));
},
'Sage/UI/Dashboard/nls/fr/DashboardWidgetCell':function(){
define("Sage/UI/Dashboard/nls/fr/DashboardWidgetCell", {
    closeTooltipText: 'Fermer',
    minimizeTooltipText: 'Réduire',
    settingsTooltipText: 'Paramètres'
});
},
'Sage/QuickForms/Design/Editors/nls/fr/UserBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/UserBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  captionText: 'Légende :',
  captionTooltipText: 'étiquette à afficher sur le formulaire pour ce contrôle.',
  captionAlignmentText: 'Alignement de la légende :',
  captionAlignmentTooltipText: 'Justification du texte de étiquette.',
  isReadOnlyText: 'Lecture seule :',
  isReadOnlyTooltipText: 'Ne permet pas les modifications.',
  toolTipText: 'Info-bulle :',
  toolTipTooltipText: 'Court texte aide concernant le contrôle.',
  alignmentText: { left: 'Gauche', center: 'Centre', right: 'Droite' } }
));
},
'Sage/UI/nls/fr/Dialogs':function(){
define("Sage/UI/nls/fr/Dialogs", {
    yesText: 'Oui',
    noText: 'Non',
    okText: 'OK',
    cancelText: 'Annuler'
});
},
'Sage/MainView/IntegrationContract/nls/fr/SyncResultsHistory':function(){
define("Sage/MainView/IntegrationContract/nls/fr/SyncResultsHistory", {
    grdSyncHistory_StampDate: 'Date / Heure',
    grdSyncHistory_Status: 'Statut',
    grdSyncHistory_SyncNote: 'Synchroniser Les Notes'
});
},
'Sage/TaskPane/nls/fr/SecuredActionTasklet':function(){
define("Sage/TaskPane/nls/fr/SecuredActionTasklet", (
{ addToRoleTitle: 'Ajouter au rôle' }
));
},
'Sage/UI/Dashboard/nls/fr/DashboardTabController':function(){
define("Sage/UI/Dashboard/nls/fr/DashboardTabController", {
    newTabText: 'Nouvel Onglet',
    addContentText: 'Ajouter du contenu',
    editOptionsText: 'Modifier les options',
    hideTabText: 'Masquer onglet',
    closeText: 'Fermer',
    copyTabText: 'Copier onglet',
    showTabText: 'Afficher onglet',
    shareTabText: 'Partager onglet',
    deleteTabText: 'Supprimer un onglet',
    deleteTabConfirmText: 'Voulez-vous vraiment supprimer cet onglet ?',
    descriptionText: 'Description',
    everyoneText: 'Tous les utilisateurs',
    saveTabText: 'Enregistrer onglet',
    helpText: 'Aide',
    addText: 'Ajouter',
    invalidMessage: 'Caractère non valide',
    invalidDuplicateMessage: 'Le nom de la connexion doit être unique.',
    deleteText: 'Supprimer',
    titleText: 'Titre :',
    chooseTemplateText: 'Choisir le modèle à utiliser :',
    oneColumnText: 'Une colonne',
    twoColumnText: 'Partage en deux colonnes',
    fatLeftText: 'Deux colonnes plus grande à gauche',
    fatRightText: 'Deux colonnes plus grande à droite',
    makeDefaultText: 'Utiliser par défaut',
    releaseFetchErrorText: 'Erreur lors de la récupération des propriétés disponibles.',
    releaseDeleteNoneSelected: 'Aucun élément sélectionné.',
    releasedToText: 'Diffusé à :',
    typeText: 'Type',
    addLookup: 'Ajouter',
    okButton: 'OK',
    errorText: 'Erreur',
    warningText: 'Avertissement',
    permissionErrorText: 'Erreur : utilisateur ne dispose pas des droits suffisants pour effectuer cette action.',
    permissionErrorPerformCopyText: 'Voulez-vous créer une copie personnelle de cette page ?',
    yesText: 'Oui',
    noText: 'Non'
});
},
'Sage/MainView/IntegrationContract/nls/fr/SalesOrderRTDV':function(){
define("Sage/MainView/IntegrationContract/nls/fr/SalesOrderRTDV", (
{ dialogCaption: 'Détails du bon de commande',
  loadingText: 'Chargement ...',
  lblSalesOrderCaption: 'Bon de commande :',
  lblStatusCaption: 'Etat :',
  lblGrossTotalCaption: 'Montant de la commande :',
  lblOrderDateCaption: 'Date de la commande :',
  lblTaxTotalCaption: 'Montant de la taxe :',
  lblHoldStatusCaption: 'Statut en attente :',
  lblCurrencyCaption: 'Devise :',
  lblTypeCaption: 'Type :',
  lblCostTotalCaption: 'Coût total :',
  lblPONumberCaption: 'N° de BdC :',
  lblProfitTotalCaption: 'Total des bénéfices :',
  lblQuotationCaption: 'Devis :',
  lblInvoiceStatusCaption: 'Statut de la facture :',
  lblContactCaption: 'Contact :',
  lblDeliveryDateCaption: 'Date de livraison :',
  lblDueDateCaption: 'Date échéance :',
  lblPriceListCaption: 'Liste de prix :',
  lblCarrierCaption: 'Transporteur :',
  lblNetTotalCaption: 'Total net :',
  lblAllocationStatusCaption: 'Statut allocation :',
  lblDiscountTotalCaption: 'Total de la remise :',
  lblDeliveryStatusCaption: 'Statut de livraison :',
  lblChargesTotalCaption: 'Total facturé :',
  detailsTabTitle: 'Détails',
  salesPersonsTabTitle: 'Représentant commercial :',
  addressTabTitle: 'Adresses',
  salesOrderLinesTabTitle: 'Lignes de commandes',
  paymentsTabTitle: 'Paiements',
  deliveriesTabTitle: 'Livraisons',
  grdSalesOrder_Edit: 'Modifier',
  grdSalesOrder_OrderNumber: 'Numéro de commande',
  grdSalesOrder_OrderDate: 'Date de la commande',
  grdSalesOrder_Status: 'Etat',
  grdSalesOrder_HoldStatus: 'Statut en attente',
  grdSalesOrder_Type: 'Type',
  grdSalesOrder_PO: 'Numéro de BdC',
  grdSalesOrder_NetTotal: 'Total net',
  grdSalesOrder_DiscountTotal: 'Total de la remise',
  grdSalesOrder_ChargesTotal: 'Total des frais',
  grdSalesOrder_TaxTotal: 'Montant de la taxe',
  grdSalesOrder_GrossTotal: 'Total brut',
  grdSalesOrder_Currency: 'Devise',
  grdSalesPersons_Name: 'Nom',
  grdSalesPersons_Type: 'Type',
  grdSalesPersons_Extension: 'Extension',
  grdSalesPersons_Relationship: 'Relation',
  grdAddress_Name: 'Nom',
  grdAddress_Address1: 'Adresse 1',
  grdAddress_Address2: 'Adresse 2',
  grdAddress_City: 'Ville',
  grdAddress_State: 'Département',
  grdAddress_Zip: 'Code postal',
  grdItems_Line: 'Numéro de la ligne',
  grdItems_Type: 'Type',
  grdItems_Commodity: 'Marchandise',
  grdItems_CommodityVariant: 'Variable',
  grdItems_CommodityDimension: 'Dimension',
  grdItems_UnitOfMeasure: 'Unité',
  grdItems_Location: 'Emplacement',
  grdItems_PriceList: 'Liste des prix',
  grdItems_Quantity: 'Quantité',
  grdItems_InitialPrice: 'Prix origine',
  grdItems_ActualPrice: 'Prix réel',
  grdItems_NetTotal: 'Total net',
  grdItems_ChargesTotal: 'Total des frais',
  grdItems_DiscountTotal: 'Total de la remise',
  grdItems_TaxTotal: 'Montant de la taxe',
  grdItems_GrossTotal: 'Total brut',
  grdPayments_Date: 'Date du paiement',
  grdPayments_Name: 'Nom',
  grdPayments_Type: 'Type',
  grdPayments_Status: 'Etat',
  grdPayments_NetTotal: 'Total net',
  grdPayments_Discounts: 'Remises',
  grdPayments_Charges: 'Frais',
  grdPayments_Tax: 'TVA',
  grdPayments_GrossTotal: 'Total brut',
  grdPayments_Currency: 'Devise',
  grdPayments_TenderType: 'Type de appel offre',
  grdPayments_TenderReference: 'Référence de appel offre',
  grdPayments_ProcessDate: 'Date exécution',
  grdDeliveries_Number: 'Nombre',
  grdDeliveries_Type: 'Type',
  grdDeliveries_Status: 'Etat',
  grdDeliveries_RequestedDate: 'Date de la demande',
  grdDeliveries_ActualDate: 'Date réelle',
  grdDeliveries_ActualTime: 'Heure réelle',
  grdDeliveries_RequestedQuantity: 'Quantité demandée',
  grdDeliveries_DeliveredQuantity: 'Quantité livrée',
  grdDeliveries_Method: 'Méthode',
  grdDeliveries_Carrier: 'Transporteur',
  grdDeliveries_CarrierReference: 'Référence du transporteur',
  grdDeliveries_ExceptionReason: 'Motif de exception',
  errorERPRequest: 'Une erreur est produite lors de ouverture de affichage des détails du bon de commande traités par les sytèmes de comptabilité. ',
  errorERPRequestDetails: '${0}, ${1} Demande : ${2}',
  btnCloseCaption: 'Fermer' }
));
},
'Sage/QuickForms/Design/nls/fr/UserControlDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/UserControlDesigner", (
{ displayNameText: 'Utilisateur' }
));
},
'Sage/Groups/nls/fr/GroupNavigator':function(){
define("Sage/Groups/nls/fr/GroupNavigator", (
{ firstText: 'Aller au premier',
  previousText: 'Précédent',
  nextText: 'Suivant',
  lastText: 'Aller au dernier',
  listText: 'Vue Liste',
  noRecordsText: 'Aucun enregistrement',
  labelFmtText: '${0} sur ${1}' }
));
},
'Sage/Utility/File/nls/fr/AddURLAttachment':function(){
define("Sage/Utility/File/nls/fr/AddURLAttachment", {
    descriptionText: 'Description',
    urlText: 'Url',
    titleText: 'Ajouter URL jointe',
    okText: 'OK',
    cancelText: 'Annuler',
    requestFailedMsg: 'opération demandée a pas pu être exécutée, veuillez réessayer ultérieurement.',
    urlBlankMsg: 'URL et la propriété de description ne peuvent pas être vides.'
});
},
'Sage/UI/Filters/nls/fr/EditFilterItems':function(){
define("Sage/UI/Filters/nls/fr/EditFilterItems", {
    selectAllText: 'Sélectionner tous',
    findItemText: 'Chercher élément :',
    findText: 'Rechercher',
    clearText: 'Effacer',
    dialogTitle: 'Modifier les éléments de filtre',
    okText: 'OK',
    cancelText: 'Annuler'
});
},
'Sage/MainView/ReportMgr/Crystal/nls/fr/CrystalReportsFormatter':function(){
define("Sage/MainView/ReportMgr/Crystal/nls/fr/CrystalReportsFormatter", (
{ txtEdit: 'Modifier',
  txtDelete: 'Supprimer',
  txtRangeValue: '${0} à ${1}' }
));
},
'Sage/Utility/File/nls/fr/DragDropWatcher':function(){
define("Sage/Utility/File/nls/fr/DragDropWatcher", {
    query0: 'La fonctionnalité que vous demandez requiert l\'installation du module d\'intégration de bureau <br> Saleslogix.',
    query1: 'En savoir plus...',
    query2: 'Voulez-vous installer cette fonctionnalité maintenant ?',
    query3: 'Remarque : le module peut être installé à tout moment à partir des pages de connexion ou d\'options.'
});
},
'Sage/QuickForms/Design/nls/fr/DesignSurface':function(){
define("Sage/QuickForms/Design/nls/fr/DesignSurface", (
{ bisectionErrorText: 'Ce placement provoquera le découpage un autre contrôle.',
  rowBoundsErrorText: 'La ligne choisie est hors limites.',
  columnBoundsErrorText: 'La colonne choisie est hors limites.',
  rowSpanBoundsErrorText: 'La largeur de la ligne choisie est hors limites.',
  columnSpanBoundsErrorText: 'La largeur de la colonne choisie est hors limites.',
  occupiedErrorText: 'Il y a pas assez espace libre pour la taille choisie.' }
));
},
'Sage/MainView/ActivityMgr/nls/fr/ConfirmListPanelConfig':function(){
define("Sage/MainView/ActivityMgr/nls/fr/ConfirmListPanelConfig", (
{ colNameType: "Type d'activité",
  colNameNotification: 'Notification',
  colNameStartDate: 'Date de début',
  colNameDuration: 'Durée',
  colNameRegarding: 'Objet',
  colNameFromUser: 'De',
  colNameToUser: "À utilisateur" }
));
},
'Sage/QuickForms/Design/Editors/nls/fr/FormAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/FormAdvancedPropertyEditor", (
{ titleText: 'Avancé',
  generalText: 'Général',
  useEntityNameAsTitleText: 'Utiliser le nom de entité comme titre :',
  useEntityNameAsTitleTooltipText: 'Utiliser le nom de entité courante comme titre de formulaire.' }
));
},
'Sage/MainView/ActivityMgr/nls/fr/EventListPanelConfig':function(){
define("Sage/MainView/ActivityMgr/nls/fr/EventListPanelConfig", (
{ colNameType: 'Type',
  colNameStartDate: 'Date de début',
  colNameEndDate: 'Date de fin',
  colNameDescription: 'Description',
  colNameUser: 'Utilisateur',
  colNameLocation: 'Emplacement' }
));
},
'Sage/Extensions/Activity/ListPanelOverrides/nls/fr/AllOpenListPanelConfig':function(){
define("Sage/Extensions/Activity/ListPanelOverrides/nls/fr/AllOpenListPanelConfig", (
{ colNameAssociationCount: 'Nombre de participants' }
));
},
'Sage/MainView/nls/fr/FormManager':function(){
define("Sage/MainView/nls/fr/FormManager", (
{ nameText: 'Nom',
  entityText: 'Entité',
  layoutText: 'Présentation',
  titleFmtString: 'Concepteur de formulaire - ${0}',
  pageTitle: 'Saleslogix - Concepteur de formulaire' }
));
},
'Sage/UI/nls/fr/ActivityScheduler':function(){
define("Sage/UI/nls/fr/ActivityScheduler", {
    tooltipTime: 'Heure',
    tooltipContactName: 'Contact',
    tooltipAccountName: 'Compte',
    tooltipCompanyName: 'Société',
    tooltipLeadName: 'Lead',
    tooltipPhoneNumber: 'Téléphone',
    tooltipRegarding: 'Objet',
    tooltipPriority: 'Priorité',
    tooltipNotes: 'Notes',
    tooltipType: 'Type',
    tooltipDayType: 'Type de jour',
    tooltipStartDate: 'Date de début',
    tooltipEndDate: 'Date de fin',
    tooltipLocation: 'Emplacement',
    tooltipDescription: 'Description',
    completedText: '(Terminé)',
    tooltipMoreActivities: 'Cliquez pour plus activités',
    scheduler_dates:
    {
        month_full:
        [
            'Janvier',
            'Février',
            'Mars',
            'Avril',
            'Mai',
            'Juin',
            'Juillet',
            'Août',
            'Septembre',
            'Octobre',
            'Novembre',
            'Décembre'
        ],
        month_short:
        [
            'Jan',
            'Fév',
            'Mar',
            'Avr',
            'Mai',
            'Juin',
            'Juil',
            'Aoû',
            'Sep',
            'Oct',
            'Nov',
            'Déc'
        ],
        day_full:
        [
            'Dimanche',
            'Lundi',
            'Mardi',
            'Mercredi',
            'Jeudi',
            'Vendredi',
            'Samedi'
        ],
        day_short: ['Dim', 'Lun', 'Mar', 'Merc', 'Jeu', 'Ven', 'Sam']
    },
    scheduler_labels:
    {
        dhx_cal_today_button: 'Aujourd hui',
        day_tab: 'Jour',
        week_tab: 'Semaine',
        workweek_tab: 'Semaine de travail',
        month_tab: 'Mois',
        new_event: 'Nouvel événement',
        icon_save: 'Enregistrer',
        icon_cancel: 'Annuler',
        icon_details: 'Détails',
        icon_edit: 'Modifier',
        icon_delete: 'Supprimer',
        confirm_closing: '',
        confirm_deleting: 'événement sera supprimé de manière permanente. Voulez-vous continuer ?',
        section_description: 'Description',
        section_time: 'Période de temps',
        full_day: 'Journée complète',
        confirm_recurring: 'Voulez-vous modifier ensemble des événements répétés ?',
        section_recurring: 'Répéter événement',
        button_recurring: 'Désactivé',
        button_recurring_open: 'Activé',
        agenda_tab: 'Calendrier',
        date: 'Date',
        description: 'Description',
        year_tab: 'Année',
        week_agenda_tab: 'Calendrier'
    }
});
},
'Sage/MainView/nls/fr/SecurityManager':function(){
define("Sage/MainView/nls/fr/SecurityManager", (
{ accessText: 'Accès',
  columnText: 'Colonne',
  entityText: 'Entité',
  noAccessText: 'Aucun accès',
  profilesText: 'Profils',
  propertyText: 'Propriété',
  securityManagerText: 'Gestionnaire de sécurité',
  readOnlyText: 'Lecture seule',
  readWriteText: 'Lecture Écriture',
  resetText: 'Réinitialiser',
  saveText: 'Enregistrer',
  tableText: 'Table' }
));
},
'Sage/TaskPane/nls/fr/ActivityTaskConfigurationProvider':function(){
define("Sage/TaskPane/nls/fr/ActivityTaskConfigurationProvider", (
{ scheduleText: 'Planification',
  eventText: 'Evénement',
  phoneCallText: 'Appel',
  toDoText: 'Tâche à faire',
  meetingText: 'Rendez-vous',
  personalActivityText: 'Activité personnelle',
  deleteConfirmationText: 'Confirmation de la suppression',
  acceptConfirmationText: 'Accepter la confirmation',
  declineConfirmationText: 'Refuser la confirmation',
  completeActivityText: 'Terminer activité',
  deleteActivityText: 'Supprimer activité',
  deleteEventText: 'Supprimer événement',
  scheduleEventText: 'Planification un événement',
  scheduleRequestText: 'Planifier une demande',
  deleteRequestText: 'Supprimer la demande',
  recordsSelectedText: 'enregistrement(s) sélectionné(s)',
  clearText: 'Effacer' }
));
},
'Sage/UI/Controls/nls/fr/EntityInfoToolTip':function(){
define("Sage/UI/Controls/nls/fr/EntityInfoToolTip", {
    errorText: 'Information introuvable.',
    loadingText: 'Chargement ...',
    noInfoText: 'Aucune information à afficher.',
    mainText: 'Principal :',
    faxText: 'Fax :',
    tollFreeText: 'Numéro vert :',
    urlText: 'URL :',
    workText: 'Professionnel :',
    mobileText: 'Mobile :',
    emailText: 'E-mail :',
    contactNameText: 'Nom :',
    phoneText: 'N° de téléphone :',
    accountText: 'Compte :'
});
},
'Sage/MainView/ActivityMgr/nls/fr/ActivityGroupContextService':function(){
define("Sage/MainView/ActivityMgr/nls/fr/ActivityGroupContextService", (
{ activityTabDisplayName: 'Mes activités',
  litTabDisplayName: 'Documentation',
  eventTabDisplayName: 'Evénements',
  confirmTabDisplayName: 'Confirmations',
  pastDueTabDisplayName: 'En retard',
  alarmTabDisplayName: 'Alarmes',
  allOpenTabDisplayName: 'Toutes' }
));
},
'Sage/MainView/ActivityMgr/templates/nls/fr/AllOpenDetailSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/fr/AllOpenDetailSummary", (
{ txtPhone_Caption: 'N° de téléphone :',
  lnkOpportunityName_Caption: 'Opportunité :',
  txtStartTime_Caption: 'Heure de début :',
  lnkContactName_Caption: 'Contact :',
  lnkLeadName_Caption: 'Lead :',
  lnkTicketNumber_Caption: 'Ticket :',
  txtLocation_Caption: 'Emplacement :',
  txtLeader_Caption: 'Responsable :',
  txtDuration_Caption: 'Durée :',
  lnkAccountName_Caption: 'Compte :',
  lnkCompanyName_Caption: 'Société :',
  txtNotes_Caption: 'Notes :',
  btnComplete_Caption: 'Terminer',
  txtAttendeeCount_Caption: 'Nombre de participants :' }
));
},
'Sage/MainView/ReportMgr/templates/nls/fr/ReportsListSummary':function(){
define("Sage/MainView/ReportMgr/templates/nls/fr/ReportsListSummary", (
{}
));
},
'Sage/MainView/ReportMgr/Common/nls/fr/ExportOptionsDialog':function(){
define("Sage/MainView/ReportMgr/Common/nls/fr/ExportOptionsDialog", (
{ txtDialogTitle: 'Options d\'export',
  txtDialogTitleScheduling: 'Options d\'export et de planification',
  cmdBack_Caption: '< Précédent',
  cmdNext_Caption: 'Suivant >',
  cmdCancel_Caption: 'Annuler',
  txtName: 'Nom',
  txtSelectUser: 'Sélectionner un utilisateur',
  txtOK: 'OK',
  txtOutputFormat_Caption: 'Format',
  txtRunAs_Caption: 'Exécuter en tant que',
  txtScheduleDescription_Caption: 'Description' }
));
},
'Sage/MainView/ReportMgr/templates/nls/fr/ScheduleDetailSummary':function(){
define("Sage/MainView/ReportMgr/templates/nls/fr/ScheduleDetailSummary", {
    txtScheduleName_Caption: "Nom de l'emploi:",
    txtDescription_Caption: "Description:",
    txtRunAsUser_Caption: "Exécuter comme:",
    txtScheduledBy_Caption: "Prévu par:",
    txtOutputFormat_Caption: "Format de sortie:",
    txtFrequency_Caption: "Fréquence:",
    txtUser_Caption: "Auteur:",
    txtLastExecutionDate_Caption: "Dernière exécution:",
    txtExecutionCount_Caption: "Nombre d'exécutions:",
    txtReportName_Caption: "Rapport:"
});
},
'Sage/MainView/Opportunity/nls/fr/UpdateOpportunities':function(){
define("Sage/MainView/Opportunity/nls/fr/UpdateOpportunities", (
{ addToForecast_No: 'Non',
  addToForecast_Yes: 'Oui',
  btnCancel_Caption: 'Annuler',
  btnOK_Caption: 'OK',
  estimatedClose_Days: 'Jours',
  estimatedClose_MoveOut: 'Déplacer',
  estimatedClose_To: 'À',
  moveEstCloseDate_Backward: 'Vers le haut',
  moveEstCloseDate_Forward: 'Suivant',
  update_To_Caption: 'A :',
  update_Property_Caption: 'Mettre à jour :',
  updateMultipleOpps_Caption: 'Mettre à jour les opportunités',
  updateProp_AcctMgr: 'Responsable du compte',
  updateProp_Comments: 'Commentaires',
  updateProp_EstClose: 'Date de clôture approx.',
  updateProp_Forecast: 'Ajouter à la prévision',
  updateProp_Probability: 'Prob. de clôture %',
  lookupActMgrText: 'Responsable du compte',
  lookupNameColText: 'Nom',
  lookupTitleColText: 'Titre',
  lookupDepartmentColText: 'Service',
  lookupRegionColText: 'Région',
  lookupTypeColText: 'Type',
  errorUnspecifiedValue: 'Veuillez spécifier un point de terminaison valide avant de continuer.',
  errorRequestingJobMgr: 'Une erreur est produite lors de la mise à jour : ${0}' }
));
},
'Sage/UI/nls/fr/EditCalendarUsers':function(){
define("Sage/UI/nls/fr/EditCalendarUsers", {
    selectAllText: 'Sélectionner tous',
    findItemText: 'Rechercher un utilisateur :',
    findText: 'Rechercher',
    clearText: 'Effacer',
    dialogTitle: 'Modifier les utilisateurs de agenda',
    okText: 'OK',
    cancelText: 'Annuler',
    maxUsersErrorMessage: 'Vous ne pouvez pas sélectionner plus de ${0} utilisateurs (le vôtre inclus). Désélectionnez un des utilisateurs sélectionnés, puis réessayez.',
    updateErrorMessage: 'Une erreur est survenue lors de la mise à jour des utilisateurs de agenda'
});
},
'Sage/MainView/ReportMgr/Crystal/nls/fr/CrystalReportParametersDialog':function(){
define("Sage/MainView/ReportMgr/Crystal/nls/fr/CrystalReportParametersDialog", (
{ txtDialogTitle: 'Saisir les valeurs',
  cmdBack_Caption: '< Précédent',
  cmdNext_Caption: 'Suivant >',
  cmdCancel_Caption: 'Annuler' }
));
},
'Sage/QuickForms/Design/nls/fr/DateTimePickerControlDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/DateTimePickerControlDesigner", (
{ displayNameText: 'Sélecteur de DateHeure' }
));
},
'Sage/UI/Controls/nls/fr/HelpMenu':function(){
define("Sage/UI/Controls/nls/fr/HelpMenu", {
    helpText: 'Aide',
    aboutText: 'A propos de',
    webClientHelpText: 'Aide Client Web',
    gettingStartedText: 'Guide de mise en route',
    quickReferenceText: 'Carte de référence rapide'
});
},
'Sage/QuickForms/Design/Editors/nls/fr/LayoutPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/LayoutPropertyEditor", (
{ titleText: 'Présentation',
  positionText: 'Emplacement',
  sizeText: 'Taille',
  rowText: 'Ligne :',
  rowTooltipText: 'Numéro de ligne du contrôle.',
  columnText: 'Colonne :',
  columnTooltipText: 'Numéro de colonne du contrôle.',
  rowSpanText: 'Largeur de ligne :',
  rowSpanTooltipText: 'Nombre de cellules que le contrôle occupe verticalement.',
  columnSpanText: 'Largeur de colonne :',
  columnSpanTooltipText: 'Nombre de cellules que le contrôle occupe horizontalement.' }
));
},
'Sage/TaskPane/nls/fr/UserTasklet':function(){
define("Sage/TaskPane/nls/fr/UserTasklet", (
{ addToRoleTitle: 'Ajouter au rôle',
  resetUsersTitle: 'Réinitialiser les utilisateurs',
  associateContactTitle: 'Associer au contact',
  disAssociateContactTitle: 'Dissocier du contact',
  disAssociateDialogTitle: 'Dissocier un contact',
  confirmDisAssociate: 'Voulez-vous vraiment dissocier ${0} utilisateur sélectionné du contact auquel il était associé ?',
  confirmDisAssociateMultiple: 'Voulez-vous vraiment dissocier ${0} utilisateurs sélectionnés de tous les contacts auxquels ils étaient associés ?',
  associationExistsMessage: 'utilisateur que vous avez sélectionné est déjà associé à un contact. Pour associer cet utilisateur à un autre contact, vous devez abord dissocier utilisateur du contact.',
  multipleSelectionErrorMessage: 'Vous ne pouvez pas réaliser cette tâche pour plusieurs utilisateurs. \n Sélectionnez un seul utilisateur, puis exécutez de nouveau la tâche.',
  noSelectionErrorMessage: 'Vous devez sélectionner au moins un utilisateur à dissocier. \n Veuillez sélectionner au moins un utilisateur, puis exécuter de nouveau la tâche.',
  singleSelectionErrorMessage: 'Vous devez sélectionner un utilisateur à dissocier. \n Veuillez sélectionner un seul utilisateur, puis exécuter de nouveau la tâche.' }
));
},
'Sage/UI/Alarms/nls/fr/ActivityAlarm':function(){
define("Sage/UI/Alarms/nls/fr/ActivityAlarm", {
    noSubjectText: 'Aucun sujet',
    contactText: 'Contact',
    accountText: 'Compte',
    opportunityText: 'Opportunité',
    leadText: 'Lead',
    companyText: 'Société',
    recurringText: 'Périodicité',
    ticketText: 'Ticket',
    leaderText: 'Responsable',
    locationText: 'Emplacement'
});
},
'Sage/MainView/Opportunity/nls/fr/OpportunityStatistics':function(){
define("Sage/MainView/Opportunity/nls/fr/OpportunityStatistics", (
{ opportunityStatistics_Caption: 'Statistiques de opportunité',
  loadingMessge: 'Chargement ...',
  opportunityCount: 'Nombre opportunités',
  salesPotentialTotal: 'Potentiel total des ventes (moyenne)',
  weightedPotentialTotal: 'Total pondéré prévisionnel (moyenne)',
  averageCloseProbability: 'Probabilité de clôture moyenne',
  actualAmountTotal: 'Montant total réel (Moyenne)',
  averageDaysOpen: 'Nbre moyen de jours ouverts',
  rangeEstClose: 'Période de clôture est. (déb - fin)',
  btnClose_Caption: 'Fermer',
  errorRequestingStatistics: 'Désolé, une erreur est produite lors de la demande des statistiques opportunité.' }
));
},
'Sage/TaskPane/nls/fr/GroupListTasklet':function(){
﻿define(
    "Sage/TaskPane/nls/fr/GroupListTasklet", ({
        GroupListOptionsTitle: 'Options de la liste de groupe',
        maximizeTitle: 'Etendre la liste de groupe',
        minimizeTitle: 'Réduire la liste de groupe'
    })
);
},
'Sage/MainView/ReportMgr/Crystal/nls/fr/CrystalReportConditionEditor':function(){
define("Sage/MainView/ReportMgr/Crystal/nls/fr/CrystalReportConditionEditor", {
    dlgCrystalReportConditionDetails_Title: 'Ajouter/modifier une condition',
    cmdOK_Caption: 'OK',
    cmdCancel_Caption: 'Annuler',
    cmbConditionType_Caption: 'Rechercher par',
    txtInvalidParameterTitle: 'Paramètre non valide',
    txtInvalidParameterMessage: 'Paramètre non valide : ${0}',
    lkpUser_Caption: 'Utilisateur',
    lkpGroup_Caption: 'Groupe',
    txtSelectUser: 'Sélectionner un utilisateur',
    chkCurrentUser_Caption: 'Utilisateur Actuel',
    txtName: 'Nom',
    txtOK: 'OK',
    txtSelectGroup: 'Sélectionner un groupe',
    cmbDateRange_Caption: 'Intervalle de dates',
    cmbDateRange_SpecificDates_Caption: 'Dates spécifiques',
    cmbDateRange_ThisWeek_Caption: 'Cette semaine',
    cmbDateRange_ThisMonth_Caption: 'Ce mois',
    cmbDateRange_ThisQuarter_Caption: 'Ce trimestre',
    cmbDateRange_ThisYear_Caption: 'Cette année',
    cmbDateRange_LastWeek_Caption: 'Semaine dernière',
    cmbDateRange_LastMonth_Caption: 'Mois dernier',
    cmbDateRange_LastQuarter_Caption: 'Trimestre dernier',
    cmbDateRange_LastYear_Caption: 'Année dernière',
    cmbDateRange_MonthToDate_Caption: 'Mois à ce jour',
    cmbDateRange_QuarterToDate_Caption: 'Trimestre à ce jour',
    cmbDateRange_YearToDate_Caption: 'Année à ce jour',
    dtFromDate_Caption: 'De',
    dtToDate_Caption: 'À',
    cmbTable_Caption: 'Table',
    cmbField_Caption: 'Champ',
    cmbOperator_Caption: 'Opérateur',
    txtValue_Caption: 'Valeur',
    txtNumericValueFrom_Caption: 'De',
    txtNumericValueTo_Caption: 'À'
});
},
'Sage/MainView/IntegrationContract/nls/fr/AdvancedSearchOptions':function(){
define("Sage/MainView/IntegrationContract/nls/fr/AdvancedSearchOptions", (
{ dialogCaption: 'Lier à la comptabilité',
  searchOptionsHeader: 'Rechercher les correspondances dans ',
  searchOptionsText: 'Les critères suivants ont été utilisés dans la recherche précédente. Modifiez les critères pour une nouvelle recherche. Cliquez sur OK pour commencer la recherche.',
  propertyText: 'Propriété',
  operatorText: 'Opérateur',
  searchText: 'Valeur de recherche',
  loadingText: 'Chargement ...',
  loadingDisplay: 'Recherche des résultats...',
  hideImgAltText: 'Supprimer la condition',
  addImgAltText: 'Ajouter une condition',
  okText: 'OK',
  cancelText: 'Annuler' }
));
},
'Sage/QuickForms/Design/nls/fr/ColumnDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/ColumnDesigner", (
{ displayNameText: 'Colonne' }
));
},
'Sage/MainView/JobMgr/templates/nls/fr/JobDefinitionDetailSummary':function(){
define("Sage/MainView/JobMgr/templates/nls/fr/JobDefinitionDetailSummary", (
{ txtJobName_Caption: 'Nom de la tâche :',
  txtDescription_Caption: 'Description :' }
));
},
'Sage/UI/nls/fr/SearchMenuItem':function(){
define("Sage/UI/nls/fr/SearchMenuItem", {
    findText: 'Rechercher',
    clearText: 'Effacer',
    showHiddenText: 'Afficher les éléments masqués : '
});
},
'Sage/Library/nls/fr/DocumentProperties':function(){
define("Sage/Library/nls/fr/DocumentProperties", (
{ Abstract: 'Abstrait',
  Cancel: 'Annuler',
  DocumentProperties: 'Propriétés du document',
  Created: 'Créé',
  Description: 'Description',
  Directory: 'Répertoire',
  DoNotExpire: 'Toujours valide',
  Expires: 'Expire le',
  FileName: 'Nom de fichier',
  ForceDistribution: 'Forcer la distribution de ce fichier',
  InvalidFileName: 'Un nom de fichier ne peut pas contenir les caractères suivants : \\ / : * ? " < > |',
  Never: 'Jamais',
  OK: 'OK',
  Revised: 'Révisé',
  Size: 'Taille',
  Status: 'Etat' }
));
},
'Sage/UI/nls/fr/NotesHistoryList':function(){
define("Sage/UI/nls/fr/NotesHistoryList", {
    typeText: 'Type',
    showDbChangesText: 'Afficher les modifications de la base de données',
    selectAllText: 'Sélectionner tous',
    dateText: 'Date',
    dateTimeText: 'Date/Heure',
    dateRangeText: 'Intervalle de dates',
    userText: 'Utilisateur',
    accountText: 'Compte',
    contactText: 'Contact',
    opportunityText: 'Opportunité',
    regardingText: 'Objet',
    notesText: 'Notes',
    resultText: 'Résultat',
    categoryText: 'Catégorie',
    sendEmailText: 'Envoyer par E-mail',
    sendToWordText: 'Envoyer vers MS Word',
    addNoteText: 'Ajouter une note',
    completeAnActivityText: 'Terminer une activité',
    helpText: 'Aide',
    pleaseSelectRecordsText: 'Veuillez sélectionner un ou plusieurs enregistrements',
    UnableToFindWordMsg: 'Impossible de démarrer Microsoft Word.  Vérifiez vos paramètres de sécurité.',
    printedOnText: 'Imprimé le'
});
},
'Sage/Utility/nls/fr/File':function(){
﻿define("Sage/Utility/nls/fr/File", {
    unableToUploadText: 'SalesLogix Desktop Integration Module doit être installé pour utiliser cette fonctionnalité.',
    unknownSizeText: 'Inconnu',
    largeFileWarningText: 'ATTENTION : Cette demande dépasse la taille limite définie par votre administrateur et n\'a pas pu télécharger.',
    largeFileWarningTitle: 'Avertissement'
});
},
'Sage/MainView/ReportMgr/nls/fr/HistoryListPanelConfig':function(){
define("Sage/MainView/ReportMgr/nls/fr/HistoryListPanelConfig", {
    colNameDate: 'Date',
    colNameScheduleName: 'Description',
    colNameExecutionType: 'Type exécution',
    colNameRunAs: 'Exécuter comme',
    colNameScheduledBy: 'Planifié par',
    colNameReportName: 'Rapport',
    colNameSize: 'Taille du fichier',
    colNameOutputFormat: 'Format de sortie',
    colNameReportType: 'Type'
});
},
'Sage/MainView/JobMgr/templates/nls/fr/ScheduleDetailSummary':function(){
define("Sage/MainView/JobMgr/templates/nls/fr/ScheduleDetailSummary", {
    txtScheduleName_Caption: 'Planification :',
    txtJobName_Caption: 'Nom de la tâche :',
    txtUser_Caption: 'Scheduled By:',
    txtRunAs_Caption: 'Run As:',
    txtStartTime_Caption: 'Heure de début:',
    txtEndTime_Caption: 'Heure de fin:',
    txtNextRunTime_Caption: 'Prochaine heure exécution:',
    txtRepeatCount_Caption: 'Nombre de répétitions :',
    txtRepeatInterval_Caption: 'Intervalle de répétition :',
    txtPriority_Caption: 'Priorité :',
    txtStatus_Caption: 'Etat :',
    txtExecutionCount_Caption: 'Nombre exécutions :'
});
},
'Sage/QuickForms/Design/nls/fr/UrlControlDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/UrlControlDesigner", (
{ displayNameText: 'Url' }
));
},
'Sage/TaskPane/nls/fr/ContactTasksTasklet':function(){
define("Sage/TaskPane/nls/fr/ContactTasksTasklet", (
{ associateContactTitle: 'Associer à utilisateur',
  disAssociateContactTitle: 'Dissocier de utilisateur',
  disAssociateDialogTitle: 'Dissocier un utilisateur',
  confirmDisAssociate: 'Voulez-vous vraiment dissocier le ${0} contact sélectionné un utilisateur associé?',
  confirmDisAssociateMultiple: 'Voulez-vous vraiment dissocier les ${0} contacts sélectionnés de tous les utilisateurs associés?',
  associationExistsMessage: 'Le contact sélectionné est déjà associé à un utilisateur. Pour associer ce contact à un autre utilisateur, vous devez tout abord dissocier le contact de utilisateur.',
  multipleSelectionErrorMessage: 'Vous ne pouvez effectuer cette tâche que pour un contact à la fois.  \n Veuillez sélectionner un seul contact, puis exécuter à nouveau la tâche.',
  noSelectionErrorMessage: 'Vous devez sélectionner au moins un contact à dissocier. \n Veuillez sélectionner au moins un contact, puis exécuter à nouveau la tâche.',
  singleSelectionErrorMessage: 'Vous devez sélectionner un contact à dissocier. \n Veuillez sélectionner un seul contact, puis exécuter à nouveau la tâche.' }
));
},
'Sage/MainView/ActivityMgr/templates/nls/fr/EventSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/fr/EventSummary", (
{ txtStartDate_Caption: 'Date de début :',
  txtEndDate_Caption: 'Date de fin :',
  txtLocation_Caption: 'Emplacement :',
  txtUser_Caption: 'Utilisateur :',
  txtDescription_Caption: 'Description :' }
));
},
'Sage/MainView/ReportMgr/Common/nls/fr/_WizardDialogBase':function(){
define("Sage/MainView/ReportMgr/Common/nls/fr/_WizardDialogBase", (
{ txtFinish: 'Terminer' }
));
},
'Sage/MainView/JobMgr/nls/fr/SchedulesListPanelConfig':function(){
define("Sage/MainView/JobMgr/nls/fr/SchedulesListPanelConfig", {
    colNameTriggerName: 'Planification',
    colNameJobName: 'Nom de la tâche',
    colNameUser: 'Prévue Par',
    colNameStartTimeUtc: 'Heure de début',
    colNameEndTimeUtc: 'Heure de fin',
    colNamePriority: 'Priorité',
    colNameStatus: 'Etat',
    colNameTimesTriggered: 'Nombre exécutions'
});
},
'Sage/Utility/File/nls/fr/GoogleDocPicker':function(){
define("Sage/Utility/File/nls/fr/GoogleDocPicker", {
    googleDocumentsTitle: 'Documents Google',
    couldNotOpenWindowMsg: 'Impossible ouvrir la fenêtre authentification. Veuillez vérifier vos paramètres de bloqueur de fenêtres contextuelles.'
});
},
'Sage/QuickForms/Design/nls/fr/ComboBoxControlDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/ComboBoxControlDesigner", (
{ displayNameText: 'Zone combinée' }
));
},
'Sage/MainView/ActivityMgr/nls/fr/LitRequestListPanelConfig':function(){
define("Sage/MainView/ActivityMgr/nls/fr/LitRequestListPanelConfig", (
{ colNameView: 'Affichage',
  colNameContact: 'Contact',
  colNameDescription: 'Description',
  colNameFillDate: 'Renseigné',
  colNameFillStatus: 'Etat',
  colNameOptions: 'Options',
  colNamePriority: 'Priorité',
  colNameReqestDate: 'Date de la demande',
  colNameSendDate: 'Date envoi',
  colNameSendVia: 'Envoyer via',
  colNameTotalCost: 'Coût total',
  colNameFillUser: 'Renseigner utilisateur',
  colNameReqestUser: 'Demander un utilisateur',
  colNameAccount: 'Compte',
  colNamePostalCode: 'Code postal' }
));
},
'Sage/MainView/ActivityMgr/nls/fr/HistoryEditor':function(){
define("Sage/MainView/ActivityMgr/nls/fr/HistoryEditor", (
{ labelWidth: '120',
  tabNameGeneralText: 'Général',
  tabNameAttachmentsText: 'Pièces jointes',
  scheduleText: 'Planification',
  startTimeText: 'Planifié',
  completedDateText: 'Terminé',
  timeLessText: 'Heure indéfinie',
  durationText: 'Durée',
  contactText: 'Contact',
  accountText: 'Compte',
  leadText: 'Lead',
  opportunityText: 'Opportunité',
  ticketText: 'Ticket',
  companyText: 'Société',
  regardingText: 'Objet',
  resultText: 'Résultat',
  notesText: 'Notes',
  priorityText: 'Priorité',
  leaderText: 'Responsable',
  categoryText: 'Catégorie',
  locationText: 'Emplacement',
  scheduledByFormatText: 'Planifié par ${user} le ${date}',
  cancelText: 'Annuler',
  okText: 'OK',
  deleteText: 'Supprimer',
  lookupActText: 'Rechercher un compte',
  lookupContactText: 'Rechercher un contact',
  lookupOpportunityText: 'Rechercher une opportunité',
  lookupTicketText: 'Rechercher un ticket',
  lookupLeadText: 'Recherche un lead',
  lookupLeaderText: 'Rechercher le responsable',
  lookupResourcesText: 'Recherche',
  mainPhoneText: 'Tél. principal',
  typeText: 'Type',
  subTypeText: 'Sous-Type',
  nameText: 'Nom',
  cityText: 'Ville',
  stateText: 'Département',
  workphoneText: 'Téléphone professionnel',
  emailText: 'E-mail',
  acctMgrText: 'Resp. du compte',
  descriptionText: 'Description',
  stageText: 'Phase',
  statusText: 'Etat',
  ownerText: 'Propriétaire',
  ticketNumberText: 'Numéro de ticket',
  phoneText: 'Téléphone',
  urgencyText: 'Priorité',
  areaText: 'Zone',
  recurringText: 'Périodicité',
  followupText: 'Suivi',
  noneText: 'Aucun',
  carryOverAttachmentsText: 'Reporter les pièces jointes',
  carryOverNotesText: 'Reporter les notes',
  asScheduledText: 'Telle que planifiée',
  insertText: 'Insérer',
  couldNotSaveErrorText: 'Impossible de sauvegarder historique car une erreur est produite.',
  deleteMessage: 'Vous êtes sur le point de supprimer définitivement cet enregistrement.',
  deleteTitle: 'Supprimer historique',
  couldNotDeleteErrorText: 'Impossible de supprimer historique car une erreur est produite.',
  postalText: 'Code postal',
  tabNameParticipants: 'Tous les participants' }
));
},
'Sage/Groups/nls/fr/GroupManager':function(){
define("Sage/Groups/nls/fr/GroupManager", (
{ ConfirmDeleteMessage: 'Voulez-vous vraiment supprimer le groupe actuel ?',
  ConfirmDeleteFmtMessage: 'Voulez-vous vraiment supprimer ce groupe : ${0}',
  InvalidSortStringMessage: 'Erreur : Chaîne de tri non valide - ',
  InvalidConditionStringMessage: 'Erreur : Chaîne de condition non valide - ',
  InvalidLayoutConditionStringMessage: 'Erreur : Chaîne de présentation non valide - ',
  noneSelectedTitle: 'Aucun enregistrement sélectionné',
  noneSelectedPromptFmt: 'Aucun enregistrement sélectionné. Le groupe entier, ${0} enregistrement(s), sera ajouté. Continuer ?',
  noneSelectedRemovePromptFmt: 'Aucun enregistrement sélectionné. Le groupe entier, ${0} enregistrement(s), sera supprimé. Continuer ?',
  noRecordsInGroup: 'Aucun enregistrement ne peut être sélectionné dans ce groupe.',
  newGroupTitle: 'Ajouter des enregistrements au nouveau groupe',
  newGroupNamePrompt: '${0} enregistrement(s) sélectionné(s) est (seront) ajouté(s) à ce nouveau groupe.<br><br>Nom du groupe :<br>${1}',
  newGroupRePrompt: '&nbsp;&nbsp;<i>Veuillez entrer un nom de groupe.</i>',
  invalidCharMsg: 'Le nom ne peut pas contenir : / \\ : * ? " <> | ni',
  groupNameText: 'Nom de groupe :',
  saveLookupDlgTitle: "Enregistrer les résultats de la recherche en tant que nouveau groupe",
  yesCaption: 'Oui',
  noCaption: 'Non',
  cancelCaption: 'Annuler',
  okCaption: 'OK',
  LOCALSTORE_NAMESPACE: 'GroupesSage',
  exportToExcel: "Cette méthode est plus disponible, consultez Sage.TaskPane.CommonTasksTasklet.exportToExcel." }
));
},
'Sage/QuickForms/Design/Editors/nls/fr/DateTimePickerAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/DateTimePickerAdvancedPropertyEditor", (
{ titleText: 'Avancé',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  controlInfoText: 'Info contrôle',
  dataText: 'Données',
  buttonToolTipText: 'Info-bulle de bouton :',
  buttonToolTipTooltipText: 'info-bulle à afficher lorsque utlisateur déplace le curseur de la souris sur la partie bouton du contrôle.',
  controlIdText: 'ID de contrôle :',
  controlIdTooltipText: 'Identifiant pour ce contrôle.',
  controlLabelPlacementText: 'Placement des étiquettes :',
  controlLabelPlacementTooltipText: 'Position des étiquettes par rapport au contrôle.',
  controlTypeText: 'Type de contrôle :',
  controlTypeTooltipText: 'Type de contrôle Saleslogix.',
  defaultDataBindingText: 'Associations de données :',
  defaultDataBindingTooltipText: 'Champ(s) de données dans la base de données utilisée par ce contrôle.',
  displayModeText: 'Mode affichage :',
  displayModeTooltipText: 'Mode affichage du contrôle : zone de texte, lien hypertexte ou texte brut.',
  enabledText: 'Activé :',
  enabledTooltipText: 'Permet à utilisateur interagir avec ce contrôle.',
  requiredText: 'Obligatoire :',
  requiredTooltipText: 'Requiert une valeur lors de enregistrement des données.',
  timelessText: 'Heure indéfinie :',
  timelessTooltipText: 'Utiliser la date sans heure et sans conversion DST.',
  visibleText: 'Visible :',
  visibleTooltipText: 'Afficher ou masquer ce contrôle sur le formulaire.',
  labelPlacementText: { left: 'Gauche', right: 'Droite', top: 'Haut', none: 'Aucun' },
  displayModeTypeText: 
   { AsControl: 'Comme contrôle',
     AsText: 'Comme texte',
     AsHyperlink: 'Comme lien hypertexte' } }
));
},
'Sage/QuickForms/Design/Editors/nls/fr/ComboBoxBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/ComboBoxBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  captionText: 'Légende :',
  captionTooltipText: 'étiquette à afficher sur le formulaire pour ce contrôle.',
  captionAlignmentText: 'Alignement de la légende :',
  captionAlignmentTooltipText: 'Justification du texte de étiquette.',
  isReadOnlyText: 'Lecture seule :',
  isReadOnlyTooltipText: 'Ne permet pas les modifications.',
  toolTipText: 'Info-bulle :',
  toolTipTooltipText: 'Court texte aide concernant le contrôle.',
  alignmentText: { left: 'Gauche', center: 'Centre', right: 'Droite' } }
));
},
'Sage/MainView/ReportMgr/nls/fr/ReportsListPanelConfig':function(){
define("Sage/MainView/ReportMgr/nls/fr/ReportsListPanelConfig", (
{ colNameReportName: 'Nom',
  colNameType: 'Type',
  colNameTable: 'Table',
  colNameCreateUser: 'Créé par',
  colNameCreateDate: 'Date de création',
  colNameLastExecutionDate: 'Dernière exécution',
  colNameLastExecutionUser: 'Dernière exécution par',
  colNameModifyUser: 'Modifié par',
  colNameModifyDate: 'Date de modification' }
));
},
'Sage/UI/Alarms/nls/fr/JobNotificationButton':function(){
define("Sage/UI/Alarms/nls/fr/JobNotificationButton", {
    notificationToolTip: 'Vous avez ${0} notifications de tâches.',
    notificationErrorToolTip: 'Une erreur s\'est produite lors de la récupération des notifications de tâches. Veuillez contacter votre administrateur.'
});
},
'Sage/MainView/ReportMgr/Crystal/nls/fr/CrystalReportWizardController':function(){
define("Sage/MainView/ReportMgr/Crystal/nls/fr/CrystalReportWizardController", (
    {
        txtOnDemandScheduleName: 'À la demande',
        txtReportSuccessfullyScheduled: 'Rapport bien planifié',
        txtDynamicParametersMessage: 'Les rapports contenant des paramètres dynamiques ne sont actuellement pas pris en charge.',
        txtError: 'Erreur',
        txtScheduleSuccessfullyUpdated: 'Planification mise à jour avec succès.',
        txtInvalidReportWithDynamicParameters: 'Impossible d\'exécuter ou de planifier le rapport "${0}:${1}", car il n\'est pas valide. Raison(s) : ${2}',
        txtInvalidDynamicParameterDatasource: 'Le paramètre dynamique "${p.name}" ("${p.promptText}") n\'est actuellement pas pris en charge, car sa source de données requiert la saisie d\'un paramètre.',
        txtInvalidDynamicParameterReason: 'Le paramètre dynamique "${p.name}" ("${p.promptText}") est incorrect : ${p.invalidDynamicParameterReason}',
        txtInvalidDynamicParameterUnknownReason: 'Le paramètre dynamique "${p.name}" ("${p.promptText}") est incorrect.'
    }
));
},
'Sage/MainView/JobMgr/nls/fr/JobDefinitionsListPanelConfig':function(){
define("Sage/MainView/JobMgr/nls/fr/JobDefinitionsListPanelConfig", (
{ colNameJobName: 'Nom de la tâche',
  colNameDescription: 'Description',
  colNameType: 'Type' }
));
},
'Sage/MainView/ActivityMgr/nls/fr/RecurringEditor':function(){
define("Sage/MainView/ActivityMgr/nls/fr/RecurringEditor", (
{ activityOccurrsText: 'Cette activité a lieu…',
  onceText: 'Une fois',
  dailyText: 'Quotidienne',
  weeklyText: 'Hebdomadaire',
  monthlyText: 'Mensuelle',
  yearlyText: 'Annuelle',
  occursOnceText: 'Cette activité ne se produit une seule fois',
  everyText: 'Chaque',
  daysText: 'Jour(s)',
  daysAfterText: 'Jour(s) après la fin',
  startRecurringText: 'Démarrer la périodicité : ',
  endAfterText: 'Terminer après',
  endOnText: 'Terminer la périodicité',
  occurrencesText: 'occurrences',
  weeksOnText: 'Semaine (s) sur',
  monText: 'Lundi',
  tueText: 'Mardi',
  wedText: 'Mercredi',
  thurText: 'Jeudi',
  friText: 'Vendredi',
  satText: 'Samedi',
  sunText: 'Dimanche',
  weeksAfterText: 'Semaine(s) après la fin',
  monthsOnText: 'Mois le jour',
  monthsOnTheText: 'Mois sur le',
  monthsAfterText: 'Moi(s) après la fin',
  firstText: '1er',
  secondText: '2e',
  thirdText: '3e',
  fourthText: '4e',
  lastText: 'Dernier',
  yearsOnText: 'Année(s) sur',
  yearsAfterText: 'Année(s) après la fin',
  janText: 'Janvier',
  febText: 'Février',
  marText: 'Mars',
  aprText: 'Avril',
  mayText: 'Mai',
  junText: 'Juin',
  julText: 'Juillet',
  augText: 'Août',
  sepText: 'Septembre',
  octText: 'Octobre',
  novText: 'Novembre',
  decText: 'Décembre',
  theText: 'Le',
  inText: 'Dans' }
));
},
'Sage/MainView/ReportMgr/Crystal/nls/fr/CrystalReportsUtility':function(){
define("Sage/MainView/ReportMgr/Crystal/nls/fr/CrystalReportsUtility", {
    txtCurrentUser: 'Utilisateur Actuel'
});
},
'Sage/QuickForms/Design/Editors/nls/fr/DataGridAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/DataGridAdvancedPropertyEditor", (
{ titleText: 'Avancé',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  controlInfoText: 'Info contrôle',
  dataText: 'Données',
  controlIdText: 'ID de contrôle :',
  controlIdTooltipText: 'Identifiant pour ce contrôle.',
  controlTypeText: 'Type de contrôle :',
  controlTypeTooltipText: 'Type de contrôle Saleslogix.',
  dataSourceText: 'Source de données :',
  dataSourceTooltipText: 'Source des données de ce contrôle, par exemple un autre contrôle ou une entité.',
  emptyTableRowText: 'Texte de la ligne de la table vide :',
  emptyTableRowTooltipText: 'Texte à afficher si aucune donnée est affichée dans la grille.',
  expandableRowsText: 'Lignes extensibles :',
  expandableRowsTooltipText: 'Permet à utilisateur étendre les lignes de la grille pour afficher plus de texte.',
  renderVerticalText: 'Rendre vertical :',
  renderVerticalTooltipText: 'Afficher les lignes de la grille comme des colonnes.',
  showSortIconText: 'Afficher icône de tri :',
  showSortIconTooltipText: 'Afficher icône de tri sur les colonnes triables.',
  visibleText: 'Visible :',
  visibleTooltipText: 'Afficher ou masquer ce contrôle sur le formulaire.' }
));
},
'Sage/MainView/ReportMgr/nls/fr/BaseListPanelConfig':function(){
define("Sage/MainView/ReportMgr/nls/fr/BaseListPanelConfig", (
{ titleFmtString: '${0}' }
));
},
'Sage/QuickForms/Design/nls/fr/CurrencyControlDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/CurrencyControlDesigner", (
{ displayNameText: 'Devise' }
));
},
'Sage/QuickForms/Design/nls/fr/DataGridControlDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/DataGridControlDesigner", (
{ displayNameText: 'Grille de données',
  emptyTableRowStringText: 'Aucun enregistrement ne correspond aux critères de sélection.' }
));
},
'Sage/QuickForms/Design/nls/fr/PickListControlDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/PickListControlDesigner", (
{ displayNameText: 'Liste de sélection' }
));
},
'Sage/MainView/ActivityMgr/templates/nls/fr/LitRequestSummary':function(){
define("Sage/MainView/ActivityMgr/templates/nls/fr/LitRequestSummary", (
{ txtSendDate_Caption: 'Envoyer :',
  txtScheduled_Caption: 'Planifié :',
  txtStatus_Caption: 'Etat :',
  txtRequestedBy_Caption: 'Demandé par :',
  lnkContact_Caption: 'Contact :',
  txtPriority_Caption: 'Priorité :',
  txtVia_Caption: 'Envoyer via :',
  txtCost_Caption: 'Coût total :',
  txtWorkPhone_Caption: 'N° de téléphone prof. :',
  txtPostalCode_Caption: 'Code postal :',
  txtHomePhone_Caption: 'N° de téléphone personnel',
  lnkAccount_Caption: 'Compte :',
  txtRequestDate_Caption: 'Requis :' }
));
},
'Sage/QuickForms/Design/Editors/nls/fr/CheckBoxBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/CheckBoxBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  captionText: 'Légende :',
  captionTooltipText: 'étiquette à afficher sur le formulaire pour ce contrôle.',
  captionAlignmentText: 'Alignement de la légende :',
  captionAlignmentTooltipText: 'Justification du texte de étiquette.',
  isReadOnlyText: 'Lecture seule :',
  isReadOnlyTooltipText: 'Ne permet pas les modifications.',
  toolTipText: 'Info-bulle :',
  toolTipTooltipText: 'Court texte aide concernant le contrôle.',
  alignmentText: { left: 'Gauche', center: 'Centre', right: 'Droite' } }
));
},
'Sage/Library/nls/fr/FolderHandler':function(){
define("Sage/Library/nls/fr/FolderHandler", (
{ AccessError: "Votre rôle ne vous permet pas exécuter cette action.",
  AddFolderError: "Une erreur inattendue est survenue lors de la tentative ajout un dossier de bibliothèque.",
  Cancel: 'Annuler',
  Confirm: 'Confirmer',
  DeleteFolderCnfmFmt: "Voulez-vous vraiment supprimer le dossier \"${0}\" et tout ce il contient ?",
  DeleteFolderError: "Une erreur inattendue est survenue lors de la tentative de suppression un dossier de bibliothèque.",
  DontDeleteRoot: 'Veuillez ne pas effacer le dossier racine.',
  DontEditRoot: 'Veuillez ne pas modifier le nom du dossier racine.',
  EnterFolderName: 'Veuillez saisir le nom du nouveau dossier :',
  EnterNewFolderName: 'Veuillez saisir le nouveau nom de ce dossier.',
  FolderUpdateConflictError: "Le dossier a été mis à jour par un autre utilisateur, veuillez actualiser et réessayer.",
  InvalidFolderName: 'Un nom de dossier ne peut contenir aucun des caractères suivants : \\ / : * ? " < > |',
  NewFolder: 'Nouveau dossier',
  No: 'Non',
  OK: 'OK',
  PleaseSelectFolder: 'Veuillez sélectionner un dossier.',
  RenameFolderError: "Une erreur inattendue est survenue lors du changement de nom un dossier de bibliothèque.",
  Yes: 'Oui' }
));
},
'Sage/QuickForms/Design/Editors/nls/fr/ComboBoxAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/ComboBoxAdvancedPropertyEditor", (
{ titleText: 'Avancé',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  controlInfoText: 'Info contrôle',
  dataText: 'Données',
  itemGroupText: 'Eléments',
  controlIdText: 'ID de contrôle :',
  controlIdTooltipText: 'Identifiant pour ce contrôle.',
  controlLabelPlacementText: 'Placement des étiquettes :',
  controlLabelPlacementTooltipText: 'Position des étiquettes par rapport au contrôle.',
  controlTypeText: 'Type de contrôle :',
  controlTypeTooltipText: 'Type de contrôle Saleslogix.',
  dataSourceText: 'Source de données :',
  dataSourceTooltipText: 'Source des données de ce contrôle, par exemple un autre contrôle ou une entité.',
  defaultDataBindingText: 'Associations de données :',
  defaultDataBindingTooltipText: 'Champ(s) de données dans la base de données utilisée par ce contrôle.',
  enabledText: 'Activé :',
  enabledTooltipText: 'Permet à utilisateur interagir avec ce contrôle.',
  itemsText: 'Éléments :',
  itemsTooltipText: 'Valeurs que utilisateur peut sélectionner.',
  textFieldText: 'Champ de texte :',
  textFieldTooltipText: 'Le nom du champ de source de données utilisé pour renseigner la partie texte visible des éléments de la liste.',
  valueFieldText: 'Champ de valeur :',
  valueFieldTooltipText: 'Le nom du champ de source de données utilisé pour renseigner la partie valeur des éléments de la liste.',
  visibleText: 'Visible :',
  visibleTooltipText: 'Afficher ou masquer ce contrôle sur le formulaire.',
  labelPlacementText: { left: 'Gauche', right: 'Droite', top: 'Haut', none: 'Aucun' },
  hasItemsText: 'Défini',
  noItemsText: 'Non défini' }
));
},
'Sage/MainView/Contact/nls/fr/ContactSearchForDuplicates':function(){
define("Sage/MainView/Contact/nls/fr/ContactSearchForDuplicates", (
{ svAccount_Caption: 'Compte :',
  svCompany_Caption: 'Société :',
  svEmail_Caption: 'E-mail :',
  svName_Caption: 'Nom :',
  svTitle_Caption: 'Titre :',
  svType_Caption: 'Type :',
  svSubType_Caption: 'Sous-type :',
  svAccMgr_Caption: 'Resp. du compte :',
  svHomePhone_Caption: 'N° de téléphone domicile :',
  svWorkPhone_Caption: 'N° de téléphone prof. :',
  svMobilePhone_Caption: 'Téléphone mobile :',
  svStatus_Caption: 'Etat :',
  svWebAddress_Caption: 'Web :',
  svEntityAccount_Caption: 'Compte',
  svEntityLead_Caption: 'Lead',
  svEntityContact_Contact: 'Contact',
  svTollFree_Caption: 'Numéro vert :',
  svIndustry_Caption: 'Secteur :',
  svDivision_Caption: 'Division :',
  svMainPhone_Caption: 'Téléphone principal :',
  LeadSummaryView_Title: 'Vue Résumé - Lead',
  ContactSummaryView_Title: 'Vue Résumé - Contact',
  AccountSummaryView_Title: 'Vue Résumé - Compte',
  closeText: 'Fermer',
  errorLoadingSummaryView: 'Une erreur est produite lors du chargement de la vue Résumé : ${0}' }
));
},
'Sage/QuickForms/Design/Editors/nls/fr/DateTimePickerBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/DateTimePickerBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  captionText: 'Légende :',
  captionTooltipText: 'étiquette à afficher sur le formulaire pour ce contrôle.',
  captionAlignmentText: 'Alignement de la légende :',
  captionAlignmentTooltipText: 'Justification du texte de étiquette.',
  displayDateText: 'Afficher la date :',
  displayDateTooltipText: 'Afficher la partie date.',
  displayTimeText: 'Afficher heure :',
  displayTimeTooltipText: 'Afficher la partie heure.',
  isReadOnlyText: 'Lecture seule :',
  isReadOnlyTooltipText: 'Ne permet pas les modifications.',
  toolTipText: 'Info-bulle :',
  toolTipTooltipText: 'Court texte aide concernant le contrôle.',
  alignmentText: { left: 'Gauche', center: 'Centre', right: 'Droite' } }
));
},
'Sage/TaskPane/nls/fr/AccountingTasksTasklet':function(){
define("Sage/TaskPane/nls/fr/AccountingTasksTasklet", (
{ updatePricingRecords: 'Vous ne pouvez sélectionner une seul enregistrement lorsque vous utilisez cette option.' }
));
},
'Sage/QuickForms/Design/Editors/nls/fr/DataGridBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/DataGridBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  dataText: 'Données',
  captionText: 'Légende :',
  captionTooltipText: 'étiquette à afficher sur le formulaire pour ce contrôle.',
  captionAlignmentText: 'Alignement de la légende :',
  captionAlignmentTooltipText: 'Justification du texte de étiquette.',
  pageSizeText: 'Taille de la page :',
  pageSizeTooltipText: 'Le nombre enregistrements de la grille à afficher sur une seule page.',
  resizableColumnsText: 'Colonnes redimensionnables :',
  resizableColumnsTooltipText: 'Permet à utilisateur de redimensionner les colonnes.',
  alignmentText: { left: 'Gauche', center: 'Centre', right: 'Droite' } }
));
},
'Sage/QuickForms/Design/Editors/nls/fr/CurrencyBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/CurrencyBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  captionText: 'Légende :',
  captionTooltipText: 'étiquette à afficher sur le formulaire pour ce contrôle.',
  captionAlignmentText: 'Alignement de la légende :',
  captionAlignmentTooltipText: 'Justification du texte de étiquette.',
  isReadOnlyText: 'Lecture seule :',
  isReadOnlyTooltipText: 'Ne permet pas les modifications.',
  toolTipText: 'Info-bulle :',
  toolTipTooltipText: 'Court texte aide concernant le contrôle.',
  alignmentText: { left: 'Gauche', center: 'Centre', right: 'Droite' } }
));
},
'Sage/UI/nls/fr/EditableGrid':function(){
define("Sage/UI/nls/fr/EditableGrid", {
    unsavedDataText: '*données non enregistrées',
    addText: 'Ajouter',
    deleteText: 'Supprimer',
    saveText: 'Enregistrer',
    cancelText: 'Annuler',
    noSelectionsText: 'Aucun enregistrement est sélectionné.',
    confirmDeleteFmtTxt: 'Voulez-vous vraiment supprimer ces ${0} éléments ?',
    yesText: 'Oui',
    noText: 'Non',
    createItemsInvalidArrayText: 'Le paramètre des éléments dans Sage.UI.EditableGrid.createItems() doit être un tableau.',
    recordCountFormatString: 'Enregistrements ${0} - ${1} sur ${2}',
    noDataMessage: 'Aucun enregistrement ne correspond aux critères de sélection.',
    dirtyDataMessage: 'Vous avez des données non-enregistrées.  Si vous continuez, vous perdrez les modifications que vous avez effectuées.',
    okText: 'OK'
});
},
'Sage/MainView/IntegrationContract/nls/fr/SalesQuoteRTDV':function(){
﻿define(
    "Sage/MainView/IntegrationContract/nls/fr/SalesQuoteRTDV", ({
        dialogCaption: "Détails du devis",
        loadingText: "Chargement ...",
        lblSalesQuoteCaption: "Devis :",
        lblStatusCaption: "Etat :",
        lblGrossTotalCaption: "Montant du devis :",
        lblQuoteDateCaption: "Date du devis :",
        lblTaxTotalCaption: "Montant de la taxe :",
        lblHoldStatusCaption: "Statut en attente :",
        lblCurrencyCaption: "Devise :",
        lblTypeCaption: "Type :",
        lblCostTotalCaption: "Coût total :",
        lblPONumberCaption: "N° de BdC :",
        lblProfitTotalCaption: "Total des bénéfices :",
        lblQuotationCaption: "Devis :",
        lblInvoiceStatusCaption: "Statut de la facture :",
        lblContactCaption: "Contact :",
        lblDeliveryDateCaption: "Date de livraison :",
        lblDueDateCaption: "Date d'échéance :",
        lblPriceListCaption: "Liste de prix :",
        lblCarrierCaption: "Transporteur :",
        lblNetTotalCaption: "Total net :",
        lblAllocationStatusCaption: "Statut d'allocation :",
        lblDiscountTotalCaption: "Total de la remise :",
        lblDeliveryStatusCaption: "Statut de livraison :",
        lblChargesTotalCaption: "Total facturé :",
        detailsTabTitle: "Détails",
        salesPersonsTabTitle: "Représentant commercial :",
        addressTabTitle: "Adresses",
        salesQuoteLinesTabTitle: "Lignes du devis",
        paymentsTabTitle: "Paiements",
        deliveriesTabTitle: "Livraisons",
        grdSalesQuote_Edit: "Modifier",
        grdSalesQuote_QuoteNumber: "Numéro du devis",
        grdSalesQuote_QuoteDate: "Date du devis",
        grdSalesQuote_Status: "Etat",
        grdSalesQuote_HoldStatus: "Statut en attente",
        grdSalesQuote_Type: "Type",
        grdSalesQuote_PO: "Numéro de BdC",
        grdSalesQuote_NetTotal: "Total net",
        grdSalesQuote_DiscountTotal: "Total de la remise",
        grdSalesQuote_ChargesTotal: "Total des frais",
        grdSalesQuote_TaxTotal: "Montant de la taxe",
        grdSalesQuote_GrossTotal: "Total brut",
        grdSalesQuote_Currency: "Devise",
        grdSalesPersons_Name: "Nom",
        grdSalesPersons_Type: "Type",
        grdSalesPersons_Extension: "Extension",
        grdSalesPersons_Relationship: "Relation",
        grdAddress_Name: "Nom",
        grdAddress_Address1: "Adresse 1",
        grdAddress_Address2: "Adresse 2",
        grdAddress_City: "Ville",
        grdAddress_State: "Département",
        grdAddress_Zip: "Code postal",
        grdItems_Line: "Numéro de la ligne",
        grdItems_Type: "Type",
        grdItems_Commodity: "Marchandise",
        grdItems_CommodityVariant: "Variable",
        grdItems_CommodityDimension: "Dimension",
        grdItems_UnitOfMeasure: "Unité",
        grdItems_Location: "Emplacement",
        grdItems_PriceList: "Liste des prix",
        grdItems_Quantity: "Quantité",
        grdItems_InitialPrice: "Prix d'origine",
        grdItems_ActualPrice: "Prix réel",
        grdItems_NetTotal: "Total net",
        grdItems_ChargesTotal: "Total des frais",
        grdItems_DiscountTotal: "Total de la remise",
        grdItems_TaxTotal: "Montant de la taxe",
        grdItems_GrossTotal: "Total brut",
        grdPayments_Date: "Date du paiement",
        grdPayments_Name: "Nom",
        grdPayments_Type: "Type",
        grdPayments_Status: "Etat",
        grdPayments_NetTotal: "Total net",
        grdPayments_Discounts: "Remises",
        grdPayments_Charges: "Frais",
        grdPayments_Tax: "TVA",
        grdPayments_GrossTotal: "Total brut",
        grdPayments_Currency: "Devise",
        grdPayments_TenderType: "Type de l'appel d'offre",
        grdPayments_TenderReference: "Référence de l'appel d'offre",
        grdPayments_ProcessDate: "Date d'exécution",
        grdDeliveries_Number: "Nombre",
        grdDeliveries_Type: "Type",
        grdDeliveries_Status: "Etat",
        grdDeliveries_RequestedDate: "Date de la demande",
        grdDeliveries_ActualDate: "Date réelle",
        grdDeliveries_ActualTime: "Heure réelle",
        grdDeliveries_RequestedQuantity: "Quantité demandée",
        grdDeliveries_DeliveredQuantity: "Quantité livrée",
        grdDeliveries_Method: "Méthode",
        grdDeliveries_Carrier: "Transporteur",
        grdDeliveries_CarrierReference: "Référence du transporteur",
        grdDeliveries_ExceptionReason: "Motif de l'exception",
        errorERPRequest: "Une erreur s'est produite lors de l'affichage des détails du devis des systèmes de comptabilité. ",
        errorERPRequestDetails: "${0}, ${1} Demande : ${2}",
        btnCloseCaption: "Fermer"
    })
);
},
'Sage/MainView/SecurityMgr/nls/fr/SecurityProfile':function(){
define("Sage/MainView/SecurityMgr/nls/fr/SecurityProfile", (
{ securityProfile_Caption: 'Profil de sécurité',
  btnCancel_Caption: 'Annuler',
  ok_Text: 'OK',
  description_Text: 'Description',
  profileType_Text: 'Type de profil' }
));
},
'Sage/MainView/ReportMgr/nls/fr/ReportWizardController':function(){
﻿define("Sage/MainView/ReportMgr/nls/fr/ReportWizardController", {
    txtLoadingScheduleDetails: 'Chargement des détails de planification',
    txtError: 'Erreur',
    txtCannotDetermineReportId: 'Impossible de déterminer l\'identifiant du rapport.',
    txtCannotDetermineReportNameOrFamily: 'Impossible de déterminer le nom ou la famille du rapport.',
    txtLoading: 'Chargement en cours',
    txtLoadingReport: 'Chargement du rapport',
    txtSorryAnErrorOccuredLoadingReport: 'Désolé, une erreur s\'est produite lors du chargement du rapport : ${0} ${1}.'
});
},
'Sage/QuickForms/Design/Editors/nls/fr/UserAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/UserAdvancedPropertyEditor", (
{ titleText: 'Avancé',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  controlInfoText: 'Info contrôle',
  dataText: 'Données',
  controlIdText: 'ID de contrôle :',
  controlIdTooltipText: 'Identifiant pour ce contrôle.',
  controlLabelPlacementText: 'Placement des étiquettes :',
  controlLabelPlacementTooltipText: 'Position des étiquettes par rapport au contrôle.',
  controlTypeText: 'Type de contrôle :',
  controlTypeTooltipText: 'Type de contrôle Saleslogix.',
  defaultDataBindingText: 'Associations de données :',
  defaultDataBindingTooltipText: 'Champ(s) de données dans la base de données utilisée par ce contrôle.',
  enabledText: 'Activé :',
  enabledTooltipText: 'Permet à utilisateur interagir avec ce contrôle.',
  lookupBindingModeText: 'Mode association de la recherche :',
  lookupBindingModeTooltipText: 'Indique si vous souhaitez effectuer une association à un objet entité ou à une valeur de chaîne.',
  requiredText: 'Obligatoire :',
  requiredTooltipText: 'Requiert une valeur lors de enregistrement des données.',
  visibleText: 'Visible :',
  visibleTooltipText: 'Afficher ou masquer ce contrôle sur le formulaire.',
  labelPlacementText: { left: 'Gauche', right: 'Droite', top: 'Haut', none: 'Aucun' },
  bindingModeText: { Object: 'Objet', String: 'Chaîne' } }
));
},
'Sage/MainView/ReportMgr/nls/fr/ReportManagerUtility':function(){
define("Sage/MainView/ReportMgr/nls/fr/ReportManagerUtility", (
{}
));
},
'Sage/UI/nls/fr/SpeedSearch':function(){
define("Sage/UI/nls/fr/SpeedSearch", {
    standardText: 'Standard',
    advancedText: 'Avancé',
    speedSearchText: 'SpeedSearch'
});
},
'Sage/QuickForms/Design/Editors/nls/fr/CurrencyAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/CurrencyAdvancedPropertyEditor", (
{ titleText: 'Avancé',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  controlInfoText: 'Info contrôle',
  dataText: 'Données',
  controlIdText: 'ID de contrôle :',
  controlIdTooltipText: 'Identifiant pour ce contrôle.',
  controlLabelPlacementText: 'Placement des étiquettes :',
  controlLabelPlacementTooltipText: 'Position des étiquettes par rapport au contrôle.',
  controlTypeText: 'Type de contrôle :',
  controlTypeTooltipText: 'Type de contrôle Saleslogix.',
  decimalDigitsText: 'Décimales :',
  decimalDigitsTooltipText: 'Le nombre de chiffres après la virgule à afficher et à autoriser pour la saisie des données.',
  defaultDataBindingText: 'Associations de données :',
  defaultDataBindingTooltipText: 'Champ(s) de données dans la base de données utilisée par ce contrôle.',
  displayCurrencyCodeText: 'Afficher le code du taux de change :',
  displayCurrencyCodeTooltipText: 'Afficher le code de devise de trois caractères lorsque option Multidevises est activée.',
  displayModeText: 'Mode affichage :',
  displayModeTooltipText: 'Mode affichage du contrôle : zone de texte, lien hypertexte ou texte brut.',
  enabledText: 'Activé :',
  enabledTooltipText: 'Permet à utilisateur interagir avec ce contrôle.',
  exchangeRateTypeText: 'Type de taux de change :',
  exchangeRateTypeTooltipText: 'Type de taux de change à afficher dans les champs devise.',
  maxLengthText: 'Longueur maxi :',
  maxLengthTooltipText: 'Nombre maximal de caractères que utilisateur peut saisir.',
  requiredText: 'Obligatoire :',
  requiredTooltipText: 'Requiert une valeur lors de enregistrement des données.',
  visibleText: 'Visible :',
  visibleTooltipText: 'Afficher ou masquer ce contrôle sur le formulaire.',
  displayTypeText: 
   { AsHyperlink: 'Comme lien hypertexte',
     AsControl: 'Comme contrôle',
     AsText: 'Comme texte' },
  exchangeTypeText: 
   { BaseRate: 'Taux de base',
     OpportunityRate: 'Taux d’opportunité (Déprécié)',
     MyRate: 'Mon taux',
     SalesOrderRate: 'Taux du bon de commande (Déprécié)',
     EntityRate: 'Taux de entité' },
  labelPlacementText: { left: 'Gauche', right: 'Droite', top: 'Haut', none: 'Aucun' } }
));
},
'Sage/TaskPane/nls/fr/ReportManagerTasksTasklet':function(){
define("Sage/TaskPane/nls/fr/ReportManagerTasksTasklet", { taskRunReport_Caption: 'Exécuter le rapport',
    taskScheduleReport_Caption: 'Planifier le rapport',
    taskDeleteReport_Caption: 'Supprimer le rapport',
    taskDeleteSchedule_Caption: 'Supprimer le planning',
    taskEditSchedule_Caption: 'Modifier le planning',
    taskDeleteHistory_Caption: 'Supprimer historique',
    txtRecordsSelected: 'enregistrement(s) sélectionné(s)',
    txtClear: 'Effacer'
});
},
'Sage/UI/nls/fr/SLXPreviewGrid':function(){
define("Sage/UI/nls/fr/SLXPreviewGrid", {
    applyText: 'Appliquer',
    resetText: 'Réinitialiser',
    filterText: 'Filtrer'
});
},
'Sage/UI/Alarms/nls/fr/UnconfirmedPane':function(){
define("Sage/UI/Alarms/nls/fr/UnconfirmedPane", {
    showConfirmationsText: 'Afficher les confirmations',
    showCalendarText: 'Afficher l’agenda',
    acceptText: 'Accepter',
    declineText: 'Refuser'
});
},
'Sage/Utility/nls/fr/Utility':function(){
define("Sage/Utility/nls/fr/Utility", (
{ dangerousValueWarn: 'Une valeur de formulaire potentiellement dangereuse a été détectée. Veuillez éviter les combinaisons de caractères incorrectes. Exemple : "&lt;script&gt;&lt;/script&gt;" Évitez également utiliser des caractères non autorisés dans les noms de fichiers : \\ / : * ? " &lt; &gt; | ' }
));
},
'Sage/QuickForms/Design/nls/fr/ControlDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/ControlDesigner", (
{ displayNameText: '' }
));
},
'Sage/UI/Controls/nls/fr/Address':function(){
define("Sage/UI/Controls/nls/fr/Address", {
    address1Text: 'Adresse 1 :',
    address2Text: 'Adresse 2 :',
    address3Text: 'Adresse 3 :',
    cancelText: 'Annuler',
    cityText: 'Ville :',
    countryText: 'Pays :',
    countyText: 'Région :',
    descriptionText: 'Description :',
    dialogTitle: 'Adresse',
    isMailingText: 'Expédition :',
    isPrimaryText: 'Principal :',
    okText: 'OK',
    postalCodeText: 'Code postal :',
    salutationText: 'Attention :',
    stateText: 'Départem. :',
    imageEditToolTip: 'Modifier',
    imageMapQuestToolTip: 'MapQuest'
});
},
'Sage/MainView/JobMgr/nls/fr/JobManagerGroupContextService':function(){
define("Sage/MainView/JobMgr/nls/fr/JobManagerGroupContextService", (
{ executionsTabDisplayName: 'Exécutions',
  jobDefinitionsTabDisplayName: 'Définitions',
  schedulesTabDisplayName: 'Planifications' }
));
},
'Sage/MainView/ActivityMgr/nls/fr/BaseListPanelConfig':function(){
define("Sage/MainView/ActivityMgr/nls/fr/BaseListPanelConfig", (
{ titleFmtString: '${0}' }
));
},
'Sage/QuickForms/Design/nls/fr/OwnerControlDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/OwnerControlDesigner", (
{ displayNameText: 'Propriétaire' }
));
},
'Sage/TaskPane/nls/fr/JobManagerTasksTasklet':function(){
define("Sage/TaskPane/nls/fr/JobManagerTasksTasklet", (
{ taskRunJob_Caption: 'Créer un planning',
  taskEditTrigger_Caption: 'Modifier le planning',
  taskCancelJob_Caption: 'Annuler exécution de la tâche',
  taskDeleteScheduledJob_Caption: 'Supprimer le planning' }
));
},
'Sage/MainView/ActivityMgr/nls/fr/ActivityEditorAttendeesTab':function(){
define("Sage/MainView/ActivityMgr/nls/fr/ActivityEditorAttendeesTab", (
{ header_Name: 'Nom',
  header_AccountName: 'Compte/Société',
  header_Type: 'Type',
  header_Primary: 'Principal',
  header_RoleName: 'Rôle',
  header_Phone: 'Téléphone',
  header_Email: 'E-mail',
  header_TimeZone: 'Fuseau horaire',
  header_Notes: 'Notes',
  tooltip_speedSearch: 'Ajouter un participant',
  tooltip_AddContact: 'Ajout d\'un contact',
  tooltip_AddLead: 'Ajouter un lead',
  tooltip_Delete: "Supprimer",
  header_Attendee: "Participant"
}
));
},
'Sage/UI/nls/fr/UserType':function(){
define("Sage/UI/nls/fr/UserType", {
    administratorText: 'Administrateur',
    templateText: 'Modèle',
    remoteText: 'Distant',
    webOnlyText: 'Web uniquement',
    retiredText: 'Désactivé',
    concurrentText: 'Simultané',
    webViewerText: 'Visualiseur Web',
    networkText: 'Réseau',
    addOnUserText: 'Utilisateur du module complémentaire'
});
},
'Sage/MainView/ReportMgr/templates/nls/fr/HistoryDetailSummary':function(){
define("Sage/MainView/ReportMgr/templates/nls/fr/HistoryDetailSummary", {
    txtCreateDate_Caption: 'Créer une date:',
    txtReportType_Caption: 'Type de rapport:',
    txtOutputFormat_Caption: 'Format de sortie:',
    txtRunAsUser_Caption: 'Exécuter comme:',
    txtExecutionType_Caption: 'Type exécution:',
    txtScheduleName_Caption: 'Description:',
    txtScheduledBy_Caption: 'Planifié par:',
    txtFileSize_Caption: 'Taille de fichier:',
    txtElapsedTime_Caption: 'Temps écoulé:'
});
},
'Sage/QuickForms/Design/nls/fr/FormDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/FormDesigner", (
{ displayNameText: 'Formulaire' }
));
},
'Sage/MainView/ActivityMgr/nls/fr/ActivityCalendar':function(){
define("Sage/MainView/ActivityMgr/nls/fr/ActivityCalendar", (
{ completedText: '(Terminé)' }
));
},
'Sage/Utility/nls/fr/Jobs':function(){
define("Sage/Utility/nls/fr/Jobs", (
{ errorMessage: "Une erreur est survenue lors de exécution de action '${0}' : ${1} ${2}.",
  jobCompletedSuccessfully: 'La tâche a été correctement effectuée.',
  unexpectedErrorMessage: "Une erreur inattendue est produite lors de exécution de action '${0}'.",
  repeatIndefinitely: 'Répéter indéfiniment',
  cancelButtonCaption: 'Annuler',
  defaultProgressDialogTitle: 'Exécution de action en cours',
  closeButtonCaption: 'Fermer' }
));
},
'Sage/UI/Controls/nls/fr/_DialogHelpIconMixin':function(){
define("Sage/UI/Controls/nls/fr/_DialogHelpIconMixin", { helpTooltip: 'Aide' });
},
'Sage/QuickForms/Design/Editors/nls/fr/PickListAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/PickListAdvancedPropertyEditor", (
{ titleText: 'Avancé',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  controlInfoText: 'Info contrôle',
  dataText: 'Données',
  allowMultiplesText: 'Autoriser les sélections multiples :',
  allowMultiplesTooltipText: 'Permet à utilisateur de sélectionner plusieurs éléments.',
  canEditTextText: 'Peut modifier le texte :',
  canEditTextTooltipText: 'Permet à utilisateur de saisir une valeur.',
  controlIdText: 'ID de contrôle :',
  controlIdTooltipText: 'Identifiant pour ce contrôle.',
  controlLabelPlacementText: 'Placement des étiquettes :',
  controlLabelPlacementTooltipText: 'Position des étiquettes par rapport au contrôle.',
  controlTypeText: 'Type de contrôle :',
  controlTypeTooltipText: 'Type de contrôle Saleslogix.',
  defaultDataBindingText: 'Associations de données :',
  defaultDataBindingTooltipText: 'Champ(s) de données dans la base de données utilisée par ce contrôle.',
  displayModeText: 'Mode affichage :',
  displayModeTooltipText: 'Mode affichage du contrôle : zone de texte, lien hypertexte ou texte brut.',
  enabledText: 'Activé :',
  enabledTooltipText: 'Permet à utilisateur interagir avec ce contrôle.',
  maxLengthText: 'Longueur maxi :',
  maxLengthTooltipText: 'Nombre maximal de caractères que utilisateur peut saisir.',
  mustExistInListText: 'élément doit exister :',
  mustExistInListTooltipText: 'Nécessite que la valeur saisie soit dans la liste.',
  pickListNameText: 'Nom de la liste de sélection :',
  pickListNameTooltipText: 'Nom de la liste des valeurs que utilisateur peut sélectionner lors de la saisie des données.',
  requiredText: 'Obligatoire :',
  requiredTooltipText: 'Requiert une valeur lors de enregistrement des données.',
  storageModeText: 'Mode de stockage :',
  storageModeTooltipText: 'Façon dont la valeur est stockée : texte, id ou code.',
  visibleText: 'Visible :',
  visibleTooltipText: 'Afficher ou masquer ce contrôle sur le formulaire.',
  labelPlacementText: { left: 'Gauche', right: 'Droite', top: 'Haut', none: 'Aucun' },
  displayModeTypeText: 
   { AsControl: 'Comme contrôle',
     AsText: 'Comme texte',
     AsHyperlink: 'Comme lien hypertexte' },
  storageModeTypeText: { Text: 'Texte', Id: 'ID', Code: 'Code' },
  pickListRequestErrorText: 'Impossible de récupérer les listes de sélection du serveur.' }
));
},
'Sage/UI/nls/fr/ActivityList':function(){
define("Sage/UI/nls/fr/ActivityList", {
    addMeetingText: 'Planifier un rendez-vous',
    addPhoneCallText: 'Planifier un appel',
    addToDoText: 'Planifier une tâche à faire',
    helpText: 'Aide',
    completeText: 'Terminer',
    typeText: 'Type',
    startDateText: 'Date/Heure',
    dateRangeText: 'Intervalle de dates',
    durationText: 'Durée',
    leaderText: 'Responsable',
    contactText: 'Contact',
    opportunityText: 'Opportunité',
    descriptionText: 'Objet',
    categoryText: 'Catégorie',
    firstNameText: 'Prénom',
    lastNameText: 'Nom'
});
},
'Sage/UI/Alarms/nls/fr/JobNotificationPopup':function(){
﻿define("Sage/UI/Alarms/nls/fr/JobNotificationPopup", {
    title: "Notifications d'emploi",
    helpText: 'Aide',
    colNameJobName: 'Type',
    colNameProgress: 'Progression',
    colNameStatus: 'Etat',
    colExecutionResult: 'Résultat'
});


},
'Sage/MainView/JobMgr/templates/nls/fr/ExecutionsListSummary':function(){
define("Sage/MainView/JobMgr/templates/nls/fr/ExecutionsListSummary", (
{}
));
},
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/fr/LeadLookupConfig':function(){
define("Sage/MainView/ActivityMgr/AttendeeLookup/nls/fr/LeadLookupConfig", (
{ contactText: 'Contact',
  accountText: 'Compte',
  lookupContactText: 'Rechercher un contact',
  nameText: 'Nom',
  cityText: 'Ville',
  stateText: 'Département',
  workphoneText: 'Téléphone professionnel',
  emailText: 'E-mail',
  dialogButtonText: 'Ajouter sélection',
  cancelText: 'Fermer',
  colFirstName: 'Prénom',
  colLastName: 'Nom',
  colTitle: 'Titre',
  colCompany: 'Société',
  colWorkPhone: 'Téléphone professionnel',
  colEmail: 'E-mail',
  dialogTitleText: 'Rechercher des Leads'
}
));
},
'Sage/MainView/ReportMgr/nls/fr/SchedulesListPanelConfig':function(){
define("Sage/MainView/ReportMgr/nls/fr/SchedulesListPanelConfig", (
{ colJobName: 'Nom de la tâche',
  colNameDescription: 'Description',
  colNameRunAsUser: 'Planifié par',
  colNameLastExecutionDate: 'Dernière exécution',
  colNameExecutionCount: 'Nombre d\'exécutions',
  colNameStartTimeUtc: 'Heure de début',
  colNameEndTimeUtc: 'Heure de fin',
  colNamePriority: 'Priorité',
  colNameStatus: 'Etat',
  colNameTemplate: 'Modèle' }
));
},
'Sage/QuickForms/Design/Editors/nls/fr/GenericAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/GenericAdvancedPropertyEditor", (
{ titleText: 'Avancé',
  appearanceText: 'Apparence',
  controlInfoText: 'Info contrôle',
  controlIdText: 'ID de contrôle :',
  controlIdTooltipText: 'Identifiant pour ce contrôle.',
  controlTypeText: 'Type de contrôle :',
  controlTypeTooltipText: 'Type de contrôle Saleslogix.',
  visibleText: 'Visible :',
  visibleTooltipText: 'Afficher ou masquer ce contrôle sur le formulaire.' }
));
},
'Sage/UI/nls/fr/CalendarUsersListPane':function(){
define("Sage/UI/nls/fr/CalendarUsersListPane", {
    header_color: 'Couleur',
    header_user: 'Utilisateur',
    maxUsersErrorMessage: 'Désolé, vous ne pouvez pas déplacer plus de ${0} agendas (le vôtre compris) en même temps. Effacez un des calendriers sélectionnés et réessayez.',
    editUsersLinkText: 'Modifier les utilisateurs de agenda',
    noUsersMessage: 'Aucun utilisateur a été ajouté, ajoutez des utilisateurs en cliquant sur le lien Modifier les utilisateurs de agenda ci-dessus'
});
},
'Sage/QuickForms/Design/Editors/nls/fr/PickListBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/PickListBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  captionText: 'Légende :',
  captionTooltipText: 'étiquette à afficher sur le formulaire pour ce contrôle.',
  captionAlignmentText: 'Alignement de la légende :',
  captionAlignmentTooltipText: 'Justification du texte de étiquette.',
  isReadOnlyText: 'Lecture seule :',
  isReadOnlyTooltipText: 'Ne permet pas les modifications.',
  toolTipText: 'Info-bulle :',
  toolTipTooltipText: 'Court texte aide concernant le contrôle.',
  alignmentText: { left: 'Gauche', center: 'Centre', right: 'Droite' } }
));
},
'Sage/QuickForms/Design/Editors/nls/fr/ColumnBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/ColumnBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Apparence',
  indexText: 'Index :',
  indexTooltipText: 'Numéro de la ligne ou colonne, à partir de zéro.',
  widthText: 'Largeur :',
  widthTooltipText: 'Largeur de cette colonne de contrôles.',
  sizeTypeText: 'Type de taille :',
  sizeTypeTooltipText: 'Méthode de dimensionnement : absolu, taille auto ou en pour cent.',
  rowSizeTypeText: 
   { Absolute: 'Absolu',
     Percent: 'Pourcentage',
     AutoSize: 'Taille auto' } }
));
},
'Sage/MainView/JobMgr/templates/nls/fr/ExecutionDetailSummary':function(){
define("Sage/MainView/JobMgr/templates/nls/fr/ExecutionDetailSummary", {
    txtJobName_Caption: 'Type:',
    txtUser_Caption: 'Utilisateur :',
    txtTriggerId_Caption: 'Planification :',
    txtScheduledStartTime_Caption: 'Heure de début programmée :',
    txtStartTime_Caption: 'Heure de début effective :',
    txtPhase_Caption: 'Phase :',
    txtPhaseDetail_Caption: 'Détails de la phase :',
    txtProgress_Caption: 'Progression :',
    txtElapsedTime_Caption: 'Temps écoulé :',
    txtRemainingTime_Caption: 'Temps restant :',
    txtStatus_Caption: 'Etat :',
    txtResult_Caption: 'Résultat :'
});
},
'Sage/MainView/ReportMgr/nls/fr/ReportManagerGroupContextService':function(){
define("Sage/MainView/ReportMgr/nls/fr/ReportManagerGroupContextService", (
{ reportsTabDisplayName: 'Rapports',
  schedulesTabDisplayName: 'Planifications',
  historyTabDisplayName: 'Historique' }
));
},
'Sage/MainView/IntegrationContract/nls/fr/MatchingOptionsConfig':function(){
define("Sage/MainView/IntegrationContract/nls/fr/MatchingOptionsConfig", (
{ matchingCaption: 'Modifier les critères de correspondance',
  matchingHeader: 'Critères de correspondance pour ',
  matchingDescription: 'Ajouter ou supprimer des opérateurs pour définir le critère de correspondance pour tous les utilisateurs qui associent les enregistrements Saleslogix à un système de comptabilité. Ces critères déterminent les résultats renvoyés lors de la recherche des enregistrements correspondants entre les systèmes de comptabilité.',
  propertyText: 'Propriété',
  operatorText: 'Opérateur',
  loadingText: 'Chargement ...',
  filter_AddCondition: 'Ajouter une condition',
  filter_RemoveCondition: 'Supprimer la condition',
  error_InvalidEndpoint: 'Veuillez spécifier un point de terminaison valide avant de continuer.',
  okText: 'OK',
  cancelText: 'Annuler' }
));
},
'Sage/QuickForms/Design/Editors/nls/fr/FormBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/FormBasicPropertyEditor", (
{ titleText: 'Basic',
  generalText: 'Général',
  activeControlText: 'Contrôle actif :',
  activeControlTooltipText: 'Le contrôle sur lequel commence le curseur de utilisateur.',
  descriptionText: 'Description :',
  descriptionTooltipText: 'Description optionnelle de objet du formulaire.',
  nameText: 'Nom :',
  nameTooltipText: 'Identifiant de formulaire utilisé par le système.' }
));
},
'Sage/UI/Alarms/nls/fr/AlarmButton':function(){
define("Sage/UI/Alarms/nls/fr/AlarmButton", {
    pastDueToolTipFmt: '${0} activités sont en retard.'
});
},
'Sage/MainView/ActivityMgr/nls/fr/OccurrenceOrSeriesQueryDlg':function(){
define("Sage/MainView/ActivityMgr/nls/fr/OccurrenceOrSeriesQueryDlg", (
{ titleFmt: '${type} - ${description}',
  actDateText: 'Date de activité :',
  contactText: 'Contact :',
  accountText: 'Compte :',
  opportunityText: 'Opportunité :',
  editAllText: 'Modifier toutes les occurrences',
  editOneText: 'Modifier cette occurrence',
  completeAllText: 'Terminer toutes les occurrences',
  completeOneText: 'Terminer cette occurence',
  deleteAllText: 'Supprimer toutes les occurrences',
  deleteOneText: 'Supprimer cette occurrence',
  continueText: 'Continuer',
  failedToLoadMsg: 'Impossible de charger activité' }
));
},
'Sage/Utility/File/nls/fr/Attachment':function(){
define("Sage/Utility/File/nls/fr/Attachment", {
    uploadingAttachments: 'Transfert des pièces jointes',
    uploadCompleted: 'Terminé',
    uploadingPleaseWait: 'En cours de chargement, veuillez patienter...',
    uploadFailed: 'Echec du transfert.'
});
},
'Sage/QuickForms/Design/nls/fr/GenericControlDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/GenericControlDesigner", (
{ displayNameText: 'Inconnu' }
));
},
'Sage/QuickForms/Design/nls/fr/PropertyEditorContainer':function(){
define("Sage/QuickForms/Design/nls/fr/PropertyEditorContainer", (
{ specificTitleFormatText: '${0} Propriétés (${1})',
  genericTitleFormatText: '${0} Propriétés' }
));
},
'Sage/Services/nls/fr/ReportingService':function(){
define("Sage/Services/nls/fr/ReportingService", (
{ txtUnsupportedReportType: 'Type de rapport non pris en charge : ${0}.',
  txtUnexpectedError: 'Une erreur est survenue : ${0} ${1}.',
  invalidEntityError: 'identifiant de entité a pas été défini ou a pas pu être déterminé.',
  invalidReportPluginError: 'identifiant du plug-in de rapport a pas été défini ou a pas pu être déterminé.',
  invalidTableNameError: 'Le nom de la table a pas été défini ou a pas pu être déterminé.',
  noDefaultReportError: 'Aucun rapport par défaut a pu être localisé pour entité active.',
  reportCannotBeShownError: 'Impossible afficher le rapport.' }
));
},
'Sage/MailMerge/nls/fr/Helper':function(){
define("Sage/MailMerge/nls/fr/Helper", (
{ destkopErrorsError: 'L\rquote appel à ObtenirAliasTablePrincipale() a échoué.',
  mailMergeInfoStoreError: 'L\rquote appel à ObtenirAliasTablePrincipale() a échoué.' }
));
},
'Sage/UI/Dashboard/nls/fr/Dashboard':function(){
define("Sage/UI/Dashboard/nls/fr/Dashboard", {
    newTabTitleText: 'Nouvel Onglet',
    inputTitleText: 'Saisir un titre',
    copiedPageText: 'Onglet copié',
    showText: 'Afficher'
});
},
'Sage/MainView/ActivityMgr/nls/fr/ActivityListPanelConfig':function(){
define("Sage/MainView/ActivityMgr/nls/fr/ActivityListPanelConfig", (
{ colNameComplete: 'Terminer',
  colNameAttachment: 'Pièce jointe',
  colNameRecurring: 'Périodicité',
  colNameAlarm: 'Alarme',
  colNameType: "Type activité",
  colNameStartDate: 'Date de début',
  colNameDuration: 'Durée',
  colNameContact: 'Nom',
  colNameLead: 'Lead',
  colNameAccount: 'Compte/Société',
  colNameCompany: 'Société',
  colNameRegarding: 'Objet',
  colNamePriority: 'Priorité',
  colNameUserId: 'Responsable',
  colNameTimeless: 'Heure indéfinie',
  colNameTypeName: 'Type',
  colNameContactName: 'Nom',
  SnoozeAlarm: 'Alarme de mise en veille',
  DismissAlarm: "Ignorer alarme",
  colNameUnConfirmStatus: 'Non confirmé',
  colNameAssociationCount: 'Nombre de participants'
}
));
},
'Sage/UI/Controls/nls/fr/PickList':function(){
define("Sage/UI/Controls/nls/fr/PickList", {
    okText: 'OK',
    missingPickListText: 'La liste de sélection est introuvable'
});
},
'Sage/MainView/ActivityMgr/nls/fr/HistoryEditorAttendeesTab':function(){
define("Sage/MainView/ActivityMgr/nls/fr/HistoryEditorAttendeesTab", (
{ header_Name: 'Nom',
  header_AccountName: 'Compte/Société',
  header_Type: 'Type',
  header_Primary: 'Principal',
  header_RoleName: 'Rôle',
  header_Phone: 'Téléphone',
  header_Email: 'E-mail',
  header_TimeZone: 'Fuseau horaire',
  header_Notes: 'Notes',
  header_Status: 'Etat' }
));
},
'Sage/Utility/nls/fr/Email':function(){
define("Sage/Utility/nls/fr/Email", (
{ RecipientInfoError: 'Une erreur inattendue est survenue lors de la tentative de lecture des informations du destinataire : ${0}',
  MailToProtocolError: "Une erreur est survenue lors de la tentative de génération de e-mail à aide du mailto: protocol (href.length=${0}). Il faut peut-être réduire le nombre de destinataires de email. Erreur du navigateur : ${1}.",
  InvalidContextError: "La demande e-mail ne peut pas être traitée. Cette opération est prise en charge que pour les contacts ou les leads.",
  InvalidArgumentError: 'La demande e-mail ne peut pas être traitée. Argument invalide.',
  FilteredOutMsg: 'Tri : Non-sollicitables : ${0}; Non-valides : ${1}; Doublons : ${2}',
  AllInvalidEmailError: 'La collection inclut pas entités avec une adresse e-mail valide ou sollicitable.',
  EmailFieldQueried: 'Le champ e-mail interrogé était : ${0}.',
  EntityInfoError: 'Echec lors de la tentative de récupération des informations de entité.',
  CapabilityModeError: 'La capacité écrire un e-mail à une sélection de groupes est disponible que dans la vue Listes.',
  CapabilityEntityError: 'La capacité écrire un e-mail à une sélection de groupes est disponible que pour les contacts ou les leads.',
  NoRowsSelectedError: 'Aucune ligne est sélectionnée.' }
));
},
'Sage/TaskPane/nls/fr/SecurityManagerTasksTasklet':function(){
define("Sage/TaskPane/nls/fr/SecurityManagerTasksTasklet", (
{ addSecurityProfileTitle: 'Ajouter le profil',
  editSecurityProfileTitle: 'Modifier le profil' }
));
},
'Sage/UI/nls/fr/TimeZoneItem':function(){
define("Sage/UI/nls/fr/TimeZoneItem", {
    buttonOKText: 'OK',
    buttonCancelText: 'Annuler',
    timeZoneText: 'Fuseau horaire',
    timeZoneSettingsText: 'Paramètres de fuseau horaire',
    setTimeZoneText: 'Définir le fuseau horaire :'
});
},
'Sage/MainView/ReportMgr/templates/nls/fr/HistoryListSummary':function(){
define("Sage/MainView/ReportMgr/templates/nls/fr/HistoryListSummary", (
{}
));
},
'Sage/UI/Columns/nls/fr/SlxEdit':function(){
define("Sage/UI/Columns/nls/fr/SlxEdit", { editText: 'Modifier' });
},
'Sage/Reporting/nls/fr/Enumerations':function(){
define(
"Sage/Reporting/nls/fr/Enumerations", {
    txtGroup: 'Groupe',
    txtDateRange: 'Intervalle de dates',
    txtUser: 'Utilisateur',
    txtQuery: 'Requête',
    txtIsGreaterThan: 'Est supérieur à',
    txtIsLessThan: 'Est inférieur à',
    txtIsInTheRange: 'Est compris dans l\'intervalle',
    txtIsAfter: 'Vient après',
    txtIsBefore: 'Vient avant',
    txtContains: 'contient',
    txtStartsWith: 'Commence par',
    txtEndsWith: 'Finit par',
    txtIs: 'Est',
    txtIsNot: 'N’est pas',
    txtOnDemand: 'À la demande',
    txtScheduled: 'Planifié',
    txtCrystalReport: 'Crystal Report',
    txtExportToFileReportType: 'Exporter vers un fichier',
    txtUnknownReportType: 'Inconnu',
    txtNoFormat: 'Aucun format',
    txtPdf: 'PDF',
    txtExcel: 'Excel',
    txtExcelDataOnly: 'Données Excel',
    txtCsv: 'CSV',
    txtWord: 'Word',
    txtXml: 'XML'
});
},
'Sage/QuickForms/Design/Editors/nls/fr/CheckBoxAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/CheckBoxAdvancedPropertyEditor", (
{ titleText: 'Avancé',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  controlInfoText: 'Info contrôle',
  dataText: 'Données',
  checkedText: 'Vérifié :',
  checkedTooltipText: 'Définit état par défaut de la case à cocher comme sélectionnée.',
  controlIdText: 'ID de contrôle :',
  controlIdTooltipText: 'Identifiant pour ce contrôle.',
  controlLabelPlacementText: 'Placement des étiquettes :',
  controlLabelPlacementTooltipText: 'Position des étiquettes par rapport au contrôle.',
  controlTypeText: 'Type de contrôle :',
  controlTypeTooltipText: 'Type de contrôle Saleslogix.',
  defaultDataBindingText: 'Associations de données :',
  defaultDataBindingTooltipText: 'Champ(s) de données dans la base de données utilisée par ce contrôle.',
  enabledText: 'Activé :',
  enabledTooltipText: 'Permet à utilisateur interagir avec ce contrôle.',
  visibleText: 'Visible :',
  visibleTooltipText: 'Afficher ou masquer ce contrôle sur le formulaire.',
  labelPlacementText: { left: 'Gauche', right: 'Droite', top: 'Haut', none: 'Aucun' } }
));
},
'Sage/MainView/ReportMgr/Crystal/nls/fr/CrystalReportConditionsDialog':function(){
define("Sage/MainView/ReportMgr/Crystal/nls/fr/CrystalReportConditionsDialog", {
    txtDialogTitle: 'Sélectionner les fiches',
    cmdBack_Caption: '< Précédent',
    cmdNext_Caption: 'Suivant >',
    cmdCancel_Caption: 'Annuler',
    grdCrystalConditions_ConditionType_Caption: 'Type',
    grdCrystalConditions_TableName_Caption: 'Table',
    grdCrystalConditions_FieldName_Caption: 'Champ',
    grdCrystalConditions_Operator_Caption: 'Opérateur',
    grdCrystalConditions_Value_Caption: 'Valeur de condition',
    txtShowRecordsThatMatch: 'Afficher les fiches qui correspondent à :',
    txtMatch: 'Correspondance :',
    txtOfTheFollowingConditions: 'pour les conditions suivantes :',
    txtAny: 'importe quel(le)',
    txtAll: 'Tous',
    txtAllRecords: '[Tous les enregistrements]',
    txtSpecificConditions: '[Conditions spécifiques]',
    txtCurrentUser: '[Utilisateur Actuel]'
});
},
'Sage/Extensions/Activity/ListPanelOverrides/nls/fr/ActivityListPanelConfig':function(){
define("Sage/Extensions/Activity/ListPanelOverrides/nls/fr/ActivityListPanelConfig", (
{ colNameAssociationCount: 'Nombre de participants' }
));
},
'Sage/UI/nls/fr/JobSchedulingWidget':function(){
define("Sage/UI/nls/fr/JobSchedulingWidget", {
    lblCreateSchedule: 'Créer un planning de tâches à exécuter',
    lblEveryText: 'Tous les',
    lblOnText: 'le',
    lblOnTheText: 'le',
    lblAtText: 'à',
    lblMinutesPastHour: 'minutes après heure',
    lblFromTimeText: 'Exécuter depuis',
    lblToTimeText: 'vers',
    lblMinutesFrequency: 'minutes',
    lblHourlyFrequency: 'heure(s)',
    lblDailyFrequency: 'jour',
    lblWeekDayFrequency: 'jour de la semaine',
    lblWeeklyFrequency: 'semaine',
    lblMonthlyFrequency: 'mois',
    lblYearlyFrequency: 'année',
    lblSunday: 'Dimanche',
    lblMonday: 'Lundi',
    lblTuesday: 'Mardi',
    lblWednesday: 'Mercredi',
    lblThursday: 'Jeudi',
    lblFriday: 'Vendredi',
    lblSaturday: 'Samedi',
    lblFirstDay: 'premier',
    lblSecondDay: 'deuxième',
    lblThirdDay: 'troisième',
    lblFourthDay: 'quatrième',
    lblCronExpressionText: 'Expression Cron',
    txtInvalidScheduleTitle: 'Horaire Valide',
    txtInvalidDatesMessage: "L'heure de fin doit être postérieure à l'heure de début. S'il vous plaît corriger ces informations avant de continuer.",
    txtInvalidScheduleTime: "Les heures de début et de fin spécifiées seront empêcher ce programme de s'exécuter. S'il vous plaît corriger ces informations avant de continuer.",
    txtInvalidStartDate: "Une date de démarrage est nécessaire. S'il vous plaît spécifier une date de début avant de poursuivre.",
    txtInvalidEndDate: "A la date de fin est nécessaire. S'il vous plaît spécifier une date de fin avant de poursuivre."
});
},
'Sage/UI/Controls/nls/fr/LogOffButton':function(){
define("Sage/UI/Controls/nls/fr/LogOffButton", { logOffText: 'Déconnexion' });
},
'Sage/QuickForms/Design/Editors/nls/fr/TextBoxAdvancedPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/TextBoxAdvancedPropertyEditor", (
{ titleText: 'Avancé',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  controlInfoText: 'Info contrôle',
  dataText: 'Données',
  controlIdText: 'ID de contrôle :',
  controlIdTooltipText: 'Identifiant pour ce contrôle.',
  controlLabelPlacementText: 'Placement des étiquettes :',
  controlLabelPlacementTooltipText: 'Position des étiquettes par rapport au contrôle.',
  controlTypeText: 'Type de contrôle :',
  controlTypeTooltipText: 'Type de contrôle Saleslogix.',
  defaultDataBindingText: 'Associations de données :',
  defaultDataBindingTooltipText: 'Champ(s) de données dans la base de données utilisée par ce contrôle.',
  enabledText: 'Activé :',
  enabledTooltipText: 'Permet à utilisateur interagir avec ce contrôle.',
  maxLengthText: 'Longueur maxi :',
  maxLengthTooltipText: 'Nombre maximal de caractères que utilisateur peut saisir.',
  requiredText: 'Obligatoire :',
  requiredTooltipText: 'Requiert une valeur lors de enregistrement des données.',
  visibleText: 'Visible :',
  visibleTooltipText: 'Afficher ou masquer ce contrôle sur le formulaire.',
  labelPlacementText: { left: 'Gauche', right: 'Droite', top: 'Haut', none: 'Aucun' } }
));
},
'Sage/MainView/ActivityMgr/nls/fr/EditEventEditor':function(){
define("Sage/MainView/ActivityMgr/nls/fr/EditEventEditor", (
{ titleScheduleText: 'Planification d\'un événement',
  titleEditText: 'Modifier un événement',
  lblDayTypeText: 'Type de jour :',
  lblStartDateText: 'Date de début :',
  lblEndDateText: 'Date de fin :',
  lblUserText: 'Utilisateur :',
  lookupUserText: 'Rechercher un utilisateur',
  lblCategoryText: 'Catégorie :',
  lblLocationText: 'Emplacement :',
  lblDescriptionText: 'Description :',
  btnOkayText: 'OK',
  btnCancelText: 'Annuler',
  btnHelpText: 'Aide',
  eventTypeActiveText: 'Actif',
  eventTypeBusinessTripText: 'Voyage d\'affaires',
  eventTypeConferenceText: 'Conférence',
  eventTypeHolidayText: 'Congés',
  eventTypeOffText: 'Désactivé',
  eventTypeTradeShowText: 'Salon commercial',
  eventTypeUnavailableText: 'Non disponible',
  eventTypeVacationText: 'Vacances',
  errorText: 'Impossible de créer l\'événement car une erreur s\'est produite.',
  invaildDatesText: 'La date de fin ne peut être antérieure à la date de début.',
  nameText: 'Nom' }
));
},
'Sage/MailMerge/nls/fr/Loader':function(){
define("Sage/MailMerge/nls/fr/Loader", (
{ decodeFailed: 'L\rquote appel à ObtenirAliasTablePrincipale() a échoué.' }
));
},
'Sage/UI/Controls/nls/fr/DateTimePicker':function(){
define("Sage/UI/Controls/nls/fr/DateTimePicker", {
    okText: 'OK',
    cancelText: 'Annuler',
    convertDescription: 'Comparez avec un autre fuseau horaire.',
    convertText: 'Comparer',
    calculatorText: 'Calculateur de fuseau horaire',
    timeZoneSourceText: 'Fuseau horaire actuel',
    timeZoneDestText: 'Fuseau horaire de référence',
    buttonToolTip: 'Agenda',
    timeStartText: 'Heure',
    timeZoneCalculatorText: 'Calculateur de fuseau horaire'
});
},
'Sage/MainView/ReportMgr/nls/fr/ReportManagerActions':function(){
define("Sage/MainView/ReportMgr/nls/fr/ReportManagerActions", (
{ txtSelectRecord: 'Veuillez sélectionner un enregistrement dans la liste avant de continuer.',
  txtInvalidSelectionCount: 'Pour continuer, vous devez avoir sélectionné au moins un enregistrement.',
  confirm_Deletion: 'Voulez-vous vraiment supprimer l\'élément ${0} sélectionné ?',
  confirm_Report: 'Rapport',
  confirm_Schedule: 'Planification',
  confirm_ReportHistory: 'enregistrement d\'historique du rapport',
  txtYes: 'Oui',
  txtNo: 'Non',
  deleteJobError: 'Une erreur s\'est produite lors de la suppression : ${0}',
  txtDeleteHistory: 'Suppression d\'enregistrements d\'historique',
  txtDeleteTitle: 'Supprimer l\'historique',
  txtErrorDeleteReport: 'Une erreur s\'est produite lors de la suppression du rapport : ${0}'
}
));
},
'Sage/UI/Alarms/nls/fr/AlarmPopup':function(){
define("Sage/UI/Alarms/nls/fr/AlarmPopup", {
    title: 'Alerte',
    alarmsText: 'Alarmes',
    unconfirmedText: 'Non confirmé',
    deleteText: 'Supprimer les sélections',
    helpText: 'Aide',
    completeText: 'Terminer les activités sélectionnées'
});
},
'Sage/MainView/Contact/nls/fr/ContactUserAssociationEditor':function(){
define("Sage/MainView/Contact/nls/fr/ContactUserAssociationEditor", (
{ btnCancel_Caption: 'Annuler',
  btnOK_Caption: 'OK',
  dialogTitleText: 'Associer un contact avec un utilisateur',
  associateContactText: 'Associer le contact sélectionné avec utilisateur suivant',
  user_Caption: 'Utilisateur',
  lookupUserText: 'Rechercher un utilisateur',
  lookupNameColText: 'Nom',
  lookupTitleColText: 'Titre',
  lookupDepartmentColText: 'Service',
  lookupRegionColText: 'Région',
  lookupTypeColText: 'Type',
  disAssociateTitle: 'Dissocier un utilisateur',
  associationExistsMessage: 'utilisateur sélectionné est déjà associé à un contact. Veuillez choisir un autre utilisateur.' }
));
},
'Sage/QuickForms/Design/Editors/nls/fr/OwnerBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/OwnerBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  captionText: 'Légende :',
  captionTooltipText: 'étiquette à afficher sur le formulaire pour ce contrôle.',
  captionAlignmentText: 'Alignement de la légende :',
  captionAlignmentTooltipText: 'Justification du texte de étiquette.',
  isReadOnlyText: 'Lecture seule :',
  isReadOnlyTooltipText: 'Ne permet pas les modifications.',
  toolTipText: 'Info-bulle :',
  toolTipTooltipText: 'Court texte aide concernant le contrôle.',
  alignmentText: { left: 'Gauche', center: 'Centre', right: 'Droite' } }
));
},
'Sage/MainView/JobMgr/nls/fr/BaseListPanelConfig':function(){
define("Sage/MainView/JobMgr/nls/fr/BaseListPanelConfig", (
{ titleFmtString: '${0}' }
));
},
'Sage/QuickForms/Design/nls/fr/TextBoxControlDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/TextBoxControlDesigner", (
{ displayNameText: 'ZoneTexte' }
));
},
'Sage/QuickForms/Design/nls/fr/EmailControlDesigner':function(){
define("Sage/QuickForms/Design/nls/fr/EmailControlDesigner", (
{ displayNameText: 'E-mail' }
));
},
'Sage/UI/Controls/nls/fr/Lookup':function(){
define("Sage/UI/Controls/nls/fr/Lookup", {
    buttonToolTip: 'Rechercher',
    closeButtonToolTip: 'Retirer'
});
},
'Sage/Utility/File/nls/fr/DescriptionsForm':function(){
define("Sage/Utility/File/nls/fr/DescriptionsForm", {
    titleFmt: 'Ajouter des pièces jointes à ${0}',
    titleLibraryDoc: 'Ajouter des documents de la bibliothèque',
    fileNameText: 'Nom et taille du fichier : ',
    descText: 'Description :',
    okText: 'OK',
    cancelText: 'Annuler'
});
},
'Sage/QuickForms/Design/Editors/nls/fr/NumericBasicPropertyEditor':function(){
define("Sage/QuickForms/Design/Editors/nls/fr/NumericBasicPropertyEditor", (
{ titleText: 'Basic',
  appearanceText: 'Apparence',
  behaviorText: 'Comportement',
  captionText: 'Légende :',
  captionTooltipText: 'étiquette à afficher sur le formulaire pour ce contrôle.',
  captionAlignmentText: 'Alignement de la légende :',
  captionAlignmentTooltipText: 'Justification du texte de étiquette.',
  isReadOnlyText: 'Lecture seule :',
  isReadOnlyTooltipText: 'Ne permet pas les modifications.',
  toolTipText: 'Info-bulle :',
  toolTipTooltipText: 'Court texte aide concernant le contrôle.',
  alignmentText: { left: 'Gauche', center: 'Centre', right: 'Droite' } }
));
},
'Sage/TaskPane/nls/fr/CommonTasksTasklet':function(){
define("Sage/TaskPane/nls/fr/CommonTasksTasklet", (
{ okButtonText: 'OK',
  loadingText: 'Chargement ...',
  noPrimaryEmail: 'Aucun e-mail principal est disponible',
  selectFileFormat: 'Choisir un format de fichier :',
  exportToFile_OptionCSV: 'CSV standard',
  exportToFile_OptionTab: 'Délimitation par des tabulations (recommandé pour Microsoft Excel)',
  exportToFile_OptionSaveFormat: 'Se souvenir de mon choix et ne plus me le demander.',
  exportToFile_OK: 'OK',
  exportToFile_Cancel: 'Annuler',
  exportToFile_DialogTitle: 'Exporter vers un fichier',
  exportToExcel_Caption: 'Exportation vers Excel en cours',
  errorRequestingJobMgr: 'Une erreur est produite lors de interrogation du gestionnaire de tâches : ${0}',
  errorExecutionAction: 'Une erreur est produite lors de exécution de la requête du serveur ${0}',
  exportProcessingJobMsg: 'Traitement de exportation en cours. Vous pouvez patienter jusquà la fin de opération ou accéder aux rapports pour ouvrir votre fichier.' }
));
},
'Sage/Utility/nls/fr/Dashboard':function(){
define("Sage/Utility/nls/fr/Dashboard", (
{ pageText: 'Page' }
));
}}});
define("Sage/nls/Sage_fr", [], 1);
