import{_ as l}from"./preload-helper.1c052cf7.js";const t={vue:{get:()=>()=>_("./__federation_shared_vue.js"),import:!0}},i=Object.create(null);async function v(e,o="default"){return i[e]?new Promise(r=>r(i[e])):d(e,o)}async function _(e){return l(()=>import(e),[])}async function d(e,o){let r=null;if(globalThis?.__federation_shared__?.[o]?.[e]){const s=globalThis.__federation_shared__[o][e],n=Object.keys(s)[0],u=Object.values(s)[0];t[e]?.requiredVersion?(await l(()=>import("./__federation_lib_semver.js"),[])).satisfy(n,t[e].requiredVersion)?r=(await u.get())():console.log(`provider support ${e}(${n}) is not satisfied requiredVersion(${t[e].requiredVersion})`):r=(await u.get())()}return r?(i[e]=r,r):a(e)}async function a(e,o){if(t[e]?.import){const r=(await t[e].get())();return i[e]=r,r}else console.error("consumer config import=false,so cant use callback shared module")}export{v as importShared};