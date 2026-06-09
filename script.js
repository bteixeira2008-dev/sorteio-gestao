function pad(n){return String(n).padStart(2,"0")}
function norm(v){return String(v).replace(/\D/g,"").slice(0,4).padStart(4,"0")}
function updateCountdown(){
  const target=new Date(SORTEIO.data).getTime(), now=Date.now(), diff=target-now;
  if(diff<=0){
    days.textContent=hours.textContent=minutes.textContent=seconds.textContent="00";
    status.textContent=SORTEIO.publicado?"Resultados publicados":"Sorteio realizado. Resultados em publicação.";
    return;
  }
  const d=Math.floor(diff/86400000), h=Math.floor(diff/3600000%24), m=Math.floor(diff/60000%60), s=Math.floor(diff/1000%60);
  days.textContent=d; hours.textContent=pad(h); minutes.textContent=pad(m); seconds.textContent=pad(s);
  status.textContent=`Faltam ${d} dias para o sorteio`;
}
function renderWinners(){
  if(!SORTEIO.publicado)return;
  winner1.textContent=SORTEIO.vencedores.primeiro||"A anunciar";
  winner2.textContent=SORTEIO.vencedores.segundo||"A anunciar";
  winner3.textContent=SORTEIO.vencedores.terceiro||"A anunciar";
}
function checkTicket(){
  const raw=searchInput.value.trim(), ticket=norm(raw);
  if(!raw){searchResult.textContent="Insere o número da rifa.";return}
  if(!SORTEIO.publicado){searchResult.textContent=`Rifa ${ticket}: o sorteio ainda não foi publicado.`;return}
  if(ticket===SORTEIO.vencedores.primeiro) searchResult.textContent=`Parabéns! Rifa ${ticket} ganhou o 1.º prémio.`;
  else if(ticket===SORTEIO.vencedores.segundo) searchResult.textContent=`Parabéns! Rifa ${ticket} ganhou o 2.º prémio.`;
  else if(ticket===SORTEIO.vencedores.terceiro) searchResult.textContent=`Parabéns! Rifa ${ticket} ganhou o 3.º prémio.`;
  else searchResult.textContent=`Rifa ${ticket}: não premiada.`;
}
searchInput.addEventListener("input",()=>searchInput.value=searchInput.value.replace(/\D/g,"").slice(0,4));
updateCountdown(); renderWinners(); setInterval(updateCountdown,1000);
