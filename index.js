require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const cron = require('node-cron');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
    console.log(`✅ Bot ${client.user.tag} está online!`);

    const channelId = process.env.DISCORD_CHANNEL_ID;
    const channel = await client.channels.fetch(channelId).catch(() => null);

    if (!channel) {
        console.error("❌ Canal não encontrado. Verifique o ID no arquivo .env.");
        return;
    }

    // Enviar mensagem de teste a cada 7 minutos
    cron.schedule('*/7 * * * *', () => {
        console.log("⏰ Enviando mensagem de teste a cada 7 minutos...");
        channel.send("🔄 Esta é uma mensagem de teste enviada automaticamente a cada 7 minutos.");
    });
});

client.login(process.env.DISCORD_TOKEN;)
