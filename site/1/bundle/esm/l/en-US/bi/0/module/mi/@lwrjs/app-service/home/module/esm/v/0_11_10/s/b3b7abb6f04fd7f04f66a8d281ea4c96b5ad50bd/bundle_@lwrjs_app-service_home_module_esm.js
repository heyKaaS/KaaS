import{init as F,load as I}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2FesmLoader%2Fv%2F0_11_10/s/b395bc5184f6ad05652844db495d7a67ce255ffc/bundle_lwr_esmLoader.js";import"/1/bundle/esm/l/en-US/bi/0/module/mi/%40lwc%2Fsynthetic-shadow%2Fv%2F5_0_0/s/da3e2299b65846d3ca3a8bc97483dd62e44e2ad7/bundle_@lwc_synthetic-shadow.js";import{logOperationStart as s,logOperationEnd as c}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2Fprofiler%2Fv%2F0_11_10/s/c99d1fa829fc9f7217350e0f7e660009934da545/bundle_lwr_profiler.js";import{hydrateComponent as T,createElement as E}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F5_0_0/s/b005bb4c2c907fd35a0797f2b8899108a9a5b779/bundle_lwc.js";const L=globalThis.LWR;globalThis.LWR.define?globalThis.LWR=Object.freeze({define:globalThis.LWR.define}):delete globalThis.LWR;function v(){return L}const R="lwr.bootstrap.",_=`${R}end`,h="lwr.bootstrap.init",l="lwr.bootstrap.init.module";function S(e,t,o){T(e,t,o)}function w(e,t){return E(e,{is:t})}function g(e){return e.replace(/\/v\/[a-zA-Z0-9-_.]+$/,"").replace("/","-").replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const x=/-([a-z])/g;function A(e){return e.replace(x,t=>t[1].toUpperCase())}function O(e,t={}){if(typeof customElements=="undefined"||typeof document=="undefined"){s({id:_});return}s({id:h});let o=0;for(const[i,p]of e){const a=g(i);if(!document.body.querySelector(a)){s({id:l,specifier:i,specifierIndex:++o});const n=w(a,p),r=document.querySelector("[lwr-root]");r?r.appendChild(n):document.body.appendChild(n),c({id:l,specifier:i,specifierIndex:o,metadata:{renderMode:"spa"}});continue}const y=document.querySelectorAll(a);for(const n of y){s({id:l,specifier:i,specifierIndex:++o});const r=n.dataset.lwrPropsId;if(r){S(n,p,t[r]||{}),c({id:l,specifier:i,specifierIndex:o,metadata:{renderMode:"ssr"}});continue}const d=w(a,p);for(const{name:f,value:u}of n.attributes){d.setAttribute(f,u);const b=A(f);b in d&&(d[b]=u)}for(;n.childNodes.length>0;)d.appendChild(n.childNodes[0]);const m=n.parentElement;m&&m.replaceChild(d,n),c({id:l,specifier:i,specifierIndex:o,metadata:{renderMode:"csr"}})}}c({id:h}),s({id:_})}const C=v(),{imports:N,index:P,importMappings:j,endpoints:M}=C;F({imports:N,index:P,importMappings:j,endpoints:M});const{rootComponents:U,serverData:W}=C;Promise.all(U.map(async e=>{const t=g(e);return I(e,"@lwrjs/app-service/home/module/esm/v/0_11_10").then(({default:o})=>{O([[t,o]],W)})}));
