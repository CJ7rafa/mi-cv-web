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

    // --- 1.5 SCROLL BOTÓN PROYECTOS ---
    const btnVerProyectos = document.getElementById('btn-ver-proyectos');
    const seccionDestacada = document.getElementById('proyecto-destacado');
    if (btnVerProyectos && seccionDestacada) {
        btnVerProyectos.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que la URL cambie (no se añade el # hash)
            seccionDestacada.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
        });
    }

    // --- 2. SCROLL REVEAL (Animación Avanzada) ---
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Solo animar la primera vez
            }
        });
    }, {
        root: null,
        threshold: 0.2, // Se activa cuando el 10% del elemento es visible
        rootMargin: "0px 0px -50px 0px" // Margen extra
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    /* --- LÓGICA DEL FORMULARIO DE CONTACTO (AJAX NETLIFY) --- */

    const contactForm = document.getElementById('contact-form');
    const statusBox = document.getElementById('status-container');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // 1. Evita que la página se recargue

            const myForm = e.target;
            const formData = new FormData(myForm);

            // 2. Mostrar estado de "Cargando"
            statusBox.classList.remove('hidden');
            statusBox.style.display = 'block';
            statusBox.className = 'status-box sending';
            statusBox.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando mensaje...';

            // 3. Enviar datos a Netlify
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
                .then(() => {
                    // 4. ÉXITO
                    statusBox.className = 'status-box success';
                    statusBox.innerHTML = '<i class="fas fa-check-circle"></i> ¡Mensaje enviado con éxito!';
                    myForm.reset(); // Limpia los campos

                    // Opcional: Ocultar el mensaje después de 5 segundos
                    setTimeout(() => {
                        statusBox.style.display = 'none';
                    }, 5000);
                })
                .catch((error) => {
                    // 5. ERROR
                    console.error(error);
                    statusBox.className = 'status-box error';
                    statusBox.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Hubo un error. Intenta por WhatsApp.';
                });
        });
    }

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
            }, 3000);
        }
    });

    // --- Paginación de Proyectos ---
    const grid = document.querySelector('.proyectos-grid');
    const cards = grid ? Array.from(grid.querySelectorAll('.project-card')) : [];
    const btnVerMas = document.getElementById('btn-ver-mas');
    const btnVerMenos = document.getElementById('btn-ver-menos');

    if (grid && cards.length > 0 && btnVerMas && btnVerMenos) {
        function getItemsPerRow() {
            if (cards.length === 0) return 1;
            // Quitamos el display none para poder calcular el offset
            cards.forEach(c => c.style.display = 'flex');

            const firstTop = cards[0].offsetTop;
            let count = 0;
            for (let card of cards) {
                if (Math.abs(card.offsetTop - firstTop) < 5) {
                    count++;
                } else {
                    break;
                }
            }
            // Si el layout es de 1 sola columna (móviles), queremos mostrar 2 proyectos por clic
            return count === 1 ? 2 : (count > 0 ? count : 3);
        }

        let itemsPerRow = getItemsPerRow();
        let visibleRows = 1;

        function updateProjectView() {
            const visibleCount = visibleRows * itemsPerRow;

            cards.forEach((card, index) => {
                if (index < visibleCount) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });

            if (visibleCount < cards.length) {
                btnVerMas.disabled = false;
                btnVerMas.style.opacity = '1';
                btnVerMas.style.cursor = 'pointer';
            } else {
                btnVerMas.disabled = true;
                btnVerMas.style.opacity = '0.5';
                btnVerMas.style.cursor = 'not-allowed';
            }

            if (visibleRows > 1) {
                btnVerMenos.disabled = false;
                btnVerMenos.style.opacity = '1';
                btnVerMenos.style.cursor = 'pointer';
            } else {
                btnVerMenos.disabled = true;
                btnVerMenos.style.opacity = '0.5';
                btnVerMenos.style.cursor = 'not-allowed';
            }
        }

        updateProjectView();

        btnVerMas.addEventListener('click', () => {
            if (!btnVerMas.disabled) {
                visibleRows++;
                updateProjectView();
            }
        });

        btnVerMenos.addEventListener('click', () => {
            if (!btnVerMenos.disabled && visibleRows > 1) {
                visibleRows--;
                updateProjectView();
                grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const newItemsPerRow = getItemsPerRow();
                if (newItemsPerRow !== itemsPerRow) {
                    itemsPerRow = newItemsPerRow;
                    visibleRows = 1;
                    updateProjectView();
                }
            }, 150);
        });
    }
});


// Función global para expandir/contraer las descripciones de proyectos
function toggleDesc(btn) {
    const container = btn.parentElement;
    const longDesc = container.querySelector('.long-desc');

    // Revisar el estilo computado porque la clase de CSS inicialmente lo oculta
    const isHidden = window.getComputedStyle(longDesc).display === 'none';

    if (isHidden) {
        longDesc.style.display = 'block';
        btn.setAttribute('data-i18n', 'btn_ver_menos_text');
    } else {
        longDesc.style.display = 'none';
        btn.setAttribute('data-i18n', 'btn_leer_mas');
    }

    // Actualizar el texto dinámicamente según el idioma actual
    const currentLang = localStorage.getItem('lang') || 'es';
    const key = btn.getAttribute('data-i18n');
    if (typeof dictionary !== 'undefined' && dictionary[currentLang] && dictionary[currentLang][key]) {
        btn.innerHTML = dictionary[currentLang][key];
    }
}

// --- GRÁFICO DE ARAÑA (APTITUDES) ---
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('aptitudesChart');
    if (ctx) {
        const style = getComputedStyle(document.body);
        const accentColor = style.getPropertyValue('--accent').trim() || '#00ffcc';

        const initChart = () => {
            const isDark = document.body.classList.contains('dark-mode');
            const textColor = isDark ? '#e2e8f0' : '#333333';
            const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

            // Reemplazo para la opacidad hex
            let bgOpacityColor = accentColor;
            if (bgOpacityColor.startsWith('#')) {
                bgOpacityColor = bgOpacityColor + '33'; // 20% alpha
            } else {
                bgOpacityColor = 'rgba(0, 255, 204, 0.2)';
            }

            return new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: [
                        ['Aprendizaje', 'Autónomo'],
                        ['Atención', 'al Detalle'],
                        ['Estructuras', 'de Datos'],
                        'POO',
                        ['Patrón', 'MVC'],
                        ['APIs', 'REST']
                    ],
                    datasets: [{
                        label: 'Nivel de Competencia',
                        data: [100, 100, 80, 80, 80, 60],
                        backgroundColor: bgOpacityColor,
                        borderColor: accentColor,
                        pointBackgroundColor: accentColor,
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: accentColor,
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    layout: {
                        padding: window.innerWidth <= 768 ? 15 : 20
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: { enabled: false }
                    },
                    scales: {
                        r: {
                            min: 0,
                            max: 100,
                            angleLines: { color: gridColor },
                            grid: { color: gridColor },
                            pointLabels: {
                                color: textColor,
                                font: {
                                    size: window.innerWidth <= 768 ? 13 : 16,
                                    family: "'Inter', sans-serif",
                                    weight: '600'
                                }
                            },
                            ticks: {
                                display: false,
                                stepSize: 12.5
                            }
                        }
                    }
                }
            });
        };

        let aptitudesChart = initChart();

        // Actualizar gráfico al cambiar de tema
        const observer = new MutationObserver(() => {
            if (aptitudesChart) aptitudesChart.destroy();
            aptitudesChart = initChart();
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    }
});

// --- MENÚ LATERAL (HAMBURGUESA) ---
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const closePanel = document.getElementById('close-panel');
    const sidePanel = document.getElementById('side-panel');
    const panelOverlay = document.getElementById('panel-overlay');
    const panelLinks = document.querySelectorAll('.panel-link');

    function openMenu() {
        if (sidePanel && panelOverlay) {
            sidePanel.classList.add('active');
            panelOverlay.classList.add('active');
        }
    }

    function closeMenu() {
        if (sidePanel && panelOverlay) {
            sidePanel.classList.remove('active');
            panelOverlay.classList.remove('active');
        }
    }

    if (menuToggle) menuToggle.addEventListener('click', openMenu);
    if (closePanel) closePanel.addEventListener('click', closeMenu);
    if (panelOverlay) panelOverlay.addEventListener('click', closeMenu);

    panelLinks.forEach(link => {
        // Solo aplicar a enlaces de navegación reales (ignora tema/idioma que comparten la clase CSS)
        if (link.hasAttribute('href')) {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Evita que cambie la URL
                closeMenu(); // Cierra el panel lateral

                // Realiza el scroll suave hacia la sección destino
                const targetId = link.getAttribute('href');
                if (targetId && targetId.startsWith('#')) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        }
    });
});
// --- CUSTOM LANGUAGE DROPDOWN ---
document.addEventListener('DOMContentLoaded', () => {
    const customBtn = document.getElementById('lang-custom-btn');
    const customMenu = document.getElementById('lang-custom-menu');
    const caret = document.getElementById('lang-caret');
    const options = document.querySelectorAll('.custom-lang-option');
    const nativeSelect = document.getElementById('lang-selector');
    const selectedText = document.getElementById('lang-selected-text');

    if (customBtn && customMenu) {
        customBtn.addEventListener('click', () => {
            customMenu.classList.toggle('active');
            caret.style.transform = customMenu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                const val = option.getAttribute('data-value');
                const text = option.textContent;
                
                // Update text
                selectedText.textContent = text;
                
                // Update native select and trigger change
                if (nativeSelect) {
                    nativeSelect.value = val;
                    nativeSelect.dispatchEvent(new Event('change'));
                }
                
                // Close menu
                customMenu.classList.remove('active');
                caret.style.transform = 'rotate(0deg)';
            });
        });

        // Close if click outside
        document.addEventListener('click', (e) => {
            if (!document.getElementById('lang-custom-container').contains(e.target)) {
                customMenu.classList.remove('active');
                if(caret) caret.style.transform = 'rotate(0deg)';
            }
        });
    }
});