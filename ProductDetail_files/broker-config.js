/*
Copyright (c) 2014, comScore Inc. All rights reserved.
version: 5.0.3
*/
COMSCORE.SiteRecruit.Broker.config = {
	version: "5.0.3",
	//TODO:Karl extend cookie enhancements to ie userdata
	testMode: false,
	// START 5.1.3
	cddsDomains: 'microsoft.com',
	cddsInProgress: 'cddsinprogress',
	domainSwitch: 'tracking3p',
	domainMatch: '^(https?:\/\/)?([\\da-z\.-]+)\.([a-z\.]{2,6})',
	// END 5.1.3
	
	delay: 1500,
	
	// cookie settings
	cookie:{
		name: 'msresearch',
		path: '/',
		domain:  '.microsoftstore.com' ,
		duration: 90,
		rapidDuration: 0,
		expireDate: ''
	},
	thirdPartyOptOutCookieEnabled : true,
	thirdPartyOptOutCookie1:{
		name: 'ar_p222566077',
		path: '',
		domain: '',
		duration: 0,
		rapidDuration: 0,
		expireDate: ''
	},
	thirdPartyOptOutCookie2:{
		name: '' ,
		path: '',
		domain: '',
		duration: 0,
		rapidDuration: 0,
		expireDate: ''
	},	
	
	
	// optional prefix for pagemapping's pageconfig file
	prefixUrl: "",
	
	//events
	Events: {
		beforeRecruit: function() {
					}
	},
	
		mapping:[
	// m=regex match, c=page config file (prefixed with configUrl), f=frequency
	{m: '((?!surface))\\.microsoftstore\\.com/.*en_us.*', c: 'inv_c_p222566077.js', f: 0.0288, p: 0 }
	,{m: '//[\\w\\.-]+/store/msusa/en_US/cat/YourNextPC/categoryID\\.67297800', c: 'inv_c_p222566077-p178132240-2368.js', f: 0.5, p: 1 }
	,{m: '//[\\w\\.-]+/store/msusa/en_US/cat/YourNextPC/categoryID\\.67297800#Office-Computers', c: 'inv_c_p222566077-p178132240-2374.js', f: 0.5, p: 2 }
	,{m: '//[\\w\\.-]+/store/msusa/en_US/list/categoryID\\.67297700', c: 'inv_c_p222566077-p178132240-2369.js', f: 0.5, p: 1 }
	,{m: '//[\\w\\.-]+/store/msusa/en_US/list/categoryID\\.67297700#/filter=2-in-1%2BPCs', c: 'inv_c_p222566077-p178132240-2372.js', f: 0.5, p: 2 }
	,{m: '//[\\w\\.-]+/store/msusa/en_US/list/categoryID\\.67297700#/filter=All-in-one%2BPCs', c: 'inv_c_p222566077-p178132240-2373.js', f: 0.5, p: 2 }
	,{m: '//[\\w\\.-]+/store/msusa/en_US/list/categoryID\\.67297700#/filter=Laptops', c: 'inv_c_p222566077-p178132240-2371.js', f: 0.5, p: 2 }
	,{m: '//[\\w\\.-]+/store/msusa/en_US/list/categoryID\\.67297700#/filter=Tablets', c: 'inv_c_p222566077-p178132240-2370.js', f: 0.5, p: 2 }
	
	,{m: '((?!surface))\\.microsoftstore\\.com/.*en_au.*', c: 'inv_c_p222566077_EN-AU.js', f: 0.5, p: 0 }
	,{m: '((?!surface))\\.microsoftstore\\.com/.*en_ca.*', c: 'inv_c_p222566077_EN-CA.js', f: 0.457, p: 0 }
	,{m: '((?!surface))\\.microsoftstore\\.com/.*ja_jp.*', c: 'inv_c_p222566077_JA-JP.js', f: 0.4, p: 0 }
	,{m: '((?!surface))\\.microsoftstore\\.com/.*fr_ca.*', c: 'inv_c_p222566077_FR-CA.js', f: 0.457, p: 0 }
	,{m: '((?!surface))\\.microsoftstore\\.com/.*fr_fr.*', c: 'inv_c_p222566077_FR-FR.js', f: 0.261, p: 0 }
	,{m: '((?!surface))\\.microsoftstore\\.com/.*zh_tw.*', c: 'inv_c_p222566077_ZH-TW.js', f: 0.5, p: 0 }
	,{m: '((?!surface))\\.microsoftstore\\.com/.*de_de.*', c: 'inv_c_p222566077_DE-DE.js', f: 0.288, p: 0 }
	,{m: '((?!surface))\\.microsoftstore\\.com/.*en_gb.*', c: 'inv_c_p222566077_EN-GB.js', f: 0.246, p: 0 }
	,{m: '((?!surface))\\.microsoftstore\\.com/.*zh_hk.*', c: 'inv_c_p222566077_ZH-HK.js', f: 0.5, p: 0 }
	
	,{m: '((?!surface))\\.microsoftstore\\.com\\.hk', c: 'inv_c_p222566077_ZH-HK_2.js', f: 0.5, p: 0 }
	,{m: '((?!surface))\\.microsoftstore\\.com\\.cn', c: 'inv_c_p222566077_ZH-CN.js', f: 0.5, p: 0 }
	
	,{m: '(optimizely_disable=true|surface\\.microsoftstore\\.com|checkout|DisplayPrivacyPage/\\#content)', c: 'inv_c_blank.js', f: 0, p: 3  ,halt: true 	}
	
]
};

var SR_url = window.location.toString().toLowerCase();
var SRtempCookie = document.cookie.toString();
function getCookieVal(name){var ca=document.cookie.split(';');var nameEQ=name+"=";for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length)}return null}

//RESET DOMAIN FOR > microsoft.com.CN OR microsoft.com.HK
if(/microsoftstore\.com\.cn/i.test(document.domain)){ //MSSTORE ZH-CN staging domain=msscnuat
	COMSCORE.SiteRecruit.Broker.config.cookie.domain = '.microsoftstore.com.cn'; //'msscnuat.com';
}else if(/microsoftstore\.com\.hk/i.test(document.domain)){
	COMSCORE.SiteRecruit.Broker.config.cookie.domain = '.microsoftstore.com.hk'; //'msscnuat.com';
}

function _set_SessionCookie(_name, _val){
  if(_name=="graceIncr"){
  	var c = _name+'=' + _val + '; path=/' + '; domain=' + COMSCORE.SiteRecruit.Broker.config.cookie.domain;
  	document.cookie = c;
  }else{
  	if(COMSCORE.isDDInProgress()){
  		// START 5.1.3
  		if (_name == COMSCORE.SiteRecruit.Broker.config.domainSwitch) {
				var r = new RegExp(COMSCORE.SiteRecruit.Broker.config.domainMatch,'i');
				if (r.test(_val)) {
					_val = RegExp.$1 + RegExp.$2;
				}
				
				var c = _name + '=' + _val + '; path=/' + '; domain=' + COMSCORE.SiteRecruit.Broker.config.cookie.domain;
				document.cookie = c;
			}
			// END 5.1.3
			else {
				if(SRtempCookie.indexOf("captlinks") != -1){
   				c_urls = getCookieVal("captlinks");
   				if(c_urls!= null && c_urls.indexOf(_val) == -1){ 
   					_val = c_urls +"," + _val; 
   				}else{ _val = c_urls;}
  			}
  			var c = 'captlinks=' + _val + '; path=/' + '; domain=' + COMSCORE.SiteRecruit.Broker.config.cookie.domain;
      	document.cookie = c;
      }
 	 	}
  }
}
setTimeout('_set_SessionCookie("graceIncr","0")', 3000);
var allLinks = document.getElementsByTagName("a");
for (var i = 0, n = allLinks.length; i < n; i++){
	if(/CheckOfferEligibility|ForceAVECheckout|DisplayEditProfilePage|DisplayThreePgCheckoutAddressPaymentInfoPage|login\.live|msacademicverify|(o15\.officeredir|office)\.microsoft\.com|(cn|hk)\/login|LiveLogin/i.test(allLinks[i].href)){
		if(allLinks[i].addEventListener){
			allLinks[i].addEventListener('click',function(event){
				if(/CheckOfferEligibility|ForceAVECheckout|DisplayEditProfilePage|DisplayThreePgCheckoutAddressPaymentInfoPage|login\.live|msacademicverify|(o15\.officeredir|office)\.microsoft\.com|(cn|hk)\/login|LiveLogin/i.test(this.href)){
					_set_SessionCookie("graceIncr",this.href); _set_SessionCookie("captlinks",this.href);}
				},false);
		}else{
			hrefURL = allLinks[i].href;
			allLinks[i].attachEvent('onclick',function(){
				_set_SessionCookie("graceIncr",hrefURL); _set_SessionCookie("captlinks",hrefURL);
				});
		}
 	}
}

//START 5.1.3
for (var i = 0, n = allLinks.length; i < n;i++) {
	var r = new RegExp(COMSCORE.SiteRecruit.Broker.config.cddsDomains,'i');
	
	if (r.test(allLinks[i].href)) {
		if (allLinks[i].addEventListener) {
			allLinks[i].addEventListener('click', function(event) {
				if (r.test(this.href)) {
					_set_SessionCookie(COMSCORE.SiteRecruit.Broker.config.domainSwitch, this.href);
				}
			}, false);
		}
		else {
			hrefURL = allLinks[i].href;
			allLinks[i].attachEvent('onclick', function() {
				_set_SessionCookie(COMSCORE.SiteRecruit.Broker.config.domainSwitch, hrefURL);
			});
		}
	}
}
// END 5.1.3

if((_cleRef || _svRef) && document.cookie.indexOf('msresearch') == -1){
			var params ={};
			params.cookiename=COMSCORE.SiteRecruit.Broker.config.cookie.name;
			params.cookieoptions =COMSCORE.SiteRecruit.Broker.config.cookie;
			params.statename=COMSCORE.SiteRecruit.CONSTANTS.STATE_NAME.IDLE;
			params.pid = "p178132240";
			COMSCORE.SiteRecruit.Utils.UserPersistence.setUserObj(params);
}
// START 5.1.3
function crossDomainCheck() {
	if (intervalMax > 0) {
		intervalMax --;
		
		var cookieName = COMSCORE.SiteRecruit.Broker.config.cddsInProgress;
		
		if (COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue(cookieName) != false ) {
			COMSCORE.SiteRecruit.DDKeepAlive.setDDTrackerCookie();
			COMSCORE.SiteRecruit._halt = true;
			clearCrossDomainCheck();
		}
	}
	else {
		clearCrossDomainCheck();
	}
}

function clearCrossDomainCheck() {
	window.clearInterval(crossDomainInterval);
}

var intervalMax = 10;

var crossDomainInterval = window.setInterval('crossDomainCheck()', '1000');
//END CROSS_DOMAIN DEPARTURE FUNCTIONALITY

//CUSTOM - ADD 5 SECOND DELAY ON CALLING BROKER.RUN()
if (COMSCORE.SiteRecruit.Broker.delayConfig == true)  {
	COMSCORE.SiteRecruit.Broker.config.delay = 5000;
}
window.setTimeout('COMSCORE.SiteRecruit.Broker.run()', COMSCORE.SiteRecruit.Broker.config.delay);
// END 5.1.3