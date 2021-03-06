define([
        'Sage/LanguageList',
        'dojo/_base/lang'
],
function (languageList, lang) {
    var nls = {
        root: {
            txtPhone_Caption:"Phone:",
            lnkOpportunity_Caption:"Opportunity:",
            txtStartTime_Caption:"Start Time:",
            lnkContactName_Caption:"Contact:",
            lnkLeadName_Caption:"Lead:",
            lnkTicket_Caption:"Ticket:",
            txtLocation_Caption:"Location:",
            txtLeader_Caption:"Leader:",
            txtDuration_Caption:"Duration:",
            lnkAccountName_Caption:"Account:",
            lnkCompanyName_Caption:"Company:",
            txtNotes_Caption:"Notes:",
            btnComplete_Caption:"Complete",
            txtFromUser_Caption:"From:",
            btnDelete_Caption:"Delete",
            btnDecline_Caption:"Decline",
            btnAccept_Caption:"Accept"
        }
    };
    return lang.mixin(languageList, nls);
});