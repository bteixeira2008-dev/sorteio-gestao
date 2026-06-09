function pad(n){ return String(n).padStart(2,'0'); }

function normalizeTicket(value){
  const digits = String(value).replace(/\D/g,'').slice(0,4);
  return digits.padStart(4,'0');
}

function updateCountdown(){
  const target = new Date(SORTEIO.data).getTime();
  const now = Date.now();
  const diff = target - now;

  if(diff <= 0){
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('status').textContent = SORTEIO.publicado
      ? 'Resultados publicados'
      : 'Sorteio realizado. Resultados em publicação.';
    return;
  }

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const minutes = Math.floor((diff / (1000*60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = pad(hours);
  document.getElementById('minutes').textContent = pad(minutes);
  document.getElementById('seconds').textContent = pad(seconds);
  document.getElementById('status').textContent = `Faltam ${days} dias para o sorteio`;
}

function renderWinners(){
  if(!SORTEIO.publicado){ return; }
  document.getElementById('winner1').textContent = SORTEIO.vencedores.primeiro || 'A anunciar';
  document.getElementById('winner2').textContent = SORTEIO.vencedores.segundo || 'A anunciar';
  document.getElementById('winner3').textContent = SORTEIO.vencedores.terceiro || 'A anunciar';
}

function checkTicket(){
  const value = document.getElementById('searchInput').value;
  const ticket = normalizeTicket(value);
  const result = document.getElementById('searchResult');

  if(!value.trim()){
    result.textContent = 'Insere o número da rifa.';
    return;
  }

  if(!SORTEIO.publicado){
    result.textContent = `Rifa ${ticket}: o sorteio ainda não foi publicado.`;
    return;
  }

  if(ticket === SORTEIO.vencedores.primeiro){
    result.textContent = `Parabéns! Rifa ${ticket} ganhou o 1.º prémio.`;
  } else if(ticket === SORTEIO.vencedores.segundo){
    result.textContent = `Parabéns! Rifa ${ticket} ganhou o 2.º prémio.`;
  } else if(ticket === SORTEIO.vencedores.terceiro){
    result.textContent = `Parabéns! Rifa ${ticket} ganhou o 3.º prémio.`;
  } else {
    result.textContent = `Rifa ${ticket}: não premiada.`;
  }
}

const input = document.getElementById('searchInput');
if(input){
  input.addEventListener('input', function(){
    this.value = this.value.replace(/\D/g,'').slice(0,4);
  });
}

updateCountdown();
renderWinners();
setInterval(updateCountdown, 1000);
