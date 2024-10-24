"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[7843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"RPM \u5b89\u88c5"},o="RPM\u5b89\u88c5",c={unversionedId:"deploy-manual/rpm",id:"deploy-manual/rpm",title:"RPM \u5b89\u88c5",description:"\u73af\u5883\u51c6\u5907",source:"@site/docs/deploy-manual/rpm.md",sourceDirName:"deploy-manual",slug:"/deploy-manual/rpm",permalink:"/sqle-docs/docs/deploy-manual/rpm",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/docs/deploy-manual/rpm.md",tags:[],version:"current",frontMatter:{title:"RPM \u5b89\u88c5"},sidebar:"tutorialSidebar",previous:{title:"\u6e90\u7801\u5b89\u88c5",permalink:"/sqle-docs/docs/deploy-manual/source"},next:{title:"Docker\u90e8\u7f72",permalink:"/sqle-docs/docs/deploy-manual/Docker"}},i={},p=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u4e0b\u8f7d\u5b89\u88c5\u5305",id:"\u4e0b\u8f7d\u5b89\u88c5\u5305",level:2},{value:"\u5b89\u88c5 SQLE",id:"\u5b89\u88c5-sqle",level:2},{value:"\u521b\u5efa\u6570\u636e\u5e93",id:"\u521b\u5efa\u6570\u636e\u5e93",level:2},{value:"\u4fee\u6539 SQLE \u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539-sqle-\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u542f\u52a8 SQLE",id:"\u542f\u52a8-sqle",level:2},{value:"\u8bbf\u95eeSQLE",id:"\u8bbf\u95eesqle",level:2},{value:"\u542f\u52a8\u5931\u8d25\u95ee\u9898\u8bca\u65ad",id:"\u542f\u52a8\u5931\u8d25\u95ee\u9898\u8bca\u65ad",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rpm\u5b89\u88c5"},"RPM\u5b89\u88c5"),(0,a.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CentOS 7"),(0,a.kt)("li",{parentName:"ul"},"MySQL 5.7")),(0,a.kt)("h2",{id:"\u4e0b\u8f7d\u5b89\u88c5\u5305"},"\u4e0b\u8f7d\u5b89\u88c5\u5305"),(0,a.kt)("p",null,"\u4e0b\u8f7d SQLE \u7684 RPM \u5b89\u88c5\u5305\uff0c\u4e0b\u8f7d\u8fde\u63a5\u70b9\u51fb",(0,a.kt)("a",{parentName:"p",href:"https://github.com/actiontech/sqle/releases"},"\u8fd9\u91cc"),"\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5-sqle"},"\u5b89\u88c5 SQLE"),(0,a.kt)("p",null,"\u6267\u884c RPM \u7684\u5b89\u88c5\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rpm -ivh /path/to/sqle-ce-${version}.qa.el7.x86_64.rpm --prefix=/opt/sqle\n")),(0,a.kt)("h2",{id:"\u521b\u5efa\u6570\u636e\u5e93"},"\u521b\u5efa\u6570\u636e\u5e93"),(0,a.kt)("p",null,"\u51c6\u5907\u4e00\u53f0 MySQL5.7 \u4f5c\u4e3a SQLE \u7684\u540e\u7aef\u5b58\u50a8\u6570\u636e\u5e93\u3002\u6267\u884c\u4e0b\u9762\u547d\u4ee4\u521b\u5efa SQLE \u9700\u8981\u7684 schema\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE IF NOT EXISTS sqle default character set utf8mb4 collate utf8mb4_unicode_ci;\nCREATE DATABASE IF NOT EXISTS dms default character set utf8mb4 collate utf8mb4_unicode_ci;\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u521b\u5efa\u597d\u7684 Schema \u5c06\u5728\u4e0b\u9762\u4fee\u6539SQLE\u914d\u7f6e\u65f6\u4f7f\u7528\u5230\u3002")),(0,a.kt)("h2",{id:"\u4fee\u6539-sqle-\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539 SQLE \u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u5b89\u88c5\u5b8c SQLE \u540e\uff0c\u9700\u8981\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u4fee\u6539SQLE\u7684\u914d\u7f6e\uff0c\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"/sqle-docs/docs/deploy-manual/config"},"\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"),"\u3002SQLE\u5b89\u88c5\u5b8c\u6210\u540e\u63d0\u4f9b\u4e00\u4e2a\u914d\u7f6e\u6a21\u7248\u53ef\u76f4\u63a5\u4fee\u6539\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd /opt/sqle/etc\nvim config.yaml\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u786e\u4fdd config.yaml \u7684\u6587\u4ef6 owner \u4e3a actiontech-universe:actiontech")),(0,a.kt)("h2",{id:"\u542f\u52a8-sqle"},"\u542f\u52a8 SQLE"),(0,a.kt)("p",null,"SQLE \u8fdb\u7a0b\u901a\u8fc7 Systemd \u7ba1\u7406\u3002\u5728\u6210\u529f\u5b89\u88c5 RPM \u540e\uff0c\u6267\u884c\u542f\u52a8\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd /opt/sqle\nchmod +x scripts/init_start.sh\n./scripts/init_start.sh\n")),(0,a.kt)("h2",{id:"\u8bbf\u95eesqle"},"\u8bbf\u95eeSQLE"),(0,a.kt)("p",null,"SQLE \u5bf9\u5916\u63d0\u4f9b web \u670d\u52a1\uff0c\u5728\u7a0b\u5e8f\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u5373\u53ef\u901a\u8fc7 SQLE UI \u8bbf\u95ee\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:10000"},"http://127.0.0.1:10000"),", \u5730\u5740\u548c\u7aef\u53e3\u4e3a\u914d\u7f6e\u6587\u4ef6\u5185 dms.api \u914d\u7f6e\u9879\u3002"),(0,a.kt)("h2",{id:"\u542f\u52a8\u5931\u8d25\u95ee\u9898\u8bca\u65ad"},"\u542f\u52a8\u5931\u8d25\u95ee\u9898\u8bca\u65ad"),(0,a.kt)("p",null,"\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/actiontech/sqle/discussions/1239"},"https://github.com/actiontech/sqle/discussions/1239")))}u.isMDXComponent=!0}}]);