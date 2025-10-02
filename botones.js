
const titulo = document.getElementById('titulo');
const btnRojo = document.getElementById('btnRojo');
const btnVerde = document.getElementById('btnVerde');
const btnAzul = document.getElementById('btnAzul');

btnRojo.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red';
  titulo.style.color = 'white';
});

btnVerde.addEventListener('click', () => {
  document.body.style.backgroundColor = 'green';
  titulo.style.color = 'black';
});

btnAzul.addEventListener('click', () => {
  document.body.style.backgroundColor = 'blue';
  titulo.style.color = 'yellow';
});
