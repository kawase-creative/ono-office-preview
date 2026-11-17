const documentModal = document.querySelector('#document-modal');
let documentTrigger;
document.querySelectorAll('[data-document]').forEach(button => {
  button.addEventListener('click', () => {
    documentTrigger = button;
    const preview = button.querySelector('svg').cloneNode(true);
    documentModal.querySelector('.document-modal-content').replaceChildren(preview);
    documentModal.querySelector('#document-title').textContent = preview.getAttribute('aria-label');
    documentModal.showModal();
    document.body.classList.add('document-open');
  });
});
documentModal.querySelector('button').addEventListener('click', () => documentModal.close());
documentModal.addEventListener('click', event => { if (event.target === documentModal) { const r=documentModal.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)documentModal.close(); }});
documentModal.addEventListener('close', () => { document.body.classList.remove('document-open'); documentTrigger?.focus(); });
