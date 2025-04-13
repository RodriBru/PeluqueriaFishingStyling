document.addEventListener("DOMContentLoaded", () => {
    // Listo para funciones como horarios dinámicos o animaciones futuras
    console.log("Página cargada");
  });

  

 // Esta función se ejecuta cuando el documento está completamente cargado
// y muestra dinámicamente qué barberos están disponibles según el día de la semana,
// con íconos decorativos y animación suave para mejorar la experiencia visual.
// También agrega efecto hover a las imágenes de corte para mostrar el nombre del estilo.

document.addEventListener("DOMContentLoaded", () => {
    const hoy = new Date().getDay(); // 0 = domingo, 1 = lunes, ...
    const barberoDelDia = document.createElement("div");
    barberoDelDia.classList.add("barbero-dia");
  
    let mensaje = "";
  
    switch (hoy) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        mensaje = "💈 Hoy atienden: <strong>Especialista en barbas</strong> y <strong>Cortes clásicos</strong>.";
        break;
      case 6:
        mensaje = "✂️ Hoy atiende: <strong>Estilos modernos</strong>.";
        break;
      case 0:
        mensaje = "⛔ Hoy no hay barberos disponibles.";
        break;
    }
  
    barberoDelDia.innerHTML = `<p style="text-align:center; padding: 1rem; font-size: 1.1rem; background: #f3ede2; border: 1px solid #ccc; margin-bottom: 1rem; opacity: 0; transform: translateY(-10px); transition: all 0.5s ease;">${mensaje}</p>`;
  
    const seccionBarberos = document.querySelector(".barberos");
    if (seccionBarberos) {
      seccionBarberos.insertAdjacentElement("beforebegin", barberoDelDia);
      setTimeout(() => {
        barberoDelDia.querySelector("p").style.opacity = "1";
        barberoDelDia.querySelector("p").style.transform = "translateY(0)";
      }, 100);
    }
  
    // Agrega tooltip al pasar el mouse sobre los cortes de pelo
    const cortes = document.querySelectorAll(".galeria .cortes img");
    const nombres = [
      "Clásico con bigote",
      "Degradado moderno",
      "Fade texturizado",
      "Mullet actualizado",
      "Rapado con diseño",
      "Afro corto"
    ];
  
    cortes.forEach((img, i) => {
      img.title = nombres[i];
      img.style.transition = "transform 0.3s ease";
      img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.05)";
      });
      img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
      });
    });
  });