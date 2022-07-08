import './scss/estilos.scss';

const online = window.navigator.onLine;
if (online) {
  // Is connected to internet
  console.log('..:: EnFlujo ::.. conectado!');
} else {
  // Not connected to internet
  console.log('..:: EnFlujo ::.. sin conexión!');
}

window.addEventListener('offline', function (e) {
  // Network disconnected
  console.log('..:: EnFlujo ::.. sin conexión');
});

window.addEventListener('online', function (e) {
  // Network connected
  console.log('..:: EnFlujo ::.. conectado');
});
