import './scss/estilos.scss';

const titulo = document.getElementById('titulo');
const forma = document.getElementById('forma');

let mousex = 0; // Gets Mouse X
let mousey = 0;

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
  forma.style.opacity = '0.6';
  console.log('..:: EnFlujo ::.. sin conexión');

  document.addEventListener('mousemove', (e) => {
    mousex = e.clientX; // Gets Mouse X
    mousey = e.clientY; // Gets Mouse Y

    forma.style.top = `${mousey / 10}%`;
    forma.style.left = `${mousex / 10}%`;
  });
});

window.addEventListener('online', function (e) {
  // Network connected
  titulo.innerText = 'Ahora hay conexión :)';
  forma.style.borderRadius = '0%';
  forma.style.opacity = '0';

  console.log('..:: EnFlujo ::.. conectado');
});
