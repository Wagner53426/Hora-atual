const clockElemnt = document.querySelector('.clock');

setInterval(function() {
    const now = new Date();

    const horas = now.getHours().toString().padStart(2, '0');
    const minutos = now.getMinutes().toString().padStart(2, '0');
    const segundos = now.getUTCSeconds().toString().padStart(2, '0');
    const tempo = `${horas}:${minutos}:${segundos}`;

    clockElemnt.textContent = tempo;
}, 1000);