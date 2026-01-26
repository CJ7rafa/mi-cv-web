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

    // --- 4. CARRUSEL DE PROYECTOS ---
    const track = document.getElementById('track');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('nextBtn');
    const prevButton = document.getElementById('prevBtn');
    const dotsNav = document.getElementById('dotsNav');

    // Crear los puntitos (dots) automáticamente según la cantidad de slides
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        // Click en el punto
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
        dotsNav.appendChild(dot);
    });

    const dots = Array.from(dotsNav.children);
    let currentSlide = 0;

    const updateCarousel = () => {
        // Mover el carrusel
        const amountToMove = -100 * currentSlide;
        track.style.transform = `translateX(${amountToMove}%)`;

        // Actualizar puntos
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    };

    // Botón Siguiente
    nextButton.addEventListener('click', () => {
        if (currentSlide === slides.length - 1) {
            currentSlide = 0; // Vuelve al inicio (Loop)
        } else {
            currentSlide++;
        }
        updateCarousel();
    });

    // Botón Anterior
    prevButton.addEventListener('click', () => {
        if (currentSlide === 0) {
            currentSlide = slides.length - 1; // Va al final
        } else {
            currentSlide--;
        }
        updateCarousel();
    });

    // --- 5. MINI-SLIDER AUTOMÁTICO ---
    const miniSliders = document.querySelectorAll('.mini-slider');

    miniSliders.forEach(slider => {
        const images = slider.querySelectorAll('.slide-img');
        
        // Verificamos que existan imágenes para evitar errores
        if (images.length > 0) {
            let index = 0; 

            setInterval(() => {
                // 1. Ocultar imagen actual
                images[index].classList.remove('active');

                // 2. Calcular siguiente
                index = (index + 1) % images.length;

                // 3. Mostrar siguiente
                images[index].classList.add('active');
            }, 4000); // Cambiado a 4000ms (4 seg) para que sea un poco más dinámico
        }
    });
});