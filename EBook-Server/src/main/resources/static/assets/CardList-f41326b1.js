import{d as B,l as R,u as A,s as D,k as u,a as L,C as V,b as $,c as z,K as E,f as d,g as c,x as g,w as H,v as I,F as w,A as P,i as N,h as j,j as p,t as K,D as M,_ as T}from"./index-09020506.js";import{s as U,g as q,a as G}from"./posts-93b230f2.js";import{P as J}from"./PostCard-31c30a91.js";import{c as O}from"./var-e8af8410.js";import"./icon-da093cbc.js";import"./_plugin-vue_export-helper-c27b6911.js";const Q={class:"flex flex-col h-full"},W={class:"flex mb-3"},X=["onClick"],Y={class:"sm:columns-3 md:columns-3 lg:columns-4 xl:columns-5"},re=B({__name:"CardList",setup(Z){const h=R(),S=A(),b=D(T),f=u(1),_=u(35),n=u([]),C=L(),r=u(-2),x=u(null);V.on("postFinish",e=>{console.log(e),e==!0&&i()}),$(()=>{i()});let a=!1;const y=()=>{if(!a){const e=x.value;if(e){const{scrollTop:s,clientHeight:t,scrollHeight:o}=e;s+t>=o&&(a=!0,f.value+=1,i())}}},k=z(()=>h.currentRoute.value.fullPath.includes("search")),m=e=>{f.value=1,r.value=e,e==-2?i():e==-1?F():i()},i=()=>{var s;const e={id:(s=C.user)==null?void 0:s.id,page:f.value,pageSize:_.value,color:void 0,text:void 0};r.value>=0&&(e.color=r.value),k.value==!0?(console.log(h),e.text=S.params.keyword,U(e).then(t=>{const o=t.data;t.code==200&&(console.log(o),o.posts.length!=0?a?o.posts.forEach(l=>{n.value.push(l)}):n.value=o.posts:v(a?"已经没有帖子啦":"当前分区没有帖子哦~")),a=!1})):q(e).then(t=>{const o=t.data;t.code==200&&(console.log(o),o.posts.length!=0?a?o.posts.forEach(l=>{n.value.push(l)}):n.value=o.posts:v(a?"已经没有帖子啦":"当前分区没有帖子哦~")),a=!1})},v=e=>{b({title:"😞",content:e,btnContent:"👌"})},F=()=>{var e;G((e=C.user)==null?void 0:e.id,f.value,_.value).then(s=>{const t=s.data;s.code==200&&(t!=null?n.value=t.posts:(b({title:"😞",content:"当前分区没有帖子哦~",btnContent:"👌"}),n.value=[]))})};return(e,s)=>{const t=E("RouterView");return p(),d("div",Q,[c("div",W,[c("span",{class:g(["badge mx-2 px-3 py-4 hover:font-bold hover:bg-base-200 hover:cursor-pointer",{"bg-base-300 font-bold":r.value==-2}]),onClick:s[0]||(s[0]=o=>m(-2))}," 梦想彩 ",2),H(c("span",{class:g(["badge mx-2 px-3 py-4 hover:bg-base-200 hover:cursor-pointer hover:font-bold",{"bg-base-300 font-bold":r.value==-1}]),onClick:s[1]||(s[1]=o=>m(-1))}," 我的关注 ",2),[[I,k.value==!1]]),(p(!0),d(w,null,P(N(O),(o,l)=>(p(),d("div",{key:l},[c("span",{class:g(["badge mx-2 px-3 py-4 hover:bg-base-200 hover:cursor-pointer hover:font-bold",{"bg-base-300 font-bold":r.value==l}]),onClick:ee=>m(l)},K(o.name),11,X)]))),128))]),c("div",{ref_key:"scrollContainer",ref:x,onScroll:y,class:"pr-6 flex-1 overflow-scroll"},[c("div",Y,[(p(!0),d(w,null,P(n.value,(o,l)=>(p(),M(J,{key:l,post:o},null,8,["post"]))),128))])],544),j(t)])}}});export{re as default};
