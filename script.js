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

// Manual dragon carousel: buttons, arrow keys, and horizontal touch gestures.
const dragonCarousel=document.querySelector('.dragon-carousel');
const dragonSlides=[...document.querySelectorAll('.dragon-slide')];
const dragonButtons=[...document.querySelectorAll('[data-dragon]')];
let dragonIndex=0;
function showDragon(index){
 const next=(index+dragonSlides.length)%dragonSlides.length;
 const direction=index>dragonIndex?'40px':'-40px';
 dragonSlides.forEach((slide,i)=>{slide.hidden=i!==next;slide.classList.remove('is-entering');});
 const slide=dragonSlides[next];
 slide.style.setProperty('--slide-direction',direction);
 void slide.offsetWidth;slide.classList.add('is-entering');
 dragonButtons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===next)));
 dragonIndex=next;
 document.querySelector('.dragon-status').textContent=`${next+1} / ${dragonSlides.length} · ${dragonButtons[next].textContent}`;
}
dragonButtons.forEach((button,i)=>button.addEventListener('click',()=>showDragon(i)));
document.querySelector('.dragon-prev').addEventListener('click',()=>showDragon(dragonIndex-1));
document.querySelector('.dragon-next').addEventListener('click',()=>showDragon(dragonIndex+1));
dragonCarousel.addEventListener('keydown',event=>{
 if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();showDragon(dragonIndex+(event.key==='ArrowRight'?1:-1));}
});
let dragonTouch=null, suppressDragonClick=false;
const dragonSurface=document.querySelector('.dragon-slides');
dragonSurface.addEventListener('touchstart',event=>{suppressDragonClick=false;dragonTouch=event.touches.length===1?{x:event.touches[0].clientX,y:event.touches[0].clientY}:null;},{passive:true});
dragonSurface.addEventListener('touchend',event=>{
 if(!dragonTouch)return;
 const dx=event.changedTouches[0].clientX-dragonTouch.x,dy=event.changedTouches[0].clientY-dragonTouch.y;
 dragonTouch=null;
 if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5){suppressDragonClick=true;showDragon(dragonIndex+(dx<0?1:-1));}
},{passive:true});
dragonSurface.addEventListener('touchcancel',()=>{dragonTouch=null;},{passive:true});
dragonSurface.addEventListener('click',event=>{if(suppressDragonClick){event.preventDefault();event.stopImmediatePropagation();suppressDragonClick=false;}},true);
