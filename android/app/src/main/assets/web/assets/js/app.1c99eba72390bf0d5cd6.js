!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var a in n)("object"==typeof exports?exports:e)[a]=n[a]}}(this,function(){return webpackJsonp([0,25],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=n(1),i=a(o),r=n(31),u=n(170),l=n(210),c=a(l),s=n(217),d=a(s),f=n(293),m=n(330),g=a(m);c.default.dispatch((0,f.setMobile)(g.default.isMobile())),c.default.dispatch((0,f.setToken)(localStorage.__bestToken__&&JSON.parse(localStorage.__bestToken__))),c.default.dispatch((0,f.setLogin)(localStorage.__bestLogin__&&JSON.parse(localStorage.__bestLogin__))),c.default.dispatch((0,f.getHotWordList)()),c.default.dispatch((0,f.setClientHeight)(document.documentElement.clientHeight)),(0,r.render)(i.default.createElement(u.Provider,{store:c.default},d.default),document.getElementById("app"))},210:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(183),i=n(211),r=a(i),u=n(212),l=a(u),c=n(213),s=(a(c),n(214)),d=a(s),f=n(216),m=a(f),g=(0,o.combineReducers)({common:d.default,admin:m.default}),p=(0,o.createStore)(g,(0,o.applyMiddleware)(r.default,l.default));t.default=p},214:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var i=n(215),r=o(i),u=n(210),l=(a(u),{token:"",isLogin:!1,isLoading:!1,isMobile:!1,msg:"",clientHeight:0,iShowMenu:!1,hotWord:{isFromHotWord:!1,name:""},hotWordList:[],articleParams:{category:"前端",tag:"",isFromHome:!0}}),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1];switch(t.type){case r.SET_LOGIN:return Object.assign({},e,{isLogin:t.isLogin});case r.SET_TOKEN:return Object.assign({},e,{token:t.token});case r.SET_LOADING:return Object.assign({},e,{isLoading:t.isLoading});case r.SET_MOBILE:return Object.assign({},e,{isMobile:t.isMobile});case r.SET_TOAST:return Object.assign({},e,{msg:t.msg});case r.SET_CLIENT_HEIGHT:return Object.assign({},e,{clientHeight:t.clientHeight});case r.SET_TOGGLE_MENU:var n=!e.iShowMenu;return Object.assign({},e,{iShowMenu:n});case r.SET_ARTICLE_PARAMS:return Object.assign({},e,{articleParams:t.articleParams});case r.GET_HOT_WORD_LIST:return Object.assign({},e,{hotWordList:t.hotWordList});case r.SET_HOT_WORD:return Object.assign({},e,{hotWord:t.params});default:return e}};t.default=c},215:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SET_LOADING="SET_LOADING",t.SET_TOGGLE_MENU="SET_TOGGLE_MENU",t.SET_TOAST="SET_TOAST",t.SET_MOBILE="SET_MOBILE",t.SET_TOKEN="SET_TOKEN",t.DEL_TOKEN="DEL_TOKEN",t.SET_LOGIN="SET_LOGIN",t.SET_ARTICLE_STATE="SET_ARTICLE_STATE",t.SET_CLIENT_HEIGHT="SET_CLIENT_HEIGHT",t.SET_TOGGLE_SIDEBAR="SET_TOGGLE_SIDEBAR",t.SET_HOT_WORD="SET_HOT_WORD",t.SET_ARTICLE_PARAMS="SET_ARTICLE_PARAMS",t.SET_BREADCRUMB="SET_BREADCRUMB",t.GET_TAG_LIST="GET_TAG_LIST",t.DEL_TAG="DEL_TAG",t.ADD_TAG="ADD_TAG",t.EDIT_TAG="EDIT_TAG",t.GET_HOT_WORD_LIST="GET_HOT_WORD_LIST",t.DEL_HOT_WORD="DEL_HOT_WORD",t.ADD_HOT_WORD="ADD_HOT_WORD",t.EDIT_HOT_WORD="EDIT_HOT_WORD",t.GET_CATEGORY_LIST="GET_CATEGORY_LIST",t.DEL_CATEGORY="DEL_CATEGORY",t.ADD_CATEGORY="ADD_CATEGORY",t.EDIT_CATEGORY="EDIT_CATEGORY"},216:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o=n(215),i=a(o),r={isHideSidebar:!1,categoryList:[],tagList:[],isAddArticle:!1,breadCrumb:[]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments[1];switch(t.type){case i.SET_TOGGLE_SIDEBAR:var n=t.isHideSidebar||!e.isHideSidebar;return Object.assign({},e,{isHideSidebar:n});case i.SET_BREADCRUMB:var a=t.breadCrumb||["管理"];return Object.assign({},e,{breadCrumb:a});default:return e}};t.default=u},217:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=a(o),r=n(218),u=n(210),l=a(u);n(279),n(284);var c=function(e,t){n.e(1,function(e){t(null,n(291).default)})},s=function(e,t){n.e(2,function(e){t(null,n(354).default)})},d=function(e,t){n.e(3,function(e){t(null,n(355).default)})},f=function(e,t){n.e(4,function(e){t(null,n(378).default)})},m=function(e,t){n.e(5,function(e){t(null,n(381).default)})},g=function(e,t){n.e(6,function(e){t(null,n(394).default)})},p=function(e,t){n.e(7,function(e){t(null,n(399).default)})},T=function(e,t){n.e(8,function(e){t(null,n(402).default)})},E=function(e,t){n.e(9,function(e){t(null,n(415).default)})},h=function(e,t){n.e(10,function(e){t(null,n(416).default)})},_=function(e,t){n.e(11,function(e){t(null,n(419).default)})},v=function(e,t){n.e(12,function(e){t(null,n(425).default)})},L=function(e,t){n.e(13,function(e){t(null,n(721).default)})},S=function(e,t){n.e(14,function(e){t(null,n(724).default)})},y=function(e,t){n.e(4,function(e){t(null,n(727).default)})},O=function(e,t){n.e(15,function(e){t(null,n(728).default)})},C=function(e,t){n.e(16,function(e){t(null,n(731).default)})},M=function(e,t){n.e(17,function(e){t(null,n(732).default)})},A=function(e,t){n.e(18,function(e){t(null,n(733).default)})},b=function(e,t){n.e(19,function(e){t(null,n(734).default)})},R=function(e,t){n.e(20,function(e){t(null,n(737).default)})},I=function(e,t){n.e(21,function(e){t(null,n(740).default)})},D=function(e,t){n.e(23,function(e){t(null,n(928).default)})},H=function(e,t,n){var a=l.default.getState().common.isLogin;a||t("/admin/signin"),n()},w=function(e,t,n){var a=l.default.getState().common.isLogin;a&&t("/admin/home"),n()},G=i.default.createElement("div",null,i.default.createElement(r.Router,{history:r.hashHistory},i.default.createElement(r.Route,{path:"/",getComponent:c},i.default.createElement(r.IndexRoute,{title:"首页",getComponent:d}),i.default.createElement(r.Route,{path:"/",title:"首页",getComponent:d}),i.default.createElement(r.Route,{path:"/search",title:"搜索",getComponent:f}),i.default.createElement(r.Route,{path:"/article",title:"文章",getComponent:p}),i.default.createElement(r.Route,{path:"/about",title:"关于",getComponent:g}),i.default.createElement(r.Route,{path:"/article/detail/:id",title:"文章详情",getComponent:T}),i.default.createElement(r.Route,{path:"/message",title:"留言",getComponent:m}),i.default.createElement(r.Route,{path:"/admin",title:"管理",getComponent:h},i.default.createElement(r.IndexRoute,{title:"登录",getComponent:_}),i.default.createElement(r.Route,{path:"signin",title:"登录",getComponent:_,onEnter:w}),i.default.createElement(r.Route,{path:"home",getComponent:v,onEnter:H},i.default.createElement(r.IndexRoute,{title:"首页",getComponent:L}),i.default.createElement(r.Route,{path:"message",title:"留言",getComponent:S}),i.default.createElement(r.Route,{path:"message/detail/:id",title:"留言详情",getComponent:y}),i.default.createElement(r.Route,{path:"count",title:"访问",getComponent:O}),i.default.createElement(r.Route,{path:"tag",title:"标签",getComponent:C}),i.default.createElement(r.Route,{path:"category",title:"分类",getComponent:M}),i.default.createElement(r.Route,{path:"hot",title:"热词",getComponent:A}),i.default.createElement(r.Route,{path:"article",title:"文章",getComponent:b}),i.default.createElement(r.Route,{path:"article/comment",title:"文章评论",getComponent:R}),i.default.createElement(r.Route,{path:"article/add",title:"添加文章",getComponent:I}),i.default.createElement(r.Route,{path:"article/edit/:id",title:"编辑文章",getComponent:D})))),i.default.createElement(r.Route,{path:"/app",getComponent:s},i.default.createElement(r.Route,{path:"article/:id",title:"文章详情",getComponent:E}))));t.default=G},279:function(e,t){},284:function(e,t){},293:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.setToggleSidebar=t.setHotWord=t.getHotWordList=t.setArticleParams=t.setToggleMenu=t.setToast=t.setClientHeight=t.setMobile=t.setLoading=t.setBreadCrumb=t.delToken=t.setToken=t.setLogin=void 0;var o=n(215),i=a(o),r=n(294),u=a(r),l=(t.setLogin=function(e){return{type:i.SET_LOGIN,isLogin:e}},t.setToken=function(e){return{type:i.SET_TOKEN,token:e}},t.delToken=function(){return{type:i.DEL_TOKEN}},t.setBreadCrumb=function(e){return{type:i.SET_BREADCRUMB,breacdCrumb:e}},t.setLoading=function(e){return{type:i.SET_LOADING,isLoading:e}},t.setMobile=function(e){return{type:i.SET_MOBILE,isMobile:e}},t.setClientHeight=function(e){return{type:i.SET_CLIENT_HEIGHT,clientHeight:e}},function(){return{type:i.SET_TOAST,msg:""}}),c=(t.setToast=function(e){return[{type:i.SET_TOAST,msg:e},function(e,t){setTimeout(function(){e(l())},2e3)}]},t.setToggleMenu=function(){return{type:i.SET_TOGGLE_MENU}},t.setArticleParams=function(e){return{type:i.SET_ARTICLE_PARAMS,articleParams:e}},function(e){return{type:i.GET_HOT_WORD_LIST,hotWordList:e}});t.getHotWordList=function(){return function(e,t){u.getHotWordList().then(function(t){e(c(t.data))})}},t.setHotWord=function(e){return{type:i.SET_HOT_WORD,params:e}},t.setToggleSidebar=function(e){return{type:i.SET_TOGGLE_SIDEBAR,isHideSidebar:e}}},294:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.delComment=t.setCommentLike=t.getCommentList=t.addComment=t.getDiffArticle=t.likeArticle=t.getArticleDetail=t.getArticleList=t.editArticle=t.delArticle=t.addArticle=t.getMessageList=t.getMessageDetail=t.delMessage=t.addMessage=t.editHotWord=t.delHotWord=t.addHotWord=t.getHotWordList=t.editCategory=t.delCategory=t.addCategory=t.getCategoryList=t.editTag=t.delTag=t.addTag=t.getTagList=t.getAccessList=t.delAccess=t.getPreviewTotal=t.logout=t.login=void 0;var o=n(295),i=a(o);t.login=function(e){return(0,i.default)("post","/admin/login",e,!0)},t.logout=function(e){return(0,i.default)("get","/admin/logout",e)},t.getPreviewTotal=function(e){return(0,i.default)("get","/admin/getPreviewTotal",e)},t.delAccess=function(e){return(0,i.default)("get","/admin/delAccess",e)},t.getAccessList=function(e){return(0,i.default)("get","/admin/getAccessList",e)},t.getTagList=function(e){return(0,i.default)("get","/tag/getList",e)},t.addTag=function(e){return(0,i.default)("post","/tag/add",e,!0)},t.delTag=function(e){return(0,i.default)("get","/tag/delete",e,!0)},t.editTag=function(e){return(0,i.default)("post","/tag/edit",e,!0)},t.getCategoryList=function(e){return(0,i.default)("get","/category/getList",e)},t.addCategory=function(e){return(0,i.default)("post","/category/add",e,!0)},t.delCategory=function(e){return(0,i.default)("get","/category/delete",e,!0)},t.editCategory=function(e){return(0,i.default)("post","/category/edit",e,!0)},t.getHotWordList=function(e){return(0,i.default)("get","/hot/getList",e)},t.addHotWord=function(e){return(0,i.default)("post","/hot/add",e,!0)},t.delHotWord=function(e){return(0,i.default)("get","/hot/delete",e,!0)},t.editHotWord=function(e){return(0,i.default)("post","/hot/edit",e,!0)},t.addMessage=function(e){return(0,i.default)("post","/message/add",e,!0)},t.delMessage=function(e){return(0,i.default)("get","/message/delete",e,!0)},t.getMessageDetail=function(e){return(0,i.default)("get","/message/getDetail",e,!0)},t.getMessageList=function(e){return(0,i.default)("get","/message/getList",e)},t.addArticle=function(e){return(0,i.default)("post","/article/add",e,!0)},t.delArticle=function(e){return(0,i.default)("get","/article/delete",e,!0)},t.editArticle=function(e){return(0,i.default)("post","/article/edit",e,!0)},t.getArticleList=function(e){return(0,i.default)("get","/article/getList",e,!0)},t.getArticleDetail=function(e){return(0,i.default)("get","/article/getDetail",e,!0)},t.likeArticle=function(e){return(0,i.default)("post","/article/like",e)},t.getDiffArticle=function(e){return(0,i.default)("get","/article/getDiffArticle",e,!0)},t.addComment=function(e){return(0,i.default)("post","/comment/add",e,!0)},t.getCommentList=function(e){return(0,i.default)("get","/comment/getList",e,!0)},t.setCommentLike=function(e){return(0,i.default)("post","/comment/like",e,!0)},t.delComment=function(e){return(0,i.default)("get","/comment/delete",e,!0)}},295:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(293),r=n(210),u=o(r),l=n(296),c=o(l),s=n(322),d=a(s),f=n(323);o(f);c.default.defaults.baseURL=d.ROOT_API,c.default.defaults.timeout=1e4,c.default.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",c.default.defaults.withCredentials=!0;var m=function(e,t,n,a){if(e=e||"get",!t)throw new Error("请指定url");var o={};if(n="[object Object]"===Object.prototype.toString.call(n)?n:{},"get"===e)o.method="get",o.url=t,o.params=n;else{if("post"!==e)throw new Error("请指定请求方式");o.method="post",o.url=t,o.data=n}var r=c.default.create();r.interceptors.request.use(function(e){return e.headers["x-access-token"]=u.default.getState().common.token||"",u.default.dispatch((0,i.setLoading)(!0)),e},function(e){u.default.dispatch((0,i.setLoading)(!1))}),r.interceptors.response.use(function(e){return u.default.dispatch((0,i.setLoading)(!1)),e},function(e){return u.default.dispatch((0,i.setLoading)(!1)),Promise.reject(e)});var l=new Promise(function(e,t){r.request(o).then(function(t){return 200==t.status&&0!==t.data.retCode?(10006===t.data.retCode||10003===t.data.retCode,console.log(t),a&&u.default.dispatch((0,i.setToast)(t.data.msg||"异常")),!1):e(t.data)},function(e){a&&u.default.dispatch((0,i.setToast)("异常")),console.log(e,"请求失败")}).catch(function(e){a&&u.default.dispatch((0,i.setToast)("异常")),console.log(e,"请求失败")})});return l};t.default=m},322:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ROOT_API="http://api.bestsamcn.me/api",t.POSTER_URL="http://api.bestsamcn.me/public/img",t.FACE_URL="http://api.bestsamcn.me/public/face",t.PAGE_SIZE=5,t.SHOW_TOP_DISTANT=800},323:function(e,t){"use strict";e.exports={10001:"用户名不能少于两位",10002:"密码不能少于6位",10003:"用户名已经存在",10004:"用户名和密码不能有空格",10005:"密码错误",10006:"凭证无效，请重新登录",10007:"名称不能为空",10008:"你已登录",10009:"你无权限",10010:"名称重复",10011:"查询无此记录",10012:"id无效",10013:"名称重复",10014:"请选择标签",10015:"昵称长度不能少于两位",10016:"邮箱格式不正确",10017:"内容长度不能少于6位",10018:"查找无该记录",10019:"查找无该记录",10020:"查找无该记录",10021:"查找无该记录",10022:"内容不能为空",10023:"用户名不存在",10024:"图片格式错误",10025:"图片不能大于5M"}},330:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={};n.isMobile=function(){var e=!1,t=navigator.userAgent.toLowerCase(),n="ipad"==t.match(/ipad/i),a="iphone os"==t.match(/iphone os/i),o="midp"==t.match(/midp/i),i="rv:1.2.3.4"==t.match(/rv:1.2.3.4/i),r="ucweb"==t.match(/ucweb/i),u="android"==t.match(/android/i),l="windows ce"==t.match(/windows ce/i),c="windows mobile"==t.match(/windows mobile/i);return(n||a||o||i||r||u||l||c)&&(e=!0),e},n.setCookie=function(e,t,n){var a="";if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),a=";expires="+o.toUTCString()}document.cookie=e+"="+t+a},n.getCookie=function(e){var t=document.cookie.match(new RegExp(e+"=([^;]*)"));return t?t[1]:""},n.clearCookie=function(e){window.setCookie(e,"",-1)},n.getStyle=function(e,t){return getComputedStyle(e,!1)[t]},n.moveStart=function(e,t,n){var a=this;clearInterval(e.timer),e.timer=setInterval(function(){var o=!0,i=0;i=parseInt(a.getStyle(e,"top"));var r=(t.top-i)/8;r=r>0?Math.ceil(r):Math.floor(r),i!=t.top&&(o=!1),e.style.top=i+r+"px",o&&(clearInterval(e.timer),n&&n())},30)},n.Clock=function(){n.Clock=n.Clock||{},n.Clock._timer=null;var e,t,i,r,u=!0,l=180,c={up:!1,shift:!1},s=[],d="hsla(0, 0%, 100%, 0.3)",f={x:0,y:0},g=!1,p=!1,T=80,E=!1,h=100,_=!0,v=300,L=20,S=300,y=180,O=600,C=2*Math.PI,M=function(){T=60,d="hsla(207, 90%, 54%, 1)";var e={0:"#333333",.5:"#222222"};k(e)},A=function(e){t.fillStyle=d,t.beginPath(),t.arc(e.x,e.y,e.size,0,C,!0),t.closePath(),t.fill()},b=function(){for(var e=0,t=s.length;e<t;e++){var n=s[e];if(n.inText){var a,o=f.x-n.px,i=f.y-n.py,r=Math.atan2(i,o),u=Math.cos(r),l=Math.sin(r);a=c.shift===!0?-1:1,n.x+=a*(Math.pow(u-1,2)-1)+n.velocityX*n.delta,n.y+=a*(Math.pow(l-1,2)-1)+n.velocityY*n.delta,n.px=n.x,n.py=n.y,A(n)}}},R=function(e){var t=new Date,n=t.getHours();e?(n=n>12?n-=12:n,n=0==n?12:n):n=D(n);var a=D(t.getMinutes()),o=D(t.getSeconds());return{hours:n,minutes:a,seconds:o,timeString:n+" : "+a+" : "+o}},I=function(){t.clearRect(0,0,v,l);var e=R(!0);if(T=60,E===!0)h>0?(T=60,r="?",h--):r=e.timeString,x(300);else if(_===!0&&u===!0){var n=e.hours+e.minutes+e.seconds;x(n),r=e.timeString}else M(),r=e.timeString;t.fillStyle="rgb(255, 255, 255)",t.textBaseline="middle",t.font=T+"px 'Avenir', 'Helvetica Neue', 'Arial', 'sans-serif'",t.fillText(r,.5*(v-t.measureText(r).width),.5*l);var a=t.getImageData(0,0,v,l);if(t.clearRect(0,0,v,l),u===!0&&(t.fillStyle=i,t.fillRect(0,0,v,l)),g===!1){for(var c=0,d=s.length;c<d;c++){var f=s[c];f.inText=!1}H(a)}else b();o.update("fps")},D=function(e){return("0"+e).substr(-2)},H=function(e){for(var t=[],n=v;n>0;n-=2)for(var a=0;a<v;a+=6){var o=4*(n+a*v);e.data[o]>10&&t.push([n,a])}for(var i=t.length,r=0;r<t.length&&r<s.length;r++){try{var u,l,d=s[r];p?(u=t[i-1][0]-(d.px+5*Math.random()),l=t[i-1][1]-(d.py+5*Math.random())):(u=t[i-1][0]-d.px,l=t[i-1][1]-d.py);var f=Math.sqrt(u*u+l*l),g=Math.atan2(l,u),T=Math.cos(g),E=Math.sin(g);if(d.x=d.px+T*f*d.delta,d.y=d.py+E*f*d.delta,d.px=d.x,d.py=d.y,d.inText=!0,A(d),c.up===!0)d.size+=.3;else{var h=d.size-.5;h>d.origSize&&h>0?d.size=h:d.size=m.origSize}}catch(e){}i--}},w=function(t){return t.offsetX?{x:t.offsetX,y:t.offsetY}:t.layerX?{x:t.layerX,y:t.layerY}:{x:t.pageX-e.offsetLeft,y:t.pageY-e.offsetTop}},G=function(){v=Math.max(300,S),l=Math.max(180,y),e.width=v,e.height=l,e.style.position="absolute",e.style.left="0px",e.style.top="0px"},k=function(e){i=t.createRadialGradient(v/2,l/2,0,v/2,l/2,v);for(var n in e){var a=e[n];i.addColorStop(n,a)}},x=function(e){var t={0:"hsl("+e+", 100%, 100%)",.5:"hsl("+e+", 10%, 50%)"};d="hsla("+e+", 10%, 50%, 0.3)",k(t)};return{init:function(i){if(e=document.getElementById(i)||i,null!==e&&e.getContext){t=e.getContext("2d"),G(),this.ui();for(var r=0;r<O;r++)s[r]=new a(e);o.initialize(e,"fps"),M(),n.Clock._timer&&clearInterval(n.Clock._timer),n.Clock._timer=setInterval(I,L)}},ui:function(){var t=document.getElementById("toggle-options"),n=document.getElementById("options"),a="[-] Hide Options",o="[+] Show Options",i=document.getElementById("quivers"),r=document.getElementById("gradient"),l=document.getElementById("valentineify"),s=document.getElementById("color");t.innerHTML=o,t.addEventListener("click",function(e){e.preventDefault(),"on"===n.className?(n.className="",t&&(t.innerHTML=o)):(n.className="on",t&&(t.innerHTML=a))},!1),i.addEventListener("click",function(e){e.preventDefault(),"on"===i.className?(i.className="",p=!1):(i.className="on",p=!0)},!1),r.addEventListener("click",function(e){e.preventDefault(),"on"===r.className?(r.className="",u=!1):(r.className="on",u=!0)},!1),l.addEventListener("click",function(e){e.preventDefault(),"on"===l.className?(l.className="",E=!1,h=0):(l.className="on",h=60,E=!0)},!1),s.addEventListener("click",function(e){e.preventDefault(),"on"===s.className?(s.className="",_=!1):(s.className="on",_=!0)},!1),document.addEventListener("keydown",function(e){switch(e.keyCode){case 16:c.shift=!0,e.preventDefault();break;case 38:c.up=!0,e.preventDefault()}},!1),document.addEventListener("keyup",function(e){switch(e.keyCode){case 16:c.shift=!1,e.preventDefault();break;case 38:c.up=!1,e.preventDefault()}},!1),window.addEventListener("resize",function(e){G()},!1),e.addEventListener("mousedown",function(e){g=!0},!1),e.addEventListener("touchstart",function(e){g=!0},!1),document.addEventListener("mouseup",function(e){g=!1},!1),document.addEventListener("touchend",function(e){g=!1},!1),e.addEventListener("mousemove",function(e){g&&(f=w(e))},!1)}}}();var a=function(e){var t=180*Math.random()/Math.PI,n=e.height,a=6*Math.random();this.delta=.25,this.x=0,this.y=0,this.px=e.width/2+Math.cos(t)*n,this.py=e.height/2+Math.sin(t)*n,this.velocityX=Math.floor(10*Math.random())-10,this.velocityY=Math.floor(10*Math.random())-10,this.size=a,this.origSize=a,this.inText=!1},o={delta:0,lastTime:0,frames:0,totalTime:0,updateTime:0,updateFrames:0,initialize:function(e,t){this.lastTime=(new Date).getTime(),!document.getElementById(t)&&document.getElementById(e)&&this.createFPS(e,t)},createFPS:function(e,t){var n=document.createElement("div");n.setAttribute("id",t);var a=document.getElementById(e),o=a.parentNode;n&&(n.innerHTML="FPS AVG: 0 CURRENT: 0"),o.appendChild(n||null)},update:function(e){var t=(new Date).getTime();this.delta=t-this.lastTime,this.lastTime=t,this.updateTime+=this.delta,this.totalTime+=this.delta,this.frames++,this.updateFrames++,document.getElementById(e)&&(document.getElementById(e).innerHTML="FPS Average: "+Math.round(1e3*this.frames/this.totalTime)+" Current: "+Math.round(1e3*this.updateFrames/this.updateTime)),this.updateTime=0,this.updateFrames=0}};n.toScrollHeight=function(e,t){function n(e,t){clearInterval(a);var n=0,t=0;a=setInterval(function(){t=document.documentElement.scrollTop||document.body.scrollTop,n=n>0?Math.ceil((e-t)/7):Math.floor((e-t)/7),t!=e?document.documentElement.scrollTop=document.body.scrollTop=t+n:clearInterval(a),o=1},30)}var a=null,o=0;"undefined"!==t&&t.addEventListener("click",function(){clearInterval(a),n(e)}),window.addEventListener("scroll",function(){1!=o&&clearInterval(a),o=2})},t.default=n}})});