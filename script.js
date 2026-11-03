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
const sections=links.map(a=>document.querySelector(a.hash));
function updateNav(){let current=null;for(const s of sections)if(s.getBoundingClientRect().top<=130)current=s.id;for(const a of links){if(a.hash==='#'+current)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');}}
window.addEventListener('scroll',updateNav,{passive:true});updateNav();
