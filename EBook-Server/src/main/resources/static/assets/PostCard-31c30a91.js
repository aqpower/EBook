import{d as g,l as y,s as b,_ as P,a as w,k as d,j as m,f as p,g as o,n as I,t as l,h as f,i as r,z as h,x as N}from"./index-09020506.js";import{a as j}from"./icon-da093cbc.js";import{j as R}from"./posts-93b230f2.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const B={class:"w-full break-inside-avoid"},L=["src","alt"],S={class:"mx-4 my-3"},V={class:"text-sm font-medium font-sans"},$={class:"flex justify-between"},q={class:"text-xs hover:text-primary ease-in-out duration-200"},z={class:"flex items-center"},D={class:"text-xs"},E=g({__name:"PostCard",props:{post:{type:Object,required:!0}},setup(t){const s=y(),c=b(P),v=w(),_=d(),n=d(!1),a=t,x=()=>{if(s.currentRoute.value.path.includes("explore"))s.push(`/home/explore/${a.post.id}`);else if(s.currentRoute.value.path.includes("profile")){let e=s.currentRoute.value.fullPath;e+="/posts/",e+=a.post.id,s.push(e)}else{let e=s.currentRoute.value.fullPath;e+="/",e+=a.post.id,s.push(e)}},k=()=>{var i;let e={userId:(i=v.user)==null?void 0:i.id,postId:a.post.id};R(e).then(u=>{u.code==200?(a.post.likeNum=a.post.likeNum+1,n.value=!0,c({title:"👍",content:"点赞成功",btnContent:"👌"})):(c({title:"👍",content:u.msg,btnContent:"👌"}),n.value=!0)})},C=()=>{s.push(`/home/profile/${a.post.userId}`)};return(e,i)=>(m(),p("div",B,[o("figure",null,[t.post.url!=null?(m(),p("img",{key:0,class:"max-h-96 w-full object-cover inline-block rounded-2xl AqImage hover:brightness-75 ease-in-out duration-500",src:t.post.url[0],alt:t.post.title,onClick:x,ref_key:"img",ref:_},null,8,L)):I("",!0)]),o("div",S,[o("h1",V,l(t.post.title),1),o("div",$,[o("div",{class:"flex items-center mt-1 hover:cursor-pointer",onClick:C},[f(r(h.Icon),{class:"w-4 h-4 m-1",icon:r(j)[t.post.avatar]},null,8,["icon"]),o("p",q,l(t.post.name),1)]),o("div",z,[f(r(h.Icon),{class:N(["mr-1 w-3 h-3 hover:cursor-pointer active:scale-75 ease-in-out",{"text-primary":n.value}]),icon:"icon-park-outline:like",onClick:k},null,8,["class"]),o("span",D,l(t.post.likeNum),1)])])])]))}});const G=A(E,[["__scopeId","data-v-4c1d1edb"]]);export{G as P};
