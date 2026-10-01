const dictionary = {
    es: {
        // --- Navegación y Generales ---
        "nav_sobre_mi": "Sobre Mí",
        "nav_habilidades": "Habilidades",
        "nav_proyecto_destacado": "Proyecto Destacado",
        "nav_proyectos": "Proyectos",
        "nav_experiencia": "Experiencia",
        "nav_educacion": "Educación",
        "nav_contacto": "Contacto",
        "nav_descargar_cv": "Descargar CV <i class=\"fas fa-arrow-down\"></i>",
        "nav_modo_oscuro": "Modo Oscuro",

        // --- Hero ---
        "hero_greeting": "Hola, mi nombre es",
        "hero_name": "Rafael Olvera.",
        "hero_subtitle": "Construyo cosas para la web.",
        "hero_desc": "Estudiante de Ingeniería en Software con un fuerte enfoque en el desarrollo backend y el aseguramiento de calidad. Combino una gran atención al detalle con la capacidad de resolver problemas complejos, buscando aportar valor mediante soluciones precisas y eficientes.",
        "hero_btn": "Ver mis proyectos",

        // --- Sobre Mí ---
        "sobre_mi_title": "Sobre Mí",
        "sobre_mi_location": "<i class=\"fas fa-map-marker-alt\"></i> Guayaquil, Ecuador",
        "sobre_mi_p1": "Mi pasión por la tecnología comenzó con el interés en la creación de videojuegos y rápidamente se expandió hacia una curiosidad por comprender cómo funciona todo el ecosistema tecnológico, desde la electrónica y el hardware hasta la lógica pura del software.",
        "sobre_mi_p2": "He decidido enfocar mi carrera en el desarrollo backend, especializándome en el manejo avanzado de bases de datos, lenguaje Java y el intercambio eficiente de información. Me considero una persona meticulosa y detallista; si identifico algo que se puede mejorar, analizo el problema hasta encontrar la solución más óptima posible.",
        "sobre_mi_p3": "Actualmente busco integrarme al ámbito profesional, ya sea en roles de desarrollo backend, control de calidad (testing de validación o rendimiento) o mediante una pasantía. Mi objetivo es aportar mi capacidad analítica a un entorno laboral dinámico, sin dejar de lado mi formación continua en software y, a futuro, en ingeniería eléctrica.",

        // --- Habilidades ---
        "hab_title": "<i class=\"fas fa-tools\"></i> Habilidades Técnicas & Entornos",
        "hab_backend": "Backend",
        "hab_data": "Gestión de Datos",
        "hab_frontend": "Frontend",
        "hab_devops": "DevOps & Herramientas",
        "hab_hardware": "Hardware & Electrónica",
        "hab_learning": "Actualmente explorando & aprendiendo",

        // --- Proyecto Destacado ---
        "proj_dest_title": "Proyecto Personal Destacado",
        "proj_dest_name": "Pvox - Red Social",
        "proj_dest_desc_p1": "Plataforma de red social orientada a la libre expresión y la interacción asíncrona en tiempo real. Desarrollada con arquitectura modular MVC en PHP puro, API REST y procesamiento distribuido en el cliente.",
        "proj_dest_desc_p2": "Para superar limitaciones de servidores compartidos, emplea <strong>Edge Offloading</strong>: las imágenes se optimizan a WebP usando Canvas API y los videos se transcodifican localmente a 720p mediante un Web Worker de FFmpeg.",
        "proj_dest_desc_p3": "Cuenta con un sistema de <strong>Server-Sent Events (SSE)</strong> para monitoreo, autenticación segura con contraseñas encriptadas (BCRYPT), consultas SQL blindadas (PDO), jerarquía de roles (RBAC) y un motor de moderación matemático que oculta publicaciones conflictivas.",
        "proj_dest_desc_p4": "Además, dispone de <strong>Pvox Studio</strong>, un entorno dedicado sin distracciones para la creación de contenido multimedia, y soporta gestión de modo mantenimiento con códigos de acceso dinámicos (Bypass).",
        "btn_visitar_web": "Visitar web",
        "btn_ver_doc": "Ver Documentación",
        "btn_ver_codigo": "Ver Código",

        // --- Proyectos Secundarios ---
        "proj_title": "Otros Proyectos Personales",

        "proj_tu_barberia_short": "Sistema web multilocal para la gestión y reserva de citas en barberías desarrollado en PHP nativo, con bloqueo dinámico de horarios y autogestión mediante tokens sin registro.",
        "proj_tu_barberia_long": "Incluye administración por sucursal, cálculo dinámico de duración según servicios seleccionados y reprogramación masiva en cascada. El módulo administrativo integra recorte de imágenes para catálogo y gestión de calendario. Maneja estados de citas en tiempo real y arquitectura orientada a objetos en PHP 8.3 con almacenamiento relacional en MariaDB. Desplegado en Alwaysdata con diseño responsivo e integración de librerías como Cropper.js y Flatpickr.",

        "proj_iosolver_short": "Aplicación de escritorio desarrollada en JavaFX y tecnologías web para la resolución, simulación y análisis paso a paso de problemas de Investigación de Operaciones y Optimización Matemática.",
        "proj_iosolver_long": "Implementa una arquitectura híbrida desacoplada mediante un puente bidireccional entre Java y JavaScript. Integra más de 10 módulos algorítmicos (Programación Lineal, Simplex, Grafos, Colas e Inventarios) junto con un motor estocástico para generación aleatoria de ejercicios. Incorpora visualización interactiva de redes con vis.network, serialización de datos en formato JSON mediante Jackson y compilación automática de bitácoras académicas a reportes PDF vectoriales.",

        "proj_cv_web_short": "Sitio web desarrollado desde cero con <strong>HTML5, CSS y JavaScript</strong> puro. Se enfoca en el rendimiento y la estética moderna.",
        "proj_cv_web_long": "Incluye integración de modo oscuro nativo, animaciones dinámicas al hacer scroll y un formulario de contacto completamente funcional sin dependencias pesadas.",

        "proj_despacho_short": "Sistema Integral de Gestión Académica (Java). Permite la administración de entidades mediante la implementación manual de <strong>listas, pilas y colas</strong>, optimizando la gestión de memoria.",
        "proj_despacho_long": "Incluye módulos de búsqueda optimizada, algoritmos recursivos y una interfaz gráfica desarrollada en <strong>Swing (JFrames)</strong> con validación estricta de datos para garantizar la integridad de la información.",

        "proj_saldook_short": "SaldoOk es una aplicación de escritorio para llevar el control de finanzas personales y comerciales. Cuenta con módulos integrados para gestionar Compras, Gastos, Flujo de Caja y un Estado de Resultados automatizado.",

        "proj_pvox_mobile_short": "Versión mobile de la red social Pvox.",
        "proj_pvox_mobile_img": "PRÓXIMAMENTE",

        "btn_leer_mas": "Leer más",
        "btn_ver_menos_text": "Ver menos",
        "btn_ver_menos": "<i class=\"fas fa-chevron-up\"></i> Menos",
        "btn_ver_mas_proyectos": "Ver más proyectos <i class=\"fas fa-chevron-down\"></i>",
        "btn_descargar": "Descargar",

        // --- Experiencia ---
        "exp_title": "<i class=\"fas fa-briefcase\"></i>Experiencia",
        "exp_camei_role": "Pasante - Auxiliar Administrativo",
        "exp_camei_date": "Dic 2023",
        "exp_camei_p1": "Gestioné la digitalización y organización de documentación operativa garantizando la precisión del archivo interno.",
        "exp_camei_p2": "Ejecuté el control y registro de inventarios para la optimización y verificación de bienes de la empresa.",
        "exp_mercado_role": "Asistente de Local / Atención al Cliente",
        "exp_mercado_date": "Ene 2021 - Presente",
        "exp_mercado_p1": "Asesoré a los clientes en la selección de productos garantizando una experiencia de compra eficiente.",
        "exp_mercado_p2": "Manejé inventario y reabastecimiento en punto de venta asegurando disponibilidad continua.",

        // --- Educación ---
        "edu_title": "<i class=\"fas fa-graduation-cap\"></i> Educación",
        "edu_ug_name": "Universidad de Guayaquil",
        "edu_ug_title": "Ingeniería en Software",
        "edu_ug_date": "2024 - Presente",
        "edu_slim_title": "Certificación en Programación de Microcontroladores (82 horas)",
        "edu_slim_date": "Feb 2024",
        "edu_slim_type": "Formación Continua",
        "edu_slim_btn": "Ver Certificado Oficial",
        "edu_28_title": "Bachiller Técnico en Contabilidad",
        "edu_28_date": "Graduado",

        // --- Aptitudes ---
        "apt_title": "<i class=\"fas fa-brain\"></i> Aptitudes Clave",

        // --- Contacto y Footer ---
        "contact_title": "Contactos",
        "contact_subtitle": "<strong>¿Tienes algún proyecto o consulta?</strong><br> Elige tu canal preferido:",
        "btn_email": "<i class=\"fas fa-envelope\"></i> Enviar Correo",
        "footer_copy": "&copy; 2026 Rafael Olvera. Portafolio Personal.",
        "footer_update": "Fecha de actualización: 08/08/2026",
        "footer_aliados": "Aliados Estratégicos:"
    },
    en: {
        // --- Navegación y Generales ---
        "nav_sobre_mi": "About Me",
        "nav_habilidades": "Skills",
        "nav_proyecto_destacado": "Featured Project",
        "nav_proyectos": "Projects",
        "nav_experiencia": "Experience",
        "nav_educacion": "Education",
        "nav_contacto": "Contact",
        "nav_descargar_cv": "Download CV <i class=\"fas fa-arrow-down\"></i>",
        "nav_modo_oscuro": "Dark Mode",

        // --- Hero ---
        "hero_greeting": "Hi, my name is",
        "hero_name": "Rafael Olvera.",
        "hero_subtitle": "I build things for the web.",
        "hero_desc": "Software Engineering student with a strong focus on backend development and quality assurance. I combine great attention to detail with the ability to solve complex problems, seeking to provide value through precise and efficient solutions.",
        "hero_btn": "View my projects",

        // --- Sobre Mí ---
        "sobre_mi_title": "About Me",
        "sobre_mi_location": "<i class=\"fas fa-map-marker-alt\"></i> Guayaquil, Ecuador",
        "sobre_mi_p1": "My passion for technology began with an interest in video game creation and quickly expanded into a curiosity to understand how the entire technological ecosystem works, from electronics and hardware to the pure logic of software.",
        "sobre_mi_p2": "I have decided to focus my career on backend development, specializing in advanced database management, Java programming language, and efficient information exchange. I consider myself a meticulous and detail-oriented person; if I identify something that can be improved, I analyze the problem until I find the most optimal solution possible.",
        "sobre_mi_p3": "I am currently looking to integrate into the professional field, whether in backend development roles, quality control (validation or performance testing), or through an internship. My goal is to contribute my analytical capacity to a dynamic work environment, without neglecting my continuous education in software and, in the future, electrical engineering.",

        // --- Habilidades ---
        "hab_title": "<i class=\"fas fa-tools\"></i> Technical Skills & Environments",
        "hab_backend": "Backend",
        "hab_data": "Data Management",
        "hab_frontend": "Frontend",
        "hab_devops": "DevOps & Tools",
        "hab_hardware": "Hardware & Electronics",
        "hab_learning": "Currently Exploring & Learning",

        // --- Proyecto Destacado ---
        "proj_dest_title": "Featured Personal Project",
        "proj_dest_name": "Pvox - Social Network",
        "proj_dest_desc_p1": "Social network platform oriented towards free expression and real-time asynchronous interaction. Developed with a modular MVC architecture in pure PHP, REST API, and distributed processing on the client.",
        "proj_dest_desc_p2": "To overcome shared server limitations, it uses <strong>Edge Offloading</strong>: images are optimized to WebP using the Canvas API and videos are transcoded locally to 720p through an FFmpeg Web Worker.",
        "proj_dest_desc_p3": "It features a <strong>Server-Sent Events (SSE)</strong> system for monitoring, secure authentication with encrypted passwords (BCRYPT), armored SQL queries (PDO), role hierarchy (RBAC), and a mathematical moderation engine that hides conflicting posts.",
        "proj_dest_desc_p4": "In addition, it has <strong>Pvox Studio</strong>, a dedicated distraction-free environment for multimedia content creation, and supports maintenance mode management with dynamic access codes (Bypass).",
        "btn_visitar_web": "Visit Website",
        "btn_ver_doc": "View Documentation",
        "btn_ver_codigo": "View Code",

        // --- Proyectos Secundarios ---
        "proj_title": "Other Personal Projects",
        "proj_tu_barberia_short": "Multi-location web system for barbershop appointment management and booking developed in native PHP, featuring dynamic schedule blocking and self-management via tokens without registration.",
        "proj_tu_barberia_long": "Includes branch administration, dynamic duration calculation based on selected services, and massive cascading rescheduling. The administrative module integrates image cropping for catalogs and calendar management. It handles real-time appointment states and object-oriented architecture in PHP 8.3 with relational storage in MariaDB. Deployed on Alwaysdata with responsive design and integration of libraries like Cropper.js and Flatpickr.",

        "proj_iosolver_short": "Desktop application developed in JavaFX and web technologies for solving, simulating, and step-by-step analyzing Operations Research and Mathematical Optimization problems.",
        "proj_iosolver_long": "Implements a decoupled hybrid architecture using a bidirectional bridge between Java and JavaScript. Integrates over 10 algorithmic modules (Linear Programming, Simplex, Graphs, Queues, and Inventory) along with a stochastic engine for random exercise generation. Incorporates interactive network visualization with vis.network, JSON data serialization via Jackson, and automatic compilation of academic logs into vector PDF reports.",

        "proj_cv_web_short": "Website developed from scratch using pure <strong>HTML5, CSS, and JavaScript</strong>. Focuses on performance and modern aesthetics.",
        "proj_cv_web_long": "Includes native dark mode integration, dynamic scroll animations, and a fully functional contact form without heavy dependencies.",

        "proj_despacho_short": "Comprehensive Academic Management System (Java). Allows entity administration through the manual implementation of <strong>lists, stacks, and queues</strong>, optimizing memory management.",
        "proj_despacho_long": "Includes optimized search modules, recursive algorithms, and a graphical interface developed in <strong>Swing (JFrames)</strong> with strict data validation to ensure information integrity.",

        "proj_saldook_short": "SaldoOk is a desktop application for tracking personal and business finances. It features integrated modules for managing purchases, expenses, and cash flow, as well as an automated income statement.",

        "proj_pvox_mobile_short": "Mobile version of the Pvox social network.",
        "proj_pvox_mobile_img": "COMING SOON",

        "btn_leer_mas": "Read more",
        "btn_ver_menos_text": "Read less",
        "btn_ver_menos": "<i class=\"fas fa-chevron-up\"></i> Show less",
        "btn_ver_mas_proyectos": "View more projects <i class=\"fas fa-chevron-down\"></i>",
        "btn_descargar": "Download",

        // --- Experiencia ---
        "exp_title": "<i class=\"fas fa-briefcase\"></i>Experience",
        "exp_camei_role": "Intern - Administrative Assistant",
        "exp_camei_date": "Dec 2023",
        "exp_camei_p1": "Managed the digitization and organization of operational documentation, ensuring the accuracy of the internal archive.",
        "exp_camei_p2": "Executed inventory control and registration for the optimization and verification of company assets.",
        "exp_mercado_role": "Store Assistant / Customer Service",
        "exp_mercado_date": "Jan 2021 - Present",
        "exp_mercado_p1": "Advised customers on product selection, guaranteeing an efficient shopping experience.",
        "exp_mercado_p2": "Managed inventory and restocking at the point of sale, ensuring continuous availability.",

        // --- Educación ---
        "edu_title": "<i class=\"fas fa-graduation-cap\"></i> Education",
        "edu_ug_name": "University of Guayaquil",
        "edu_ug_title": "Software Engineering",
        "edu_ug_date": "2024 - Present",
        "edu_slim_title": "Certification in Microcontroller Programming (82 hours)",
        "edu_slim_date": "Feb 2024",
        "edu_slim_type": "Continuous Education",
        "edu_slim_btn": "View Official Certificate",
        "edu_28_title": "Technical Baccalaureate in Accounting",
        "edu_28_date": "Graduated",

        // --- Aptitudes y Disponibilidad ---
        "apt_title": "<i class=\"fas fa-brain\"></i> Key Aptitudes",

        // --- Contacto y Footer ---
        "contact_title": "Contact",
        "contact_subtitle": "<strong>Have a project or inquiry?</strong><br> Choose your preferred channel:",
        "btn_email": "<i class=\"fas fa-envelope\"></i> Send Email",
        "footer_copy": "&copy; 2026 Rafael Olvera. Personal Portfolio.",
        "footer_update": "Last updated: 08/08/2026",
        "footer_aliados": "Strategic Allies:"
    }
};

function changeLanguage(lang) {
    // 1. Guardar preferencia en localStorage
    localStorage.setItem('lang', lang);

    // 2. Cambiar atributo lang del HTML
    document.documentElement.lang = lang;

    // 3. Buscar todos los elementos con data-i18n y reemplazar su texto
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dictionary[lang] && dictionary[lang][key]) {
            el.innerHTML = dictionary[lang][key];
        }
    });

    // 4. Actualizar el texto del botón custom del idioma (si existe)
    const langSelectedText = document.getElementById('lang-selected-text');
    if (langSelectedText) {
        if (lang === 'es') {
            langSelectedText.textContent = 'Español (es)';
        } else if (lang === 'en') {
            langSelectedText.textContent = 'English (en)';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Buscar idioma preferido o por defecto 'es'
    const savedLang = localStorage.getItem('lang') || 'es';
    changeLanguage(savedLang);

    // Opcional: Si mantuviste el select id="lang-selector", actualizar su valor al cargar
    const langSelector = document.getElementById('lang-selector');
    if (langSelector) {
        langSelector.value = savedLang;
        langSelector.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }
});
