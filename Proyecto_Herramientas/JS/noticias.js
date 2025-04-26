const noticias = [
    {
        titulo: "Cliente del BCP en Ayacucho denuncia suplantación de identidad para solicitar créditos",
        resumen: "Félix Vila Galindo fue víctima de fraude donde se solicitaron dos créditos a su nombre utilizando sus datos biométricos. El BCP aún no le brinda una solución.",
        imagen: "https://elbuho.pe/wp-content/uploads/2020/03/BCP.jpg",
        enlace: "https://elbuho.pe/2025/01/cliente-del-bcp-sede-ayacucho-denuncia-suplantacion-de-identidad-para-solicitar-creditos-termino-endeudado/"
      },
      {
        titulo: "Mujer detenida injustamente por suplantación de identidad en llamadas extorsivas",
        resumen: "Betzabé Verónica Borda Hurtado estuvo 10 días detenida tras ser acusada de participar en extorsiones. Descubrió que delincuentes habían sacado líneas telefónicas a su nombre.",
        imagen: "https://peru21.pe/sites/default/efsfiles/styles/teaser/public/2024-03/3M4OICJLGBGXXOFPHI7ESRS66I.jpg?itok=jQCjR9IJ",
        enlace: "https://www.exitosanoticias.pe/actualidad/le-robaron-mas-11-mil-soles-joven-denuncia-suplantacion-identidad-vaciado-su-cuenta-n104362"
      },
      {
        titulo: "Locutora denuncia suplantación de identidad y robo de más de S/5,000",
        resumen: "María Fernanda Angulo fue víctima de clonación de tarjeta y creación de tienda virtual a su nombre, resultando en pérdidas significativas.",
        imagen: "https://peru21.pe/sites/default/efsfiles/styles/wide/public/2023-10/5KQV7BCF35EFRGAELIQ6QNO2BQ.jpg?itok=SJadsAX7",
        enlace: "https://peru21.pe/lima/locutora-denuncia-suplantacion-de-identidad-clonacion-de-su-tarjeta-para-robarle-mas-de-s5000-y-crear-tienda-virtual-video-banco-interbank-maria-fernanda-angulo-ciberdelincuencia-rmmn-noticia/"
      },
      {
        titulo: "Joven denuncia suplantación de identidad y vaciado de su cuenta por más de S/11,000",
        resumen: "Alessandra Alcocer fue víctima de suplantación de identidad, resultando en el robo de más de S/11,000 de su cuenta bancaria. A pesar de un fallo a su favor, el banco no le ha devuelto el dinero.",
        imagen: "https://statics.exitosanoticias.pe/2023/07/crop/64bffbf332753__400x209.webp",
        enlace: "https://www.exitosanoticias.pe/actualidad/le-robaron-mas-11-mil-soles-joven-denuncia-suplantacion-identidad-vaciado-su-cuenta-n104362"
      },
      {
        titulo: "Poder Judicial condena a mujer por crear perfil falso en Facebook",
        resumen: "Janet Mireya Zevallos Salazar fue sentenciada por suplantar la identidad de otra persona en redes sociales, afectando su reputación.",
        imagen: "https://elcomercio.pe/resizer/v2/EKWHBHT2ZBFA3CDBIMGQNS6WB4.jpg?auth=68c32b088d6e79ddde0426ce14a25ac26eed9d54e8ee116da81909834c7f0273&width=1200&height=677&quality=75&smart=true",
        enlace: "https://elcomercio.pe/lima/sucesos/facebook-poder-judicial-condena-a-mujer-por-crear-perfil-falso-en-redes-sociales-para-afectar-a-su-victima-janet-mireya-zevallos-salazar-ministerio-publico-fiscalia-suplantacion-de-identidad-ultimas-noticia/"
      },
      {
       titulo: "Robo y suplantación por WhatsApp alerta a usuarios en Perú",
       resumen: "La Policía reporta 84 denuncias de robo de cuentas de WhatsApp, utilizadas para estafas mediante suplantación de identidad.",
       imagen: "https://peru21.pe/sites/default/efsfiles/styles/teaser/public/2024-12/copia-de-180823_l02fotopequena1.png?itok=b1J6W7mn",
       enlace: "https://peru21.pe/noticias/suplantacion-de-identidad/"
    },
    {
       titulo: "PNP captura a banda dedicada a la suplantación de identidad por llamadas telefónicas en el Callao",
       resumen: "La Policía Nacional del Perú desarticuló una banda criminal que se hacía pasar por dueños de farmacias para estafar mediante llamadas telefónicas.",
       imagen: "https://diariocorreo.pe/resizer/v2/ATEA2DW65JHDZLGMARFLEZ7OQA.jpg?auth=136a979488f6603713e08d678dbe5263572c6b53ac2800215ae2a6750084219f&width=482&height=274&quality=75&smart=true",
       enlace: "https://diariocorreo.pe/edicion/lima/pnp-captura-a-banda-dedicada-a-la-suplantacion-de-identidad-por-llamadas-telefonicas-en-el-callao-peru-estafa-noticia/"
    },
    {
       titulo: "Robo de cuentas de WhatsApp: ¿Cómo mantenerte seguro y evitar fraudes'",
       resumen: "Conoce cómo podrían robarte tu cuentas, qué peligro hay y, sobre todo, cómo evitarlo.",
       imagen: "https://peru21.pe/sites/default/efsfiles/styles/wide/public/2024-07/amr7fcnigjf73jok4qkv6gpn7i.jpg?itok=bzrxjkon",
       enlace: "https://peru21.pe/tecnologia/robo-de-cuentas-de-whatsapp-como-mantenerte-seguro-y-evitar-fraudes-suplantacion-de-identidad-prestamos-tarjetas-de-credito-noticia/"
    },
    {
       titulo: "Poder Judicial condena a mujer por crear perfil falso en Facebook",
       resumen: "Janet Mireya Zevallos Salazar fue sentenciada por suplantar la identidad de otra persona en redes sociales, afectando su reputación.",
       imagen: "https://elcomercio.pe/resizer/v2/EKWHBHT2ZBFA3CDBIMGQNS6WB4.jpg?auth=68c32b088d6e79ddde0426ce14a25ac26eed9d54e8ee116da81909834c7f0273&width=482&height=271&quality=75&smart=true",
       enlace: "https://elcomercio.pe/lima/sucesos/facebook-poder-judicial-condena-a-mujer-por-crear-perfil-falso-en-redes-sociales-para-afectar-a-su-victima-janet-mireya-zevallos-salazar-ministerio-publico-fiscalia-suplantacion-de-identidad-ultimas-noticia/"
    },
    ];

    const contenedor = document.getElementById("news-container");

    noticias.forEach(noticia => {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-4 d-flex";

      const card = document.createElement("div");
      card.className = "card-noticia d-flex flex-column";

      const img = document.createElement("img");
      img.src = noticia.imagen;
      img.alt = noticia.titulo;

      const cuerpo = document.createElement("div");
      cuerpo.className = "card-body d-flex flex-column";

      const titulo = document.createElement("h5");
      titulo.className = "card-title";
      titulo.textContent = noticia.titulo;

      const resumen = document.createElement("p");
      resumen.className = "card-text";
      resumen.textContent = noticia.resumen;

      cuerpo.appendChild(titulo);
      cuerpo.appendChild(resumen);

      if (noticia.enlace) {
        const enlace = document.createElement("a");
        enlace.href = noticia.enlace;
        enlace.className = "btn-vermas";
        enlace.textContent = "Leer más";
        cuerpo.appendChild(enlace);
      }

      card.appendChild(img);
      card.appendChild(cuerpo);
      col.appendChild(card);
      contenedor.appendChild(col);
    });