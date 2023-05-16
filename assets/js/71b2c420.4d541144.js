"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1,description:"Here's how the naming works on Odysee.",sidebar_custom_props:{cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:6,thumbnailLocation:"left",tileColor:"blue"}},i="Naming",c={unversionedId:"category-blockchain/category-staking/naming",id:"category-blockchain/category-staking/naming",title:"Naming",description:"Here's how the naming works on Odysee.",source:"@site/docs/category-blockchain/category-staking/naming.mdx",sourceDirName:"category-blockchain/category-staking",slug:"/category-blockchain/category-staking/naming",permalink:"/category-blockchain/category-staking/naming",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/docs/category-blockchain/category-staking/naming.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Here's how the naming works on Odysee.",sidebar_custom_props:{cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:6,thumbnailLocation:"left",tileColor:"blue"}},sidebar:"helphub",previous:{title:"Staking",permalink:"/category-blockchain/category-staking/"},next:{title:"Ways to Increase LBC Stake",permalink:"/category-blockchain/category-staking/increase"}},s={},l=[],h={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"naming"},"Naming"),(0,r.kt)("p",null,"While viewing a channel or a piece of content, you may have noticed a colon followed by a number or letter at the end of the URL."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80921344/193660297-c4dd734e-5275-4095-aeb9-266aac07979e.png",alt:"image"})),(0,r.kt)("p",null,"This isn't just for show or a stylistic decision. This indicates that particular channel or content's ",(0,r.kt)("em",{parentName:"p"},"Claim ID"),", which is simply a register of its metadata on LBRY."),(0,r.kt)("p",null,'Naming on Odysee is like an auction. For example, say there are two uploads with the same URL: "cat."'),(0,r.kt)("p",null,'One URL shows: "odysee.com/cat:7b", and the other shows "odysee.com/cat:a"'),(0,r.kt)("p",null,'If you were to click on the link, "odysee.com/cat," which one of these two videos, that both have the URL "cat," would the link direct to?'),(0,r.kt)("p",null,'The answer is whichever video has the higher LBC stake. Let\'s say "cat:7b" has the higher LBC stake. To find this video, you could search "odysee.com/cat:7b", or you could simply search "odysee.com/cat" because it has the highest stake.'),(0,r.kt)("p",null,'To find the video with the lower stake, you would have to search the full URL, "odysee.com/cat:a".'),(0,r.kt)("p",null,"The highest staked content will also be reflected on search results within Odysee itself."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/80921344/193660409-130d97c7-e963-4bf8-b041-03f091dffe93.png",alt:"image"})),(0,r.kt)("p",null,'If you do a search for "cat" on Odysee, the file with the highest LBC stake for that result will appear at the top of the results.'),(0,r.kt)("p",null,"If the top claim was outbid by a higher stake, the URL wouldn't change immediately. For every month a name is controlled, 1 day is added to the waiting period, for a maximum of 7 days (after 7 months)."))}p.isMDXComponent=!0}}]);