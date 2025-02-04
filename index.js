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

    // Envio de mensagem de teste a cada 7 minutos
    setInterval(() => {
        console.log("⏰ Tentando enviar mensagem de teste...");
        channel
            .send("📢 **Mensagem de teste automática!** Enviada a cada 7 minutos para manter a conexão ativa.")
            .then(() => console.log("✅ Mensagem de teste enviada com sucesso!"))
            .catch((err) => console.error("❌ Erro ao enviar mensagem de teste:", err));
    }, 420000); // 7 minutos = 420.000 ms

    // Mensagem sobre algoritmos às 22:03
    cron.schedule("10 22 * * *", () => {
        console.log("⏰ Enviando mensagem sobre algoritmos...");
        channel
            .send(
                `🛑 **Você realmente entende o que é necessário para desenvolver software de verdade?**\n\n`
                + `Chega de exemplos simplórios que não se aplicam ao mundo real. Você já sentiu que falta algo no que aprende sobre programação? Que os tutoriais deixam você na mão quando o assunto é **projetos reais**?\n\n`
                + `📚 **Este é um LIVRO, não um curso caro.**\n`
                + `Em **"Desenvolvimento Real de Software"**, você vai aprender os fundamentos de Java aplicados a **projetos reais**, com exemplos que refletem os desafios do mercado.\n\n`
                + `💡 **Chega de insegurança.** Este livro te prepara para resolver problemas reais e ser valorizado como um desenvolvedor completo.\n\n`
                + `📌 **Aprenda no seu ritmo, sem pressa e sem enrolação.**\n`
                + `👉 [Garanta o seu agora na Amazon!](https://amzn.to/4gqgUC9)\n`
                + `----------------------------------------------------------------------------------------`
            )
            .then(() => console.log("✅ Mensagem sobre algoritmos enviada com sucesso!"))
            .catch((err) => console.error("❌ Erro ao enviar mensagem sobre algoritmos:", err));
    });

    // Mensagem sobre início na programação às 22:01
    cron.schedule("11 22 * * *", () => {
        console.log("⏰ Enviando mensagem sobre como começar na programação...");
        channel
            .send(
                `🛑 **Você já se perguntou por onde começar na programação?**\n\n`
                + `Tem tanta linguagem, tanta área, que parece um **labirinto sem saída**?\n`
                + `Esse livro, **O Universo da Programação**, é o mapa que você precisa. Ele apresenta o mundo da programação de forma clara e sem enrolação, explicando o que cada área faz e onde você pode se encaixar.\n`
                + `💡 **Se você está perdido, esse livro é o GPS para sua carreira.** Melhor descobrir o caminho agora do que perder anos batendo cabeça.\n\n`
                + `📌 **É um livro, não um curso caro.** Você pode aprender no seu ritmo e investir em algo que faz sentido.\n`
                + `👉 https://amzn.to/4gqgUC9\n`
                + `----------------------------------------------------------------------------------------`
            )
            .then(() => console.log("✅ Mensagem sobre como começar na programação enviada com sucesso!"))
            .catch((err) => console.error("❌ Erro ao enviar mensagem sobre como começar na programação:", err));
    });
});

// Login do bot
client
    .login(process.env.DISCORD_TOKEN_2)
    .then(() => console.log("✅ Login bem-sucedido! Verifique se o bot está online no Discord."))
    .catch((err) => console.error("❌ Erro ao fazer login no Discord:", err));