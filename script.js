const viewer=document.querySelector('#image-viewer');
const picture=document.querySelector('#viewer-image');
const stage=document.querySelector('.viewer-stage');
let opener;
for(const button of document.querySelectorAll('[data-full], [data-coming]')) button.addEventListener('click',()=>{
 opener=button;
 const pending=button.hasAttribute('data-coming');
 picture.hidden=pending;
 document.querySelector('#viewer-message').hidden=!pending;
 if(!pending){picture.src=button.dataset.full;picture.alt=button.dataset.title||button.querySelector('img').alt;}
 else picture.removeAttribute('src');
 document.querySelector('#viewer-title').textContent=pending?'Coming soon':picture.alt;
 viewer.showModal();document.body.classList.add('modal-open');stage.scrollTo(0,0);
});
document.querySelector('#viewer-close').addEventListener('click',()=>viewer.close());
let backdropDown=false;
viewer.addEventListener('pointerdown',e=>{backdropDown=e.target===viewer;});
viewer.addEventListener('click',e=>{if(backdropDown&&e.target===viewer)viewer.close();backdropDown=false;});
viewer.addEventListener('close',()=>{document.body.classList.remove('modal-open');opener?.focus({preventScroll:true});});
const links=[...document.querySelectorAll('.topbar a')];
const sections=links.map(a=>document.querySelector(a.hash)).filter(Boolean);
let requestedSection=null;
let navTimer;
function activate(id){for(const a of links){if(a.hash==='#'+id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');}}
function updateNav(){
 if(requestedSection){activate(requestedSection);return;}
 const threshold=(document.querySelector('.topbar')?.getBoundingClientRect().bottom||60)+40;
 let current=null;
 for(const s of sections)if(s.getBoundingClientRect().top<=threshold)current=s.id;
 if(window.scrollY>0&&window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-3)current=sections.at(-1)?.id;
 activate(current);
}
function finishNavigation(){requestedSection=null;updateNav();}
function selectSection(id){
 if(!sections.some(s=>s.id===id))return;
 requestedSection=id;activate(id);clearTimeout(navTimer);navTimer=setTimeout(finishNavigation,1200);
}
for(const a of links)a.addEventListener('click',()=>selectSection(a.hash.slice(1)));
window.addEventListener('hashchange',()=>selectSection(location.hash.slice(1)));
window.addEventListener('scroll',()=>{updateNav();if(requestedSection){clearTimeout(navTimer);navTimer=setTimeout(finishNavigation,200);}},{passive:true});
for(const event of ['wheel','touchstart'])window.addEventListener(event,()=>{requestedSection=null;clearTimeout(navTimer);updateNav();},{passive:true});
window.addEventListener('resize',updateNav);
window.addEventListener('load',updateNav);
selectSection(location.hash.slice(1));updateNav();
