"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[9423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,u(u({ref:t},l),{},{components:r})):n.createElement(f,u({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function u(e){let{children:t,hidden:r,className:u}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>O});var n=r(7462),a=r(7294),o=r(6010),u=r(2466),i=r(6775),c=r(1980),s=r(7392),l=r(12);function d(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function y(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[u,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,s]=f({queryString:r,groupId:n}),[d,y]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,l.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=c??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),y(e)}),[s,y,o]),tabValues:o}}var b=r(2389);const g="tabList__CuJ",v="tabItem_LNqP";function h(e){let{className:t,block:r,selectedValue:i,selectValue:c,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.o5)(),p=e=>{const t=e.currentTarget,r=l.indexOf(t),n=s[r].value;n!==i&&(d(t),c(n))},m=e=>{var t;let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:u}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>l.push(e),onKeyDown:m,onClick:p},u,{className:(0,o.Z)("tabs__item",v,null==u?void 0:u.className,{"tabs__item--active":i===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=y(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(h,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function O(e){const t=(0,b.Z)();return a.createElement(T,(0,n.Z)({key:String(t)},e))}},9372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),o=r(4866),u=r(5162);const i={sidebar_position:1,description:"Visite guid\xe9e du processus d'inscription",sidebar_custom_props:{faIcon:"",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:6,thumbnailLocation:"top",tileColor:"cream"}},c="Cr\xe9ation d'un compte",s={unversionedId:"category-basics/category-accountcreation/accountcreation",id:"category-basics/category-accountcreation/accountcreation",title:"Cr\xe9ation d'un compte",description:"Visite guid\xe9e du processus d'inscription",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/category-basics/category-accountcreation/accountcreation.mdx",sourceDirName:"category-basics/category-accountcreation",slug:"/category-basics/category-accountcreation/accountcreation",permalink:"/fr/category-basics/category-accountcreation/accountcreation",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/category-basics/category-accountcreation/accountcreation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Visite guid\xe9e du processus d'inscription",sidebar_custom_props:{faIcon:"",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:6,thumbnailLocation:"top",tileColor:"cream"}},sidebar:"helphub",previous:{title:"Setting Up Your Account",permalink:"/fr/category-basics/category-accountcreation/"},next:{title:"V\xe9rification",permalink:"/fr/category-basics/category-accountcreation/verification"}},l={},d=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=p("PrimaryOdyseeButton"),f=p("Image"),y=p("OdyseeButtonRound"),b=p("OdyseeIcon"),g={toc:d};function v(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cr\xe9ation-dun-compte"},"Cr\xe9ation d'un compte"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"web",label:"Web",default:!0,mdxType:"TabItem"},"Pour cr\xe9er un compte, vous devez cliquer sur ",(0,a.kt)(m,{url:"https://odysee.com/$/signup",mdxType:"PrimaryOdyseeButton"},"Cr\xe9er un compte")," pour acc\xe9der \xe0 l'\xe9cran d'inscription.",(0,a.kt)(f,{img:"/img/fr/cre\u0301ationducompte01.png",mdxType:"Image"})),(0,a.kt)(u.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},"Sur un t\xe9l\xe9phone portable, vous cliquerez sur l'ic\xf4ne repr\xe9sentant une personne ",(0,a.kt)(y,{mdxType:"OdyseeButtonRound"},(0,a.kt)(b,{type:"person",mdxType:"OdyseeIcon"})),", qui affichera ",(0,a.kt)(m,{url:"https://odysee.com/$/signup",mdxType:"PrimaryOdyseeButton"},"Cr\xe9er un compte"),(0,a.kt)("a",{href:"https://odysee.com/$/signup"},"Registrierungsseite")," dans le menu d\xe9roulant.",(0,a.kt)(f,{img:"/img/fr/Mcre\u0301eruncompte.png",mdxType:"Image"}))),(0,a.kt)("p",null,"Sur l'\xe9cran d'inscription, vous devrez saisir une adresse \xe9lectronique et un mot de passe. Nous n'avons pas d'exigences en mati\xe8re de force du mot de passe, mais nous recommandons fortement des mots de passe longs et complexes. Nous v\xe9rifierons \xe9galement si votre mot de passe a d\xe9j\xe0 fait l'objet d'une fuite dans le pass\xe9, auquel cas vous devrez en saisir un nouveau."),(0,a.kt)(f,{src:"/img/fr/cre\u0301ationducompte03.png",mdxType:"Image"}),(0,a.kt)("admonition",{title:"Important ",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},'Si vous essayez de synchroniser une cha\xeene YouTube, assurez-vous de cocher la case "Synchroniser ma cha\xeene YouTube "'),".")),(0,a.kt)(f,{src:"/img/fr/cre\u0301ationducompte04.png",mdxType:"Image"}),(0,a.kt)("p",null,"Pour une description d\xe9taill\xe9e du reste du processus de synchronisation, ainsi que d'autres informations sur le programme de synchronisation de YouTube, consultez notre guide de synchronisation de YouTube en cliquant ",(0,a.kt)("a",{parentName:"p",href:"http://chihuahuaspin.com/"},"ici"),"."),(0,a.kt)("p",null,"Apr\xe8s avoir cliqu\xe9 sur le bouton ",(0,a.kt)(m,{url:"https://odysee.com/$/signup",mdxType:"PrimaryOdyseeButton"},"Cr\xe9er un compte")," de l'\xe9cran pr\xe9c\xe9dent, il vous sera demand\xe9 de confirmer votre courriel. Cela implique de cliquer sur un lien et de passer un CAPTCHA."),(0,a.kt)(f,{src:"/img/fr/cre\u0301ationducompte05.png",mdxType:"Image"}),(0,a.kt)("p",null,"Apr\xe8s confirmation, votre onglet d'origine passera \xe0 cet \xe9cran, o\xf9 l'on vous recommande des cha\xeenes \xe0 suivre. "),(0,a.kt)(f,{src:"/img/fr/cre\u0301ationducompte06.png",mdxType:"Image"}),(0,a.kt)("p",null,"Tous les nouveaux comptes suivront automatiquement @Odysee et @OdyseeHelp."),(0,a.kt)("admonition",{title:"Fr\xe9quemment demand\xe9",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Le lien dans l'e-mail n\xe9cessite de r\xe9soudre un captcha, si vous ne voyez pas de captcha, essayez un autre navigateur. L'envoi de l'e-mail de confirmation peut prendre jusqu'\xe0 15 minutes. Pas de mail re\xe7u ? \xc9crivez-nous : ",(0,a.kt)("a",{parentName:"p",href:"mailto:hello@odysee.com"},"hello@odysee.com")," ")))}v.isMDXComponent=!0}}]);