const btnMostrarFormulario = document.getElementById('btnMostrarFormulario');
    const formularioComentario = document.getElementById('formularioComentario');
    const formComentario = document.getElementById('formComentario');
    const comentariosDiv = document.getElementById('comentarios');

    btnMostrarFormulario.addEventListener('click', () => {
      if (formularioComentario.classList.contains('mostrar')) {
        formularioComentario.classList.remove('mostrar');
        btnMostrarFormulario.innerHTML = '<i class="bi bi-plus-circle-fill"></i> Compartir historia';
        setTimeout(() => formularioComentario.style.display = 'none', 500);
      } else {
        formularioComentario.style.display = 'block';
        setTimeout(() => formularioComentario.classList.add('mostrar'), 10);
        btnMostrarFormulario.innerHTML = '<i class="bi bi-x-circle-fill"></i> Cerrar formulario';
      }
    });

    formComentario.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const comentarioTexto = document.getElementById('comentario').value.trim();
      const fecha = new Date().toLocaleString('es-PE', {
        day: '2-digit', month: 'long', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
      });

      if (nombre && comentarioTexto) {
        const nuevoComentario = document.createElement('div');
        nuevoComentario.classList.add('comentario');
        nuevoComentario.innerHTML = `
          <div class="d-flex justify-content-between">
            <div><span class="usuario">${nombre}</span></div>
            <div class="fecha">${fecha}</div>
          </div>
          <p class="mt-2">${comentarioTexto}</p>
          <button class="btn btn-sm btn-outline-light mt-2"><i class="bi bi-reply-fill"></i> Responder</button>
        `;
        comentariosDiv.prepend(nuevoComentario);

        // Resetear el formulario
        formComentario.reset();

        // Cerrar el formulario
        formularioComentario.classList.remove('mostrar');
        btnMostrarFormulario.innerHTML = '<i class="bi bi-plus-circle-fill"></i> Compartir historia';
        setTimeout(() => formularioComentario.style.display = 'none', 500);
      }
    });