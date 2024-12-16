"use strict";(self.webpackChunksqle_docs=self.webpackChunksqle_docs||[]).push([[7407],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=i(r),s=a,k=m["".concat(c,".").concat(s)]||m[s]||u[s]||o;return r?n.createElement(k,l(l({ref:t},d),{},{components:r})):n.createElement(k,l({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[m]="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},41056:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={title:"Docker\u90e8\u7f72"},l="Docker\u90e8\u7f72",p={unversionedId:"deploy-manual/Docker",id:"deploy-manual/Docker",title:"Docker\u90e8\u7f72",description:"Docker hub \u5730\u5740",source:"@site/docs/deploy-manual/Docker.md",sourceDirName:"deploy-manual",slug:"/deploy-manual/Docker",permalink:"/sqle-docs/docs/deploy-manual/Docker",draft:!1,editUrl:"https://github.com/actiontech/sqle-docs/tree/main/docs/deploy-manual/Docker.md",tags:[],version:"current",frontMatter:{title:"Docker\u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"RPM \u5b89\u88c5",permalink:"/sqle-docs/docs/deploy-manual/rpm"},next:{title:"Docker Compose \u90e8\u7f72",permalink:"/sqle-docs/docs/deploy-manual/DockerCompose"}},c={},i=[{value:"Docker hub \u5730\u5740",id:"docker-hub-\u5730\u5740",level:2},{value:"Docker \u53c2\u8003\u547d\u4ee4",id:"docker-\u53c2\u8003\u547d\u4ee4",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u6ce8\u610f\u70b9",id:"\u6ce8\u610f\u70b9",level:2}],d={toc:i};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker\u90e8\u7f72"},"Docker\u90e8\u7f72"),(0,a.kt)("h2",{id:"docker-hub-\u5730\u5740"},"Docker hub \u5730\u5740"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/actiontech/sqle-ce"},"actiontech/sqle-ce")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u63a8\u8350\u914d\u7f6e\u56fd\u5185\u955c\u50cf\u6e90\uff0c\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/sqle-docs/docs/FAQ/mirror"},"\u955c\u50cf\u63a8\u8350"))),(0,a.kt)("h2",{id:"docker-\u53c2\u8003\u547d\u4ee4"},"Docker \u53c2\u8003\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'docker run -d -it \\\n--name sqle-server \\\n-p 10000:10000 \\\n-p 10001:10001 \\\n-e MYSQL_HOST="10.10.10.10" \\\n-e MYSQL_PORT=3306 \\\n-e MYSQL_USER="root" \\\n-e MYSQL_PASSWORD="123456" \\\n-e MYSQL_DMS_SCHEMA="dms" \\\n-e MYSQL_SQLE_SCHEMA="sqle" \\\nactiontech/sqle-ce:latest   \n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u63d0\u4f9b\u6700\u65b0\u7248\u672c\u7684\u4e0b\u8f7d\u955c\u50cf\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u7248\u672c\u7684\u955c\u50cf\uff0c\u53ef\u4ee5\u8bbf\u95eeSQLE\u7684DockerHub\u9009\u7528\u60f3\u8981\u7684\u7248\u672c\u3002")),(0,a.kt)("h3",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("p",null,"\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u4f20\u9012\u53c2\u6570\uff0c\u8fd9\u4e9b\u6307\u5b9a\u7684\u914d\u7f6e\u4f1a\u6620\u5c04\u5230 /opt/sqle/etc/config.yaml \u914d\u7f6e\u5185\uff0c\u6307\u5b9a\u6570\u636e\u5e93\u7684\u914d\u7f6e\u7b49\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53d8\u91cf"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MYSQL_HOST"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee\u5730\u5740")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MYSQL_PORT"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee\u7aef\u53e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MYSQL_USER"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7528\u6237")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MYSQL_PASSWORD"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5bc6\u7801")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MYSQL_DMS_SCHEMA"),(0,a.kt)("td",{parentName:"tr",align:null},"DMS \u670d\u52a1\u4f7f\u7528\u7684\u6307\u5b9a\u7684 schema")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MYSQL_SQLE_SCHEMA"),(0,a.kt)("td",{parentName:"tr",align:null},"SQLE \u670d\u52a1\u4f7f\u7528\u7684\u6307\u5b9a\u7684 schema")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DEBUG"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u8f93\u51fa debug \u65e5\u5fd7\uff0c\u9ed8\u8ba4\u4e3afalse")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTO_MIGRATE_TABLE"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u81ea\u52a8\u521b\u5efa\u8868\u683c\u548c\u521d\u59cb\u5316\u6570\u636e\uff0c\u9ed8\u8ba4\u4e3atrue")))),(0,a.kt)("h2",{id:"\u6ce8\u610f\u70b9"},"\u6ce8\u610f\u70b9"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 docker \u547d\u4ee4\u8fd0\u884c\u5bb9\u5668\u9700\u8981\u63d0\u524d\u51c6\u5907 MySQL \u670d\u52a1\u5e76\u4e14\u521b\u5efa\u5bf9\u5e94\u7684\u6570\u636e\u5e93 schema\uff0c\u521b\u5efa\u6570\u636e\u5e93\u7684SQL\u53ef\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"/sqle-docs/docs/deploy-manual/rpm"},"RPM \u90e8\u7f72"),"\u3002")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c SQLE \u5bb9\u5668\u542f\u52a8\u5931\u8d25\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"docker logs sqle-server"),"\u67e5\u770b\u542f\u7528\u65e5\u5fd7\uff0c\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"sqle-server"),"\u662f\u5bb9\u5668\u540d\u79f0\u3002")))}m.isMDXComponent=!0}}]);