"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[9298],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),i=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=i(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(r),d=n,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?o.createElement(f,c(c({ref:t},s),{},{components:r})):o.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93856:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var o=r(87462),n=(r(67294),r(3905));const a={title:"Docker Compose \u90e8\u7f72"},c="Docker Compose \u90e8\u7f72",l={unversionedId:"deploy-manual/DockerCompose",id:"deploy-manual/DockerCompose",title:"Docker Compose \u90e8\u7f72",description:"\u914d\u7f6e\u6587\u4ef6",source:"@site/docs/deploy-manual/DockerCompose.md",sourceDirName:"deploy-manual",slug:"/deploy-manual/DockerCompose",permalink:"/sqle-docs/docs/deploy-manual/DockerCompose",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/docs/deploy-manual/DockerCompose.md",tags:[],version:"current",frontMatter:{title:"Docker Compose \u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"Docker\u90e8\u7f72",permalink:"/sqle-docs/docs/deploy-manual/Docker"},next:{title:"\u5347\u7ea7\u8bf4\u660e",permalink:"/sqle-docs/docs/deploy-manual/upgrade"}},p={},i=[{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2}],s={toc:i};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"docker-compose-\u90e8\u7f72"},"Docker Compose \u90e8\u7f72"),(0,n.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,n.kt)("p",null,"\u4e0b\u8f7d\u5730\u5740\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/actiontech/sqle/blob/release-3.2310.x/docker-images/sqle/docker-compose.yaml"},"docker-compose.yaml")),(0,n.kt)("p",null,"\u4e0b\u8f7d\u5730\u5740\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/actiontech/sqle/tree/release-3.2311.x/docker-images/sqle/init"},"init")),(0,n.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,n.kt)("p",null,"\u5c06 docker-compose.yaml \u6587\u4ef6\u548cinit \u6587\u4ef6\u5939\u4e0b\u8f7d\u5230\u672c\u5730\u76ee\u5f55\uff0c\u5e76\u8fdb\u5165\u76ee\u5f55\u5185\uff0c\u901a\u8fc7\u73af\u5883\u53d8\u91cfSQLE_IMAGE\u6307\u5b9a\u4e0d\u540c\u7248\u672c\u7684 SQLE \u955c\u50cf\uff0c\u9ed8\u8ba4\u662f latest"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SQLE_IMAGE=actiontech/sqle-ce:latest docker-compose up -d\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u81ea2024\u5e7410\u6708\u8d77\uff0c\u5e73\u53f0\u4e3adocker-compose\u96c6\u6210\u4e86CloudBeaver\u90e8\u7f72\u529f\u80fd\u3002\u73b0\u5728\uff0c\u5f53\u7528\u6237\u9009\u62e9\u4f7f\u7528docker-compose\u8fdb\u884c\u90e8\u7f72\u65f6\uff0c\u7cfb\u7edf\u5c06\u81ea\u52a8\u5904\u7406CloudBeaver\u7684\u90e8\u7f72\u5de5\u4f5c\uff0c\u7528\u6237\u65e0\u9700\u8fdb\u884c\u4efb\u4f55\u989d\u5916\u7684\u624b\u52a8\u64cd\u4f5c\u3002")))}m.isMDXComponent=!0}}]);