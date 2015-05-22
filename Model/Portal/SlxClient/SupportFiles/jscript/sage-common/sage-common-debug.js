/*
 * SageSalesLogixCommon
 * Copyright(c) 2009, SalesLogix, N.A., LLC..
 * 
 * 
 */
































function Cookie()
{
	
	
	this.defaultCookie = "userprefs";
}

function Cookie_getCookie(cookieName) {
    
    var cookiestring = document.cookie;
    var cookies = cookiestring.split('; ');
    var search = (cookieName ? cookieName : this.defaultCookie) + '=';
    for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].indexOf(search) > -1) {
            return unescape(cookies[i].split('=')[1]);
        }
    }
    return '';
}

function Cookie_setCookie(strPairs, cookieName) {
    
    document.cookie = (cookieName ? cookieName : this.defaultCookie) + "=" + escape(strPairs);
}

function Cookie_parseCookie(cookieName) {
    
    
    var myCookie = this.getCookie((cookieName ? cookieName : this.defaultCookie));
    if (myCookie) {
        var pairs = myCookie.split("&");
        return pairs;
    } else {
        return new Array();
    }
}

function Cookie_getCookieParm(parmName, cookieName) {
    
    
    var parms = this.parseCookie(cookieName ? cookieName : this.defaultCookie);
    var search = parmName + "=";
    for (var i = 0; i < parms.length; i++) {
        if (parms[i].indexOf(search) > -1) {
            var vals = parms[i].split("=");
            return (vals[1] ? vals[1] : "");
        }
    }
    return "";
}

function Cookie_setCookieParm(strVal, parmName, cookieName) {
    
    var parms = this.parseCookie(cookieName ? cookieName : this.defaultCookie);
    var pFound = false;
    var search = parmName + "=";
    for (var i = 0; i < parms.length; i++) {
        if (parms[i].indexOf(search) > -1) {
            parms[i] = search + strVal;
            pFound = true;
            break;
        }
    }
    if (pFound === false) {
        parms[parms.length] = search + strVal;
    }
    this.setCookie(parms.join("&"), (cookieName ? cookieName : this.defaultCookie));
}

function Cookie_delCookieParm(parmName, cookieName) {
    
    var pairs = this.parseCookie((cookieName ? cookieName : this.defaultCookie));
    var search = parmName + "=";
    var retpairs = new Array();
    for (var i = 0; i < pairs.length; i++) {
        if (pairs[i].indexOf(search) == -1) {
            
            
            
            retpairs[retpairs.length] = pairs[i];
        }
    }
    this.setCookie(retpairs.join("&"), (cookieName ? cookieName : this.defaultCookie));
}


Cookie.prototype.getCookie = Cookie_getCookie;
Cookie.prototype.setCookie = Cookie_setCookie;
Cookie.prototype.parseCookie = Cookie_parseCookie;
Cookie.prototype.getCookieParm = Cookie_getCookieParm;
Cookie.prototype.setCookieParm = Cookie_setCookieParm;
Cookie.prototype.delCookieParm = Cookie_delCookieParm;



var cookie = new Cookie();


AutoLogout = new function () {
    this.OneMinute = 60000;
    this.LogoutDuration = 20;
    this.StartAlertAt = 10;
    this.StartWarnAt = 5;
    this.Enabled = true;
};

AutoLogout.process = function (minutes) {
    if (!AutoLogout.Enabled) return;
    if (AutoLogout.LogoutReset) {
        minutes = 0;
        AutoLogout.LogoutReset = false;
    }
    if (minutes === this.LogoutDuration) {
        try {
            window.location.href = 'Shutdown.axd';
        } catch (e) { }
        return;
    }
    if (minutes < this.StartWarnAt) {
        window.setTimeout('AutoLogout.process(' + (minutes + 1) + ')', this.OneMinute);
        return;
    }
    if (typeof MasterPageLinks !== "undefined") {
        var msg = String.format(MasterPageLinks.IdleMessage, minutes);
        var elem = dojo.byId('autoLogoff');
        if (minutes >= this.LogoutDuration - this.StartAlertAt) {
            dojo.addClass(elem, 'alerttext');
            msg = String.format(MasterPageLinks.LogoffMessage, this.LogoutDuration - minutes);
        }
        dojo.html.set(elem, msg);
        window.setTimeout('AutoLogout.process(' + (minutes + 1) + ')', this.OneMinute);
    }
    return;
};
AutoLogout.resetTimer = function () {
    AutoLogout.LogoutReset = true;
    var elem = dojo.byId('autoLogoff');
    if (elem) {
        dojo.removeClass(elem, 'alerttext');
        dojo.html.set(elem, '');
    }
};

Error.prototype.toMessage = function (xtraMsg, showFullStack) {
    var sError = "";
    if (dojo.isString(xtraMsg) && xtraMsg.length > 0) {
        sError = xtraMsg;
        if (!(sError.lastIndexOf(" ") + 1 == sError.length)) {
            sError += " ";
        }
    }
    var sMsg = this.message;
    if (!(sMsg.lastIndexOf(".") + 1 == sMsg.length)) {
        sMsg += ".";
    }
    if (dojo.isIE) {
        var iNumber = this.number;
        if (isNaN(iNumber)) {
            iNumber = 0;
        }
        sError = dojo.string.substitute("${0}${1} Details: name=${2}; number=${3}.",
                        [sError, sMsg, this.name, iNumber]);
    }
    else {
        var iLineNumber = -1;
        var sSource = "";
        var sStack = "";
        if (typeof this.lineNumber !== "undefined") {
            iLineNumber = this.lineNumber;
        }
        if (typeof this.stack !== "undefined") {
            sStack = this.stack;
            if (typeof showFullStack == "boolean" && showFullStack) {
                sSource = sStack;
            }
            else {
                if (!isNaN(iLineNumber)) {
                    var iPos = sStack.indexOf(dojo.string.substitute(".js:${0}", [iLineNumber])); //DNL
                    if (iPos != -1) {
                        sSource = sStack.substring(0, iPos + 3);
                        iPos = sSource.lastIndexOf("/");
                        if (iPos != -1) {
                            sSource = sSource.substring(iPos + 1);
                        }
                    }
                }
            }
        }
        if (sSource.length == 0) {
            sSource = "unknown";
        }
        if (iLineNumber == -1) {
            iLineNumber = "unknown";
        }
        sError = dojo.string.substitute("${0}${1} Details: name=${2}; line=${3}; source=${4}.",
                        [sError, sMsg, this.name, iLineNumber, sSource]);
    }
    return sError;
};

SparkLine = function (config) {
    this.config = config;
    if (typeof (config.data) !== 'undefined') {
        if (config.data.type.toLowerCase() === 'mashup') {
            var self = this;
            $.get("MashupHandler.ashx", config.data.params, function (result) {
                var datavals = "";
                var first = true;
                var elems = result.documentElement.getElementsByTagName(config.data.datavaluename);
                for (var i = 0; i < elems.length; i++) {
                    if (!first) datavals += ",";
                    datavals += $(elems[i]).text();
                    first = false;
                }
                self.makeImg(config, datavals);
            });
        } else if (config.data.type.toLowerCase() == 'literal') {
            this.makeImg(config, config.data.data.join(','));
        }
    }
};
SparkLine.prototype.makeImg = function (config, datavals) {
    var sparkurl = "Libraries/SparkHandler.ashx?";
    for (var param in config.params) {
        sparkurl += param + "=" + encodeURIComponent(config.params[param]) + "&";
    }
    sparkurl += config.paramdataname + "=" + datavals;
    $('#' + config.renderTo).html(String.format('<img src="{0}" alt="{1}" title="{1}" />', sparkurl, datavals));
};

function RunSummarySparkLine(config) {
    window.setTimeout(function () { var spk = new SparkLine(config); }, 10);
    return '';
}
// ---------- Cross Browser XML parser ---------------------------------------
   	  
   function getNodeXML(aNode)
   {
        var xml;
        if (aNode.xml) {
            xml = aNode.xml;
        }
        else {   
            var objXMLSerializer = new XMLSerializer( );
            xml = objXMLSerializer.serializeToString(aNode);
        }
        return xml;
   }
   
   function getNodeText(aNode)
   {
        var text = "";
        if (aNode.text) {
            text = aNode.text;
        }
        else {  
            if (aNode.firstChild) {
                text = aNode.firstChild.nodeValue;
            }
        }
        return text;
   }
   
       
   function getXMLDoc(xmlString) { 
        var xmlDoc; 
        if (window.ActiveXObject) { 
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM"); 
            xmlDoc.async = false; 
            xmlDoc.loadXML(xmlString);
        } 
        else {
            var objDOMParser = new DOMParser();
            xmlDoc = objDOMParser.parseFromString(xmlString, "text/xml");
           
        } 
        return xmlDoc;
    }





Sage.SimpleXmlReader = function(xml) {
    this.xmlDocument = null;
    if (typeof xml != "undefined") {
        this.loadXml(xml)
    }
};

Sage.SimpleXmlReader.prototype.getNodeText = function(node) {
    return (dojo.isIE) ? node.text : node.textContent;
};

Sage.SimpleXmlReader.prototype.loadXml = function(xml) {
    this.xmlDocument = null;
    if (dojo.isIE) {
        var oXmlDocument = new ActiveXObject("Microsoft.XMLDOM");
        oXmlDocument.async = false;
        oXmlDocument.loadXML(xml);
        this.xmlDocument = oXmlDocument;
        return true;
    }
    else {
        if (typeof DOMParser != "undefined") {
            var oDOMParser = new DOMParser();
            var oXmlDocument = oDOMParser.parseFromString(xml, "text/xml");
            this.xmlDocument = oXmlDocument;
            return true;
        }
        else {
            throw new Error("The xml could not be loaded in Sage.SimpleXmlReader.loadXml().");
        }
    }
    return false;
};

Sage.SimpleXmlReader.prototype.selectChildNodes = function(path) {
    if (dojo.isIE) {
        return this.xmlDocument.selectNodes(path);
    }
    else {
        var oEvaluator = new XPathEvaluator();
        var oNode = oEvaluator.evaluate(path, this.xmlDocument, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        var arrNodes = new Array;
        if (oNode != null) {
            var oElement = oNode.iterateNext();
            while (oElement) {
                arrNodes.push(oElement);
                oElement = oNode.iterateNext();
            }
        }
        return arrNodes;
    }
    return null;
};

Sage.SimpleXmlReader.prototype.selectSingleNode = function(path, node) {
    if (dojo.isIE) {
        if (node) {
            return node.selectSingleNode(path);
        }
        else {
            return this.xmlDocument.selectSingleNode(path);
        }
    }
    else {
        var oContextNode = (typeof node == "undefined") ? this.xmlDocument : node;
        var oEvaluator = new XPathEvaluator();
        var oNode = oEvaluator.evaluate(path, oContextNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        if (oNode != null) {
            return oNode.singleNodeValue;
        }
    }
    return null;
};

Sage.SimpleXmlReader.prototype.selectSingleNodeText = function(path, node) {
    var oNode = this.selectSingleNode(path, node);
    if (oNode != null) {
        return (dojo.isIE) ? oNode.text : oNode.textContent;
    }
    else {
        throw new Error(String.format("The node could not be located for the path '{0}' in Sage.SimpleXmlReader.selectSingleNodeText().", path));
    }
};
