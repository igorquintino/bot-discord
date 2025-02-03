require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const cron = require('node-cron');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log(`✅ Bot ${client.user.tag} está online!`);

    const channelId = process.env.DISCORD_CHANNEL_ID_2;
    const channel = client.channels.cache.get(channelId);

    if (!channel) {
        console.error("❌ Canal não encontrado. Verifique o ID no arquivo .env.");
        return;
    }

    // Enviar mensagem sobre algoritmos às 18:51
    cron.schedule('51 18 * * *', () => {
        console.log("⏰ Enviando mensagem sobre algoritmos...");
        channel.send(
            `Você trava quando vê a palavra **algoritmos**?\n\n`
            + `Não entende direito, mas finge que sabe? Isso pode estar te sabotando mais do que imagina.\n`
            + `O mercado quer **programadores que resolvem problemas**, não só quem copia código do Google.\n`
            + `Esse livro, **Entendendo Algoritmos**, te ensina isso do jeito certo: **visual, simples e direto.**\n\n`
            + `📌 **É um livro, não um curso caro.** Aprenda no seu ritmo e sem complicação.\n`
            + `👉 https://amzn.to/4gqgUC9\n`
            + `----------------------------------------------------------------------------------------`
        );
    });

    // Enviar mensagem sobre início na programação às 18:52
    cron.schedule('52 18 * * *', () => {
        console.log("⏰ Enviando mensagem sobre como começar na programação...");
        channel.send(
            `🛑 **Você já se perguntou por onde começar na programação?**\n\n`
            + `Tem tanta linguagem, tanta área, que parece um **labirinto sem saída**?\n`
            + `Esse livro, **O Universo da Programação**, é o mapa que você precisa. Ele apresenta o mundo da programação de forma clara e sem enrolação, explicando o que cada área faz e onde você pode se encaixar.\n`
            + `💡 **Se você está perdido, esse livro é o GPS para sua carreira.** Melhor descobrir o caminho agora do que perder anos batendo cabeça.\n\n`
            + `📌 **É um livro, não um curso caro.** Você pode aprender no seu ritmo e investir em algo que faz sentido.\n`
            + `👉 https://amzn.to/4gqgUC9\n`
            + `----------------------------------------------------------------------------------------`
        );
    });

    // Enviar mensagem de teste a cada 7 minutos
    cron.schedule('*/7 * * * *', () => {
        console.log("⏰ Enviando mensagem de teste a cada 7 minutos...");
        channel.send("🔄 Esta é uma mensagem de teste enviada automaticamente a cada 7 minutos.");
    });

});

client.login(process.env.DISCORD_TOKEN_2);