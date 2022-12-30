"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[5],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),m=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=m(t.components);return r.createElement(i.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=m(n),c=a,k=u["".concat(i,".").concat(c)]||u[c]||s[c]||l;return n?r.createElement(k,o(o({ref:e},d),{},{components:n})):r.createElement(k,o({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[u]="string"==typeof t?t:a,o[1]=p;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5307:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"},o="\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e",p={unversionedId:"deploy-manual/intro",id:"deploy-manual/intro",title:"\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e",description:"SQLE\u7684\u914d\u7f6e\u6587\u4ef6\u91c7\u7528yml\u7684\u683c\u5f0f\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f4d\u4e8eSQLE\u5b89\u88c5\u76ee\u5f55\u4e0b\uff0c\u8def\u5f84\u4e0b\u7684./etc/sqled.yml",source:"@site/docs/deploy-manual/intro.md",sourceDirName:"deploy-manual",slug:"/deploy-manual/intro",permalink:"/sqle-docs/docs/deploy-manual/intro",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/packages/docs/deploy-manual/intro.md",tags:[],version:"current",frontMatter:{title:"\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"},sidebar:"tutorialSidebar",previous:{title:"\u5546\u4e1a\u652f\u6301",permalink:"/sqle-docs/docs/support"},next:{title:"\u529f\u80fd\u4ecb\u7ecd",permalink:"/sqle-docs/docs/user-manual/project/intro"}},i={},m=[{value:"\u9ed8\u8ba4\u6587\u4ef6\u53c2\u8003",id:"\u9ed8\u8ba4\u6587\u4ef6\u53c2\u8003",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:2},{value:"sqle_config",id:"sqle_config",level:3},{value:"db_config",id:"db_config",level:3}],d={toc:m};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"},"\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"SQLE\u7684\u914d\u7f6e\u6587\u4ef6\u91c7\u7528yml\u7684\u683c\u5f0f\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f4d\u4e8eSQLE\u5b89\u88c5\u76ee\u5f55\u4e0b\uff0c\u8def\u5f84\u4e0b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"./etc/sqled.yml"))),(0,a.kt)("h2",{id:"\u9ed8\u8ba4\u6587\u4ef6\u53c2\u8003"},"\u9ed8\u8ba4\u6587\u4ef6\u53c2\u8003"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"server:\n sqle_config:\n  server_port: 10000\n  enable_https: false\n  cert_file_path: './etc/cert.pem'\n  key_file_path: './etc/key.pem'\n  auto_migrate_table: true\n  debug_log: false\n  log_path: './logs'\n  log_max_size_mb: 1024\n  log_max_backup_number: 2\n  secret_key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' #\u4ece v1.2203.0 \u7248\u672c\u5f15\u5165\n db_config:\n  mysql_cnf:\n   mysql_host: '127.0.0.1'\n   mysql_port: 3306\n   mysql_user: 'root'\n   mysql_password: '123456'\n   mysql_schema: 'sqle'\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,a.kt)("h3",{id:"sqle_config"},"sqle_config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"server_port"),(0,a.kt)("td",{parentName:"tr",align:null},"sqle \u670d\u52a1\u7684 http \u7aef\u53e3\uff0c\u9ed8\u8ba410000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enable_https"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542fhttps\uff0c\u9ed8\u8ba4\u4e0d\u5f00\u542f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cert_file_path"),(0,a.kt)("td",{parentName:"tr",align:null},"https \u8bc1\u4e66\u8def\u5f84")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"key_file_path"),(0,a.kt)("td",{parentName:"tr",align:null},"https \u79c1\u94a5\u8def\u5f84")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"auto_migrate_table"),(0,a.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u521b\u5efa\u8868\u7ed3\u6784\uff0c\u521d\u59cb\u5316\u6570\u636e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"debug_log"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f00\u542fdebug\u6a21\u5f0f\uff0c\u6253\u5370\u66f4\u591a\u65e5\u5fd7\uff0c\u4f1a\u6253\u5370\u4e1a\u52a1SQL\uff0c\u5f00\u53d1\u73af\u5883\u53ef\u5f00\u542f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"log_path"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u76ee\u5f55")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"log_max_size_mb"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5355\u4e2a\u65e5\u5fd7\u6587\u4ef6\u6700\u5927\u5927\u5c0f\uff0c\u5355\u4f4dMB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"log_max_backup_number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u6587\u4ef6\u6700\u5927\u5907\u4efd\u6570\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"secret_key"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5168\u5c40AES\u52a0\u5bc6\u79d8\u94a5\uff0c\u5f71\u54cd\u767b\u5f55\u548c\u7528\u6237\u5bc6\u7801\u7b49\u7684\u5b58\u50a8\uff1b",(0,a.kt)("strong",{parentName:"td"},"\u751f\u6210\u73af\u5883\u5efa\u7acb\u586b\u5199\u66ff\u6362\u6389\u7a0b\u5e8f\u9ed8\u8ba4\u503c"),"\uff1b\u683c\u5f0f\u662f32\u4f4d\u968f\u673a\u5b57\u7b26\u4e32")))),(0,a.kt)("h3",{id:"db_config"},"db_config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mysql_host"),(0,a.kt)("td",{parentName:"tr",align:null},"SQLE\u5b58\u50a8\u5e93\u7684\u5730\u5740")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mysql_port"),(0,a.kt)("td",{parentName:"tr",align:null},"SQLE\u5b58\u50a8\u5e93\u7684\u7aef\u53e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mysql_user"),(0,a.kt)("td",{parentName:"tr",align:null},"SQLE\u5b58\u50a8\u5e93\u7684\u6570\u636e\u5e93\u7528\u6237")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mysql_password"),(0,a.kt)("td",{parentName:"tr",align:null},"SQLE\u5b58\u50a8\u5e93\u7684\u6570\u636e\u5e93\u5bc6\u7801")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mysql_schema"),(0,a.kt)("td",{parentName:"tr",align:null},"SQLE\u5b58\u50a8\u5e93\u7684\u6570\u636e\u5e93 schema")))))}u.isMDXComponent=!0}}]);