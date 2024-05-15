"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[8538],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=l,k=s["".concat(o,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(k,u(u({ref:t},p),{},{components:r})):n.createElement(k,u({ref:t},p))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,u=new Array(a);u[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[s]="string"==typeof e?e:l,u[1]=i;for(var c=2;c<a;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),l=(r(7294),r(3905));const a={title:"SQL\u5ba1\u6838"},u="SQL\u5feb\u6377\u5ba1\u6838",i={unversionedId:"user-manual/project/quick_audit",id:"user-manual/project/quick_audit",title:"SQL\u5ba1\u6838",description:"\u672c\u6587\u4ecb\u7ecd\u5e73\u53f0\u7684SQL\u5ba1\u6838\u529f\u80fd\uff0c\u8be5\u529f\u80fd\u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u5ba1\u6838SQL\u5e76\u4e86\u89e3\u4f18\u5316\u5efa\u8bae\u3002",source:"@site/docs/user-manual/project/quick_audit.md",sourceDirName:"user-manual/project",slug:"/user-manual/project/quick_audit",permalink:"/sqle-docs/docs/user-manual/project/quick_audit",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/docs/user-manual/project/quick_audit.md",tags:[],version:"current",frontMatter:{title:"SQL\u5ba1\u6838"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5bfc\u51fa",permalink:"/sqle-docs/docs/user-manual/project/dataexport"},next:{title:"IDE\u5ba1\u6838",permalink:"/sqle-docs/docs/user-manual/project/IDEaudit"}},o={},c=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"\u8f93\u5165\u5ba1\u6838\u6807\u7b7e",id:"\u8f93\u5165\u5ba1\u6838\u6807\u7b7e",level:3},{value:"\u9009\u62e9\u5ba1\u6838\u6a21\u5f0f",id:"\u9009\u62e9\u5ba1\u6838\u6a21\u5f0f",level:3},{value:"\u8f93\u5165\u5f85\u5ba1\u6838SQL",id:"\u8f93\u5165\u5f85\u5ba1\u6838sql",level:3},{value:"\u70b9\u51fb\u7acb\u5373\u5ba1\u6838\uff0c\u83b7\u5f97\u5ba1\u6838\u7ed3\u679c",id:"\u70b9\u51fb\u7acb\u5373\u5ba1\u6838\u83b7\u5f97\u5ba1\u6838\u7ed3\u679c",level:3},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:2},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:2}],p={toc:c};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sql\u5feb\u6377\u5ba1\u6838"},"SQL\u5feb\u6377\u5ba1\u6838"),(0,l.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5e73\u53f0\u7684SQL\u5ba1\u6838\u529f\u80fd\uff0c\u8be5\u529f\u80fd\u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u5ba1\u6838SQL\u5e76\u4e86\u89e3\u4f18\u5316\u5efa\u8bae\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,l.kt)("p",null,"\u5f53\u7528\u6237\u9700\u8981\u5feb\u901f\u5ba1\u6838SQL\u5e76\u4e86\u89e3\u53ef\u4f18\u5316\u70b9\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u5e73\u53f0\u7684SQL\u5ba1\u6838\u529f\u80fd\uff0c\u5feb\u901f\u83b7\u53d6\u5ba1\u6838\u7ed3\u679c\u3002\u76f8\u8f83\u4e8eSQL\u5de5\u5355\uff0cSQL\u5ba1\u6838\u66f4\u6ce8\u91cd\u7528\u6237\u5feb\u901f\u81ea\u68c0\uff0c\u5176\u76ee\u7684\u662f\u83b7\u53d6\u5ba1\u6838\u7ed3\u679c\u3002\u800cSQL\u5de5\u5355\u9664\u4e86\u83b7\u53d6\u5e73\u53f0\u7684\u5ba1\u6838\u7ed3\u679c\u5916\uff0c\u66f4\u4fa7\u91cdSQL\u7684\u6807\u51c6\u5316\u4e0a\u7ebf\u3002"),(0,l.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,l.kt)("p",null,"\u7528\u6237\u9700\u8981\u8fdb\u5165\u9879\u76ee\u9875\u9762\u624d\u80fd\u4f7f\u7528SQL\u5ba1\u6838\u529f\u80fd\u3002"),(0,l.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,l.kt)("p",null,"\u7528\u6237\u70b9\u51fb\u5de6\u4fa7\u83dc\u5355\u680f\u7684SQL\u5ba1\u6838\u6807\u7b7e\uff0c\u8fdb\u5165SQL\u5ba1\u6838\u5217\u8868\u9875\u9762\uff0c\u70b9\u51fb'\u65b0\u5efa'\u6309\u94ae\u3002"),(0,l.kt)("h3",{id:"\u8f93\u5165\u5ba1\u6838\u6807\u7b7e"},"\u8f93\u5165\u5ba1\u6838\u6807\u7b7e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u6807\u7b7e\u6765\u533a\u5206SQL\u7684\u6027\u8d28\u3001\u6765\u6e90\u7b49\u7279\u6027\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u5e73\u53f0\u9ed8\u8ba4\u63d0\u4f9b\u4e24\u79cd\u6807\u7b7e\uff0c\u7528\u6237\u53ef\u6839\u636e\u9700\u8981\u65b0\u5efa\u6807\u7b7e\uff1b")),(0,l.kt)("h3",{id:"\u9009\u62e9\u5ba1\u6838\u6a21\u5f0f"},"\u9009\u62e9\u5ba1\u6838\u6a21\u5f0f"),(0,l.kt)("p",null,"\u5e73\u53f0\u9ed8\u8ba4\u63d0\u4f9b\u4e24\u79cd\u5ba1\u6838\u6a21\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9759\u6001\u5ba1\u6838\uff1a\u8131\u5e93\u5ba1\u6838\uff0c\u65e0\u9700\u9009\u62e9\u6570\u636e\u6e90\u548c\u6570\u636e\u5e93\uff0c\u4f46\u9700\u8981\u9009\u62e9SQL\u5bf9\u5e94\u7684\u6570\u636e\u6e90\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001\u5ba1\u6838\uff1a\u8fde\u5e93\u5ba1\u6838\uff0c\u9700\u8981\u6307\u5b9a\u6570\u636e\u6e90\u3001\u6570\u636e\u5e93\uff1b")),(0,l.kt)("h3",{id:"\u8f93\u5165\u5f85\u5ba1\u6838sql"},"\u8f93\u5165\u5f85\u5ba1\u6838SQL"),(0,l.kt)("p",null,"\u5e73\u53f0\u5f53\u524d\u63d0\u4f9b5\u79cd\u5ba1\u6838\u65b9\u5f0f\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684SQL\u573a\u666f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u7ebf\u8f93\u5165\uff1a\u76f4\u63a5\u5728\u754c\u9762\u4e0a\u8f93\u5165SQL\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e0a\u4f20XML\u6587\u4ef6\uff1a\u4e0a\u4f20\u5305\u542bSQL\u7684XML\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e0a\u4f20SQL\u6587\u4ef6\uff1a\u4e0a\u4f20SQL\u6587\u4ef6\u8fdb\u884c\u5ba1\u6838\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e0a\u4f20ZIP\u6587\u4ef6\uff1a\u4e0a\u4f20\u5305\u542b\u591a\u4e2aSQL\u6587\u4ef6\u7684ZIP\u6587\u4ef6\u8fdb\u884c\u5ba1\u6838\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6eGIT\u4ed3\u5e93\uff1a\u4eceGIT\u4ed3\u5e93\u4e2d\u83b7\u53d6SQL\u6587\u4ef6\u8fdb\u884c\u5ba1\u6838\u3002")),(0,l.kt)("h3",{id:"\u70b9\u51fb\u7acb\u5373\u5ba1\u6838\u83b7\u5f97\u5ba1\u6838\u7ed3\u679c"},"\u70b9\u51fb\u7acb\u5373\u5ba1\u6838\uff0c\u83b7\u5f97\u5ba1\u6838\u7ed3\u679c"),(0,l.kt)("p",null,"\u5b8c\u6210SQL\u8f93\u5165\u540e\uff0c\u7528\u6237\u70b9\u51fb",(0,l.kt)("inlineCode",{parentName:"p"},"\u7acb\u5373\u5ba1\u6838"),"\u6309\u94ae\uff0c\u83b7\u5f97\u5e73\u53f0\u7ed9\u51fa\u7684\u5ba1\u6838\u5efa\u8bae"),(0,l.kt)("h2",{id:"\u6267\u884c\u7ed3\u679c"},"\u6267\u884c\u7ed3\u679c"),(0,l.kt)("p",null,"\u5ba1\u6838\u5b8c\u6210\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u67e5\u770b\u5ba1\u6838\u7ed3\u679c\u5e76\u5728SQL\u5ba1\u6838\u5217\u8868\u4e2d\u67e5\u770b\u751f\u6210\u7684\u5ba1\u6838\u8bb0\u5f55\u3002\n",(0,l.kt)("img",{alt:"quick-audit",src:r(2727).Z,width:"2940",height:"1602"})),(0,l.kt)("h2",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,l.kt)("p",null,"\u6dfb\u52a0\u4e86\u6807\u7b7e\u7684SQL\u5ba1\u6838\u8bb0\u5f55\u5c06\u8fdb\u5165SQL\u7ba1\u63a7\u5217\u8868\u9875\u9762\uff0c\u7528\u6237\u53ef\u4ee5\u5728",(0,l.kt)("a",{parentName:"p",href:"/sqle-docs/docs/user-manual/project/sqlmanage"},"\u7ba1\u63a7\u5217\u8868"),"\u9875\u9762\u7edf\u4e00\u7ba1\u7406SQL\u3002"))}s.isMDXComponent=!0},2727:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/quick-audit-c94804b4540e09492f7b55cb3c0af222.png"}}]);