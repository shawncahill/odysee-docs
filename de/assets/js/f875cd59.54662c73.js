"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[6278],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),p=a,g=m["".concat(u,".").concat(p)]||m[p]||d[p]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),a=t(6010);const o="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>_});var r=t(7462),a=t(7294),o=t(6010),i=t(2466),s=t(6775),u=t(1980),l=t(7392),c=t(12);function d(e){return function(e){var n;return(null==(n=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=m(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[u,l]=g({queryString:t,groupId:r}),[d,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),y=(()=>{const e=u??d;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),h(e)}),[l,h,o]),tabValues:o}}var y=t(2389);const f="tabList__CuJ",b="tabItem_LNqP";function k(e){let{className:n,block:t,selectedValue:s,selectValue:u,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),r=l[t].value;r!==s&&(d(n),u(r))},p=e=>{var n;let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},l.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>c.push(e),onKeyDown:p,onClick:m},i,{className:(0,o.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":s===n})}),t??n)})))}function w(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function v(e){const n=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",f)},a.createElement(k,(0,r.Z)({},e,n)),a.createElement(w,(0,r.Z)({},e,n)))}function _(e){const n=(0,y.Z)();return a.createElement(v,(0,r.Z)({key:String(n)},e))}},8882:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(7462),a=(t(7294),t(3905)),o=t(4866),i=t(5162);const s={sidebar_position:1,title:"Synchronisieren ohne Konto",description:"Wenn du deinen YouTube-Kanal mit einem brandneuen Odysee-Konto synchronisieren m\xf6chtest, dann bist du hier genau richtig.",sidebar_custom_props:{cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:4,thumbnailLocation:"top",tileColor:"blue"},keywords:["odysee","sync function","wie richte ich den odysee sync ein ohne konto","syncen ohne konto auf odysee"],tags:["Odysee","Sync Funktion"]},u="YouTube-Sync ohne Konto einrichten",l={unversionedId:"category-syncprogram/category-walkthrough/newaccounts",id:"category-syncprogram/category-walkthrough/newaccounts",title:"Synchronisieren ohne Konto",description:"Wenn du deinen YouTube-Kanal mit einem brandneuen Odysee-Konto synchronisieren m\xf6chtest, dann bist du hier genau richtig.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/category-syncprogram/category-walkthrough/newaccounts.mdx",sourceDirName:"category-syncprogram/category-walkthrough",slug:"/category-syncprogram/category-walkthrough/newaccounts",permalink:"/de/category-syncprogram/category-walkthrough/newaccounts",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/i18n/de/docusaurus-plugin-content-docs/current/category-syncprogram/category-walkthrough/newaccounts.mdx",tags:[{label:"Odysee",permalink:"/de/tags/odysee"},{label:"Sync Funktion",permalink:"/de/tags/sync-funktion"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Synchronisieren ohne Konto",description:"Wenn du deinen YouTube-Kanal mit einem brandneuen Odysee-Konto synchronisieren m\xf6chtest, dann bist du hier genau richtig.",sidebar_custom_props:{cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:4,thumbnailLocation:"top",tileColor:"blue"},keywords:["odysee","sync function","wie richte ich den odysee sync ein ohne konto","syncen ohne konto auf odysee"],tags:["Odysee","Sync Funktion"]},sidebar:"helphub",previous:{title:"YouTube-Sync einrichten",permalink:"/de/category-syncprogram/category-walkthrough/"},next:{title:"YouTube-Sync mit Odysee-Konto einrichten",permalink:"/de/category-syncprogram/category-walkthrough/existingaccounts"}},c={},d=[],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},p=m("PrimaryOdyseeButton"),g=m("Image"),h=m("OdyseeButtonRound"),y=m("OdyseeIcon"),f={toc:d};function b(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"youtube-sync-ohne-konto-einrichten"},"YouTube-Sync ohne Konto einrichten"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In diesem Abschnitt wird ein YouTube-Kanal mit einem neuen Odysee-Konto synchronisiert. Wenn du versuchst, einen YouTube-Kanal mit einem bestehenden Konto zu synchronisieren, springe zu ",(0,a.kt)("a",{parentName:"p",href:"/category-syncprogram/category-walkthrough/existingaccounts"},"YouTube-Sync mit Konto einrichten"),".")),(0,a.kt)("p",null,"Wenn du deinen YouTube-Kanal mit einem brandneuen Odysee-Konto synchronisierst, sind die Schritte ziemlich einfach."),(0,a.kt)(o.Z,{groupId:"device",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"web",label:"Web",default:!0,mdxType:"TabItem"},"Klicke zuerst auf ",(0,a.kt)(p,{url:"https://odysee.com/$/signup",mdxType:"PrimaryOdyseeButton"},"Registrieren")," in der oberen rechten Ecke des Bildschirms.",(0,a.kt)(g,{img:"/img/de/front_page_logged_out_arrow_register_desktop_dark.png#dark",mdxType:"Image"}),(0,a.kt)(g,{img:"/img/de/front_page_logged_out_arrow_register_desktop_light.png#light",mdxType:"Image"})),(0,a.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},"Klicke auf das Personen Icon ",(0,a.kt)(h,{mdxType:"OdyseeButtonRound"},(0,a.kt)(y,{type:"person",mdxType:"OdyseeIcon"}))," und dr\xfccke im Dropdown-Men\xfc auf"," ",(0,a.kt)("b",null,(0,a.kt)("a",{href:"https://odysee.com/$/signup"},"Registrieren")),".",(0,a.kt)(g,{img:"/img/de/front_page_logged_out_arrow_register_mobile_dark.png#dark",mdxType:"Image"}),(0,a.kt)(g,{img:"/img/de/front_page_logged_out_arrow_register_mobile_light.png#light",mdxType:"Image"}))),(0,a.kt)("p",null,"Als n\xe4chstes wirst du aufgefordert, eine E-Mail und ein Passwort einzugeben. Wir haben keine Anforderungen an die Passwortst\xe4rke, aber wir empfehlen dringend l\xe4ngere, komplexe Passw\xf6rter. Wir pr\xfcfen auch, ob das Passwort in der Vergangenheit jemals geleakt wurde, in diesem Fall musst du ein Neues eingeben."),(0,a.kt)("admonition",{title:"Achtung",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},'Stelle sicher, dass du das Kontrollk\xe4stchen "Synchronisiere meinen YouTube-Kanal" ausgew\xe4hlt hast, bevor du fortf\xe4hrst.')),(0,a.kt)(g,{src:"/img/de/register_screen_arrow_sync_dark.png#dark",mdxType:"Image"}),(0,a.kt)(g,{src:"/img/de/register_screen_arrow_sync_light.png#light",mdxType:"Image"}),(0,a.kt)("p",null,"Wenn du alles eingegeben hast, klicke auf ",(0,a.kt)(p,{mdxType:"PrimaryOdyseeButton"},"Registrieren"),"."),(0,a.kt)("p",null,"Nachdem du auf dem vorherigen Bildschirm auf die Schaltfl\xe4che Registrieren geklickt hast, wirst du aufgefordert, deine E-Mail-Adresse zu best\xe4tigen. Dazu geh\xf6rt das Klicken auf einen Link und das Ausf\xfchren eines CAPTCHA."),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Wenn bei dir kein Captcha angezeigt wird, versuche es in einem anderen Browser. Die E-Mail zur Best\xe4tigung kann bis zu 10 Minuten dauern, wenn du keine E-Mail erh\xe4ltst, schreib uns gerne eine E-Mail: ",(0,a.kt)("a",{parentName:"p",href:"mailto:hello@odysee.com"},"hello@odysee.com"))),(0,a.kt)(g,{src:"/img/de/confirm_account_screen_dark.png#dark",mdxType:"Image"}),(0,a.kt)(g,{src:"/img/de/confirm_account_screen_light.png#light",mdxType:"Image"}),(0,a.kt)("p",null,"Nach der Best\xe4tigung wird dein urspr\xfcngliches Anmeldefenster zu einer neuen Seite weitergeleitet, auf dem dir empfohlene Kan\xe4le zum Folgen angezeigt werden."),(0,a.kt)("p",null,"Alle neuen Accounts folgen automatisch ",(0,a.kt)("a",{parentName:"p",href:"https://odysee.com/@OdyseeDE:1"},"@OdyseeDE")," und ",(0,a.kt)("a",{parentName:"p",href:"https://odysee.com/@OdyseeHilfe:1"},"@OdyseeHilfe"),"."),(0,a.kt)("p",null,"Du bist noch nicht ganz fertig. Du musst deinen Kanal noch ",(0,a.kt)("a",{parentName:"p",href:"/category-syncprogram/category-walkthrough/claimingyourchannel"},"beanspruchen"),", damit dir dein Kanal vollst\xe4ndig geh\xf6rt. Jetzt hast du deinen YouTube-Kanal erfolgreich synchronisiert."))}b.isMDXComponent=!0}}]);