webpackJsonp([5,25],{381:function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),c=r(1),u=i(c),f=r(172),g=(i(f),r(170)),p=r(294),d=n(p),m=r(330),h=(i(m),r(382)),b=i(h),v=r(293);r(392);var y=function(t){function e(){return o(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),l(e,[{key:"postMessage",value:function(t){t.preventDefault();var e=this.refs.form;if(!e.name.value)return this.props.setToast("昵称不能为空");if(!e.email.value)return this.props.setToast("邮箱不能为空");if(!e.content.value)return this.props.setToast("留言不能为空");e.content.value=(0,b.default)(e.content.value);var r={name:e.name.value,email:e.email.value,content:e.content.value};d.addMessage(r).then(function(t){e.name.value="",e.email.value="",e.content.value=""})}},{key:"render",value:function(){return u.default.createElement("div",{className:"message"},u.default.createElement("h2",{className:"color-black"},"CONTACT"),u.default.createElement("form",{className:"msg-form",ref:"form"},u.default.createElement("h4",{className:"color-black"},"Name"),u.default.createElement("input",{type:"text",name:"name"}),u.default.createElement("h4",{className:"color-black"},"Email"),u.default.createElement("input",{type:"text",name:"email"}),u.default.createElement("h4",{className:"color-black"},"Message"),u.default.createElement("textarea",{type:"textarea",name:"content"}),u.default.createElement("button",{className:"button con-share-alt",type:"info",onClick:this.postMessage.bind(this)},"发送")))}}]),e}(u.default.Component),w=function(t){return{setToast:function(e){return t((0,v.setToast)(e))}}};e.default=(0,g.connect)(null,w)(y)},382:function(t,e,r){function n(t,e){var r=new a(e);return r.process(t)}var i=r(383),o=r(390),a=r(391);e=t.exports=n,e.FilterXSS=a;for(var s in i)e[s]=i[s];for(var s in o)e[s]=o[s];"undefined"!=typeof window&&(window.filterXSS=t.exports)},383:function(t,e,r){function n(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]}}function i(t,e,r){}function o(t,e,r){}function a(t,e,r){}function s(t,e,r){}function l(t){return t.replace(I,"&lt;").replace(C,"&gt;")}function c(t,e,r,n){if(r=m(r),"href"===e||"src"===e){if(r=A.trim(r),"#"===r)return"#";if("http://"!==r.substr(0,7)&&"https://"!==r.substr(0,8)&&"mailto:"!==r.substr(0,7)&&"#"!==r[0]&&"/"!==r[0])return""}else if("background"===e){if(z.lastIndex=0,z.test(r))return""}else if("style"===e){if(_.lastIndex=0,_.test(r))return"";if(N.lastIndex=0,N.test(r)&&(z.lastIndex=0,z.test(r)))return"";n!==!1&&(n=n||T,r=n.process(r))}return r=h(r)}function u(t){return t.replace(S,"&quot;")}function f(t){return t.replace(O,'"')}function g(t){return t.replace(E,function(t,e){return"x"===e[0]||"X"===e[0]?String.fromCharCode(parseInt(e.substr(1),16)):String.fromCharCode(parseInt(e,10))})}function p(t){return t.replace(j,":").replace(L," ")}function d(t){for(var e="",r=0,n=t.length;r<n;r++)e+=t.charCodeAt(r)<32?" ":t.charAt(r);return A.trim(e)}function m(t){return t=f(t),t=g(t),t=p(t),t=d(t)}function h(t){return t=u(t),t=l(t)}function b(){return""}function v(t,e){function r(e){return!!n||A.indexOf(t,e)!==-1}"function"!=typeof e&&(e=function(){});var n=!Array.isArray(t),i=[],o=!1;return{onIgnoreTag:function(t,n,a){if(r(t)){if(a.isClosing){var s="[/removed]",l=a.position+s.length;return i.push([o!==!1?o:a.position,l]),o=!1,s}return o||(o=a.position),"[removed]"}return e(t,n,a)},remove:function(t){var e="",r=0;return A.forEach(i,function(n){e+=t.slice(r,n[0]),r=n[1]}),e+=t.slice(r)}}}function y(t){return t.replace(M,"")}function w(t){var e=t.split("");return e=e.filter(function(t){var e=t.charCodeAt(0);return 127!==e&&(!(e<=31)||(10===e||13===e))}),e.join("")}var x=r(384).FilterCSS,k=r(384).getDefaultWhiteList,A=r(389),T=new x,I=/</g,C=/>/g,S=/"/g,O=/&quot;/g,E=/&#([a-zA-Z0-9]*);?/gim,j=/&colon;?/gim,L=/&newline;?/gim,z=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,_=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,N=/u\s*r\s*l\s*\(.*/gi,M=/<!--[\s\S]*?-->/g;e.whiteList=n(),e.getDefaultWhiteList=n,e.onTag=i,e.onIgnoreTag=o,e.onTagAttr=a,e.onIgnoreTagAttr=s,e.safeAttrValue=c,e.escapeHtml=l,e.escapeQuote=u,e.unescapeQuote=f,e.escapeHtmlEntities=g,e.escapeDangerHtml5Entities=p,e.clearNonPrintableCharacter=d,e.friendlyAttrValue=m,e.escapeAttrValue=h,e.onIgnoreTagStripAll=b,e.StripTagBody=v,e.stripCommentTag=y,e.stripBlankChar=w,e.cssFilter=T,e.getDefaultCSSWhiteList=k},384:function(t,e,r){function n(t,e){var r=new o(e);return r.process(t)}var i=r(385),o=r(386);e=t.exports=n,e.FilterCSS=o;for(var a in i)e[a]=i[a];"undefined"!=typeof window&&(window.filterCSS=t.exports)},385:function(t,e){function r(){var t={};return t["align-content"]=!1,t["align-items"]=!1,t["align-self"]=!1,t["alignment-adjust"]=!1,t["alignment-baseline"]=!1,t.all=!1,t["anchor-point"]=!1,t.animation=!1,t["animation-delay"]=!1,t["animation-direction"]=!1,t["animation-duration"]=!1,t["animation-fill-mode"]=!1,t["animation-iteration-count"]=!1,t["animation-name"]=!1,t["animation-play-state"]=!1,t["animation-timing-function"]=!1,t.azimuth=!1,t["backface-visibility"]=!1,t.background=!0,t["background-attachment"]=!0,t["background-clip"]=!0,t["background-color"]=!0,t["background-image"]=!0,t["background-origin"]=!0,t["background-position"]=!0,t["background-repeat"]=!0,t["background-size"]=!0,t["baseline-shift"]=!1,t.binding=!1,t.bleed=!1,t["bookmark-label"]=!1,t["bookmark-level"]=!1,t["bookmark-state"]=!1,t.border=!0,t["border-bottom"]=!0,t["border-bottom-color"]=!0,t["border-bottom-left-radius"]=!0,t["border-bottom-right-radius"]=!0,t["border-bottom-style"]=!0,t["border-bottom-width"]=!0,t["border-collapse"]=!0,t["border-color"]=!0,t["border-image"]=!0,t["border-image-outset"]=!0,t["border-image-repeat"]=!0,t["border-image-slice"]=!0,t["border-image-source"]=!0,t["border-image-width"]=!0,t["border-left"]=!0,t["border-left-color"]=!0,t["border-left-style"]=!0,t["border-left-width"]=!0,t["border-radius"]=!0,t["border-right"]=!0,t["border-right-color"]=!0,t["border-right-style"]=!0,t["border-right-width"]=!0,t["border-spacing"]=!0,t["border-style"]=!0,t["border-top"]=!0,t["border-top-color"]=!0,t["border-top-left-radius"]=!0,t["border-top-right-radius"]=!0,t["border-top-style"]=!0,t["border-top-width"]=!0,t["border-width"]=!0,t.bottom=!1,t["box-decoration-break"]=!0,t["box-shadow"]=!0,t["box-sizing"]=!0,t["box-snap"]=!0,t["box-suppress"]=!0,t["break-after"]=!0,t["break-before"]=!0,t["break-inside"]=!0,t["caption-side"]=!1,t.chains=!1,t.clear=!0,t.clip=!1,t["clip-path"]=!1,t["clip-rule"]=!1,t.color=!0,t["color-interpolation-filters"]=!0,t["column-count"]=!1,t["column-fill"]=!1,t["column-gap"]=!1,t["column-rule"]=!1,t["column-rule-color"]=!1,t["column-rule-style"]=!1,t["column-rule-width"]=!1,t["column-span"]=!1,t["column-width"]=!1,t.columns=!1,t.contain=!1,t.content=!1,t["counter-increment"]=!1,t["counter-reset"]=!1,t["counter-set"]=!1,t.crop=!1,t.cue=!1,t["cue-after"]=!1,t["cue-before"]=!1,t.cursor=!1,t.direction=!1,t.display=!0,t["display-inside"]=!0,t["display-list"]=!0,t["display-outside"]=!0,t["dominant-baseline"]=!1,t.elevation=!1,t["empty-cells"]=!1,t.filter=!1,t.flex=!1,t["flex-basis"]=!1,t["flex-direction"]=!1,t["flex-flow"]=!1,t["flex-grow"]=!1,t["flex-shrink"]=!1,t["flex-wrap"]=!1,t.float=!1,t["float-offset"]=!1,t["flood-color"]=!1,t["flood-opacity"]=!1,t["flow-from"]=!1,t["flow-into"]=!1,t.font=!0,t["font-family"]=!0,t["font-feature-settings"]=!0,t["font-kerning"]=!0,t["font-language-override"]=!0,t["font-size"]=!0,t["font-size-adjust"]=!0,t["font-stretch"]=!0,t["font-style"]=!0,t["font-synthesis"]=!0,t["font-variant"]=!0,t["font-variant-alternates"]=!0,t["font-variant-caps"]=!0,t["font-variant-east-asian"]=!0,t["font-variant-ligatures"]=!0,t["font-variant-numeric"]=!0,t["font-variant-position"]=!0,t["font-weight"]=!0,t.grid=!1,t["grid-area"]=!1,t["grid-auto-columns"]=!1,t["grid-auto-flow"]=!1,t["grid-auto-rows"]=!1,t["grid-column"]=!1,t["grid-column-end"]=!1,t["grid-column-start"]=!1,t["grid-row"]=!1,t["grid-row-end"]=!1,t["grid-row-start"]=!1,t["grid-template"]=!1,t["grid-template-areas"]=!1,t["grid-template-columns"]=!1,t["grid-template-rows"]=!1,t["hanging-punctuation"]=!1,t.height=!0,t.hyphens=!1,t.icon=!1,t["image-orientation"]=!1,t["image-resolution"]=!1,t["ime-mode"]=!1,t["initial-letters"]=!1,t["inline-box-align"]=!1,t["justify-content"]=!1,t["justify-items"]=!1,t["justify-self"]=!1,t.left=!1,t["letter-spacing"]=!0,t["lighting-color"]=!0,t["line-box-contain"]=!1,t["line-break"]=!1,t["line-grid"]=!1,t["line-height"]=!1,t["line-snap"]=!1,t["line-stacking"]=!1,t["line-stacking-ruby"]=!1,t["line-stacking-shift"]=!1,t["line-stacking-strategy"]=!1,t["list-style"]=!0,t["list-style-image"]=!0,t["list-style-position"]=!0,t["list-style-type"]=!0,t.margin=!0,t["margin-bottom"]=!0,t["margin-left"]=!0,t["margin-right"]=!0,t["margin-top"]=!0,t["marker-offset"]=!1,t["marker-side"]=!1,t.marks=!1,t.mask=!1,t["mask-box"]=!1,t["mask-box-outset"]=!1,t["mask-box-repeat"]=!1,t["mask-box-slice"]=!1,t["mask-box-source"]=!1,t["mask-box-width"]=!1,t["mask-clip"]=!1,t["mask-image"]=!1,t["mask-origin"]=!1,t["mask-position"]=!1,t["mask-repeat"]=!1,t["mask-size"]=!1,t["mask-source-type"]=!1,t["mask-type"]=!1,t["max-height"]=!0,t["max-lines"]=!1,t["max-width"]=!0,t["min-height"]=!0,t["min-width"]=!0,t["move-to"]=!1,t["nav-down"]=!1,t["nav-index"]=!1,t["nav-left"]=!1,t["nav-right"]=!1,t["nav-up"]=!1,t["object-fit"]=!1,t["object-position"]=!1,t.opacity=!1,t.order=!1,t.orphans=!1,t.outline=!1,t["outline-color"]=!1,t["outline-offset"]=!1,t["outline-style"]=!1,t["outline-width"]=!1,t.overflow=!1,t["overflow-wrap"]=!1,t["overflow-x"]=!1,t["overflow-y"]=!1,t.padding=!0,t["padding-bottom"]=!0,t["padding-left"]=!0,t["padding-right"]=!0,t["padding-top"]=!0,t.page=!1,t["page-break-after"]=!1,t["page-break-before"]=!1,t["page-break-inside"]=!1,t["page-policy"]=!1,t.pause=!1,t["pause-after"]=!1,t["pause-before"]=!1,t.perspective=!1,t["perspective-origin"]=!1,t.pitch=!1,t["pitch-range"]=!1,t["play-during"]=!1,t.position=!1,t["presentation-level"]=!1,t.quotes=!1,t["region-fragment"]=!1,t.resize=!1,t.rest=!1,t["rest-after"]=!1,t["rest-before"]=!1,t.richness=!1,t.right=!1,t.rotation=!1,t["rotation-point"]=!1,t["ruby-align"]=!1,t["ruby-merge"]=!1,t["ruby-position"]=!1,t["shape-image-threshold"]=!1,t["shape-outside"]=!1,t["shape-margin"]=!1,t.size=!1,t.speak=!1,t["speak-as"]=!1,t["speak-header"]=!1,t["speak-numeral"]=!1,t["speak-punctuation"]=!1,t["speech-rate"]=!1,t.stress=!1,t["string-set"]=!1,t["tab-size"]=!1,t["table-layout"]=!1,t["text-align"]=!0,t["text-align-last"]=!0,t["text-combine-upright"]=!0,t["text-decoration"]=!0,t["text-decoration-color"]=!0,t["text-decoration-line"]=!0,t["text-decoration-skip"]=!0,t["text-decoration-style"]=!0,t["text-emphasis"]=!0,t["text-emphasis-color"]=!0,t["text-emphasis-position"]=!0,t["text-emphasis-style"]=!0,t["text-height"]=!0,t["text-indent"]=!0,t["text-justify"]=!0,t["text-orientation"]=!0,t["text-overflow"]=!0,t["text-shadow"]=!0,t["text-space-collapse"]=!0,t["text-transform"]=!0,t["text-underline-position"]=!0,t["text-wrap"]=!0,t.top=!1,t.transform=!1,t["transform-origin"]=!1,t["transform-style"]=!1,t.transition=!1,t["transition-delay"]=!1,t["transition-duration"]=!1,t["transition-property"]=!1,t["transition-timing-function"]=!1,t["unicode-bidi"]=!1,t["vertical-align"]=!1,t.visibility=!1,t["voice-balance"]=!1,t["voice-duration"]=!1,t["voice-family"]=!1,t["voice-pitch"]=!1,t["voice-range"]=!1,t["voice-rate"]=!1,t["voice-stress"]=!1,t["voice-volume"]=!1,t.volume=!1,t["white-space"]=!1,t.widows=!1,t.width=!0,t["will-change"]=!1,t["word-break"]=!0,t["word-spacing"]=!0,t["word-wrap"]=!0,t["wrap-flow"]=!1,t["wrap-through"]=!1,t["writing-mode"]=!1,t["z-index"]=!1,t}function n(t,e,r){}function i(t,e,r){}e.whiteList=r(),e.getDefaultWhiteList=r,e.onAttr=n,e.onIgnoreAttr=i},386:function(t,e,r){function n(t){return void 0===t||null===t}function i(t){var e={};for(var r in t)e[r]=t[r];return e}function o(t){t=i(t||{}),t.whiteList=t.whiteList||a.whiteList,t.onAttr=t.onAttr||a.onAttr,t.onIgnoreAttr=t.onIgnoreAttr||a.onIgnoreAttr,this.options=t}var a=r(385),s=r(387);r(388);o.prototype.process=function(t){if(t=t||"",t=t.toString(),!t)return"";var e=this,r=e.options,i=r.whiteList,o=r.onAttr,a=r.onIgnoreAttr,l=s(t,function(t,e,r,s,l){var c=i[r],u=!1;c===!0?u=c:"function"==typeof c?u=c(s):c instanceof RegExp&&(u=c.test(s)),u!==!0&&(u=!1);var f={position:e,sourcePosition:t,source:l,isWhite:u};if(u){var g=o(r,s,f);return n(g)?r+":"+s:g}var g=a(r,s,f);if(!n(g))return g});return l},t.exports=o},387:function(t,e,r){function n(t,e){function r(){if(!o){var r=i.trim(t.slice(a,s)),n=r.indexOf(":");if(n!==-1){var c=i.trim(r.slice(0,n)),u=i.trim(r.slice(n+1));if(c){var f=e(a,l.length,c,u,r);f&&(l+=f+"; ")}}}a=s+1}t=i.trimRight(t),";"!==t[t.length-1]&&(t+=";");for(var n=t.length,o=!1,a=0,s=0,l="";s<n;s++){var c=t[s];if("/"===c&&"*"===t[s+1]){var u=t.indexOf("*/",s+2);if(u===-1)break;s=u+1,a=s+1,o=!1}else"("===c?o=!0:")"===c?o=!1:";"===c?o||r():"\n"===c&&r()}return i.trim(l)}var i=r(388);t.exports=n},388:function(t,e){t.exports={indexOf:function(t,e){var r,n;if(Array.prototype.indexOf)return t.indexOf(e);for(r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1},forEach:function(t,e,r){var n,i;if(Array.prototype.forEach)return t.forEach(e,r);for(n=0,i=t.length;n<i;n++)e.call(r,t[n],n,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(t){return String.prototype.trimRight?t.trimRight():t.replace(/(\s*$)/g,"")}}},389:function(t,e){t.exports={indexOf:function(t,e){var r,n;if(Array.prototype.indexOf)return t.indexOf(e);for(r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1},forEach:function(t,e,r){var n,i;if(Array.prototype.forEach)return t.forEach(e,r);for(n=0,i=t.length;n<i;n++)e.call(r,t[n],n,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")}}},390:function(t,e,r){function n(t){var e=t.indexOf(" ");if(e===-1)var r=t.slice(1,-1);else var r=t.slice(1,e+1);return r=f.trim(r).toLowerCase(),"/"===r.slice(0,1)&&(r=r.slice(1)),"/"===r.slice(-1)&&(r=r.slice(0,-1)),r}function i(t){return"</"===t.slice(0,2)}function o(t,e,r){"user strict";var o="",a=0,s=!1,l=!1,c=0,u=t.length,f="",g="";for(c=0;c<u;c++){var p=t.charAt(c);if(s===!1){if("<"===p){s=c;continue}}else if(l===!1){if("<"===p){o+=r(t.slice(a,c)),s=c,a=c;continue}if(">"===p){o+=r(t.slice(a,s)),f=t.slice(s,c+1),g=n(f),o+=e(s,o.length,g,f,i(f)),a=c+1,s=!1;continue}if(('"'===p||"'"===p)&&"="===t.charAt(c-1)){l=p;continue}}else if(p===l){l=!1;continue}}return a<t.length&&(o+=r(t.substr(a))),o}function a(t,e){"user strict";function r(t,r){if(t=f.trim(t),t=t.replace(g,"").toLowerCase(),!(t.length<1)){var n=e(t,r||"");n&&i.push(n)}}for(var n=0,i=[],o=!1,a=t.length,c=0;c<a;c++){var p,d,m=t.charAt(c);if(o!==!1||"="!==m)if(o===!1||c!==n||'"'!==m&&"'"!==m||"="!==t.charAt(c-1))if(" "!==m);else{if(o===!1){if(d=s(t,c),d===-1){p=f.trim(t.slice(n,c)),r(p),o=!1,n=c+1;continue}c=d-1;continue}if(d=l(t,c-1),d===-1){p=f.trim(t.slice(n,c)),p=u(p),r(o,p),o=!1,n=c+1;continue}}else{if(d=t.indexOf(m,c+1),d===-1)break;p=f.trim(t.slice(n+1,d)),r(o,p),o=!1,c=d,n=c+1}else o=t.slice(n,c),n=c+1}return n<t.length&&(o===!1?r(t.slice(n)):r(o,u(f.trim(t.slice(n))))),f.trim(i.join(" "))}function s(t,e){for(;e<t.length;e++){var r=t[e];if(" "!==r)return"="===r?e:-1}}function l(t,e){for(;e>0;e--){var r=t[e];if(" "!==r)return"="===r?e:-1}}function c(t){return'"'===t[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1]}function u(t){return c(t)?t.substr(1,t.length-2):t}var f=r(389),g=/[^a-zA-Z0-9_:\.\-]/gim;e.parseTag=o,e.parseAttr=a},391:function(t,e,r){function n(t){return void 0===t||null===t}function i(t){var e=t.indexOf(" ");if(e===-1)return{html:"",closing:"/"===t[t.length-2]};t=g.trim(t.slice(e+1,-1));var r="/"===t[t.length-1];return r&&(t=g.trim(t.slice(0,-1))),{html:t,closing:r}}function o(t){var e={};for(var r in t)e[r]=t[r];return e}function a(t){t=o(t||{}),t.stripIgnoreTag&&(t.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),t.onIgnoreTag=l.onIgnoreTagStripAll),t.whiteList=t.whiteList||l.whiteList,t.onTag=t.onTag||l.onTag,t.onTagAttr=t.onTagAttr||l.onTagAttr,t.onIgnoreTag=t.onIgnoreTag||l.onIgnoreTag,t.onIgnoreTagAttr=t.onIgnoreTagAttr||l.onIgnoreTagAttr,t.safeAttrValue=t.safeAttrValue||l.safeAttrValue,t.escapeHtml=t.escapeHtml||l.escapeHtml,this.options=t,t.css===!1?this.cssFilter=!1:(t.css=t.css||{},this.cssFilter=new s(t.css))}var s=r(384).FilterCSS,l=r(383),c=r(390),u=c.parseTag,f=c.parseAttr,g=r(389);a.prototype.process=function(t){if(t=t||"",t=t.toString(),!t)return"";var e=this,r=e.options,o=r.whiteList,a=r.onTag,s=r.onIgnoreTag,c=r.onTagAttr,p=r.onIgnoreTagAttr,d=r.safeAttrValue,m=r.escapeHtml,h=e.cssFilter;r.stripBlankChar&&(t=l.stripBlankChar(t)),r.allowCommentTag||(t=l.stripCommentTag(t));var b=!1;if(r.stripIgnoreTagBody){var b=l.StripTagBody(r.stripIgnoreTagBody,s);s=b.onIgnoreTag}var v=u(t,function(t,e,r,l,u){var b={sourcePosition:t,position:e,isClosing:u,isWhite:r in o},v=a(r,l,b);if(!n(v))return v;if(b.isWhite){if(b.isClosing)return"</"+r+">";var y=i(l),w=o[r],x=f(y.html,function(t,e){var i=g.indexOf(w,t)!==-1,o=c(r,t,e,i);if(!n(o))return o;if(i)return e=d(r,t,e,h),e?t+'="'+e+'"':t;var o=p(r,t,e,i);return n(o)?void 0:o}),l="<"+r;return x&&(l+=" "+x),y.closing&&(l+=" /"),l+=">"}var v=s(r,l,b);return n(v)?m(l):v},m);return b&&(v=b.remove(v)),v},t.exports=a},392:function(t,e,r){var n=r(393);"string"==typeof n&&(n=[[t.id,n,""]]);var i,o={};o.transform=i;r(282)(n,o);n.locals&&(t.exports=n.locals)},393:function(t,e,r){e=t.exports=r(281)(void 0),e.push([t.id,".message{width:300px;margin:20px auto;overflow:hidden;font-family:Microsoft Yahei}.message h4{font-weight:400;margin:20px auto 10px}.message .button{width:100%;margin-top:20px}.message input{height:40px;font-size:14px;//:20px;text-align:left}.message input,.message textarea{padding:10px;border:none;width:100%;background:#fff;border:1px solid #1abc9c;box-shadow:none}.message textarea{height:150px;resize:none;outline:none}.message button{width:100%;height:40px;outline:none;font-family:Mirosoft Yahei;border:none;background:#1abc9c;color:#fff;cursor:pointer}",""])}});