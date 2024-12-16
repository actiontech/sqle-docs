"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[9956],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),d=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,k=p["".concat(u,".").concat(m)]||p[m]||s[m]||l;return a?r.createElement(k,o(o({ref:t},c),{},{components:a})):r.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},25595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u914d\u7f6e\u65b9\u6cd5"},o="\u914d\u7f6e\u65b9\u6cd5",i={unversionedId:"user-manual/sql-workbench/how-to-configure",id:"user-manual/sql-workbench/how-to-configure",title:"\u914d\u7f6e\u65b9\u6cd5",description:"\u5b89\u88c5CloudBeaver",source:"@site/docs/user-manual/sql-workbench/how-to-configure.md",sourceDirName:"user-manual/sql-workbench",slug:"/user-manual/sql-workbench/how-to-configure",permalink:"/sqle-docs/docs/user-manual/sql-workbench/how-to-configure",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/docs/user-manual/sql-workbench/how-to-configure.md",tags:[],version:"current",frontMatter:{title:"\u914d\u7f6e\u65b9\u6cd5"},sidebar:"tutorialSidebar",previous:{title:"\u529f\u80fd\u8bf4\u660e",permalink:"/sqle-docs/docs/user-manual/sql-workbench/introduction"},next:{title:"\u4f7f\u7528\u5b9a\u5236\u5305\u5feb\u901f\u642d\u5efa\u73af\u5883",permalink:"/sqle-docs/docs/user-manual/sql-workbench/how-to-use"}},u={},d=[{value:"\u5b89\u88c5CloudBeaver",id:"\u5b89\u88c5cloudbeaver",level:3},{value:"\u914d\u7f6eCloudBeaver",id:"\u914d\u7f6ecloudbeaver",level:3},{value:"\u6b65\u9aa4\u4e00 \u4fee\u6539CloudBeaver\u914d\u7f6e\u6587\u4ef6cloudbeaver.conf",id:"\u6b65\u9aa4\u4e00-\u4fee\u6539cloudbeaver\u914d\u7f6e\u6587\u4ef6cloudbeaverconf",level:4},{value:"\u6b65\u9aa4\u4e8c \u91cd\u542fCloudBeaver",id:"\u6b65\u9aa4\u4e8c-\u91cd\u542fcloudbeaver",level:4},{value:"\u6b65\u9aa4\u4e09 \u521d\u59cb\u5316CloudBeaver",id:"\u6b65\u9aa4\u4e09-\u521d\u59cb\u5316cloudbeaver",level:4},{value:"\u6b65\u9aa4\u56db \u914d\u7f6e\u5b8c\u6210\u540e\u68c0\u67e5",id:"\u6b65\u9aa4\u56db-\u914d\u7f6e\u5b8c\u6210\u540e\u68c0\u67e5",level:4},{value:"\u914d\u7f6eSQLE",id:"\u914d\u7f6esqle",level:3},{value:"\u6b65\u9aa4\u4e00 \u4fee\u6539SQLE\u914d\u7f6e\u6587\u4ef6\u4e2dCloudBeaver\u53c2\u6570",id:"\u6b65\u9aa4\u4e00-\u4fee\u6539sqle\u914d\u7f6e\u6587\u4ef6\u4e2dcloudbeaver\u53c2\u6570",level:4},{value:"\u6b65\u9aa4\u4e8c \u91cd\u542fSQLE",id:"\u6b65\u9aa4\u4e8c-\u91cd\u542fsqle",level:4},{value:"\u6b65\u9aa4\u4e09 \u68c0\u67e5SQLE\u662f\u5426\u5df2\u6210\u529f\u96c6\u6210CloudBeaver",id:"\u6b65\u9aa4\u4e09-\u68c0\u67e5sqle\u662f\u5426\u5df2\u6210\u529f\u96c6\u6210cloudbeaver",level:4},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:3}],c={toc:d};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u914d\u7f6e\u65b9\u6cd5"},"\u914d\u7f6e\u65b9\u6cd5"),(0,n.kt)("h3",{id:"\u5b89\u88c5cloudbeaver"},"\u5b89\u88c5CloudBeaver"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"SQLE\u76ee\u524d\u652f\u6301\u7684CloudBeaver\u7248\u672c\u5305\u62ec22.2.0\u300122.2.1\u300122.2.3\u300122.3.1\u300123.2.1\u7248\u672c,\u63a8\u8350\u4f7f\u752823.2.1\u7248\u672c")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"docker \u90e8\u7f72\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dbeaver/cloudbeaver/wiki/Run-Docker-Container"},"https://github.com/dbeaver/cloudbeaver/wiki/Run-Docker-Container")),(0,n.kt)("li",{parentName:"ul"},"\u6e90\u7801\u5b89\u88c5\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dbeaver/cloudbeaver/wiki/Build-and-deploy"},"https://github.com/dbeaver/cloudbeaver/wiki/Build-and-deploy"))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"docker\u542f\u52a8\u6307\u4ee4\u53c2\u8003")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"docker run -d --restart unless-stopped --name cloudbeaver --privileged -it -p 8978:8978 dbeaver/cloudbeaver:23.2.1\n")),(0,n.kt)("ol",{parentName:"admonition",start:2},(0,n.kt)("li",{parentName:"ol"},"\u81ea2024\u5e7410\u6708\u8d77\uff0c\u5e73\u53f0\u4e3adocker-compose\u96c6\u6210\u4e86CloudBeaver\u90e8\u7f72\u529f\u80fd\u3002\u73b0\u5728\uff0c\u5f53\u7528\u6237\u9009\u62e9\u4f7f\u7528",(0,n.kt)("a",{parentName:"li",href:"/sqle-docs/docs/deploy-manual/DockerCompose"},"docker-compose"),"\u8fdb\u884c\u90e8\u7f72\u65f6\uff0c\u7cfb\u7edf\u5c06\u81ea\u52a8\u5904\u7406CloudBeaver\u7684\u90e8\u7f72\u5de5\u4f5c\uff0c\u7528\u6237\u65e0\u9700\u8fdb\u884c\u4efb\u4f55\u989d\u5916\u7684\u624b\u52a8\u64cd\u4f5c\u3002"))),(0,n.kt)("h3",{id:"\u914d\u7f6ecloudbeaver"},"\u914d\u7f6eCloudBeaver"),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e00-\u4fee\u6539cloudbeaver\u914d\u7f6e\u6587\u4ef6cloudbeaverconf"},"\u6b65\u9aa4\u4e00 \u4fee\u6539CloudBeaver\u914d\u7f6e\u6587\u4ef6cloudbeaver.conf"),(0,n.kt)("p",null,"cloudbeaver.conf\u914d\u7f6e\u6587\u4ef6\u901a\u5e38\u5728docker\u5bb9\u5668\u7684 /opt/cloudbeaver/conf \u76ee\u5f55\u4e0b"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u6587\u4ef6\u540d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b\u4fee\u6539"),(0,n.kt)("th",{parentName:"tr",align:null},"\u4fee\u6539\u5185\u5bb9"),(0,n.kt)("th",{parentName:"tr",align:null},"\u4fee\u6539\u539f\u56e0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cloudbeaver.conf"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5c06server.rootURI\u7684\u503c\u6539\u4e3a'/sql_query'\uff1b\u5c06server.serviceURI \u7684\u503c\u6539\u4e3a '/api/'(server.serviceURI\u9ed8\u8ba4\u5c31\u662f/api/)"),(0,n.kt)("td",{parentName:"tr",align:null},"SQLE\u76ee\u524d\u53ea\u652f\u6301\u4ee3\u7406\u8fd9\u4e2a\u8def\u7531")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"config",src:a(76848).Z,width:"881",height:"1051"})),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e8c-\u91cd\u542fcloudbeaver"},"\u6b65\u9aa4\u4e8c \u91cd\u542fCloudBeaver"),(0,n.kt)("p",null,"\u914d\u7f6eCloudBeaver\u540e\uff0c\u9700\u8981\u91cd\u542fCloudBeaver\u4ee5\u4f7f\u914d\u7f6e\u9879\u751f\u6548"),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e09-\u521d\u59cb\u5316cloudbeaver"},"\u6b65\u9aa4\u4e09 \u521d\u59cb\u5316CloudBeaver"),(0,n.kt)("p",null,"1.\u4f7f\u7528 http://{IP}:8978/sql_query#/ \u53ef\u4ee5\u8fdb\u5165CloudBeaver\u5373\u4ee3\u8868\u914d\u7f6e\u6b63\u786e\n",(0,n.kt)("img",{alt:"config",src:a(60179).Z,width:"1978",height:"776"}),"\n2.\u8bbe\u7f6e\u7ba1\u7406\u5458\u7528\u6237\u540d\u53ca\u5bc6\u7801\uff1a\u8be5\u7528\u6237\u540d\u53ca\u5bc6\u7801\u5c06\u7528\u4e8e\u540e\u7eedSQLE\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u5e76\u786e\u8ba4security\u670d\u52a1\u5f00\u542f\n",(0,n.kt)("img",{alt:"config",src:a(12956).Z,width:"1716",height:"845"}),"\n3.\u5b8c\u6210\u8bbe\u7f6e\uff0c\u767b\u5f55\u7ba1\u7406\u5458\u8d26\u53f7\u6210\u529f\uff0c\u5219\u521d\u59cb\u5316\u6210\u529f\n",(0,n.kt)("img",{alt:"config",src:a(48512).Z,width:"1799",height:"564"})),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u56db-\u914d\u7f6e\u5b8c\u6210\u540e\u68c0\u67e5"},"\u6b65\u9aa4\u56db \u914d\u7f6e\u5b8c\u6210\u540e\u68c0\u67e5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u786e\u8ba4\u89d2\u8272\u6b63\u786e:","[\u8bbf\u95ee\u7ba1\u7406]"," - ","[\u89d2\u8272]"," \u5904\u5e94\u5f53\u53ea\u6709admin\u548cuser\u4e24\u4e2a\u89d2\u8272")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u786e\u8ba4\u6ca1\u6709\u51b2\u7a81\u7528\u6237:","[\u8bbf\u95ee\u7ba1\u7406]"," - ","[\u7528\u6237]"," \u5904\u4e0d\u5e94\u5f53\u6709\u540d\u79f0\u683c\u5f0f\u4e3a sqle-xxx\u7684\u7528\u6237\u5b58\u5728, \u8fd9\u4f1a\u4e0eSQLE\u81ea\u52a8\u521b\u5efa\u7684\u7528\u6237\u51b2\u7a81"))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u7528admin \u8df3\u8f6cCloudBeaver\u7684\u65f6\u5019\uff0cSQLE\u4f1a\u5728CloudBeaver\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7528\u6237\u53ebsqle-admin \uff0c\u540c\u65f6\u628a\u8fd9\u4e2a\u7528\u6237\u7f13\u5b58\u5230\u6570\u636e\u5e93\u91cc\uff0c\u6bcf\u6b21\u8df3\u8f6c\u5148\u53bb\u6570\u636e\u5e93\u91cc\u627e\u8fd9\u4e2a\u7528\u6237\uff0c\u5982\u679c\u5df2\u7ecf\u5b58\u5728\uff0c\u5c31\u4f1a\u62ff\u8fd9\u4e2a\u7528\u6237\u76f4\u63a5\u53bb\u767b\u9646cb ")),(0,n.kt)("h3",{id:"\u914d\u7f6esqle"},"\u914d\u7f6eSQLE"),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e00-\u4fee\u6539sqle\u914d\u7f6e\u6587\u4ef6\u4e2dcloudbeaver\u53c2\u6570"},"\u6b65\u9aa4\u4e00 \u4fee\u6539SQLE\u914d\u7f6e\u6587\u4ef6\u4e2dCloudBeaver\u53c2\u6570"),(0,n.kt)("p",null,"\u6253\u5f00SQLE\u914d\u7f6e\u6587\u4ef6\uff0c\u914d\u7f6e\u6587\u4ef6\u4e00\u822c\u4f4d\u4e8eSQLE\u5de5\u4f5c\u76ee\u5f55\u7684etc\u76ee\u5f55\u4e0b, \u6587\u4ef6\u540d\u4e00\u822c\u4e3aconfig.yaml"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5b57\u6bb5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cloudbeaver"),(0,n.kt)("td",{parentName:"tr",align:null},"sql\u5de5\u4f5c\u53f0\u53c2\u6570")))),(0,n.kt)("p",null,"\u5b50\u53c2\u6570\u5728\u4e0b\u4e00\u7ea7, \u9700\u8981\u6ce8\u610f\u7f29\u8fdb"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5b57\u6bb5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"host"),(0,n.kt)("td",{parentName:"tr",align:null},"cloudbeaver IP\u5730\u5740")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"port"),(0,n.kt)("td",{parentName:"tr",align:null},"cloudbeaver\u8bbf\u95ee\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"admin_user"),(0,n.kt)("td",{parentName:"tr",align:null},"cloudbeaver\u7ba1\u7406\u5458\u8d26\u6237")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"admin_password"),(0,n.kt)("td",{parentName:"tr",align:null},"cloudbeaver\u7ba1\u7406\u5458\u5bc6\u7801")))),(0,n.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u53c2\u8003\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"sqleconfig",src:a(92329).Z,width:"1410",height:"1820"})),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e8c-\u91cd\u542fsqle"},"\u6b65\u9aa4\u4e8c \u91cd\u542fSQLE"),(0,n.kt)("p",null,"\u9700\u8981\u91cd\u542f\u4ee5\u4f7f\u914d\u7f6e\u9879\u751f\u6548\u3002"),(0,n.kt)("h4",{id:"\u6b65\u9aa4\u4e09-\u68c0\u67e5sqle\u662f\u5426\u5df2\u6210\u529f\u96c6\u6210cloudbeaver"},"\u6b65\u9aa4\u4e09 \u68c0\u67e5SQLE\u662f\u5426\u5df2\u6210\u529f\u96c6\u6210CloudBeaver"),(0,n.kt)("p",null,"SQLE\u91cd\u542f\u540e\u8fdb\u5165\u5e73\u53f0\uff0c\u70b9\u51fb\u6253\u5f00SQL\u5de5\u4f5c\u53f0\uff0c\u82e5\u6210\u529f\u8df3\u8f6c\uff0c\u5219\u8bf4\u660e\u5f53\u524dSQLE\u5e73\u53f0\u5df2\u6210\u529f\u96c6\u6210CloudBeaver\u3002"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u5e73\u53f0\u7ba1\u7406\u5458\u8d26\u6237\u9700\u8981\u6709 ","[\u6dfb\u52a0/\u4fee\u6539/\u5220\u9664][\u7528\u6237/\u5b9e\u4f8b/\u6743\u9650]"," \u7684\u6743\u9650"),(0,n.kt)("li",{parentName:"ul"},"SQLE\u96c6\u6210CloudBeaver\u540e\u8bf7\u52ff\u4f7f\u7528CloudBeaver\u7684\u7ba1\u7406\u5458\u8d26\u6237\u76f4\u63a5\u64cd\u4f5cCloudBeaver\u7684\u7528\u6237/\u5b9e\u4f8b/\u6743\u9650"))),(0,n.kt)("h3",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,n.kt)("p",null,"\u5982\u679c\u5728\u914d\u7f6eCloudBeaver\u65f6\uff0c\u51fa\u73b0\u8df3\u8f6c\u4e0d\u6b63\u786e\u7b49\u95ee\u9898\uff0c\u53ef\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"https://github.com/actiontech/sqle/discussions/1521"},"\u5982\u4f55\u89e3\u51b3CloudBeaver\u8df3\u8f6c\u4e0d\u6b63\u786e\u7684\u95ee\u9898"),"\u3002"))}p.isMDXComponent=!0},60179:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/CBconfig1-6d2773c3a4976c8ce051807bb62f1a98.png"},12956:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/CBconfig2-c628e74d733cf5d4969885a69e49c070.png"},48512:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/CBconfig3-365f3638bcc0069611c38b496e412cd9.png"},76848:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/config-a92c17d6bc49b97f961dcc3904ada370.png"},92329:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/sqleconfig-2ec47585b7a0cb18367a3375a2b32a8e.png"}}]);