"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[8527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,u=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},39481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u5982\u4f55\u5bf9\u63a5SQLE"},o=void 0,i={unversionedId:"dev-manual/OpenAPI/dmstoken",id:"version-v3/dev-manual/OpenAPI/dmstoken",title:"\u5982\u4f55\u5bf9\u63a5SQLE",description:"\u5bf9\u63a5 SQLE \u662f SQLE \u793e\u533a\u4e2d\u5e38\u89c1\u7684\u9700\u6c42\u4e4b\u4e00\u3002\u4e3a\u4e86\u5e2e\u52a9\u5f00\u53d1\u8005\u987a\u5229\u5b8c\u6210\u5e94\u7528\u4e0e SQLE \u7684\u5bf9\u63a5\uff0c\u672c\u6587\u6863\u63d0\u4f9b\u4e86\u5bf9\u63a5 SQLE \u7684\u57fa\u672c\u601d\u8def\uff0c\u5e76\u8bb0\u5f55\u4e86\u4e00\u4e9b\u5e38\u89c1\u95ee\u9898\u7684\u89e3\u7b54\u3002",source:"@site/versioned_docs/version-v3/dev-manual/OpenAPI/dmstoken.md",sourceDirName:"dev-manual/OpenAPI",slug:"/dev-manual/OpenAPI/dmstoken",permalink:"/sqle-docs/docs/v3/dev-manual/OpenAPI/dmstoken",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/versioned_docs/version-v3/dev-manual/OpenAPI/dmstoken.md",tags:[],version:"v3",frontMatter:{title:"\u5982\u4f55\u5bf9\u63a5SQLE"},sidebar:"tutorialSidebar",previous:{title:"Eclipse\u5ba1\u6838\u63d2\u4ef6",permalink:"/sqle-docs/docs/v3/dev-manual/auditplugins/eclipse"},next:{title:"\u652f\u6301\u54ea\u4e9b\u6570\u636e\u5e93",permalink:"/sqle-docs/docs/v3/FAQ/whichdatabase"}},p={},s=[{value:"\u8c03\u7528\u767b\u5f55SQLE\u7684\u63a5\u53e3\u83b7\u53d6dms-token",id:"\u8c03\u7528\u767b\u5f55sqle\u7684\u63a5\u53e3\u83b7\u53d6dms-token",level:2},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42",level:3},{value:"\u8bf7\u6c42\u4f53/\u8d1f\u8f7d\u793a\u4f8b\uff1a",id:"\u8bf7\u6c42\u4f53\u8d1f\u8f7d\u793a\u4f8b",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94",level:3},{value:"\u4f7f\u7528dms-token\u8c03\u7528SQLE\u7684\u63a5\u53e3",id:"\u4f7f\u7528dms-token\u8c03\u7528sqle\u7684\u63a5\u53e3",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u5bf9\u63a5SQLE\u7684\u529f\u80fd",id:"\u5bf9\u63a5sqle\u7684\u529f\u80fd",level:2},{value:"\u786e\u8ba4\u63a5\u53e3\u8c03\u7528\u6d41\u7a0b",id:"\u786e\u8ba4\u63a5\u53e3\u8c03\u7528\u6d41\u7a0b",level:3},{value:"\u786e\u8ba4\u63a5\u53e3\u53c2\u6570",id:"\u786e\u8ba4\u63a5\u53e3\u53c2\u6570",level:3}],d={toc:s};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5bf9\u63a5 SQLE \u662f SQLE \u793e\u533a\u4e2d\u5e38\u89c1\u7684\u9700\u6c42\u4e4b\u4e00\u3002\u4e3a\u4e86\u5e2e\u52a9\u5f00\u53d1\u8005\u987a\u5229\u5b8c\u6210\u5e94\u7528\u4e0e SQLE \u7684\u5bf9\u63a5\uff0c\u672c\u6587\u6863\u63d0\u4f9b\u4e86\u5bf9\u63a5 SQLE \u7684\u57fa\u672c\u601d\u8def\uff0c\u5e76\u8bb0\u5f55\u4e86\u4e00\u4e9b\u5e38\u89c1\u95ee\u9898\u7684\u89e3\u7b54\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u6863\u4e5f\u4f1a\u6301\u7eed\u66f4\u65b0\u3002\u5982\u679c\u60a8\u9700\u8981\u8fdb\u4e00\u6b65\u7684\u652f\u6301\uff0c\u8bf7\u52a0\u5165 SQLE \u793e\u533a\u670d\u52a1\u7fa4\uff0c\u63d0\u51fa\u60a8\u7684\u9700\u6c42\uff0c\u6211\u4eec\u5c06\u7aed\u8bda\u4e3a\u60a8\u670d\u52a1\u3002\ud83d\udc49",(0,r.kt)("a",{parentName:"p",href:"/sqle-docs/docs/v3/support/community-support"},"\u793e\u533a\u652f\u6301")),(0,r.kt)("h2",{id:"\u8c03\u7528\u767b\u5f55sqle\u7684\u63a5\u53e3\u83b7\u53d6dms-token"},"\u8c03\u7528\u767b\u5f55SQLE\u7684\u63a5\u53e3\u83b7\u53d6dms-token"),(0,r.kt)("p",null,"\u5728SQLE\u66f4\u65b0\u52303.0\u4e4b\u540e\uff0cDMS\u63a5\u7ba1\u4e86SQLE\u7684\u90e8\u5206\u529f\u80fd\uff0c\u524d\u7aef\u901a\u8fc7\u8bbf\u95eeDMS\u6765\u8bbf\u95eeSQLE\uff0c\u7528\u4e8e\u9274\u6743\u7684token\u5b58\u653e\u5728Cookie\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"dms-token"),"\u4e2d\uff0c\u82e5\u8981\u83b7\u53d6\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"dms-token"),"\uff0c\u9700\u8981\u5148\u8c03\u7528\u767b\u5f55SQLE\u7684\u63a5\u53e3\uff0c\u4f7f\u7528SQLE\u4e2d\u5b58\u5728\u7684\u8d26\u53f7\u53ca\u5176\u5bc6\u7801\u767b\u5f55SQLE\uff0c\u4ece\u54cd\u5e94\u4f53\u6216\u54cd\u5e94\u7684Cookie\u4e2d\u83b7\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"dms-token"),"\u3002"),(0,r.kt)("h3",{id:"\u8bf7\u6c42"},"\u8bf7\u6c42"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6c42URL: http://{ip:port}/v1/dms/sessions"),(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u65b9\u6cd5: POST"),(0,r.kt)("li",{parentName:"ul"},"Content-Type: application/json")),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u4f53\u8d1f\u8f7d\u793a\u4f8b"},"\u8bf7\u6c42\u4f53/\u8d1f\u8f7d\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "session":{\n        "username":"\u7528\u6237\u540d\u79f0",\n        "password":"\u7528\u6237\u5bc6\u7801"\n    }\n}\n')),(0,r.kt)("h3",{id:"\u54cd\u5e94"},"\u54cd\u5e94"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728Cookie\u4e2d\u83b7\u53d6\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"dms-token"),"\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Domain"),(0,r.kt)("th",{parentName:"tr",align:null},"Path"),(0,r.kt)("th",{parentName:"tr",align:null},"Expires"),(0,r.kt)("th",{parentName:"tr",align:null},"MaxAge"),(0,r.kt)("th",{parentName:"tr",align:null},"HttpOnly"),(0,r.kt)("th",{parentName:"tr",align:null},"Secure"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dms-token"),(0,r.kt)("td",{parentName:"tr",align:null},"{dms-token\u503c}"),(0,r.kt)("td",{parentName:"tr",align:null},"{ip\u5730\u5740}"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"{dms-token\u8fc7\u671f\u65f6\u95f4}"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"igcookie",src:n(5055).Z,width:"2117",height:"1519"})),(0,r.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u5728\u54cd\u5e94\u4f53\u4e2d\u83b7\u53d6\u5230dms-token\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "data": {\n        "token": "{dms-token\u503c}"\n    },\n    "code": 0,\n    "message": ""\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"igpreview",src:n(13966).Z,width:"2014",height:"1521"})),(0,r.kt)("h2",{id:"\u4f7f\u7528dms-token\u8c03\u7528sqle\u7684\u63a5\u53e3"},"\u4f7f\u7528dms-token\u8c03\u7528SQLE\u7684\u63a5\u53e3"),(0,r.kt)("p",null,"\u5728\u63a5\u4e0b\u6765\u8bf7\u6c42\u7684Cookie\u4e2d\u5e26\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"dms-token"),"\u3002SQLE\u4f1a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"dms-token"),"\u8fdb\u884c\u9274\u6743\u3002"),(0,r.kt)("p",null,"\u4ee5\u8fdb\u884cSQL\u5ba1\u6838\u7684\u63a5\u53e3\u4e3a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Method: POST \nURL: http://dms_ip:dms_port/sqle/v1/projects/default/sql_audit_records\nContent-Type: multipart/form-data; \nCookie: dms-token={dms-token\u503c}\nPayload:\n  instance_name: MySQL\n  instance_schema: test_schema\n  sqls: show tables;\n")),(0,r.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("p",null,"SQLE\u7684\u5927\u90e8\u5206\u63a5\u53e3\u90fd\u4f1a\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"dms-token"),"\u8fdb\u884c\u6821\u9a8c\uff0c\u82e5\u672a\u643a\u5e26",(0,r.kt)("inlineCode",{parentName:"p"},"dms-token"),"\u6216\u643a\u5e26\u9519\u8bef\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"dms-token"),"\uff0c\u8bf7\u6c42\u90fd\u4f1a\u88ab\u62e6\u622a\uff0c\u4ece\u800c\u5bfc\u81f4\u5931\u8d25\u3002\n\u8bf7\u6c42\u672a\u643a\u5e26",(0,r.kt)("inlineCode",{parentName:"p"},"dms-token"),"\u65f6\uff0c\u54cd\u5e94\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "message": "can not find dms-token"\n}\n')),(0,r.kt)("p",null,"\u8bf7\u6c42\u643a\u5e26\u9519\u8bef\u7684dms-token\u65f6\uff0c\u54cd\u5e94\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "message": "invalid or expired jwt"\n}\n')),(0,r.kt)("h2",{id:"\u5bf9\u63a5sqle\u7684\u529f\u80fd"},"\u5bf9\u63a5SQLE\u7684\u529f\u80fd"),(0,r.kt)("h3",{id:"\u786e\u8ba4\u63a5\u53e3\u8c03\u7528\u6d41\u7a0b"},"\u786e\u8ba4\u63a5\u53e3\u8c03\u7528\u6d41\u7a0b"),(0,r.kt)("p",null,"\u82e5\u60a8\u9700\u8981\u5bf9\u63a5\u67d0\u4e2aSQLE\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u6253\u5f00SQLE\u7684\u524d\u7aef\u754c\u9762\uff0c\u70b9\u51fbF12\u6253\u5f00\u5f00\u53d1\u4eba\u5458\u5de5\u5177\uff0c\u5bf9\u60a8\u60f3\u8981\u5bf9\u63a5\u7684\u529f\u80fd\u8fdb\u884c\u64cd\u4f5c\uff0c\u7136\u540e\u53c2\u8003\u524d\u7aef\u754c\u9762\u7684\u63a5\u53e3\u8c03\u7528\u6d41\u3002\u5373\u53ef\u786e\u8ba4\u63a5\u53e3\u8c03\u7528\u7684\u6d41\u7a0b\u3002"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("a",{parentName:"p",href:"#%E4%BD%BF%E7%94%A8dms-token%E8%B0%83%E7%94%A8sqle%E7%9A%84%E6%8E%A5%E5%8F%A3"},"\u4f7f\u7528dms-token\u8c03\u7528SQLE\u7684\u63a5\u53e3"),"\u4e2d\uff0c\u793a\u4f8b\u7684SQL\u5ba1\u6838\u7684\u63a5\u53e3\u662f\u521b\u5efaSQL\u5ba1\u6838\u7684http\u8c03\u7528\u6d41\u7a0b\u7684\u5176\u4e2d\u4e00\u6b65\uff0c\u8981\u5b8c\u6574\u7684\u5bf9\u63a5SQL\u5ba1\u6838\u529f\u80fd\uff0c\u53ef\u4ee5\u53c2\u8003\u524d\u7aef\u7684\u8c03\u7528\n",(0,r.kt)("img",{alt:"usepreview",src:n(10871).Z,width:"1280",height:"667"})),(0,r.kt)("h3",{id:"\u786e\u8ba4\u63a5\u53e3\u53c2\u6570"},"\u786e\u8ba4\u63a5\u53e3\u53c2\u6570"),(0,r.kt)("p",null,"\u63a5\u53e3\u53ef\u4ee5\u53c2\u8003\u5728github\u4e0a\u7684\u5f00\u6e90\u9879\u76ee\u7684swagger\u63a5\u53e3\u6587\u6863\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"SQLE\u7684Swagger\u6587\u6863\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/actiontech/sqle/tree/main/sqle/docs"},"https://github.com/actiontech/sqle/tree/main/sqle/docs")),(0,r.kt)("li",{parentName:"ol"},"DMS\u7684Swagger\u6587\u6863\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/actiontech/dms/tree/main/api"},"https://github.com/actiontech/dms/tree/main/api"))),(0,r.kt)("p",null,"\u559c\u6b22\u7684\u8bdd\u53ef\u4ee5\u7ed9\u6211\u4eec\u4e00\u4e2aStar\u5462\uff01(\u25cf'\u25e1'\u25cf)"))}m.isMDXComponent=!0},5055:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/igcookie-3de138137cc35af02c830fa0277a00d0.png"},13966:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/igpreview-89dd21637e6bf79a7b79cd895f29f8ad.png"},10871:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/usepreview-7f1853ee579cc40d8775075eace01832.png"}}]);