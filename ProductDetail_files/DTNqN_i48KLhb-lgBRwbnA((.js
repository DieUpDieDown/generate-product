
(window.callback10949=window.callback10949||Bootstrapper.new_fArray()).add(function(){Bootstrapper.setCurrentRuleId(10949);var _om_gbls={version:"1205",market:"",host:_TMDL.host,path:_TMDL.path,href:""};var rsidmap={ar:"1",id:"1",my:"1",ph:"1",th:"1",vn:"1",cl:"1",za:"1",il:"1",tr:"1",sa:"1",co:"1",pe:"1",ua:"1"};var temprsidid="";_om_gbls.href=_om_gbls.host+_om_gbls.path;var s_account=_TMDL.rsiddev;if((_TMDL.href.toLowerCase().indexOf("env.design")<0&&window.location.href.toLowerCase().indexOf("env=design")<0)&&(_TMDL.host.indexOf("www.microsoftstore.com")>-1||_TMDL.host.indexOf("surface.microsoftstore.com")>-1||_TMDL.host.indexOf("holiday.microsoftstore.com")>-1||_TMDL.host.indexOf("xbox.microsoftstore.com")>-1||_TMDL.host.indexOf("lobby.microsoftstore.com")>-1||_TMDL.host.indexOf("m.microsoftstore.com")>-1||_TMDL.host.indexOf("devices.microsoftstore.com")>-1)){s_account=_TMDL.rsidprod;try{if(_TMDL.geo&&rsidmap[_TMDL.geo.toLowerCase()]){temprsidid=(rsidmap[_TMDL.geo]=="1")?_TMDL.geo:rsidmap[_TMDL.geo];temprsidid=",msstores1-"+temprsidid+"-prod";s_account+=temprsidid;}}catch(geoerr){}
if(_TMDL.mkt=="jp"||_TMDL.mkt=="kr"){s_account+=",msstores1-dbcs-prod";}
if(_TMDL.host.indexOf("microsoftstore.com.cn")>-1){s_account+=",msstores1-cn2-prod";}}
var _origmkt=_TMDL.mkt_orig.toLowerCase();var extraID="";if(_origmkt=="apac"||_origmkt=="aus"||_origmkt=="kr"||_origmkt=="nz"||_origmkt=="sg"){extraID="msstores1-a13-apac";}else if(_origmkt=="cn"||_origmkt=="hk"||_origmkt=="tw"||_TMDL.mkt=="cn2"){extraID="msstores1-a13-gc";}else if(_origmkt=="latam"||_origmkt=="br"||_origmkt=="mx"){extraID="msstores1-a13-latam";}else if(_origmkt=="eea"&&_TMDL.ll!=="fr-fr"&&_TMDL.ll!=="de-de"&&_TMDL.ll!=="bg-bg"&&_TMDL.ll!=="cs-cz"&&_TMDL.ll!=="et-ee"&&_TMDL.ll!=="hu-hu"){extraID="msstores1-a13-we";}else if(_TMDL.geo=="ru"||_TMDL.geo=="ua"||_origmkt=="eea1"||(_origmkt=="eea"&&(_TMDL.geo=="bg"||_TMDL.geo=="cz"||_TMDL.geo=="ee"||_TMDL.geo=="hu"))){extraID="msstores1-a13-cee";}
if(s_account.indexOf("dev")==-1){s_account+=",msstores1-global-prod";if(extraID){s_account+=","+extraID;}}
var s=s_gi(s_account);window.s=s;window.s_gi=s_gi;window.t_omni_utils=window.t_omni_utils||{omni_StripProtocol:function(url){var strip=['http://','https://'];for(var i=0;i<strip.length;i++){url=url.replace(strip[i],'');}
return url;},omni_StripQS:function(url){if(url.indexOf('?')!=-1){url=url.substring(0,url.indexOf('?'));}
return url;},omniModTracking:function(obj,type,mod1,mod2,altText,destURL,evts,namevaluepairs){var oldltvars=s.linkTrackVars;var oldltevts=s.linkTrackEvents;var allpairs;var pair;s.linkTrackVars="eVar33,eVar34,eVar35,eVar36,eVar37,eVar38,events";s.linkTrackEvents="event25,event26";s.events=(type==1)?"event25":"event26";if(evts&&evts.indexOf('event')>-1){s.linkTrackEvents+=","+evts;s.events+=","+evts;}
destURL=t_omni_utils.omni_StripProtocol(destURL.toLowerCase());if(destURL.indexOf('atdmt.com')>-1){destURL=t_omni_utils.omni_StripQS(destURL);}
var module=(mod2)?mod1+"__"+mod2:mod1;s.eVar33=s.pageName;s.eVar34=mod1;s.eVar35=module;s.eVar36=module+": "+altText;s.eVar37=module+": "+destURL;s.eVar38=s.pageName+": "+s.eVar36;if(namevaluepairs){allpairs=namevaluepairs.split("|");for(var i=0;i<allpairs.length;i++){try{pair=allpairs[i].split("=");if(pair[0].indexOf("eVar")>-1){s[pair[0]]=pair[1];s.linkTrackVars=s.apl(s.linkTrackVars,pair[0],",",2);}}catch(e){}}}
s.trackExternalLinks=false;if(type==0){s.tl(true,"o","imp:"+s.eVar36);}
else{s.tl(obj,"o",s.eVar36);}
s.linkTrackEvents=oldltevts;s.linkTrackVars=oldltvars;s.eVar33=s.eVar34=s.eVar34=s.eVar36=s.eVar37=s.eVar38=s.events="";s.trackExternalLinks=true;}};if(_TMDL.cc){s.currencyCode=_TMDL.cc;}else if(_TMDL.pids&&_TMDL.pids.length){s.currencyCode="unknown";_TMDL.warn+=" Unknown_CC ";}else{s.currencyCode="";}
s.trackDownloadLinks=true;s.trackExternalLinks=true;s.trackInlineStats=true;s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";s.linkInternalFilters="javascript:,microsoftstore.com";s.linkLeaveQueryString=(_TMDL.pagename.indexOf("Surface")>-1)?true:false;s.linkTrackVars="None";s.linkTrackEvents="None";s.loadModule("Media");s.Media.autoTrack=false;s.Media.trackVars="None";s.Media.trackEvents="None";s.Media.trackWhilePlaying=true;s.Media.trackMilestones="2,25,75,90";s.usePlugins=true;s.ActionDepthTest=true;function s_doPlugins(s){var cmptemp=s.getQueryParam('wt.mc_id');var pth,ind,a,b;if(!cmptemp){try{pth=window.location.pathname;ind=pth.toLowerCase().indexOf("wt.mc_id");if(ind>-1){cmptemp=pth.substring(ind+9);a=cmptemp.indexOf("&");b=cmptemp.indexOf("/");if(a>-1&&b>-1){cmptemp=(a<b)?cmptemp.substring(0,a):cmptemp.substring(0,b);}else if(a>-1){cmptemp=cmptemp.substring(0,a);}else if(b>-1){cmptemp=cmptemp.substring(0,b);}}}catch(d2cerr){}}
if(!s.campaign){s.campaign=s.getValOnce(cmptemp,'s_campaign',0);}
if(!s.eVar25){s.eVar25=s.getValOnce(s.getQueryParam('icid'),'s_icampaign',0);}
if(s.eVar25){s.eVar47="D=v25";}
if(s.campaign&&s.pageName){s.prop12=s.campaign+": "+s.pageName;}else{s.prop12=s.pageName;}
if(s.pageName){var prevPage=s.getPreviousValue(s.pageName,'s_gpv_page');}
if(s.prop5){s.eVar5=s.prop5;var tSearch=s.getValOnce(s.eVar5,"s_eVar5",0);if(tSearch){s.events=s.apl(s.events,"event6",",",2);if(prevPage){s.prop6=prevPage;}}}
if(s.pageName){s.eVar6=s.pageName;}
s.prop2=s.eVar2=s.getDaysSinceLastVisit('s_lv');s.prop1=s.eVar1=s.getNewRepeat();s.eVar8="D=User-Agent";s.prop8="D=User-Agent";if(s.eVar9){s.prop9="D=v9";}
if(s.events&&s.events.indexOf('purchase')>-1){s.prop11=s.eVar11=s.getNewRepeat(365,'s_nrBuyer');}
if(s.ActionDepthTest){s.eVar32=s.getActionDepth("s_depth");}
s.channelManager('cid','','s_cm','0');s.eVar12=s._referrer;s.eVar13=s._referringDomain;s.eVar14=s._partner;s.eVar15=s._keywords;s.eVar16=s._channel;s.prop50=_TMDL.mkt;s.linkTrackVars=s.apl(s.linkTrackVars,"prop50",",",2);s.eVar41="D=g";s.prop42="D=pev1";s.prop18=s.getAndPersistValue(s.campaign,'s_cmp2',30);if(s.prop18)s.apl(s.linkTrackVars,"prop18",",",2);try{s.eVar44=s.c_r('VISITOR_ID');}catch(err){}
s.linkTrackVars=s.apl(s.linkTrackVars,"eVar44",",",2);s.linkTrackVars=s.apl(s.linkTrackVars,"prop42",",",2);}
s.doPlugins=s_doPlugins;function s_getObjectID(o){var ID=o.href;return ID;}
s.getObjectID=s_getObjectID;s.m_Media_c="var m=s.m_i('Media');if(m.completeByCloseOffset==undefined)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==undefined)m.completeCloseOffsetThreshold=1;m.cn=function(n){var m="
+"this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=new Object;"
+"if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.o=0;i.x=0;i.p=m.cn(m.playerName?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm"
+".getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.us=0;i.co=0;i.cot=0;i.lm=0;i.lom=0;m.l[n]=i}};m._delete=function(n){var"
+" m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,sl);if(i&&!i.m){i.m=new Object;"
+"i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m()}};m.complete=function(n,o){th"
+"is.e(n,5,o)};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=vo.linkTrackEvents,pe='m_i',pev3,c=vo.context"
+"Data,x;c['a.contentType']='video';c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0){c[ns+'length']=i.l;}c[ns+'timePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view']=true;pe='m_s';i.vt=1}if(i.sx){c[ns"
+"+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView']=true}if(!i.cot&&i.co){c[ns+\"complete\"]=true;i.cot=1}if(i.lm>0)c[ns+'milestone']=i"
+".lm;if(i.lom>0)c[ns+'offsetMilestone']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3='video';vo.pe=pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo.events2='';if(v)v+=',events';for(x i"
+"n d){if(x.substring(0,ns.length)==ns)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='string'){l=m.s.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a.contentType\"){if(v)v+=','+a;vo[a]="
+"c[x]}else if(y){if(y=='view'||y=='segmentView'||y=='complete'||y=='timePlayed'){if(e)e+=','+a;if(c[x]){if(y=='timePlayed'){if(c[x])vo.events2+=(vo.events2?',':'')+a+'='+c[x];}else if(c[x])vo.events"
+"2+=(vo.events2?',':'')+a}}else if(y=='segment'&&c[x+'Num']){if(v)v+=','+a;vo[a]=c[x+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}}else if(y=='milestones'||y=='offsetMilestones'){x=x.substring(0,"
+"x.length-1);if(c[x]&&d[x+'s'][c[x]]){if(e)e+=','+d[x+'s'][c[x]];vo.events2+=(vo.events2?',':'')+d[x+'s'][c[x]]}}}vo.contextData=0}vo.linkTrackVars=v;vo.linkTrackEvents=e};m.bpe=function(vo,i,x,o){v"
+"ar m=this,pe='m_o',pev3,d='--**--';pe='m_o';if(!i.vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s.ape(i.p)+d+Math.floor(i.t)+d+i.s+d+(i.to>=0?'L'+Math.fl"
+"oor(i.to):'')+i.e+(x!=0&&x!=2?'L'+Math.floor(o):'');vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),c,l,v=m.trackVars,e=m.trackEvent"
+"s,ti=m.trackSeconds,tp=m.trackMilestones,to=m.trackOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,ek,tc,vo=new Object;n=m.cn(n);i=n&&m.l&&"
+"m.l[n]?m.l[n]:0;if(i){if(o<0){if(i.lx==1&&i.lt>0)o=(ts-i.lt)+i.lo;else o=i.lo}if(i.l>0)o=o<i.l?o:i.l;if(o<0)o=0;i.o=o;if(i.l>0){i.x=(i.o/i.l)*100;i.x=i.x>100?100:i.x}if(i.lo<0)i.lo=o;tc=i.tc;w.name"
+"=n;w.length=i.l;w.openTime=new Date;w.openTime.setTime(i.s*1000);w.offset=i.o;w.percent=i.x;w.playerName=i.p;if(i.to<0)w.mediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP"
+"':(x==3?'MONITOR':(x==4?'TRACK':(x==5?'COMPLETE':('CLOSE'))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd;if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i"
+".lo=o;if((x<=3||x==5)&&i.to>=0){t=0;v=e=\"None\";if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s.sp(tp,','):0;if(i.l>0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l/i"
+".l)*100<c&&i.x>=c){t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s.sp(to,','):0;if(z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z"
+".length;w.mediaEvent=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m.s.sp(tp,',');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat('"
+"'+z[j]):0;if(c){if(i.x<c){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s.sp(to,',');if(z){z[z.length]=''+(i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if("
+"c||z[j]=='E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if((sx||i.sx)&&sx!=i.sx){i.us=1;if(!i.sx){i.sn=sn;i.sx=sx}if(i.to>=0)t=1}if(x>=2&&i.lo<o){i.t+=o-i.lo;i.ts+=o-"
+"i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&&x<=3){ti=ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}}i.lt=ts;i.lo=o}if(!x||i.x>"
+"=100){x=0;m.e(n,2,-1,0,0,-1,pd);v=e=\"None\";w.mediaEvent=w.event=\"CLOSE\"}if(x==5||(m.completeByCloseOffset&&(!x||i.x>=100)&&i.l>0&&o>=i.l-m.completeCloseOffsetThreshold)){w.complete=i.co=1;t=1}e"
+"k=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILESTONE')ek+='_'+w.offsetMilestone;if(!i.fel[ek]) {w.eventFirstTime=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePl"
+"ayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!=4)m.monitor(m.s,w);if(x==0)m._delete(n);if(t&&i.tc==tc){vo=new Object;vo.contextData=new Object;vo.linkTrackVars=v;vo"
+".linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEvents)vo.linkTrackEvents='';if(m.trackUsingContextData)m.bcd(vo,i);else m.bpe(vo,i,x,o);m.s.t(vo);if(i.us){i.sn=sn;i.sx="
+"sx;i.sc=1;i.us=0}else if(i.ts>0)i.sc=0;i.e=\"\";i.lm=i.lom=0;i.ts-=Math.floor(i.ts);i.to=o;i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl,pd,b){var m=this,r=0;if(n&&(!m.autoTrackMediaLengthReq"
+"uired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b);r=1}}else r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,x"
+"c=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s"
+"_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new Function('o','var e,p=0;try{if(o.versionInfo&&o.curre"
+"ntMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o'"
+",'var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-"
+"1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}"
+"';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='text/javascript';x.htmlFor=i;x.event='PlayStateC"
+"hange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()"
+"?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+"
+"';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l"
+",\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '"
+"+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if"
+"(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'"
+"+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)"
+"\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTag"
+"Name(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,fal"
+"se);if(m.onLoad)m.onLoad(s,m)";s.m_i("Media");s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");s.getDaysSinceLastVisit=new Function("c",""
+"var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"
+"ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s"
+"etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"
+"2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"
+"5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);"
+"s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"
+"y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"
+"){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s."
+"c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c"
+"_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c"
+"+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur"
+"n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"
+"!=f5) return '';else return cval_s;");s.getActionDepth=new Function("c",""
+"var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);"
+"if(!s.c_r(c)){v=1}if(s.c_r(c)){v=s.c_r(c);v++}"
+"if(!s.c_w(c,v,t)){s.c_w(c,v,0)}return v;");s.getAndPersistValue=new Function("v","c","e",""
+"var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
+"v)s.c_w(c,v,e?a:0);return s.c_r(c);");s.channelManager=new Function("a","b","c","d","e","f",""
+"var s=this,A,B,g,l,m,M,p,q,P,h,k,u,S,i,O,T,j,r,t,D,E,F,G,H,N,U,v=0,"
+"X,Y,W,n=new Date;n.setTime(n.getTime()+1800000);if(e){v=1;if(s.c_r("
+"e)){v=0}if(!s.c_w(e,1,n)){s.c_w(e,1,0)}if(!s.c_r(e)){v=0}}g=s.refer"
+"rer?s.referrer:document.referrer;g=g.toLowerCase();if(!g){h=1}i=g.i"
+"ndexOf('?')>-1?g.indexOf('?'):g.length;j=g.substring(0,i);k=s.linkI"
+"nternalFilters.toLowerCase();k=s.split(k,',');l=k.length;for(m=0;m<"
+"l;m++){B=j.indexOf(k[m])==-1?'':g;if(B)O=B}if(!O&&!h){p=g;U=g.index"
+"Of('//');q=U>-1?U+2:0;Y=g.indexOf('/',q);r=Y>-1?Y:i;t=g.substring(q"
+",r);t=t.toLowerCase();u=t;P='Referrers';S=s.seList+'>'+s._extraSear"
+"chEngines;if(d==1){j=s.repl(j,'oogle','%');j=s.repl(j,'ahoo','^');g"
+"=s.repl(g,'as_q','*')}A=s.split(S,'>');T=A.length;for(i=0;i<T;i++){"
+"D=A[i];D=s.split(D,'|');E=s.split(D[0],',');F=E.length;for(G=0;G<F;"
+"G++){H=j.indexOf(E[G]);if(H>-1){i=s.split(D[1],',');U=i.length;for("
+"k=0;k<U;k++){l=s.getQueryParam(i[k],'',g);if(l){l=l.toLowerCase();M"
+"=l;if(D[2]){u=D[2];N=D[2]}else{N=t}if(d==1){N=s.repl(N,'#',' - ');g"
+"=s.repl(g,'*','as_q');N=s.repl(N,'^','ahoo');N=s.repl(N,'%','oogle'"
+");}}}}}}}if(!O||f!='1'){O=s.getQueryParam(a,b);if(O){u=O;if(M){P='P"
+"aid Search'}else{P='Paid Non-Search';}}if(!O&&M){u=N;P='Natural Sea"
+"rch'}}if(h==1&&!O&&v==1){u=P=t=p='Direct Load'}X=M+u+t;c=c?c:'c_m';"
+"if(c!='0'){X=s.getValOnce(X,c,0);}g=s._channelDomain;if(g&&X){k=s.s"
+"plit(g,'>');l=k.length;for(m=0;m<l;m++){q=s.split(k[m],'|');r=s.spl"
+"it(q[1],',');S=r.length;for(T=0;T<S;T++){Y=r[T];Y=Y.toLowerCase();i"
+"=j.indexOf(Y);if(i>-1)P=q[0]}}}g=s._channelParameter;if(g&&X){k=s.s"
+"plit(g,'>');l=k.length;for(m=0;m<l;m++){q=s.split(k[m],'|');r=s.spl"
+"it(q[1],',');S=r.length;for(T=0;T<S;T++){U=s.getQueryParam(r[T]);if"
+"(U)P=q[0]}}}g=s._channelPattern;if(g&&X){k=s.split(g,'>');l=k.lengt"
+"h;for(m=0;m<l;m++){q=s.split(k[m],'|');r=s.split(q[1],',');S=r.leng"
+"th;for(T=0;T<S;T++){Y=r[T];Y=Y.toLowerCase();i=O.toLowerCase();H=i."
+"indexOf(Y);if(H==0)P=q[0]}}}if(X)M=M?M:'n/a';p=X&&p?p:'';t=X&&t?t:'"
+"';N=X&&N?N:'';O=X&&O?O:'';u=X&&u?u:'';M=X&&M?M:'';P=X&&P?P:'';s._re"
+"ferrer=p;s._referringDomain=t;s._partner=N;s._campaignID=O;s._campa"
+"ign=u;s._keywords=M;s._channel=P");s.seList="search.aol.com,search.aol.ca|query,q|AOL.com Search>ask.com"
+",ask.co.uk|ask,q|Ask Jeeves>google.co,googlesyndication.com|q,as_q|"
+"Google>google.com.ar|q,as_q|Google - Argentina>google.com.au|q,as_q"
+"|Google - Australia>google.be|q,as_q|Google - Belgium>google.com.br"
+"|q,as_q|Google - Brasil>google.ca|q,as_q|Google - Canada>google.cl|"
+"q,as_q|Google - Chile>google.cn|q,as_q|Google - China>google.com.co"
+"|q,as_q|Google - Colombia>google.dk|q,as_q|Google - Denmark>google."
+"com.do|q,as_q|Google - Dominican Republic>google.fi|q,as_q|Google -"
+" Finland>google.fr|q,as_q|Google - France>google.de|q,as_q|Google -"
+" Germany>google.gr|q,as_q|Google - Greece>google.com.hk|q,as_q|Goog"
+"le - Hong Kong>google.co.in|q,as_q|Google - India>google.co.id|q,as"
+"_q|Google - Indonesia>google.ie|q,as_q|Google - Ireland>google.co.i"
+"l|q,as_q|Google - Israel>google.it|q,as_q|Google - Italy>google.co."
+"jp|q,as_q|Google - Japan>google.com.my|q,as_q|Google - Malaysia>goo"
+"gle.com.mx|q,as_q|Google - Mexico>google.nl|q,as_q|Google - Netherl"
+"ands>google.co.nz|q,as_q|Google - New Zealand>google.com.pk|q,as_q|"
+"Google - Pakistan>google.com.pe|q,as_q|Google - Peru>google.com.ph|"
+"q,as_q|Google - Philippines>google.pl|q,as_q|Google - Poland>google"
+".pt|q,as_q|Google - Portugal>google.com.pr|q,as_q|Google - Puerto R"
+"ico>google.ro|q,as_q|Google - Romania>google.com.sg|q,as_q|Google -"
+" Singapore>google.co.za|q,as_q|Google - South Africa>google.es|q,as"
+"_q|Google - Spain>google.se|q,as_q|Google - Sweden>google.ch|q,as_q"
+"|Google - Switzerland>google.co.th|q,as_q|Google - Thailand>google."
+"com.tr|q,as_q|Google - Turkey>google.co.uk|q,as_q|Google - United K"
+"ingdom>google.co.ve|q,as_q|Google - Venezuela>bing.com|q|Microsoft "
+"Bing>naver.com,search.naver.com|query|Naver>yahoo.com,search.yahoo."
+"com|p|Yahoo!>ca.yahoo.com,ca.search.yahoo.com|p|Yahoo! - Canada>yah"
+"oo.co.jp,search.yahoo.co.jp|p,va|Yahoo! - Japan>sg.yahoo.com,sg.sea"
+"rch.yahoo.com|p|Yahoo! - Singapore>uk.yahoo.com,uk.search.yahoo.com"
+"|p|Yahoo! - UK and Ireland>search.cnn.com|query|CNN Web Search>sear"
+"ch.earthlink.net|q|Earthlink Search>search.comcast.net|q|Comcast Se"
+"arch>search.rr.com|qs|RoadRunner Search>optimum.net|q|Optimum Searc"
+"h";s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)l=l?l+d+v:v;return l");s.setupDynamicObjectIDs=new Function(""
+"var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv"
+">=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else"
+" if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,fa"
+"lse);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semapho"
+"re=1}");s.setOIDs=new Function("e",""
+"var s=s_c_il["+s._in+"],b=s.eh(s.wd,'onload'),o='onclick',x,l,u,c,i"
+",a=new Array;if(s.doiol){if(b)s[b]=s.wd[b];s.doiol(e)}if(s.d.links)"
+"{for(i=0;i<s.d.links.length;i++){l=s.d.links[i];c=l[o]?''+l[o]:'';b"
+"=s.eh(l,o);z=l[b]?''+l[b]:'';u=s.getObjectID(l);if(u&&c.indexOf('s_"
+"objectID')<0&&z.indexOf('s_objectID')<0){u=s.repl(u,'\"','');u=s.re"
+"pl(u,'\\n','').substring(0,97);l.s_oc=l[o];a[u]=a[u]?a[u]+1:1;x='';"
+"if(c.indexOf('.t(')>=0||c.indexOf('.tl(')>=0||c.indexOf('s_gs(')>=0"
+")x='var x=\".tl(\";';x+='s_objectID=\"'+u+'_'+a[u]+'\";return this."
+"s_oc?this.s_oc(e):true';if(s.isns&&s.apv>=5)l.setAttribute(o,x);l[o"
+"]=new Function('e',x)}}}s.wd.s_semaphore=0;return true");s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+"=p.length?i:i+1)}return v");s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");s.join=new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");s.getValOnce=new Function("v","c","e",""
+"var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c"
+");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return"
+" v==k?'':v");s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");s.p_fo=new Function("n",""
+"var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="
+"new Object;return 1;}else {return 0;}");s.visitorNamespace="microsoftwindows";s.trackingServer="microsoftwindows.112.2o7.net";var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.24.4';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(m,\"\\n\",\"\\\\n\"),\""
+"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){retur"
+"n x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p"
+"<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toU"
+"pperCase():'';if(x){x=''+x;if(s.em==3)x=encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h"
+".substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=escape(''+x);x=s.rep(x,'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('"
+"%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x)"
+"{var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x):unescape(x)}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substri"
+"ng(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a"
+"=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var"
+" s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l="
+"s.sp('webkitvisibilitychange,visibilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilitySta"
+"te;if(s.mpq&&v==\"visible\"){while(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,"
+"c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'"
+"}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){v"
+"ar s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf"
+"('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':"
+"s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='N"
+"ONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString"
+"()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i"
+"].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.a"
+"pv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.w"
+"d,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c"
+"=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tf"
+"s=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=thi"
+"s,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s."
+"trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.ne"
+"t';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mob"
+"ile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if"
+"(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;"
+"r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_"
+"il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dl"
+"n<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-"
+"b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf="
+"function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='"
+"',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+="
+"8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if"
+"(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c='"
+"'}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\""
+";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nf"
+"l.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substr"
+"ing(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f"
+".indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')s"
+"k='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=f"
+"unction(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrac"
+"kEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',e"
+"vents,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf"
+"(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=="
+"'referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visit"
+"orMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visit"
+"orNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';el"
+"se if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else i"
+"f(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=="
+"'events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSe"
+"conds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';els"
+"e if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier"
+"'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0"
+"?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s"
+".lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lf"
+"t,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','v"
+"ar s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cpp"
+"XYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");tcf(s);s.eo=0');s.oh=functi"
+"on(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l"
+".protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o)"
+"{var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type."
+"toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&("
+"!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o."
+"value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s="
+"this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return '"
+"'};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('="
+"'),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c"
+"_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s"
+".sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Funct"
+"ion('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0|"
+"|oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachE"
+"vent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplin"
+"gGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=fu"
+"nction(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))re"
+"turn n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLower"
+"Case)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',argument"
+"s))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s."
+"m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il"
+"','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]]"
+")r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",a"
+"rguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if(("
+"\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)f"
+"or(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){"
+"if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g["
+"i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.subs"
+"tring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_"
+"c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.m"
+"axDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.t"
+"ype=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o"
+"=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=funct"
+"ion(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}"
+"}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s."
+"dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDel"
+"ay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s"
+".track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt="
+"tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',v"
+"b=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn"
+"=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new "
+"Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v"
+"=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if("
+"s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage"
+"(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}i"
+"f(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidt"
+"h=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.documen"
+"t.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o"
+"),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.o"
+"nclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.link"
+"Name;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageUR"
+"L;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape("
+"t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referre"
+"r=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}else s.dl(vo);if(vo)s.voa(vb,1);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if("
+"s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};s.trackLight=function(p,ss,"
+"i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i"
+"];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml"
+")for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if"
+"(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.loc"
+"ation.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6"
+"=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer')"
+";s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=par"
+"seFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpp"
+"erCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServer"
+"Secure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,"
+"deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,"
+"lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',"
+"prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,jav"
+"ascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,tra"
+"ckingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExte"
+"rnalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s."
+"sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){s_gi(\"_\",1,1).co(o)};s.wd.s_gs=function(un){s_gi(un,1,1).t("
+")};s.wd.s_dc=function(un){s_gi(un,1).t()}}",w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s};function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf();(function(){var tp=_TMDL.path;var ref=document.referrer;var products=[];var prodstring="";var delim="";var temppage="";s.server=_TMDL.host;s.pageName=(_TMDL.pageType==="receipt")?_TMDL.pagename+": "+_TMDL.path:_TMDL.pagename;if(_TMDL.mkt=="us"&&_TMDL.pageType=="detail"){s.pageName="Product: "+_TMDL.pagename;}
s.channel=_TMDL.channel;s.prop3=_TMDL.pageType;s.prop4='D=c3';s.eVar3='D=c3';s.eVar4='D=c3';s.prop10=_TMDL.mkt+": "+_TMDL.ll;s.eVar10="D=c10";if(_TMDL.geo){s.eVar7=_TMDL.geo;}
if(_TMDL.carrier){s.prop32=_TMDL.carrier;}
if(_TMDL.phone_newold){s.prop33=_TMDL.phone_newold;}
s.prop20=_TMDL.path;s.eVar42="D=pev2";s.eVar43="D=c20";s.prop40=_TMDL.cc;if(Bootstrapper.intid1){s.eVar70=s.getValOnce(Bootstrapper.intid1,'WTintid1',0);}
if(!s.eVar71){s.eVar71=s.getValOnce(s.getQueryParam('WT.intid2'),'WTintid2',0);}
if(Bootstrapper.oem){s.eVar72=s.getValOnce(Bootstrapper.oem,'oemreferralid',0);}
if(s.prop10){s.eVar74="D=c10";}
if(_TMDL.mkt=="us"){if(_TMDL.path.indexOf("msusa")>-1){if(_TMDL.path.indexOf("categoryid.63433700")>-1){s.eVar9="Student";}else if(_TMDL.path.indexOf("categoryid.63433800")>-1){s.eVar9="Small Business";}else if(_TMDL.path.indexOf("categoryid.63433900")>-1){s.eVar9="Developer";}}}
if(_TMDL.pids.length){for(var i=0;i<_TMDL.pids.length;i++){if(_TMDL.pageType=="receipt"){products.push(";"+_TMDL.pids[i]+";"+_TMDL.quantities[i]+";"+_TMDL.sales[i]);}else{products.push(";"+_TMDL.pids[i]);}}
prodstring=products.join(",");}
if(_TMDL.pagename){temppage=_TMDL.pagename.toLowerCase();if(temppage.indexOf("checkout_shopping_cart")>-1)s.events=s.apl(s.events,"scOpen",",",2);if(temppage.indexOf("checkout_customer_info")>-1)s.events=s.apl(s.events,"scCheckout",",",2);if(temppage.indexOf("checkout_confirm")>-1)s.events=s.apl(s.events,"event37",",",2);if(temppage.indexOf("checkout_edit_credit_card_info")>-1||_TMDL.pageType=="checkout_edit_credit_card_info")s.events=s.apl(s.events,"event36",",",2);}
if(_TMDL.path.indexOf("displaywlidcontent")>-1)s.events=s.apl(s.events,"event12",",",2);try{if(_TMDL.warn){s.prop24=_TMDL.warn;}
if(window.location.search&&window.location.search.indexOf("id=ServerErrorPage")>-1){s.pageName="ServerErrorPage";}}catch(truncerr){}
if(_TMDL.promo){s.eVar23=s.prop15=_TMDL.promo;}
if(_TMDL.pageType=="detail"){s.events=s.apl(s.events,"prodview",",",2);s.products=prodstring;}else if(_TMDL.pageType=="interstitial"){s.products=prodstring;s.pageName="Interstitial: "+_TMDL.pagename;s.events=s.apl(s.events,"scOpen",",",2);s.events=s.apl(s.events,"event13",",",2);}else if(_TMDL.pageType=="receipt"){s.purchaseID=_TMDL.purchaseID;s.eVar31=s.purchaseID;s.events=s.apl(s.events,"purchase",",",2);s.products=prodstring;}else if(_TMDL.channel.toLowerCase().indexOf("checkout")>-1&&_TMDL.pids.length){s.products=prodstring;}else if(_TMDL.pageType.toLowerCase().indexOf("search result")>-1||_TMDL.pageType=="search"){s.prop5=_TMDL.query;if(_TMDL.view=="mobile"){s.prop5=s.getQueryParam('keyword');}}
if(_TMDL.refresh){s.events=s.apl(s.events,"event61",",",2);}
try{if(_TM){if(_TM.r){s.prop47=_TM.r;}
if(_TM.errorcode){s.pageName="ServerErrorPage: "+_TM.errorcode;if(_TM.errortype){s.pageName+=" "+_TM.errortype;}}}}catch(tmerr){}
try{s.t();}catch(e){}})();});try{Bootstrapper.setCurrentRuleId(10949);var _TMDL=_TMDL||{browser:"",browserVersion:"",busgrp:[],carrier:"",cc:"Unknown",channel:"other",country:"",debug:[],geo:"",host:window.location.hostname.toLowerCase(),href:"",intid1:"",intid2:"",json:"",lang:"",langgeo:"",ll:"other",loc:"",marinID:"",mc_id:"",mkt:"other",mkt_orig:"other",numresults:"",oem:"",os:"",osVersion:"",pageName:"",pageType:"other",path:window.location.pathname.toLowerCase(),patharr:[],pcategory:"",pcategories:[],phone_newold:"",pids:[],pname:"",pnames:[],promo:"",prot:"",purchaseID:"",query:"",quantities:[],refresh:0,revsumdiv:[],sales:[],skus:[],skus_noprefix:[],student:"",testflag:false,totamount:0,warn:"",view:"",getMeta:function(mn){var m=document.getElementsByTagName('meta');for(var i in m){if(m[i].name==mn){return m[i].content;}}
return"";},appendCustomMeta:function(tn,tv){var meta;var appendTarget=document.getElementsByTagName('head').item(0);if(document.createElement&&(meta=document.createElement('meta'))){meta.name=tn;meta.content=tv;appendTarget.appendChild(meta);}}};_TMDL.href=_TMDL.host+_TMDL.path;_TMDL.prot=(window.location.protocol=="https:")?"https:":"http:";_TMDL.update=function(evttype){};if(typeof _TM!='undefined'){try{if(_TM.mkt==="SG"&&_TM.pagetype=="PDP"){if(typeof _TM.pids!='undefined'){_TM.pids=_TM.pids.split(",");}
if(typeof _TM.sku!='undefined'){_TM.sku=_TM.sku.split(",");}
if(typeof _TM.q!='undefined'){_TM.q=_TM.q.split(",");}
if(typeof _TM.r!='undefined'){_TM.r=_TM.r.split(",");}
if(typeof _TM.busgrp!='undefined'){_TM.busgrp=_TM.busgrp.split(",");}
if(typeof _TM.revsumdiv!='undefined'){_TM.revsumdiv=_TM.revsumdiv.split(",");}
if(typeof _TM.isdl!='undefined'){_TM.isdl=_TM.isdl.split(",");}
if(typeof _TM.ismsft!='undefined'){_TM.ismsft=_TM.ismsft.split(",");}
if(typeof _TM.isphys!='undefined'){_TM.isphys=_TM.isphys.split(",");}
if(typeof _TM.issoft!='undefined'){_TM.issoft=_TM.issoft.split(",");}}else if(_TM.mkt==="SG"&&typeof _TM.products!='undefined'){_TM.geo="sg";if(typeof _TM.products.pids!='undefined'){_TM.pids=_TM.products.pids;}
if(typeof _TM.products.pnames!='undefined'){_TM.pnames=_TM.products.pnames;}
if(typeof _TM.products.q!='undefined'){_TM.q=_TM.products.q;}
if(typeof _TM.products.r!='undefined'){_TM.r=_TM.products.r;}
if(typeof _TM.products.busgrp!='undefined'){_TM.busgrp=_TM.products.busgrp;}
if(typeof _TM.products.revsumdiv!='undefined'){_TM.revsumdiv=_TM.products.revsumdiv;}
if(typeof _TM.products.isdl!='undefined'){_TM.isdl=_TM.products.isdl;}
if(typeof _TM.products.ismsft!='undefined'){_TM.ismsft=_TM.products.ismsft;}
if(typeof _TM.products.isphys!='undefined'){_TM.isphys=_TM.products.isphys;}
if(typeof _TM.products.issoft!='undefined'){_TM.issoft=_TM.products.issoft;}}}catch(sgerr){}
if(_TMDL.host=="m.microsoftstore.com"){_TM.geo="US";}
_TM.pageType=_TM.pagetype;if(_TM.pagetype)_TMDL.pageType=_TM.pagetype.toLowerCase();if(_TM.cc)_TMDL.cc=_TM.cc.toLowerCase();if(_TM.channel)_TMDL.channel=_TM.channel;if(_TM.ll)_TMDL.ll=_TM.ll.toLowerCase();if(_TM.mkt)_TMDL.mkt=_TM.mkt.toLowerCase();if(_TM.geo)_TMDL.geo=_TM.geo.toLowerCase();if(_TMDL.mkt=="cn")_TMDL.geo="cn";if(_TM.pagename)_TMDL.pagename=_TM.pagename;if(_TM.pids)_TMDL.pids=_TM.pids;if(_TM.pname)_TMDL.pnames=_TM.pname;if(_TM.pnames)_TMDL.pnames=_TM.pnames;if(_TM.prc)_TMDL.promo=_TM.prc;if(_TM.query)_TMDL.query=_TM.query;if(_TM.tx_i)_TMDL.purchaseID=_TM.tx_i;if(_TM.q)_TMDL.quantities=_TM.q;if(_TM.r)_TMDL.sales=_TM.r;if(_TM.sku)_TMDL.skus=_TM.sku;if(_TM.view)_TMDL.view=_TM.view.toLowerCase();if(_TM.busgrp)_TMDL.busgrp=_TM.busgrp;if(_TM.revsumdiv){_TMDL.revsumdiv=_TM.revsumdiv;}
if(!_TM.pagename&&_TM.pagetype){_TMDL.pagename=_TMDL.pageType;}
if(!_TM.pagename&&!_TM.pagetype){_TMDL.pagename=_TMDL.path;}
if(_TM.newold){_TMDL.phone_newold=_TM.newold;}
if(_TM.carrier){_TMDL.carrier=_TM.carrier;}
if(_TM.pids&&_TM.r&&(_TM.pids.length>1&&_TM.r.length==1)){if(_TM.r[0].indexOf(",")>-1){_TMDL.sales=_TM.r[0].split(",");}}
if(_TM.refresh&&_TM.refresh[0]==1){_TMDL.refresh=1;_TMDL.pageType="Order Reload";_TMDL.pagename="Order Reload";}
if(_TM.tx_i){_TMDL.debug.push("tx_i|"+_TM.tx_i);}
if(_TM.prc){_TMDL.debug.push("prc|"+_TM.prc);}
if(_TM.r){_TMDL.debug.push("r|"+_TM.r);}
if(_TM.q){_TMDL.debug.push("q|"+_TM.q);}
if(_TM.pids){_TMDL.debug.push("pids|"+_TM.pids);}}
if(typeof _TM=='undefined'){_TMDL.patharr=window.location.pathname.split("/");if(_TMDL.patharr.length>3&&_TMDL.patharr[2].indexOf("ms")>-1){_TMDL.mkt=_TMDL.patharr[2].replace("ms","").toLowerCase();_TMDL.pagename=_TMDL.path.toLowerCase();if(_TMDL.patharr.length>3&&_TMDL.patharr[3].indexOf("_")>-1){_TMDL.ll=_TMDL.patharr[3].replace("_","-").toLowerCase();}}}
var _pricecap_=90000;if(_TMDL.sales&&_TMDL.sales.length>0){if(_TMDL.mkt=="apac"){_pricecap_=200000;}
if(_TMDL.mkt=="mea"&&_TMDL.cc!=="usd"&&_TMDL.cc!=="eur"){_pricecap_=1000000;}
if(_TMDL.mkt=="latam"&&_TMDL.cc!=="usd"&&_TMDL.cc!=="eur"){_pricecap_=2000000;}
if(_TMDL.cc=="kor"||_TMDL.cc=="krw"||_TMDL.cc=="jpy"||_TMDL.cc=="php"||_TMDL.cc=="twd"){_pricecap_=3000000;}
if(_TMDL.cc=="idr"||_TMDL.cc=="iqd"){_pricecap_=10000000;}
if(_TMDL.cc=="eur"||_TMDL.cc=="usd"||_TMDL.cc=="gbp"){_pricecap_=60000;}
for(var i=0;i<_TMDL.sales.length;i++){if(parseInt(_TMDL.sales[i])>_pricecap_){_TMDL.warn="high test price: "+_TMDL.sales[i];_TMDL.sales[i]="10";}}}
if(_TMDL.host=="www.microsoftstore.com.cn"){_TMDL.mkt="cn";_TM.geo="cn";_TM.ll="zh-cn";_TMDL.geo="cn";_TMDL.ll="zh-cn";}else if(_TMDL.host=="devices.microsoftstore.com.hk"){_TMDL.mkt="hk";}
_TMDL.hreflow=window.location.href.toLowerCase();if(_TMDL.hreflow.indexOf("displayavestatuspage")>-1){if(_TMDL.hreflow.indexOf("variable=false")>-1){_TMDL.student="n";}else if(_TMDL.hreflow.indexOf("variable=true")>-1){_TMDL.student="y";}}
(function(){try{var _pagetypemap={"search result":"search","pdp":"detail","checkout_order_thank_you":"receipt","checkout_thankyou":"receipt"};if((typeof _TM!='undefined')&&_TM.pagetype){if(_pagetypemap[_TM.pagetype.toLowerCase()]){_TMDL.pageType=_pagetypemap[window._TM.pagetype.toLowerCase()];}}
for(var i=0;i<_TMDL.skus.length;i++){_TMDL.skus_noprefix[i]=(_TMDL.skus[i].indexOf("B-")==0)?_TMDL.skus[i].slice(2):_TMDL.skus[i];}
if(_TMDL.pageType=="detail"&&window.location.search&&window.location.search.indexOf("testptest=testptest")>-1){_TMDL.pageType="receipt";_TMDL.purchaseID="12345";_TMDL.testflag=true;}
if(_TMDL.view=="mobile"){if(_TMDL.pageType=="default"||_TMDL.pageType=="category"){_TMDL.pagename=_TMDL.path;}
_TMDL.pagename="mobile: "+_TMDL.pagename;_TMDL.channel="mobile: "+_TMDL.channel;}
var llstart,llto,newll;if((typeof _TM!='undefined')&&_TM.ll&&_TM.ll.indexOf('">')>-1){llstart=_TM.ll.indexOf('">');llto=_TM.ll.indexOf('</');if(llstart>-1&&llto>-1){newll=_TM.ll.substring(llstart+2,llto).toLowerCase();newll=newll.replace("_","-");}
_TMDL.ll=newll;}}catch(e){}})();_TMDL.dcsid="dcs123456_123567";_TMDL.marinID="123456";_TMDL.rsidprod="msstores1-newdr-dev";_TMDL.rsiddev="msstores1-newdr-dev";_TMDL.Route="";_TMDL.Ctrl="";if(_TMDL.ll){var llarr=_TMDL.ll.split("-");_TMDL.lang=llarr[0];if(llarr[1]){_TMDL.loc=llarr[1];}}
if(_TMDL.geo){_TMDL.loc=_TMDL.geo;}
_TMDL.langgeo=_TMDL.lang+"-"+_TMDL.geo;_TMDL.mkt_orig=_TMDL.mkt;if(_TMDL.mkt_orig=="eea"||_TMDL.mkt_orig=="eea1"){_TMDL.mkt=_TMDL.mkt_orig;_TMDL.dcsid="dcs0slcxg100004nc04vu2rp6_8m5b";_TMDL.rsidprod="msstores1-eea-oth-prod";_TMDL.rsiddev="msstores1-eea-dev";}
switch(_TMDL.mkt_orig){case"aus":_TMDL.mkt="au";_TMDL.dcsid="dcsw4ldy3100008qpf0sify1t_1k6f";_TMDL.marinID="5367";_TMDL.rsidprod="msstores1-au-prod";_TMDL.rsiddev="msstores1-au-dev";break;case"nz":_TMDL.dcsid="dcst180s5100008e4jf93si9m_1k5w";_TMDL.marinID="7576ef6376";_TMDL.rsidprod="msstores1-nz-prod";_TMDL.rsiddev="msstores1-nz-dev";break;case"ca":_TMDL.dcsid="dcs0k78q6000008myj6hexune_2g2o";_TMDL.marinID="5387";_TMDL.rsidprod="msstores1-ca-prod";_TMDL.rsiddev="msstores1-ca-dev";break;case"hk":_TMDL.marinID="757rru6375";_TMDL.rsidprod="msstores1-hk-prod";_TMDL.rsiddev="msstores1-hk-dev";break;case"cn":_TMDL.geo="cn";_TMDL.rsidprod="msstores1-cn-prod";_TMDL.rsiddev="msstores1-cn-dev";break;case"cn2":_TMDL.geo="cn";_TMDL.rsidprod="msstores1-cn2-prod";_TMDL.rsiddev="msstores1-cn2-dev";break;case"us":if(_TMDL.ll=="en-us"){if(_TMDL.view=="mobile"){_TMDL.dcsid="dcs123456_1a1a";_TMDL.marinID="5250";_TMDL.rsidprod="msstores1-us-prod";_TMDL.rsiddev="msstores1-us-dev";}else{_TMDL.dcsid="dcsqm9uu410000s5j03f6vrxg_1y2v";_TMDL.marinID="5250";_TMDL.rsidprod="msstores1-us-prod";_TMDL.rsiddev="msstores1-us-dev";}}else{_TMDL.marinID="7579zy23454";_TMDL.rsidprod="msstores1-us2-prod";_TMDL.rsiddev="msstores1-us2-dev";}
break;case"usa":_TMDL.dcsid="dcsqm9uu410000s5j03f6vrxg_1y2v";_TMDL.marinID="5250";_TMDL.rsidprod="msstores1-us-prod";_TMDL.rsiddev="msstores1-us-dev";_TMDL.mkt="us";break;case"uk":_TMDL.dcsid="dcsc6uyt000000go1ivqom5nu_8w6r";_TMDL.marinID="5366";_TMDL.rsidprod="msstores1-uk-prod";_TMDL.rsiddev="msstores1-uk-dev";break;case"fr":_TMDL.mkt="fr";_TMDL.dcsid="dcsnk6m2310000k3w2dhi36nu_9x3v";_TMDL.marinID="5369";_TMDL.rsidprod="msstores1-fr-prod";_TMDL.rsiddev="msstores1-fr-dev";case"de":_TMDL.mkt="de";_TMDL.dcsid="dcshpjqsi00000g8xrfwjw5nu_3w3w";_TMDL.marinID="5368";_TMDL.rsidprod="msstores1-de-prod";_TMDL.rsiddev="msstores1-de-dev";case"eea":if(_TMDL.ll=="fr-fr"){_TMDL.mkt="fr";_TMDL.dcsid="dcsnk6m2310000k3w2dhi36nu_9x3v";_TMDL.marinID="5369";_TMDL.rsidprod="msstores1-fr-prod";_TMDL.rsiddev="msstores1-fr-dev";}else if(_TMDL.ll=="de-de"){_TMDL.mkt="de";_TMDL.dcsid="dcshpjqsi00000g8xrfwjw5nu_3w3w";_TMDL.marinID="5368";_TMDL.rsidprod="msstores1-de-prod";_TMDL.rsiddev="msstores1-de-dev";}else if(_TMDL.ll=="en-gb"){_TMDL.mkt="uk";_TMDL.dcsid="dcsc6uyt000000go1ivqom5nu_8w6r";_TMDL.marinID="5366";_TMDL.rsidprod="msstores1-uk-prod";_TMDL.rsiddev="msstores1-uk-dev";}else if(_TMDL.ll=="de-at"){_TMDL.mkt="at";_TMDL.dcsid="dcs7n8ac500000k38gb287hu1_4e2f";_TMDL.marinID="757ll623437";_TMDL.rsidprod="msstores1-at-prod";_TMDL.rsiddev="msstores1-at-dev";}else if(_TMDL.ll=="nl-be"||_TMDL.ll=="fr-be"){_TMDL.mkt="be";_TMDL.dcsid="dcs7n8ac500000k38gb287hu1_4e2f";_TMDL.marinID="757te923446";_TMDL.rsidprod="msstores1-be-prod";_TMDL.rsiddev="msstores1-be-dev";}else if(_TMDL.ll=="en-ie"){_TMDL.mkt="ie";_TMDL.dcsid="dcsc6uyt000000go1ivqom5nu_8w6r";_TMDL.marinID="757v9g10661";_TMDL.rsidprod="msstores1-ie-prod";_TMDL.rsiddev="msstores1-ie-dev";}else if(_TMDL.ll=="it-it"){_TMDL.mkt="it";_TMDL.dcsid="dcslr2xmq00000wsrpfyj1z1t_7i2h";_TMDL.marinID="5370";_TMDL.rsidprod="msstores1-it-prod";_TMDL.rsiddev="msstores1-it-dev";}else if(_TMDL.ll=="fr-lu"||_TMDL.ll=="de-lu"){_TMDL.mkt="lu";_TMDL.dcsid="dcs7n8ac500000k38gb287hu1_4e2f";_TMDL.marinID="757n5f23452";_TMDL.rsidprod="msstores1-lu-prod";_TMDL.rsiddev="msstores1-lu-dev";}else if(_TMDL.ll=="nl-nl"){_TMDL.mkt="nl";_TMDL.dcsid="dcs41yud910000oieacr076nu_5v8n";_TMDL.marinID="5371";_TMDL.rsidprod="msstores1-nl-prod";_TMDL.rsiddev="msstores1-nl-dev";}else if(_TMDL.ll=="es-es"){_TMDL.mkt="es";_TMDL.dcsid="dcs2harvb10000godvd7006nu_2f6z";_TMDL.marinID="5372";_TMDL.rsidprod="msstores1-es-prod";_TMDL.rsiddev="msstores1-es-dev";}else if(_TMDL.ll=="fr-ch"||_TMDL.ll=="de-ch"){_TMDL.mkt="ch";_TMDL.dcsid="dcs7n8ac500000k38gb287hu1_4e2f";_TMDL.marinID="757oep23447";_TMDL.rsidprod="msstores1-ch-prod";_TMDL.rsiddev="msstores1-ch-dev";}else if(_TMDL.ll=="da-dk"){_TMDL.mkt="dk";_TMDL.dcsid="dcsx4hsry00000cxxtjjd3vne_4k4x";_TMDL.marinID="7573c67819";_TMDL.rsidprod="msstores1-dk-prod";_TMDL.rsiddev="msstores1-dk-dev";}else if(_TMDL.ll=="fi-fi"){_TMDL.mkt="fi";_TMDL.dcsid="dcsx4hsry00000cxxtjjd3vne_4k4x";_TMDL.marinID="757hca7821";_TMDL.rsidprod="msstores1-fi-prod";_TMDL.rsiddev="msstores1-fi-dev";}else if(_TMDL.ll=="pt-pt"){_TMDL.mkt="pt";_TMDL.dcsid="dcs7n8ac500000k38gb287hu1_4e2f";_TMDL.marinID="757jsc23455";_TMDL.rsidprod="msstores1-pt-prod";_TMDL.rsiddev="msstores1-pt-dev";}else if(_TMDL.ll=="sv-se"){_TMDL.mkt="se";_TMDL.dcsid="dcsx4hsry00000cxxtjjd3vne_4k4x";_TMDL.marinID="757q997820";_TMDL.rsidprod="msstores1-se-prod";_TMDL.rsiddev="msstores1-se-dev";}else if(_TMDL.ll=="no-no"||_TMDL.ll=="nb-no"){_TMDL.mkt="no";_TMDL.dcsid="dcsx4hsry00000cxxtjjd3vne_4k4x";_TMDL.marinID="757hfh7822";_TMDL.rsidprod="msstores1-no-prod";_TMDL.rsiddev="msstores1-no-dev";}else if(_TMDL.ll=="bg-bg"){_TMDL.mkt="bg";_TMDL.rsidprod="msstores1-bg-prod";_TMDL.rsiddev="msstores1-eea-dev";}else if(_TMDL.ll=="cs-cz"){_TMDL.mkt="cz";_TMDL.marinID="757uys23450";_TMDL.rsidprod="msstores1-cz-prod";_TMDL.rsiddev="msstores1-eea-dev";}else if(_TMDL.ll=="et-ee"){_TMDL.mkt="ee";_TMDL.rsidprod="msstores1-ee-prod";_TMDL.rsiddev="msstores1-eea-dev";}else if(_TMDL.ll=="el-gr"){_TMDL.mkt="gr";_TMDL.rsidprod="msstores1-gr-prod";_TMDL.rsiddev="msstores1-eea-dev";}else if(_TMDL.ll=="hu-hu"){_TMDL.mkt="hu";_TMDL.rsidprod="msstores1-hu-prod";_TMDL.rsiddev="msstores1-eea-dev";}else if(_TMDL.ll=="en-is"){_TMDL.mkt="is";_TMDL.rsidprod="msstores1-is-prod";_TMDL.rsiddev="msstores1-eea-dev";}
break;case"eea1":if(_TMDL.ll=="lv-lv"){_TMDL.mkt="lv";_TMDL.rsidprod="msstores1-lv-prod";_TMDL.rsiddev="msstores1-eea-dev";}else if(_TMDL.ll=="de-li"){_TMDL.mkt="li";_TMDL.rsidprod="msstores1-li-prod";_TMDL.rsiddev="msstores1-eea-dev";}else if(_TMDL.ll=="lt-lt"){_TMDL.mkt="lt";_TMDL.rsidprod="msstores1-lt-prod";_TMDL.rsiddev="msstores1-eea-dev";}else if(_TMDL.ll=="en-mt"){_TMDL.mkt="mt";_TMDL.rsidprod="msstores1-mt-prod";_TMDL.rsiddev="msstores1-eea-dev";}else if(_TMDL.ll=="pl-pl"){_TMDL.mkt="pl";_TMDL.rsidprod="msstores1-pl-prod";_TMDL.rsiddev="msstores1-eea-dev";}else if(_TMDL.ll=="ro-ro"){_TMDL.mkt="ro";_TMDL.rsidprod="msstores1-ro-prod";_TMDL.rsiddev="msstores1-eea-dev";}else if(_TMDL.ll=="sk-sk"){_TMDL.mkt="sk";_TMDL.rsidprod="msstores1-sk-prod";_TMDL.rsiddev="msstores1-eea-dev";}else if(_TMDL.ll=="sl-si"){_TMDL.mkt="si";_TMDL.rsidprod="msstores1-si-prod";_TMDL.rsiddev="msstores1-eea-dev";}
break;case"mx":_TMDL.marinID="757z0f23453";_TMDL.rsidprod="msstores1-mx-prod";_TMDL.rsiddev="msstores1-mx-dev";break;case"sg":_TMDL.dcsid="dcsr6lms210000gs4zxb30j9m_6f2o";_TMDL.marinID="75722t6379";_TMDL.rsidprod="msstores1-sg-prod";_TMDL.rsiddev="msstores1-sg-dev";break;case"ru":_TMDL.marinID="75752i8097";_TMDL.rsidprod="msstores1-ru-prod";_TMDL.rsiddev="msstores1-ru-dev";break;case"tw":_TMDL.dcsid="dcsux8hg600000oq05dwc0emc_2r7r";_TMDL.marinID="757ub927401";_TMDL.rsidprod="msstores1-tw-prod";_TMDL.rsiddev="msstores1-tw-dev";break;case"br":_TMDL.dcsid="dcshwfhqtvz5bdiu14btf99to_6l5h";_TMDL.marinID="757hj68040";_TMDL.rsidprod="msstores1-br-prod";_TMDL.rsiddev="msstores1-br-dev";break;case"apac":_TMDL.dcsid="dcsux8hg600000oq05dwc0emc_2r7r";_TMDL.rsidprod="msstores1-apac-oth-prod";_TMDL.rsiddev="msstores1-apac-dev";break;case"kr":_TMDL.mkt="kr";_TMDL.dcsid="dcs0c1q1k10000s9mp3wmw5lu_5q8l";_TMDL.marinID="75752i10662";_TMDL.rsidprod="msstores1-kr-prod";_TMDL.rsiddev="msstores1-kr-dev";break;case"jp":_TMDL.mkt="jp";_TMDL.dcsid="dcs8ew96u00000k3s3r52k9kp_6y7s";_TMDL.rsidprod="msstores1-jp-prod";_TMDL.rsiddev="msstores1-jp-dev";_TMDL.marinID="757yti26443";break;case"latam":_TMDL.dcsid="dcslrybgl00000w06araixdmc_3o9h";_TMDL.rsidprod="msstores1-latam-prod";_TMDL.rsiddev="msstores1-latam-dev";break;case"mea":_TMDL.dcsid="dcsoymwme00000oq4wc9hrdmc_4s3y";_TMDL.rsidprod="msstores1-mea-prod";_TMDL.rsiddev="msstores1-mea-dev";break;case"in":_TMDL.rsidprod="msstores1-in-prod";_TMDL.rsiddev="msstores1-in-dev";_TMDL.marinID="757dpk25778";break;}
var marinGeoCodes={"AR":"7577qi25511","GR":"757n5f26809","HU":"757njj26824","ID":"7579y426825","IL":"757ptu26826","PL":"757x6326827","SA":"757ed726828","TH":"757w9s26829","TR":"757mmu26830","AE":"757h8026831","KW":"757d8d26832","PE":"757ofl26833","QA":"7577kn26834","RO":"757ygo26835","SK":"757e8v26836","CR":"757pse25776","ZA":"757tjj25777","IN":"757dpk25778","CL":"757cg625779","CO":"7572wa25780","TT":"757x7h25781","MY":"757fvd6374","PH":"757okb6380","HK":"757rru6375","EG":"757hz134425"};try{if(_TMDL.geo&&marinGeoCodes[_TMDL.geo.toUpperCase()]){_TMDL.marinID=marinGeoCodes[_TMDL.geo.toUpperCase()];}}catch(geoerr){}
if(_TMDL.testflag){_TMDL.rsidprod=_TMDL.rsiddev;}
if(_TMDL.pageType=="receipt"||_TMDL.pageType=="checkout_order_thank_you"){for(var i=0;i<_TMDL.sales.length;i++){try{if(_TMDL.pids[i].indexOf("Promotional")<0&&parseFloat(_TMDL.sales[i])>0){_TMDL.totamount+=parseFloat(_TMDL.sales[i]);}}catch(e){}}}
_TMDL.appendCustomMeta("ms.siteorg","Retail");_TMDL.appendCustomMeta("ms.sitename","Store");_TMDL.appendCustomMeta("ms.pagetype",_TMDL.pageType);_TMDL.appendCustomMeta("ms.sup_ln",_TMDL.langgeo);_TMDL.appendCustomMeta("ms.lang",_TMDL.lang);_TMDL.appendCustomMeta("ms.loc",_TMDL.geo);_TMDL.appendCustomMeta("WT.ti",document.title);_TMDL.appendCustomMeta("DCSext.mkt_langloc",_TMDL.mkt+": "+_TMDL.ll);_TMDL.appendCustomMeta("DCSext.geo",_TMDL.geo);_TMDL.appendCustomMeta("DCSext.langgeo",_TMDL.langgeo);_TMDL.appendCustomMeta("DCSext.pageType",_TMDL.pageType);if(_TMDL.pageType=="receipt"){_TMDL.appendCustomMeta("ms.ea_action","pch");_TMDL.appendCustomMeta("ms.ea_offer","prd");_TMDL.appendCustomMeta("ms.order_id",_TMDL.purchaseID);if(_TMDL.sales.length)_TMDL.appendCustomMeta("ms.order_revenue",_TMDL.sales.join(";"));if(_TMDL.skus.length)_TMDL.appendCustomMeta("ms.ms_sales_part_number",_TMDL.skus.join(";"));if(_TMDL.quantities.length)_TMDL.appendCustomMeta("ms.ms_sales_part_quantity",_TMDL.quantities.join(";"));_TMDL.appendCustomMeta("ms.currency",_TMDL.cc);_TMDL.appendCustomMeta("WT.tx_e","p");_TMDL.appendCustomMeta("WT.si_n","pcf");_TMDL.appendCustomMeta("WT.si_p","thank you");_TMDL.appendCustomMeta("WT.tx_i",_TMDL.purchaseID);_TMDL.appendCustomMeta("DCSext.tx_cc",_TMDL.cc);if(_TMDL.sales.length)_TMDL.appendCustomMeta("WT.tx_s",_TMDL.sales.join(";"));if(_TMDL.quantities.length)_TMDL.appendCustomMeta("WT.tx_u",_TMDL.quantities.join(";"));if(_TMDL.pids.length)_TMDL.appendCustomMeta("WT.pn_id",_TMDL.pids.join(";"));if(_TMDL.skus.length)_TMDL.appendCustomMeta("WT.pn_sku",_TMDL.skus_noprefix.join(";"));}else if(_TMDL.pageType=="detail"){_TMDL.appendCustomMeta("ms.ea_action","vue");_TMDL.appendCustomMeta("ms.ea_offer","prd");if(_TMDL.skus.length)_TMDL.appendCustomMeta("ms.ms_sales_part_number",_TMDL.skus.join(";"));_TMDL.appendCustomMeta("WT.tx_e","v");_TMDL.appendCustomMeta("WT.tx_u","1");_TMDL.appendCustomMeta("WT.si_n","pcf");_TMDL.appendCustomMeta("WT.si_p","detail");if(_TMDL.pids.length)_TMDL.appendCustomMeta("WT.pn_id",_TMDL.pids.join(";"));if(_TMDL.skus.length)_TMDL.appendCustomMeta("WT.pn_sku",_TMDL.skus_noprefix.join(";"));}
window._TMDL=_TMDL;Bootstrapper.insertImage=Bootstrapper.insertImage||function(u,h,w,t,v,b){if(u){var newNode=new Image();newNode.src=u;newNode.width=1;newNode.height=1;newNode.style.display='none';document.getElementsByTagName('body')[0].appendChild(newNode);}};Bootstrapper.logRuleCall=Bootstrapper.logRuleCall||function(rulename,debugparams,image){function insertImage(u,h,w,t,v,b){if(u){var newNode=new Image();newNode.src=u;newNode.width=1;newNode.height=1;newNode.style.display='none';document.getElementsByTagName('body')[0].appendChild(newNode);}}
try{var prot=(window.location.protocol==="https:")?"https:":"http:";var basestring=prot+"//microsoftwindows.112.2o7.net/b/ss/msstores1-tm-debug/1/H.21.1/";var cacheBustingStr=(((1+Math.random())*0x10000)|0).toString(16).substring(1);var mkt="",ll="",cc="",pageType="";if(window._TMDL){mkt=(window._TMDL.mkt)?window._TMDL.mkt:"";ll=(window._TMDL.ll)?window._TMDL.ll:"";cc=(window._TMDL.cc)?window._TMDL.cc:"";pageType=(window._TMDL.pageType)?window._TMDL.pageType:"";}
basestring+=cacheBustingStr
+"?pageName="+escape(rulename)
+"&v1="+escape(rulename)
+"&v2="+escape(pageType)
+"&v3="+window.location.hostname.toLowerCase()
+"&v4="+window.location.pathname.toLowerCase()
+"&v5="+mkt
+"&v6="+ll
+"&v7="+cc
+"&v9=D%3Dg"
+"&v17="+escape(debugparams)
+"&v18="+escape(image)
+"&v19=D%3DUser-Agent";insertImage(basestring,1,1,'',false,'');}catch(e){}};Bootstrapper.createMeta=Bootstrapper.createMeta||function(name,content){var meta;if(document.createElement&&(meta=document.createElement('meta'))){meta.name=name;meta.content=content;document.getElementsByTagName('head').item(0).appendChild(meta);}};Bootstrapper.getMeta=Bootstrapper.getMeta||function(mn){var m=document.getElementsByTagName('meta');for(var i in m){if(m[i].name==mn){return m[i].content;}}
return"";};Bootstrapper.asyncwrite=Bootstrapper.asyncwrite||function(c){try{if(document.getElementById('_TMInsertedData')===null){var newNode=document.createElement('div');newNode.style.display='none';newNode.id='_TMInsertedData';document.getElementsByTagName('body')[0].appendChild(newNode);}
document.getElementById('_TMInsertedData').innerHTML+=c;}catch(e){}};Bootstrapper.insertFrame=Bootstrapper.insertFrame||function(u,t,b,i,a){if(u){t=t!==undefined?t:document.getElementsByTagName('body')[0];b=b!==undefined?b:false;i=i!==undefined?i:false;a=a!==undefined?a:false;var newNode=document.createElement('iframe');newNode.src=u;newNode.height=1;newNode.width=1;newNode.frameBorder=0;newNode.scrolling='No';newNode.marginHeight=0;newNode.marginWidth=0;newNode.topMargin=0;newNode.leftMargin=0;if(a){a=a.split(',');for(var j=0;j<a.length;j++){newNode[a[j].split('=')[0]]=a[j].split('=')[1];}}
if(i){if(!b){t.appendChild(newNode);}else{t.insertBefore(newNode,b);}}else{if(!b){Bootstrapper.bindDOMParsed(function(){t.appendChild(newNode);});}else{Bootstrapper.bindDOMParsed(function(){t.insertBefore(newNode,b);});}}
return newNode;}};Bootstrapper.imageRequest=Bootstrapper.imageRequest||function(src){var a=new Image();a.src=src;return a;};Bootstrapper.createCookie=Bootstrapper.createCookie||function(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}
else var expires="";document.cookie=name+"="+value+expires+"; path=/";};Bootstrapper.readCookie=Bootstrapper.readCookie||function(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;};Bootstrapper.eraseCookie=Bootstrapper.eraseCookie||function(name){createCookie(name,"",-1);};Bootstrapper.getQSParam=function(qs,p2find){if(qs.indexOf("?")==0){qs=qs.substring(1);}
var qsarr=[];var nvpair=[];var outparams=[];if(qs){qsarr=qs.split("&");for(var i=0;i<qsarr.length;i++){nvpair=qsarr[i].split("=");if((nvpair[0].toLowerCase()==p2find.toLowerCase())&&nvpair[1]){return nvpair[1];}}}
return"";};(function(){var qs=window.location.search;var nvpair=[];var officeparams=[];var qsname="";var qsval="";var intid1="",intid2="",mc_id="",oem="";var delim="||";var cookName="officeWTparams";var oldParamsArr=["","",""];var oldParams="";var updateflag=0;oldParams=Bootstrapper.readCookie(cookName);if(oldParams){oldParamsArr=oldParams.split(delim);}
if(qs){intid1=Bootstrapper.getQSParam(qs,"WT.intid1");intid2=Bootstrapper.getQSParam(qs,"WT.intid2");mc_id=Bootstrapper.getQSParam(qs,"WT.mc_id");oem=Bootstrapper.getQSParam(qs,"oemreferralid");}
if(!intid1&&document.referrer.indexOf("office.microsoft.com")>-1){intid1="ODC_"+document.referrer.substring(document.referrer.indexOf(".com/")+5).replace(/\//g,"_");if(intid1.indexOf("?")>-1){intid1=intid1.slice(0,intid1.indexOf("?"));}}
if(intid2&&!intid1){intid1=intid2;intid2="";}
if(intid1||mc_id||oem){oldParamsArr[0]=(intid1)?intid1:oldParamsArr[0];oldParamsArr[1]=(mc_id)?mc_id:oldParamsArr[1];oldParamsArr[2]=(oem)?oem:oldParamsArr[2];updateflag=1;}
_TMDL.intid1=Bootstrapper.intid1=oldParamsArr[0];_TMDL.mc_id=Bootstrapper.mc_id=oldParamsArr[1];_TMDL.oem=Bootstrapper.oem=oldParamsArr[2];if(updateflag==1){Bootstrapper.createCookie(cookName,oldParamsArr.join(delim));}})();;callback10949.exec();}catch(e){Bootstrapper.reportException(e);};