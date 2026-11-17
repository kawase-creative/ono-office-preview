const documentModal = document.querySelector('#document-modal');
let documentTrigger;
document.querySelectorAll('[data-document]').forEach(button => {
  button.addEventListener('click', () => {
    documentTrigger = button;
    const id = Number(button.dataset.document);
    const title = button.querySelector('img').alt;
    const content = documentModal.querySelector('.document-modal-content');
    const pdfLink = document.createElement('a');
    pdfLink.href = `assets/cancel-documents/document-${id}.pdf`;
    pdfLink.textContent = '原本PDFを開く ↗';
    pdfLink.target = '_blank';
    pdfLink.rel = 'noopener';
    pdfLink.className = 'original-pdf-link';
    content.replaceChildren(pdfLink);
    const pages = id === 4 ? 3 : 1;
    for (let page = 1; page <= pages; page++) {
      const figure = document.createElement('figure');
      const image = document.createElement('img');
      image.src = `assets/cancel-documents/document-${id}-page-${page}.png`;
      image.alt = `${title}（${page}／${pages}ページ）`;
      image.decoding = 'async';
      figure.append(image);
      if (pages > 1) {
        const caption = document.createElement('figcaption');
        caption.textContent = `${page}／${pages}ページ`;
        figure.append(caption);
      }
      content.append(figure);
    }
    documentModal.querySelector('#document-title').textContent = title;
    documentModal.showModal();
    documentModal.querySelector('#document-title').focus({preventScroll:true});
    documentModal.scrollTop = 0;
    document.body.classList.add('document-open');
  });
});
documentModal.querySelector('button').addEventListener('click', () => documentModal.close());
documentModal.addEventListener('click', event => { if (event.target === documentModal) { const r=documentModal.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)documentModal.close(); }});
documentModal.addEventListener('close', () => { document.body.classList.remove('document-open'); documentTrigger?.focus(); });
