const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');
function setMenu(open){
 menu?.setAttribute('aria-expanded',String(open));
 if(menu?.classList.contains('hamburger'))menu.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');
 nav?.classList.toggle('open',open);
}
menu?.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){setMenu(false);menu.focus();}});
const modal=document.querySelector('#image-modal');document.querySelectorAll('[data-image]').forEach(b=>b.addEventListener('click',()=>{modal.querySelector('img').src=b.dataset.image;modal.querySelector('img').alt=b.dataset.alt||'参考資料';modal.showModal()}));modal?.querySelector('button').addEventListener('click',()=>modal.close());modal?.addEventListener('click',e=>{if(e.target===modal)modal.close()});const form=document.querySelector('#contact-form'),result=document.querySelector('#confirmation');form?.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const v=new FormData(form);result.textContent='入力内容の確認（まだ送信されていません）\n\n'+[['ご相談内容','subject'],['金融機関・会社名','company'],['お名前','name'],['メールアドレス','email'],['電話番号','phone'],['ご相談の詳細','message']].map(([l,k])=>l+'：'+(k==='subject'?subjectField.selectedOptions[0].textContent:(v.get(k)||'未入力'))).join('\n\n')+'\n\nこの確認版では入力内容は外部に送信されません。';result.hidden=false;result.scrollIntoView({behavior:'smooth',block:'center'});});document.querySelector('#reset-form')?.addEventListener('click',()=>{form.reset();result.hidden=true;result.textContent=''})
// Keep the selected service when arriving from a case page.
const serviceKeys=['cancel','mortgage','change','inheritance','corporation','divorce'];
const subjectField=document.querySelector('select[name="subject"]');
if(subjectField){serviceKeys.forEach((key,i)=>{subjectField.options[i+1].value=key});const key=new URLSearchParams(location.search).get('subject');if(serviceKeys.includes(key))subjectField.value=key;}
form?.addEventListener('input',()=>{if(result){result.hidden=true;result.textContent='';}});
