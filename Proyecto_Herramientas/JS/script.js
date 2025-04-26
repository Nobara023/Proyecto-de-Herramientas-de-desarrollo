document.getElementById("filtroPreguntas").addEventListener("keyup", function () {
    const filtro = this.value.toLowerCase();
    const preguntas = document.querySelectorAll(".accordion-item");
    preguntas.forEach(item => {
      const texto = item.textContent.toLowerCase();
      item.style.display = texto.includes(filtro) ? "block" : "none";
    });
  });
  