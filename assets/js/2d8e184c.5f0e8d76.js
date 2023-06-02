"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[3022],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>k});var r=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(l),m=n,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||a;return l?r.createElement(k,i(i({ref:t},p),{},{components:l})):r.createElement(k,i({ref:t},p))}));function k(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,i=new Array(a);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:n,i[1]=u;for(var s=2;s<a;s++)i[s]=l[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"},2663:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var r=l(7462),n=(l(7294),l(3905));const a={title:"\u6162\u65e5\u5fd7"},i="\u6162\u65e5\u5fd7",u={unversionedId:"user-manual/project/audit_task/slowlog_audit",id:"user-manual/project/audit_task/slowlog_audit",title:"\u6162\u65e5\u5fd7",description:"\u672c\u8282\u4ecb\u7ecd\u6162\u65e5\u5fd7\u626b\u63cf\u7684\u5e94\u7528\u573a\u666f\u3001\u4ee5\u53ca\u5982\u4f55\u521b\u5efa\u6162\u65e5\u5fd7\u626b\u63cf\u4efb\u52a1\u3002",source:"@site/docs/user-manual/project/audit_task/slowlog_audit.md",sourceDirName:"user-manual/project/audit_task",slug:"/user-manual/project/audit_task/slowlog_audit",permalink:"/sqle-docs/docs/user-manual/project/audit_task/slowlog_audit",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/docs/user-manual/project/audit_task/slowlog_audit.md",tags:[],version:"current",frontMatter:{title:"\u6162\u65e5\u5fd7"},sidebar:"tutorialSidebar",previous:{title:"\u5e93\u8868\u5143\u6570\u636e",permalink:"/sqle-docs/docs/user-manual/project/audit_task/metadata_audit"},next:{title:"\u4f1a\u8bddSQL\u626b\u63cf\u4efb\u52a1",permalink:"/sqle-docs/docs/user-manual/project/audit_task/processlist_audit"}},o={},s=[{value:"\u652f\u6301\u7684\u6570\u636e\u6e90\u7c7b\u578b",id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u7c7b\u578b",level:3},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:3},{value:"\u65b9\u5f0f\u4e00\uff1a\u91c7\u96c6\u6162\u65e5\u5fd7\u6587\u4ef6",id:"\u65b9\u5f0f\u4e00\u91c7\u96c6\u6162\u65e5\u5fd7\u6587\u4ef6",level:3},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:4},{value:"\u6b65\u9aa4\u4e00\uff1a\u65b0\u5efa\u667a\u80fd\u626b\u63cf\u4efb\u52a1",id:"\u6b65\u9aa4\u4e00\u65b0\u5efa\u667a\u80fd\u626b\u63cf\u4efb\u52a1",level:4},{value:"\u6b65\u9aa4\u4e8c\uff1a\u6267\u884cscannerd\u6587\u4ef6",id:"\u6b65\u9aa4\u4e8c\u6267\u884cscannerd\u6587\u4ef6",level:4},{value:"\u6b65\u9aa4\u4e09\uff1a\u5728\u6307\u5b9a\u5e93\u8868\u4e0a\u6267\u884c\u6162SQL\uff0c\u5e73\u53f0\u4e0a\u751f\u6210\u626b\u63cf\u4efb\u52a1\u62a5\u544a\u5e76\u67e5\u770b",id:"\u6b65\u9aa4\u4e09\u5728\u6307\u5b9a\u5e93\u8868\u4e0a\u6267\u884c\u6162sql\u5e73\u53f0\u4e0a\u751f\u6210\u626b\u63cf\u4efb\u52a1\u62a5\u544a\u5e76\u67e5\u770b",level:4},{value:"\u65b9\u5f0f\u4e8c\uff1a\u91c7\u96c6\u6162\u65e5\u5fd7\u8868",id:"\u65b9\u5f0f\u4e8c\u91c7\u96c6\u6162\u65e5\u5fd7\u8868",level:3},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6-1",level:4},{value:"\u6b65\u9aa4\u4e00\uff1a\u65b0\u5efa\u667a\u80fd\u626b\u63cf\u4efb\u52a1",id:"\u6b65\u9aa4\u4e00\u65b0\u5efa\u667a\u80fd\u626b\u63cf\u4efb\u52a1-1",level:4},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:3},{value:"\u540e\u7eed\u6b65\u9aa4",id:"\u540e\u7eed\u6b65\u9aa4",level:3}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u6162\u65e5\u5fd7"},"\u6162\u65e5\u5fd7"),(0,n.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u6162\u65e5\u5fd7\u626b\u63cf\u7684\u5e94\u7528\u573a\u666f\u3001\u4ee5\u53ca\u5982\u4f55\u521b\u5efa\u6162\u65e5\u5fd7\u626b\u63cf\u4efb\u52a1\u3002"),(0,n.kt)("p",null,"\u5f53\u524dSQLE\u652f\u6301\u4e24\u79cd\u6162\u65e5\u5fd7\u91c7\u96c6\u65b9\u5f0f\uff0c\u4e00\u79cd\u7531scanner\u91c7\u96c6\u6162\u65e5\u5fd7\u6587\u4ef6\u4e2d\u7684\u6162\u67e5\u8be2\uff0c\u4e00\u79cd\u7531SQLE\u76f4\u63a5\u91c7\u96c6\u6162\u67e5\u8868\u4e2d\u7684\u6162\u67e5\u8be2\uff0c\u7528\u6237\u53ef\u5728\u7f16\u8f91\u9875\u9762\u9009\u53d6\u9700\u8981\u7684\u91c7\u96c6\u65b9\u5f0f\uff0c\u60a8\u53ef\u9009\u62e9\u9700\u8981\u7684\u65b9\u5f0f\u91c7\u96c6\u4ea7\u751f\u7684\u6162\u67e5\u8be2\u3002"),(0,n.kt)("h3",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u7c7b\u578b"},"\u652f\u6301\u7684\u6570\u636e\u6e90\u7c7b\u578b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MySQL")),(0,n.kt)("h3",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,n.kt)("p",null,"\u9700\u8981\u68c0\u67e5\u5df2\u4e0a\u7ebf\u4e1a\u52a1\u662f\u5426\u6709\u8d85\u8fc7\u6307\u5b9a\u65f6\u957f\u7684\u6162SQL\u4ea7\u751f\u3002"),(0,n.kt)("h3",{id:"\u65b9\u5f0f\u4e00\u91c7\u96c6\u6162\u65e5\u5fd7\u6587\u4ef6"},"\u65b9\u5f0f\u4e00\uff1a\u91c7\u96c6\u6162\u65e5\u5fd7\u6587\u4ef6"),(0,n.kt)("h4",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5df2\u6dfb\u52a0\u5bf9\u5e94\u6570\u636e\u6e90"),(0,n.kt)("li",{parentName:"ul"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6my.cnf\uff0c\u5728","[mysqld]","\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u4ee5\u4e0b\u5185\u5bb9")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="[mysqld]"',title:'"[mysqld]"'},"slow_query_log = ON //\u5f00\u542f\u6162\u65e5\u5fd7\nslow_query_log_file = /var/lib/mysql/tmp_slow.log   //\u8bbe\u7f6e\u6162\u65e5\u5fd7\u6587\u4ef6\u8def\u5f84\nlong_query_time = 1  //\u8bbe\u7f6e\u6162\u67e5\u8be2\u65f6\u95f4\u9608\u503c\uff0c\u5f53\u524d\u793a\u4f8b\u65f6\u95f4\u4e3a1s\uff0c\u53ef\u6839\u636e\u5b9e\u9645\u4e1a\u52a1\u53d8\u66f4\n")),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e00\u65b0\u5efa\u667a\u80fd\u626b\u63cf\u4efb\u52a1"},"\u6b65\u9aa4\u4e00\uff1a\u65b0\u5efa\u667a\u80fd\u626b\u63cf\u4efb\u52a1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u540d\u79f0\uff1a\u6307\u5b9a\u626b\u63cf\u4efb\u52a1\u7684\u540d\u79f0\uff0c\u5f53\u524d\u4ec5\u652f\u6301\u82f1\u6587\u540d\u79f0"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u6e90\u540d\u79f0\uff1a\u9009\u62e9\u626b\u63cf\u4efb\u52a1\u5bf9\u5e94\u7684\u6570\u636e\u6e90\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u6570\u636e\u6e90\uff0c\u5c06\u8fdb\u884c\u9759\u6001\u5ba1\u6838\u5982\u679c\u60a8\u6ca1\u6709\u6307\u5b9a\u6570\u636e\u6e90\uff0c\u90a3\u4e48\u8be5\u626b\u63cf\u4efb\u52a1\u5c06\u4f7f\u7528\u60a8\u6240\u9009\u62e9\u7684\u6570\u636e\u5e93\u7c7b\u578b\u7684\u9ed8\u8ba4\u89c4\u5219\u6a21\u7248\u8fdb\u884c\u9759\u6001\u5ba1\u6838"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\uff1a\u9009\u62e9\u626b\u63cf\u4efb\u52a1\u4f7f\u7528\u7684\u6570\u636e\u5e93"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u7c7b\u578b\uff1a\u6839\u636e\u9009\u53d6\u7684\u6570\u636e\u6e90\u5448\u73b0"),(0,n.kt)("li",{parentName:"ul"},"\u5ba1\u6838\u4efb\u52a1\u7c7b\u578b\uff1a\u9009\u62e9\u6162\u65e5\u5fd7\u626b\u63cf\u4efb\u52a1"),(0,n.kt)("li",{parentName:"ul"},"\u5ba1\u6838\u8fc7\u53bb\u65f6\u95f4\u6bb5\u5185 \u6293\u53d6\u7684SQL\uff08\u5206\u949f\uff09\uff1a\u626b\u63cf\u7684\u65f6\u95f4\u8986\u76d6\u8303\u56f4"),(0,n.kt)("li",{parentName:"ul"},"\u5ba1\u6838\u89c4\u5219\u6a21\u677f\uff1a\u9009\u62e9\u5bf9\u5e94\u7684\u5ba1\u6838\u89c4\u5219\u6a21\u677f"),(0,n.kt)("li",{parentName:"ul"},"\u5ba1\u6838\u4efb\u52a1\u5468\u671f\uff1a\u914d\u7f6e\u7684\u662fSQLE\u5bf9\u5ba1\u6838\u4efb\u52a1\u8fdb\u884c\u81ea\u52a8\u5ba1\u6838\u7684\u6267\u884c\u65f6\u95f4")),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e8c\u6267\u884cscannerd\u6587\u4ef6"},"\u6b65\u9aa4\u4e8c\uff1a\u6267\u884cscannerd\u6587\u4ef6"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff1ascannerd\u6587\u4ef6\u901a\u5e38\u5728SQLE\u7684bin\u76ee\u5f55\u4e0b\uff0c\u9700\u5c06scannerd\u6587\u4ef6\u4e0e\u6570\u636e\u6e90\u653e\u7f6e\u5728\u540c\u4e00\u73af\u5883\u4e0b\u6267\u884c")),(0,n.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'./scannerd slowquery -H "127.0.0.1" -P "10000" -N "slowlog_of_GRADE1" -J "default" -A eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcG4iOiJzbG93bG9nX29mX0dSQURFMSIsImV4cCI6MTcwODA3MjMzNSwibmFtZSI6ImFkbWluIn0.ArU5HpU7aSSVrRutxSAwRFYahSx0_4RNzD4KB6LTfpM --log-file /var/lib/mysql/mysql-for-test-slow.log\n')),(0,n.kt)("p",null,"\u53c2\u6570\u89e3\u91ca\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"-J, --project\uff1a\u8bf4\u660e\u626b\u63cf\u4efb\u52a1\u6240\u5728\u9879\u76ee\uff0c\u4f8b\u201cdefault\u201d"),(0,n.kt)("li",{parentName:"ul"},"-H, --host string\uff1a\u6307\u5b9aSQLE\u4e3b\u673a\u6240\u5728\u5730\u5740"),(0,n.kt)("li",{parentName:"ul"},"-N, --name string\uff1a\u6307\u5b9a\u626b\u63cf\u4efb\u52a1\u540d\u79f0\uff0cscannerd\u4f1a\u5c06\u83b7\u5f97\u7684\u6162SQL\u4f20\u81f3\u6307\u5b9a\u7684\u4efb\u52a1\u6c60\u4e2d\u5ba1\u6838"),(0,n.kt)("li",{parentName:"ul"},"-P, --port string\uff1a\u6307\u5b9aSQLE\u6240\u5728\u7aef\u53e3"),(0,n.kt)("li",{parentName:"ul"},"-A, --token string\uff1a\u8f93\u5165\u626b\u63cf\u4efb\u52a1\u51ed\u8bc1token"),(0,n.kt)("li",{parentName:"ul"},"--log-file\uff1a\u6307\u5b9a\u6162\u65e5\u5fd7\u6587\u4ef6\uff0cscannerd\u4ece\u8be5\u6587\u4ef6\u4e2d\u83b7\u53d6\u6162SQL")),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e09\u5728\u6307\u5b9a\u5e93\u8868\u4e0a\u6267\u884c\u6162sql\u5e73\u53f0\u4e0a\u751f\u6210\u626b\u63cf\u4efb\u52a1\u62a5\u544a\u5e76\u67e5\u770b"},"\u6b65\u9aa4\u4e09\uff1a\u5728\u6307\u5b9a\u5e93\u8868\u4e0a\u6267\u884c\u6162SQL\uff0c\u5e73\u53f0\u4e0a\u751f\u6210\u626b\u63cf\u4efb\u52a1\u62a5\u544a\u5e76\u67e5\u770b"),(0,n.kt)("h3",{id:"\u65b9\u5f0f\u4e8c\u91c7\u96c6\u6162\u65e5\u5fd7\u8868"},"\u65b9\u5f0f\u4e8c\uff1a\u91c7\u96c6\u6162\u65e5\u5fd7\u8868"),(0,n.kt)("h4",{id:"\u524d\u7f6e\u6761\u4ef6-1"},"\u524d\u7f6e\u6761\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5df2\u6dfb\u52a0\u6570\u636e\u6e90"),(0,n.kt)("li",{parentName:"ul"},"\u5728MySQL\u4e2d\u8bbe\u7f6e\u4ee5\u4e0b\u5185\u5bb9\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set global long_query_time=1; // \u9700\u6839\u636e\u5b9e\u9645\u4e1a\u52a1\u8c03\u6574\u6162\u67e5\u8be2\u65f6\u95f4\u9608\u503c\uff0c\u6b64\u5904\u4ec5\u4f9b\u53c2\u8003\nset global slow_query_log=1; // \u5f00\u542f\u6162\u65e5\u5fd7\u67e5\u8be2\nSET GLOBAL log_output='FILE,TABLE'\uff1b// \u5f00\u542f MySQL \u7684\u6162\u65e5\u5fd7\u6536\u96c6\u529f\u80fd\uff0c\u5e76\u4e14\u786e\u8ba4\u5c06\u6162\u65e5\u5fd7\u5185\u5bb9\u5199\u5165\u6587\u4ef6 mysql-slow.log \u548c\u8868 mysql.slow_log\n")),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e00\u65b0\u5efa\u667a\u80fd\u626b\u63cf\u4efb\u52a1-1"},"\u6b65\u9aa4\u4e00\uff1a\u65b0\u5efa\u667a\u80fd\u626b\u63cf\u4efb\u52a1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u540d\u79f0\uff1a\u6307\u5b9a\u626b\u63cf\u4efb\u52a1\u7684\u540d\u79f0\uff0c\u5f53\u524d\u4ec5\u652f\u6301\u82f1\u6587\u540d\u79f0"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u6e90\u540d\u79f0\uff1a\u9009\u62e9\u626b\u63cf\u4efb\u52a1\u5bf9\u5e94\u7684\u6570\u636e\u6e90\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u6570\u636e\u6e90\uff0c\u5c06\u8fdb\u884c\u9759\u6001\u5ba1\u6838\u5982\u679c\u60a8\u6ca1\u6709\u6307\u5b9a\u6570\u636e\u6e90\uff0c\u90a3\u4e48\u8be5\u626b\u63cf\u4efb\u52a1\u5c06\u4f7f\u7528\u60a8\u6240\u9009\u62e9\u7684\u6570\u636e\u5e93\u7c7b\u578b\u7684\u9ed8\u8ba4\u89c4\u5219\u6a21\u7248\u8fdb\u884c\u9759\u6001\u5ba1\u6838"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\uff1a\u9009\u62e9\u626b\u63cf\u4efb\u52a1\u4f7f\u7528\u7684\u6570\u636e\u5e93"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u7c7b\u578b\uff1a\u6839\u636e\u9009\u53d6\u7684\u6570\u636e\u6e90\u5448\u73b0"),(0,n.kt)("li",{parentName:"ul"},"\u5ba1\u6838\u4efb\u52a1\u7c7b\u578b\uff1a\u9009\u62e9\u6162\u65e5\u5fd7\u626b\u63cf\u4efb\u52a1"),(0,n.kt)("li",{parentName:"ul"},"\u91c7\u96c6\u5468\u671f(\u5206\u949f)\uff1aSQLE\u8fdb\u884c\u91c7\u96c6\u7684\u5468\u671f\uff0c\u82e5\u8bbe\u7f6e\u4e3a10\u5206\u949f\uff0c\u5219SQLE\u5c06\u6bcf\u969410\u5206\u949f\u53bb\u91c7\u96c6\u6162\u65e5\u5fd7\u8868\u4e2d\u751f\u6210\u7684\u6162\u67e5\u8be2"),(0,n.kt)("li",{parentName:"ul"},"\u5ba1\u6838\u8fc7\u53bb\u65f6\u95f4\u6bb5\u5185\u6293\u53d6\u7684SQL\uff08\u5206\u949f\uff09\uff1a\u626b\u63cf\u7684\u65f6\u95f4\u8986\u76d6\u8303\u56f4"),(0,n.kt)("li",{parentName:"ul"},"\u5ba1\u6838\u89c4\u5219\u6a21\u677f\uff1a\u9009\u62e9\u5bf9\u5e94\u7684\u5ba1\u6838\u89c4\u5219\u6a21\u677f"),(0,n.kt)("li",{parentName:"ul"},"\u5ba1\u6838\u4efb\u52a1\u5468\u671f\uff1a\u914d\u7f6e\u7684\u662fSQLE\u5bf9\u5ba1\u6838\u4efb\u52a1\u8fdb\u884c\u81ea\u52a8\u5ba1\u6838\u7684\u6267\u884c\u65f6\u95f4")),(0,n.kt)("h3",{id:"\u6267\u884c\u7ed3\u679c"},"\u6267\u884c\u7ed3\u679c"),(0,n.kt)("p",null,"\u5728\u626b\u63cf\u4efb\u52a1\u8be6\u60c5\u67e5\u770b\u626b\u63cf\u7684SQL\u8bed\u53e5\u53ca\u5ba1\u6838\u62a5\u544a\n",(0,n.kt)("img",{alt:"result",src:l(5066).Z,width:"1458",height:"712"}),"\n",(0,n.kt)("img",{alt:"result2",src:l(3342).Z,width:"891",height:"420"})),(0,n.kt)("h3",{id:"\u540e\u7eed\u6b65\u9aa4"},"\u540e\u7eed\u6b65\u9aa4"),(0,n.kt)("p",null,"\u5206\u6790\u626b\u63cf\u4efb\u52a1\u62a5\u544a\u4e2d\u51fa\u73b0\u7684\u6162SQL"))}c.isMDXComponent=!0},5066:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/slowlog-result-c4d82698cb8c916880f2e52cf90a7aeb.png"},3342:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/slowlog-result2-2fd57867b4c425e57370a3c2fd707de5.png"}}]);