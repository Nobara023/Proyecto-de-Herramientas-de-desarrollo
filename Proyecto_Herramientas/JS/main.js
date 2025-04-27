const preguntas = [
    {
        pregunta: "❓ ¿Qué hago si detecto que alguien usa mis datos?",
        respuesta: "Debes contactar a las autoridades y reportarlo a las plataformas o bancos involucrados de inmediato."
    },
    {
        pregunta: "❓ ¿Cómo denuncio una suplantación de identidad?",
        respuesta: "Puedes acudir a la policía cibernética o ingresar a la web de denuncias digitales de tu país."
    },
    {
        pregunta: "🔒 ¿Qué evidencia debo conservar?",
        respuesta: "Capturas de pantalla, mensajes, correos, números de contacto y cualquier interacción sospechosa."
    },
    {
        pregunta: "💸 ¿Qué hago si perdí dinero?",
        respuesta: "Debes reportarlo a tu banco para intentar recuperar el monto y realizar la denuncia correspondiente."
    },
    {
        pregunta: "🔑 ¿Puedo recuperar mis cuentas suplantadas?",
        respuesta: "Sí, reportándolo directamente en las plataformas afectadas para solicitar la verificación de identidad."
    },
    {
        pregunta: "🛡️ ¿Es importante cambiar mis contraseñas?",
        respuesta: "Sí, inmediatamente cambia tus contraseñas y activa la verificación en dos pasos para proteger tus datos."
    },
    {
        pregunta: "⚖️ ¿Dónde busco ayuda legal?",
        respuesta: "Puedes contactar con un abogado especializado en delitos informáticos o acudir a organismos de protección al consumidor."
    },
    {
        pregunta: "🏛️ ¿Qué instituciones ofrecen ayuda?",
        respuesta: "En Perú, por ejemplo, Indecopi, OSIPTEL y la Policía Nacional tienen áreas de atención digital para estos casos."
    }
];

// Renderizar preguntas en el acordeón
const faqAccordion = document.getElementById('faqAccordion');
function renderPreguntas(preguntasFiltradas) {
    faqAccordion.innerHTML = '';
    preguntasFiltradas.forEach((item, index) => {
        const card = `
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}">
                        ${item.pregunta}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        ${item.respuesta}
                    </div>
                </div>
            </div>
        `;
        faqAccordion.innerHTML += card;
    });
}
renderPreguntas(preguntas);

// Filtro de preguntas
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredPreguntas = preguntas.filter(p =>
        p.pregunta.toLowerCase().includes(searchTerm) ||
        p.respuesta.toLowerCase().includes(searchTerm)
    );
    renderPreguntas(filteredPreguntas);
});
