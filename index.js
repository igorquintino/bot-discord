require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const cron = require("node-cron");

// Configurando o bot Discord
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", () => {
    console.log(`✅ Bot ${client.user.tag} está online!`);

    // Carregando o ID do canal das variáveis de ambiente
    const channelId = process.env.DISCORD_CHANNEL_ID_2;
    console.log("📋 ID do Canal:", channelId); // Log do ID do canal

    const channel = client.channels.cache.get(channelId);

    // Verifica se o canal foi encontrado
    if (!channel) {
        console.error("❌ Canal não encontrado. Verifique o ID no arquivo .env ou nas variáveis do Railway.");
        console.log("📋 Listando canais disponíveis nos servidores...");

        // Lista todos os canais disponíveis para depuração
        client.guilds.cache.forEach((guild) => {
            guild.channels.cache.forEach((ch) => {
                console.log(`- Canal: ${ch.name} (ID: ${ch.id}, Tipo: ${ch.type})`);
            });
        });

        return;
    }

    console.log("✅ Canal encontrado:", channel.name);

    // Envio de mensagem a cada 7 minutos
    setInterval(() => {
        console.log("⏰ Tentando enviar mensagem de teste...");
        channel
            .send("📢 **Mensagem de teste automática!** Enviada a cada 7 minutos para manter a conexão ativa.")
            .then(() => console.log("✅ Mensagem enviada com sucesso!"))
            .catch((err) => console.error("❌ Erro ao enviar mensagem:", err));
    }, 420000); // 7 minutos = 420.000 ms
});

// Login do bot
client
    .login(process.env.DISCORD_TOKEN_2)
    .then(() => console.log("✅ Login bem-sucedido! Verifique se o bot está online no Discord."))
    .catch((err) => console.error("❌ Erro ao fazer login no Discord:", err));