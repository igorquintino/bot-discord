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
                    `🛑 **Você está preparado para superar os desafios da programação e dominar seus limites?**\n\n` +
  `Ser programador iniciante pode parecer um caminho cheio de barreiras: erros de lógica, código que não funciona, e aquela sensação de que o problema é maior do que você. Mas saiba que isso é apenas um obstáculo mental.\n\n` +
  `📚 **Este é um LIVRO, não um curso caro.**\n` +
  `Em **"Nada Pode Me Ferir"**, David Goggins ensina como enfrentar e superar as dificuldades mais extremas, transformando a dor em resiliência. Essas lições se aplicam perfeitamente ao mundo da programação, onde persistência e coragem são fundamentais.\n\n` +
  `💡 **Aprenda a dominar sua mente e transformar desafios em aprendizado.**\n` +
  `Este livro vai te ajudar a encarar os bugs, a lógica complexa e até mesmo aquele código que parece impossível de entender, com a confiança de quem sabe que nenhum problema é grande demais.\n\n` +
  `📌 **Transforme sua jornada como programador iniciante em uma história de superação.**\n` +
  `👉 [Garanta o seu agora na Amazon!](https://amzn.to/3EJjw0B)\n\n` +
  `**A única coisa que pode te parar é você mesmo. Não desista, programe o seu futuro!**(https://cdn.discordapp.com/attachments/1338990204870201436/1339000900844523593/2e071cc5430ede828ee7d67ef40bcdeb.jpg?ex=67ad2144&is=67abcfc4&hm=70ebae4b47660526ef573e10ba43988348b5f9826f63b65a98ab7bde7c61b4b6&)`)
                .then(() => console.log("✅ Mensagem enviada com sucesso!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );

    cron.schedule(
        "5 22 * * 2",
        () => {
            console.log("⏰ Enviando mensagem livro profissional 2");
            channel.send(
                    `🛑 **Você está construindo riqueza na sua carreira de programação ou apenas apagando incêndios?**

No mundo da tecnologia, muitos aprendem linguagens de programação, mas poucos entendem os princípios básicos para construir uma carreira sólida e estável. Está na hora de aprender com um clássico que atravessou gerações.

📚 **Este é um LIVRO, não um curso caro.**
Em **"O Homem Mais Rico da Babilônia"**, George S. Clason revela lições atemporais sobre como economizar, investir e alcançar independência financeira, usando histórias simples e poderosas. E o que isso tem a ver com programação? Tudo.

💡 **Descubra os segredos para investir no seu conhecimento.** Dedique-se aos fundamentos da programação, invista em projetos pessoais e construa um portfólio que gere retorno a longo prazo.

📌 **Transforme sua relação com sua carreira. Comece com pequenos passos, como aprender algoritmos e resolver problemas práticos, e veja grandes resultados em oportunidades e salários.**
👉 [Garanta o seu agora na Amazon!](https://amzn.to/3WYYy4p)

**A sabedoria para criar uma carreira de sucesso está ao seu alcance. Aproveite!** (https://cdn.discordapp.com/attachments/1338990204870201436/1339001041366024193/99d43d0914919e0b30dfba93c21829fa.jpg?ex=67ad2165&is=67abcfe5&hm=023d13b31601dc3eba62f129b9c97af2ed1bef7ef44d0cbbce3d1215f2052726&)`)
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
                    `🛑 **Você já parou para pensar no impacto da gratidão na sua jornada como programador?**

Em um mundo cheio de desafios e frustrações, como bugs intermináveis e código que não funciona, encontrar motivos para agradecer pode parecer difícil. Mas e se mudar sua perspectiva pudesse transformar sua carreira e aprendizado?

📚 **Este é um LIVRO, não um curso caro.**
Em **"#Um Dia Sem Reclamar"**, Davi Lago e Marcelo Galuppo mostram como a gratidão pode trazer mais felicidade, melhorar relacionamentos e até aumentar sua produtividade. E na programação, a gratidão por pequenos avanços pode ser a chave para evoluir.

💡 **Descubra como a gratidão pode mudar sua mentalidade e resultados.** Seja grato pelo aprendizado, mesmo que ele venha de erros e desafios, e veja como isso pode acelerar sua evolução na carreira.

📌 **Comece com pequenos passos, como comemorar cada código que funciona, e veja grandes transformações na sua motivação e desempenho.**
👉 [Garanta o seu agora na Amazon!](https://amzn.to/41cbXIW)

**Adote a gratidão como hábito e veja como isso pode transformar sua jornada na programação!***(https://cdn.discordapp.com/attachments/1338990204870201436/1339001130625011884/ff4802eaf403a340da1654c421b4cf36.jpg?ex=67ad217a&is=67abcffa&hm=a2871fd8d0c0fbd75fa2166c165ea8be7e848b3ef13d2940e6fa1fe70c78fe66&)`)
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
                    `🛑 **Você vive preso à validação do seu código pelos outros?**

Como programadores iniciantes, é comum ficarmos dependentes da aprovação dos colegas ou até de tutoriais para avançar. Mas o que aconteceria se você tivesse a coragem de escrever, errar e aprender por conta própria?

📚 **Este é um LIVRO, não um curso caro.**
Em **"A Coragem de Não Agradar"**, Ichiro Kishimi e Fumitake Koga mostram como se libertar da opinião alheia e tomar controle do próprio caminho. Assim como na programação, você precisa superar o medo de críticas e confiar no seu aprendizado.

💡 **Descubra como tomar o controle da sua evolução como programador.** Este livro te ajuda a entender que você não precisa agradar a todos ou escrever o código perfeito para crescer.

📌 **Encontre a liberdade de aprender, errar e se desenvolver no seu ritmo.**
👉 [Garanta o seu agora na Amazon!](https://amzn.to/42SJpFA)

**Liberte-se do medo de errar e progrida com autenticidade e confiança!**(https://cdn.discordapp.com/attachments/1338990204870201436/1339001240557846579/b64110965fc784d955efd84ecabc0f4f.jpg?ex=67ad2195&is=67abd015&hm=ec4dd047e7d2f608d675c65831352a316db805f79e1aa53687e3387055b46e11&)`)
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
                    `🛑 **Você entende o impacto das suas escolhas no seu futuro como programador?**

Programação não é apenas sobre escrever códigos, é comportamento e estratégia. Se você sente que está perdido no meio de frameworks e linguagens ou não sabe qual próximo passo tomar, talvez esteja ignorando o fator mais importante: a mentalidade por trás do aprendizado.

📚 **Este é um LIVRO, não um curso caro.**
Em **"A Psicologia Financeira"**, Morgan Housel revela como decisões simples e atitudes conscientes podem transformar sua relação com o dinheiro. E, assim como na programação, é preciso foco e escolhas inteligentes para evoluir.

💡 **Descubra como dominar sua jornada de aprendizado sem fórmulas mágicas.** Este livro mostra que sucesso é menos sobre recursos e mais sobre como você os utiliza.

📌 **Entenda e aplique conceitos que podem acelerar seu crescimento como programador.**
👉 [Garanta o seu agora na Amazon!](https://amzn.to/4jQe1NP)

**Transforme sua mentalidade e comece a construir a carreira que você merece.**`)
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
                    `🛑 **Você sabe como construir conexões reais no mundo da programação?**

Seja no trabalho, na comunidade de desenvolvedores ou em entrevistas, suas habilidades de comunicação podem ser o diferencial para conquistar oportunidades. E se você pudesse aprender os segredos para se destacar e criar impacto?

📚 **Este é um LIVRO, não um curso caro.**
Em **"Como Fazer Amigos e Influenciar Pessoas"**, Dale Carnegie ensina princípios atemporais que ajudam a criar conexões genuínas, melhorar a colaboração em equipe e se tornar um profissional admirado.

💡 **Transforme suas interações no ambiente de tecnologia.** Desde entrevistas até projetos colaborativos, os ensinamentos deste clássico podem te ajudar a se destacar no mercado.

📌 **Invista em habilidades que farão a diferença na sua carreira.**
👉 [Garanta o seu agora na Amazon!](https://amzn.to/4hR1mZi)

**Aprenda a influenciar positivamente no mundo da programação e alcance seus objetivos. Comece agora!**`)
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
                    `🛑 **Você sente que explicar seu código ou projetos é um desafio intransponível?**

Muitos desenvolvedores travam ao apresentar ideias ou defender projetos, perdendo oportunidades de se destacar em reuniões, entrevistas ou eventos. Mas e se você pudesse aprender a comunicar suas ideias técnicas com clareza e confiança?

📚 **Este é um LIVRO, não um curso caro.**
Em **"Como Falar em Público e Encantar as Pessoas"**, Dale Carnegie ensina técnicas comprovadas para superar o medo, apresentar suas ideias com impacto e ganhar a atenção de qualquer audiência.

💡 **Transforme sua comunicação técnica e conquiste mais oportunidades.** Seja explicando um código, liderando reuniões ou participando de hackathons, este livro é um guia essencial.

📌 **Invista em si mesmo e aprenda a se destacar no mundo da tecnologia.**
👉 [Garanta o seu agora na Amazon!](https://amzn.to/4hTNDkA)

**Sua mensagem técnica importa. Descubra como comunicá-la com impacto!**`)
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
👉 [Garanta o seu agora na Amazon!](https://amzn.to/3QejXCL)  

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
        "15 12 * * 2",
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
👉 [Garanta o seu agora na Amazon!](https://amzn.to/3WWYEcx)  

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
        "15 12 * * 3",
        () => {
            console.log("⏰ Enviando mensagem livro programação 3");
            channel.send(
                    `🛑 **Você já se perguntou como criar software que realmente funcione no mundo real?**  

Chega de exemplos acadêmicos que não se aplicam à prática! Este é o momento de aprender a desenvolver soluções reais e eficazes.  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"Desenvolvimento Real de Software"**, você aprenderá os fundamentos do Java aplicados em projetos reais, entendendo como resolver problemas do dia a dia da programação com técnicas claras e diretas.  

💡 **Desbloqueie seu potencial como desenvolvedor.** Com exemplos detalhados e práticos, este livro é o guia que você precisa para se destacar no mercado.  

📌 **Aprenda no seu ritmo e conquiste o conhecimento que faz a diferença.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/40Topf9)  

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
        "15 12 * * 4",
        () => {
            console.log("⏰ Enviando mensagem livro programação 4 ");
            channel.send(
                    `🛑 **Você já se perguntou o que diferencia um programador comum de um excelente?**  

A resposta está no código que ele escreve. Um código limpo não é apenas funcional, ele é elegante, fácil de entender e manter. Mas como alcançar esse nível de excelência?  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"Código Limpo"**, Robert C. Martin apresenta práticas essenciais para escrever códigos que não apenas funcionam, mas que são claros, eficientes e preparados para evoluir com os projetos.  

💡 **Aprenda como evitar os erros mais comuns e criar soluções duradouras.** Este livro é um guia indispensável para qualquer desenvolvedor que deseja se destacar no mercado.  

📌 **Transforme seu código e sua carreira com as melhores práticas da engenharia de software.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/3CNiOyT)  

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
        "15 12 * * 5",
        () => {
            console.log("⏰ Enviando mensagem livro programação 5 ");
            channel.send(
                    `🛑 **Você trava ao ouvir a palavra 'algoritmos'?**  

Muitos acham que entender algoritmos é algo complicado, reservado apenas para gênios da programação. Mas e se fosse possível aprender de um jeito simples e visual?  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"Entendendo Algoritmos"**, Aditya Bhargava apresenta os conceitos mais importantes de algoritmos usando ilustrações fáceis de entender, tornando o aprendizado acessível para programadores e curiosos de qualquer nível.  

💡 **Desvende os mistérios dos algoritmos e aplique na prática.** Este livro é perfeito para quem quer dominar o que realmente importa na programação e se destacar no mercado.  

📌 **Aprenda no seu ritmo, sem pressão e com clareza.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/4aRTlBb)  

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
        "15 12 * * 6",
        () => {
            console.log("⏰ Enviando mensagem livro programação 6 ");
            channel.send(
                    `🛑 **Você trava quando ouve falar em lógica de programação e algoritmos?**  

Se você está começando na programação e sente que a lógica e os algoritmos são um desafio, este livro é para você. Ele vai te ensinar a base que todo programador precisa dominar, usando uma das linguagens mais populares: **JavaScript**.  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"Lógica de Programação e Algoritmos com JavaScript"**, você vai aprender conceitos fundamentais de programação de forma prática, com exemplos e exercícios que tornam o aprendizado leve e eficiente.  

💡 **Domine a lógica de programação e crie soluções inteligentes.** Este livro é o primeiro passo para quem quer ingressar no mundo do desenvolvimento com confiança.  

📌 **Aprenda no seu ritmo, sem complicações.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/40MGPy8)  

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
        "15 12 * * 0",
        () => {
            console.log("⏰ Enviando mensagem livro programação 0 ");
            channel.send(
                    `🛑 **Você acha que precisa de um diploma para ser um programador profissional?**  

Muitas pessoas acreditam que apenas com anos de estudo formal é possível se destacar na programação. Mas e se você pudesse aprender sozinho e construir uma carreira de sucesso?  

📚 **Este é um LIVRO, não um curso caro.**  
Em **"Programador Autodidata"**, Cory Althoff oferece um guia prático e direto para quem deseja aprender a programar do zero e se tornar um profissional respeitado no mercado.  

💡 **Descubra como aprender no seu ritmo e dominar as habilidades mais valorizadas.** Este livro vai te guiar desde os fundamentos até as práticas mais avançadas da programação.  

📌 **Dê o primeiro passo para transformar sua vida e carreira.**  
👉 [Garanta o seu agora na Amazon!](https://amzn.to/41al4tt)  

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
