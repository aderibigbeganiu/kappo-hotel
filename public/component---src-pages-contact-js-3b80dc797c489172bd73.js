(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2SVd":function(e,t,a){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"3Z9Z":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),s=a.n(o),i=a("q1tI"),c=a.n(i),l=a("vUet"),u=["xl","lg","md","sm","xs"],m=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.noGutters,m=e.as,f=void 0===m?"div":m,d=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),p=Object(l.a)(a,"row"),h=p+"-cols",v=[];return u.forEach((function(e){var t,a=d[e];delete d[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&v.push(""+h+n+"-"+t)})),c.a.createElement(f,Object(n.a)({ref:t},d,{className:s.a.apply(void 0,[o,p,i&&"no-gutters"].concat(v))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.a=m},"3dmn":function(e,t,a){e.exports={container:"layout-module--container--1bx4w",cover:"layout-module--cover--2uZSn"}},"5oMp":function(e,t,a){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"8oxB":function(e,t){var a,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(e){if(a===setTimeout)return setTimeout(e,0);if((a===o||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:o}catch(e){a=o}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var c,l=[],u=!1,m=-1;function f(){u&&c&&(u=!1,c.length?l=c.concat(l):m=-1,l.length&&d())}function d(){if(!u){var e=i(f);u=!0;for(var t=l.length;t;){for(c=l,l=[];++m<t;)c&&c[m].run();m=-1,t=l.length}c=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];l.push(new p(e,t)),1!==l.length||u||i(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"9rSQ":function(e,t,a){"use strict";var n=a("xTJ+");function r(){this.handlers=[]}r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r},CgaS:function(e,t,a){"use strict";var n=a("xTJ+"),r=a("MLWZ"),o=a("9rSQ"),s=a("UnBK"),i=a("SntB");function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],a=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)a=a.then(t.shift(),t.shift());return a},c.prototype.getUri=function(e){return e=i(this.defaults,e),r(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,a){return this.request(i(a||{},{method:e,url:t,data:(a||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,a,n){return this.request(i(n||{},{method:e,url:t,data:a}))}})),e.exports=c},"Cuy+":function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.r(t),a.d(t,"contact",(function(){return f}));var r=a("dI71"),o=a("q1tI"),s=a.n(o),i=a("3Z9Z"),c=a("JI6e"),l=a("JLE3"),u=a("vDqi"),m=a.n(u),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={name:"",email:"",message:"",isLoading:!1,response:""},a.handleChange=a.handleChange.bind(n(a)),a.handleSubmit=a.handleSubmit.bind(n(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.handleChange=function(e){var t;this.setState(((t={})[e.target.name]=e.target.value,t))},a.handleSubmit=function(e){var t=this,a=this.state,n=a.name,r=a.email,o=a.message;this.setState({isLoading:!0}),m.a.post("https://backend.kappohotel.com/api/contact/",{name:n,email:r,message:o}).then((function(e){t.setState({isLoading:!1,response:"Message was sent successfuly"})})).catch((function(e){t.setState({isLoading:!1,response:"Message was not sent"})})),e.preventDefault()},a.render=function(){var e=this.state,t=e.name,a=e.email,n=e.message,r=e.isLoading,o=e.response;return s.a.createElement(l.a,{name:"Contact"},s.a.createElement(i.a,{className:"p-2"},s.a.createElement(c.a,{md:6},!0===r&&"Sending message...",o?s.a.createElement("div",{className:"text-center"},o):s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"exampleFormControlInput1"},"Name:"),s.a.createElement("input",{name:"name",value:t,onChange:this.handleChange,type:"text",className:"form-control",id:"exampleFormControlInput1",required:!0})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"exampleFormControlInput1"},"Email address:"),s.a.createElement("input",{name:"email",value:a,onChange:this.handleChange,type:"email",className:"form-control",id:"exampleFormControlInput2",placeholder:"name@example.com",required:!0})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"exampleFormControlTextarea1"},"Message:"),s.a.createElement("textarea",{name:"message",value:n,onChange:this.handleChange,className:"form-control",id:"exampleFormControlTextarea1",rows:"3",required:!0})),s.a.createElement("div",{className:"form-group"},s.a.createElement("button",{className:"btn btn-primary form-control",name:"submit"},"Submit")))),s.a.createElement(c.a,{md:6,className:"pt-5"},s.a.createElement("p",null,"3 Moshalashi Close, Beside Anifowose Upholstery, off Onilude street, Sango Ile-dudu, Badagry, Lagos"),s.a.createElement("p",null,s.a.createElement("a",{className:"text-dark",href:"mailto:info@kappohotel.com",target:"blank",style:{textDecoration:"none"}},"info@kappohotel.com")),s.a.createElement("p",null,s.a.createElement("a",{className:"text-dark",href:"tel:+2349040075259",target:"blank",style:{textDecoration:"none"}},"09040075259")),s.a.createElement("p",null,s.a.createElement("a",{className:"text-dark",href:"tel:+2349029925550",target:"blank",style:{textDecoration:"none"}},"09029925550")))))},t}(o.Component);t.default=f},D3jC:function(e,t,a){e.exports={footer:"footerStyle-module--footer--3LYsb",round:"footerStyle-module--round--1GQ6i"}},DfZB:function(e,t,a){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},HSsa:function(e,t,a){"use strict";e.exports=function(e,t){return function(){for(var a=new Array(arguments.length),n=0;n<a.length;n++)a[n]=arguments[n];return e.apply(t,a)}}},JEQr:function(e,t,a){"use strict";(function(t){var n=a("xTJ+"),r=a("yK9s"),o={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(i=a("tQ2B")),i),transformRequest:[function(e,t){return r(t,"Accept"),r(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(o)})),e.exports=c}).call(this,a("8oxB"))},JI6e:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),s=a.n(o),i=a("q1tI"),c=a.n(i),l=a("vUet"),u=["xl","lg","md","sm","xs"],m=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.as,m=void 0===i?"div":i,f=Object(r.a)(e,["bsPrefix","className","as"]),d=Object(l.a)(a,"col"),p=[],h=[];return u.forEach((function(e){var t,a,n,r=f[e];if(delete f[e],"object"==typeof r&&null!=r){var o=r.span;t=void 0===o||o,a=r.offset,n=r.order}else t=r;var s="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+d+s:""+d+s+"-"+t),null!=n&&h.push("order"+s+"-"+n),null!=a&&h.push("offset"+s+"-"+a)})),p.length||p.push(d),c.a.createElement(m,Object(n.a)({},f,{ref:t,className:s.a.apply(void 0,[o].concat(p,h))}))}));m.displayName="Col",t.a=m},JLE3:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NFDa"),s=a("S6jc"),i=(a("q4sD"),a("3dmn")),c=a.n(i),l=a("xXt2"),u=a("qhky"),m=a("+7A0"),f=a("Wbzz");t.a=function(e){var t=Object(f.c)("2052298874");return r.a.createElement("div",{className:c.a.container},r.a.createElement(m.GatsbySeo,{title:t.site.siteMetadata.title,description:t.site.siteMetadata.description,canonical:t.site.siteMetadata.siteUrl,openGraph:{url:t.site.siteMetadata.siteUrl,title:t.site.siteMetadata.title,description:t.site.siteMetadata.description,images:[{url:"https://kappohotel.com/logo.jpg"}],site_name:t.site.siteMetadata.siteUrl},twitter:{handle:"@kappohotels",site:"@kappohotels",cardType:"summary_large_image"}}),r.a.createElement(u.a,{title:e.name+" • KAPPO HOTELS & SUITES",defer:!1},r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",integrity:"sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==",crossorigin:"anonymous"}),r.a.createElement("script",{src:"https://code.jquery.com/jquery-3.5.1.slim.min.js",integrity:"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",crossorigin:"anonymous"}),r.a.createElement("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js",integrity:"sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx",crossorigin:"anonymous"})),r.a.createElement(l.a,{className:c.a.cover},r.a.createElement(s.a,null)),r.a.createElement("div",{className:"container"},e.children),r.a.createElement(o.a,null))}},LYNF:function(e,t,a){"use strict";var n=a("OH9c");e.exports=function(e,t,a,r,o){var s=new Error(e);return n(s,t,a,r,o)}},Lmem:function(e,t,a){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,a){"use strict";var n=a("xTJ+");function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,a){if(!t)return e;var o;if(a)o=a(t);else if(n.isURLSearchParams(t))o=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))})))})),o=s.join("&")}if(o){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},NFDa:function(e,t,a){"use strict";var n=a("Wbzz"),r=a("q1tI"),o=a.n(r),s=a("D3jC"),i=a.n(s);t.a=function(){return o.a.createElement("footer",{className:i.a.footer},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md text-left"},o.a.createElement("ul",{className:"list-unstyled text-small"},o.a.createElement("li",{className:"m-3 text-white"},o.a.createElement("i",{className:"fas fa-map-marker-alt m-2"}),"3 Moshalashi Close, Beside Anifowose Upholstery, off Onilude street, Sango Ile-dudu, Badagry, Lagos"),o.a.createElement("li",{className:"m-3"},o.a.createElement("a",{className:"text-white",href:"mailto:info@kappohotel.com",target:"blank",style:{textDecoration:"none"}},o.a.createElement("i",{className:"fas fa-envelope m-2"}),"info@kappohotel.com")),o.a.createElement("li",{className:"m-3"},o.a.createElement("p",null,o.a.createElement("a",{className:"text-white",href:"tel:+2349040075259",target:"blank",style:{textDecoration:"none"}},o.a.createElement("i",{className:"fas fa-phone-alt m-2"}),"09040075259")),o.a.createElement("p",null,o.a.createElement("a",{className:"text-white",href:"tel:+2349029925550",target:"blank",style:{textDecoration:"none"}},o.a.createElement("i",{className:"fas fa-phone-alt m-2"}),"09029925550"))))),o.a.createElement("div",{className:"col-12 col-md text-center"},o.a.createElement(n.a,{to:"/"},o.a.createElement("img",{className:"mt-5 mb-3",src:"https://kappohotels.com/wp-content/uploads/2020/05/cropped-hotel-LOGO-scaled-1-192x192.jpg",alt:"logo",width:"100",height:"100"})),o.a.createElement("ul",{className:"list-inline"},o.a.createElement("li",{className:"list-inline-item text-white"},o.a.createElement("span",{className:i.a.round},o.a.createElement("i",{className:"fab fa-twitter",style:{width:"15px"}}))),o.a.createElement("a",{href:"https://m.facebook.com/StandardHotelinTheHeartOfBadagry/",target:"blank",className:"text-white"},o.a.createElement("li",{className:"list-inline-item text-white"},o.a.createElement("span",{className:i.a.round},o.a.createElement("i",{className:"fab fa-facebook-f",style:{width:"15px"}})))),o.a.createElement("li",{className:"list-inline-item text-white"},o.a.createElement("span",{className:i.a.round},o.a.createElement("i",{className:"fab fa-youtube",style:{width:"15px"}}))),o.a.createElement("li",{className:"list-inline-item text-white"},o.a.createElement("span",{className:i.a.round},o.a.createElement("i",{className:"fab fa-linkedin-in",style:{width:"15px"}}))))),o.a.createElement("div",{className:"col-12 col-md"},o.a.createElement("ul",{className:"list-unstyled text-small text-center"},o.a.createElement("li",{className:"m-3"},o.a.createElement(n.a,{className:"text-white",to:"/about",style:{textDecoration:"none"}},"About Us")),o.a.createElement("li",{className:"m-3"},o.a.createElement(n.a,{className:"text-white",to:"/contact",style:{textDecoration:"none"}},"Contact")),o.a.createElement("li",{className:"m-3"},o.a.createElement(n.a,{className:"text-white",to:"/events",style:{textDecoration:"none"}},"Events"))))),o.a.createElement("hr",{className:"text-white d-sm-block d-md-none"}),o.a.createElement("div",{className:"text-center text-small text-secondary mt-3"},o.a.createElement("small",null,"© 2020 BY KAPPO HOTELS & SUITES. ALL RIGHTS RESERVED")))}},OH9c:function(e,t,a){"use strict";e.exports=function(e,t,a,n,r){return e.config=t,a&&(e.code=a),e.request=n,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,a){"use strict";var n=a("xTJ+");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");function r(e){var n=e;return t&&(a.setAttribute("href",n),n=a.href),a.setAttribute("href",n),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname}}return e=r(window.location.href),function(t){var a=n.isString(t)?r(t):t;return a.protocol===e.protocol&&a.host===e.host}}():function(){return!0}},"Rn+g":function(e,t,a){"use strict";var n=a("LYNF");e.exports=function(e,t,a){var r=a.config.validateStatus;a.status&&r&&!r(a.status)?t(n("Request failed with status code "+a.status,a.config,null,a.request,a)):e(a)}},S6jc:function(e,t,a){"use strict";var n=a("Wbzz"),r=a("q1tI"),o=a.n(r),s=a("z30r"),i=a.n(s),c=a("6YiV"),l=a.n(c);t.a=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"d-none d-md-block"},o.a.createElement("nav",{className:"navbar navbar-expand-md m-0 p-0"},o.a.createElement(n.a,{className:"navbar-brand",to:"/"},o.a.createElement("img",{src:l.a,alt:"home",height:"80",width:"100"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav ml-auto"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement(n.a,{className:i.a.navItem,activeClassName:i.a.activeNavItem,to:"/"},"HOME")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(n.a,{className:i.a.navItem,activeClassName:i.a.activeNavItem,to:"../#gallery"},"GALLERY")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(n.a,{className:i.a.navItem,activeClassName:i.a.activeNavItem,to:"/about"},"ABOUT US")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(n.a,{className:i.a.navItem,activeClassName:i.a.activeNavItem,to:"/events"},"EVENTS")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(n.a,{className:i.a.navItem,activeClassName:i.a.activeNavItem,to:"/contact"},"CONTACT")))))),o.a.createElement("nav",{className:"navbar navbar-dark d-sm-block d-md-none"},o.a.createElement(n.a,{className:"navbar-brand",to:"/"},o.a.createElement("img",{src:l.a,alt:"home",height:"50",width:"60"})),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExample01","aria-controls":"navbarsExample01","aria-expanded":"false","aria-label":"Toggle navigation",style:{outline:"none"}},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarsExample01"},o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement(n.a,{className:"nav-link",to:"/"},"HOME")),o.a.createElement("li",{className:"nav-item active"},o.a.createElement(n.a,{className:"nav-link",to:"../#gallery"},"GALLERY")),o.a.createElement("li",{className:"nav-item active"},o.a.createElement(n.a,{className:"nav-link",to:"/about/"},"ABOUT US")),o.a.createElement("li",{className:"nav-item active"},o.a.createElement(n.a,{className:"nav-link",to:"/events"},"EVENTS")),o.a.createElement("li",{className:"nav-item active"},o.a.createElement(n.a,{className:"nav-link",to:"/contact"},"CONTACT US"))))))}},SntB:function(e,t,a){"use strict";var n=a("xTJ+");e.exports=function(e,t){t=t||{};var a={},r=["url","method","data"],o=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function c(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function l(r){n.isUndefined(t[r])?n.isUndefined(e[r])||(a[r]=c(void 0,e[r])):a[r]=c(e[r],t[r])}n.forEach(r,(function(e){n.isUndefined(t[e])||(a[e]=c(void 0,t[e]))})),n.forEach(o,l),n.forEach(s,(function(r){n.isUndefined(t[r])?n.isUndefined(e[r])||(a[r]=c(void 0,e[r])):a[r]=c(void 0,t[r])})),n.forEach(i,(function(n){n in t?a[n]=c(e[n],t[n]):n in e&&(a[n]=c(void 0,e[n]))}));var u=r.concat(o).concat(s).concat(i),m=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return n.forEach(m,l),a}},UnBK:function(e,t,a){"use strict";var n=a("xTJ+"),r=a("xAGQ"),o=a("Lmem"),s=a("JEQr");function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return i(e),e.headers=e.headers||{},e.data=r(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return i(e),t.data=r(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(i(e),t&&t.response&&(t.response.data=r(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},endd:function(e,t,a){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},eqyj:function(e,t,a){"use strict";var n=a("xTJ+");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,a,r,o,s){var i=[];i.push(e+"="+encodeURIComponent(t)),n.isNumber(a)&&i.push("expires="+new Date(a).toGMTString()),n.isString(r)&&i.push("path="+r),n.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},g7np:function(e,t,a){"use strict";var n=a("2SVd"),r=a("5oMp");e.exports=function(e,t){return e&&!n(t)?r(e,t):t}},"jfS+":function(e,t,a){"use strict";var n=a("endd");function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var a=this;e((function(e){a.reason||(a.reason=new n(e),t(a.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r},tQ2B:function(e,t,a){"use strict";var n=a("xTJ+"),r=a("Rn+g"),o=a("eqyj"),s=a("MLWZ"),i=a("g7np"),c=a("w0Vi"),l=a("OTTw"),u=a("LYNF");e.exports=function(e){return new Promise((function(t,a){var m=e.data,f=e.headers;n.isFormData(m)&&delete f["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";f.Authorization="Basic "+btoa(p+":"+h)}var v=i(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),s(v,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};r(t,a,o),d=null}},d.onabort=function(){d&&(a(u("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){a(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),a(u(t,e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var E=(e.withCredentials||l(v))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;E&&(f[e.xsrfHeaderName]=E)}if("setRequestHeader"in d&&n.forEach(f,(function(e,t){void 0===m&&"content-type"===t.toLowerCase()?delete f[t]:d.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(g){if("json"!==e.responseType)throw g}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),a(e),d=null)})),m||(m=null),d.send(m)}))}},vDqi:function(e,t,a){e.exports=a("zuR4")},w0Vi:function(e,t,a){"use strict";var n=a("xTJ+"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,a,o,s={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),a=n.trim(e.substr(o+1)),t){if(s[t]&&r.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([a]):s[t]?s[t]+", "+a:a}})),s):s}},xAGQ:function(e,t,a){"use strict";var n=a("xTJ+");e.exports=function(e,t,a){return n.forEach(a,(function(a){e=a(e,t)})),e}},"xTJ+":function(e,t,a){"use strict";var n=a("HSsa"),r=Object.prototype.toString;function o(e){return"[object Array]"===r.call(e)}function s(e){return void 0===e}function i(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==r.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function l(e){return"[object Function]"===r.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var a=0,n=e.length;a<n;a++)t.call(null,e[a],a,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isPlainObject:c,isUndefined:s,isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:l,isStream:function(e){return i(e)&&l(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function a(a,n){c(t[n])&&c(a)?t[n]=e(t[n],a):c(a)?t[n]=e({},a):o(a)?t[n]=a.slice():t[n]=a}for(var n=0,r=arguments.length;n<r;n++)u(arguments[n],a);return t},extend:function(e,t,a){return u(t,(function(t,r){e[r]=a&&"function"==typeof t?n(t,a):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},yK9s:function(e,t,a){"use strict";var n=a("xTJ+");e.exports=function(e,t){n.forEach(e,(function(a,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=a,delete e[n])}))}},z30r:function(e,t,a){e.exports={navItem:"navStyle-module--nav-item--3rryI",activeNavItem:"navStyle-module--active-nav-item--2Yr3b"}},zuR4:function(e,t,a){"use strict";var n=a("xTJ+"),r=a("HSsa"),o=a("CgaS"),s=a("SntB");function i(e){var t=new o(e),a=r(o.prototype.request,t);return n.extend(a,o.prototype,t),n.extend(a,t),a}var c=i(a("JEQr"));c.Axios=o,c.create=function(e){return i(s(c.defaults,e))},c.Cancel=a("endd"),c.CancelToken=a("jfS+"),c.isCancel=a("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=a("DfZB"),e.exports=c,e.exports.default=c}}]);
//# sourceMappingURL=component---src-pages-contact-js-3b80dc797c489172bd73.js.map