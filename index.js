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

    

    // Mensagem sobre algoritmos às 22:03 (fuso horário Brasil)
    cron.schedule(
        "16 12 * * *",
        () => {
            console.log("⏰ Enviando mensagem sobre algoritmos...");
            channel
                .send(
                    `🛑 **Você já tentou aprender Java, mas os exemplos parecem não conectar com o mundo real?**  

Chega de sentir que está decorando código sem entender o porquê. Se você já se frustrou com tutoriais que deixam lacunas no aprendizado, está na hora de mudar isso.  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"Use a Cabeça Java"**, você vai aprender Java de um jeito interativo, prático e envolvente, com exemplos que conectam o conhecimento aos desafios do mercado real.  

💡 **Deixe a insegurança de lado.** Este livro te ensina Java do jeito que o mercado valoriza: claro, prático e eficiente.  

📌 **Aprenda no seu ritmo, de forma divertida e direta.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/411wyzl)  

**Invista em você e avance na sua carreira como desenvolvedor Java.** + `----------------------------------------------------------------------------------------`
                )
                .then(() => console.log("✅ Mensagem sobre algoritmos enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem sobre algoritmos:", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );

    // Mensagem sobre início na programação às 22:01 (fuso horário Brasil)
    cron.schedule(
        "17 19 * * *",
        () => {
            console.log("⏰ Enviando mensagem sobre como começar na programação...");
            channel
                .send(
                    `🛑 **Você já tentou aprender C#, mas sente que falta algo nos tutoriais?**  

Chega de aprender de forma rasa e ficar perdido nos desafios reais. Se você quer dominar C# e .NET Core de verdade, precisa de uma abordagem clara e prática.  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"Use a Cabeça C#"**, você vai aprender C# com exemplos interativos, práticos e que refletem problemas do mundo real, enquanto se diverte no processo.  

💡 **Pare de se frustrar com materiais confusos.** Este livro foi feito para quem quer realmente aprender e aplicar C# como um profissional.  

📌 **Aprenda no seu ritmo, com explicações claras e envolventes.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/42HCnmR)  

**Avance no seu aprendizado e destaque-se no mercado com C#!** + `----------------------------------------------------------------------------------------`
                )
                .then(() => console.log("✅ Mensagem sobre como começar na programação enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem sobre como começar na programação:", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );
});

// Login do bot
client
    .login(process.env.DISCORD_TOKEN_2)
    .then(() => console.log("✅ Login bem-sucedido! Verifique se o bot está online no Discord."))
    .catch((err) => console.error("❌ Erro ao fazer login no Discord:", err));