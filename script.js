
// Configure o número do WhatsApp aqui (apenas dígitos com DDI e DDD). Ex.: 5547999999999
const WHATSAPP_NUMBER = "5547999999999"; // <-- troque para o seu número

function openWhatsApp(code){
  const text = `Olá! Tenho interesse no produto ${code} (Tamanho: 6 – R$ 29,90). Pode me enviar mais detalhes?`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

document.addEventListener("click", (ev) => {
  const btn = ev.target.closest("[data-code].btn-buy");
  if(!btn) return;
  const code = btn.getAttribute("data-code");
  openWhatsApp(code);
});
