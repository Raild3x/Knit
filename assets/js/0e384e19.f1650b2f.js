"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=i,y=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},59881:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={sidebar_position:1},l="About",c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"About",description:"A lightweight framework for Roblox that simplifies communication between core parts of your game and seamlessly bridges the gap between the server and the client.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/Knit/docs/intro",editUrl:"https://github.com/Sleitnick/Knit/edit/master/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Getting Started",permalink:"/Knit/docs/gettingstarted"}},u=[{value:"Why Choose Knit?",id:"why-choose-knit",children:[{value:"Structure (Where you want it)",id:"structure-where-you-want-it",children:[],level:3},{value:"Server / Client Bridge",id:"server--client-bridge",children:[],level:3},{value:"Framework / Library Hybrid",id:"framework--library-hybrid",children:[],level:3},{value:"For Everyone",id:"for-everyone",children:[],level:3},{value:"Widely Used",id:"widely-used",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"about"},"About"),(0,o.kt)("p",null,"A lightweight framework for Roblox that simplifies communication between core parts of your game and seamlessly bridges the gap between the server and the client."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/Knit/docs/gettingstarted"},"Getting Started")," guide to start using Knit."),(0,o.kt)("h2",{id:"why-choose-knit"},"Why Choose Knit?"),(0,o.kt)("h3",{id:"structure-where-you-want-it"},"Structure (Where you want it)"),(0,o.kt)("p",null,"At the core of Knit are services and controllers, which are just singleton classes that can be easily created. These providers give basic structure to a game. However, not all code is required to live within this sytem. External code in your game can still tie into Knit's services and controllers."),(0,o.kt)("h3",{id:"server--client-bridge"},"Server / Client Bridge"),(0,o.kt)("p",null,"Knit bridges the server/client boundary through declarative code that is easy to set up and easy to use. No need to manually create RemoteEvents and RemoteFunctions anymore. Knit handles the core networking for you."),(0,o.kt)("h3",{id:"framework--library-hybrid"},"Framework / Library Hybrid"),(0,o.kt)("p",null,"While advertised as a game framework, Knit straddles the line between a framework and a library. While Knit provides optional structure using services and controllers, developers can choose if and how these structures are utilized. Developers are also responsible for creating the runtime scripts for Knit (i.e. bootstrapping), which allows easy extensibility of the framework."),(0,o.kt)("h3",{id:"for-everyone"},"For Everyone"),(0,o.kt)("p",null,"Knit is designed to be used by everyone, from professional game studios to someone just diving into Roblox development. For the pros, Knit is available via Wally and can be synced into Studio with Rojo. For the beginners, Knit is available as a standalone model that can be drag-and-dropped into Studio."),(0,o.kt)("h3",{id:"widely-used"},"Widely Used"),(0,o.kt)("p",null,"Knit is battle-tested in the Roblox ecosystem, as it has been used by many games across the platform."))}p.isMDXComponent=!0}}]);