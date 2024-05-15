"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[203],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>y});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},i=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||c;return r?o.createElement(y,a(a({ref:t},i),{},{components:r})):o.createElement(y,a({ref:t},i))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,a[1]=l;for(var s=2;s<c;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const c={title:"Docker Compose \u90e8\u7f72"},a="Docker Compose \u90e8\u7f72",l={unversionedId:"deploy-manual/docker-compose",id:"version-v2/deploy-manual/docker-compose",title:"Docker Compose \u90e8\u7f72",description:"\u4f7f\u7528 docker-compose \u90e8\u7f72\u4e0d\u9700\u8981\u63d0\u524d\u51c6\u5907 MySQL \u73af\u5883\uff0c\u53ef\u4ee5\u4e00\u952e\u751f\u6210 SQLE \u73af\u5883",source:"@site/versioned_docs/version-v2/deploy-manual/docker-compose.md",sourceDirName:"deploy-manual",slug:"/deploy-manual/docker-compose",permalink:"/sqle-docs/docs/v2/deploy-manual/docker-compose",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/versioned_docs/version-v2/deploy-manual/docker-compose.md",tags:[],version:"v2",frontMatter:{title:"Docker Compose \u90e8\u7f72"},sidebar:"version-v2/tutorialSidebar",previous:{title:"Docker \u90e8\u7f72",permalink:"/sqle-docs/docs/v2/deploy-manual/docker"},next:{title:"\u96c6\u7fa4\u90e8\u7f72\u3010\u4f01\u4e1a\u7248\u3011",permalink:"/sqle-docs/docs/v2/deploy-manual/cluster"}},p={},s=[{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u8bbf\u95ee",id:"\u8bbf\u95ee",level:2}],i={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"docker-compose-\u90e8\u7f72"},"Docker Compose \u90e8\u7f72"),(0,n.kt)("p",null,"\u4f7f\u7528 docker-compose \u90e8\u7f72\u4e0d\u9700\u8981\u63d0\u524d\u51c6\u5907 MySQL \u73af\u5883\uff0c\u53ef\u4ee5\u4e00\u952e\u751f\u6210 SQLE \u73af\u5883"),(0,n.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,n.kt)("p",null,"\u4e0b\u8f7d\u5730\u5740\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/actiontech/sqle/blob/main/docker-images/sqle/docker-compose.yaml"},"docker-compose.yaml")),(0,n.kt)("h2",{id:"\u4f7f\u7528\u8bf4\u660e"},"\u4f7f\u7528\u8bf4\u660e"),(0,n.kt)("p",null,"\u5c06 docker-compose.yaml \u6587\u4ef6\u4e0b\u8f7d\u5230\u672c\u5730\u76ee\u5f55\uff0c\u5e76\u8fdb\u5165\u76ee\u5f55\u5185\uff0c\u901a\u8fc7\u73af\u5883\u53d8\u91cf",(0,n.kt)("inlineCode",{parentName:"p"},"SQLE_IMAGE"),"\u6307\u5b9a\u4e0d\u540c\u7248\u672c\u7684 SQLE \u955c\u50cf\uff0c\u9ed8\u8ba4\u662f latest\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"SQLE_IMAGE=actiontech/sqle-ce:latest docker-compose up -d\n")),(0,n.kt)("h2",{id:"\u8bbf\u95ee"},"\u8bbf\u95ee"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:10000"},"http://127.0.0.1:10000")))}d.isMDXComponent=!0}}]);