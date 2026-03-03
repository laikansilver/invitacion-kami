// Script para la invitación de Kamila

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cuenta Regresiva
    const fechaEvento = new Date('March 14, 2026 19:00:00').getTime();

    const countdownInterval = setInterval(() => {
        const ahora = new Date().getTime();
        const distancia = fechaEvento - ahora;

        if (distancia < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "<h2 class='text-white mt-3'>¡Hoy es el gran día!</h2>";
            return;
        }

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            countdownElement.innerHTML = `
                <div class="d-inline-block text-center mx-2">
                    <span class="d-block display-4 fw-bold font-dancing">${dias}</span>
                    <small class="text-uppercase font-montserrat" style="font-size: 0.8rem;">Días</small>
                </div>
                <div class="d-inline-block text-center mx-2">
                    <span class="d-block display-4 fw-bold font-dancing">${horas}</span>
                    <small class="text-uppercase font-montserrat" style="font-size: 0.8rem;">Horas</small>
                </div>
                <div class="d-inline-block text-center mx-2">
                    <span class="d-block display-4 fw-bold font-dancing">${minutos}</span>
                    <small class="text-uppercase font-montserrat" style="font-size: 0.8rem;">Min</small>
                </div>
                <div class="d-inline-block text-center mx-2">
                    <span class="d-block display-4 fw-bold font-dancing">${segundos}</span>
                    <small class="text-uppercase font-montserrat" style="font-size: 0.8rem;">Seg</small>
                </div>
            `;
        }
    }, 1000);

    // 2. Manejo del Formulario (con Formspree)
    const form = document.getElementById('rsvpForm');
    if (form) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();

            // Configuración del botón
            const btnSubmit = form.querySelector('button[type="submit"]');
            const originalText = btnSubmit.innerHTML;
            btnSubmit.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';
            btnSubmit.disabled = true;

            // Datos del formulario
            const data = new FormData(event.target);

            try {
                // REEMPLAZA "TU_ID_DE_FORMSPREE" CON TU CÓDIGO REAL (ej: xxbjqrla)
                // Regístrate en https://formspree.io/ para obtenerlo gratis
                const response = await fetch("https://formspree.io/f/TU_ID_DE_FORMSPREE", {
                    method: "POST",
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Éxito
                    document.getElementById('formFeedback').classList.remove('d-none');
                    form.reset();
                } else {
                    // Error del servidor
                    alert("Hubo un problema al enviar el formulario. Por favor intenta de nuevo.");
                }
            } catch (error) {
                // Error de red
                alert("Error de conexión. Verifica tu internet.");
            } finally {
                // Restaurar botón
                btnSubmit.innerHTML = originalText;
                btnSubmit.disabled = false;

                // Ocultar mensaje después de 5 segundos
                if (!document.getElementById('formFeedback').classList.contains('d-none')) {
                    setTimeout(() => {
                        document.getElementById('formFeedback').classList.add('d-none');
                    }, 5000);
                }
            }
        });
    }

    // 3. Smooth Scroll para enlaces del navbar (opcional, BS5 ya lo maneja bien con CSS scroll-behavior)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Cerrar menú móvil al hacer click
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (window.getComputedStyle(navbarToggler).display !== 'none' && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });
});