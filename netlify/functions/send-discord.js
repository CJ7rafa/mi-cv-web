// netlify/functions/send-discord.js

exports.handler = async (event, context) => {
    // Solo permitimos método POST
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        // Obtenemos los datos del formulario
        const { nombre, mensaje } = JSON.parse(event.body);

        // Obtenemos la URL segura desde las variables de entorno de Netlify
        const discordUrl = process.env.DISCORD_WEBHOOK_URL;

        if (!discordUrl) {
            return { statusCode: 500, body: "Error: Webhook no configurado." };
        }

        // Preparamos el payload para Discord
        const payload = {
            username: "CV Contact Bot",
            content: `**Nuevo Contacto desde la Web**\n👤 **Nombre:** ${nombre}\n✉️ **Mensaje:** ${mensaje}`
        };

        // Enviamos a Discord usando fetch nativo (Node 18+)
        const response = await fetch(discordUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`Discord API error: ${response.statusText}`);
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Enviado con éxito" })
        };

    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error interno del servidor" })
        };
    }
};