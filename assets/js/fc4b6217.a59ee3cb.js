"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[8862],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>S});var l=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=l.createContext({}),p=function(e){var t=l.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,S=m["".concat(u,".").concat(s)]||m[s]||k[s]||n;return r?l.createElement(S,i(i({ref:t},c),{},{components:r})):l.createElement(S,i({ref:t},c))}));function S(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<n;p++)i[p]=r[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var l=r(7462),a=(r(7294),r(3905));const n={title:"\u521b\u5efa\u5de5\u5355"},i="\u521b\u5efa\u5de5\u5355",o={unversionedId:"user-manual/project/workflow/create-workflow",id:"user-manual/project/workflow/create-workflow",title:"\u521b\u5efa\u5de5\u5355",description:"\u5de5\u5355\u662fSQLE\u63d0\u4f9b\u7684\u5728\u7ebf\u5316SQL\u4e0a\u7ebf\u65b9\u5f0f\u3002\u7814\u53d1\u4eba\u5458\u53ef\u901a\u8fc7\u521b\u5efa\u5de5\u5355\uff0c\u63d0\u8bf7\u9700\u8981\u5ba1\u6279\u7684SQL\u8bed\u53e5\u3002",source:"@site/docs/user-manual/project/workflow/create-workflow.md",sourceDirName:"user-manual/project/workflow",slug:"/user-manual/project/workflow/create-workflow",permalink:"/sqle-docs/docs/user-manual/project/workflow/create-workflow",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/docs/user-manual/project/workflow/create-workflow.md",tags:[],version:"current",frontMatter:{title:"\u521b\u5efa\u5de5\u5355"},sidebar:"tutorialSidebar",previous:{title:"\u529f\u80fd\u8bf4\u660e",permalink:"/sqle-docs/docs/user-manual/project/workflow/intro"},next:{title:"\u5ba1\u6838\u5de5\u5355",permalink:"/sqle-docs/docs/user-manual/project/workflow/audit-workflow"}},u={},p=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"\u6b65\u9aa4\u4e00\uff1a\u586b\u5199\u5de5\u5355\u57fa\u672c\u4fe1\u606f",id:"\u6b65\u9aa4\u4e00\u586b\u5199\u5de5\u5355\u57fa\u672c\u4fe1\u606f",level:3},{value:"\u6b65\u9aa4\u4e8c\uff1a\u4e0a\u4f20SQL\u8bed\u53e5\u5e76\u5ba1\u6838",id:"\u6b65\u9aa4\u4e8c\u4e0a\u4f20sql\u8bed\u53e5\u5e76\u5ba1\u6838",level:3},{value:"\u6b65\u9aa4\u4e09\uff1a\u67e5\u770b\u5ba1\u6838\u7ed3\u679c",id:"\u6b65\u9aa4\u4e09\u67e5\u770b\u5ba1\u6838\u7ed3\u679c",level:3},{value:"\u6b65\u9aa4\u56db\uff1a\u70b9\u51fb\u521b\u5efa\u5de5\u5355",id:"\u6b65\u9aa4\u56db\u70b9\u51fb\u521b\u5efa\u5de5\u5355",level:3},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:2},{value:"\u540e\u7eed\u6b65\u9aa4",id:"\u540e\u7eed\u6b65\u9aa4",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u521b\u5efa\u5de5\u5355"},"\u521b\u5efa\u5de5\u5355"),(0,a.kt)("p",null,"\u5de5\u5355\u662fSQLE\u63d0\u4f9b\u7684\u5728\u7ebf\u5316SQL\u4e0a\u7ebf\u65b9\u5f0f\u3002\u7814\u53d1\u4eba\u5458\u53ef\u901a\u8fc7\u521b\u5efa\u5de5\u5355\uff0c\u63d0\u8bf7\u9700\u8981\u5ba1\u6279\u7684SQL\u8bed\u53e5\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,a.kt)("p",null,"\u5b9e\u9645\u751f\u4ea7\u4e2d\u4f1a\u5b58\u5728\u4e1a\u52a1\u53d8\u66f4\u3001\u4e1a\u52a1\u4e0a\u7ebf\uff0c\u6bd4\u5982\u521d\u59cb\u5316\u6784\u5efa\u4e1a\u52a1\u5e93\u3001\u8dd1\u6279\u3002\u6b64\u65f6\uff0c\u9700\u8981\u9488\u5bf9\u67d0\u4e2a\u6570\u636e\u5e93\u6267\u884c\u4e00\u6279SQL\u3002\u7528\u6237\u53ef\u901a\u8fc7SQLE\u521b\u5efa\u5de5\u5355\uff0c\u8f93\u5165SQL\u8bed\u53e5\u6216\u8005\u4e0a\u4f20SQL\u811a\u672c\u3002"),(0,a.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9879\u76ee\u7ba1\u7406\u5458\u5df2\u6dfb\u52a0\u6570\u636e\u6e90\uff1b")),(0,a.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,a.kt)("h3",{id:"\u6b65\u9aa4\u4e00\u586b\u5199\u5de5\u5355\u57fa\u672c\u4fe1\u606f"},"\u6b65\u9aa4\u4e00\uff1a\u586b\u5199\u5de5\u5355\u57fa\u672c\u4fe1\u606f"),(0,a.kt)("p",null,"\u521b\u5efa\u5de5\u5355\u524d\uff0c\u9700\u8981\u4e3a\u5de5\u5355\u6307\u5b9a\u552f\u4e00\u7684\u5de5\u5355\u540d\u79f0\uff0c\u5e76\u586b\u5199\u5de5\u5355\u8bf4\u660e\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u586b\u5199\u5de5\u5355\u540d\u79f0\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5de5\u5355\u540d\u79f0\u652f\u6301\u4e2d\u82f1\u6587\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u82e5\u672a\u586b\u5199\uff0c\u5e73\u53f0\u5c06\u6839\u636e\u4f7f\u7528\u7684\u6570\u636e\u6e90\u53ca\u6dfb\u52a0\u65f6\u95f4\u7ec4\u5408\u586b\u5145\u5de5\u5355\u540d\u79f0\uff1b"))),(0,a.kt)("li",{parentName:"ul"},"\u586b\u5199\u5de5\u5355\u63cf\u8ff0\uff1a\u8f93\u5165\u5de5\u5355\u63cf\u8ff0\u4fe1\u606f\uff0c\u96503000\u4e2a\u5b57\u7b26\uff1b")),(0,a.kt)("h3",{id:"\u6b65\u9aa4\u4e8c\u4e0a\u4f20sql\u8bed\u53e5\u5e76\u5ba1\u6838"},"\u6b65\u9aa4\u4e8c\uff1a\u4e0a\u4f20SQL\u8bed\u53e5\u5e76\u5ba1\u6838"),(0,a.kt)("p",null,"\u9700\u8981\u586b\u5199\u5de5\u5355\u4e2d\u6d89\u53ca\u7684SQL\u8bed\u53e5\uff0c\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"\u5ba1\u6838"),"\u64cd\u4f5c\uff0cSQLE\u4f1a\u6839\u636e\u6570\u636e\u6e90\u914d\u7f6e\u7684\u5ba1\u6838\u89c4\u5219\u6a21\u677f\uff0c\u81ea\u52a8\u8fdb\u884cSQL\u8bed\u53e5\u7684\u89c4\u5219\u5ba1\u6838\uff0c\u5e76\u5728\u7ebf\u53cd\u9988\u5ba1\u6838\u7ed3\u679c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9\u6570\u636e\u6e90\uff1a\u8868\u793a\u5f53\u524dSQL\u6700\u7ec8\u4f1a\u5e94\u7528\u5230\u54ea\u4e2a\u6570\u636e\u6e90\uff1b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u793e\u533a\u7248\uff1a\u4e00\u4e2a\u5de5\u5355\u5185\u4ec5\u652f\u6301\u9009\u62e9\u4e00\u4e2a\u6570\u636e\u6e90\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u7248\uff1a\u4e00\u4e2a\u5de5\u5355\u5185\u652f\u6301\u6dfb\u52a0\u591a\u4e2a\u6570\u636e\u6e90\uff1b"))),(0,a.kt)("li",{parentName:"ul"},"\u662f\u5426\u9009\u62e9\u76f8\u540cSQL\uff1a\u5f53\u6dfb\u52a0\u591a\u4e2a\u6570\u636e\u6e90\u65f6\uff0c\u53ef\u8bbe\u7f6e\u662f\u5426\u9009\u62e9\u76f8\u540cSQL\uff1b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u76f8\u540cSQL\u6a21\u5f0f\uff0c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9650\u5236\uff1a\u6570\u636e\u6e90\u7684\u6570\u636e\u5e93\u7c7b\u578b\u987b\u76f8\u540c\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u6548\u679c\uff1a\u5bf9\u4e0d\u540c\u6570\u636e\u6e90\u4e0b\u53d1\u76f8\u540cSQL\uff1b"))),(0,a.kt)("li",{parentName:"ul"},"\u82e5\u4e0d\u4f7f\u7528\u76f8\u540cSQL\u6a21\u5f0f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6548\u679c\uff1a\u5bf9\u4e0d\u540c\u6570\u636e\u6e90\u4e0b\u53d1\u4e0d\u540cSQL\uff1b"))))),(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9\u6570\u636e\u5e93\uff1a\u9009\u62e9\u8981\u6267\u884cSQL\u7684\u6570\u636e\u5e93\uff0c\u76f8\u5f53\u4e8e\u6267\u884c use \u8bed\u53e5\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9\u5ba1\u6838SQL\u8bed\u53e5\u4e0a\u4f20\u65b9\u5f0f\uff1a\u5e73\u53f0\u63d0\u4f9b\u4e09\u79cd\u4e0a\u4f20\u65b9\u5f0f\uff0c\u5305\u62ec\u5728\u7ebf\u8f93\u5165SQL\u8bed\u53e5\u3001\u4e0a\u4f20SQL\u6587\u4ef6\u3001\u4e0a\u4f20MyBatis\u7684XML\u6587\u4ef6\uff1b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5728\u7ebf\u8f93\u5165SQL\u8bed\u53e5\uff1a\u9879\u76ee\u6210\u5458\u53ef\u5728\u5e73\u53f0\u7f16\u8f91\u5668\u4e2d\u76f4\u63a5\u8f93\u5165SQL\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u4e0a\u4f20SQL\u6587\u4ef6\uff1a\u9879\u76ee\u6210\u5458\u53ef\u9009\u62e9\u672c\u5730\u7684SQL\u6587\u4ef6\u4e0a\u4f20\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u4e0a\u4f20Mybatis\u7684XML\u6587\u4ef6\uff1a\u9879\u76ee\u6210\u5458\u53ef\u9009\u62e9\u672c\u5730\u7684XML\u6587\u4ef6\u4e0a\u4f20\uff1b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9650\u5236\uff1a\u5e73\u53f0\u4ec5\u652f\u6301\u5ba1\u6838XML\u6587\u4ef6\u4e2d\u4e0a\u4f20\u7684SQL\u8bed\u53e5\uff0c\u5c1a\u4e0d\u652f\u6301\u5bf9\u5176\u521b\u5efa\u5de5\u5355\uff1b"))))),(0,a.kt)("li",{parentName:"ul"},"\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"li"},"\u5ba1\u6838"),"\uff0c\u663e\u793a\u5e73\u53f0\u5ba1\u6838\u7ed3\u679c\uff1b")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u7ebf\u8f93\u5165SQL\u7684\u573a\u666f\u4e0b\uff0c\u5e73\u53f0\u652f\u6301\u5bf9\u8f93\u5165\u6846\u4e2d\u7684SQL\u8fdb\u884c\u7f8e\u5316\uff0c\u4ee5\u6b64\u63d0\u9ad8SQL\u53ef\u8bfb\u6027\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u6ce8\uff1a\u5f53\u524d\u652f\u6301SQL\u7f8e\u5316\u7684\u6570\u636e\u6e90\u7c7b\u578b\u5305\u62ec\uff1a"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"MySQL"),(0,a.kt)("li",{parentName:"ul"},"DB2"),(0,a.kt)("li",{parentName:"ul"},"SQL Server"),(0,a.kt)("li",{parentName:"ul"},"Oceanbase For MySQL"),(0,a.kt)("li",{parentName:"ul"},"Oracle"),(0,a.kt)("li",{parentName:"ul"},"PostgreSQL"))),(0,a.kt)("h3",{id:"\u6b65\u9aa4\u4e09\u67e5\u770b\u5ba1\u6838\u7ed3\u679c"},"\u6b65\u9aa4\u4e09\uff1a\u67e5\u770b\u5ba1\u6838\u7ed3\u679c"),(0,a.kt)("p",null,"\u5c06\u6839\u636e\u6570\u636e\u6e90\u4e0d\u540c\uff0c\u5c55\u793a\u4e0d\u540c\u6570\u636e\u6e90\u4e0b\u7684SQL\u5ba1\u6838\u7ed3\u679c\u3002\n\u5ba1\u6838\u7ed3\u679c\u7531\u4ee5\u4e0b\u51e0\u90e8\u5206\u7ec4\u6210\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6e90\u6807\u7b7e\uff1a\u663e\u793a\u5f53\u524dSQL\u64cd\u4f5c\u7684\u6570\u636e\u6e90\uff0c\u5f53\u6709\u591a\u4e2a\u6570\u636e\u6e90\u65f6\uff0c\u53ef\u5207\u6362\u6570\u636e\u6e90\u6807\u7b7e\uff0c\u67e5\u770b\u4e0d\u540c\u6570\u636e\u6e90\u4e0a\u7684\u5ba1\u6838\u60c5\u51b5\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6e90\u4e0aSQL\u7684\u6574\u4f53\u5ba1\u6838\u901a\u8fc7\u7387\u3001\u5ba1\u6838\u7ed3\u679c\u8bc4\u5206\u53ca\u64cd\u4f5c\u7684\u6570\u636e\u5e93\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6e90\u4e0a\u6bcf\u6761SQL\u7684\u5ba1\u6838\u7ed3\u679c\uff0c\u5305\u62ec",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SQL\u8bed\u53e5\uff1a\u67e5\u770b\u539f\u59cbSQL"),(0,a.kt)("li",{parentName:"ul"},"\u5ba1\u6838\u7ed3\u679c\uff1a\u67e5\u770bSQL\u89e6\u53d1\u7684\u89c4\u5219\u53ca\u89c4\u5219\u7b49\u7ea7\uff1b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u70b9\u51fbSQL\u53ca\u5ba1\u6838\u7ed3\u679c\u680f\uff0c\u53ef\u4ee5\u5728\u53f3\u4fa7\u62bd\u5c49\u4e2d\u67e5\u770b\u5b8c\u6574\u4fe1\u606f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5728GIT\u4ed3\u5e93\u5ba1\u6838\u53caZIP\u6587\u4ef6\u5ba1\u6838\u65f6\uff0c\u53ef\u4ee5\u67e5\u770bSQL\u5177\u4f53\u7684\u6765\u6e90\u8def\u5f84\uff1b"))),(0,a.kt)("li",{parentName:"ul"},"SQL\u5206\u6790\uff1a\u4f01\u4e1a\u7248\u7528\u6237\u652f\u6301\u67e5\u770bSQL\u5206\u6790\u7ed3\u679c\uff1b"))),(0,a.kt)("li",{parentName:"ul"},"\u529f\u80fd\u533a\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u5ba1\u6838\u62a5\u544a\uff1a\u67e5\u770b\u5f53\u524d\u6570\u636e\u6e90\u4e0b\u5ba1\u6838\u7684sql\u8bed\u53e5\u53ca\u5176\u5ba1\u6838\u7ed3\u679c\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u8f7dSQL\u8bed\u53e5\uff1a\u4e0b\u8f7d\u6587\u4ef6\uff0c\u53ef\u67e5\u770b\u5f53\u524d\u6570\u636e\u6e90\u4e0b\u5ba1\u6838\u7684SQL\u8bed\u53e5\u53ca\u5176\u5ba1\u6838\u7ed3\u679c\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u662f\u5426\u53bb\u91cd\uff1a\u82e5SQL\u8bed\u53e5\u7ed3\u6784\u4e00\u81f4\uff0c\u53bb\u91cd\u540e\u5c06\u4ec5\u663e\u793a\u53bb\u91cd\u540e\u7684SQL\uff1b")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u5ba1\u6838\u901a\u8fc7\u7387\u8ba1\u7b97\u65b9\u5f0f"',title:'"\u5ba1\u6838\u901a\u8fc7\u7387\u8ba1\u7b97\u65b9\u5f0f"'},"\u5ba1\u6838\u901a\u8fc7\u7387=\u6b63\u5e38sql/sql\u603b\u6570\n\u5ba1\u6838\u7ed3\u679c\u7b49\u7ea7\u4e3anotice,warn,err\u7684sql\u5747\u4e3a\u975e\u6b63\u5e38sql\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u5ba1\u6838\u7ed3\u679c\u8bc4\u5206\u8ba1\u7b97\u65b9\u5f0f"',title:'"\u5ba1\u6838\u7ed3\u679c\u8bc4\u5206\u8ba1\u7b97\u65b9\u5f0f"'},"1.Error\u4ee5\u4e0a\u7ea7\u522bSQL\u51fa\u73b0\u7387 = Error\u7ea7\u522bSQL\u6570 / \u603bSQL\u6570\n2.Warn\u4ee5\u4e0a\u7ea7\u522bSQL\u51fa\u73b0\u7387 = (Error\u7ea7\u522bSQL\u6570 + Warn\u7ea7\u522bSQL\u6570) / \u603bSQL\u6570\n3.Warn\u4ee5\u4e0a\u7ea7\u522bSQL\u51fa\u73b0\u7387 = (Error\u7ea7\u522bSQL\u6570 + Warn\u7ea7\u522bSQL\u6570 + Notice\u7ea7\u522bSQL\u6570) / \u603bSQL\u6570\n4.\u603b\u5206 = \u5ba1\u6838\u901a\u8fc7\u7387 x 30 +\n(1 - Error\u4ee5\u4e0a\u7ea7\u522bSQL\u51fa\u73b0\u7387) x 15 +\n(1 - Warn\u4ee5\u4e0a\u7ea7\u522bSQL\u51fa\u73b0\u7387) x 10 +\n(1 - Notice\u4ee5\u4e0a\u7ea7\u522bSQL\u51fa\u73b0\u7387) x 5 +\n(Error\u4ee5\u4e0a\u7ea7\u522bSQL\u51fa\u73b0\u6982\u7387 == 0 ? 15 : 0) +\n(Warn\u4ee5\u4e0a\u7ea7\u522bSQL\u51fa\u73b0\u6982\u7387 == 0 ? 10 : 0) +\n(Notice\u4ee5\u4e0a\u7ea7\u522bSQL\u51fa\u73b0\u6982\u7387 == 0 ? 5 : 0) +\n(Error\u4ee5\u4e0a\u7ea7\u522bSQL\u51fa\u73b0\u6982\u7387 <0.1 ? 5 : 0) +\n(Warn\u4ee5\u4e0a\u7ea7\u522bSQL\u51fa\u73b0\u6982\u7387 <0.1? 3 : 0) +\n(Notice\u4ee5\u4e0a\u7ea7\u522bSQL\u51fa\u73b0\u6982\u7387 <0.1 ? 2 : 0)\n\n\u5907\u6ce8: \u4e09\u5143\u8868\u8fbe\u5f0f ==> ( \u6761\u4ef6 ? \u5982\u679c\u6761\u4ef6\u4e3a\u771f\u5219\u4e3a\u6b64\u503c : \u5982\u679c\u6761\u4ef6\u4e3a\u5047\u5219\u4e3a\u6b64\u503c )\n")),(0,a.kt)("h3",{id:"\u6b65\u9aa4\u56db\u70b9\u51fb\u521b\u5efa\u5de5\u5355"},"\u6b65\u9aa4\u56db\uff1a\u70b9\u51fb\u521b\u5efa\u5de5\u5355"),(0,a.kt)("p",null,"\u5b8c\u6210\u521b\u5efa\u540e\uff0c\u8fdb\u5165\u5de5\u5355\u5217\u8868\uff0c\u5373\u53ef\u770b\u5230\u8be5\u5de5\u5355\u663e\u793a\u4e3a\u5f85\u5ba1\u6838\u3002"),(0,a.kt)("h2",{id:"\u6267\u884c\u7ed3\u679c"},"\u6267\u884c\u7ed3\u679c"),(0,a.kt)("p",null,"\u521b\u5efa\u5de5\u5355\u540e\uff0c\u53ef\u5728\u5de5\u5355\u5217\u8868\u67e5\u770b\u5df2\u521b\u5efa\u7684\u6240\u6709\u5de5\u5355\u3002\n",(0,a.kt)("img",{alt:"list",src:r(8889).Z,width:"2940",height:"1594"})),(0,a.kt)("h2",{id:"\u540e\u7eed\u6b65\u9aa4"},"\u540e\u7eed\u6b65\u9aa4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5ba1\u6838\u5de5\u5355\uff1a\u5de5\u5355\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u5c06\u4f9d\u636e\u5ba1\u6838\u6d41\u7a0b\u6a21\u677f\u7684\u8bbe\u5b9a\uff0c\u6d41\u8f6c\u81f3\u6307\u5b9a\u7684\u5ba1\u6838\u6210\u5458\u5904\uff0c\u5ba1\u6838\u6210\u5458\u9700\u767b\u5f55\u540e\u8fdb\u884c\u5ba1\u6838\u64cd\u4f5c\uff0c\u8be6\u60c5\u53ef\u53c2\u89c1",(0,a.kt)("a",{parentName:"li",href:"/sqle-docs/docs/user-manual/project/workflow/audit-workflow"},"\u5ba1\u6838\u5de5\u5355"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5bfc\u51fa\u5de5\u5355\uff1a\u5f53\u7528\u6237\u9700\u8981\u5ba1\u8ba1\u5f53\u524d\u5df2\u521b\u5efa\u7684\u5de5\u5355\u65f6\uff0c\u53ef\u9009\u62e9\u7b5b\u9009\u6761\u4ef6\u540e\uff0c\u70b9\u51fb\u5de5\u5355\u5217\u8868\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"\u5bfc\u51fa\u5de5\u5355"),"\u6309\u94ae\uff0c\u4ee5csv\u683c\u5f0f\u5bfc\u51fa\u6ee1\u8db3\u6761\u4ef6\u7684\u5de5\u5355\u4fe1\u606f\u3002")))}m.isMDXComponent=!0},8889:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/list-ee441cd029585c1fc6c715085040bb0c.png"}}]);