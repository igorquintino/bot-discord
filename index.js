require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const cron = require("node-cron");

// Configurando o bot Discord
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", () => {
    console.log(`✅ Bot ${client.user.tag} está online!`);

    // Carregando o ID do canal das variáveis de ambiente
    const channelId = process.env.DISCORD_CHANNEL_ID_2;
    console.log("📋 ID do Canal:", channelId);

    const channel = client.channels.cache.get(channelId);

    // Verifica se o canal foi encontrado
    if (!channel) {
        console.error("❌ Canal não encontrado. Verifique o ID no arquivo .env ou nas variáveis do Railway.");
        console.log("📋 Listando canais disponíveis nos servidores...");
        client.guilds.cache.forEach((guild) => {
            guild.channels.cache.forEach((ch) => {
                console.log(`- Canal: ${ch.name} (ID: ${ch.id}, Tipo: ${ch.type})`);
            });
        });
        return;
    }

    console.log("✅ Canal encontrado:", channel.name);


    cron.schedule(
        "15 10 * * *",
        () => {
            console.log("⏰ Enviando mensagem sobre Java...");
            channel.send(
                    `🛑 **Você sabe o motivo pelo qual faz o que faz?**  

Na programação, na liderança ou na vida, entender o "porquê" por trás de suas ações é o que separa os bons dos extraordinários. Mas quantas vezes você realmente se perguntou qual é o seu propósito?  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"Comece pelo Porquê"**, Simon Sinek revela como grandes líderes e profissionais de sucesso encontram motivação e inspiram os outros começando com um propósito claro.  

💡 **Descubra como alinhar suas ações ao que realmente importa.** Seja para liderar equipes ou definir seus objetivos na programação, este livro vai mudar sua visão sobre liderança e propósito.  

📌 **Aprenda a inspirar, motivar e alcançar mais.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/42QrX4e)  

**Transforme sua carreira e vida com clareza e propósito. Comece hoje!**`)
                .then(() => console.log("✅ Mensagem sobre Java enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem sobre Java:", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );



    // Mensagem sobre Java às 12:16 (fuso horário Brasil)
    cron.schedule(
        "16 12 * * *",
        () => {
            console.log("⏰ Enviando mensagem sobre Java...");
            channel.send(
                    `🛑 **Você acha que precisa de uma faculdade para se tornar um programador profissional?**  

Muitos acreditam que só conseguem uma carreira em programação com um diploma caro, mas isso não é verdade. A jornada de um **programador autodidata** é desafiadora, mas totalmente possível com o guia certo.  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"Programador Autodidata"**, Cory Althoff oferece o caminho definitivo para quem quer aprender a programar sozinho, cobrindo desde os fundamentos até as práticas do mercado.  

💡 **Sem enrolação, sem mitos.** Este livro é para quem está começando ou quer se profissionalizar, sem depender de anos de estudo formal.  

📌 **Aprenda no seu ritmo, com um plano claro e eficiente.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/3EqF1mR)  

**Comece hoje sua jornada para se tornar um programador profissional e dominar o mercado!** `)
                .then(() => console.log("✅ Mensagem sobre Java enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem sobre Java:", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );

    // Mensagem sobre Psicologia Financeira às 16:16 (fuso horário Brasil)
    cron.schedule(
        "16 16 * * *",
        () => {
            console.log("⏰ Enviando mensagem sobre Psicologia Financeira...");
            channel.send(
                    `🛑 **Você sente que bancos de dados são um mistério impossível de desvendar?**  

SQL é a base para quem trabalha com dados, mas muitos ainda se sentem perdidos. Se você precisa aprender a **consultar, manipular e entender bancos de dados**, este é o guia perfeito para começar.  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"Introdução à Linguagem SQL"**, Thomas Nield traz uma abordagem prática e direta para iniciantes, explicando passo a passo como usar SQL no dia a dia.  

💡 **Domine os fundamentos e abra portas no mercado.** Quer seja para desenvolvimento, análise ou ciência de dados, SQL é uma habilidade indispensável.  

📌 **Aprenda no seu ritmo, com exemplos práticos e reais.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/3CDkP0B)  

**Pare de evitar SQL. Comece agora e domine bancos de dados de uma vez por todas!**` )
                .then(() => console.log("✅ Mensagem sobre Psicologia Financeira enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem sobre Psicologia Financeira:", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );

    // Mensagem sobre C# às 19:17 (fuso horário Brasil)
    cron.schedule(
        "17 19 * * *",
        () => {
            console.log("⏰ Enviando mensagem sobre C#...");
            channel.send(
                    `🛑 **Você sente que falta algo para alcançar alta performance e resultados reais na sua vida?**  

Ser um programador ou profissional de tecnologia exige mais do que habilidades técnicas – exige **autoresponsabilidade**. Chega de culpar o mercado, o chefe ou as circunstâncias. Está na hora de assumir o controle do seu destino.  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"O Poder da Autorresponsabilidade"**, Paulo Vieira apresenta ferramentas práticas para você tomar as rédeas da sua carreira, melhorar sua produtividade e alcançar resultados extraordinários, mesmo em pouco tempo.  

💡 **Transforme sua mentalidade e destrave seu potencial.** Não importa o desafio, com a mentalidade certa, você vai conseguir superar.  

📌 **Aplique na sua rotina e veja os resultados.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/4jQgiZB)  

**Invista em você, assuma a responsabilidade e veja sua carreira decolar.** `)
                .then(() => console.log("✅ Mensagem sobre C# enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem sobre C#:", err));
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