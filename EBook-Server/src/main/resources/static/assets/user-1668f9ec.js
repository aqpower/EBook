import{M as e}from"./index-09020506.js";const t=(s,i)=>e.get(`/api/v1/users/info/${i},${s}`),o=s=>e.post("/api/v1/login/users",s),p=s=>e.get("/api/v1/login/email-verification/",{params:{email:s}}),n=s=>e.post(`/api/v1/login/email-verification/?verfityCode=${s}`),r=s=>e.post("/api/v1/users",s),c=s=>e.get("/api/v1/user/notify/",{params:{id:s.id,page:s.page,pageSize:s.pageSize}}),l=s=>e.put("/api/v1/user",s),v=s=>e.post("/api/v1/user/care",s),g=s=>e.delete("/api/v1/user/care",{data:s}),u=s=>e.get("/api/v1/user/care",{params:{id:s}}),A=s=>e.get("/api/v1/user/fans",{params:{id:s}}),d=s=>e.post("/api/v1/users/blackList",s),f=s=>e.delete("/api/v1/users/disBlackList",{data:s}),m=s=>e.delete("/api/v1/delete/user",{data:s}),U=s=>e.post("/api/v1/posts/collection",s),k=s=>e.post("/api/v1/posts/violation",s);export{o as U,g as a,A as b,U as c,m as d,n as e,t as f,u as g,v as h,f as i,l as j,c as k,d as n,p as s,r as u,k as v};