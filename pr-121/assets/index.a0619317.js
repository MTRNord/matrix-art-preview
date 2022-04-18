var F=Object.defineProperty,U=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var b=(c,e,t)=>e in c?F(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t,P=(c,e)=>{for(var t in e||(e={}))W.call(e,t)&&b(c,t,e[t]);if(B)for(var t of B(e))G.call(e,t)&&b(c,t,e[t]);return c},j=(c,e)=>U(c,R(e));var d=(c,e,t)=>(b(c,typeof e!="symbol"?e+"":e,t),t);import{D as X,j as Q,a as V,E as _,b as I,P as Y,l as a,c as s,W as M,M as E,d as J,e as Z,O as $,o as q,f as K,L as ee,g as te,F as ne,S as ie}from"./vendor.d4008ec4.js";const oe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(n){if(n.ep)return;n.ep=!0;const l=t(n);fetch(n.href,l)}};oe();const re="modulepreload",O={},se="/pr-121/",ae=function(e,t){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=`${se}${o}`,o in O)return;O[o]=!0;const n=o.endsWith(".css"),l=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${l}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":re,n||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),n)return new Promise((w,m)=>{r.addEventListener("load",w),r.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())},k=X(void 0),i=Q,h=V;class A extends _{render(){const e=this.context;return h("div",{class:"m-12 flex flex-col lg:flex-row items-center justify-between",children:[i(I,{href:"/",children:i("img",{alt:"Matrix Art",src:"Logo_colored.svg",class:"ease-in-out hover:scale-105 trandform transition-transform duration-300"})}),h("div",{class:"flex items-center mt-8 lg:mt-0 flex-col sm:flex-row",children:[h("div",{class:"flex items-center justify-between w-80 max-w-80 mx-6 ease-in-out hover:scale-105 trandform transition-transform duration-300",children:[i("div",{class:"absolute ml-4",children:h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#AAB3CF",children:[i("path",{d:"M0 0h24v24H0V0z",fill:"none"}),i("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})]})}),i("input",{class:"search-bg shadow rounded-2xl border-0 py-3 px-4 pl-10 text-data",placeholder:"Search"})]}),e!=null&&e.isLoggedIn()?i(I,{class:"text-white font-bold text-1xl logo-bg rounded-2xl py-3 px-12 shadow mt-4 sm:mt-0 transform transition-transform ease-in-out duration-300 hover:scale-105",children:"Post"}):i(I,{href:"/join",class:"text-white font-bold text-1xl logo-bg rounded-2xl py-3 px-12 shadow mt-4 sm:mt-0 transform transition-transform ease-in-out duration-300 hover:scale-105",children:"Join"})]})]})}}A.contextType=k;class p extends _{constructor(e){super(e)}render({user:e,post:t}){return h("div",{class:"flex flex-col",children:[i("a",{id:"gallery_click",href:t.content.file.url,class:"w-full",target:"_blank",rel:"noreferrer",children:i("img",{decoding:"async",loading:"lazy",class:"rounded-3xl shadow object-cover transform transition-transform ease-in-out duration-300 hover:scale-105",src:t.content.file.url})}),h("div",{class:"flex items-center justify-between py-4",children:[h("a",{class:"flex items-center",href:"#",children:[i("img",{class:"w-11 h-11 rounded-full mr-4 border-2 border-[#AAB3CF]",src:e.avatar_url}),i("p",{class:"text-data shadow text-lg font-medium",children:e.display_name})]}),h("div",{class:"flex text-data text-lg items-center",children:[h("a",{class:"mr-4 flex items-center",href:"#",children:[i("span",{class:"mr-2",children:h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#AAB3CF",children:[i("path",{d:"M0 0h24v24H0V0z",fill:"none"}),i("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"})]})}),i("span",{children:"5"})]}),h("a",{class:"flex items-center",href:"#",children:[i("span",{class:"mr-2",children:h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#AAB3CF",children:[i("path",{d:"M0 0h24v24H0V0z",fill:"none"}),i("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"})]})}),i("span",{children:"11"})]})]})]})]})}}class y{constructor(e,t,o){d(this,"mxid");d(this,"display_name");d(this,"avatar_url");this.mxid=e,this.display_name=t,this.avatar_url=o}}class v{constructor(e,t){d(this,"event_id");d(this,"content");this.event_id=e,this.content=t}}class le extends _{constructor(){super();this.state={columns:this.settingColumns()}}settingColumns(){return window.innerWidth>=1400?4:window.innerWidth>=800?3:window.innerWidth>=500?2:1}componentDidMount(){window.addEventListener("resize",()=>this.setState({columns:this.settingColumns()}))}componentWillUnmount(){window.removeEventListener("resize",()=>this.setState({columns:this.settingColumns()}))}render(){return h("div",{class:"flex flex-col",children:[i("header",{children:i(A,{})}),h("main",{class:"m-12 mt-6",children:[i("h1",{class:"text-3xl font-bold mb-4 text-white",children:"Explore"}),i("div",{class:"flex justify-center",id:"gallery",children:h(Y,{gap:24,nColumns:this.state.columns,children:[i(p,{user:new y("","Person A","https://unsplash.com/photos/_cvwXhGqG-o/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8ZmFjZXxlbnwwfDJ8fHwxNjQ4Nzc5NzYx"),post:new v("",{file:{url:"https://unsplash.com/photos/UWmrTAQ75iA/download?ixid=MnwxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE2NDg4MzI0Njg"}})}),i(p,{user:new y("","Person B","https://unsplash.com/photos/uJ8LNVCBjFQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTN8fGZhY2V8ZW58MHwyfHx8MTY0ODc3OTc2MQ"),post:new v("",{file:{url:"https://unsplash.com/photos/7ptbiEPxKMQ/download?ixid=MnwxMjA3fDB8MXxhbGx8OXx8fHx8fDJ8fDE2NDg4MzI0Njg"}})}),i(p,{user:new y("","Person C","https://unsplash.com/photos/u3pi6HhSYew/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTd8fGZhY2V8ZW58MHwyfHx8MTY0ODc3OTc2MQ"),post:new v("",{file:{url:"https://unsplash.com/photos/ZiPlVmmKEYA/download?ixid=MnwxMjA3fDB8MXxhbGx8Mzl8fHx8fHwyfHwxNjQ4ODM2MDIz"}})}),i(p,{user:new y("","Person D","https://unsplash.com/photos/TW_z_iUD_bQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8ODR8fHBvcnRyYWl0fGVufDB8Mnx8fDE2NDg4NDQ3MjQ"),post:new v("",{file:{url:"https://unsplash.com/photos/FTQJBGDxKXg/download?ixid=MnwxMjA3fDB8MXxhbGx8M3x8fHx8fDJ8fDE2NDg4NDMyNDY"}})}),i(p,{user:new y("","Person E","https://unsplash.com/photos/kYtN89E5ce4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTA0fHxwb3J0cmFpdHxlbnwwfDJ8fHwxNjQ4ODQ0NzQy"),post:new v("",{file:{url:"https://unsplash.com/photos/zfhxiaZO3JE/download?ixid=MnwxMjA3fDB8MXxhbGx8Mjl8fHx8fHwyfHwxNjQ4ODQzMjQ1"}})}),i(p,{user:new y("","Person E","https://unsplash.com/photos/kBonaevi3yA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTE5fHxwb3J0cmFpdHxlbnwwfDJ8fHwxNjQ4ODQ0NzQy"),post:new v("",{file:{url:"https://unsplash.com/photos/jm-JKqrAXsA/download?ixid=MnwxMjA3fDB8MXxhbGx8MTAyfHx8fHx8Mnx8MTY0ODg0MzI1NQ"}})})]})})]})]})}}const S=new a.UnstableValue("m.image","org.matrix.msc1767.image"),H=new a.UnstableValue("m.file","org.matrix.msc1767.file"),N=new a.UnstableValue("m.thumbnail","org.matrix.msc1767.thumbnail"),L=new a.UnstableValue("blurhash","xyz.amorgan.blurhash"),ce=new a.NamespacedValue("matrixart.description"),de=new a.NamespacedValue("matrixart.tags"),he=new a.NamespacedValue("matrixart.nsfw"),me=new a.NamespacedValue("matrixart.license");class we extends a.ExtensibleEvent{constructor(e){super(e);d(this,"image");d(this,"text");d(this,"thumbnails");d(this,"blurhash");d(this,"file");d(this,"description");d(this,"tags");d(this,"nsfw",!1);d(this,"license");const t=S.findIn(this.wireContent),o=a.M_TEXT.findIn(this.wireContent),n=H.findIn(this.wireContent),l=N.findIn(this.wireContent),r=L.findIn(this.wireContent),w=ce.findIn(this.wireContent),m=de.findIn(this.wireContent),x=he.findIn(this.wireContent),u=me.findIn(this.wireContent);if(a.isProvided(t)){if(!t)throw new a.InvalidEventError("m.image is required to be present");this.image=t}if(a.isProvided(n)){if(!n)throw new a.InvalidEventError("m.file is required to be present");this.file=n}if(a.isOptionalAString(o)){if(!t)throw new a.InvalidEventError("m.text is required to be present");this.text=o}if(a.isProvided(l)){if(!Array.isArray(l))throw new a.InvalidEventError("m.thumbnail contents must be an array");this.thumbnails=l}if(a.isOptionalAString(r)&&(this.blurhash=r),a.isOptionalAString(w)&&(this.description=w),a.isProvided(m)){if(!Array.isArray(m))throw new a.InvalidEventError("matrixart.tags contents must be an array");this.tags=m}if(a.isProvided(x)){if(typeof x!="boolean")throw new a.InvalidEventError("matrixart.tags contents must be an boolean");this.nsfw=x}a.isOptionalAString(u)&&(this.license=u)}isEquivalentTo(e){return a.isEventTypeSame(e,S)}serialize(){const e={[a.M_TEXT.name]:this.text,[H.name]:this.file,[S.name]:this.image,[N.name]:this.thumbnails,[L.name]:this.blurhash,["matrixart.description"]:this.description,["matrixart.tags"]:this.tags,["matrixart.nsfw"]:this.nsfw,["matrixart.license"]:this.license};return{type:"m.image",content:e}}}function ue(c){const e=c;return new we(e)}a.ExtensibleEvents.registerInterpreter(S,ue);a.ExtensibleEvents.unknownInterpretOrder.push(S);function D(){return new Worker("/pr-121/assets/indexeddb.worker.0ae1a28d.js",{type:"module"})}class C{constructor(e){d(this,"events",[]);d(this,"currentUserDirectory");d(this,"rootDirectory");this.client=e}static async new(){var n,l,r,w,m,x;global.Olm||console.error("global.Olm does not seem to be present. Did you forget to add olm in the out directory?");let e;if(window.localStorage.getItem("server")!==null?e=window.localStorage.getItem("server"):e="https://matrix.art.midnightthoughts.space",!e)throw new Error("No matrix server URL defined");let t;if(window.localStorage.getItem("mxid_guest")!==null){const u=(n=window.localStorage.getItem("mxid_guest"))!=null?n:void 0,f=(l=window.localStorage.getItem("access_token_guest"))!=null?l:void 0,g=(r=window.localStorage.getItem("device_id_guest"))!=null?r:void 0;t=s.createClient({useAuthorizationHeader:!0,baseUrl:e,userId:u,accessToken:f,deviceId:g,sessionStore:new M(window.localStorage),store:new s.IndexedDBStore({indexedDB:window.indexedDB,dbName:"matrix-art-sync:guest",localStorage:window.localStorage,workerFactory:()=>new D}),cryptoStore:new s.IndexedDBCryptoStore(window.indexedDB,"matrix-art:crypto")}),t.setGuest(!0)}{const u=s.createClient("https://matrix.art.midnightthoughts.space"),{user_id:f,device_id:g,access_token:T}=await u.registerGuest();t=s.createClient({useAuthorizationHeader:!0,baseUrl:e,userId:f,accessToken:T,deviceId:g,sessionStore:new M(window.localStorage),store:new s.IndexedDBStore({indexedDB:window.indexedDB,dbName:"matrix-art-sync:guest",localStorage:window.localStorage,workerFactory:()=>new D}),cryptoStore:new s.IndexedDBCryptoStore(window.indexedDB,"matrix-art:crypto")}),t.setGuest(!0),window.localStorage.setItem("mxid_guest",f),window.localStorage.setItem("access_token_guest",T),window.localStorage.setItem("device_id_guest",g),window.localStorage.setItem("server",e)}let o;if(window.localStorage.getItem("mxid")!==null){const u=(w=window.localStorage.getItem("mxid"))!=null?w:void 0,f=(m=window.localStorage.getItem("access_token"))!=null?m:void 0,g=(x=window.localStorage.getItem("device_id"))!=null?x:void 0;o=s.createClient({useAuthorizationHeader:!0,baseUrl:e,userId:u,accessToken:f,deviceId:g,sessionStore:new M(window.localStorage),store:new s.IndexedDBStore({indexedDB:window.indexedDB,dbName:"matrix-art-sync:guest",localStorage:window.localStorage,workerFactory:()=>new D}),cryptoStore:new s.IndexedDBCryptoStore(window.indexedDB,"matrix-art:crypto")}),o.setGuest(!1)}return new C(o!=null?o:t)}isLoggedIn(){return this.client.isLoggedIn()&&!this.client.isGuest()}async start(){this.client.on(s.MatrixEventEvent.Decrypted,(t,o)=>{const n=t.unstableExtensibleEvent;n!=null&&n.isEquivalentTo(S)&&this.events.push(t)}),console.log("start"),await this.client.store.startup(),await this.client.initCrypto(),await this.client.startClient();const e=await this.client.joinRoom("#Matrix_Art:art.midnightthoughts.space");await z(1e3),this.rootDirectory=new E(this.client,e.roomId),console.log("started")}async register(e="https://matrix.art.midnightthoughts.space",t,o,n=!1){var l;if(this.client.stopClient(),this.client=s.createClient({useAuthorizationHeader:!0,baseUrl:e,userId:t,deviceId:"Matrix Art",sessionStore:new M(window.localStorage),store:new s.IndexedDBStore({indexedDB:window.indexedDB,dbName:"matrix-art-sync:loggedin",localStorage:window.localStorage,workerFactory:()=>new D}),cryptoStore:new s.IndexedDBCryptoStore(window.indexedDB,"matrix-art:crypto")}),await this.client.register(t,o,null,{type:"m.login.dummy"}),window.localStorage.setItem("server",e),window.localStorage.setItem("mxid",t),window.localStorage.setItem("access_token",this.client.getAccessToken()),window.localStorage.setItem("device_id","Matrix Art"),await this.start(),n){const r=(l=this.rootDirectory)==null?void 0:l.getDirectories(),w=this.client.getUserId().replace(":","_");r!=null&&r.some(m=>m.room.name===w)?this.rootDirectory=r==null?void 0:r.find(m=>m.room.name===w):await this.createProfileFolder()}}async login(e,t,o,n=!1){var l;if(this.client.stopClient(),this.client=s.createClient({useAuthorizationHeader:!0,baseUrl:e,userId:t,deviceId:"Matrix Art",sessionStore:new M(window.localStorage),store:new s.IndexedDBStore({indexedDB:window.indexedDB,dbName:"matrix-art-sync:loggedin",localStorage:window.localStorage,workerFactory:()=>new D}),cryptoStore:new s.IndexedDBCryptoStore(window.indexedDB,"matrix-art:crypto")}),await this.client.loginWithPassword(t,o),window.localStorage.setItem("server",e),window.localStorage.setItem("mxid",t),window.localStorage.setItem("access_token",this.client.getAccessToken()),window.localStorage.setItem("device_id","Matrix Art"),await this.start(),n){const r=(l=this.rootDirectory)==null?void 0:l.getDirectories();console.log(r);const w=this.client.getUserId().replace(":","_");r!=null&&r.some(m=>m.room.name===w)?this.rootDirectory=r==null?void 0:r.find(m=>m.room.name===w):await this.createProfileFolder()}}async createProfileFolder(){if(this.client.isGuest())throw new Error("Cannot create a file tree space as a guest");const e=await this.client.joinRoom("#Matrix_Art:art.midnightthoughts.space");await z(1e3),this.rootDirectory=new E(this.client,e.roomId);const t=this.client.getUserId().replace(":","_");this.currentUserDirectory=await this.createPublicSubDirectory(this.rootDirectory,t),await this.createPublicSubDirectory(this.currentUserDirectory,"Timeline")}async createPublicFileTree(e){if(this.client.isGuest())throw new Error("Cannot create a file tree space as a guest");const{room_id:t}=await this.client.createRoom({name:e,preset:s.Preset.PublicChat,power_level_content_override:j(P({},J),{users:{["@administrator:art.midnightthoughts.space"]:100,[this.client.getUserId()]:100}}),invite:["@administrator:art.midnightthoughts.space"],creation_content:{[s.RoomCreateTypeField]:s.RoomType.Space},initial_state:[{type:s.UNSTABLE_MSC3088_PURPOSE.name,state_key:s.UNSTABLE_MSC3089_TREE_SUBTYPE.name,content:{[s.UNSTABLE_MSC3088_ENABLED.name]:!0}},{type:s.EventType.RoomEncryption,state_key:"",content:{algorithm:Z}},{type:s.EventType.RoomGuestAccess,state_key:"",content:{guest_access:"can_join"}},{type:s.EventType.RoomHistoryVisibility,state_key:"",content:{history_visibility:"world_readable"}}]}),o=this.client.getRoom(t),n=o==null?void 0:o.getLiveTimeline().getState(s.EventTimeline.FORWARDS).getStateEvents(s.EventType.RoomPowerLevels,"");if(!n)throw new Error("Failed to find PL event");return await this.client.setPowerLevel(t,this.client.getUserId(),50,n),new E(this.client,t)}async createPublicSubDirectory(e,t){const o=await this.createPublicFileTree(t);return await this.client.sendStateEvent(e.roomId,s.EventType.SpaceChild,{via:[this.client.getDomain()]},o.roomId),await this.client.sendStateEvent(o.roomId,s.EventType.SpaceParent,{via:[this.client.getDomain()]},e.roomId),o}}function z(c){return new Promise(e=>setTimeout(e,c))}const xe=ne(()=>ae(()=>import("./Join.86fae859.js"),["assets/Join.86fae859.js","assets/vendor.d4008ec4.js"]));class fe extends _{constructor(){super();this.state={client:void 0}}loadOlm(){return $.init({locateFile:()=>q}).then(()=>{console.log("Using WebAssembly Olm")}).catch(e=>(console.log("Failed to load Olm: trying legacy version",e),new Promise((t,o)=>{const n=document.createElement("script");n.src=K,n.onload=t,n.onerror=o,document.body.appendChild(n)}).then(()=>window.Olm.init()).then(()=>{console.log("Using legacy Olm")}).catch(t=>{console.log("Both WebAssembly and asm.js Olm failed!",t)})))}async loadMatrixClient(){var t;let e=await C.new();this.setState({client:e}),console.log("Client loaded"),await((t=this.state.client)==null?void 0:t.start()),console.log("Client started")}async componentDidMount(){try{await this.loadOlm(),console.log("Olm loaded")}catch{console.log("Olm not loaded")}await this.loadMatrixClient()}render(){return i(ee,{fallback:h("div",{class:"flex flex-col",children:[i("header",{children:i(A,{})}),i("main",{class:"m-12 mt-6 flex items-center justify-center",children:i("p",{class:"text-lg text-data font-bold",children:"Loading..."})})]}),children:i(k.Provider,{value:this.state.client,children:h(te,{children:[i(le,{path:"/pr-121//"}),i(xe,{path:"/pr-121//join"})]})})})}}ie(i(fe,{}),document.querySelector("#app"));export{k as C,A as H,i as a,h as j};
