"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[805],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=i(r),k=l,m=s["".concat(u,".").concat(k)]||s[k]||d[k]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=k;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:l,o[1]=c;for(var i=2;i<a;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},2064:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(7462),l=(r(7294),r(3905));const a={title:"\u4f7f\u7528\u5b9a\u5236\u5305\u5feb\u901f\u642d\u5efa\u73af\u5883"},o=void 0,c={unversionedId:"user-manual/sql-workbench/how-to-quick-deploy",id:"user-manual/sql-workbench/how-to-quick-deploy",title:"\u4f7f\u7528\u5b9a\u5236\u5305\u5feb\u901f\u642d\u5efa\u73af\u5883",description:"SQLE\u5728\u539f\u6709CloudBeaver release222_0 \u5206\u652f\u7684\u57fa\u7840\u4e0a, \u589e\u52a0\u4e86\u5bf9OceanBase \u548c TiDB \u7684\u652f\u6301, \u7528\u6237\u65e0\u9700\u518d\u624b\u52a8\u914d\u7f6e\u73af\u5883\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528SQL\u5de5\u4f5c\u53f0\u529f\u80fd\u3002",source:"@site/docs/user-manual/sql-workbench/how-to-quick-deploy.md",sourceDirName:"user-manual/sql-workbench",slug:"/user-manual/sql-workbench/how-to-quick-deploy",permalink:"/sqle-docs/docs/user-manual/sql-workbench/how-to-quick-deploy",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/docs/user-manual/sql-workbench/how-to-quick-deploy.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528\u5b9a\u5236\u5305\u5feb\u901f\u642d\u5efa\u73af\u5883"}},u={},i=[{value:"\u9879\u76ee\u5730\u5740",id:"\u9879\u76ee\u5730\u5740",level:3},{value:"\u5b9a\u5236\u5305\u4e0b\u8f7d\u5730\u5740",id:"\u5b9a\u5236\u5305\u4e0b\u8f7d\u5730\u5740",level:3},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:3},{value:"\u7f16\u8bd1\u548c\u8fd0\u884c\u9879\u76ee",id:"\u7f16\u8bd1\u548c\u8fd0\u884c\u9879\u76ee",level:4},{value:"\u7f16\u8bd1docker\u955c\u50cf",id:"\u7f16\u8bd1docker\u955c\u50cf",level:4},{value:"\u8fd0\u884cdocker\u955c\u50cf",id:"\u8fd0\u884cdocker\u955c\u50cf",level:4},{value:"\u5df2\u6709CloudBeaver\u73af\u5883\u5347\u7ea7\u4e3a\u5b9a\u5236\u73af\u5883",id:"\u5df2\u6709cloudbeaver\u73af\u5883\u5347\u7ea7\u4e3a\u5b9a\u5236\u73af\u5883",level:4}],p={toc:i};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"SQLE\u5728\u539f\u6709CloudBeaver release_22_2_0 \u5206\u652f\u7684\u57fa\u7840\u4e0a, \u589e\u52a0\u4e86\u5bf9OceanBase \u548c TiDB \u7684\u652f\u6301, \u7528\u6237\u65e0\u9700\u518d\u624b\u52a8\u914d\u7f6e\u73af\u5883\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528SQL\u5de5\u4f5c\u53f0\u529f\u80fd\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"cb",src:r(739).Z,width:"2181",height:"916"})),(0,l.kt)("p",null,"\u5b9a\u5236\u5206\u652f\u4e0e\u539f\u5206\u652f\u533a\u522b\u8be6\u60c5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5e76\u9ed8\u8ba4\u542f\u7528 OceanBase \u9a71\u52a8"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5e76\u9ed8\u8ba4\u542f\u7528 TiDB \u9a71\u52a8"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8bbf\u95ee\u8def\u7531\u8c03\u6574\u4e3a /sql_query, \u4fbf\u4e8e\u4e0eSQLE\u96c6\u6210"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u8bdd\u8d85\u65f6\u65f6\u95f4\u8c03\u6574\u4e3a12\u5c0f\u65f6(\u4e4b\u524d\u662f30\u5206\u949f)"),(0,l.kt)("li",{parentName:"ul"},"\u79fb\u9664\u4e86\u9ed8\u8ba4\u521b\u5efa\u7684 PG \u6f14\u793a\u5b9e\u4f8b\u548c SQLite \u6f14\u793a\u5b9e\u4f8b"),(0,l.kt)("li",{parentName:"ul"},"docker\u955c\u50cf\u540d\u8c03\u6574\u4e3a actiontech/sqle-cloudbeaver:22_2_0"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5316\u6253\u5305\u65b9\u5f0f, \u5927\u5e45\u63d0\u9ad8\u6253\u5305\u6548\u7387"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e3b\u9898\u6539\u4e3a\u6697\u8272")),(0,l.kt)("h3",{id:"\u9879\u76ee\u5730\u5740"},"\u9879\u76ee\u5730\u5740"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b9a\u5236CloudBeaver\u5206\u652f: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/actiontech/cloudbeaver/tree/sqle_22_2_0"},"https://github.com/actiontech/cloudbeaver/tree/sqle_22_2_0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b9a\u5236DBeaver\u5206\u652f: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/actiontech/dbeaver/tree/sqle_22_2_0"},"https://github.com/actiontech/dbeaver/tree/sqle_22_2_0")))),(0,l.kt)("h3",{id:"\u5b9a\u5236\u5305\u4e0b\u8f7d\u5730\u5740"},"\u5b9a\u5236\u5305\u4e0b\u8f7d\u5730\u5740"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/actiontech/cloudbeaver/releases/tag/sqle.22.2.0"},"https://github.com/actiontech/cloudbeaver/releases/tag/sqle.22.2.0")),(0,l.kt)("h3",{id:"\u4f7f\u7528\u8bf4\u660e"},"\u4f7f\u7528\u8bf4\u660e"),(0,l.kt)("h4",{id:"\u7f16\u8bd1\u548c\u8fd0\u884c\u9879\u76ee"},"\u7f16\u8bd1\u548c\u8fd0\u884c\u9879\u76ee"),(0,l.kt)("p",null,"\u4e0e\u539f\u9879\u76ee\u7f16\u8bd1\u8fd0\u884c\u65b9\u5f0f\u4fdd\u6301\u4e00\u81f4"),(0,l.kt)("h4",{id:"\u7f16\u8bd1docker\u955c\u50cf"},"\u7f16\u8bd1docker\u955c\u50cf"),(0,l.kt)("p",null,"\u8fdb\u5165\u9879\u76ee\u7684 deploy/docker \u76ee\u5f55, \u7136\u540e\u6267\u884c ./make-docker-container.sh"),(0,l.kt)("h4",{id:"\u8fd0\u884cdocker\u955c\u50cf"},"\u8fd0\u884cdocker\u955c\u50cf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65b9\u5f0f\u4e00: \u8fdb\u5165\u9879\u76ee\u7684 deploy/docker \u76ee\u5f55, \u7136\u540e\u6267\u884c ./run-docker-container.sh"),(0,l.kt)("li",{parentName:"ul"},"\u65b9\u5f0f\u4e8c: \u624b\u52a8\u542f\u52a8\u955c\u50cf, \u955c\u50cf\u53c2\u6570\u548c \u539f\u9879\u76ee\u955c\u50cf\u53c2\u6570 \u4fdd\u6301\u4e00\u81f4")),(0,l.kt)("h4",{id:"\u5df2\u6709cloudbeaver\u73af\u5883\u5347\u7ea7\u4e3a\u5b9a\u5236\u73af\u5883"},"\u5df2\u6709CloudBeaver\u73af\u5883\u5347\u7ea7\u4e3a\u5b9a\u5236\u73af\u5883"),(0,l.kt)("p",null,"CloudBeaver\u7a0b\u5e8f\u76ee\u5f55\u4e0b\u5e94\u5f53\u6709\u4ee5\u4e0b\u51e0\u4e2a\u6587\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"cb",src:r(4257).Z,width:"579",height:"251"})),(0,l.kt)("p",null,"\u5c06CloudBeaver\u7a0b\u5e8f\u76ee\u5f55\u4e0b\u7684conf\u76ee\u5f55\u548cworkspace\u76ee\u5f55\u79fb\u52a8\u5230\u5b9a\u5236CloudBeaver\u7a0b\u5e8f\u76ee\u5f55\u4e0b(\u8986\u76d6\u539f\u76ee\u5f55), \u968f\u540e\u505c\u6b62\u65e7CloudBeaver, \u8fd0\u884c\u65b0CloudBeaver\u5373\u53ef"))}s.isMDXComponent=!0},739:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/appear-0b9817946d17f7f9ecce2a62ce009221.png"},4257:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cb-34a9daa2c23118b6ce6af071bc5f028f.png"}}]);