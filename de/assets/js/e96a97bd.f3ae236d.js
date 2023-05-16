"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[7157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,g=m["".concat(u,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),i=n(6775),u=n(1980),c=n(7392),s=n(12);function d(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,c]=g({queryString:n,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,s.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=u??d;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var f=n(2389);const k="tabList__CuJ",h="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==i&&(d(t),u(r))},p=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:p,onClick:m},l,{className:(0,o.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function _(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return a.createElement(_,(0,r.Z)({key:String(t)},e))}},9646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={sidebar_position:10,title:"Bankkonto hinzuf\xfcgen",description:"F\xfcge ein Bankkonto hinzu, um auf Odysee Geld zu verdienen.",sidebar_custom_props:{faIcon:"fa-circle-play",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:12,thumbnailLocation:"left",tileColor:"blue"},keywords:["odysee","brieftasche","bankkonto zur brieftasche hinzuf\xfcgen"],tags:["Odysee","Brieftasche"]},u="Bankkonto hinzuf\xfcgen",c={unversionedId:"category-wallet/bankaccount",id:"category-wallet/bankaccount",title:"Bankkonto hinzuf\xfcgen",description:"F\xfcge ein Bankkonto hinzu, um auf Odysee Geld zu verdienen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/category-wallet/bankaccount.mdx",sourceDirName:"category-wallet",slug:"/category-wallet/bankaccount",permalink:"/de/category-wallet/bankaccount",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/i18n/de/docusaurus-plugin-content-docs/current/category-wallet/bankaccount.mdx",tags:[{label:"Odysee",permalink:"/de/tags/odysee"},{label:"Brieftasche",permalink:"/de/tags/brieftasche"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Bankkonto hinzuf\xfcgen",description:"F\xfcge ein Bankkonto hinzu, um auf Odysee Geld zu verdienen.",sidebar_custom_props:{faIcon:"fa-circle-play",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:12,thumbnailLocation:"left",tileColor:"blue"},keywords:["odysee","brieftasche","bankkonto zur brieftasche hinzuf\xfcgen"],tags:["Odysee","Brieftasche"]},sidebar:"helphub",previous:{title:"LBC empfangen und versenden",permalink:"/de/category-wallet/sendingandreceiving"},next:{title:"Kreditkarte hinzuf\xfcgen",permalink:"/de/category-wallet/paymentmethod"}},s={},d=[],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=m("OdyseeButton"),g=m("OdyseeIcon"),b=m("Image"),f=m("PrimaryOdyseeButton"),k={toc:d};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bankkonto-hinzuf\xfcgen"},"Bankkonto hinzuf\xfcgen"),(0,a.kt)("p",null,"Wenn du ein Bankkonto hinzuf\xfcgst, kannst in Form von Trinkgeldern, Hyperchats und demn\xe4chst auch Kanalmitgliedschaften Geld verdienen. Wir empfehlen ein Konto einzurichten, damit Zuschauer Trinkgelder und Hyperchats senden k\xf6nnen."),(0,a.kt)(o.Z,{groupId:"device",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"web",label:"Web",mdxType:"TabItem"},"Um ein Bankkonto hinzuzuf\xfcgen, gehe zuerst in deine ",(0,a.kt)(p,{url:"https://odysee.com/$/wallet",mdxType:"OdyseeButton"},(0,a.kt)(g,{type:"credits",mdxType:"OdyseeIcon"}),"  Brieftasche"),". Deine Brieftasche befindet sich oben rechts in der Men\xfcleiste.",(0,a.kt)(b,{img:"/img/de/locate_wallet_desktop_dark.png#dark",mdxType:"Image"}),(0,a.kt)(b,{img:"/img/de/locate_wallet_desktop_light.png#light",mdxType:"Image"})),(0,a.kt)(l.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},"Um ein Bankkonto hinzuzuf\xfcgen, gehe zuerst in deine ",(0,a.kt)("a",{href:"https://odysee.com/$/wallet"},(0,a.kt)(g,{type:"wallet",mdxType:"OdyseeIcon"}),"  Brieftasche"),". In der mobilen Version findest du die Brieftasche im Seitenleistenmen\xfc.",(0,a.kt)(b,{img:"/img/de/locate_wallet_mobile_dark.png#dark",mdxType:"Image"}),(0,a.kt)(b,{img:"/img/de/locate_wallet_mobile_light.png#light",mdxType:"Image"}))),(0,a.kt)("p",null,"W\xe4hle hier ",(0,a.kt)(p,{url:"https://odysee.com/$/settings/tip_account",mdxType:"OdyseeButton"},(0,a.kt)(g,{type:"cogwheel",mdxType:"OdyseeIcon"})," Bankkonten")," aus."),(0,a.kt)(o.Z,{groupId:"device",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"web",label:"Web",mdxType:"TabItem"},(0,a.kt)(b,{img:"/img/de/wallet_screen_bank_account_arrow_desktop_dark.png#dark",mdxType:"Image"}),(0,a.kt)(b,{img:"/img/de/wallet_screen_bank_account_arrow_desktop_light.png#light",mdxType:"Image"})),(0,a.kt)(l.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,a.kt)(b,{img:"/img/de/wallet_screen_bank_account_arrow_mobile_dark.png#dark",mdxType:"Image"}),(0,a.kt)(b,{img:"/img/de/wallet_screen_bank_account_arrow_mobile_light.png#light",mdxType:"Image"}))),(0,a.kt)("p",null,"Das bringt dich zur Konten\xfcbersicht, hier kannst du ",(0,a.kt)(f,{url:"https://odysee.com/$/settings/tip_account",mdxType:"PrimaryOdyseeButton"},(0,a.kt)(g,{type:"dollar",mdxType:"OdyseeIcon"})," Verbindung mit deinem Bankkonto herstellen")," ausw\xe4hlen."),(0,a.kt)(b,{src:"/img/de/connect_bank_account_screen_dark.png#dark",mdxType:"Image"}),(0,a.kt)(b,{src:"/img/de/connect_bank_account_screen_light.png#light",mdxType:"Image"}),(0,a.kt)("p",null,"Dies f\xfchrt dich von Odysee zu Stripe."),(0,a.kt)(b,{src:"/img/de/stripe_accept_payment_connect_screen.png",mdxType:"Image"}),(0,a.kt)("p",null,"Von hier aus gibst du einfach die angeforderten Informationen ein."),(0,a.kt)("p",null,"Nachdem dein Bankkonto hinzugef\xfcgt wurde, kannst du erhaltene Betr\xe4ge in deiner Brieftasche nachverfolgen."),(0,a.kt)(o.Z,{groupId:"device",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"web",label:"Web",mdxType:"TabItem"},(0,a.kt)(b,{img:"/img/de/wallet_screen_desktop_dark.png#dark",mdxType:"Image"}),(0,a.kt)(b,{img:"/img/de/wallet_screen_desktop_light.png#light",mdxType:"Image"})),(0,a.kt)(l.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,a.kt)(b,{img:"/img/de/wallet_screen_mobile_dark.png#dark",mdxType:"Image"}),(0,a.kt)(b,{img:"/img/de/wallet_screen_mobile_light.png#light",mdxType:"Image"}))),(0,a.kt)("p",null,"Alle 2-3 Werktage werden die an deine Odysee-Brieftasche gesendeten Gelder automatisch ausgezahlt und auf dein Bankkonto \xfcberwiesen."))}h.isMDXComponent=!0}}]);