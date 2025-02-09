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
        "15 18 * * 1",
        () => {
            console.log("⏰ Enviando mensagem livro profissional 1  ");
            channel.send(
                    `🛑 **Você está preparado para enfrentar os limites da mente e do corpo?**  

David Goggins é a prova viva de que o impossível é apenas uma barreira mental. Se você já sentiu que não consegue superar desafios na sua carreira, nos estudos ou na vida, este livro é o empurrão que você precisa.  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"Nada Pode Me Ferir"**, Goggins compartilha como transformou uma infância traumática e desafios extremos em força e resiliência, tornando-se um dos homens mais duros do mundo.  

💡 **Aprenda a dominar sua mente e superar seus limites.** As lições deste livro vão te ajudar a enfrentar obstáculos com coragem e disciplina, seja no mundo da programação ou em qualquer outro campo.  

📌 **Inspire-se e transforme suas fraquezas em força.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/415qLc9)  

**Nada pode te parar, exceto você mesmo. Comece agora!**`)
                .then(() => console.log("✅ Mensagem enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );

    cron.schedule(
        "15 18 * * 2",
        () => {
            console.log("⏰ Enviando mensagem livro profissional 2");
            channel.send(
                    `🛑 **Você está construindo riqueza ou apenas sobrevivendo?**  

No mundo atual, muitos lutam para juntar dinheiro, mas poucos entendem os princípios básicos para criar riqueza de forma consistente. Está na hora de aprender com um clássico que atravessou gerações.  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"O Homem Mais Rico da Babilônia"**, George S. Clason revela lições atemporais sobre como economizar, investir e alcançar independência financeira, usando histórias simples e poderosas.  

💡 **Descubra os segredos da prosperidade que funcionam até hoje.** Ideal para quem busca estabilidade financeira enquanto investe em seus sonhos, seja na programação, estudos ou negócios.  

📌 **Transforme sua relação com dinheiro. Comece com pequenos passos e colha grandes resultados.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/40TWw6y)  

**A sabedoria para criar riqueza está ao seu alcance. Aproveite!** `)
                .then(() => console.log("✅ Mensagem enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );

    cron.schedule(
        "15 18 * * 3",
        () => {
            console.log("⏰ Enviando mensagem livro profissional 3");
            channel.send(
                    `🛑 **Você já parou para pensar no impacto da gratidão na sua vida?**  

Em um mundo cheio de reclamações e negatividade, encontrar motivos para agradecer pode parecer difícil. Mas e se mudar a sua perspectiva pudesse transformar seus dias?  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"#Um Dia Sem Reclamar"**, Davi Lago e Marcelo Galuppo mostram como a gratidão pode trazer mais felicidade, melhorar relacionamentos e até aumentar sua produtividade.  

💡 **Descubra como a gratidão pode mudar sua mentalidade e resultados.** Este é o guia prático para quem quer viver com mais leveza e positividade.  

📌 **Comece com pequenos passos e veja grandes transformações.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/3QcjpgA)  

**Adote a gratidão como hábito e veja como isso pode transformar sua vida!**`)
                .then(() => console.log("✅ Mensagem enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );

    cron.schedule(
        "15 18 * * 4",
        () => {
            console.log("⏰ Enviando mensagem livro profissional 4");
            channel.send(
                    `🛑 **Você vive preso à aprovação dos outros?**  

Muitas vezes, deixamos de seguir nossos sonhos e valores com medo de desagradar ou decepcionar as pessoas ao nosso redor. Mas o que aconteceria se você tivesse coragem de ser quem realmente é?  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"A Coragem de Não Agradar"**, Ichiro Kishimi e Fumitake Koga mostram como se libertar da opinião alheia, superar suas limitações e viver uma vida autêntica.  

💡 **Descubra como tomar o controle da sua vida.** Este livro vai te ajudar a enxergar que agradar a todos não é necessário para ser feliz e bem-sucedido.  

📌 **Encontre a liberdade para ser quem você realmente é.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/4gDXWIi)  

**Liberte-se, viva com autenticidade e descubra a felicidade verdadeira.**`)
                .then(() => console.log("✅ Mensagem enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );

    cron.schedule(
        "15 18 * * 5",
        () => {
            console.log("⏰ Enviando mensagem livro profissional 5 ");
            channel.send(
                    `🛑 **Você entende o impacto das suas escolhas financeiras no seu futuro?**  

Dinheiro não é apenas números, é comportamento. Se você sente que está lutando para equilibrar suas finanças ou investir no que realmente importa, talvez esteja ignorando o fator mais importante: a psicologia por trás do dinheiro.  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"A Psicologia Financeira"**, Morgan Housel explora como decisões simples e atitudes conscientes podem transformar sua relação com o dinheiro, trazendo lições atemporais sobre fortuna, ganância e felicidade.  

💡 **Descubra como dominar suas finanças sem precisar de fórmulas mágicas.** Este livro mostra que riqueza é menos sobre renda e mais sobre escolhas inteligentes.  

📌 **Entenda e aplique conceitos práticos que realmente funcionam.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/4hJt8HH)  

**Transforme sua mentalidade financeira e comece a construir a vida que você merece.**`)
                .then(() => console.log("✅ Mensagem enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );

    cron.schedule(
        "15 18 * * 6",
        () => {
            console.log("⏰ Enviando mensagem livro profissional 6");
            channel.send(
                    `🛑 **Você entende o comportamento por trás das suas decisões financeiras?**  

Dinheiro não é apenas sobre números. É sobre como pensamos, sentimos e agimos com ele. Se você já se perguntou por que não consegue guardar ou investir mais, este livro é o que você precisa.  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"A Psicologia Financeira"**, Morgan Housel revela como pequenas decisões comportamentais podem fazer a diferença entre o sucesso e o fracasso financeiro.  

💡 **Aprenda a dominar suas finanças com atitudes simples e práticas.** Descubra como evitar os erros mais comuns e construir riqueza de maneira consistente.  

📌 **Transforme sua relação com dinheiro para alcançar a liberdade financeira.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/4hmx2Gb)  

**Controle seu dinheiro antes que ele controle você. Comece hoje!**`)
                .then(() => console.log("✅ Mensagem enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );

    cron.schedule(
        "15 18 * * 0",
        () => {
            console.log("⏰ Enviando mensagem livro profissional 7 ");
            channel.send(
                    `🛑 **Você sabe como construir conexões reais e impactar as pessoas ao seu redor?**  

No trabalho, nos estudos ou na vida pessoal, suas habilidades de comunicação podem ser a diferença entre o sucesso e o fracasso. E se você pudesse aprender os segredos das pessoas mais influentes do mundo?  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"Como Fazer Amigos e Influenciar Pessoas"**, Dale Carnegie ensina princípios simples e eficazes para se conectar com qualquer pessoa, criar relacionamentos significativos e se tornar uma pessoa mais influente e admirada.  

💡 **Transforme suas interações e conquiste aliados em qualquer ambiente.** Desde negociações até amizades, os ensinamentos deste clássico são atemporais e aplicáveis a qualquer situação.  

📌 **Invista em habilidades que fazem a diferença.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/4jNzW8t)  

**Aprenda a influenciar positivamente e alcance seus objetivos com confiança. Comece hoje!**`)
                .then(() => console.log("✅ Mensagem enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );

    cron.schedule(
        "15 12 * * 1",
        () => {
            console.log("⏰ Enviando mensagem livro programação 1 ");
            channel.send(
                    `🛑 **Quer dar os primeiros passos na programação, mas não sabe por onde começar?**  

Não importa sua idade ou experiência, este é o ponto de partida perfeito. **"Meu Primeiro Livro de Programação"** apresenta conceitos básicos de maneira divertida e acessível, com linguagens como Python, Basic e Scratch.  

📚 **Ideal para iniciantes.**  
Este livro é um guia para quem quer aprender do zero, com exercícios práticos e explicações simples para criar seus primeiros projetos.  

💡 **Transforme curiosidade em habilidade.**  
Você vai descobrir como a programação pode ser criativa e empolgante, mesmo se nunca tiver escrito uma linha de código antes.  

📌 **A programação pode ser fácil e divertida, e este livro prova isso!**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/4jNzY05)  

**Comece hoje e descubra o mundo da programação de forma simples e prática.**
`)
                .then(() => console.log("✅ Mensagem enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );


    cron.schedule(
        "15 12 * * 1",
        () => {
            console.log("⏰ Enviando mensagem livro programação 2 ");
            channel.send(
                    `🛑 **Você quer aprender a projetar sistemas de Machine Learning prontos para produção?**  

Esqueça conceitos vagos e soluções que não funcionam na prática. É hora de aprender o processo real, interativo e eficiente para levar modelos ao mercado.  

📚 **Este é um LIVRO, não um curso genérico.**  
Com **"Projetando Sistemas de Machine Learning"**, você vai entender desde a arquitetura até a implementação de sistemas de Machine Learning prontos para produção, com insights que só especialistas compartilham.  

💡 **Destaque-se em um dos campos mais inovadores da tecnologia.**  
Este livro ensina o que é realmente necessário para criar soluções que impactam o mundo real.  

📌 **Aprenda no seu ritmo e aplique o conhecimento direto no seu trabalho ou projetos pessoais.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/4gAJuAG)  

**Comece hoje e transforme seu conhecimento em Machine Learning em resultados reais.**
`)
                .then(() => console.log("✅ Mensagem enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );

    cron.schedule(
        "15 12 * * 1",
        () => {
            console.log("⏰ Enviando mensagem livro programação 3");
            channel.send(
                    `🛑 **Você já se perguntou como criar software que realmente funcione no mundo real?**  

Chega de exemplos acadêmicos que não se aplicam à prática! Este é o momento de aprender a desenvolver soluções reais e eficazes.  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"Desenvolvimento Real de Software"**, você aprenderá os fundamentos do Java aplicados em projetos reais, entendendo como resolver problemas do dia a dia da programação com técnicas claras e diretas.  

💡 **Desbloqueie seu potencial como desenvolvedor.** Com exemplos detalhados e práticos, este livro é o guia que você precisa para se destacar no mercado.  

📌 **Aprenda no seu ritmo e conquiste o conhecimento que faz a diferença.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/4155ZJA)  

**Dê o próximo passo na sua jornada de programador. Comece agora e veja a diferença!**
`)
                .then(() => console.log("✅ Mensagem enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );


    cron.schedule(
        "15 12 * * 1",
        () => {
            console.log("⏰ Enviando mensagem livro programação 4 ");
            channel.send(
                    `🛑 **Você já se perguntou o que diferencia um programador comum de um excelente?**  

A resposta está no código que ele escreve. Um código limpo não é apenas funcional, ele é elegante, fácil de entender e manter. Mas como alcançar esse nível de excelência?  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"Código Limpo"**, Robert C. Martin apresenta práticas essenciais para escrever códigos que não apenas funcionam, mas que são claros, eficientes e preparados para evoluir com os projetos.  

💡 **Aprenda como evitar os erros mais comuns e criar soluções duradouras.** Este livro é um guia indispensável para qualquer desenvolvedor que deseja se destacar no mercado.  

📌 **Transforme seu código e sua carreira com as melhores práticas da engenharia de software.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/4gtB66c)  

**Escreva código que fale por você. Comece agora e eleve o seu nível profissional!**
`)
                .then(() => console.log("✅ Mensagem enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );


    cron.schedule(
        "15 12 * * 1",
        () => {
            console.log("⏰ Enviando mensagem livro programação 5 ");
            channel.send(
                    `🛑 **Você trava ao ouvir a palavra 'algoritmos'?**  

Muitos acham que entender algoritmos é algo complicado, reservado apenas para gênios da programação. Mas e se fosse possível aprender de um jeito simples e visual?  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"Entendendo Algoritmos"**, Aditya Bhargava apresenta os conceitos mais importantes de algoritmos usando ilustrações fáceis de entender, tornando o aprendizado acessível para programadores e curiosos de qualquer nível.  

💡 **Desvende os mistérios dos algoritmos e aplique na prática.** Este livro é perfeito para quem quer dominar o que realmente importa na programação e se destacar no mercado.  

📌 **Aprenda no seu ritmo, sem pressão e com clareza.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/4gxCTqL)  

**Chegou a hora de transformar complexidade em conhecimento. Comece hoje!**
`)
                .then(() => console.log("✅ Mensagem enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );

    cron.schedule(
        "15 12 * * 1",
        () => {
            console.log("⏰ Enviando mensagem livro programação 6 ");
            channel.send(
                    `🛑 **Você trava quando ouve falar em lógica de programação e algoritmos?**  

Se você está começando na programação e sente que a lógica e os algoritmos são um desafio, este livro é para você. Ele vai te ensinar a base que todo programador precisa dominar, usando uma das linguagens mais populares: **JavaScript**.  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"Lógica de Programação e Algoritmos com JavaScript"**, você vai aprender conceitos fundamentais de programação de forma prática, com exemplos e exercícios que tornam o aprendizado leve e eficiente.  

💡 **Domine a lógica de programação e crie soluções inteligentes.** Este livro é o primeiro passo para quem quer ingressar no mundo do desenvolvimento com confiança.  

📌 **Aprenda no seu ritmo, sem complicações.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/4aPzBOk)  

**Construa sua base sólida em programação e alcance seus objetivos. Comece hoje!**
`)
                .then(() => console.log("✅ Mensagem enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );


    cron.schedule(
        "15 12 * * 1",
        () => {
            console.log("⏰ Enviando mensagem livro programação 0 ");
            channel.send(
                    `🛑 **Você acha que precisa de um diploma para ser um programador profissional?**  

Muitas pessoas acreditam que apenas com anos de estudo formal é possível se destacar na programação. Mas e se você pudesse aprender sozinho e construir uma carreira de sucesso?  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"Programador Autodidata"**, Cory Althoff oferece um guia prático e direto para quem deseja aprender a programar do zero e se tornar um profissional respeitado no mercado.  

💡 **Descubra como aprender no seu ritmo e dominar as habilidades mais valorizadas.** Este livro vai te guiar desde os fundamentos até as práticas mais avançadas da programação.  

📌 **Dê o primeiro passo para transformar sua vida e carreira.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/4hRDpBd)  

**A carreira dos seus sonhos está ao seu alcance. Comece agora!**
`)
                .then(() => console.log("✅ Mensagem enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem", err));
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
