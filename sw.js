self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("notificationclick",e=>{
  e.notification.close();
  const code=e.notification.data&&e.notification.data.code||null;
  e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(list=>{
    for(const c of list)if("focus" in c){c.postMessage({open:code});return c.focus()}
    return self.clients.openWindow(code?"./#j="+encodeURIComponent(code):"./");
  }));
});

// Apply small compatibility enhancements to the deployed single-file app.
self.addEventListener("fetch",e=>{
  const request=e.request,scope=new URL(self.registration.scope),url=new URL(request.url);
  if(request.method!=="GET"||request.mode!=="navigate"||url.origin!==scope.origin||
     (url.pathname!==scope.pathname&&url.pathname!==scope.pathname+"index.html"))return;
  e.respondWith((async()=>{
    const response=await fetch(request);
    if(!response.ok||!(response.headers.get("content-type")||"").includes("text/html"))return response;
    let html=await response.text(),changed=false;

    const snapshot="thin([...tombs(r).slice(-60),...shown(r).slice(-40)],0)";
    if(html.includes(snapshot)){
      html=html.replace(snapshot,"thin([...tombs(r).slice(-60),...shown(r).slice(-40)],100000)");
      changed=true;
    }

    const imageRender='if(m.i)body+=`<img class="im" src="${m.i}" data-a="img" data-id="${m.id}" alt="Picture">`;';
    const imageWithResend='if(m.i){body+=`<img class="im" src="${m.i}" data-a="img" data-id="${m.id}" alt="Picture">`;if(mine)body+=`<button class="btn" type="button" data-a="resend" data-id="${m.id}" aria-label="Resend picture">↻ Resend picture</button>`}';
    if(html.includes(imageRender)){
      html=html.replace(imageRender,imageWithResend);
      changed=true;
    }

    const enhancements=`<script>
(()=>{const input=document.querySelector("#file");if(!input)return;input.multiple=true;input.addEventListener("change",async e=>{const files=Array.from(input.files||[]);if(files.length<2)return;e.preventDefault();e.stopImmediatePropagation();input.value="";const selected=files.slice(0,5);if(files.length>selected.length)toast("Choose up to 5 images at a time");for(let i=0;i<selected.length;i++){pendImg=null;await pickImage(selected[i]);if(pendImg)await sendMsg();if(i<selected.length-1)await new Promise(r=>setTimeout(r,1250));}},true)})();
 document.addEventListener("click",e=>{const b=e.target.closest('[data-a="resend"]');if(b)resendImage(b.dataset.id)});
 async function resendImage(id){const r=R,m=r&&r.msgs.get(id);if(!r||!m||m.u!==me.id||!m.i||isBanned())return;await pub(r,{t:"m",...strip(m)});toast("Picture resent")}
</script>`;
    if(!html.includes("Choose up to 5 images at a time")&&html.includes("</body>")){
      html=html.replace("</body>",enhancements+"</body>");
      changed=true;
    }

    const duplicate='if(old){if(m.gone&&!old.gone&&old.dh===m.dh){old.gone=true;old.dk=m.dk;old.x="";old.g=null;old.i=null;old.ip=0;wiped=true}continue}';
    const upgrade='if(old){if(m.gone&&!old.gone&&old.dh===m.dh){old.gone=true;old.dk=m.dk;old.x="";old.g=null;old.i=null;old.ip=0;wiped=true}else if(old.ip&&m.i&&old.u===m.u&&old.ts===m.ts&&old.x===m.x){old.i=m.i;old.ip=0;wiped=true}continue}';
    if(html.includes(duplicate)){
      html=html.replace(duplicate,upgrade);
      changed=true;
    }
    if(!changed)return response;
    const headers=new Headers(response.headers);
    headers.delete("content-length");
    headers.delete("content-encoding");
    return new Response(html,{status:response.status,statusText:response.statusText,headers});
  })());
});
