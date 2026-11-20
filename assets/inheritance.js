(()=>{
const dialog=document.querySelector('#document-viewer'),image=dialog.querySelector('#document-image'),title=dialog.querySelector('#document-title'),viewport=dialog.querySelector('.i-document-viewport'),output=dialog.querySelector('#document-scale');
let trigger,scale=1;
function zoom(value){scale=Math.max(1,Math.min(3,value));image.style.width=(scale*100)+'%';output.textContent=Math.round(scale*100)+'%';dialog.querySelector('[data-zoom="out"]').disabled=scale===1;dialog.querySelector('[data-zoom="in"]').disabled=scale===3;image.style.cursor=scale===1?'zoom-in':'zoom-out';}
document.querySelectorAll('[data-inheritance-image]').forEach(button=>button.addEventListener('click',()=>{trigger=button;image.src=button.dataset.inheritanceImage;image.alt=button.dataset.title+'（説明用見本）';title.textContent=button.dataset.title;zoom(1);dialog.showModal();viewport.scrollTo(0,0);}));
dialog.querySelectorAll('[data-zoom]').forEach(button=>button.addEventListener('click',()=>{zoom(button.dataset.zoom==='reset'?1:scale+(button.dataset.zoom==='in'?.5:-.5));}));
image.addEventListener('click',()=>zoom(scale===1?2:1));
dialog.querySelector('.i-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
dialog.addEventListener('close',()=>trigger?.focus());
})();