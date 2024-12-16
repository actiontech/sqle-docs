"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[3277],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u4f1a\u8bddSQL\u626b\u63cf"},l=void 0,s={unversionedId:"user-manual/project/audit_task/processlist_audit",id:"user-manual/project/audit_task/processlist_audit",title:"\u4f1a\u8bddSQL\u626b\u63cf",description:"\u5f53\u9700\u8981\u76d1\u63a7\u67e5\u8be2\u6027\u80fd\u3001\u8bc6\u522b\u74f6\u9888\u3001\u4ee5\u53ca\u8bca\u65ad\u6b7b\u9501\u6216\u9501\u7b49\u5f85\u95ee\u9898\u65f6\uff0c\u5229\u7528\u4f1a\u8bddSQL\u667a\u80fd\u626b\u63cf\u529f\u80fd\u8fdb\u884c\u6709\u6548\u5206\u6790\u3002",source:"@site/docs/user-manual/project/audit_task/processlist_audit.md",sourceDirName:"user-manual/project/audit_task",slug:"/user-manual/project/audit_task/processlist_audit",permalink:"/sqle-docs/docs/user-manual/project/audit_task/processlist_audit",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/docs/user-manual/project/audit_task/processlist_audit.md",tags:[],version:"current",frontMatter:{title:"\u4f1a\u8bddSQL\u626b\u63cf"},sidebar:"tutorialSidebar",previous:{title:"\u6162\u65e5\u5fd7",permalink:"/sqle-docs/docs/user-manual/project/audit_task/slowlog_audit"},next:{title:"TopSQL",permalink:"/sqle-docs/docs/user-manual/project/audit_task/topsql"}},i={},u=[{value:"\u652f\u6301\u7684\u6570\u636e\u6e90\u7c7b\u578b",id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u7c7b\u578b",level:3},{value:"\u6b65\u9aa4\u4e00 \u5f00\u542f\u4f1a\u8bddSQL\u626b\u63cf\u7c7b\u578b",id:"\u6b65\u9aa4\u4e00-\u5f00\u542f\u4f1a\u8bddsql\u626b\u63cf\u7c7b\u578b",level:3},{value:"\u6b65\u9aa4\u4e8c \u83b7\u53d6\u91c7\u96c6\u7ed3\u679c\u53ca\u5ba1\u6838\u7ed3\u679c",id:"\u6b65\u9aa4\u4e8c-\u83b7\u53d6\u91c7\u96c6\u7ed3\u679c\u53ca\u5ba1\u6838\u7ed3\u679c",level:3}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u76d1\u63a7\u67e5\u8be2\u6027\u80fd\u3001\u8bc6\u522b\u74f6\u9888\u3001\u4ee5\u53ca\u8bca\u65ad\u6b7b\u9501\u6216\u9501\u7b49\u5f85\u95ee\u9898\u65f6\uff0c\u5229\u7528\u4f1a\u8bddSQL\u667a\u80fd\u626b\u63cf\u529f\u80fd\u8fdb\u884c\u6709\u6548\u5206\u6790\u3002"),(0,a.kt)("h3",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u7c7b\u578b"},"\u652f\u6301\u7684\u6570\u636e\u6e90\u7c7b\u578b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MySQL")),(0,a.kt)("h3",{id:"\u6b65\u9aa4\u4e00-\u5f00\u542f\u4f1a\u8bddsql\u626b\u63cf\u7c7b\u578b"},"\u6b65\u9aa4\u4e00 \u5f00\u542f\u4f1a\u8bddSQL\u626b\u63cf\u7c7b\u578b"),(0,a.kt)("p",null,"\u5728SQL\u7ba1\u63a7\u914d\u7f6e\u4e2d\u4e3a\u6570\u636e\u6e90\u5f00\u542f\u667a\u80fd\u626b\u63cf\uff0c\u626b\u63cf\u7c7b\u578b\u9009\u62e9\u201c\u4f1a\u8bddSQL\u626b\u63cf\u201d\uff0c\u5e76\u586b\u5199\u4ee5\u4e0b\u5b57\u6bb5\u4fe1\u606f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u91c7\u96c6\u5468\u671f\uff1a\u8868\u793aSQLE\u5bf9 MySQL processlist\u8868\u7684\u91c7\u96c6\u9891\u7387\uff0cSQLE\u5c06\u6309\u7167\u8be5\u65f6\u95f4\u95f4\u9694\u8fdb\u884cSQL\u91c7\u96c6\u3002\u5982\u679c\u8be5\u503c\u8fc7\u4f4e\uff0c\u4f1a\u5f71\u54cd\u5b9e\u4f8b\u6027\u80fd\uff1b"),(0,a.kt)("li",{parentName:"ul"},"SQL\u6700\u5c0f\u6267\u884c\u65f6\u95f4\uff08\u79d2\uff09\uff1a\u8868\u793aSQLE\u5bf9 MySQL processlist \u7684\u91c7\u96c6\u8fc7\u6ee4\u6761\u4ef6\uff0c\u53ea\u6709\u5927\u4e8e\u7b49\u4e8e\u8be5\u65f6\u95f4\u7684SQL\u624d\u4f1a\u88ab\u91c7\u96c6\u8bb0\u5f55\u3002\u5982\u679c\u4e3a0\uff0c\u5219\u8868\u793a\u4e0d\u8fdb\u884c\u8fc7\u6ee4\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5ba1\u6838\u89c4\u5219\u6a21\u677f\uff1a\u9009\u62e9\u5bf9\u5e94\u7684\u5ba1\u6838\u89c4\u5219\u6a21\u677f\uff1b")),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u63d0\u4ea4"),"\uff0c\u5b8c\u6210\u6570\u636e\u6e90\u4e0a\u7684\u4f1a\u8bddSQL\u626b\u63cf\u4efb\u52a1\u914d\u7f6e\u3002"),(0,a.kt)("h3",{id:"\u6b65\u9aa4\u4e8c-\u83b7\u53d6\u91c7\u96c6\u7ed3\u679c\u53ca\u5ba1\u6838\u7ed3\u679c"},"\u6b65\u9aa4\u4e8c \u83b7\u53d6\u91c7\u96c6\u7ed3\u679c\u53ca\u5ba1\u6838\u7ed3\u679c"),(0,a.kt)("p",null,"\u5728\u626b\u63cf\u8be6\u60c5\u4e2d\u67e5\u770b\u91c7\u96c6\u7684\u4f1a\u8bddSQL\u4fe1\u606f\u53ca\u5ba1\u6838\u7ed3\u679c\u3002\n",(0,a.kt)("img",{alt:"processlist-audit",src:r(35064).Z,width:"2086",height:"563"})))}p.isMDXComponent=!0},35064:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/processlist-audit-60f743e2808bf879d18faf7bbe251ffb.png"}}]);