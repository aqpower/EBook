import{d as f,k as l,s as v,u as x,y as _,f as w,h as g,w as u,m as d,g as e,j as y,_ as h,r as b}from"./index-09020506.js";import{u as C}from"./user-1668f9ec.js";import{_ as I}from"./AvatarSelector.vue_vue_type_script_setup_true_lang-fc84b7a6.js";import"./icon-da093cbc.js";const V={class:"flex flex-col justify-center items-center space-y-7"},k=e("div",{class:"flex justify-center flex-col items-center"},[e("p",{class:"text-lg font-semibold"},"请填写用户基本信息完成注册")],-1),j=e("div",{class:"flex items-center flex-col justify-center"},[e("p",null,"系统提供可选的头像，点击头像可以进行选择"),e("p",null,"用户密码不少于6位并且至少只能由数字字符或者字母字符组成")],-1),z=f({__name:"InitProfile",setup(B){const o=l(""),a=l(""),r=v(h),p=x(),i=l(0);_("avatarIndex",i);function c(){return/^(?=.*[A-Za-z\d])[A-Za-z\d]{6,}$/.test(a.value)?{valid:!0,msg:"验证成功"}:{valid:!1,msg:"密码位数至少为6位字符，且仅含数字字符或字母字符。"}}const m=()=>{let n=c();if(n.valid==!1){r({title:"😞",content:n.msg,btnContent:"👌"});return}let t={email:p.params.email,name:o.value,password:a.value,avatar:i.value};C(t).then(s=>{s.code==200&&(r({title:"🥳",content:"用户注册成功,欢迎来到EasyBook~",btnContent:"🎉"}),b.replace("/account/login"))})};return(n,t)=>(y(),w("div",V,[k,g(I),u(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>o.value=s),placeholder:"请输入你的用户名",class:"input input-bordered input-primary w-full max-w-sm h-10"},null,512),[[d,o.value]]),u(e("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=s=>a.value=s),placeholder:"请输入你的密码",class:"input input-bordered input-primary w-full max-w-sm h-10"},null,512),[[d,a.value]]),e("button",{class:"btn btn-primary w-full max-w-sm min-h-0 h-10",onClick:m},"确定"),j]))}});export{z as default};