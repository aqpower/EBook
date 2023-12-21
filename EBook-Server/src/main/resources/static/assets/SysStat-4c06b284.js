import{g as b,b as C,c as $,d as P,e as j}from"./admin-6db7a148.js";import{d as f,k as d,b as x,j as r,f as u,g as t,t as e,h as c,i as n,z as _,F as k,A as I}from"./index-09020506.js";import{a as z}from"./icon-da093cbc.js";const B={class:"flex flex-col gap-3 items-center justify-center"},D={class:"flex"},F=t("div",{class:"flex justify-center items-center",style:{"font-size":"3rem"}},"🎉",-1),L={class:"stat w-56 h-56 flex flex-col justify-center items-center"},S=t("div",{class:"stat-title mb-5"},"今日发帖个数",-1),T={class:"flex items-center mb-2"},E={class:"stat-value text-warning",style:{"font-size":"5rem"}},M={class:"stat-figure text-warning"},N=t("div",{class:"scale-x-[-1] flex justify-center items-center",style:{"font-size":"3rem"}},"🎉",-1),V={class:"stats shadow"},W={class:"stat"},U={class:"stat-figure text-primary"},Y=t("div",{class:"stat-title"},"总发帖数",-1),q={class:"stat-value text-primary"},G={class:"stat"},H={class:"stat-figure text-success"},J=t("div",{class:"stat-title"},"帖子总点击量",-1),K={class:"stat-value text-success"},O={class:"stat"},Q={class:"stat-figure text-info"},R=t("div",{class:"stat-title"},"用户总数",-1),X={class:"stat-value text-info"},Z=f({__name:"TodayPost",setup(m){const o=new Date,i=d(),a=d(),v=d(),l=d(),h=o.getFullYear(),g=o.getMonth()+1,y=o.getDate(),p=`${h}.${g}.${y}`;x(()=>{w(),A(),b().then(s=>{v.value=s.count}),C().then(s=>{l.value=s.count})});const w=()=>{$().then(s=>{s.code==200&&(i.value=s.data)})},A=()=>{P().then(s=>{a.value=s.count})};return(s,it)=>(r(),u("div",B,[t("div",D,[F,t("div",L,[S,t("div",T,[t("div",E,e(l.value),1),t("div",M,[c(n(_.Icon),{class:"w-16 h-16",icon:"iconamoon:lightning-2"})])]),t("div",{class:"stat-desc mt-4 font-medium text-sm"},e(p))]),N]),t("div",V,[t("div",W,[t("div",U,[c(n(_.Icon),{class:"w-10 h-10",icon:"line-md:lightbulb"})]),Y,t("div",q,e(i.value),1),t("div",{class:"stat-desc"},"2023.12.10 - "+e(p))]),t("div",G,[t("div",H,[c(n(_.Icon),{class:"w-9 h-9",icon:"ph:cursor-click-bold"})]),J,t("div",K,e(a.value),1)]),t("div",O,[t("div",Q,[c(n(_.Icon),{class:"w-9 h-9",icon:"iconoir:user-badge-check"})]),R,t("div",X,e(v.value),1)])])]))}}),tt={class:"overflow-x-auto"},st={class:"table"},et=t("thead",null,[t("tr",null,[t("th",null,"最受欢迎头像"),t("th",null,"Icon"),t("th",null,"使用次数")])],-1),ot={class:"text-center"},ct={class:"text-center"},at=f({__name:"WelcomeAvatar",setup(m){x(()=>{i()});const o=d(),i=()=>{j().then(a=>{a.code==200&&(o.value=a.data)})};return(a,v)=>(r(),u("div",null,[t("div",tt,[t("table",st,[et,t("tbody",null,[(r(!0),u(k,null,I(o.value,(l,h)=>(r(),u("tr",{key:h},[t("th",ot,e(h+1),1),t("td",null,[c(n(_.Icon),{class:"w-9 h-9",icon:n(z)[l.avatar]},null,8,["icon"])]),t("td",ct,e(l.count),1)]))),128))])])])]))}}),nt={class:"flex justify-center items-center flex-col m-3"},rt=f({__name:"SysStat",setup(m){return(o,i)=>(r(),u("div",null,[t("div",nt,[c(Z),c(at,{class:"mt-8"})])]))}});export{rt as default};
