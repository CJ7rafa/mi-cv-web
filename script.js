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

    // --- LÓGICA COMPLETA DEL CARRUSEL (Botones + Puntos) ---

    const track = document.getElementById('track');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('nextBtn');
    const prevButton = document.getElementById('prevBtn');
    const dotsNav = document.querySelector('.carousel-indicators');
    const dots = Array.from(dotsNav.children);

    // Ancho de cada tarjeta (incluyendo márgenes si los hay)
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Acomodar las diapositivas una al lado de otra (si no usas Flexbox en CSS)
    // slides.forEach((slide, index) => {
    //    slide.style.left = slideWidth * index + 'px';
    // });

    // Variable para saber en qué slide estamos
    let currentIndex = 0;

    // Función Maestra: Mueve el carrusel y actualiza los puntos
    const moveToSlide = (targetIndex) => {
        // 1. Mover el carrusel usando transform (CSS)
        const amountToMove = slideWidth * targetIndex;
        track.style.transform = 'translateX(-' + amountToMove + 'px)';
        
        // 2. Actualizar la clase .active en los puntos
        dots.forEach(dot => dot.classList.remove('active'));
        dots[targetIndex].classList.add('active');

        // 3. Actualizar el índice actual
        currentIndex = targetIndex;
    }

    // --- EVENTOS DE LOS BOTONES (FLECHAS) ---

    nextButton.addEventListener('click', () => {
        // Si estamos en el último, volver al primero (Ciclo infinito opcional)
        // O detenerse. Aquí haremos que se detenga en el último.
        if (currentIndex < slides.length - 1) {
            moveToSlide(currentIndex + 1);
        } else {
            // Opcional: Volver al principio
            moveToSlide(0); 
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            moveToSlide(currentIndex - 1);
        } else {
            // Opcional: Ir al final
            moveToSlide(slides.length - 1);
        }
    });

    // --- EVENTOS DE LOS PUNTOS (INDICADORES) ---

    dotsNav.addEventListener('click', e => {
        // Qué punto fue clickeado
        const targetDot = e.target.closest('button');

        if (!targetDot) return; // Si no clickeaste un punto, salir

        const targetIndex = dots.findIndex(dot => dot === targetDot);
        
        moveToSlide(targetIndex);
    });
});