import{E as h,$ as u}from"./vendor.d127a5c1.js";import{j as r,a as t,H as g,C as p}from"./index.d4976c03.js";const l="inline-block p-4 w-full text-gray-900 bg-gray-100 hover:ring-blue-300 hover:ring-1 focus:ring-transparent focus:outline-none dark:bg-gray-700 dark:text-white",d="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 hover:ring-blue-300 hover:ring-1 focus:ring-transparent focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700";class f extends h{constructor(){super();this.state={homeserver:"https://art.midnightthoughts.space",username:"",password:"",create_profile:!0,current_tab:"login"}}async onSubmit(s){s.preventDefault();const e=this.context;!e||this.state.homeserver===""||this.state.username===""||this.state.password===""||(this.state.current_tab==="login"&&!(e!=null&&e.isLoggedIn())?await e.login(this.state.homeserver,this.state.username,this.state.password,this.state.create_profile):this.state.current_tab==="register"&&!e.isLoggedIn()&&await e.register(this.state.homeserver,this.state.username,this.state.password,this.state.create_profile),u("/",!0))}onInput(s){s.preventDefault();const e=s.target,n=e.type==="checkbox"?e.checked:e.value,a=e.name;this.setState({[a]:n})}render(s,{homeserver:e,username:n,password:a,create_profile:c,current_tab:o}){return r("div",{class:"flex flex-col",children:[t("header",{children:t(g,{})}),r("main",{class:"m-12 mt-6",children:[t("h1",{class:"text-3xl font-bold mb-4 text-white",children:"Join"}),r("div",{class:"flex items-center flex-col",children:[r("ul",{class:"w-1/4 mb-8 hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400",children:[t("li",{class:"w-full",children:t("a",{href:"#",class:o==="login"?`${l} rounded-l-lg`:`${d} rounded-l-lg`,onClick:i=>{i.preventDefault(),this.setState({current_tab:"login"})},children:"Login"})}),t("li",{class:"w-full",children:t("a",{href:"#",class:o==="register"?`${l} rounded-r-lg`:`${d} rounded-r-lg`,onClick:i=>{i.preventDefault(),this.setState({current_tab:"register"})},children:"Register"})})]}),r("form",{onSubmit:this.onSubmit.bind(this),class:"flex flex-col items-start w-1/4",children:[t("input",{class:"search-bg shadow rounded-lg border-0 py-3 px-4 placeholder-data text-white mb-4 w-full",type:"url",placeholder:"Homeserver",name:"homeserver",value:e,onInput:this.onInput.bind(this)}),t("input",{class:"search-bg shadow rounded-lg border-0 py-3 px-4 placeholder-data text-white mb-4 w-full",autocomplete:"username",type:"text",placeholder:"Username",name:"username",value:n,onInput:this.onInput.bind(this)}),t("input",{class:"search-bg shadow rounded-lg border-0 py-3 px-4 placeholder-data text-white mb-4 w-full",autoComplete:"current-password",type:"password",placeholder:"Password",name:"password",value:a,onInput:this.onInput.bind(this)}),r("label",{class:"mb-4 flex items-center",children:[t("input",{class:"checked:bg-blue-600 checked:border-transparent checked:bg-no-repeat checked:bg-[url('/tick.svg')] outline-none focus:outline-offset-2  focus:ring-blue-600  focus:ring-offset-2  focus:ring-offset-white p-0 inline-block align-middle box-border select-none shrink-0 shadow h-5 w-5 appearance-none rounded bg-white border-none",type:"checkbox",name:"create_profile",checked:c,onInput:this.onInput.bind(this)}),t("span",{class:"ml-4 text-data text-base font-medium",children:"Create account"})]}),t("button",{type:"submit",class:"text-white font-bold text-lg logo-bg rounded-xl py-2 px-10 shadow transform transition-transform ease-in-out duration-300 hover:scale-105 w-1/2 self-center",children:o==="login"?"Login":"Register"})]})]})]})]})}}f.contextType=p;export{f as default};
