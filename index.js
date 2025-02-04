require('dotenv').config(); const { Client, GatewayIntentBits } = require('discord.js'); const cron = require('node-cron');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => { console.log(✅ Bot ${client.user.tag} está online!);

const channelId = process.env.DISCORD_CHANNEL_ID_2;
const channel = client.channels.cache.get(channelId);

if (!channel) {
    console.error("❌ Canal não encontrado. Verifique o ID no arquivo .env.");
    return;
}

// Enviar mensagem sobre algoritmos às 18:51
cron.schedule('3 22 * * *', () => {
    console.log("⏰ Enviando mensagem sobre algoritmos...");
    channel.send(
        `🛑 **Você realmente entende o que é necessário para desenvolver software de verdade?**\n\n`
        + `Chega de exemplos simplórios que não se aplicam ao mundo real. Você já sentiu que falta algo no que aprende sobre programação? Que os tutoriais deixam você na mão quando o assunto é **projetos reais**?\n\n`
        + `📚 **Este é um LIVRO, não um curso caro.**\n`
        + `Em **"Desenvolvimento Real de Software"**, você vai aprender os fundamentos de Java aplicados a **projetos reais**, com exemplos que refletem os desafios do mercado.\n\n`
        + `💡 **Chega de insegurança.** Este livro te prepara para resolver problemas reais e ser valorizado como um desenvolvedor completo.\n\n`
        + `📌 **Aprenda no seu ritmo, sem pressa e sem enrolação.**\n`
        + `👉 [Garanta o seu agora na Amazon!](https://amzn.to/4gqgUC9)\n`
        + `----------------------------------------------------------------------------------------`
    );
});

// Enviar mensagem sobre início na programação às 18:52
cron.schedule('1 22 * * *', () => {
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

cron.schedule('51 18 * * *', () => {
    console.log("⏰ Enviando mensagem sobre inteligência artificial...");
    channel.send(
        `🛑 **Você está pronto para o impacto da inteligência artificial no seu dia a dia?**\n\n`
        + `Os robôs já estão **transformando empregos**, **relacionamentos** e até a forma como vivemos. Mas você entende mesmo o que está acontecendo? Ou sente que vai ser deixado para trás?\n\n`
        + `📚 **Este é um LIVRO, não um curso caro.**\n`
        + `Em **"Inteligência Artificial" de Kai-Fu Lee**, você vai descobrir de forma simples e direta como a IA está mudando o mundo – e o que você pode fazer para não ser engolido por essas mudanças.\n\n`
        + `💡 **Pare de se sentir perdido.** Entenda o futuro antes que ele te surpreenda.\n\n`
        + `📌 **É acessível, no seu ritmo e sem complicação.**\n`
        + `👉 [Garanta o seu agora na Amazon!](https://amzn.to/4gqgUC9)\n`
        + `----------------------------------------------------------------------------------------`
    );
});

// Enviar mensagem de teste a cada 7 minutos
//cron.schedule('*/7 * * * *', () => {
  //  console.log("⏰ Enviando mensagem de teste a cada 7 minutos...");
  //  channel.send("🔄 Esta é uma mensagem de teste enviada automaticamente a cada 7 minutos.");

// });

});


client.login(process.env.DISCORD_TOKEN_2);

