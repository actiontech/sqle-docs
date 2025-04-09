"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[2027],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>k});var r=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var u=r.createContext({}),d=function(e){var t=r.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(l),m=n,k=p["".concat(u,".").concat(m)]||p[m]||s[m]||a;return l?r.createElement(k,i(i({ref:t},c),{},{components:l})):r.createElement(k,i({ref:t},c))}));function k(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<a;d++)i[d]=l[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"},15820:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=l(87462),n=(l(67294),l(3905));const a={},i="SQL\u4e0b\u94bb\u5206\u6790",o={unversionedId:"user-manual/project/audit_task/SQLdrilldown",id:"user-manual/project/audit_task/SQLdrilldown",title:"SQL\u4e0b\u94bb\u5206\u6790",description:"\u529f\u80fd\u6982\u8ff0",source:"@site/docs/user-manual/project/audit_task/SQLdrilldown.md",sourceDirName:"user-manual/project/audit_task",slug:"/user-manual/project/audit_task/SQLdrilldown",permalink:"/sqle-docs/docs/user-manual/project/audit_task/SQLdrilldown",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/docs/user-manual/project/audit_task/SQLdrilldown.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SQL\u7ba1\u63a7",permalink:"/sqle-docs/docs/user-manual/project/audit_task/sqlmanage"},next:{title:"\u5e93\u8868\u5143\u6570\u636e",permalink:"/sqle-docs/docs/user-manual/project/audit_task/metadata_audit"}},u={},d=[{value:"\u529f\u80fd\u6982\u8ff0",id:"\u529f\u80fd\u6982\u8ff0",level:2},{value:"\u529f\u80fd\u7528\u9014",id:"\u529f\u80fd\u7528\u9014",level:3},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:3},{value:"\u4e3b\u8981\u7279\u70b9",id:"\u4e3b\u8981\u7279\u70b9",level:3},{value:"\u9884\u671f\u6548\u679c",id:"\u9884\u671f\u6548\u679c",level:3},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u64cd\u4f5c\u6307\u5357",id:"\u64cd\u4f5c\u6307\u5357",level:2},{value:"\u529f\u80fd\u5165\u53e3\u4f4d\u7f6e",id:"\u529f\u80fd\u5165\u53e3\u4f4d\u7f6e",level:3},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:3},{value:"\u4f7f\u7528\u89c4\u5219",id:"\u4f7f\u7528\u89c4\u5219",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u4f7f\u7528\u5efa\u8bae",id:"\u4f7f\u7528\u5efa\u8bae",level:3}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sql\u4e0b\u94bb\u5206\u6790"},"SQL\u4e0b\u94bb\u5206\u6790"),(0,n.kt)("h2",{id:"\u529f\u80fd\u6982\u8ff0"},"\u529f\u80fd\u6982\u8ff0"),(0,n.kt)("h3",{id:"\u529f\u80fd\u7528\u9014"},"\u529f\u80fd\u7528\u9014"),(0,n.kt)("p",null,"SQL\u4e0b\u94bb\u529f\u80fd\u5e2e\u52a9\u7528\u6237\u8ffd\u8e2a\u548c\u5206\u6790SQL\u67e5\u8be2\u6027\u80fd\u53d8\u5316\uff0c\u7cbe\u786e\u5b9a\u4f4d\u6027\u80fd\u52a3\u5316\u7684\u65f6\u95f4\u70b9\u548c\u539f\u56e0\uff0c\u4ece\u800c\u5feb\u901f\u89e3\u51b3SQL\u67e5\u8be2\u6027\u80fd\u95ee\u9898\u3002"),(0,n.kt)("h3",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u539f\u672c\u9ad8\u6548\u7684SQL\u67e5\u8be2\u7a81\u7136\u53d8\u5f97\u7f13\u6162\u65f6\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u8ffd\u6eafSQL\u6027\u80fd\u53d8\u5316\u5386\u53f2\u65f6\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u60f3\u8981\u5bf9\u6bd4\u4e0d\u540c\u65f6\u95f4\u70b9\u7684SQL\u6267\u884c\u8ba1\u5212\u5dee\u5f02\u65f6\u3002")),(0,n.kt)("h3",{id:"\u4e3b\u8981\u7279\u70b9"},"\u4e3b\u8981\u7279\u70b9"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5386\u53f2\u6027\u80fd\u66f2\u7ebf\u53ef\u89c6\u5316\u5c55\u793a\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u8bc6\u522b\u6027\u80fd\u7a81\u53d8\u7684\u5173\u952e\u65f6\u95f4\u70b9\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6267\u884c\u8ba1\u5212\u667a\u80fd\u5bf9\u6bd4\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u952e\u5b9a\u4f4d\u6027\u80fd\u52a3\u5316\u6839\u56e0\u3002")),(0,n.kt)("h3",{id:"\u9884\u671f\u6548\u679c"},"\u9884\u671f\u6548\u679c"),(0,n.kt)("p",null,"\u5feb\u901f\u53d1\u73b0\u5e76\u89e3\u51b3SQL\u6027\u80fd\u95ee\u9898\uff0c\u907f\u514d\u56e0\u67e5\u8be2\u6548\u7387\u4f4e\u4e0b\u800c\u5f71\u54cd\u7cfb\u7edf\u6574\u4f53\u6027\u80fd\uff0c\u63d0\u9ad8\u6570\u636e\u5e93\u8fd0\u7ef4\u548c\u4f18\u5316\u7684\u5de5\u4f5c\u6548\u7387\u3002"),(0,n.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5f00\u542fSQL\u7ba1\u63a7\u914d\u7f6e\uff0c\u7ba1\u63a7\u5982\u6162SQL\u3001TopSQL\u7b49\u6570\u636e\u5bf9\u8c61\u3002")),(0,n.kt)("h2",{id:"\u64cd\u4f5c\u6307\u5357"},"\u64cd\u4f5c\u6307\u5357"),(0,n.kt)("h3",{id:"\u529f\u80fd\u5165\u53e3\u4f4d\u7f6e"},"\u529f\u80fd\u5165\u53e3\u4f4d\u7f6e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SQL\u7ba1\u63a7\u9875\u9762\uff0c\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"SQL\u5206\u6790"),"\u3002")),(0,n.kt)("h3",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u9009\u62e9\u9700\u8981\u5206\u6790\u7684SQL\u8bed\u53e5\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u67e5\u770b",(0,n.kt)("inlineCode",{parentName:"li"},"Cost\u8d8b\u52bf"),"\u66f2\u7ebf\u56fe\u4e86\u89e3\u6027\u80fd\u53d8\u5316\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5b9a\u4f4d\u6027\u80fd\u7a81\u53d8\u7684\u5173\u952e\u65f6\u95f4\u70b9\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"li"},"\u6267\u884c\u8ba1\u5212\u5bf9\u6bd4"),"\u6309\u94ae\uff0c\u67e5\u770b\u524d\u540e\u6267\u884c\u8ba1\u5212\u7684\u5dee\u5f02\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u6839\u636e\u6bd4\u5bf9\u7ed3\u679c\uff0c\u786e\u5b9a\u6027\u80fd\u52a3\u5316\u7684\u6839\u672c\u539f\u56e0\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"drilldown",src:l(8420).Z,width:"1666",height:"990"})),(0,n.kt)("h2",{id:"\u4f7f\u7528\u89c4\u5219"},"\u4f7f\u7528\u89c4\u5219"),(0,n.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5e73\u53f0\u4fdd\u5b5830\u5929\u5386\u53f2\u6570\u636e\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6267\u884c\u8ba1\u5212\u7684\u53d8\u5316\u53ef\u80fd\u53d7\u591a\u79cd\u56e0\u7d20\u5f71\u54cd\uff0c\u8bf7\u7efc\u5408\u5206\u6790\u3002")),(0,n.kt)("h3",{id:"\u4f7f\u7528\u5efa\u8bae"},"\u4f7f\u7528\u5efa\u8bae"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b9a\u671f\u4f7f\u7528\u6b64\u529f\u80fd\u68c0\u67e5\u5173\u952eSQL\u7684\u6027\u80fd\u53d8\u5316\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u7cfb\u7edf\u73af\u5883\u53d1\u751f\u53d8\u66f4\u540e\uff0c\u53ca\u65f6\u5206\u6790\u91cd\u8981SQL\u7684\u6267\u884c\u60c5\u51b5\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5c06\u53d1\u73b0\u7684\u6027\u80fd\u95ee\u9898\u53ca\u65f6\u8bb0\u5f55\u5e76\u89e3\u51b3\uff0c\u907f\u514d\u95ee\u9898\u7d2f\u79ef\u3002")))}p.isMDXComponent=!0},8420:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/drilldown-d925fc1bd47fb5d9adc0d77b9a6ca15c.png"}}]);