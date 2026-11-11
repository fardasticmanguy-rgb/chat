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
