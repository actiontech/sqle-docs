"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[9149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"\u5feb\u901f\u5f00\u59cb"},i="\u5feb\u901f\u5f00\u59cb",l={unversionedId:"quick-usage",id:"version-v2/quick-usage",title:"\u5feb\u901f\u5f00\u59cb",description:"\u672c\u6587\u7684\u76ee\u7684\u662f\u8ba9\u5927\u5bb6\u80fd\u5feb\u901f\u4f53\u9a8cSQLE\u7684\u57fa\u7840\u529f\u80fd\uff0c\u5e2e\u52a9\u5927\u5bb6\u5feb\u901f\u4e0a\u624bSQLE\u3002\u4e0b\u9762\u5c06\u6a21\u62df\u4e00\u4e2a\u7b80\u5355\u7684\u65e5\u5e38SQL\u4e0a\u7ebf\u573a\u666f\uff0c\u5f00\u53d1\u4eba\u5458\u63d0\u4ea4SQL\uff0cDBA\u8fdb\u884cSQL\u5ba1\u6838\u5e76\u4e0a\u7ebf\uff0c\u5927\u6982\u7684\u6b65\u9aa4\u5982\u4e0b\uff1a",source:"@site/versioned_docs/version-v2/quick-usage.md",sourceDirName:".",slug:"/quick-usage",permalink:"/sqle-docs/docs/v2/quick-usage",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/versioned_docs/version-v2/quick-usage.md",tags:[],version:"v2",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb"},sidebar:"version-v2/tutorialSidebar",previous:{title:"\u5546\u4e1a\u652f\u6301",permalink:"/sqle-docs/docs/v2/support/commercial-support"},next:{title:"\u5b89\u88c5\u8bf4\u660e",permalink:"/sqle-docs/docs/v2/deploy-manual/intro"}},c={},s=[{value:"\u642d\u5efa\u73af\u5883",id:"\u642d\u5efa\u73af\u5883",level:2},{value:"\u914d\u7f6e\u8d44\u6e90",id:"\u914d\u7f6e\u8d44\u6e90",level:2},{value:"\u521b\u5efa\u5168\u5c40\u7528\u6237",id:"\u521b\u5efa\u5168\u5c40\u7528\u6237",level:3},{value:"\u521b\u5efa\u5168\u5c40\u89d2\u8272",id:"\u521b\u5efa\u5168\u5c40\u89d2\u8272",level:3},{value:"\u7ed9\u9879\u76ee\u914d\u7f6eSQL\u5ba1\u6838\u89c4\u5219",id:"\u7ed9\u9879\u76ee\u914d\u7f6esql\u5ba1\u6838\u89c4\u5219",level:3},{value:"\u7ed9\u9879\u76ee\u521b\u5efa\u6570\u636e\u6e90",id:"\u7ed9\u9879\u76ee\u521b\u5efa\u6570\u636e\u6e90",level:3},{value:"\u7ed9\u9879\u76ee\u6dfb\u52a0\u6210\u5458",id:"\u7ed9\u9879\u76ee\u6dfb\u52a0\u6210\u5458",level:3},{value:"SQL \u4e0a\u7ebf",id:"sql-\u4e0a\u7ebf",level:2},{value:"\u5f00\u53d1\u7528\u6237 A \u63d0\u4ea4\u5de5\u5355",id:"\u5f00\u53d1\u7528\u6237-a-\u63d0\u4ea4\u5de5\u5355",level:3},{value:"DBA\u7528\u6237 B \u4e0a\u7ebf",id:"dba\u7528\u6237-b-\u4e0a\u7ebf",level:3}],p={toc:s};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("p",null,"\u672c\u6587\u7684\u76ee\u7684\u662f\u8ba9\u5927\u5bb6\u80fd\u5feb\u901f\u4f53\u9a8cSQLE\u7684\u57fa\u7840\u529f\u80fd\uff0c\u5e2e\u52a9\u5927\u5bb6\u5feb\u901f\u4e0a\u624bSQLE\u3002\u4e0b\u9762\u5c06\u6a21\u62df\u4e00\u4e2a\u7b80\u5355\u7684\u65e5\u5e38SQL\u4e0a\u7ebf\u573a\u666f\uff0c\u5f00\u53d1\u4eba\u5458\u63d0\u4ea4SQL\uff0cDBA\u8fdb\u884cSQL\u5ba1\u6838\u5e76\u4e0a\u7ebf\uff0c\u5927\u6982\u7684\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u5458 admin \u6dfb\u52a0\u5168\u5c40\u7528\u6237 A \u548c B\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u5458 admin \u6dfb\u52a0\u5168\u5c40\u89d2\u8272 dev \u548c dba\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u5458 admin \u914d\u7f6e\u9879\u76ee\u8d44\u6e90\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7ed9\u9879\u76ee\u914d\u7f6eSQL\u5ba1\u6838\u89c4\u5219\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u7ed9\u9879\u76ee\u6dfb\u52a0\u6570\u636e\u6e90\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u7ed9\u9879\u76ee\u914d\u7f6e\u4eba\u5458 A \u548c B\uff1b"))),(0,r.kt)("li",{parentName:"ol"},"A \u4f5c\u4e3a\u5f00\u53d1\u4eba\u5458\u63d0\u4ea4SQL\u5ba1\u6838\u5e76\u521b\u5efa\u5de5\u5355\uff1b"),(0,r.kt)("li",{parentName:"ol"},"B \u4f5c\u4e3a DBA \u8fdb\u884c\u5ba1\u6838\u5e76\u4e0a\u7ebf\u3002")),(0,r.kt)("h2",{id:"\u642d\u5efa\u73af\u5883"},"\u642d\u5efa\u73af\u5883"),(0,r.kt)("p",null,"\u9996\u5148\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/sqle-docs/docs/v2/deploy-manual/intro"},"\u90e8\u7f72\u6587\u6863"),"\u5feb\u901f\u642d\u5efa\u4e00\u4e2aSQLE\u670d\u52a1\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u8d44\u6e90"},"\u914d\u7f6e\u8d44\u6e90"),(0,r.kt)("h3",{id:"\u521b\u5efa\u5168\u5c40\u7528\u6237"},"\u521b\u5efa\u5168\u5c40\u7528\u6237"),(0,r.kt)("p",null,"\u4f7f\u7528 admin \u7528\u6237\u8fdb\u5165\u7528\u6237\u4e2d\u5fc3\u754c\u9762\u6dfb\u52a0\u5168\u5c40\u7528\u6237 A \u548c B\uff1b\u70b9\u51fbSQLE\u9876\u90e8\u83dc\u5355\u53f3\u4fa7",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e09\u4e2a\u70b9"),"\u4e0b\u62c9\u83dc\u5355\u5373\u53ef\u8fdb\u5165\u3002\n",(0,r.kt)("img",{alt:"user-manager",src:n(35759).Z,width:"1510",height:"778"})),(0,r.kt)("h3",{id:"\u521b\u5efa\u5168\u5c40\u89d2\u8272"},"\u521b\u5efa\u5168\u5c40\u89d2\u8272"),(0,r.kt)("p",null,"\u4f7f\u7528 admin \u7528\u6237\u8fdb\u5165\u7528\u6237\u4e2d\u5fc3\u754c\u9762\u6dfb\u52a0\u5168\u5c40\u89d2\u8272 dev \u548c dba\uff0c\u4f7f\u5f97 dev \u81f3\u5c11\u5177\u5907\u6743\u9650",(0,r.kt)("inlineCode",{parentName:"p"},"\u521b\u5efa/\u7f16\u8f91\u5de5\u5355"),", dba \u81f3\u5c11\u5177\u5907\u6743\u9650",(0,r.kt)("inlineCode",{parentName:"p"},"\u5ba1\u6838/\u9a73\u56de\u5de5\u5355"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e0a\u7ebf\u5de5\u5355"),"\uff1b\u70b9\u51fbSQLE\u9876\u90e8\u83dc\u5355\u53f3\u4fa7",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e09\u4e2a\u70b9"),"\u4e0b\u62c9\u83dc\u5355\u5373\u53ef\u8fdb\u5165\u3002\n",(0,r.kt)("img",{alt:"role-manager",src:n(46099).Z,width:"1510",height:"729"})),(0,r.kt)("h3",{id:"\u7ed9\u9879\u76ee\u914d\u7f6esql\u5ba1\u6838\u89c4\u5219"},"\u7ed9\u9879\u76ee\u914d\u7f6eSQL\u5ba1\u6838\u89c4\u5219"),(0,r.kt)("p",null,"\u4f7f\u7528 admin \u7528\u6237\u8fdb\u5165\u9879\u76ee\u754c\u9762\uff0c\u6839\u636e\u81ea\u8eab\u516c\u53f8\u7684\u5ba1\u6838\u6807\u51c6\u914d\u7f6e\u5ba1\u6838\u89c4\u5219\uff0c\u672c\u6b21\u8bd5\u7528\u4e0d\u518d\u65b0\u5efa\u89c4\u5219\u6a21\u7248\uff0c\u5c06\u4f7f\u7528\u63d0\u4f9b\u7684\u5168\u5c40\u9ed8\u8ba4\u89c4\u5219\u6a21\u7248\u8fdb\u884c\u6d4b\u8bd5\u3002\u5982\u4f55\u8bbe\u7f6e\u89c4\u5219\u6a21\u7248\uff0c\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/sqle-docs/docs/v2/user-manual/project/rule-template-manager"},"\u89c4\u5219\u6a21\u7248"),"\u3002\n",(0,r.kt)("img",{alt:"project-rule-template",src:n(74237).Z,width:"1510",height:"848"})),(0,r.kt)("h3",{id:"\u7ed9\u9879\u76ee\u521b\u5efa\u6570\u636e\u6e90"},"\u7ed9\u9879\u76ee\u521b\u5efa\u6570\u636e\u6e90"),(0,r.kt)("p",null,"\u4f7f\u7528 admin \u7528\u6237\u8fdb\u5165\u9879\u76ee\u754c\u9762\uff0c\u5f55\u5165\u4e00\u4e2aMySQL\u7c7b\u578b\u7684\u6570\u636e\u6e90 ",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"\uff0c\u5e76\u53ef\u4ee5\u7ed1\u5b9a\u4e0a\u4e00\u6b65\u9aa4\u4e2d\u521b\u5efa\u7684\u89c4\u5219\u6a21\u7248\uff0c\u8fd9\u91cc\u7ed1\u5b9a\u7cfb\u7edf\u5185\u7f6e\u7684\u5168\u5c40\u9ed8\u8ba4\u89c4\u5219\u6a21\u7248\u3002\u5982\u4f55\u7ba1\u7406\u6570\u636e\u6e90\uff0c\u53ef\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/sqle-docs/docs/v2/user-manual/project/instance-manager"},"\u6570\u636e\u6e90"),"\u3002\n",(0,r.kt)("img",{alt:"project-instance",src:n(3156).Z,width:"1507",height:"1176"})),(0,r.kt)("h3",{id:"\u7ed9\u9879\u76ee\u6dfb\u52a0\u6210\u5458"},"\u7ed9\u9879\u76ee\u6dfb\u52a0\u6210\u5458"),(0,r.kt)("p",null,"\u4f7f\u7528 admin \u7528\u6237\u8fdb\u5165\u9879\u76ee\u754c\u9762\uff0c\u7ed9\u9879\u76ee\u6dfb\u52a0\u6210\u5458\uff0c\u672c\u6b21\u7684\u91cd\u70b9\u662f\u8981\u5c06\u4e0a\u8ff0\u521b\u5efa\u7684\u5168\u5c40\u7528\u6237\u6dfb\u52a0\u5230\u9879\u76ee\u5185\uff0c\u7ed9\u7528\u6237 A \u6388\u4e88\u6570\u636e\u6e90 ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," \u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," \u89d2\u8272\uff0c\u7ed9\u7528\u6237 B \u6388\u4e88\u6570\u636e\u6e90 ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," \u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"dba")," \u89d2\u8272\u3002\n",(0,r.kt)("img",{alt:"project-member-1",src:n(39601).Z,width:"1512",height:"918"}),"\n",(0,r.kt)("img",{alt:"project-member-2",src:n(16850).Z,width:"1510",height:"985"})),(0,r.kt)("h2",{id:"sql-\u4e0a\u7ebf"},"SQL \u4e0a\u7ebf"),(0,r.kt)("h3",{id:"\u5f00\u53d1\u7528\u6237-a-\u63d0\u4ea4\u5de5\u5355"},"\u5f00\u53d1\u7528\u6237 A \u63d0\u4ea4\u5de5\u5355"),(0,r.kt)("p",null,"\u4f7f\u7528 A \u7528\u6237\u8fdb\u5165\u9879\u76ee\u754c\u9762\uff0c\u70b9\u51fb\u521b\u5efa\u5de5\u5355\u5373\u53ef\u5bf9\u9879\u76ee\u5185\u6388\u6743\u8fc7\u7684\u6570\u636e\u6e90\u8fdb\u884cSQL\u5ba1\u6838\u4e0a\u7ebf\u3002\n",(0,r.kt)("img",{alt:"project-workflow-1",src:n(70158).Z,width:"1510",height:"659"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5f53\u6211\u4eec\u63d0\u4ea4\u4e0b\u56fe\u6240\u793a\u7684SQL\u65f6\uff0c\u81ea\u52a8\u5ba1\u6838\u89e6\u53d1\u4e86\u5ba1\u6838\u5efa\u8bae\uff0c\u5219\u6b64\u65f6\u5de5\u5355\u65e0\u6cd5\u63d0\u4ea4\u9700\u8981\u4fee\u6539SQL\u7b26\u5408\u89c4\u8303\u540e\u518d\u6b21\u63d0\u4ea4\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"project-workflow-1",src:n(17490).Z,width:"1511",height:"1078"}),"\n",(0,r.kt)("img",{alt:"project-workflow-1",src:n(75354).Z,width:"1499",height:"974"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u6309\u8981\u6c42\u4f18\u5316SQL\u540e\uff0c\u518d\u6b21\u63d0\u4ea4\uff0c\u81ea\u52a8\u5ba1\u6838\u901a\u8fc7")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"project-workflow-1",src:n(56213).Z,width:"1510",height:"1071"}),"\n",(0,r.kt)("img",{alt:"project-workflow-1",src:n(17295).Z,width:"1500",height:"875"}),"\n\u63d0\u4ea4\u5de5\u5355\u540e\uff0c\u5de5\u5355\u6d41\u8f6c\u5230\u7528\u6237B\u8fdb\u884c\u540e\u7eed\u5904\u7406\u3002\n",(0,r.kt)("img",{alt:"project-workflow-1",src:n(1514).Z,width:"1509",height:"845"})),(0,r.kt)("h3",{id:"dba\u7528\u6237-b-\u4e0a\u7ebf"},"DBA\u7528\u6237 B \u4e0a\u7ebf"),(0,r.kt)("p",null,"\u4f7f\u7528 B \u7528\u6237\u8fdb\u5165SQLE\u540e\uff0c\u5373\u53ef\u770b\u5230\u7531A\u63d0\u4ea4\u7684\u4e0a\u7ebf\u5de5\u5355\uff0c\u70b9\u51fb\u8be6\u60c5\u540e\u53ef\u8fdb\u884c\u5ba1\u6279\u64cd\u4f5c\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"SQLE \u652f\u6301\u901a\u8fc7\u90ae\u4ef6\uff0c\u5fae\u4fe1\u4f01\u4e1a\u53f7\u7b49\u9014\u5f84\u63a8\u9001\u5de5\u5355\u901a\u77e5\u3002\u4e5f\u53ef\u4ee5\u914d\u7f6e\u5de5\u5355\u5bf9\u63a5\u6765\u5728\u9489\u9489\u4e0a\u8fdb\u884c\u5de5\u5355\u5ba1\u6279")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"project-workflow-1",src:n(66086).Z,width:"1510",height:"1067"}),"\n",(0,r.kt)("img",{alt:"project-workflow-1",src:n(15064).Z,width:"1509",height:"869"}),"\n",(0,r.kt)("img",{alt:"project-workflow-1",src:n(63834).Z,width:"1511",height:"828"})))}d.isMDXComponent=!0},3156:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-instance-9bf9be4e0cc5497dd87d32344a9a1971.png"},39601:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-member-1-035dcf983a7d50a037500bfcf32d4308.png"},16850:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-member-2-e072063c83d2d0f4751e13379e149065.png"},74237:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-rule-template-9fc4a3295a71b8d701dab899363330b8.png"},70158:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-workflow-1-74c5b2cf5d702baf86540524ba2cb602.png"},17490:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-workflow-2-cb716bd3f1345ccda6851bd219361ea9.png"},75354:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-workflow-3-badee880dfa16f0c96ce7fa509dc9547.png"},56213:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-workflow-4-2760e46b2e1bc9cc54f22ab77e89170e.png"},17295:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-workflow-5-f4f684ec9b46c2e669445579f6cd8222.png"},1514:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-workflow-6-61523276cfd477ff674ff0ec4c9361a5.png"},66086:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-workflow-7-0f9fbd96b27a9084d4005e93dd67438d.png"},15064:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-workflow-8-3d76c0134f0e7f55125b4347d8af150d.png"},63834:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-workflow-9-f6af3e4453f4c7804887ab67f0f62bcf.png"},46099:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/role-manager-874c1a709992f07078af8a81d117b66a.png"},35759:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/user-manager-f9cda8e53d1b5a3e9d43fd04a4cc9642.png"}}]);