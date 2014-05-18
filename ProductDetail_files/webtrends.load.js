// WebTrends SmartSource Data Collector Tag v10.4.16
// Copyright (c) 2014 Webtrends Inc.  All rights reserved.
// Tag Builder Version: 4.1.2.12
// Created: 2014.02.06
window.webtrendsAsyncInit=function(){
    var dcs=new Webtrends.dcs().init({
        dcsid:"dcsxxxxxxxxxxxxxxxxxxxxxx_xxxx",
        domain:"statse.webtrendslive.com",
        timezone:8,
        i18n:true,
        fpcdom:".microsoftstore.com.cn",
        plugins:{
            //hm:{src:"//s.webtrends.com/js/webtrends.hm.js"}
        }
        }).track();
};
(function(){
    var s=document.createElement("script"); s.async=true; s.src="/_ui/desktop/common/js/webtrends.min.js";    
    var s2=document.getElementsByTagName("script")[0]; s2.parentNode.insertBefore(s,s2);
}());
