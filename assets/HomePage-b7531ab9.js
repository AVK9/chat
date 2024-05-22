import{h as a,u as i,b as o,j as t}from"./index-1c5dc526.js";const n="/chat/assets/1-6d7913ac.png",s="/chat/assets/6-363b835c.png",c=a`
  0%, 100% {
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
`,e=a`
  0%, 100% {
    opacity: 0;
  }
  20%, 80% {
    opacity: 1;
  }
`,r=a`
  0%, 100% {
    opacity: 0;
  }
  30%, 70% {
    opacity: 1;
  }
`,g=i.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`,d=i.div`
  background-image: url(${o});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${c} 12s infinite;
`,u=i.div`
  background-image: url(${n});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${e} 12s infinite;
`,h=i.div`
  background-image: url(${s});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${r} 12s infinite;
`,b=()=>t.jsxs(g,{children:[t.jsx(d,{}),t.jsx(u,{}),t.jsx(h,{})]});export{b as default};
