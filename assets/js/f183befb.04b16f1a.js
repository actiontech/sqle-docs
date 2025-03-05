"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[1505],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u5347\u7ea7\u8bf4\u660e"},l=void 0,p={unversionedId:"deploy-manual/upgrade",id:"version-v3/deploy-manual/upgrade",title:"\u5347\u7ea7\u8bf4\u660e",description:"\u6ce8\u610f\uff1a\u82e5\u5728\u5347\u7ea7\u671f\u95f4SQLE\u4e2d\u6709\u6b63\u5728\u4e0a\u7ebf\u7684\u5de5\u5355\u3001\u6216\u8005\u5b9a\u65f6\u6267\u884c\u7684SQL\uff0c\u4f1a\u9020\u6210SQL\u4e0a\u7ebf\u5931\u8d25\u3002",source:"@site/versioned_docs/version-v3/deploy-manual/upgrade.md",sourceDirName:"deploy-manual",slug:"/deploy-manual/upgrade",permalink:"/sqle-docs/docs/v3/deploy-manual/upgrade",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/versioned_docs/version-v3/deploy-manual/upgrade.md",tags:[],version:"v3",frontMatter:{title:"\u5347\u7ea7\u8bf4\u660e"},sidebar:"tutorialSidebar",previous:{title:"Docker Compose \u90e8\u7f72",permalink:"/sqle-docs/docs/v3/deploy-manual/DockerCompose"},next:{title:"\u529f\u80fd\u4ecb\u7ecd",permalink:"/sqle-docs/docs/v3/user-manual/project/intro"}},i={},c=[{value:"\u5347\u7ea7\u51c6\u5907",id:"\u5347\u7ea7\u51c6\u5907",level:2},{value:"\u6267\u884c\u5347\u7ea7",id:"\u6267\u884c\u5347\u7ea7",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff1a\u82e5\u5728\u5347\u7ea7\u671f\u95f4SQLE\u4e2d\u6709\u6b63\u5728\u4e0a\u7ebf\u7684\u5de5\u5355\u3001\u6216\u8005\u5b9a\u65f6\u6267\u884c\u7684SQL\uff0c\u4f1a\u9020\u6210SQL\u4e0a\u7ebf\u5931\u8d25\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5b89\u88c5\u7684\u662fSQLE\u96c6\u7fa4\u7248\u672c\uff0c\u5219\u5347\u7ea7\u6b65\u9aa4\u9700\u8981\u5728\u6240\u6709\u8282\u70b9\u4e0a\u8fdb\u884c\u3002")),(0,a.kt)("h2",{id:"\u5347\u7ea7\u51c6\u5907"},"\u5347\u7ea7\u51c6\u5907"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5f00\u59cb\u5347\u7ea7\u4e4b\u524d\uff0c\u8bf7\u52a1\u5fc5\u5bf9SQLE\u548cDMS\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u5907\u4efd\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5f53\u524dSQLE\u7684\u7248\u672c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u6240\u9700\u7684SQLE\u5347\u7ea7\u5b89\u88c5\u5305\u3002")),(0,a.kt)("h2",{id:"\u6267\u884c\u5347\u7ea7"},"\u6267\u884c\u5347\u7ea7"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u505c\u6b62SQLE\u670d\u52a1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl stop dms\nsystemctl stop sqled\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u6267\u884cRPM\u6587\u4ef6\u5347\u7ea7SQLE")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rpm -Uvh --force {your rpm file} --prefix={your install file}\n")),(0,a.kt)("p",null,"\u793a\u4f8b\uff1arpm -Uvh --force sqle-ce-main.qa.el7.x86_64.rpm --prefix=/opt/sqle"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6839\u636e\u7248\u672c\u53d8\u66f4\u5185\u5bb9\u4fee\u6539\u6570\u636e\u5e93\u7ed3\u6784\u3001\u914d\u7f6e\u6587\u4ef6\u7b49\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u6ce8\u610f\uff0c\u67d0\u4e9b\u7248\u672c\u7684\u5347\u7ea7\u53ef\u80fd\u4f1a\u5f15\u5165\u4e0d\u517c\u5bb9\u7684\u66f4\u6539\u3002\u60a8\u53ef\u4ee5\u5728GitHub\u4e0a\u67e5\u770b\u7248\u672c\u53d8\u66f4\u7684\u4e0d\u517c\u5bb9\u5185\u5bb9\u4ee5\u53ca\u53d8\u66f4\u65b9\u6848\u3002\u5177\u4f53\u53d8\u66f4\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"li",href:"https://github.com/actiontech/sqle/discussions/categories/upgrade"},"\u5347\u7ea7\u65b9\u6848"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u5143\u6570\u636e\u6216\u914d\u7f6e\u53d8\u66f4\uff0c\u5219\u53ef\u4ee5\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002")))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u542f\u52a8SQLE\u670d\u52a1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl start dms\nsystemctl start sqled\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u6e05\u7406\u6d4f\u89c8\u5668\u7f13\u5b58\u540e\u91cd\u65b0\u6253\u5f00SQLE\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u67d0\u4e9b\u7248\u672c\u7684\u5347\u7ea7\u53ef\u80fd\u6d89\u53ca\u524d\u7aef\u8d44\u6e90\u7684\u66f4\u65b0\uff0c\u82e5\u4e0d\u6e05\u7406\u6d4f\u89c8\u5668\u7f13\u5b58\u53ef\u80fd\u9020\u6210\u524d\u7aef\u8d44\u6e90\u672a\u5237\u65b0\uff0c\u5bfc\u81f4\u90e8\u5206\u529f\u80fd\u5f02\u5e38\uff0c\u56e0\u6b64\u5efa\u8bae\u5728\u5347\u7ea7\u5b8c\u6210\u540e\u6e05\u7406\u6d4f\u89c8\u5668\u7f13\u5b58\u3002"))),(0,a.kt)("li",{parentName:"ol"},"\u68c0\u67e5SQLE\u7684\u7248\u672c\u53f7\u4ee5\u786e\u8ba4\u5347\u7ea7\u5b8c\u6210\u3002")))}u.isMDXComponent=!0}}]);