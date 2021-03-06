﻿define([
        'Sage/LanguageList',
        'dojo/_base/lang'
],
function (LanguageList, lang) {
    var nls = {
        root: {
            labelWidth: '100',
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
            tabNameParticipants: 'Participants'
        }
    };
    return lang.mixin(LanguageList, nls);
});