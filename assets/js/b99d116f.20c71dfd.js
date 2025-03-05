"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[9149],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(r),m=l,v=s["".concat(i,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function v(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[s]="string"==typeof e?e:l,o[1]=u;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const a={title:"\u63a8\u9001\u89c4\u5219\u914d\u7f6e"},o="\u63a8\u9001\u89c4\u5219\u914d\u7f6e",u={unversionedId:"user-manual/project/push-rule",id:"version-v3/user-manual/project/push-rule",title:"\u63a8\u9001\u89c4\u5219\u914d\u7f6e",description:"\u7528\u6237\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u9879\u76ee\u8bbe\u7f6e\u7279\u5b9a\u7684\u63a8\u9001\u89c4\u5219\uff0c\u5305\u62ec\u5de5\u5355\u53d8\u66f4\u548c\u9ad8\u4f18\u5148\u7ea7SQL\u7684\u901a\u77e5\uff0c\u786e\u4fdd\u5173\u952e\u4fe1\u606f\u4e0d\u9057\u6f0f\uff0c\u540c\u65f6\u52a0\u901f\u95ee\u9898\u8bc6\u522b\u4e0e\u5904\u7406\uff0c\u4f18\u5316\u51b3\u7b56\u6d41\u7a0b\u3002",source:"@site/versioned_docs/version-v3/user-manual/project/push-rule.md",sourceDirName:"user-manual/project",slug:"/user-manual/project/push-rule",permalink:"/sqle-docs/docs/v3/user-manual/project/push-rule",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/versioned_docs/version-v3/user-manual/project/push-rule.md",tags:[],version:"v3",frontMatter:{title:"\u63a8\u9001\u89c4\u5219\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"\u64cd\u4f5c\u8bb0\u5f55",permalink:"/sqle-docs/docs/v3/user-manual/project/operation_records"},next:{title:"\u6570\u636e\u5bfc\u51fa",permalink:"/sqle-docs/docs/v3/user-manual/project/dataexport"}},i={},c=[{value:"\u524d\u7f6e\u64cd\u4f5c",id:"\u524d\u7f6e\u64cd\u4f5c",level:2},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"1. \u8bbf\u95ee\u63a8\u9001\u89c4\u5219\u8bbe\u7f6e",id:"1-\u8bbf\u95ee\u63a8\u9001\u89c4\u5219\u8bbe\u7f6e",level:3},{value:"2. \u5f00\u542f\u63a8\u9001\u529f\u80fd",id:"2-\u5f00\u542f\u63a8\u9001\u529f\u80fd",level:3},{value:"3. \u4fdd\u5b58\u5e76\u6d4b\u8bd5",id:"3-\u4fdd\u5b58\u5e76\u6d4b\u8bd5",level:3},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:2}],p={toc:c};function s(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u63a8\u9001\u89c4\u5219\u914d\u7f6e"},"\u63a8\u9001\u89c4\u5219\u914d\u7f6e"),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u9879\u76ee\u8bbe\u7f6e\u7279\u5b9a\u7684\u63a8\u9001\u89c4\u5219\uff0c\u5305\u62ec\u5de5\u5355\u53d8\u66f4\u548c\u9ad8\u4f18\u5148\u7ea7SQL\u7684\u901a\u77e5\uff0c\u786e\u4fdd\u5173\u952e\u4fe1\u606f\u4e0d\u9057\u6f0f\uff0c\u540c\u65f6\u52a0\u901f\u95ee\u9898\u8bc6\u522b\u4e0e\u5904\u7406\uff0c\u4f18\u5316\u51b3\u7b56\u6d41\u7a0b\u3002"),(0,l.kt)("h2",{id:"\u524d\u7f6e\u64cd\u4f5c"},"\u524d\u7f6e\u64cd\u4f5c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u5728\u5168\u5c40\u8bbe\u7f6e\u4e2d\u5df2\u5f00\u542f\u7279\u5b9a\u7684\u6d88\u606f\u63a8\u9001\u80fd\u529b\uff0c\u5982\u98de\u4e66\u3001\u9489\u9489\u3001\u4f01\u4e1a\u5fae\u4fe1\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u6210\u5458\u6743\u9650\u5df2\u6b63\u786e\u914d\u7f6e\uff0c\u4ee5\u907f\u514d\u6743\u9650\u95ee\u9898\u5f71\u54cd\u63a8\u9001\u529f\u80fd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u5df2\u5728SQL\u7ba1\u63a7\u914d\u7f6e\u4e2d\u8bbe\u5b9a\u4e86\u9ad8\u4f18\u5148\u7ea7SQL\u7684\u6807\u51c6\uff0c\u4ee5\u4fbf\u6b63\u786e\u8bc6\u522b\u548c\u63a8\u9001\u76f8\u5173\u901a\u77e5\u3002")),(0,l.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,l.kt)("h3",{id:"1-\u8bbf\u95ee\u63a8\u9001\u89c4\u5219\u8bbe\u7f6e"},"1. \u8bbf\u95ee\u63a8\u9001\u89c4\u5219\u8bbe\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u9879\u76ee\u914d\u7f6e\u4e2d\u70b9\u51fb",(0,l.kt)("inlineCode",{parentName:"li"},"\u63a8\u9001\u89c4\u5219"),"\u9009\u9879\u3002")),(0,l.kt)("h3",{id:"2-\u5f00\u542f\u63a8\u9001\u529f\u80fd"},"2. \u5f00\u542f\u63a8\u9001\u529f\u80fd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63a8\u9001\u89c4\u5219\u9875\u9762\uff0c\u9009\u62e9\u9700\u8981\u5f00\u542f\u7684\u63a8\u9001\u529f\u80fd\u9879\uff0c\u76ee\u524d\u652f\u6301\u914d\u7f6e\u5de5\u5355\u63a8\u9001\u53caSQL\u7ba1\u63a7\u95ee\u9898\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528crontab\u683c\u5f0f\u914d\u7f6e\u81ea\u5b9a\u4e49\u7684\u63a8\u9001\u9891\u7387\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u65f6\u95f4\u9700\u6c42\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6d88\u606f\u63a5\u6536\u4eba\uff0c\u53ef\u4ee5\u9009\u62e9\u6839\u636e\u6743\u9650\u5339\u914d\u7684\u6210\u5458\uff0c\u6216\u8005\u76f4\u63a5\u6307\u5b9a\u7279\u5b9a\u7684\u6210\u5458\u3002")),(0,l.kt)("h3",{id:"3-\u4fdd\u5b58\u5e76\u6d4b\u8bd5"},"3. \u4fdd\u5b58\u5e76\u6d4b\u8bd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u6210\u914d\u7f6e\u540e\uff0c\u4fdd\u5b58\u8bbe\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8fdb\u884c\u6d4b\u8bd5\u4ee5\u786e\u4fdd\u63a8\u9001\u529f\u80fd\u6309\u9884\u671f\u5de5\u4f5c\u3002\u53ef\u4ee5\u901a\u8fc7\u6a21\u62df\u5de5\u5355\u72b6\u6001\u53d8\u66f4\u6216\u9ad8\u4f18\u5148\u7ea7SQL\u95ee\u9898\u6765\u6d4b\u8bd5\u63a8\u9001\u6548\u679c\u3002")),(0,l.kt)("h2",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5229\u7528\u63a8\u9001\u529f\u80fd\uff0c\u5173\u6ce8\u5de5\u5355\u72b6\u6001\u53d8\u66f4\uff0c\u53ca\u65f6\u8fdb\u884c\u5de5\u5355\u5ba1\u6279\u53ca\u4e0a\u7ebf\u64cd\u4f5c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5229\u7528\u63a8\u9001\u529f\u80fd\uff0c\u5173\u6ce8SQL\u7ba1\u63a7\u4e2d\u6807\u8bb0\u4e3a\u9ad8\u4f18\u5148\u7ea7\u7684SQL\uff0c\u907f\u514d\u6f5c\u5728\u7684\u6027\u80fd\u95ee\u9898\u3002")))}s.isMDXComponent=!0}}]);