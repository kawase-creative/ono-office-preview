(()=>{
 const modal=document.querySelector('#image-modal');
 const pages=modal.querySelector('.d-document-pages');
 const link=modal.querySelector('.d-original-pdf');
 document.querySelectorAll('[data-document]').forEach(button=>button.addEventListener('click',()=>{
  const name=button.dataset.document;
  const count=name==='family'?2:1;
  pages.replaceChildren();
  for(let n=1;n<=count;n++){
   const figure=document.createElement('figure');
   const caption=document.createElement('figcaption');caption.textContent=`${n} / ${count} ページ`;
   const img=document.createElement('img');img.src=`assets/divorce/${name}-page-${n}.png`;img.alt=`${button.dataset.alt} ${n}ページ`;img.width=1600;
   figure.append(caption,img);pages.append(figure);
  }
  link.href=`assets/divorce/${name}.pdf`;
  modal.showModal();modal.scrollTop=0;
 }));
})();
