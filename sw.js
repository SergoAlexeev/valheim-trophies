/* Static shell cache. Third-party trophy images load from the source site. */
const SHELL_CACHE='valheim-trophy-hall-v18';
const SHELL=['./','./index.html','./sources.html','./assets/css/styles.css?v=17','./assets/js/app.js?v=17','./assets/icons/favicon.svg','./assets/icons/icon-192.png','./assets/icons/icon-512.png','./manifest.webmanifest'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(SHELL_CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(Promise.all([
    caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('valheim-trophy-hall-')&&key!==SHELL_CACHE).map(key=>caches.delete(key)))),
    self.clients.claim()
  ]));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request).catch(()=>caches.match(event.request,{ignoreSearch:true}).then(hit=>hit||caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request)));
});
