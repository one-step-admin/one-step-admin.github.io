if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const c=s=>i(s,r),d={module:{uri:r},exports:u,require:c};e[r]=Promise.all(n.map((s=>d[s]||c(s)))).then((s=>(l(...s),u)))}}define(["./workbox-b7e829be"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/404.2de91e8b.css",revision:null},{url:"assets/404.70dce7ad.js",revision:null},{url:"assets/index.0142ebe0.css",revision:null},{url:"assets/index.017e5a1e.js",revision:null},{url:"assets/index.038fb33c.js",revision:null},{url:"assets/index.046384b0.js",revision:null},{url:"assets/index.071f50c1.js",revision:null},{url:"assets/index.0b884f3e.js",revision:null},{url:"assets/index.1094503e.css",revision:null},{url:"assets/index.15276c5a.css",revision:null},{url:"assets/index.1817a09b.js",revision:null},{url:"assets/index.1aaaf252.css",revision:null},{url:"assets/index.1d6b2b27.css",revision:null},{url:"assets/index.1fafa14b.js",revision:null},{url:"assets/index.209e1df5.js",revision:null},{url:"assets/index.20b6f504.js",revision:null},{url:"assets/index.210361ba.css",revision:null},{url:"assets/index.2518eaa6.css",revision:null},{url:"assets/index.25bd8085.js",revision:null},{url:"assets/index.26c4fa13.js",revision:null},{url:"assets/index.270c0295.js",revision:null},{url:"assets/index.28ad9a99.css",revision:null},{url:"assets/index.2974a0e9.css",revision:null},{url:"assets/index.2ae4d5e9.css",revision:null},{url:"assets/index.3082f817.js",revision:null},{url:"assets/index.32d49c32.css",revision:null},{url:"assets/index.32fbc140.css",revision:null},{url:"assets/index.338bc703.js",revision:null},{url:"assets/index.34ebc9f4.css",revision:null},{url:"assets/index.387d8d48.css",revision:null},{url:"assets/index.3e1c1b22.js",revision:null},{url:"assets/index.45839d0d.js",revision:null},{url:"assets/index.4874d640.css",revision:null},{url:"assets/index.49d9ef61.css",revision:null},{url:"assets/index.4a954d01.js",revision:null},{url:"assets/index.4cc00e6c.js",revision:null},{url:"assets/index.4fb7efff.css",revision:null},{url:"assets/index.501627b6.css",revision:null},{url:"assets/index.51bc7b27.css",revision:null},{url:"assets/index.5236b5b8.js",revision:null},{url:"assets/index.53d6677b.js",revision:null},{url:"assets/index.5721ab78.js",revision:null},{url:"assets/index.5ab8e9a1.js",revision:null},{url:"assets/index.5c755cb6.js",revision:null},{url:"assets/index.5cc4b84b.js",revision:null},{url:"assets/index.5efe3bb0.js",revision:null},{url:"assets/index.5fd16ce6.js",revision:null},{url:"assets/index.6143c782.css",revision:null},{url:"assets/index.6211c36e.css",revision:null},{url:"assets/index.636c49cf.js",revision:null},{url:"assets/index.640d2a46.js",revision:null},{url:"assets/index.684b0ee2.js",revision:null},{url:"assets/index.6a61c3df.js",revision:null},{url:"assets/index.6c16c682.css",revision:null},{url:"assets/index.6ceccf97.css",revision:null},{url:"assets/index.6e6f2e2c.js",revision:null},{url:"assets/index.6f8d3b59.css",revision:null},{url:"assets/index.70e33867.js",revision:null},{url:"assets/index.722cdab2.js",revision:null},{url:"assets/index.734f7f8e.js",revision:null},{url:"assets/index.7376fca2.js",revision:null},{url:"assets/index.74da039c.js",revision:null},{url:"assets/index.75fba643.css",revision:null},{url:"assets/index.76489eb8.js",revision:null},{url:"assets/index.76ac44db.js",revision:null},{url:"assets/index.7df02c5e.css",revision:null},{url:"assets/index.7e83df84.js",revision:null},{url:"assets/index.7f84b4ee.js",revision:null},{url:"assets/index.7fa50ea8.css",revision:null},{url:"assets/index.7fa9d811.js",revision:null},{url:"assets/index.81824a6c.css",revision:null},{url:"assets/index.82e98e5c.js",revision:null},{url:"assets/index.83858a5f.js",revision:null},{url:"assets/index.83f8bf75.css",revision:null},{url:"assets/index.8c2144c3.js",revision:null},{url:"assets/index.8cf6d4a5.js",revision:null},{url:"assets/index.91afd633.js",revision:null},{url:"assets/index.938c3076.js",revision:null},{url:"assets/index.963590be.css",revision:null},{url:"assets/index.965b79dd.css",revision:null},{url:"assets/index.98735eb1.js",revision:null},{url:"assets/index.99ae6bdd.js",revision:null},{url:"assets/index.9c3283a8.js",revision:null},{url:"assets/index.9cdb3f9a.js",revision:null},{url:"assets/index.9dc00d28.js",revision:null},{url:"assets/index.a1428252.js",revision:null},{url:"assets/index.a18ae7ca.js",revision:null},{url:"assets/index.a3149097.css",revision:null},{url:"assets/index.a54443cd.js",revision:null},{url:"assets/index.a61df344.css",revision:null},{url:"assets/index.a8fe9b1b.js",revision:null},{url:"assets/index.a900d800.js",revision:null},{url:"assets/index.a965bc7c.css",revision:null},{url:"assets/index.aeb64750.css",revision:null},{url:"assets/index.b094c81b.js",revision:null},{url:"assets/index.b1a0be65.css",revision:null},{url:"assets/index.b3ef53ef.js",revision:null},{url:"assets/index.b4fdf6d0.js",revision:null},{url:"assets/index.b5cbe0a4.js",revision:null},{url:"assets/index.b6196204.css",revision:null},{url:"assets/index.b65db033.js",revision:null},{url:"assets/index.b9d3882d.js",revision:null},{url:"assets/index.ba1a5c16.css",revision:null},{url:"assets/index.ba4d8f82.js",revision:null},{url:"assets/index.ba8f8fff.js",revision:null},{url:"assets/index.bbe50ae5.js",revision:null},{url:"assets/index.bd2b07b4.js",revision:null},{url:"assets/index.bfe4eed3.js",revision:null},{url:"assets/index.c088c484.js",revision:null},{url:"assets/index.c2935dc3.css",revision:null},{url:"assets/index.c41a5b66.js",revision:null},{url:"assets/index.c4437165.css",revision:null},{url:"assets/index.c7c98046.js",revision:null},{url:"assets/index.cb6becb9.js",revision:null},{url:"assets/index.cc06384e.js",revision:null},{url:"assets/index.d435b8b5.js",revision:null},{url:"assets/index.d4d2049e.js",revision:null},{url:"assets/index.d66df5bb.js",revision:null},{url:"assets/index.d7734ecd.css",revision:null},{url:"assets/index.d8f126ac.js",revision:null},{url:"assets/index.da599f69.js",revision:null},{url:"assets/index.daae8c5a.css",revision:null},{url:"assets/index.de8efe35.js",revision:null},{url:"assets/index.e0e128ec.js",revision:null},{url:"assets/index.e51b2a12.js",revision:null},{url:"assets/index.e637fd17.js",revision:null},{url:"assets/index.e7f52929.css",revision:null},{url:"assets/index.e81cec47.js",revision:null},{url:"assets/index.edca508b.js",revision:null},{url:"assets/index.ef5f4349.js",revision:null},{url:"assets/index.f0445d04.css",revision:null},{url:"assets/index.f085561d.js",revision:null},{url:"assets/index.f36d41fa.css",revision:null},{url:"assets/index.f5176d8a.js",revision:null},{url:"assets/index.f54d1082.css",revision:null},{url:"assets/index.f6a6e03b.js",revision:null},{url:"assets/index.f6bc3f1a.css",revision:null},{url:"assets/index.f6fbc9e7.js",revision:null},{url:"assets/index.f76f8496.css",revision:null},{url:"assets/index.f7cfef11.css",revision:null},{url:"assets/index.f9ac1490.js",revision:null},{url:"assets/index.fc74c2e0.js",revision:null},{url:"assets/login.200207a2.css",revision:null},{url:"assets/login.9cd39385.js",revision:null},{url:"assets/logo.d77fe55e.js",revision:null},{url:"assets/usePagination.4143cb8b.js",revision:null},{url:"assets/vendor.18c32348.js",revision:null},{url:"index.html",revision:"a36e9aa2848759e5c32ea3f878df6650"},{url:"tinymce/langs/zh_CN.js",revision:"e1ad1e2d490b830b6d5ac9a99720f6ac"},{url:"tinymce/skins/content/dark/content.css",revision:"7947e209ce860497dcfd2af897fe1ce4"},{url:"tinymce/skins/content/dark/content.min.css",revision:"abbe75532474fa1e2a40a56ca4f2a84b"},{url:"tinymce/skins/content/default/content.css",revision:"cc6e868e457f4c46ce96a51b0add1bc3"},{url:"tinymce/skins/content/default/content.min.css",revision:"968d5fcdce2f3ecfb899445c6e669703"},{url:"tinymce/skins/content/document/content.css",revision:"d99a17a94b4974859115f70acbc1f731"},{url:"tinymce/skins/content/document/content.min.css",revision:"97c288ecb0eec2aba532ab01a7e58a47"},{url:"tinymce/skins/content/writer/content.css",revision:"1abfbf05deccf6c40940de28fb08d014"},{url:"tinymce/skins/content/writer/content.min.css",revision:"88ff3d78025e759f414cb5c305812b96"},{url:"tinymce/skins/ui/oxide-dark/content.css",revision:"d0483fbbcafb412fb08af7bafc9670b1"},{url:"tinymce/skins/ui/oxide-dark/content.inline.css",revision:"43efb998d32e01ab048abf608d620bf9"},{url:"tinymce/skins/ui/oxide-dark/content.inline.min.css",revision:"b56f7f7268578dac89d055f8c7060a7e"},{url:"tinymce/skins/ui/oxide-dark/content.min.css",revision:"f027fa095d2dc6bb60fea9944f4b686c"},{url:"tinymce/skins/ui/oxide-dark/content.mobile.css",revision:"ee0bbaa9a65a80eed6569842c9cbc3cd"},{url:"tinymce/skins/ui/oxide-dark/content.mobile.min.css",revision:"e36bc75469654354c5f467491ecfe850"},{url:"tinymce/skins/ui/oxide-dark/skin.css",revision:"29853db74137a687c01b642c6c535f6c"},{url:"tinymce/skins/ui/oxide-dark/skin.min.css",revision:"dd4d926a3c96cdcb0907c888c3c4b15e"},{url:"tinymce/skins/ui/oxide-dark/skin.mobile.css",revision:"45f53cf907528cd4295a7a9fcbc6c70c"},{url:"tinymce/skins/ui/oxide-dark/skin.mobile.min.css",revision:"9a6b46d30696025dc18e8a7e71ac2ef9"},{url:"tinymce/skins/ui/oxide-dark/skin.shadowdom.css",revision:"5092c1945de4a5a7bcd2b557d86a9b42"},{url:"tinymce/skins/ui/oxide-dark/skin.shadowdom.min.css",revision:"9c56dbac5838bd0f87e703c7a878b484"},{url:"tinymce/skins/ui/oxide/content.css",revision:"2f1116e8f3fb42f2a9b6579b6f82b44b"},{url:"tinymce/skins/ui/oxide/content.inline.css",revision:"43efb998d32e01ab048abf608d620bf9"},{url:"tinymce/skins/ui/oxide/content.inline.min.css",revision:"b56f7f7268578dac89d055f8c7060a7e"},{url:"tinymce/skins/ui/oxide/content.min.css",revision:"161fcc19501b5f7645d7522a3c625bb5"},{url:"tinymce/skins/ui/oxide/content.mobile.css",revision:"ee0bbaa9a65a80eed6569842c9cbc3cd"},{url:"tinymce/skins/ui/oxide/content.mobile.min.css",revision:"e36bc75469654354c5f467491ecfe850"},{url:"tinymce/skins/ui/oxide/skin.css",revision:"9a947657881812996e2ce8ff1e0a392c"},{url:"tinymce/skins/ui/oxide/skin.min.css",revision:"f14405fdf6ef5e15429bd74ee09c9839"},{url:"tinymce/skins/ui/oxide/skin.mobile.css",revision:"45f53cf907528cd4295a7a9fcbc6c70c"},{url:"tinymce/skins/ui/oxide/skin.mobile.min.css",revision:"9a6b46d30696025dc18e8a7e71ac2ef9"},{url:"tinymce/skins/ui/oxide/skin.shadowdom.css",revision:"5092c1945de4a5a7bcd2b557d86a9b42"},{url:"tinymce/skins/ui/oxide/skin.shadowdom.min.css",revision:"9c56dbac5838bd0f87e703c7a878b484"},{url:"./pwa_icons/192x192.png",revision:"c961a30e93861d602d9661b5d3006bca"},{url:"./pwa_icons/384x384.png",revision:"a0eef659d7b9c165391ffe22292e8e62"},{url:"manifest.webmanifest",revision:"255a539f9615038660203faccf190a9f"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
