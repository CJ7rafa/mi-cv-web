document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MODO OSCURO ---
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeBtn.querySelector('i');

    // Revisar preferencia guardada
    if (localStorage.getItem('theme') === 'dark') {
        enableDarkMode();
    }

    themeBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }

    function disableDarkMode() {
        body.classList.remove('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }

    // --- 2. SCROLL REVEAL (Animación) ---
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Distancia desde abajo para activar

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Ejecutar una vez al inicio para mostrar lo que ya se ve
    revealOnScroll();

    // --- 3. FORMULARIO CON EFECTO DE CARGA (Netlify) ---
    const form = document.getElementById('contact-form');
    const statusBox = document.getElementById('status-container');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // UI Loading
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Enviando... <i class="fas fa-spinner fa-spin"></i>';
        statusBox.classList.add('hidden');

        const formData = new FormData(form);

        try {
            await fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            });

            // Éxito
            statusBox.className = 'status-box success';
            statusBox.innerHTML = '<i class="fas fa-check-circle"></i> ¡Mensaje enviado correctamente!';
            statusBox.classList.remove('hidden');
            form.reset();

        } catch (error) {
            // Error
            statusBox.className = 'status-box error';
            statusBox.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error al enviar. Intenta de nuevo.';
            statusBox.classList.remove('hidden');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });
});