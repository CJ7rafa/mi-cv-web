document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('discord-form');
    const statusContainer = document.getElementById('status-container');
    const btnSubmit = document.getElementById('btn-submit');

    // --- CONFIGURACIÓN DISCORD ---
    // Coloca tu URL de Webhook aquí
    const DISCORD_WEBHOOK_URL = "https://discordapp.com/api/webhooks/1463706103740108813/_pASXZ5Ul3xb37fFx60iadarP35bgFYWzw-A1dcZGmojJlAKG7cyAiLyMOvMMKgh01tZ";

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // 1. Obtener datos
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // 2. UI Estado de carga
        showStatus('loading', '<i class="fas fa-spinner fa-spin"></i> Enviando mensaje...');
        btnSubmit.disabled = true;

        // 3. Preparar Payload
        const payload = {
            content: "🔔 **Nuevo Contacto desde la Web (JS)**",
            embeds: [{
                title: `Mensaje de: ${nombre}`,
                color: 3447003, // Color azul
                fields: [
                    { name: "Correo", value: email, inline: true },
                    { name: "Mensaje", value: mensaje }
                ],
                footer: { text: `Enviado el ${new Date().toLocaleString()}` }
            }]
        };

        try {
            // 4. Enviar a Discord
            const response = await fetch(DISCORD_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                showStatus('success', '<i class="fas fa-check-circle"></i> ¡Mensaje enviado con éxito! Te contactaré pronto.');
                contactForm.reset();
            } else {
                throw new Error('Error en el servidor de Discord');
            }
        } catch (error) {
            console.error('Error:', error);
            showStatus('error', '<i class="fas fa-exclamation-circle"></i> No se pudo enviar el mensaje. Inténtalo más tarde.');
        } finally {
            btnSubmit.disabled = false;
        }
    });

    /**
     * Muestra un mensaje de estado
     * @param {'success'|'error'|'loading'} type 
     * @param {string} html 
     */
    function showStatus(type, html) {
        statusContainer.className = `status-box ${type}`;
        statusContainer.innerHTML = html;
        statusContainer.classList.remove('hidden');
    }
});