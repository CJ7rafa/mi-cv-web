document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('discord-form'); // Asegúrate que el ID coincida
    const statusContainer = document.getElementById('status-container');
    const btnSubmit = document.getElementById('btn-submit');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // 1. UI Estado de carga
        showStatus('loading', '<i class="fas fa-spinner fa-spin"></i> Enviando correo...');
        btnSubmit.disabled = true;

        // 2. Preparar Payload para Netlify (FormData)
        // Netlify requiere que los datos viajen como url-encoded
        const formData = new FormData(contactForm);
        
        try {
            // 3. Enviar a Netlify (Mismo endpoint '/')
            const response = await fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                // Convertimos FormData a string URL-encoded
                body: new URLSearchParams(formData).toString()
            });

            if (response.ok) {
                showStatus('success', '<i class="fas fa-check-circle"></i> ¡Correo enviado!');
                contactForm.reset();
            } else {
                throw new Error('Error en la pasarela de Netlify');
            }
        } catch (error) {
            console.error('Error:', error);
            showStatus('error', '<i class="fas fa-exclamation-circle"></i> Error al enviar.');
        } finally {
            btnSubmit.disabled = false;
        }
    });

    function showStatus(type, html) {
        // (Tu función original se mantiene igual)
        statusContainer.className = `status-box ${type}`;
        statusContainer.innerHTML = html;
        statusContainer.classList.remove('hidden');
    }
});