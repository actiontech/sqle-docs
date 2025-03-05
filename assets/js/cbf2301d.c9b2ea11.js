"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[4681],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,k=c["".concat(u,".").concat(d)]||c[d]||v[d]||l;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},29741:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u5e94\u7528\u7a0b\u5e8fSQL\u6293\u53d6\u3010\u4f01\u4e1a\u7248\u3011"},i=void 0,o={unversionedId:"user-manual/project/audit_task/java_application_audit",id:"version-v3/user-manual/project/audit_task/java_application_audit",title:"\u5e94\u7528\u7a0b\u5e8fSQL\u6293\u53d6\u3010\u4f01\u4e1a\u7248\u3011",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5229\u7528SQLE\u5e73\u53f0\u6293\u53d6JAVA\u5e94\u7528\u4e2d\u7684SQL\uff0c\u9009\u53d6\u7684\u4f8b\u5b50\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u95ee\u5377\u8c03\u67e5java\u5e94\u7528\uff0c\u67b6\u6784\u7b80\u5355\uff0c\u4e0a\u624b\u76f8\u5bf9\u5bb9\u6613\u3002",source:"@site/versioned_docs/version-v3/user-manual/project/audit_task/java_application_audit.md",sourceDirName:"user-manual/project/audit_task",slug:"/user-manual/project/audit_task/java_application_audit",permalink:"/sqle-docs/docs/v3/user-manual/project/audit_task/java_application_audit",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/versioned_docs/version-v3/user-manual/project/audit_task/java_application_audit.md",tags:[],version:"v3",frontMatter:{title:"\u5e94\u7528\u7a0b\u5e8fSQL\u6293\u53d6\u3010\u4f01\u4e1a\u7248\u3011"},sidebar:"tutorialSidebar",previous:{title:"\u534e\u4e3a\u4e91RDS\u6162\u65e5\u5fd7\u626b\u63cf",permalink:"/sqle-docs/docs/v3/user-manual/project/audit_task/huaweiyunrds"},next:{title:"Java\u63a2\u9488\u7248\u5e94\u7528\u7a0b\u5e8fSQL\u6293\u53d6\u3010\u4f01\u4e1a\u7248\u3011",permalink:"/sqle-docs/docs/v3/user-manual/project/audit_task/java_agent_audit"}},u={},p=[{value:"\u652f\u6301\u7684\u6570\u636e\u6e90\u7c7b\u578b",id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u7c7b\u578b",level:2},{value:"\u524d\u7f6e\u51c6\u5907",id:"\u524d\u7f6e\u51c6\u5907",level:2},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:3},{value:"\u90e8\u7f72java\u5e94\u7528",id:"\u90e8\u7f72java\u5e94\u7528",level:3},{value:"Java\u5e94\u7528\u524d\u7f6e\u6b65\u9aa4",id:"java\u5e94\u7528\u524d\u7f6e\u6b65\u9aa4",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u521b\u5efa\u626b\u63cf\u4efb\u52a1",id:"\u521b\u5efa\u626b\u63cf\u4efb\u52a1",level:3},{value:"\u542f\u52a8Java\u5e94\u7528",id:"\u542f\u52a8java\u5e94\u7528",level:3},{value:"\u53c2\u6570\u8bf4\u660e\uff08\u73af\u5883\u53d8\u91cf\uff09\uff1a",id:"\u53c2\u6570\u8bf4\u660e\u73af\u5883\u53d8\u91cf",level:4},{value:"\u53c2\u6570\u8bf4\u660e\uff08java \u53c2\u6570\uff09",id:"\u53c2\u6570\u8bf4\u660ejava-\u53c2\u6570",level:4},{value:"\u8bbf\u95eeJava\u5e94\u7528",id:"\u8bbf\u95eejava\u5e94\u7528",level:3}],s={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5229\u7528SQLE\u5e73\u53f0\u6293\u53d6JAVA\u5e94\u7528\u4e2d\u7684SQL\uff0c\u9009\u53d6\u7684\u4f8b\u5b50\u662f\u4e00\u4e2a",(0,n.kt)("a",{parentName:"p",href:"https://gitee.com/surveyking/surveyking"},"\u5f00\u6e90\u7684\u95ee\u5377\u8c03\u67e5java\u5e94\u7528"),"\uff0c\u67b6\u6784\u7b80\u5355\uff0c\u4e0a\u624b\u76f8\u5bf9\u5bb9\u6613\u3002"),(0,n.kt)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u7c7b\u578b"},"\u652f\u6301\u7684\u6570\u636e\u6e90\u7c7b\u578b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MySQL")),(0,n.kt)("h2",{id:"\u524d\u7f6e\u51c6\u5907"},"\u524d\u7f6e\u51c6\u5907"),(0,n.kt)("h3",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,n.kt)("p",null,"\u51c6\u5907\u4e00\u53f0 linux \u670d\u52a1\u5668\uff0cubuntu\u5373\u53ef\uff0c\u67b6\u6784\u7248\u672c\u6682\u65e0\u8981\u6c42"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5b89\u88c5JAVA")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo apt install default-jdk\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u5e76\u542f\u52a8MySQL\u670d\u52a1")),(0,n.kt)("h3",{id:"\u90e8\u7f72java\u5e94\u7528"},"\u90e8\u7f72java\u5e94\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u51c6\u5907Java\u5e94\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u51c6\u5907Java\u5e94\u7528SQL\u521d\u59cb\u5316\u6587\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u51c6\u5907SQLE\u5b9a\u5236\u7684JDBC jar \u5305",(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"JDBC jar\u5305\u4e3a\u4f01\u4e1a\u7248\u529f\u80fd\uff0c\u5982\u6709\u4f7f\u7528\u9700\u6c42\uff0c\u8bf7\u8054\u7cfb",(0,n.kt)("a",{parentName:"p",href:"/sqle-docs/docs/v3/support/community-support"},"SQLE\u5546\u4e1a\u652f\u6301"),"\u3002")))),(0,n.kt)("h3",{id:"java\u5e94\u7528\u524d\u7f6e\u6b65\u9aa4"},"Java\u5e94\u7528\u524d\u7f6e\u6b65\u9aa4"),(0,n.kt)("p",null,"1\u3001\u521d\u59cb\u5316Java\u5e94\u7528"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'mysql -h127.0.0.1 -P3306 -uroot -p -e "CREATE DATABASE IF NOT EXISTS jw default character set utf8mb4 collate utf8mb4_unicode_ci"\nmysql -h127.0.0.1 -P3306 -uroot -D jw -p < init-mysql.sql\n')),(0,n.kt)("p",null,"2\u3001\u5c06Java\u5e94\u7528Jar\u5305\uff0c\u5b9a\u5236jdbc\u4e0a\u4f20\u670d\u52a1\u5668\u6307\u5b9a\u76ee\u5f55\u4e0b\uff0c\u53ef\u4ee5\u653e\u5728 /opt/surveyking \u76ee\u5f55\u4e0b\uff0c\u793a\u4f8b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"root@ubuntu:/opt/surveyking# pwd\n/opt/surveyking\nroot@ubuntu:/opt/surveyking# ls -l\ntotal 55652\n-rw-r--r-- 1 root root  2477925 Feb 24 08:38 mysql-connector-java-8.0.28-SQLE.jar\n-rw-r--r-- 1 root root 54508748 Feb 24 08:37 surveyking-v0.3.0-beta.4.jar\n")),(0,n.kt)("p",null,"3\u3001\u66ff\u6362Java\u5e94\u7528Jar\u5305\u7684MySQL jdbc jar \u5305"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd /opt/surveyking/\nmkdir jar\ncp surveyking-v0.3.0-beta.4.jar jar/\ncd jar/\njar xvf surveyking-v0.3.0-beta.4.jar # \u89e3\u538bjar\u5305\uff0c\u5982\u679c\u6267\u884c\u5931\u8d25\u4e5f\u53ef\u4f7f\u7528 unzip surveyking-v0.3.0-beta.4.jar \u4ee3\u66ff\ncp ../mysql-connector-java-8.0.28-SQLE.jar BOOT-INF/lib/mysql-connector-java-8.0.26.jar # \u66ff\u6362jdbc\nrm -rf surveyking-v0.3.0-beta.4.jar\njar cvfM0 surveyking-v0.3.0-beta.4.sqle.jar * # \u6253\u5305\nmv surveyking-v0.3.0-beta.4.sqle.jar ../\ncd ..\nrm -rf jar/\n")),(0,n.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,n.kt)("h3",{id:"\u521b\u5efa\u626b\u63cf\u4efb\u52a1"},"\u521b\u5efa\u626b\u63cf\u4efb\u52a1"),(0,n.kt)("p",null,"\u5728SQL\u7ba1\u63a7\u914d\u7f6e\u4e2d\u4e3a\u6570\u636e\u6e90\u5f00\u542f\u667a\u80fd\u626b\u63cf\uff0c\u626b\u63cf\u7c7b\u578b\u9009\u62e9\u201c\u5e94\u7528\u7a0b\u5e8fSQL\u6293\u53d6\u201d\uff0c\u5e76\u586b\u5199\u4ee5\u4e0b\u5b57\u6bb5\u4fe1\u606f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5ba1\u6838\u89c4\u5219\u6a21\u677f\uff1a\u9009\u62e9\u5bf9\u5e94\u7684\u5ba1\u6838\u89c4\u5219\u6a21\u677f\uff1b")),(0,n.kt)("p",null,"\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"p"},"\u63d0\u4ea4"),"\uff0c\u5b8c\u6210\u6570\u636e\u6e90\u4e0a\u7684\u5e94\u7528\u7a0b\u5e8fSQL\u6293\u53d6\u626b\u63cf\u4efb\u52a1\u914d\u7f6e\u3002"),(0,n.kt)("h3",{id:"\u542f\u52a8java\u5e94\u7528"},"\u542f\u52a8Java\u5e94\u7528"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u547d\u4ee4\u9700\u8981\u5728\u672c\u5730\u7f16\u8f91\u66ff\u6362\u5b8c\u53c2\u6570\u540e\uff0c\u4e00\u6b21\u6027\u62f7\u8d1d\u5230\u73af\u5883\u5185\u6267\u884c ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd /opt/surveyking/\nSQLE_COLLECT_ENABLE=true SQLE_HOST=10.186.62.18:10000 SQLE_TASK_NAME=jw_app SQLE_TASK_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcG4iOiJqd19hcHAiLCJleHAiOjE2NzcyMjYxNzcsIm5hbWUiOiJhZG1pbiJ9.3d0pA1hiVnFEWJokSFBwCT8d1pKOYV6SViENj4GFqgI \\\njava -jar surveyking-v0.3.0-beta.4.sqle.jar \\\n--server.port=1991 \\\n--spring.datasource.url=jdbc:mysql://10.186.62.18:3306/jw \\\n--spring.datasource.username=root \\\n--spring.datasource.password=mysqlpass \\\n& >>/opt/surveyking/std.log\n")),(0,n.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e\u73af\u5883\u53d8\u91cf"},"\u53c2\u6570\u8bf4\u660e\uff08\u73af\u5883\u53d8\u91cf\uff09\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SQLE_COLLECT_ENABLE\uff1a\u662f\u5426\u5f00\u542fSQL\u91c7\u96c6"),(0,n.kt)("li",{parentName:"ul"},"SQLE_HOST=10.186.62.18:10000\uff1aSQLE \u670d\u52a1\u5730\u5740 ip:port"),(0,n.kt)("li",{parentName:"ul"},"SQLE_TASK_NAME=jw_app \uff1a\u5ba1\u6838\u4efb\u52a1\u7684\u540d\u79f0"),(0,n.kt)("li",{parentName:"ul"},"SQLE_TASK_TOKEN\uff1a\u5ba1\u6838\u4efb\u52a1\u7684token\uff0c\u4eceSQLE\u9875\u9762\u590d\u5236"),(0,n.kt)("li",{parentName:"ul"},"SQLE_PROJECT_NAME\uff1aSQLE JDBC\u914d\u7f6e\uff1a\u9879\u76ee\u540d")),(0,n.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660ejava-\u53c2\u6570"},"\u53c2\u6570\u8bf4\u660e\uff08java \u53c2\u6570\uff09"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"server.port\uff1aweb\u670d\u52a1\u542f\u7528\u7aef\u53e3"),(0,n.kt)("li",{parentName:"ul"},"spring.datasource.url\uff1ajdbc url"),(0,n.kt)("li",{parentName:"ul"},"spring.datasource.username\uff1ajdbc user name"),(0,n.kt)("li",{parentName:"ul"},"spring.datasource.password\uff1ajdbc password")),(0,n.kt)("h3",{id:"\u8bbf\u95eejava\u5e94\u7528"},"\u8bbf\u95eeJava\u5e94\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u5730\u5740\uff1a\u5982\u679c\u914d\u7f6e\u7684\u7f51\u9875\u7aef\u53e3\u662f1991\u5219\u901a\u8fc7\u7f51\u9875\u8bbf\u95ee",(0,n.kt)("a",{parentName:"li",href:"http://xx.xx.xx.xx:1991"},"http://xx.xx.xx.xx:1991")),(0,n.kt)("li",{parentName:"ul"},"\u7528\u6237\u540d\uff1aadmin"),(0,n.kt)("li",{parentName:"ul"},"\u5bc6\u7801\uff1a123456")))}c.isMDXComponent=!0}}]);