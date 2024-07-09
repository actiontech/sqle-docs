"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[8420],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>m});var r=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},s=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=d(l),k=n,m=c["".concat(o,".").concat(k)]||c[k]||p[k]||a;return l?r.createElement(m,i(i({ref:t},s),{},{components:l})):r.createElement(m,i({ref:t},s))}));function m(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,i=new Array(a);i[0]=k;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:n,i[1]=u;for(var d=2;d<a;d++)i[d]=l[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}k.displayName="MDXCreateElement"},77896:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var r=l(87462),n=(l(67294),l(3905));const a={title:"\u529f\u80fd\u8bf4\u660e"},i="\u529f\u80fd\u8bf4\u660e",u={unversionedId:"user-manual/sql-workbench/introduction",id:"user-manual/sql-workbench/introduction",title:"\u529f\u80fd\u8bf4\u660e",description:"CloudBeaver Community \u662f\u4e00\u4e2a\u5f00\u6e90\u7684 Web \u6570\u636e\u5e93\u53ef\u89c6\u5316\u7ba1\u7406\u5de5\u5177\uff0c\u652f\u6301 PostgreSQL, MySQL, MariaDB, SQL Server, Oracle, DB2, Firebird, H2, Trino \u7b49\u6570\u636e\u5e93\u3002",source:"@site/docs/user-manual/sql-workbench/introduction.md",sourceDirName:"user-manual/sql-workbench",slug:"/user-manual/sql-workbench/introduction",permalink:"/sqle-docs/docs/user-manual/sql-workbench/introduction",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/docs/user-manual/sql-workbench/introduction.md",tags:[],version:"current",frontMatter:{title:"\u529f\u80fd\u8bf4\u660e"},sidebar:"tutorialSidebar",previous:{title:"\u4e2a\u6027\u5316\u8bbe\u7f6e\u3010\u4f01\u4e1a\u7248\u3011",permalink:"/sqle-docs/docs/user-manual/sys-configuration/customize"},next:{title:"\u914d\u7f6e\u65b9\u6cd5",permalink:"/sqle-docs/docs/user-manual/sql-workbench/how-to-configure"}},o={},d=[{value:"\u7528\u6237\u4fe1\u606f\u548c\u5b9e\u4f8b\u4fe1\u606f\u540c\u6b65",id:"\u7528\u6237\u4fe1\u606f\u548c\u5b9e\u4f8b\u4fe1\u606f\u540c\u6b65",level:4},{value:"SQL\u5de5\u4f5c\u53f0\u67e5\u8be2\u5ba1\u6838",id:"sql\u5de5\u4f5c\u53f0\u67e5\u8be2\u5ba1\u6838",level:4},{value:"\u64cd\u4f5c\u5ba1\u8ba1",id:"\u64cd\u4f5c\u5ba1\u8ba1",level:4},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u81ea\u4e3b\u5ba1\u6838\u573a\u666f",id:"\u81ea\u4e3b\u5ba1\u6838\u573a\u666f",level:3},{value:"\u6b65\u9aa4\u4e00 SQLE\u5e73\u53f0\u914d\u7f6e\u7528\u6237",id:"\u6b65\u9aa4\u4e00-sqle\u5e73\u53f0\u914d\u7f6e\u7528\u6237",level:4},{value:"\u6b65\u9aa4\u4e8c SQLE\u5e73\u53f0\u914d\u7f6e\u6210\u5458\u6743\u9650",id:"\u6b65\u9aa4\u4e8c-sqle\u5e73\u53f0\u914d\u7f6e\u6210\u5458\u6743\u9650",level:4},{value:"\u6b65\u9aa4\u4e09 \u767b\u5f55CloudBeaver",id:"\u6b65\u9aa4\u4e09-\u767b\u5f55cloudbeaver",level:4},{value:"\u6b65\u9aa4\u56db \u4e0b\u53d1SQL",id:"\u6b65\u9aa4\u56db-\u4e0b\u53d1sql",level:4},{value:"\u64cd\u4f5c\u7ed3\u679c",id:"\u64cd\u4f5c\u7ed3\u679c",level:4},{value:"\u5ba1\u6838\u62e6\u622a\u573a\u666f",id:"\u5ba1\u6838\u62e6\u622a\u573a\u666f",level:3},{value:"\u6b65\u9aa4\u4e00 SQLE\u5e73\u53f0\u914d\u7f6e\u7528\u6237\u53ca\u89d2\u8272",id:"\u6b65\u9aa4\u4e00-sqle\u5e73\u53f0\u914d\u7f6e\u7528\u6237\u53ca\u89d2\u8272",level:4},{value:"\u6b65\u9aa4\u4e8c SQLE\u5e73\u53f0\u914d\u7f6e\u6570\u636e\u5e93\u5b9e\u4f8b\u5ba1\u6838\u7b49\u7ea7",id:"\u6b65\u9aa4\u4e8c-sqle\u5e73\u53f0\u914d\u7f6e\u6570\u636e\u5e93\u5b9e\u4f8b\u5ba1\u6838\u7b49\u7ea7",level:4},{value:"\u6b65\u9aa4\u4e09 SQLE\u5e73\u53f0\u914d\u7f6e\u6210\u5458\u6743\u9650",id:"\u6b65\u9aa4\u4e09-sqle\u5e73\u53f0\u914d\u7f6e\u6210\u5458\u6743\u9650",level:4},{value:"\u6b65\u9aa4\u56db \u767b\u5f55CloudBeaver",id:"\u6b65\u9aa4\u56db-\u767b\u5f55cloudbeaver",level:4},{value:"\u6b65\u9aa4\u4e94 \u4e0b\u53d1SQL",id:"\u6b65\u9aa4\u4e94-\u4e0b\u53d1sql",level:4},{value:"\u64cd\u4f5c\u7ed3\u679c",id:"\u64cd\u4f5c\u7ed3\u679c-1",level:4},{value:"\u6743\u9650\u63a7\u5236\u573a\u666f",id:"\u6743\u9650\u63a7\u5236\u573a\u666f",level:3},{value:"\u6b65\u9aa4\u4e00 SQLE\u5e73\u53f0\u914d\u7f6e\u7528\u6237\u53ca\u89d2\u8272",id:"\u6b65\u9aa4\u4e00-sqle\u5e73\u53f0\u914d\u7f6e\u7528\u6237\u53ca\u89d2\u8272-1",level:4},{value:"\u6b65\u9aa4\u4e8c SQLE\u5e73\u53f0\u914d\u7f6e\u6210\u5458\u6743\u9650",id:"\u6b65\u9aa4\u4e8c-sqle\u5e73\u53f0\u914d\u7f6e\u6210\u5458\u6743\u9650-1",level:4},{value:"\u6b65\u9aa4\u4e09 \u767b\u5f55CloudBeaver",id:"\u6b65\u9aa4\u4e09-\u767b\u5f55cloudbeaver-1",level:4}],s={toc:d};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,n.kt)("p",null,"CloudBeaver Community \u662f\u4e00\u4e2a\u5f00\u6e90\u7684 Web \u6570\u636e\u5e93\u53ef\u89c6\u5316\u7ba1\u7406\u5de5\u5177\uff0c\u652f\u6301 PostgreSQL, MySQL, MariaDB, SQL Server, Oracle, DB2, Firebird, H2, Trino \u7b49\u6570\u636e\u5e93\u3002"),(0,n.kt)("p",null,"SQLE\u901a\u8fc7\u96c6\u6210CloudBeaver\uff0c\u4f7f\u5f97SQLE\u5177\u5907\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u80fd\u529b\uff0c\u65b9\u4fbf\u5f00\u53d1\u6216DBA\u5728SQLE\u4e2d\u65b9\u4fbf\u5730\u64cd\u4f5c\u6570\u636e\u5e93\uff0c\u5177\u4f53\u8868\u73b0\u4e3a\uff1a"),(0,n.kt)("h4",{id:"\u7528\u6237\u4fe1\u606f\u548c\u5b9e\u4f8b\u4fe1\u606f\u540c\u6b65"},"\u7528\u6237\u4fe1\u606f\u548c\u5b9e\u4f8b\u4fe1\u606f\u540c\u6b65"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SQL\u5de5\u4f5c\u53f0\u4e0eSQLE\u5e73\u53f0\u7684\u7528\u6237\u7ba1\u7406\u7cfb\u7edf\u7d27\u5bc6\u96c6\u6210\uff0c\u81ea\u52a8\u540c\u6b65\u7528\u6237\u4fe1\u606f\u548c\u6570\u636e\u5e93\u5b9e\u4f8b\u4fe1\u606f\u3002\u8fd9\u4e00\u7279\u6027\u786e\u4fdd\u4e86\u53ea\u6709\u6388\u6743\u7528\u6237\u624d\u80fd\u8bbf\u95ee\u548c\u64cd\u4f5c\u76f8\u5173\u6570\u636e\u5e93\uff0c\u4ece\u800c\u4fdd\u62a4\u4e86\u6570\u636e\u7684\u5b89\u5168\u6027\u548c\u9690\u79c1\u6027\u3002")),(0,n.kt)("h4",{id:"sql\u5de5\u4f5c\u53f0\u67e5\u8be2\u5ba1\u6838"},"SQL\u5de5\u4f5c\u53f0\u67e5\u8be2\u5ba1\u6838"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u63d0\u9ad8SQL\u8bed\u53e5\u7684\u5408\u89c4\u6027\uff0c\u60a8\u53ef\u4ee5\u5728\u6570\u636e\u6e90\u8bbe\u7f6e\u4e2d\u5f00\u542f",(0,n.kt)("inlineCode",{parentName:"li"},"SQL\u5de5\u4f5c\u53f0\u67e5\u8be2\u5ba1\u6838"),"\u529f\u80fd\u3002\u6b64\u529f\u80fd\u4f1a\u5bf9\u901a\u8fc7SQL\u5de5\u4f5c\u53f0\u6267\u884c\u7684\u6bcf\u4e00\u6761SQL\u8bed\u53e5\u8fdb\u884c\u5b9e\u65f6\u89c4\u5219\u5ba1\u6838\uff0c\u786e\u4fdd\u6240\u6709\u67e5\u8be2\u90fd\u7b26\u5408\u65e2\u5b9a\u7684\u5b89\u5168\u548c\u6027\u80fd\u6807\u51c6\uff0c\u4ece\u800c\u6709\u6548\u907f\u514d\u6f5c\u5728\u7684\u4e0d\u5408\u89c4\u67e5\u8be2\u3002")),(0,n.kt)("h4",{id:"\u64cd\u4f5c\u5ba1\u8ba1"},"\u64cd\u4f5c\u5ba1\u8ba1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SQLE\u5e73\u53f0\u63d0\u4f9b\u4e86\u5ba1\u8ba1\u9875\u9762\uff0c\u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u67e5\u770bSQL\u5de5\u4f5c\u53f0\u4ea7\u751f\u7684\u6240\u6709\u6570\u636e\u5e93\u64cd\u4f5c\u884c\u4e3a\u3002\u8fd9\u5305\u62ec\u67e5\u8be2\u3001\u66f4\u65b0\u3001\u5220\u9664\u7b49\u64cd\u4f5c\uff0c\u5e2e\u52a9\u60a8\u5b9e\u73b0\u5168\u9762\u7684\u64cd\u4f5c\u5ba1\u8ba1\u548c\u76d1\u63a7\u3002")),(0,n.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,n.kt)("p",null,"\u5b89\u88c5CloudBeaver\u5e76\u5b8c\u6210\u914d\u7f6e\uff0c\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"/sqle-docs/docs/user-manual/sql-workbench/how-to-configure"},"SQL\u5de5\u4f5c\u53f0\u914d\u7f6e\u65b9\u6cd5"),"\u3002"),(0,n.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,n.kt)("p",null,"\u5f53\u4e1a\u52a1\u4eba\u5458\u9700\u8981\u5bf9\u6570\u636e\u5e93\u8fdb\u884c\u6570\u636e\u68c0\u7d22\u65f6\uff0c\u4e00\u4e9b\u67e5\u8be2SQL\u53ef\u80fd\u4f1a\u9020\u6210\u6570\u636e\u5e93\u6027\u80fd\u95ee\u9898\u751a\u81f3\u592f\u6b7b\u3002\u4f46\u5728\u4f20\u7edf\u7684\u4f7f\u7528\u573a\u666f\u4e2d\uff0cDBA\u5f88\u96be\u5bf9\u4e1a\u52a1\u4eba\u5458\u7684\u884c\u4e3a\u8fdb\u884c\u8ffd\u8e2a\u548c\u7ba1\u63a7\uff0c\u65e0\u6cd5\u9650\u5236\u6709\u95ee\u9898\u7684SQL\u5728\u751f\u4ea7\u73af\u5883\u6267\u884c\u3002\n\u56e0\u800cSQLE\u5e73\u53f0\u96c6\u6210CloudBeaver\u6570\u636e\u5e93\u53ef\u89c6\u5316\u7ba1\u7406\u5de5\u5177\uff0c\u6ee1\u8db3\u5728\u7ebfSQL\u67e5\u8be2\u9700\u6c42\u7684\u540c\u65f6\uff0c\u8fdb\u884c\u4e1a\u52a1\u4eba\u5458\u7684\u64cd\u4f5c\u6743\u9650\u63a7\u5236\uff0c\u5e76\u5bf9\u4e1a\u52a1\u4eba\u5458\u7684SQL\u8fdb\u884c\u5ba1\u8ba1\uff0c\u62d2\u7edd\u4e0d\u5408\u89c4\u7684SQL\u8fd0\u884c\u3002"),(0,n.kt)("h3",{id:"\u81ea\u4e3b\u5ba1\u6838\u573a\u666f"},"\u81ea\u4e3b\u5ba1\u6838\u573a\u666f"),(0,n.kt)("p",null,"\u5047\u8bbe\u4e1a\u52a1\u90e8\u95e8\u9700\u8981\u5b9a\u671f\u4ece\u6570\u636e\u5e93\u4e2d\u63d0\u53d6\u9500\u552e\u62a5\u544a\u3002\u4e1a\u52a1\u4eba\u5458\u4e0d\u719f\u6089SQL\u6216\u6570\u636e\u5e93\u6027\u80fd\u5f71\u54cd\u56e0\u7d20\uff0c\u56e0\u6b64\u9700\u8981\u5f00\u542fSQL\u67e5\u8be2\u5ba1\u6838\uff0c\u4e1a\u52a1\u4eba\u5458\u53ef\u4ee5\u7ed3\u5408\u5ba1\u6838\u89c4\u5219\u6539\u8fdb\u67e5\u8be2\u8bed\u53e5\uff0c\u51cf\u5c11\u56e0\u67e5\u8be2\u4e0d\u5408\u7406\u5bfc\u81f4\u7684\u6570\u636e\u5e93\u95ee\u9898\u3002"),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e00-sqle\u5e73\u53f0\u914d\u7f6e\u7528\u6237"},"\u6b65\u9aa4\u4e00 SQLE\u5e73\u53f0\u914d\u7f6e\u7528\u6237"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u7528\u6237A\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u6709SQL\u67e5\u8be2\u6743\u9650\u7684\u89d2\u8272\uff1aSQL\u67e5\u8be2\uff1b")),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e8c-sqle\u5e73\u53f0\u914d\u7f6e\u6210\u5458\u6743\u9650"},"\u6b65\u9aa4\u4e8c SQLE\u5e73\u53f0\u914d\u7f6e\u6210\u5458\u6743\u9650"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u9879\u76ee\u5185\u6dfb\u52a0\u6570\u636e\u6e90\u5b9e\u4f8btest\uff0c\u5e76\u5f00\u542f\u6570\u636e\u6e90\u4e0a\u7684SQL\u5de5\u4f5c\u53f0\u67e5\u8be2\u5ba1\u6838\u80fd\u529b"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u9879\u76ee\u5185\u6dfb\u52a0\u6210\u5458A\uff0c\u5e76\u8bbe\u7f6eA\u5728\u5b9e\u4f8btest\u4e0a\u6709SQL\u67e5\u8be2\u7684\u89d2\u8272\uff1b")),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e09-\u767b\u5f55cloudbeaver"},"\u6b65\u9aa4\u4e09 \u767b\u5f55CloudBeaver"),(0,n.kt)("p",null,"\u5207\u6362\u6210\u5458A\u8d26\u53f7\u540e\uff0c\u70b9\u51fbSQL\u5de5\u4f5c\u53f0\u8df3\u8f6cCloudBeaver\uff0cSQLE\u5c06\u4f1a\u81ea\u52a8\u4f7f\u7528\u5f53\u524dSQLE\u7528\u6237\u767b\u5f55CloudBeaver\u3002 "),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u82e5\u5f53\u524d\u7528\u6237\u65e0SQL\u67e5\u8be2\u6743\u9650\uff0c\u5219\u65e0\u6743\u767b\u5f55\u3002")),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u56db-\u4e0b\u53d1sql"},"\u6b65\u9aa4\u56db \u4e0b\u53d1SQL"),(0,n.kt)("p",null,"\u9009\u62e9\u9700\u8981\u64cd\u4f5c\u7684\u6570\u636e\u6e90\uff0c\u8f93\u5165SQL\u540e\uff0c\u70b9\u51fbSQL\u5ba1\u6838\u56fe\u6807\uff0c\u5bf9\u7f16\u5199\u7684SQL \u8fdb\u884c\u89c4\u5219\u5ba1\u6838\uff1b"),(0,n.kt)("h4",{id:"\u64cd\u4f5c\u7ed3\u679c"},"\u64cd\u4f5c\u7ed3\u679c"),(0,n.kt)("p",null,"\u83b7\u53d6\u4f18\u5316\u5efa\u8bae\uff1b\n",(0,n.kt)("img",{alt:"error",src:l(7772).Z,width:"2940",height:"1606"})),(0,n.kt)("h3",{id:"\u5ba1\u6838\u62e6\u622a\u573a\u666f"},"\u5ba1\u6838\u62e6\u622a\u573a\u666f"),(0,n.kt)("p",null,"\u5047\u8bbe\u6570\u636e\u5e93\u5305\u542b\u91cd\u8981\u7684\u4ea4\u6613\u4fe1\u606f\u3002\u4e3a\u4e86\u9632\u6b62\u4e0d\u5f53\u67e5\u8be2\u5bfc\u81f4\u6570\u636e\u88ab\u5220\u9664\uff0c\u56e0\u6b64\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a\u62e6\u622a\u5ba1\u6838\u673a\u5236\uff0c\u8bc6\u522b\u9ad8\u5371\u7684SQL\u64cd\u4f5c\uff0c\u4fdd\u969c\u6570\u636e\u5e93\u6570\u636e\u5b89\u5168\u3002"),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e00-sqle\u5e73\u53f0\u914d\u7f6e\u7528\u6237\u53ca\u89d2\u8272"},"\u6b65\u9aa4\u4e00 SQLE\u5e73\u53f0\u914d\u7f6e\u7528\u6237\u53ca\u89d2\u8272"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u7528\u6237A\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u6709SQL\u67e5\u8be2\u6743\u9650\u7684\u89d2\u8272\uff1aSQL\u67e5\u8be2\uff1b")),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e8c-sqle\u5e73\u53f0\u914d\u7f6e\u6570\u636e\u5e93\u5b9e\u4f8b\u5ba1\u6838\u7b49\u7ea7"},"\u6b65\u9aa4\u4e8c SQLE\u5e73\u53f0\u914d\u7f6e\u6570\u636e\u5e93\u5b9e\u4f8b\u5ba1\u6838\u7b49\u7ea7"),(0,n.kt)("p",null,"\u8fdb\u5165\u9879\u76ee\uff0c\u521b\u5efa/\u4fee\u6539\u4e00\u4e2a\u6570\u636e\u6e90\u5b9e\u4f8bA, \u5728\u914d\u7f6e\u4e2d\u5f00\u542fSQL\u5de5\u4f5c\u53f0\u67e5\u8be2\u5ba1\u6838\uff0c\u5e76\u8bbe\u7f6e\u8fd0\u884c\u67e5\u8be2\u7684\u6700\u9ad8\u5ba1\u6838\u7b49\u7ea7\uff1b"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u542b\u4e49"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SQL\u5de5\u4f5c\u53f0\u67e5\u8be2\u662f\u5426\u9700\u8981\u5ba1\u6838"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53ea\u6709\u5f00\u542f\u6b64\u9879\uff0c\u624d\u4f1a\u5728\u6267\u884cSQL\u67e5\u8be2\u65f6\u8fdb\u884c\u5ba1\u6838")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u67e5\u8be2\u7684\u6700\u9ad8\u5ba1\u6838\u7b49\u7ea7"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u5ba1\u6838\u7b49\u7ea7\u4f4e\u4e8e\u6216\u7b49\u4e8e\u8fd9\u4e2a\u7b49\u7ea7\u5c06\u4f1a\u653e\u884c, \u9ad8\u4e8e\u8fd9\u4e2a\u7b49\u7ea7\u5c06\u65e0\u6cd5\u6267\u884c")))),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e09-sqle\u5e73\u53f0\u914d\u7f6e\u6210\u5458\u6743\u9650"},"\u6b65\u9aa4\u4e09 SQLE\u5e73\u53f0\u914d\u7f6e\u6210\u5458\u6743\u9650"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u9879\u76ee\u5185\u6dfb\u52a0\u6210\u5458A\uff0c\u5e76\u8bbe\u7f6eA\u5728\u5b9e\u4f8btest\u4e0a\u6709SQL\u67e5\u8be2\u7684\u89d2\u8272\uff1b")),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u56db-\u767b\u5f55cloudbeaver"},"\u6b65\u9aa4\u56db \u767b\u5f55CloudBeaver"),(0,n.kt)("p",null,"\u5207\u6362\u6210\u5458A\u8d26\u53f7\u540e\uff0c\u70b9\u51fbSQL\u5de5\u4f5c\u53f0\u8df3\u8f6cCloudBeaver\uff0cSQLE\u5c06\u4f1a\u81ea\u52a8\u4f7f\u7528\u5f53\u524dSQLE\u7528\u6237\u767b\u5f55CloudBeaver\u3002"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u82e5\u5f53\u524d\u7528\u6237\u65e0SQL\u67e5\u8be2\u6743\u9650\uff0c\u5219\u65e0\u6743\u767b\u5f55\u3002")),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e94-\u4e0b\u53d1sql"},"\u6b65\u9aa4\u4e94 \u4e0b\u53d1SQL"),(0,n.kt)("p",null,"\u9009\u62e9\u9700\u8981\u64cd\u4f5c\u7684\u6570\u636e\u6e90\uff0c\u5e76\u8f93\u5165SQL\u8bed\u53e5\u70b9\u51fb\u8fd0\u884c\uff0c\u53ef\u67e5\u770bSQL\u67e5\u8be2\u7ed3\u679c"),(0,n.kt)("h4",{id:"\u64cd\u4f5c\u7ed3\u679c-1"},"\u64cd\u4f5c\u7ed3\u679c"),(0,n.kt)("p",null,"\u5ba1\u6838\u5931\u8d25\u7684SQL\u5c06\u4f1a\u88ab\u62e6\u622a, \u5e76\u62a5\u51fa\u9519\u8bef, \u53ef\u4ee5\u70b9\u51fb\u8be6\u60c5\u67e5\u770b\u9519\u8bef\u8be6\u60c5\n",(0,n.kt)("img",{alt:"error",src:l(62159).Z,width:"1879",height:"873"})),(0,n.kt)("p",null,"\u6309\u8981\u6c42\u4fee\u6539SQL, \u518d\u6b21\u6267\u884c, \u5982\u679c\u5ba1\u6838\u901a\u8fc7\u5c06\u4f1a\u6267\u884c\u5f53\u524dSQL\n",(0,n.kt)("img",{alt:"success",src:l(40161).Z,width:"1879",height:"873"})),(0,n.kt)("h3",{id:"\u6743\u9650\u63a7\u5236\u573a\u666f"},"\u6743\u9650\u63a7\u5236\u573a\u666f"),(0,n.kt)("p",null,"\u5047\u8bbe\u516c\u53f8\u9700\u8981\u786e\u4fdd\u5f00\u53d1\u56e2\u961f\u548c\u4e1a\u52a1\u5206\u6790\u5e08\u53ea\u80fd\u8bbf\u95ee\u4ed6\u4eec\u5de5\u4f5c\u6240\u9700\u7684\u6570\u636e\uff0c\u65e0\u6cd5\u76f4\u63a5\u4fee\u6539\u539f\u59cb\u6570\u636e\uff0c\u6240\u6709\u5bf9\u751f\u4ea7\u6570\u636e\u7684\u53d8\u66f4\u90fd\u7ecf\u8fc7\u4e25\u683c\u5ba1\u6279\uff0c\u53ef\u4ee5\u5bf9\u7528\u6237\u6570\u636e\u5e93\u64cd\u4f5c\u8fdb\u884c\u7cbe\u7ec6\u5316\u8bbf\u95ee\u63a7\u5236\uff0c\u786e\u4fdd\u7528\u6237\u53ea\u80fd\u6267\u884c\u5176\u88ab\u6388\u6743\u7684\u64cd\u4f5c\u3002"),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e00-sqle\u5e73\u53f0\u914d\u7f6e\u7528\u6237\u53ca\u89d2\u8272-1"},"\u6b65\u9aa4\u4e00 SQLE\u5e73\u53f0\u914d\u7f6e\u7528\u6237\u53ca\u89d2\u8272"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u7528\u6237A\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u62e5\u6709SQL\u67e5\u8be2\u6743\u9650\u7684\u89d2\u8272\uff1aSQL\u67e5\u8be2\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u62e5\u6709\u521b\u5efa\u5de5\u5355\u6743\u9650\u7684\u89d2\u8272\uff1a\u521b\u5efa\u5de5\u5355\uff1b")),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e8c-sqle\u5e73\u53f0\u914d\u7f6e\u6210\u5458\u6743\u9650-1"},"\u6b65\u9aa4\u4e8c SQLE\u5e73\u53f0\u914d\u7f6e\u6210\u5458\u6743\u9650"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u9879\u76ee\u5185\u6dfb\u52a0\u6570\u636e\u6e90",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b1:testread\uff0c\u8fde\u63a5\u8d26\u53f7\u4ec5\u62e5\u6709\u8bfb\u53d6\u6743\u9650\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b2:testwrite\uff0c\u8fde\u63a5\u8d26\u53f7\u62e5\u6709\u8bfb\u5199\u6743\u9650\uff1b"))),(0,n.kt)("li",{parentName:"ul"},"\u5728\u9879\u76ee\u5185\u6dfb\u52a0\u6210\u5458A\uff0c\u5e76\u8bbe\u7f6eA\u7684\u6743\u9650\u4e3a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u5b9e\u4f8btestread\u4e0a\u6709SQL\u67e5\u8be2\u7684\u89d2\u8272\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u5b9e\u4f8btestwrite\u4e0a\u6709\u521b\u5efa\u5de5\u5355\u7684\u89d2\u8272\uff1b")))),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e09-\u767b\u5f55cloudbeaver-1"},"\u6b65\u9aa4\u4e09 \u767b\u5f55CloudBeaver"),(0,n.kt)("p",null,"\u5207\u6362\u6210\u5458A\u8d26\u53f7\u540e\uff0c\u70b9\u51fbSQL\u5de5\u4f5c\u53f0\u8df3\u8f6cCloudBeaver\uff0cSQLE\u5c06\u4f1a\u81ea\u52a8\u4f7f\u7528\u5f53\u524dSQLE\u7528\u6237\u767b\u5f55CloudBeaver\u3002 "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u770b\u5230\u6709\u5b9e\u4f8btestread\uff08\u56e0\u4e3a\u5728\u8fd9\u4e2a\u5b9e\u4f8b\u4e0a\u5177\u5907SQL\u67e5\u8be2\u6743\u9650\uff09\uff1b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f46\u7531\u4e8e\u8fde\u63a5\u8d26\u53f7\u53ea\u6709\u8bfb\u53d6\u6743\u9650\uff0c\u6240\u4ee5\u65e0\u6cd5\u901a\u8fc7CloudBeaver\u8fdb\u884c\u6570\u636e\u53d8\u66f4\uff1b"))),(0,n.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u770b\u5230\u5b9e\u4f8btestwrite\uff08\u56e0\u4e3a\u5728\u8fd9\u4e2a\u5b9e\u4f8b\u4e0a\u4e0d\u5177\u5907SQL\u67e5\u8be2\u6743\u9650\uff09\uff1b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f46\u53ef\u4ee5\u5bf9\u5b9e\u4f8btestwrite\u521b\u5efa\u53d8\u66f4\u5de5\u5355\uff0c\u63d0\u4ea4\u6570\u636e\u53d8\u66f4\u7533\u8bf7\u3002")))))}c.isMDXComponent=!0},7772:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/auditsuggestion-67c891910b2d0b780c2afffb8e65b364.png"},62159:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/error-17b1e3ff87ad8bdc3d99e7fbf391cf8a.png"},40161:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/success-6c0e71f4281307e206a26548a793ff8e.png"}}]);