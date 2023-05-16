"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[3207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,g=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return n?o.createElement(g,r(r({ref:t},u),{},{components:n})):o.createElement(g,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={sidebar_position:2,description:"How to customize your file upload on Odysee.",sidebar_custom_props:{cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:4,thumbnailLocation:"top",tileColor:"blue"}},r="Settings and Customization",l={unversionedId:"category-uploading/category-fileuploads/settings",id:"category-uploading/category-fileuploads/settings",title:"Settings and Customization",description:"How to customize your file upload on Odysee.",source:"@site/docs/category-uploading/category-fileuploads/settings.mdx",sourceDirName:"category-uploading/category-fileuploads",slug:"/category-uploading/category-fileuploads/settings",permalink:"/category-uploading/category-fileuploads/settings",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/docs/category-uploading/category-fileuploads/settings.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"How to customize your file upload on Odysee.",sidebar_custom_props:{cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:4,thumbnailLocation:"top",tileColor:"blue"}},sidebar:"helphub",previous:{title:"Uploading and File Selection",permalink:"/category-uploading/category-fileuploads/fileselection"},next:{title:"Encoding Videos",permalink:"/category-uploading/category-fileuploads/encoding"}},s={},p=[{value:"Title, URL, and Description",id:"title-url-and-description",level:2},{value:"Thumbnails",id:"thumbnails",level:2},{value:"Visibility",id:"visibility",level:2},{value:"Tags",id:"tags",level:2},{value:"Additonal Options",id:"additonal-options",level:2},{value:"Credit Deposit",id:"credit-deposit",level:2},{value:"Channel Selection",id:"channel-selection",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"settings-and-customization"},"Settings and Customization"),(0,i.kt)("h2",{id:"title-url-and-description"},"Title, URL, and Description"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7945).Z,width:"1242",height:"530"})),(0,i.kt)("p",null,"After your file is selected, the first required field is ",(0,i.kt)("strong",{parentName:"p"},"Title"),". We recommend titles that accurately inform users of the contents, but are interesting and effective in enticing users to click."),(0,i.kt)("p",null,"Next is the file's ",(0,i.kt)("strong",{parentName:"p"},"URL"),". This is separate from the title. The title is what displays on the upload itself, this is simply what appears in the video's URL."),(0,i.kt)("p",null,"For example, our February feature roundup on the Odysee channel has the URL ",(0,i.kt)("em",{parentName:"p"},"februaryroundup")," which appears in the URL, but the actual title of the post that shows to users is \u201cNew Year, New Us: Odysee Feature Roundup\u201d."),(0,i.kt)("p",null,"After the URL, we ask for a ",(0,i.kt)("strong",{parentName:"p"},"Description"),". Spamming keywords in the description has no effect on search, so we recommend simply using this field to explain your video in as few or as many words as necessary."),(0,i.kt)("h2",{id:"thumbnails"},"Thumbnails"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(20001).Z,width:"1196",height:"351"})),(0,i.kt)("p",null,"Following the description, you'll be asked to add a ",(0,i.kt)("strong",{parentName:"p"},"Thumbnail"),"."),(0,i.kt)("p",null,"For thumbnails, we recommend 1280 x 720 pixels. You can select a file from your computer or paste an image link. When uploading videos, you can select a thumbnail image from your video using our thumbnail upload tool."),(0,i.kt)("h2",{id:"visibility"},"Visibility"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/B1eDsmbH3.png",alt:null})),(0,i.kt)("p",null,"Next, you can set your content's visibility."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Public")," means anyone can find and view your upload."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Unlisted")," means anyone can view your upload if they have the link."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Scheduled")," means you content is currently hidden, but will go public at the date and time set."),(0,i.kt)("h2",{id:"tags"},"Tags"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(28261).Z,width:"1223",height:"481"})),(0,i.kt)("p",null,"Next, you'll be asked to add ",(0,i.kt)("strong",{parentName:"p"},"Tags"),"."),(0,i.kt)("p",null,"Tags improve the discoverability of content. We recommend simpler tabs relating to the genre of your content, e.g. Art, Gaming, Comedy, etc."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'If your upload contains NSFW pornographic content, you must tag it with "Mature."')),(0,i.kt)("p",null,"At this time, each video (and channel) can only have up to 5 tags."),(0,i.kt)("h2",{id:"additonal-options"},"Additonal Options"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(46639).Z,width:"1598",height:"800"})),(0,i.kt)("p",null,"Under this tab, you have a few options."),(0,i.kt)("p",null,"First is ",(0,i.kt)("strong",{parentName:"p"},"Release Date"),". At this time you can't set videos for future dates, but you can set them for past dates."),(0,i.kt)("p",null,"This is useful when uploading older videos. You can set them as the correct date, and they will show in the proper chronological order on your channel."),(0,i.kt)("p",null,"The next option is ",(0,i.kt)("strong",{parentName:"p"},"Language"),". This defaults to your selected language."),(0,i.kt)("p",null,"The third option is ",(0,i.kt)("strong",{parentName:"p"},"License"),". This is for specifying the copyright license."),(0,i.kt)("p",null,'This defaults to "None." If no license is selected, the file will be copyrighted by default. Other licenses are:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Public Domain")," licenses allow reuse with no restrictions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Creative Commons")," licenses allow reuse with attribution to the original creator"),(0,i.kt)("li",{parentName:"ul"},"You can also set the license simply as ",(0,i.kt)("strong",{parentName:"li"},"Copyrighted"))),(0,i.kt)("p",null,"Next is ",(0,i.kt)("strong",{parentName:"p"},"Price"),". This would be the amount viewers have to pay in order to view the content."),(0,i.kt)("p",null,"You can set this amount in LBC or USD. In either case, viewers would pay in LBC. If the price is set in LBC, that would be the amount of LBC paid. If the price is set in USD, viewers would pay the LBC equivalent."),(0,i.kt)("h2",{id:"credit-deposit"},"Credit Deposit"),(0,i.kt)("p",null,"The last setting under Additional Options is ",(0,i.kt)("strong",{parentName:"p"},"Deposit"),"."),(0,i.kt)("p",null,"This defaults to 0.01 LBC. It can be lowered as far as 0.0001 LBC. If your file has the highest amount staked of any upload with the URL selected, it would appear first when searching for that URL."),(0,i.kt)("p",null,'For example, if two Odysee files have the URL "cat," the file with the higher LBC stake would appear first in the search results and would link from odysee.com/cat.'),(0,i.kt)("p",null,"This all ties into the blockchain aspect of Odysee. We have a detailed section going through the ins-and-outs of this system ",(0,i.kt)("a",{parentName:"p",href:"https://help.odysee.tv/category-blockchain/category-staking/naming"},"here"),"."),(0,i.kt)("p",null,"It's important to note that once you deposit LBC, it isn't gone forever. It'll still be in your wallet and under your control, but it'll be tied to the channel you're depositing to until the deposit amount is lowered, or the channel is deleted. For more information on this, check out our section on the wallet and transactions ",(0,i.kt)("a",{parentName:"p",href:"https://help.odysee.tv/category-wallet/"},"here"),"."),(0,i.kt)("h2",{id:"channel-selection"},"Channel Selection"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(68291).Z,width:"850",height:"177"})),(0,i.kt)("p",null,"The last option is your ",(0,i.kt)("strong",{parentName:"p"},"Channel Selection"),". If you have multiple channels, this is where you'll select which the channel the upload will go to."),(0,i.kt)("p",null,"If every setting looks correct, you'll click ",(0,i.kt)("strong",{parentName:"p"},"Upload"),", and ",(0,i.kt)("strong",{parentName:"p"},"Confirm"),"."),(0,i.kt)("p",null,"It may take a few minutes for your file to finish uploading and upload to confirm, but this is the end of the upload process."))}c.isMDXComponent=!0},7945:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/category-uploading4-6b53428010d2cd04c1f041534ae74987.png"},20001:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/category-uploading5-a64d531acf317801436d1175fc835db2.png"},28261:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/category-uploading6-c1cee2427f40652f362e736d714c1c7d.png"},46639:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/category-uploading7-a0e699a500b49cfb6d8315e5ef907c32.png"},68291:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/category-uploading8-62a65e3c3978c57a3e434ccfa1522e63.png"}}]);