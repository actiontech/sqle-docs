"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[3368],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>s});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=l.createContext({}),u=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},N=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=u(a),N=r,s=k["".concat(o,".").concat(N)]||k[N]||c[N]||n;return a?l.createElement(s,i(i({ref:t},m),{},{components:a})):l.createElement(s,i({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=N;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<n;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}N.displayName="MDXCreateElement"},68730:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>n,metadata:()=>p,toc:()=>u});var l=a(87462),r=(a(67294),a(3905));const n={title:"\u56de\u6eda\u5de5\u5355"},i=void 0,p={unversionedId:"user-manual/project/workflow/rollback",id:"version-v3/user-manual/project/workflow/rollback",title:"\u56de\u6eda\u5de5\u5355",description:"\u56de\u6eda\u5de5\u5355\u63d0\u4f9b\u4e86\u4e00\u5957\u5b8c\u6574\u7684\u6570\u636e\u53d8\u66f4\u4fdd\u62a4\u65b9\u6848\u3002\u5f53 SQL \u6267\u884c\u5bfc\u81f4\u610f\u5916\u7684\u6570\u636e\u4fee\u6539\u65f6\uff0c\u7cfb\u7edf\u80fd\u5feb\u901f\u5c06\u6570\u636e\u6062\u590d\u5230\u6b63\u786e\u72b6\u6001\u3002\u901a\u8fc7\u667a\u80fd\u5907\u4efd\u63a8\u8350\u3001\u591a\u6837\u5316\u5907\u4efd\u7b56\u7565\u548c\u4e00\u952e\u56de\u6eda\u80fd\u529b\uff0c\u786e\u4fdd\u6570\u636e\u53d8\u66f4\u7684\u53ef\u9760\u6027\u548c\u53ef\u6062\u590d\u6027\u3002",source:"@site/versioned_docs/version-v3/user-manual/project/workflow/rollback.md",sourceDirName:"user-manual/project/workflow",slug:"/user-manual/project/workflow/rollback",permalink:"/sqle-docs/docs/v3/user-manual/project/workflow/rollback",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/versioned_docs/version-v3/user-manual/project/workflow/rollback.md",tags:[],version:"v3",frontMatter:{title:"\u56de\u6eda\u5de5\u5355"},sidebar:"tutorialSidebar",previous:{title:"\u4e0a\u7ebf\u5de5\u5355",permalink:"/sqle-docs/docs/v3/user-manual/project/workflow/exec-workflow"},next:{title:"\u7248\u672c\u63a7\u5236",permalink:"/sqle-docs/docs/v3/user-manual/project/workflow/version-management"}},o={},u=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],m={toc:u};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u56de\u6eda\u5de5\u5355\u63d0\u4f9b\u4e86\u4e00\u5957\u5b8c\u6574\u7684\u6570\u636e\u53d8\u66f4\u4fdd\u62a4\u65b9\u6848\u3002\u5f53 SQL \u6267\u884c\u5bfc\u81f4\u610f\u5916\u7684\u6570\u636e\u4fee\u6539\u65f6\uff0c\u7cfb\u7edf\u80fd\u5feb\u901f\u5c06\u6570\u636e\u6062\u590d\u5230\u6b63\u786e\u72b6\u6001\u3002\u901a\u8fc7\u667a\u80fd\u5907\u4efd\u63a8\u8350\u3001\u591a\u6837\u5316\u5907\u4efd\u7b56\u7565\u548c\u4e00\u952e\u56de\u6eda\u80fd\u529b\uff0c\u786e\u4fdd\u6570\u636e\u53d8\u66f4\u7684\u53ef\u9760\u6027\u548c\u53ef\u6062\u590d\u6027\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u6570\u636e\u6279\u91cf\u66f4\u65b0\u540e\u53d1\u73b0\u903b\u8f91\u9519\u8bef",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u793a\u4f8b\uff1a\u4f1a\u5458\u79ef\u5206\u8ba1\u7b97\u89c4\u5219\u9519\u8bef\u5bfc\u81f4\u7684\u6279\u91cf\u79ef\u5206\u66f4\u65b0\u95ee\u9898"))),(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u5347\u7ea7\u540e\u9700\u8981\u56de\u9000\u6570\u636e\u53d8\u66f4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u793a\u4f8b\uff1a\u65b0\u529f\u80fd\u4e0a\u7ebf\u540e\u53d1\u73b0\u4e25\u91cd bug \u9700\u8981\u56de\u9000\u6570\u636e"))),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u8425\u64cd\u4f5c\u5931\u8bef\u9700\u8981\u6570\u636e\u6062\u590d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u793a\u4f8b\uff1a\u4fc3\u9500\u5546\u54c1\u4ef7\u683c\u8bbe\u7f6e\u9519\u8bef\u9700\u8981\u5feb\u901f\u4fee\u6b63")))),(0,r.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,r.kt)("p",null,"\u56de\u6eda\u529f\u80fd\u9700\u8981\u9884\u5148\u5f00\u542f\u5907\u4efd\u914d\u7f6e\uff0c\u652f\u6301\u4e24\u4e2a\u5c42\u7ea7\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u6e90\u7ea7\u522b\uff08\u63a8\u8350\uff09",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9002\u7528\uff1a\u5bf9\u6240\u6709\u4f7f\u7528\u8be5\u6570\u636e\u6e90\u7684\u5de5\u5355\u751f\u6548"))),(0,r.kt)("li",{parentName:"ul"},"\u5de5\u5355\u7ea7\u522b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9002\u7528\uff1a\u4ec5\u5bf9\u5f53\u524d\u5de5\u5355\u751f\u6548"),(0,r.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7\u9ad8\u4e8e\u6570\u636e\u6e90\u7ea7\u522b\u914d\u7f6e")))),(0,r.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u5907\u4efd\u7b56\u7565")),(0,r.kt)("p",null,"\u5728\u521b\u5efa\u5de5\u5355\u65f6\uff0c\u786e\u8ba4\u6216\u914d\u7f6e\u5907\u4efd\u7b56\u7565\uff1a"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u652f\u6301\u7684\u5907\u4efd\u7c7b\u578b")),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u53cd\u5411 SQL \u5907\u4efd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u751f\u6210\u53cd\u5411 SQL \u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u7b80\u5355\u7684\u6570\u636e\u4fee\u6539\u573a\u666f"))),(0,r.kt)("li",{parentName:"ol"},"\u884c\u7ea7\u5907\u4efd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u5b8c\u6574\u7684\u884c\u6570\u636e\u5386\u53f2"),(0,r.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u590d\u6742\u7684\u6570\u636e\u4fee\u6539\u573a\u666f"))),(0,r.kt)("li",{parentName:"ol"},"\u624b\u5de5\u5907\u4efd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u81ea\u5b9a\u4e49\u5907\u4efd\u65f6\u673a\u548c\u5185\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u7279\u6b8a\u4e1a\u52a1\u573a\u666f"))),(0,r.kt)("li",{parentName:"ol"},"\u65e0\u5907\u4efd\u6a21\u5f0f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u8fdb\u884c\u6570\u636e\u5907\u4efd"),(0,r.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u53ea\u8bfb\u6216\u6d4b\u8bd5\u573a\u666f")))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u667a\u80fd\u63a8\u8350\u903b\u8f91")),(0,r.kt)("p",{parentName:"admonition"},"\u7cfb\u7edf\u57fa\u4e8e\u4ee5\u4e0b\u56e0\u7d20\u81ea\u52a8\u63a8\u8350\u6700\u4f18\u5907\u4efd\u7b56\u7565\uff1a"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"SQL \u8bed\u53e5\u7c7b\u578b\uff1a\u5206\u6790 DML \u8bed\u53e5\u7684\u590d\u6742\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"\u5f71\u54cd\u6570\u636e\u91cf\uff1a\u8bc4\u4f30\u53d8\u66f4\u5f71\u54cd\u7684\u884c\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u590d\u6742\u5ea6\uff1a\u5224\u65ad\u662f\u5426\u6d89\u53ca\u591a\u8868\u3001\u89e6\u53d1\u5668\u7b49"))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u5de5\u5355"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u786e\u8ba4\u5907\u4efd\u914d\u7f6e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u5907\u4efd\u7b56\u7565\u662f\u5426\u7b26\u5408\u9884\u671f"),(0,r.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u5907\u4efd\u8303\u56f4\u662f\u5426\u5b8c\u6574"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u53d8\u66f4"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6309\u6b63\u5e38\u6d41\u7a0b\u6267\u884c\u5de5\u5355"),(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u81ea\u52a8\u5b8c\u6210\u6570\u636e\u5907\u4efd")))))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u56de\u6eda"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53d1\u8d77\u56de\u6eda"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u89e6\u53d1\u65f6\u673a\uff1a\u53d1\u73b0\u6570\u636e\u5f02\u5e38"),(0,r.kt)("li",{parentName:"ul"},"\u5165\u53e3\uff1a\u5de5\u5355\u8be6\u60c5 > \u56de\u6eda\u6309\u94ae"),(0,r.kt)("li",{parentName:"ul"},"\u65f6\u6548\u6027\uff1a\u5efa\u8bae\u5728\u53d1\u73b0\u95ee\u9898\u540e\u5c3d\u5feb\u6267\u884c"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9009\u62e9\u8303\u56f4"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u8868\u7ea7\u56de\u6eda\uff1a\u6062\u590d\u6574\u8868\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u884c\u7ea7\u56de\u6eda\uff1a\u9009\u62e9\u7279\u5b9a\u6570\u636e\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5b57\u6bb5\u7ea7\u56de\u6eda\uff1a\u4ec5\u6062\u590d\u90e8\u5206\u5b57\u6bb5"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u786e\u8ba4\u6267\u884c"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u5c55\u793a\u56de\u6eda\u9884\u89c8"),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u56de\u6eda\u5de5\u5355"),(0,r.kt)("li",{parentName:"ul"},"\u6b63\u5e38\u6267\u884c\u53d8\u66f4\u6d41\u7a0b"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5931\u8d25\u5904\u7406"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u62a5\u9519\u6392\u67e5\uff1a\u67e5\u770b\u9519\u8bef\u65e5\u5fd7"),(0,r.kt)("li",{parentName:"ul"},"\u91cd\u8bd5\u673a\u5236\uff1a\u652f\u6301\u5931\u8d25\u91cd\u8bd5")))))),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u91cd\u8981\u53d8\u66f4\u524d\uff0c\u901a\u8fc7\u6d4b\u8bd5\u73af\u5883\u9a8c\u8bc1\u5907\u4efd\u548c\u56de\u6eda"),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u56de\u6eda\u524d\uff0c\u786e\u8ba4\u56de\u6eda\u8303\u56f4\u7684\u51c6\u786e\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u671f\u68c0\u67e5\u5907\u4efd\u72b6\u6001\uff0c\u786e\u4fdd\u5907\u4efd\u94fe\u8def\u6b63\u5e38")))}k.isMDXComponent=!0}}]);