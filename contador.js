
    let contador = 10;
    const spanContador = document.getElementById('contador');
    const btnDisminuir = document.getElementById('btnDisminuir');

    btnDisminuir.addEventListener('click', () => {
      if (contador > 0) {
        contador--;
        spanContador.textContent = contador;
      }
    });
