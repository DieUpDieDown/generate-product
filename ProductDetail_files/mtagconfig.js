var lpMTagConfig = lpMTagConfig || {};
lpMTagConfig.vars = lpMTagConfig.vars || [];
lpMTagConfig.dynButton = lpMTagConfig.dynButton || [];
lpMTagConfig.lpProtocol = document.location.toString().indexOf("https:") == 0 ? "https" : "http";
lpMTagConfig.pageStartTime = (new Date).getTime();
if (!lpMTagConfig.pluginsLoaded) {
	lpMTagConfig.pluginsLoaded = !1
}
lpMTagConfig.loadTag = function() {
	for (var g = document.cookie.split(";"), f = {}, j = 0; j < g.length; j++) {
		var i = g[j].substring(0, g[j].indexOf("="));
		f[i.replace(/^\s+|\s+$/g, "")] = g[j].substring(g[j].indexOf("=") + 1)
	}
	for (var g = f.HumanClickRedirectOrgSite, f = f.HumanClickRedirectDestSite, j = ["lpTagSrv", "lpServer", "lpNumber", "deploymentID"], i = !0, h = 0; h < j.length; h++) {
		lpMTagConfig[j[h]] || (i = !1, typeof console != "undefined" && console.log && console.log("LivePerson : lpMTagConfig." + j[h] + " is required and has not been defined before lpMTagConfig.load()."))
	}
	if (!lpMTagConfig.pluginsLoaded && i) {
		lpMTagConfig.pageLoadTime = (new Date).getTime() - lpMTagConfig.pageStartTime, g = "?site=" + (g == lpMTagConfig.lpNumber ? f : lpMTagConfig.lpNumber) + "&d_id=" + lpMTagConfig.deploymentID + "&default=simpleDeploy", lpAddMonitorTag(lpMTagConfig.deploymentConfigPath != null ? lpMTagConfig.lpProtocol + "://" + lpMTagConfig.deploymentConfigPath + g : lpMTagConfig.lpProtocol + "://" + lpMTagConfig.lpTagSrv + "/visitor/addons/deploy2.asp" + g), lpMTagConfig.pluginsLoaded = !0
	}
};

function lpAddMonitorTag(d) {
	if (!lpMTagConfig.lpTagLoaded) {
		if (typeof d == "undefined" || typeof d == "object") {
			d = lpMTagConfig.lpMTagSrc ? lpMTagConfig.lpMTagSrc : lpMTagConfig.lpTagSrv ? lpMTagConfig.lpProtocol + "://" + lpMTagConfig.lpTagSrv + "/hcp/html/mTag.js" : "/hcp/html/mTag.js"
		}
		d.indexOf("http") != 0 ? d = lpMTagConfig.lpProtocol + "://" + lpMTagConfig.lpServer + d + "?site=" + lpMTagConfig.lpNumber : d.indexOf("site=") < 0 && (d += d.indexOf("?") < 0 ? "?" : "&", d = d + "site=" + lpMTagConfig.lpNumber);
		var c = document.createElement("script");
		c.setAttribute("type", "text/javascript");
		c.setAttribute("charset", "iso-8859-1");
		c.setAttribute("src", d);
		document.getElementsByTagName("head").item(0).appendChild(c)
	}
}
window.attachEvent ? window.attachEvent("onload", lpMTagConfig.loadTag) : window.addEventListener("load", lpMTagConfig.loadTag, !1);

function lpSendData(f, e, h) {
	if (arguments.length > 0) {
		lpMTagConfig.vars = lpMTagConfig.vars || [], lpMTagConfig.vars.push([f, e, h])
	}
	if (typeof lpMTag != "undefined" && typeof lpMTagConfig.pluginCode != "undefined" && typeof lpMTagConfig.pluginCode.simpleDeploy != "undefined") {
		var g = lpMTagConfig.pluginCode.simpleDeploy.processVars();
		lpMTag.lpSendData(g, !0)
	}
}

function lpAddVars(e, d, f) {
	lpMTagConfig.vars = lpMTagConfig.vars || [];
	lpMTagConfig.vars.push([e, d, f])
};