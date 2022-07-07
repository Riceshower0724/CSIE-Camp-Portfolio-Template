import{_ as h}from"./Typing.ed97f7e8.js";import{o as l,c as g,a,t as o,f as r,e as E,r as f,w as _,b as p,d as u,F as x,g as A,h as k,_ as v}from"./index.40db547c.js";function c(e=32){const i="abcdefghijklmnopqrstuvwxyz ";let t="";for(let s=0;s<e;s++)t+=i[Math.floor(Math.random()*i.length)];return t}const b={class:"text-2xl"},F=a("br",null,null,-1),w=a("br",null,null,-1),y=["src"],B=a("br",null,null,-1),j={__name:"Project",props:{name:{type:String,default:"Project"},description:{type:String,default:""},image:{type:String,default:""},link:{type:String,default:""},tags:{type:Array,default:()=>[]}},setup(e){return(i,t)=>(l(),g("div",null,[a("h1",b,"Name: "+o(e.name),1),r(" Description: "+o(e.description),1),F,r(" Image: "+o(e.image),1),w,a("img",{src:e.image},null,8,y),r(" Link: "+o(e.link),1),B,E(h,{text:e.tags.join(" / ")},null,8,["text"])]))}},D={class:"h-full w-full px-8 pt-16 sm:px-12 sm:pt-20 lg:px-16 lg:pt-24"},S={class:"py-2"},$={__name:"Projects",setup(e){const i=[{name:"\u5982\u4F55\u6210\u70BA\u4E00\u5339\u597D\u99AC",description:"This is a project description. "+c(64),image:"http://i0.hdslb.com/bfs/archive/5a864396cf52f660f628a355f32621a8bb56ae9c.jpg",link:"https://wikifarmer.com/zh-hans/%E9%A9%AC%E7%9A%84%E9%A5%B2%E5%85%BB/",tags:["tag1","tag2","tag3"]},{name:"\u4F86\u96D9\u597D\u978B\u5B50!!\uFF1F",description:"This is a project description. "+c(64),image:"http://5b0988e595225.cdn.sohucs.com/images/20181211/d09f6aae302a4c5aad846c8716648be5.jpeg",link:"https://playing.ltn.com.tw/article/18388/1",tags:["tag1","tag2","tag3"]},{name:"\u6210\u70BA\u4E00\u5339\u9577\u8DDD\u96E2\u540D\u99AC!!",description:"This is a project description. "+c(64),image:"https://thumbor.4gamers.com.tw/gcjJp2rEfZjh6S-DsvOib5AXR4k=/800x0/filters:extract_cover():no_upscale():quality(80)/https%3A%2F%2Fimg.4gamers.com.tw%2Fckfinder%2Fimages%2FALIEN%2F2021-3%2Fo0727040714899752314.jpg%3FversionId%3Dfbhyo1vIDnVjoYGOvyS6_7YJLOkq6FfJ",link:"https://running.biji.co/index.php?q=news&act=info&id=105658&subtitle=%E3%80%90%E7%9F%A5%E8%AD%98%E3%80%91%E9%A6%96%E9%81%B8%EF%BC%95%E7%A8%AE%E5%9C%A8%E5%AE%B6%E5%8F%AF%E4%BB%A5%E5%81%9A%E7%9A%84%E9%81%8B%E5%8B%95%20%E8%AE%93%E4%BD%A0%E6%8F%90%E5%8D%87%E8%82%8C%E8%80%90%E5%8A%9B%E5%8F%88%E8%83%BD%E7%87%83%E7%87%92%E8%84%82%E8%82%AA%EF%BC%81",tags:["tag1","tag2","tag3"]},{name:"\u600E\u9EBC\u8DD1\u8D0F\u9EA5\u6606!!!",description:"This is a project description. "+c(64),image:"https://i.imgur.com/WqSFU9M.png",link:"https://github.com",tags:["tag1","tag2","tag3"]}],t=f(0);let s=-1;return _(t,()=>{t.value>0&&s===-1&&(s=window.setInterval(()=>{t.value++,t.value>=i.length&&window.clearInterval(s)},200))}),(C,m)=>(l(),g("div",D,[t.value>=0?(l(),p(h,{key:0,onDone:m[0]||(m[0]=n=>t.value++),text:"My Projects",class:"block text-2xl sm:text-3xl lg:text-4xl"})):u("",!0),a("div",S,[(l(),g(x,null,A(i,(n,d)=>a("div",null,[E(v,null,{default:k(()=>[t.value>=d+1?(l(),p(j,{key:d,class:"my-2 w-full rounded-md bg-white bg-opacity-50 p-4 shadow-md shadow-indigo-200",name:n.name,description:n.description,image:n.image,link:n.link,tags:n.tags},null,8,["name","description","image","link","tags"])):u("",!0)]),_:2},1024)])),64))])]))}};export{$ as default};