(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x=[].slice;w={zh:{AUTO_RETURN_HOME:"<label id='countdown'>{{countdown}}</label> 秒后发现新应用",LOADING:"加载中...",DOWNLOAD_INSTALL:"下载安装",DOWNLOAD_LOADING:"下载中",DATA_ERROR:"数据错误",DATA_INCOMPLETE:"请联系应用开发者, <a href='/apps/new'>去新版重新上传</p>",DATA_INCOMPLETE_IN_MOBILE:"请联系应用开发者重新上传",DOWNLOAD_FAILED:"刷新并重试",VIEW_IN_DESKTOP:"正在安装，请按 Home 键在桌面查看",VIEW_IN_BROWSER:"请在浏览器中查看下载进度",PLATFORM_NOT_MATCHING:"只支持 {{app|app_type}} 设备",CHANGELOG_PLACEHOLDER:"没有更新日志",FAILED_LOAD_APP:"加载失败",NOT_FOUND_TITLE:"404 - Not Found",NOT_FOUND_LOG:"您访问的 应用/页面 不存在",FORBIDDEN_TITLE:"403 - Forbidden",FORBIDDEN_TITLE_LOG:"您没有权限访问这个应用",REQUIRE_PWD:"请输入密码",PASSWORD_WRONG:"密码错误",SCAN_TIPS:"扫描二维码下载<br/>或用手机浏览器输入这个网址:&nbsp;&nbsp;<span class='text-black'>{{full_short}}</span>",DESC:"应用描述",CURRENT_VERSION:"当前版本",FILE_SIZE:"文件大小",UPDATED_AT:"更新于",RELEASES:"历史版本",CHANGELOG:"更新日志",VIEW_ALL_APP_RELEASES:"查看全部 {{app.histories|length}} 个历史版本",VIEW_ALL_APP_RELEASES_IOS:"查看全部 {{ios.histories|length}} 个历史版本",VIEW_ALL_APP_RELEASES_ANDROID:"查看全部 {{android.histories|length}} 个历史版本",FOLDING:"隐藏",VIEW_ALL_COMBOAPP_RELEASES:"查看全部 {{combo_app.releases|length}} 个历史版本",SCREENSHOTS:"应用截图",INHOUSE:"123",ADHOC:"内测版",CONFIRM:"确认",UNABLE_INSTALL:"微信/QQ 内无法下载应用",GO_OUT_WECHAT_TIP:"请点击右上角<br/>选择“浏览器中打开”",GO_OUT_WECHAT_IOS_TIP:"点击右上角菜单在<br/>Safari 中打开并安装",FOOTER_SLOGAN:'fir.im 是应用内测平台，请自行甄别应用风险，<wbr />如应用存在问题，<wbr />可点击“举报”按钮 <a class="one-key-report" href="javascript:;">举报!</a>',SAFE:"安全",SAFE_TEXT:"此应用已通过以下安全检测，可放心下载",VIRUS_PASS:"扫描通过",LOW_RISK:"低风险",HIGH_RISK:"高风险",VIRUS:"病毒",RISK:"有风险",RISK_TEXT:"此应用下载有风险，请谨慎下载",KING_SOFT:"猎豹安全大师",BAIDU:"百度手机卫士",POPULARIZE:"推荐应用",DOWNLOAD:"下载",REPORT_RETUEN:"返回下载页",REPORT_SENDING:"正在发送，请稍后...",REPORT_EMAIL:"你的邮箱",REPORT_EMAIL_PLACEHOLDER:"Email",REPORT_EMAIL_ERROR:"请填写有效的邮箱，可及时了解举报结果",REPORT_REASON:"举报原因",REPORT_DB:"盗版",REPORT_HS:"黄色",REPORT_QZ:"欺诈",REPORT_OTHER:"其它",REPORT_REASON_ERROR:"请选择举报类型",REPORT_CONTENT_PLACEHOLDER:"补充举报原因",REPORT_CONTENT_ERROR:"请填写举报原因",REPORT_BUTTON:"举报！",REPORT_THANKS:"感谢你的举报",REPORT_MESSAGE:"我们会尽快核实您的举报内容，关于举报的处理结果将于 1-3 个工作日内发送至你邮箱。",LEGAL_FORBIDDEN:"因法律的要求<wbr />而被拒绝",LEGAL_FORBIDDEN_LOG:"该 APP 涉及盗版、欺诈、色情或其他不良信息"},en:{AUTO_RETURN_HOME:"Found new apps in <label id='countdown'>{{countdown}}</label> secs",LOADING:"Loading...",DOWNLOAD_INSTALL:"Download",DOWNLOAD_LOADING:"Loading",DATA_ERROR:"Data Error",DATA_INCOMPLETE:"Please contact the app's owner, <a href='/apps/new'>upload again in Rio version</p>",DATA_INCOMPLETE_IN_MOBILE:"Please contact the app's owner upload again",DOWNLOAD_FAILED:"Refresh",VIEW_IN_DESKTOP:"Installing, please check on your home screen",VIEW_IN_BROWSER:"请在浏览器中查看下载进度",PLATFORM_NOT_MATCHING:"Only support {{app|app_type}} device",CHANGELOG_PLACEHOLDER:"There is no update log",FAILED_LOAD_APP:"Load failed",NOT_FOUND_TITLE:"404 - Not Found",NOT_FOUND_LOG:"Page does not exist",FORBIDDEN_TITLE:"403 - Forbidden",FORBIDDEN_TITLE_LOG:"You don't have permission to view this page",REQUIRE_PWD:"Please enter the password",PASSWORD_WRONG:"Password is not correct",SCAN_TIPS:"Scan the qrcode to download<br/>Open the url on your phone:&nbsp;&nbsp;<span class='text-black'>{{full_short}}</span>",DESC:"Description",CURRENT_VERSION:"Current version",FILE_SIZE:"File size",UPDATED_AT:"Updated at",RELEASES:"Releases",CHANGELOG:"Changelog",VIEW_ALL_APP_RELEASES:"View all {{app.histories|length}} releases",VIEW_ALL_APP_RELEASES_IOS:"View all {{ios.histories|length}} releases",VIEW_ALL_APP_RELEASES_ANDROID:"View all {{android.histories|length}} releases",FOLDING:"Folding",SCREENSHOTS:"Screenshots",INHOUSE:"",ADHOC:"Adhoc",CONFIRM:"Confirm",UNABLE_INSTALL:"Can't downloads apps in WeChat/QQ",GO_OUT_WECHAT_IOS_TIP:"Open in Safari and install this app",GO_OUT_WECHAT_TIP:"Open in browser and install this app",FOOTER_SLOGAN:'fir.im provide beta app hosting service. If the app <wbr /> is suspicious, click the "report" button please.<a class="one-key-report" href="javascript:;">Report!</a>',SAFE:"Safe",SAFE_TEXT:"This application is already passing the security testing, you can start to download it.",VIRUS_PASS:"PASS",LOW_RISK:"Low Risk",HIGH_RISK:"High Risk",VIRUS:"Virus",RISK:"WARNING",RISK_TEXT:"We find out some unknown viruses in this app, please make sure this application is from someone you trust.",KING_SOFT:"CM Security",BAIDU:"Baidu Mobile Security",POPULARIZE:"Hot apps",DOWNLOAD:"Download",REPORT_RETUEN:"Back",REPORT_SENDING:"Sending...",REPORT_EMAIL:"Email",REPORT_EMAIL_PLACEHOLDER:"Your Email",REPORT_EMAIL_ERROR:"Please enter your email address. Once we have reviewed your report, we will notify you by email.",REPORT_REASON:"Reason for report",REPORT_DB:"Pirate",REPORT_HS:"Porn",REPORT_QZ:"Scam",REPORT_OTHER:"Other",REPORT_REASON_ERROR:"Please choose a topic you want to report.",REPORT_CONTENT_PLACEHOLDER:"Please provide details of the reported issue.",REPORT_CONTENT_ERROR:"Please tell us why you want to report this app.",REPORT_BUTTON:"Report！",REPORT_THANKS:"Thank you for helping to make fir.im better!",REPORT_MESSAGE:"We will review your report soon and the result will be sent to you via email within 1 - 3 working days.",LEGAL_FORBIDDEN:"Unavailable For Legal Reasons",LEGAL_FORBIDDEN_LOG:"Unavailable For Legal Reasons"}},a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAADLklEQVQ4T62Ua0hTYRjH/2dnO9uO23SnLbNyU8uk0oxISroQRiFdIelCEX2xMgKLEqIrFlJfWtCHykzo6ofKCm3dZFRmZSXdt5bWbJY6y3mbO2db286JQUEXO5PofXk/Pf//j//zwvMQiHL23+6b0mK3Jh7fOK0ymjZSJ34XvRMEzYXHULKu3gRSLpvg6BEKHlpuGFLigqXpSZp6ijY0G0bQXd1PKrzFxcX87/5fgNuqOk0N7apCmoLUF5IgQFAI+Hk0XDkBuFsBnQ7K2DgIhCw0erjaZj2yaKIoMO/w2wqbkLYSX/0gCYBRSRGvCuPp3Wp8cHYDwRggRAK8HAljFb2uk/O1osCcPXVHs2Zkb5g+QoBBS2AIDehoAZH7pY9AWw+H9+0e1Dz/gqdvHE572bJkUeCcffXHUjMnFcxKDGJqkhSJWhKA5PsDOJaF5UU7rj7+iDq7+1Nj+QqDKHCR6VWZU5ax1tnmhooikczwqMzXYpgqiIyN1bA+cwEsB8hjYZxoaGspXzBSFJh/qvNYU5gp4L0s/EEer1xhPChikKp0I272OUBPg1ZKwREMjDrl+5ay3FRR4D5LeMuNtyGTShpCjzcAZw9wcZ0WjN+JzDXVkOsVkCjU8PloZI7RPHp5KCdbFHjQ0jWuuinGplZI0Of1we4KoXQ1A7LTiiWbbkKZxICM0cPbFkD+kpGm8sLsIlFgpLiqwudwdJMpsfIwrK0ctuYyYJvrsdtUBzrViAChQbifg3lv1qgFWcbmqMCz1kDeAXOo0qin8KnLh9lpNDpsFpw3N4IeNRpccz/m5g431+yeuXCgUfxj9CKi7WZfaZVdsp5RkdBRHJqeXMWbVgAeCgnJso7204sTCYIIDRoYEe64zpbUOqmdHo8fr29dBrxBTJ6WXHuyMH15Rkr8578tigET/hCfsQlTahqFImfDvfh5k/QVO5aOPx5t44gCo5kH1bJwv0r97vydPKlWI6NZj8DKFXzV5DVhL6UhNTxHdLASYVh6/LXNGaoB2/4joaOkZLpv1666SEENoBdAzsr7cA9NA9gugJcgL6V79aWdU88NKuG/tPmz57//4TfNDDgk+K71PQAAAABJRU5ErkJggg==",c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAEcElEQVQ4T4WUW6gVVRjHf9+a294ze/beZ2+Pl2Nq5vGYJlYKpWAqRdRLD0Y9dAGfEnoIkooKCxG1HiqiLOghRCESEioxwUCQvJUgRBqdjLzk9Zx9Lp4zs28ze+9ZMfsIvSgthnlYrO+3/jPf9//L4OBgedPh8skLN42BgpOE3GZpBJh6325VY/FL2WRs+7raannmixtHj1+2H7m7J6GTgNaQVqbFSglRG4YmOiiB3rxBxoIkSQ/9twyBK5MGS6fHv0n/1rGgnE38JIH0XEdD3IFqUzNW7ZC1EjY95lJyFTuPNLg+CXlXyGUUjiEo0YiAoWCiKaEsf28kMAS/nWiGJjvYpqY3ZzAjLyyaYfDsCo+V8wyO/NngwjicG27xz7hmOEgYrWkmGlD2hIwpqZhQlm+vBFEb3zRg4+oMi2cqco5BX9Ggr8dEECpBzAeHAgpelgfnKrROCKOEZpxQjWDv6RY36xrX6gJHgjDSvmsl7NtYpK9gcyPQRO2k+x8LroFBi13HqlTqFp6tu2rynkEhq1nWJ2z+vs7vQx2m54xQHtg2ElRj/JzZ5vPne7AsgyjW2JbGMRWFrMKUiF1H64w2bMo5jW0IpqHoAAO9is9+DDg3oZmZN1NgZUqhJOx8oYhlGzSitIiukoJnYEmT3cfqjDQcyl56EYikDREWTIOPD4ZcaUg6BaHct3U4iNvit+pRF1gqZhivdsiYU8Cia5IxI/Ycr1KpOZRSoCXdkXIsxSw34aMDk0yITT5HKEu2VAIN/tXhiB3r86xclOXSaJuMLWQtRTFj4Nkxe46FVOqpQukqVApKviJLwvvfBZgFm4xDKPe+OxyIEv+vKxGvrM3w3Jo8g9fbeI6QsRUl18CzIr46WesqLHtgGdKd2YHZFhcvhXxyqMac+TlEdCgD70wBrw7HPLFQ8epTJc5e61DICo4NJc/Es2L2nqjdagrYpqIaJTzU73Dwp5vsPxPT3++m5gxlUQoU/GYzoR1GfLihRGJZBGEbL6Mo5UxyVot9P4eMNhxKOcE2BdNWzC/Cp/vGmFAmPdOsW8C3bwQIfurVwQtNNjzs8PL6Mkf+iCm7Qq9vkrXafHsqZDKyKXqKWpzw6P0uJ3+Z4MvDVRYuyaFSQ+v0k98aCgA/neIoTrh2ocaOFwusW9XDqXMt8hb0eB32n65RCRS+Z7J2WZbJoRrbdo/iznAplk1EUgcRysI3p4CpwZXSjIy0iMYiXnrS5fFVBUo9Ga6PxnxzImRG2WHhdOHSxTq7DkzSdBzumufQjSJkCtj32khQsNt+OwFRgiJhbLTNyPk6SxeYPL0mx4ol2W7nz19ucWawxqmzTfxZWWbOmYKlQ26IptayQln8xsVKJS729mYadPRUkKZPp625drnZVTtwj0XOUfz6d4zYBrPnZrCzBmKm0ZE6JmGi5eIS3JSvfzi+4fWDvbuVXWw6ZquV3pYSu/msIWkljI+30Qn0FBSGYyBpA26FsNaaljaNWrXubll7ffOdUv0OYf//2/8CnLPg53p/3ssAAAAASUVORK5CYII=",j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAABNVBMVEXzpkDzpkHzp0Lzp0PzqETzqUjzqkjzqknzrE7zrU/0rVD0r1P0r1T0sFX0sFb0sFf0sVf0sVj0sVn0slr1tWD1tWH1tmL1tmP1t2T1umz1u231u2/2vG/2vHD2vXH2wHj2wXr2wXv2wnz2wn32wn72w373xYL3xYT3xoT3xoX3x4f3x4j3yIn3yIr3yYv3yYz3yo34zJL4zJP4zZT4zpb4z5n50p/506H506L51KL51KP516v52Kz52a762q/62rD62rH63rn63rr637v637z64L375Mb75cj75cn75sn75sr86tP869T869X87Nb87Nf879798N/98OD98eH98eL98uP98uT98+X98+b99On99er99ev99uz++PH++fL++fP++/f++/j+/Pn+/fz+/v3+/v7///+pZW9PAAAC/0lEQVR4AezBgQAAAACAoP2pF6kCAAAAAAAAAAAAAABm376aWjmiIAD3XnEvWQQTMGACyIGAAzkHkMDkIDAGJCGxov//T3ChObWlAVRlrVQ1e8r+3qb0dB521bPT85/R/tPcd4B+S0WyuAT1fmPJr1DOu2PJnQfdEhQJ6HZJcQnVRhgYgWYnDJxAsQGWGYBeKZZJQa1un2X8bmi1S8sulGp5oeWlBTqt8511qNT4TOPqisZzIzRapJiaoliEQg1PNB5isQcaTw3QZ45iHpinmIM6XppG9ivwNUsj7UGbSYrlt9UyxSS0uaCRb3pbNeVpXECZYYpNs96kGIYuxzT8DrPu8GkcQ5V+in2IfYp+aJKk6IXopUhCkS6fxiEChzT8LuixTTGIwCDFtqL8XqBxhjJnNAp60vwaxRjKjFGsQYlvORo3sNzQyH3Tlt+nYZlWluYbHmk8xmCJBT/oSPMzFAt4Z4FiBhqkKz4KwcOThgLjFCv4YIViHNF3TqPQjA+aCzTOEXlDFFv4xBbFEKLuiIbfiU90+jSOEHF9FAf41AFFH6KjLZlhHWVS7Y7myLLOcm4mSbLuUnAhw7rL/D9ILVKsuyRcaM+xzrJtcDNJqr6v36TM4dxsxfxeIc3PIpqsrWyIrbCG/F45zSvL75XTvLb8rijNH1XxSbQrSPPq8ruCNC8Oqjo26LfHdi/01u9PeyMZHfbjG/7V4FpTvtoX6rl1WBoZKxQT+Jcm7L/PiAhRCLAKBZFhx8DwEdO1EKUZq3QD98IffFjHKFFxHRTLQhXTrhERYyGrfuv2UaN7p0H5MmR58xSRMEixgyrtUHyPKDgMXVDutgoSrvW80kiF/zT22gP39moo8Q9Q7MG5uE/jpJZrGX4crm1Q/FDTRZkNuHZP47K2q0t/w7EvRRqJ2i6TFb/Asb9YcushFO+WJfdRuTA5ipBGWfI7XPNWi2RhHqH9kSeLqx7ci//yYytq0Jr4OY5/2oMDGQAAAIBB/tb3+KoLAAAAAAAAAAAAAAAg6P6/9f2bMMkAAAAASUVORK5CYII=",o=function(){var a,b,c,d;for(d=location.search,b={},c=/([\w\d]+)=([^&]*)/g,a=10;c.test(d)&&a>0;)b[RegExp.$1]=decodeURIComponent(RegExp.$2),a--;return b},r={init:function(a){var b,c;return c=this,b={anim:!0,extend_height:0,selectorName:"img",realSrcAtr:"data-img"},$.extend(b,a),c.img.init(b)},img:{init:function(a){var b,c,d,e,f,g;return g=this,f=a.selectorName,e=a.realSrcAtr,c=a.anim,d=function(b){var c,d,e;return e=window.pageYOffset,c=window.pageYOffset+window.innerHeight,d=$(b).offset().top,d>=e&&d-a.extend_height<=c},b=function(a){var b,c;if(!a.attr("lazyImgLoaded"))return b=new Image,c=a.attr("data-img"),b.onload=function(){return a.attr("src",c)},c&&(b.src=c),a.attr("lazyImgLoaded",!0)},$(".after-install-zhibo-fixed").on("scroll",function(){return $(f).each(function(a,c){var f;if(f=$(this),f.attr(e)&&d(this))return b(f)})}).trigger("scroll")}}},s=function(a){var b,c;return c=new RegExp("s*"+a+"=([^;]*)"),b=document.cookie.match(c),b?b[1]:""},i=function(a){return a.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&#x2F;/g,"/")},v=function(a,b,c){var d,e;c=c||{},d=a+"="+b+";";for(e in c)d+=e+"="+new Date(c[e])+";";return document.cookie=d},h=function(a,b){return b=b||{},b["max-age"]=0,v(a,"",b)},e=window.location.pathname,e=e.substring(1),d=e,b=location.href.split("?")[0],f=function(){var a,b;try{b=s("currentUser"),b&&(b=JSON.parse(decodeURIComponent(b)))}catch(c){a=c}return _hmt.push(["_setCustomVar",1,"short",d])},f(),l=function(a,b,c){var d;return d=a[b],a[b]=a[c],a[c]=d,a},t=function(a){var b;return b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},String(a).replace(/[&<>"'`=\/]/g,function(a){return b[a]})},q=function(a){return"string"==typeof a},g=function(a){var b;return a&&(a.icon_url||(a.icon_url=j),a.is_ios="ios"===a.type,a.is_android="android"===a.type,a.market_app_info||(a.market_app_info={}),a.store_link_visible||(a.market_app_info.url=null),a.icon_url=a.icon_url||a.market_app_info.icon_url,a.releases||(a.releases={}),(null!=(b=a.releases.history)?b.length:void 0)&&a.releases.history.sort(function(a,b){return b.created_at-a.created_at}),a.master=a.releases.master,a.histories=a.releases.history),a},u=function(a){var b,c,d;if(a){c={};for(b in a)d=a[b],q(d)?c[b]=t(d):c[b]=d;return c}},m=function(a){return null==a&&(a=""),a.substr(a.lastIndexOf("/")+1,a.length)},p=function(){var a,b,c,d;for(d=[/oppo|JLS36C|KTU84P/gi,/vivo/gi],b=0,c=d.length;b<c;b++)if(a=d[b],a.test(navigator.userAgent))return!0;return!1},n=function(){var a,b,c,e,f;for(c={download_token:s("download_token_"+d)},a=20,f=location.search,e=/([\w\d]+)=([^&]*)/g,b=a;e.test(f)&&b>0;)c[RegExp.$1]=decodeURIComponent(RegExp.$2),b--;return c.access_token=s("access_token"),c.download_passwd=s("download_passwd_"+d),c},k=function(){var a,b;return b=navigator.userAgent,a={isWechat:/micromessenger/i.test(b),isQQ:/\s+QQ/.test(b)},a.is_mobile=!1,/(android|BB10|linux|NokiaN9)/gi.test(b)?(a.value="android",a.is_mobile=!0,a.is_ios=!1,a.is_android=!0,a.is_phone=!0):/iP(hone|od|ad)/g.test(b)&&(a.value="ios",a.is_mobile=!0,a.is_ios=!0,a.is_ipad=/iPad/g.test(b),a.ios_6_x=/OS 6_(\d(_\d)*)/g.test(b),a.is_android=!1,/iP(hone|od)/g.test(b)&&(a.is_phone=!0)),a.isUnabledInstall=a.isWechat||a.isQQ,a},$(function(){var e,f,h,q,t;e=$("body"),f=$(".main"),h=window.innerHeight,t=function(a){return Mark.globals.full_short=a.full_short,Mark.globals.defaultIcon=j,Mark.globals.release_id=a.release_id,Mark.includes.header=$("#header").html(),Mark.includes.footer=$("#footer").html(),Mark.includes.desc=$("#desc").html(),Mark.includes.release=$("#release").html(),Mark.pipes.bytes=function(a){var b,c,d,e;return isNaN(parseFloat(a))||!isFinite(a)?"-":("undefined"==typeof d&&(d=2),e=["byte","KB","MB","GB","TB","PB"],c=Math.floor(Math.log(a)/Math.log(1024)),b=(a/Math.pow(1024,Math.floor(c))).toFixed(d)+" "+e[c])},Mark.pipes.formatDate=function(a){var b,c,d,e,f;return a*=1e3,a=new Date(a),f=a.getMonth()+1+"",1===f.length&&(f="0"+f),c=a.getDate()+"",1===c.length&&(c="0"+c),d=a.getHours()+"",1===d.length&&(d="0"+d),e=a.getMinutes()+"",1===e.length&&(e="0"+e),b=a.getFullYear()+"-"+f+"-"+c+" "+d+":"+e},Mark.pipes.release_type=function(b){return b.release_type?"zh"===a.locale?"inhouse"===b.release_type?"":"内测版":"inhouse"===b.release_type?"inhouse":"Adhoc":""},Mark.pipes.app_type=function(a){return"ios"===a.type?"iOS":"Android"},$.extend(Mark.includes,w[a.locale])},q=function(a,b){var c,d;return c={text:b.text,width:b.width||100,height:b.height||100,colorDark:"#404242",colorLight:b.bg||"#EFF2F2",correctLevel:QRCode.CorrectLevel.L},$(a).html(""),d=new QRCode(a,c),setTimeout(function(){return $(a).attr("title","")},500)},this.FIR={brand:"fir.im 3.1 - Rio",locale:s("locale")||(/^zh/.test(navigator.language)?"zh":"en"),params:n(),platform:k(),config:{server:"//download.fir.im",sameServer:"//download.fir.im",api:"//api.fir.im",screenshotPrefix:/\/\/firimg\.fir\.im/,downloadTokenExpireTime:3e5},data:{},elems:{},virus_data:{},AD:{},collectStore:function(a){return a||(a=window.short),!!a&&(window.ga("send","event",a,"click","store"),!0)},ga:function(){var a;if(a=1<=arguments.length?x.call(arguments,0):[],this.AD.is_use_ga)return window.ga.apply(window,a)},init:function(){var a,c;return navigator.userAgent.indexOf("UCBrowser")>-1?this.config.server="//fir.im/uc_friendly":/pro\.fir\.im/.test(location.href)&&(this.config.server="//download-pro.fir.im",this.config.api="//api-pro.fir.im"),t({locale:this.locale,full_short:b,release_id:this.params.release_id}),a=this.platform.is_android?"android":this.platform.is_ipad?"ipad":"ios",c=this.platform.isWechat?"-wechat":"",a+=c,this.AD={label:a},ga("set","dimension3",a),this.renderLoading()},renderLoading:function(){var a,b;return b=$("#loading").html(),a=Mark.up(b),f.html(a)},setDownloadToken:function(a){var b;return this.params.download_token=a,b=new Date(Date.now()+864e5),document.cookie="download_token_"+d+"="+a+"; expires="+b+"; path=/"},setDownloadPasswd:function(a){var b;return this.params.download_passwd=a,b=new Date(Date.now()+36e5),document.cookie="download_passwd_"+d+"="+a+"; expires="+b+"; path=/"},mayBeRedirectToOnline:function(a){var b,c,e;return(a.releases.is_onlined||(null!=(b=a.releases.master)?b.is_onlined:void 0))&&(null!=(c=a.market_app_info)?c.url:void 0)&&(e=a.market_app_info.url,a.in_short_list?a.wait_time>-1&&(window.ga("send","event","redirectToAppStore","redirect",d),window._hmt.push(["_trackPageview","/redirectToAppstore"]),setTimeout(function(){return window.location.href=e},300)):(window.ga("send","event","redirectToAppStore","redirect",d),window._hmt.push(["_trackPageview","/redirectToAppstore"]),setTimeout(function(){return window.location.href=e},300))),!1},getQuerySetting:function(){var a;return a={url:this.config.server+"/"+d,headers:{"Access-Token":this.params.access_token,"Download-Token":this.params.download_token,Passwd:this.params.download_passwd}},this.params.release_id&&(a.url+="?release_id="+this.params.release_id),a},query:function(){var a,b;return b=$.extend({},this.getQuerySetting(),{type:"GET",dataType:"json",timeout:1e4}),a=$.extend({},b,{success:this.onSuccess.bind(this),error:function(a){return function(b,c,d){var e;return e=b.status,window._hmt.push(["_trackEvent","download","query",e]),a.onError(b,c,d)}}(this),complete:function(a){return function(c,d){return 0===c.status?a.requery(b):a.render()}}(this)}),$.ajax(a)},requery:function(a){var b;return a.url=a.url.replace(this.config.server,this.config.sameServer),b=$.extend({},a,{success:function(a){return function(b,c,d){return window._hmt.push(["_trackEvent","download","requery",d.status]),a.onSuccess(b,c,d)}}(this),error:function(a){return function(b,c,d){return window._hmt.push(["_trackEvent","download","requeryError",b.status]),a.onError(b,c,d)}}(this),complete:function(a){return function(){return a.render()}}(this)}),$.ajax(b)},getDownloadToken:function(a){var b,c;return c=$.extend({},this.getQuerySetting(),{type:"GET",dataType:"json",timeout:1e4}),c.url=this.config.server+"/apps/"+this.data.app.id+"/download_token",b=$.extend({},c,{success:function(b){return function(b){return a(b.download_token)}}(this),error:function(a){return function(){return window._hmt.push(["_trackEvent","download","getDonwloadTokenError",status])}}(this)}),$.ajax(b)},onSuccess:function(a,b,c){var d,e,g,h,i,j,k;this.ga("set","dimension2",200);try{a.app=u(a.app),a.combo_app=u(a.combo_app),this.platform.is_mobile&&a.combo_app&&a.app.type!==this.platform.value&&l(a,"combo_app","app"),a.app&&a.app.in_short_list&&!this.isShow&&a.app.wait_time>0&&(this.wait_time=a.app.wait_time,this.ga("set","dimension1",a.app.short),this.ga("send","event","adFooter","shortDownload",a.app.name),setTimeout(function(){return f.find(".main header").removeClass("fade-out")},200),this.template_id="legal_forbidden_new",this.resp=a,k=$("#"+this.template_id).html()||"",this.data.countdown=this.wait_time,j=Mark.up(k,this.data),f.html(j),this.startRedirectInterval()),a.app&&a.app.in_short_list&&a.app.wait_time===-1&&this.platform.is_mobile&&(this.ga("set","dimension2",451),this.AD.isError=!0,this.getErrorAD(451)),d=a.app,e=d.token,this.mayBeRedirectToOnline(d)||window._hmt.push(["_trackPageview",location.pathname])}catch(m){return g=m,console.error(g),void alert("Error: Unable to get token")}return d&&(d.is_expired||d.constraint)?(this.AD.isError=!0,d.is_expired&&window._hmt.push(["_trackEvent","download","is_expired"]),d.constraint&&(window._hmt.push(["_trackEvent","download","is_constraint"]),window._hmt.push(["_setCustomVar",2,"status",status]),this.ga("set","dimension2",425),this.platform.is_mobile&&this.getErrorAD(452),a={is_expired:d.is_expired,constraint:d.constraint})):(this.params.download_passwd&&this.setDownloadPasswd(this.params.download_passwd),i=a.app.releases,i&&(0!==(null!=(h=i.history)?h.length:void 0)||i.master)||(console.info("没有版本信息"),a={data_error:!0},window._hmt.push(["_trackEvent","download","query","no-releases"]))),d&&d.in_short_list&&a.app.wait_time>0?this.isShow?this.store(a):void 0:d&&d.in_short_list&&a.app.wait_time===-1?this.store({not_find:!0}):d&&d.in_short_list&&0===a.app.wait_time?(this.isShow=!0,this.store(a)):this.store(a)},onError:function(a,b,c){var d,e,f,g;switch(f=a.status,f&&(window._hmt.push(["_setCustomVar",2,"status",f]),this.ga("set","dimension2",f)),f){case 404:this.store({not_found:!0});break;case 451:this.store({legal_forbidden:!0});break;case 410:this.store({legal_forbidden:!0});break;case 425:window._hmt.push(["_trackEvent","download","is_expired"]),window._hmt.push(["_trackEvent","download","is_constraint"]),window._hmt.push(["_setCustomVar",2,"status",f]),this.ga("set","dimension2",425),this.store({constraint:!0});break;default:g=a.response||a.responseText;try{e=JSON.parse(g),this.store($.extend({},e,{error:!0}))}catch(h){d=h}}if(f&&this.platform.is_mobile)return this.AD.isError=!0,this.getErrorAD(f)},store:function(a){return this.prev_template=this.template_id,this.authorized=a.auth,this.appTokenTime=new Date,a.is_expired?this.template_id="expired":a.not_find?this.template_id="not_find":a.constraint?this.template_id="constraint":a.require_pwd?this.template_id="passwd":a.forbidden?this.template_id="forbidden":a.not_found?this.template_id="not_found":a.legal_forbidden?this.template_id="legal_forbidden":a.data_error?this.template_id="data_error":a.error||!a.app?this.template_id="error":(this.template_id="app",a.app=g(a.app),a.combo_app=g(a.combo_app),a.ios="ios"===a.app.type?a.app:a.combo_app,a.android="android"===a.app.type?a.app:a.combo_app,a.combo_app&&!this.platform.is_mobile&&(this.template_id="combo",this.has_combo=!0)),a.countdown=10,this.data=a,this.afterStore()},virusStatus:function(a){var b;switch(b=w[this.locale],a){case"SCANED":return b.VIRUS_PASS;case"LOWRISK":return b.LOW_RISK;case"HIGHRISK":return b.HIGH_RISK;case"VIRUS":return b.VIRUS;default:return""}},storeVirus:function(b){var d,e,f,g,h,i;if(h=(b.releases.master||b.releases).scan_virus,!h)return{};switch(e=h.kingsoft,d=h.baidu,g={virus:[],show:!1,status:0,statusText:""},f=w[this.locale],e&&"NOT_SCANED"!==e&&(i={name:f.KING_SOFT,logo:c},i.status=e,i.statusText=this.virusStatus(e),i.statusText&&g.virus.push(i)),d&&"NOT_SCANED"!==d&&(i={name:f.BAIDU,logo:a},i.status=d,i.statusText=this.virusStatus(d),i.statusText&&g.virus.push(i)),g.virus.length>0?(g.show=!0,1===g.virus.length?g.status=g.virus[0].status:g.virus[0].status===g.virus[1].status?"SCANED"===g.virus[0].status&&(g.status="SCANED"):g.status="RISK"):g.show=!1,g.status){case"SCANED":g.text=f.SAFE,g.statusText=f.SAFE_TEXT,g.safe=!0;break;default:g.text=f.RISK,g.statusText=f.RISK_TEXT}return g},afterStore:function(){var a,b,c,d,e,f,g,h,i;if(this.data.app){for(b=this.data,e=this.params,f=this.platform,b.is_mobile=f.is_mobile,b.total_screenshots=0,!b.app.desc&&b.combo_app&&(b.app.desc=b.combo_app.desc),e.release_id&&(b.app.master=b.app.releases),b.android&&b.android.releases&&(this.virus_data=this.storeVirus(b.android)),g=[b.app,b.combo_app],c=0,d=g.length;c<d;c++)a=g[c],a&&(i=[],i=function(){var b,c,d,e;for(d=a.screenshots,e=[],b=0,c=d.length;b<c;b++)h=d[b],this.config.screenshotPrefix.test(h)?e.push(h+"?imageView2/0/w/426/h/240"):e.push(h);return e}.call(this),0===i.length&&a.market_app_info&&Array.prototype.push.apply(i,a.market_app_info.screenshot_urls),b.total_screenshots+=Math.min(i.length,5),a.screenshots=i.slice(0,5));return f.is_mobile&&(b.platform_matching=b.app.type===f.value),b.platform=f,b.is_ios=b.app.is_ios,b.is_android=b.app.is_android,b.is_android?(b.show_matching_tips=f.is_ios,b.download_visible=!f.is_ios):(b.download_visible=b.platform_matching,b.show_matching_tips=!b.platform_matching&&f.is_phone),b.show_app_type_icon=f.is_mobile||!this.has_combo}},render:function(){var a,b,c;return"passwd"===this.prev_template&&"passwd"===this.template_id?($("#required-pwd").hide(),$("#passwd-wrong").show(),void setTimeout(function(){return $("#required-pwd").show(),$("#passwd-wrong").hide()},2e3)):(this.data.app&&!this.data.error?(a=$("#meta").html(),this.data.app.desciption=this.data.app.desc,b=Mark.up(a,this.data.app),$("head").append(b),e.removeClass("no-scroll")):"passwd"===this.template_id&&(a=$("#meta_simple").html(),b=Mark.up(a,this.data.app),$("head").append(b)),this.has_combo&&e.addClass("combo"),c=$("#"+this.template_id).html()||"",b=Mark.up(c,this.data),f.html(b),this.virus_data.show&&this.renderTooltip(),(this.platform.is_android||this.platform.is_ios)&&$("main header table").height(Math.min(h,900)),e.addClass(this.template_id),this.afterRender())},getTooltipOffset:function(a,b){var c,d;return a||(a=$(".tip")),c=a.offset(),d={top:c.top+25,left:c.left-20}},renderTooltip:function(){var a,b,c,d,e,f;if(d=$("#virus_result").html(),e=Mark.up(d,this.virus_data),this.has_combo?(a=$(".per-type-info .icon-android"),a.parent().append(e)):($("header .name").append(e),b="en"===this.locale?195:200,$("header .name .icon-warp").css("max-width",b+"px")),!this.platform.is_mobile)return d=$(".tip"),"en"===this.locale&&d.addClass("en"),f=$("#tooltip").html(),f=Mark.up(f,this.virus_data),$("body").append(f),f=$(f),c=this.getTooltipOffset(d,f),f.css("top",c.top).css("left",c.left)},wechat:function(a){var b,c;if(b=this.data.app,c=b.icon_url,wx&&b)return wx.config({debug:!1,appId:"wx98dbd6cc53bd9cf2",timestamp:a.timestamp,nonceStr:a.noncestr,signature:a.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage"]}),wx.ready(function(){return wx.onMenuShareTimeline({title:document.title,link:"https://fir.im/"+b.short,imgUrl:i(c)}),wx.onMenuShareAppMessage({title:document.title,link:"https://fir.im/"+b.short,imgUrl:i(c)})})},afterRender:function(){var a,b,c,d,e;return a=this.data.app,this.platform.is_mobile&&a&&(a.in_short_list?this.isShow&&this.getAppAD(a):this.getAppAD(a)),this.platform.isWechat&&a&&$.ajax({url:this.config.server+"/wechat",method:"get",success:this.wechat.bind(this)}),this.OneKeyReport(a),this.pickElement(),this.authorized?(this.generateQrcode(),this.loadIcon(),$(".releases-section").delegate(".changelog-toggle","click",function(a){return $(this).parent().next().toggleClass("show")}),$(".releases-toggle").click(function(a){return $(this).parents(".releases-section").toggleClass("show-all"),$(this).parent().hide()})):(b=$(".app-brief .icon img"),b.error(function(){return b.attr("src",j)})),this.data.require_pwd&&($("#confirmPwd").click(function(a){return FIR.confirmPasswd()}),this.generateQrcode()),"not_found"!==this.template_id&&"legal_forbidden"!==this.template_id&&"forbidden"!==this.template_id&&"not_find"!==this.template_id&&"legal_forbidden_new"!==this.template_id||(setTimeout(function(){return f.find(".main header").removeClass("fade-out")},200),$(".visiable-moblie").removeClass("visiable-moblie")),d=$(".tip"),e=$(".tooltip"),c=this,d.on("mouseenter",function(a){var b,d;return d=a.target,b=c.getTooltipOffset($(d),e),e.css("top",b.top).css("left",b.left).show()}),d.on("mouseleave",function(a){return e.hide()})},getAppAD:function(a){var b,c;if(b=this.AD.label,a.is_embedded_ad?(this.AD.type="new_box",c="new_box","box"!==a.new_ad_tag&&this.ga("send","event","adFooter","render_new_box_error",a.short),$.ajax({url:this.config.api+"/"+c+"/"+b,method:"get",success:this.onADSuccess.bind(this)})):a.is_embedded_caipiao?(this.AD.type="new_cp",c="new_cp","cp"!==a.new_ad_tag&&this.ga("send","event","adFooter","render_new_cp_error",a.short),$.ajax({url:this.config.api+"/"+c+"/"+b,method:"get",success:this.onADSuccess.bind(this)})):a.new_ad_tag&&(this.AD.type="new_"+a.new_ad_tag,c="new_"+a.new_ad_tag,$.ajax({url:this.config.api+"/"+c+"/"+b,method:"get",success:this.onADSuccess.bind(this),error:function(a){return function(b){return a.ga("send","event","adFooter","render"+a.AD.type+"_"+b.status)}}(this)})),a.new_ad_tag)return this.AD.tag=a.new_ad_tag,$.ajax({url:this.config.api+"/new_"+a.new_ad_tag+"/"+b+"/?ad_space_category=downloaded",method:"get",success:this.onOtherSuccess.bind(this)})},getErrorAD:function(a){var b;return this.AD.type="Status",b=this.AD.label,$.ajax({url:this.config.api+"/status/"+b+"?code="+a,method:"get",success:this.onADSuccess.bind(this)})},onOtherSuccess:function(a){var b,c,d,e,f,g;if(g=this.platform.isWechat?"-wechat":"",this.AD.adType=a.style_name,Array.isArray(a.list))for(f=a.list,d=0,e=f.length;d<e;d++)b=f[d],c=b.title,b.fileName=""+c+g;else c=m(a.content),a.fileName=""+c+g;return this.AD.otherInfo=a.list,this.AD.isAfterInstall=!0},onADSuccess:function(a){var b,c,d,e,f;if(this.AD.info=a,f=this.platform.isWechat?"-wechat":"",Array.isArray(a)){for(d=0,e=a.length;d<e;d++)b=a[d],c=b.title,b.fileName=""+c+f;if(this.AD.is_use_ga=a[0].is_use_ga,!this.data.app&&!this.data.require_pwd)return this.renderOtherADWithoutApp()}else if("object"==typeof a)return this.AD.is_use_ga=a.is_use_ga,c=m(a.content),a.fileName=""+c+f,this.renderHashAD(a)},renderHashAD:function(a){var b,c,e,f;return f=$("#app_bottom_fixed").html()||"",b=Mark.up(f,a),c=new Image,a.fileName||(e=this.AD.label,a.fileName="null",this.ga("set","dimension1",d),this.ga("send","pageview"),this.ga("send","event","adFooter","render"+this.AD.type,a.fileName),window._hmt.push(["_trackEvent","adFooter","render"+this.AD.type,""+e])),c.onload=function(c){return function(){if(e=c.AD.label,c.ga("set","dimension1",d),c.ga("send","pageview"),c.ga("send","event","adFooter","render"+c.AD.type,a.fileName),window._hmt.push(["_trackEvent","adFooter","render"+c.AD.type,""+e]),a.redirect_url&&"."!==a.redirect_url)return $("body").append(b)}}(this),c.src=a.content},renderInstallAD:function(){var a,b,c,d,e,f,g;if(a=this.AD.otherInfo,e="",f=$("#after-install").html()||"",a&&0!==a.length)return"style1"===this.AD.adType&&a.length>3?this.AD.isAgain?(a=a.slice(3,a.length),this.AD.isAgain=!1,this.AD.isAgainClick=!0):(a=a.slice(0,3),this.AD.isAgain=!0):"style2"===this.AD.adType?(f=$("#after-install-zhibo").html()||"",this.data.app.desc&&this.data.app.desc.length>30&&(e=this.data.app.desc.substring(0,30),e+="...")):"style3"===this.AD.adType&&(f=$("#after-install-games").html()||""),d=a.length>1?this.renderMultiADs(a):this.renderSimpleADs(a),g=w[this.locale],c=this.platform.is_ios?g.VIEW_IN_DESKTOP:g.VIEW_IN_BROWSER,b=Mark.up(f,{list:d,app:this.data.app,installText:c,msg:e}),$("body").append(b),"style2"===this.AD.adType&&r.init({anim:!0,selectorName:".samLazyImg"}),this.startWaitDotInterval()},renderAdList:function(){return this.renderInstallAD(),this.ga("send","event","adFooter","clickAgain")},renderOtherADWithoutApp:function(){var a,b,c,d;if(a=this.AD.info,0!==a.length)return c=a.length>1?this.renderMultiADs(a):this.renderSimpleADs(a),d=$("#bottom-popularize").html()||"",b=Mark.up(d,{html:c}),$(".cell-container").append(b)},renderSimpleADs:function(a){var b,c;return b=a[0],window._hmt.push(["_trackEvent","adFooter","renderOtherSingle",this.AD.label]),this.ga("send","event","adFooter","renderOtherSingle",b.fileName),c=$("#popularize-app-detail").html()||"",Mark.up(c,{app:b})},renderMultiADs:function(a){var b,c,d,e,f,g,h,i,j;for(j=$("#popularize-apps").html()||"",this.AD.isError&&window._hmt.push(["_trackEvent","adFooter","render"+this.AD.type,""+this.AD.label]),this.AD.isAgainClick||this.AD.isError||window._hmt.push(["_trackEvent","adFooter","render_"+this.AD.tag+"_"+this.AD.adType,this.AD.label]),c=[],f=0,g=a.length;f<g;f++)b=a[f],c.push(m(b.title));return d=c.join("-"),i=this.platform.isWechat?"-wechat":"",this.AD.isError&&(this.ga("send","pageview"),this.ga("send","event","adFooter","render"+this.AD.type,""+d+i)),this.AD.isAgainClick||this.AD.isError||this.ga("send","event","adFooter","render_"+this.AD.tag+"_"+this.AD.adType,""+d+i),"style2"===this.AD.adType?j=$("#popularize-apps-zhibo").html()||"":"style1"===this.AD.adType?j=$("#popularize-apps").html()||"":"style3"===this.AD.adType&&(j=$("#popularize-apps-games").html()||""),h=!1,this.AD.otherInfo&&this.AD.otherInfo.length>4&&(h=!0),e=Mark.up(j,{apps:a,showChange:h})},generateQrcode:function(){var a,c,d;return c=this.elems.head_qrcode[0],d=b,d+="?utm_source=fir&utm_medium=qr",!this.data.app.token||!this.data.app.passwd&&this.data.app.is_opened||(d+="&download_token="+this.data.app.token),this.params.release_id&&(d+="&release_id="+this.params.release_id),this.params.fir_source&&(d+="&fir_source="+this.params.fir_source),this.params.fir_campaign&&(d+="&fir_campaign="+this.params.fir_campaign),
q(c,{text:d,width:200,height:200}),console.info("QRCode url: ",d),a=$(".release-qrcode"),a.each(function(a){return function(b,c){var e,f,g;return a.has_combo?(g=$(c).parents(".type").data("app-type"),e=a.data[g]):e=a.data.app,f=$(c).data("release"),d=location.protocol+"//"+location.host+"/"+e.short+"?release_id="+f,d+="&utm_source=fir&utm_medium=qr",e.is_opened&&!e.passwd||(d+="&download_token="+e.token),q(c,{text:d,bg:"#FFFFFF",width:180,height:180})}}(this))},loadIcon:function(){var a;if(a=$("header .icon img"),this.data.app.icon_url!==j)return a.error(function(){return a.attr("src",j)})},pickElement:function(){return this.elems.passwd_field=$("#passwdField"),this.elems.head_qrcode=$(".app-brief .qrcode")},confirmPasswd:function(){var a;return!!(a=this.elems.passwd_field.val())&&(this.params.download_passwd=a,this.query(),!1)},plistUrl:function(a){var b,c,d;return b=this.config.server,d=this.platform.ios_6_x?"http":"https",c=d+"://fir.im/plists/"+a,"itms-services://?action=download-manifest&url="+encodeURIComponent(c)},iosSchema:function(a){var b,c,d;return d="https:",b=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),b&&(c=parseInt(b[1],10),d=c>6?"https:":"http:"),"itms-services://?action=download-manifest&url="+encodeURIComponent(d+a)},beforeInstall:function(a){return this.config.headers["Download-Token"]=this.data.app.token,this.config.download_url=this.config.server+"/apps/"+this.data.app.id+"/install?release_id="+a,this.config.download_url+="&download_token="+this.data.app.token},install:function(a){var b,c,d,f;return this.platform.isUnabledInstall?(window._hmt.push(["_trackEvent","download","click","wechat-install"]),f=w[this.locale],$("#actions").html("<p class='strong'>"+f.UNABLE_INSTALL+"</p>").css("marginTop","0px"),$(".release-info").hide(),$(".name").css("marginBottom","0px"),$(".pattern").hide(),$(".wechat_tip_content").html("<div class='wechat_tip'><i class='triangle-up'></i>"+f.GO_OUT_WECHAT_TIP+"</div>"),void e.scrollTop(0)):(a||(b=$("#actions button"),b.html("&nbsp;").css({"min-width":"43px",width:"43px",padding:"12px 0","border-top-color":"transparent","border-left-color":"transparent"}).prop("disabled",!0),setTimeout(function(){return b.addClass("loading")},200),"ios"===this.data.app.type&&setTimeout(function(a){return function(){return $("#actions").html("<p>"+w[a.locale].VIEW_IN_DESKTOP+"</p>")}}(this),5e3)),d=function(b){return function(c){var d,e;if(window._hmt.push(["_trackEvent","download","click","install"]),e=b.getInstallUrl(a,c),window.location=e,d=b.AD.otherInfo,d&&0!==d.length)return setTimeout(function(){if(b.AD.isAfterInstall)return b.AD.type="OtherNew",b.renderInstallAD()},1e3)}}(this),c=new Date,void(this.data.app.download_token_can_expired&&c.getTime()-this.appTokenTime.getTime()>this.config.downloadTokenExpireTime?this.getDownloadToken(d):d(this.data.app.token)))},getInstallUrl:function(a,b){var c,d;return c=this.config.server+"/apps/"+this.data.app.id+"/install?download_token="+b,d=o(),d&&d.prefer_storage_name&&(c+="&prefer_storage_name="+d.prefer_storage_name),b=b||this.data.app.token,a=a||this.params.release_id||this.data.app.master.id,a&&(c+="&release_id="+a),this.params.fir_campaign&&(c+="&fir_campaign="+this.params.fir_campaign),this.params.fir_source&&(c+="&fir_source="+this.params.fir_source),p()&&(c+="&protocol=http"),"ios"===this.data.app.type&&(c=this.iosSchema(c)),c},OneKeyReport:function(a){var b,c,d,e,f;if(a&&(b=$("body").find("div.main > div.footer > a.one-key-report"),!(b.length<1)))return e=this.platform.is_mobile,d=this,f="//api.fir.im/apps/"+a.id+"/report_email",c=$(Mark.up($("#report-template").html(),this.config)),$("body").append(c),c.find("div.dialog-close").click(function(){return d.hideDialog()}),c.find("div.dialog-action>a.btn-report").click(function(){var a,b,d;return b=$("#report-email"),d=$("#report-type").find(".active"),a=$("#report-content"),""!==b.val().trim()&&/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(b.val().trim())?d.length<1?c.find("div.type-error").show().siblings().hide():""===a.val().trim()?(a.focus(),c.find("div.message-error").show().siblings().hide()):$.ajax({url:f,type:"post",data:{email:""+b.val().trim(),tag:d.html(),content:""+a.val().trim()},beforeSend:function(){return $("#report-sending").show()},success:function(a){return $("div.report-form").hide(),$("div.report-feedback").show()},error:function(){return alert("举报错误，请稍后重试")},complete:function(){return $("#report-sending").hide()}}):(b.focus(),c.find("div.email-error").show().siblings().hide())}),c.find("div.custom-checkbox").click(function(){return $(this).addClass("active").siblings().removeClass("active")}),b.click(function(){return d.showReport()})},showReport:function(){var a;return $("body").addClass("hidden-overflow"),this.resetReport(),this.platform.is_mobile||$("#MaskLayer").show(),this.platform.is_mobile?(a=$("#reportDialog").css({left:"100%",display:"block"}).addClass("animate"),window.setTimeout(function(){return a.css("left","0")},1)):$("#reportDialog").show()},hideDialog:function(){var a;return this.platform.is_mobile||$("#MaskLayer").hide(),this.platform.is_mobile?(a=$("#reportDialog").addClass("animate").css("left","100%"),window.setTimeout(function(){return a.hide()},500)):$("#reportDialog").hide(),$("body").removeClass("hidden-overflow")},resetReport:function(){return $("#report-email").val(""),$("#report-type").find("div.custom-checkbox").removeClass("active"),$("#report-content").val(""),$("#report-error").find("div").hide(),$("#report-form").show(),$("#report-feedback").hide()},startWaitDotInterval:function(){var a,b,c,d,e;return a=$(".waiting-dot"),d=0,b=".",e=void 0,c=function(){var f,g,h;for(d=(d+1)%5,f=[],g=0;g<d;)f.push(b),g++;return h=f.join(""),a.text(h),e=setTimeout(c,500)},a.length&&c(),e},clickFooterAd:function(){var a,b;if(a=this.AD.info)return b="download"+this.AD.type,this.clickAnalyse(a.redirect_url,a.content,this.AD.type,a.ad_unique_name),this.ga("send","event","adFooter",b,a.fileName),window._hmt.push(["_trackEvent","adFooter",b,this.AD.label])},startRedirectInterval:function(){var a,b;return this.isShow=!1,a=this,b=setInterval(function(){if($("#countdown").html(--a.wait_time),0===a.wait_time)return clearInterval(b),a.isShow=!0,a.template_id="app",a.onSuccess(a.resp),a.render(),$("body").removeClass("legal_forbidden_new")},1e3)},clickAnalyse:function(a,b,c,d,e,f,g){var h;return null==a&&(a=""),null==b&&(b=""),h={url:a,img:b,ad_unique_name:d},f&&(h.category="downloaded"),(e||0===e)&&(h.index=e+1),g&&(h.style=g),$.ajax({url:this.config.server+"/click_"+c+"/"+this.AD.label,type:"post",data:h})},clickPopularize:function(a){var b,c,d;return c="download"+this.AD.type,d="","OtherNew"===this.AD.type?(this.AD.isAgainClick&&(a+=3),b=this.AD.otherInfo[a],d=b.ad_unique_name,c="download_"+this.AD.tag+"_"+this.AD.adType):b=this.AD.info[a],this.clickAnalyse(b.install_url,b.icon,"new_"+this.AD.tag,d,a,c,this.AD.adType),window._hmt.push(["_trackEvent","adFooter",c,this.AD.label]),this.ga("send","event","adFooter",c,b.fileName)},closeAfterLayer:function(){return $(".after-install-close").remove(),$(".after-install-fixed").remove()}},FIR.init(),FIR.query()})}).call(this);