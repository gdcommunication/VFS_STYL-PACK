function transferMethod(pUrlWebService, pLoginWebService, pPassorwdWebService, pAccountId, pUserId) {

        if (confirm("Voulez vous transferer la fiche tiers dans Sage 100 ?")) {
            var vReqHttp = new XMLHttpRequest();
            if (window.XMLHttpRequest) {
               vReqHttp.open("GET", pUrlWebService + "/CreationOuModificationCompteTiers?plogin=" + pLoginWebService + "&ppasswd=" + pPassorwdWebService + "&pcomptetiersid=" + pAccountId + "&puserid=" + pUserId, true);            
               vReqHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
               vReqHttp.onreadystatechange = function () {
                    if (vReqHttp.readyState == 4 && vReqHttp.status == 200) {
                    }
                    else if (vReqHttp.readyState == 4 && vReqHttp.status != 200) {
                    }
               }
               vReqHttp.send(null);
            }
        }

    }

function transfertPieceVenteMethod(pUrlWebService, pLoginWebService, pPassorwdWebService, pCodeTiers, pUserId) {

        if (confirm("Voulez vous recuperer les pieces de vente de Sage 100 ?")) {
            var vReqHttp = new XMLHttpRequest();
            if (window.XMLHttpRequest) {
                vReqHttp.open("GET", pUrlWebService + "/SynchronizeLesPiecesDeVente?plogin=" + pLoginWebService + "&ppasswd=" + pPassorwdWebService + "&pcodetiers=" + pCodeTiers + "&puserid=" + pUserId, true);
                vReqHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                vReqHttp.onreadystatechange = function () {
                    if (vReqHttp.readyState == 4 && vReqHttp.status == 200) {
                    }
                    else if (vReqHttp.readyState == 4 && vReqHttp.status != 200) {
                    }
                }
                vReqHttp.send(null);
            }       
        }
}   

function transfertgeneralPieceVenteMethod(pUrlWebService, pLoginWebService, pPassorwdWebService, pUserId) {

            var vReqHttp = new XMLHttpRequest();
            if (window.XMLHttpRequest) {
                vReqHttp.open("GET", pUrlWebService + "/SynchronizeToutesLesPiecesDeVente?plogin=" + pLoginWebService + "&ppasswd=" + pPassorwdWebService + "&puserid=" + pUserId, true);
                vReqHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                vReqHttp.onreadystatechange = function () {
                    if (vReqHttp.readyState == 4 && vReqHttp.status == 200) {
                    }
                    else if (vReqHttp.readyState == 4 && vReqHttp.status != 200) {
                    }
                }
                vReqHttp.send(null);
            }              
}   