import './scss/estilos.scss';

const titulo = document.getElementById('titulo');
const forma = document.getElementById('forma');

const online = window.navigator.onLine;
if (online) {
  // Is connected to internet
  console.log('..:: EnFlujo ::.. conectado!');
  titulo.innerText = 'Hola, hay conexión';
  forma.style.borderRadius = '0%';
} else {
  // Not connected to internet
  titulo.innerText = 'Hola, no hay conexión';
  forma.style.borderRadius = '50%';
  console.log('..:: EnFlujo ::.. sin conexión!');
}

window.addEventListener('offline', function (e) {
  // Network disconnected
  titulo.innerText = 'Ya no hay conexión :)';
  forma.style.borderRadius = '50%';
  console.log('..:: EnFlujo ::.. sin conexión');
});

window.addEventListener('online', function (e) {
  // Network connected
  titulo.innerText = 'Ahora hay conexión :)';
  forma.style.borderRadius = '0%';
  console.log('..:: EnFlujo ::.. conectado');
});
