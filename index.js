require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const cron = require("node-cron");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

// Carregando os IDs dos canais do arquivo .env
const mensagensAgendadas = [
    {
        canal: process.env.CANAL_LIVRO,
        horario: "15 18 * * 1", // Segunda-feira às 18:15
        mensagem: `🛑 **Você está preparado para superar os desafios da programação e dominar seus limites?**\n\n` +
          `Ser programador iniciante pode parecer um caminho cheio de barreiras: erros de lógica, código que não funciona, e aquela sensação de que o problema é maior do que você. Mas saiba que isso é apenas um obstáculo mental.\n\n` +
          `📚 **Este é um LIVRO, não um curso caro.**\n` +
          `Em **"Nada Pode Me Ferir"**, David Goggins ensina como enfrentar e superar as dificuldades mais extremas, transformando a dor em resiliência. Essas lições se aplicam perfeitamente ao mundo da programação, onde persistência e coragem são fundamentais.\n\n` +
          `💡 **Aprenda a dominar sua mente e transformar desafios em aprendizado.**\n` +
          `Este livro vai te ajudar a encarar os bugs, a lógica complexa e até mesmo aquele código que parece impossível de entender, com a confiança de quem sabe que nenhum problema é grande demais.\n\n` +
          `📌 **Transforme sua jornada como programador iniciante em uma história de superação.**\n` +
          `👉 [Garanta o seu agora na Amazon!](https://amzn.to/3EJjw0B)\n\n` +
          `**A única coisa que pode te parar é você mesmo. Não desista, programe o seu futuro!**(https://cdn.discordapp.com/attachments/1338990204870201436/1339000900844523593/2e071cc5430ede828ee7d67ef40bcdeb.jpg?ex=67ad2144&is=67abcfc4&hm=70ebae4b47660526ef573e10ba43988348b5f9826f63b65a98ab7bde7c61b4b6&)`
    },

    {
        canal: process.env.CANAL_LIVRO,
        horario: "15 18 * * 2", // Segunda-feira às 18:15
        mensagem: `🛑 **Você está construindo riqueza na sua carreira de programação ou apenas apagando incêndios?**

        No mundo da tecnologia, muitos aprendem linguagens de programação, mas poucos entendem os princípios básicos para construir uma carreira sólida e estável. Está na hora de aprender com um clássico que atravessou gerações.

        📚 **Este é um LIVRO, não um curso caro.**
        Em **"O Homem Mais Rico da Babilônia"**, George S. Clason revela lições atemporais sobre como economizar, investir e alcançar independência financeira, usando histórias simples e poderosas. E o que isso tem a ver com programação? Tudo.

        💡 **Descubra os segredos para investir no seu conhecimento.** Dedique-se aos fundamentos da programação, invista em projetos pessoais e construa um portfólio que gere retorno a longo prazo.

        📌 **Transforme sua relação com sua carreira. Comece com pequenos passos, como aprender algoritmos e resolver problemas práticos, e veja grandes resultados em oportunidades e salários.**
        👉 [Garanta o seu agora na Amazon!](https://amzn.to/3WYYy4p)

        **A sabedoria para criar uma carreira de sucesso está ao seu alcance. Aproveite!** (https://cdn.discordapp.com/attachments/1338990204870201436/1339001041366024193/99d43d0914919e0b30dfba93c21829fa.jpg?ex=67ad2165&is=67abcfe5&hm=023d13b31601dc3eba62f129b9c97af2ed1bef7ef44d0cbbce3d1215f2052726&)`
    },

    {
        canal: process.env.CANAL_LIVRO,
        horario: "15 18 * * 3", // Segunda-feira às 18:15
        mensagem: `🛑 **Você já parou para pensar no impacto da gratidão na sua jornada como programador?**

            Em um mundo cheio de desafios e frustrações, como bugs intermináveis e código que não funciona, encontrar motivos para agradecer pode parecer difícil. Mas e se mudar sua perspectiva pudesse transformar sua carreira e aprendizado?

            📚 **Este é um LIVRO, não um curso caro.**
            Em **"#Um Dia Sem Reclamar"**, Davi Lago e Marcelo Galuppo mostram como a gratidão pode trazer mais felicidade, melhorar relacionamentos e até aumentar sua produtividade. E na programação, a gratidão por pequenos avanços pode ser a chave para evoluir.

            💡 **Descubra como a gratidão pode mudar sua mentalidade e resultados.** Seja grato pelo aprendizado, mesmo que ele venha de erros e desafios, e veja como isso pode acelerar sua evolução na carreira.

            📌 **Comece com pequenos passos, como comemorar cada código que funciona, e veja grandes transformações na sua motivação e desempenho.**
            👉 [Garanta o seu agora na Amazon!](https://amzn.to/41cbXIW)

            **Adote a gratidão como hábito e veja como isso pode transformar sua jornada na programação!***(https://cdn.discordapp.com/attachments/1338990204870201436/1339001130625011884/ff4802eaf403a340da1654c421b4cf36.jpg?ex=67ad217a&is=67abcffa&hm=a2871fd8d0c0fbd75fa2166c165ea8be7e848b3ef13d2940e6fa1fe70c78fe66&)`
    },
    {
        canal: process.env.CANAL_LIVRO,
        horario: "15 18 * * 4", // Segunda-feira às 18:15
        mensagem: `🛑 **Você vive preso à validação do seu código pelos outros?**

            Como programadores iniciantes, é comum ficarmos dependentes da aprovação dos colegas ou até de tutoriais para avançar. Mas o que aconteceria se você tivesse a coragem de escrever, errar e aprender por conta própria?

            📚 **Este é um LIVRO, não um curso caro.**
            Em **"A Coragem de Não Agradar"**, Ichiro Kishimi e Fumitake Koga mostram como se libertar da opinião alheia e tomar controle do próprio caminho. Assim como na programação, você precisa superar o medo de críticas e confiar no seu aprendizado.

            💡 **Descubra como tomar o controle da sua evolução como programador.** Este livro te ajuda a entender que você não precisa agradar a todos ou escrever o código perfeito para crescer.

            📌 **Encontre a liberdade de aprender, errar e se desenvolver no seu ritmo.**
            👉 [Garanta o seu agora na Amazon!](https://amzn.to/42SJpFA)

            **Liberte-se do medo de errar e progrida com autenticidade e confiança!**(https://cdn.discordapp.com/attachments/1338990204870201436/1339001240557846579/b64110965fc784d955efd84ecabc0f4f.jpg?ex=67ad2195&is=67abd015&hm=ec4dd047e7d2f608d675c65831352a316db805f79e1aa53687e3387055b46e11&)`
    },
    {
        canal: process.env.CANAL_LIVRO,
        horario: "15 18 * * 5", // Segunda-feira às 18:15
        mensagem: `🛑 **Você entende o impacto das suas escolhas no seu futuro como programador?**

            Programação não é apenas sobre escrever códigos, é comportamento e estratégia. Se você sente que está perdido no meio de frameworks e linguagens ou não sabe qual próximo passo tomar, talvez esteja ignorando o fator mais importante: a mentalidade por trás do aprendizado.

            📚 **Este é um LIVRO, não um curso caro.**
            Em **"A Psicologia Financeira"**, Morgan Housel revela como decisões simples e atitudes conscientes podem transformar sua relação com o dinheiro. E, assim como na programação, é preciso foco e escolhas inteligentes para evoluir.

            💡 **Descubra como dominar sua jornada de aprendizado sem fórmulas mágicas.** Este livro mostra que sucesso é menos sobre recursos e mais sobre como você os utiliza.

            📌 **Entenda e aplique conceitos que podem acelerar seu crescimento como programador.**
            👉 [Garanta o seu agora na Amazon!](https://amzn.to/4jQe1NP)

            **Transforme sua mentalidade e comece a construir a carreira que você merece.**`
    },
    {
        canal: process.env.CANAL_LIVRO,
        horario: "15 18 * * 6", // Segunda-feira às 18:15
        mensagem: `🛑 **Você sabe como construir conexões reais no mundo da programação?**

            Seja no trabalho, na comunidade de desenvolvedores ou em entrevistas, suas habilidades de comunicação podem ser o diferencial para conquistar oportunidades. E se você pudesse aprender os segredos para se destacar e criar impacto?

            📚 **Este é um LIVRO, não um curso caro.**
            Em **"Como Fazer Amigos e Influenciar Pessoas"**, Dale Carnegie ensina princípios atemporais que ajudam a criar conexões genuínas, melhorar a colaboração em equipe e se tornar um profissional admirado.

            💡 **Transforme suas interações no ambiente de tecnologia.** Desde entrevistas até projetos colaborativos, os ensinamentos deste clássico podem te ajudar a se destacar no mercado.

            📌 **Invista em habilidades que farão a diferença na sua carreira.**
            👉 [Garanta o seu agora na Amazon!](https://amzn.to/4hR1mZi)

            **Aprenda a influenciar positivamente no mundo da programação e alcance seus objetivos. Comece agora!**`
    },
    {
        canal: process.env.CANAL_LIVRO,
        horario: "15 18 * * 0", // Segunda-feira às 18:15
        mensagem: `🛑 **Você sente que explicar seu código ou projetos é um desafio intransponível?**

            Muitos desenvolvedores travam ao apresentar ideias ou defender projetos, perdendo oportunidades de se destacar em reuniões, entrevistas ou eventos. Mas e se você pudesse aprender a comunicar suas ideias técnicas com clareza e confiança?

            📚 **Este é um LIVRO, não um curso caro.**
            Em **"Como Falar em Público e Encantar as Pessoas"**, Dale Carnegie ensina técnicas comprovadas para superar o medo, apresentar suas ideias com impacto e ganhar a atenção de qualquer audiência.

            💡 **Transforme sua comunicação técnica e conquiste mais oportunidades.** Seja explicando um código, liderando reuniões ou participando de hackathons, este livro é um guia essencial.

            📌 **Invista em si mesmo e aprenda a se destacar no mundo da tecnologia.**
            👉 [Garanta o seu agora na Amazon!](https://amzn.to/4hTNDkA)

            **Sua mensagem técnica importa. Descubra como comunicá-la com impacto!**`
    },
    {
        canal: process.env.CANAL_LIVRO,
        horario: "15 12 * * 1", // Segunda-feira às 18:15
        mensagem: `🛑 **Quer dar os primeiros passos na programação, mas não sabe por onde começar?**  

            Não importa sua idade ou experiência, este é o ponto de partida perfeito. **"Meu Primeiro Livro de Programação"** apresenta conceitos básicos de maneira divertida e acessível, com linguagens como Python, Basic e Scratch.  

            📚 **Ideal para iniciantes.**  
            Este livro é um guia para quem quer aprender do zero, com exercícios práticos e explicações simples para criar seus primeiros projetos.  

            💡 **Transforme curiosidade em habilidade.**  
            Você vai descobrir como a programação pode ser criativa e empolgante, mesmo se nunca tiver escrito uma linha de código antes.  

            📌 **A programação pode ser fácil e divertida, e este livro prova isso!**  
            👉 [Garanta o seu agora na Amazon!](https://amzn.to/3QejXCL)  

            **Comece hoje e descubra o mundo da programação de forma simples e prática.**
            `
    },
    {
        canal: process.env.CANAL_LIVRO,
        horario: "15 12 * * 2", // Segunda-feira às 18:15
        mensagem: `🛑 **Você quer aprender a projetar sistemas de Machine Learning prontos para produção?**  

            Esqueça conceitos vagos e soluções que não funcionam na prática. É hora de aprender o processo real, interativo e eficiente para levar modelos ao mercado.  

            📚 **Este é um LIVRO, não um curso genérico.**  
            Com **"Projetando Sistemas de Machine Learning"**, você vai entender desde a arquitetura até a implementação de sistemas de Machine Learning prontos para produção, com insights que só especialistas compartilham.  

            💡 **Destaque-se em um dos campos mais inovadores da tecnologia.**  
            Este livro ensina o que é realmente necessário para criar soluções que impactam o mundo real.  

            📌 **Aprenda no seu ritmo e aplique o conhecimento direto no seu trabalho ou projetos pessoais.**  
            👉 [Garanta o seu agora na Amazon!](https://amzn.to/3WWYEcx)  

            **Comece hoje e transforme seu conhecimento em Machine Learning em resultados reais.**
            `
    },
    {
        canal: process.env.CANAL_LIVRO,
        horario: "15 12 * * 3", // Segunda-feira às 18:15
        mensagem:  `🛑 **Você já se perguntou como criar software que realmente funcione no mundo real?**  

            Chega de exemplos acadêmicos que não se aplicam à prática! Este é o momento de aprender a desenvolver soluções reais e eficazes.  

            📚 **Este é um LIVRO, não um curso caro.**  
            Em **"Desenvolvimento Real de Software"**, você aprenderá os fundamentos do Java aplicados em projetos reais, entendendo como resolver problemas do dia a dia da programação com técnicas claras e diretas.  

            💡 **Desbloqueie seu potencial como desenvolvedor.** Com exemplos detalhados e práticos, este livro é o guia que você precisa para se destacar no mercado.  

            📌 **Aprenda no seu ritmo e conquiste o conhecimento que faz a diferença.**  
            👉 [Garanta o seu agora na Amazon!](https://amzn.to/40Topf9)  

            **Dê o próximo passo na sua jornada de programador. Comece agora e veja a diferença!**
            `
    },
    {
        canal: process.env.CANAL_LIVRO,
        horario: "15 12 * * 4", // Segunda-feira às 18:15
        mensagem: `🛑 **Você já se perguntou o que diferencia um programador comum de um excelente?**  

            A resposta está no código que ele escreve. Um código limpo não é apenas funcional, ele é elegante, fácil de entender e manter. Mas como alcançar esse nível de excelência?  

            📚 **Este é um LIVRO, não um curso caro.**  
            Em **"Código Limpo"**, Robert C. Martin apresenta práticas essenciais para escrever códigos que não apenas funcionam, mas que são claros, eficientes e preparados para evoluir com os projetos.  

            💡 **Aprenda como evitar os erros mais comuns e criar soluções duradouras.** Este livro é um guia indispensável para qualquer desenvolvedor que deseja se destacar no mercado.  

            📌 **Transforme seu código e sua carreira com as melhores práticas da engenharia de software.**  
            👉 [Garanta o seu agora na Amazon!](https://amzn.to/3CNiOyT)  

            **Escreva código que fale por você. Comece agora e eleve o seu nível profissional!**
            `
    },{
        canal: process.env.CANAL_LIVRO,
        horario: "15 12 * * 5", // Segunda-feira às 18:15
        mensagem: `🛑 **Você trava ao ouvir a palavra 'algoritmos'?**  

            Muitos acham que entender algoritmos é algo complicado, reservado apenas para gênios da programação. Mas e se fosse possível aprender de um jeito simples e visual?  

            📚 **Este é um LIVRO, não um curso caro.**  
            Em **"Entendendo Algoritmos"**, Aditya Bhargava apresenta os conceitos mais importantes de algoritmos usando ilustrações fáceis de entender, tornando o aprendizado acessível para programadores e curiosos de qualquer nível.  

            💡 **Desvende os mistérios dos algoritmos e aplique na prática.** Este livro é perfeito para quem quer dominar o que realmente importa na programação e se destacar no mercado.  

            📌 **Aprenda no seu ritmo, sem pressão e com clareza.**  
            👉 [Garanta o seu agora na Amazon!](https://amzn.to/4aRTlBb)  

            **Chegou a hora de transformar complexidade em conhecimento. Comece hoje!**(https://cdn.discordapp.com/attachments/1338990204870201436/1339001375228432474/378e2614925f2102da1374eb86b5618a.jpg?ex=67ad21b5&is=67abd035&hm=3d0d33db38acf56a5d5fa8be72e73bdb0a78fd7e3365e86f9fcb32245c174cd8&)
            `
    },
    {
        canal: process.env.CANAL_LIVRO,
        horario: "15 12 * * 6", // Segunda-feira às 18:15
        mensagem: `🛑 **Você trava quando ouve falar em lógica de programação e algoritmos?**  

            Se você está começando na programação e sente que a lógica e os algoritmos são um desafio, este livro é para você. Ele vai te ensinar a base que todo programador precisa dominar, usando uma das linguagens mais populares: **JavaScript**.  

            📚 **Este é um LIVRO, não um curso caro.**  
            Em **"Lógica de Programação e Algoritmos com JavaScript"**, você vai aprender conceitos fundamentais de programação de forma prática, com exemplos e exercícios que tornam o aprendizado leve e eficiente.  

            💡 **Domine a lógica de programação e crie soluções inteligentes.** Este livro é o primeiro passo para quem quer ingressar no mundo do desenvolvimento com confiança.  

            📌 **Aprenda no seu ritmo, sem complicações.**  
            👉 [Garanta o seu agora na Amazon!](https://amzn.to/40MGPy8)  

            **Construa sua base sólida em programação e alcance seus objetivos. Comece hoje!**
            `
    },
    {
        canal: process.env.CANAL_LIVRO,
        horario: "15 12 * * 0", // Segunda-feira às 18:15
        mensagem: `🛑 **Você acha que precisa de um diploma para ser um programador profissional?**  

            Muitas pessoas acreditam que apenas com anos de estudo formal é possível se destacar na programação. Mas e se você pudesse aprender sozinho e construir uma carreira de sucesso?  

            📚 **Este é um LIVRO, não um curso caro.**  
            Em **"Programador Autodidata"**, Cory Althoff oferece um guia prático e direto para quem deseja aprender a programar do zero e se tornar um profissional respeitado no mercado.  

            💡 **Descubra como aprender no seu ritmo e dominar as habilidades mais valorizadas.** Este livro vai te guiar desde os fundamentos até as práticas mais avançadas da programação.  

            📌 **Dê o primeiro passo para transformar sua vida e carreira.**  
            👉 [Garanta o seu agora na Amazon!](https://amzn.to/41al4tt)  

            **A carreira dos seus sonhos está ao seu alcance. Comece agora!**
            `
    },
    {
        canal: process.env.CANAL_VAGA,
        horario: "15 13 * * 1", // Segunda-feira às 18:15
        mensagem: `
            🚀 **Oportunidade para Cloud Security Engineer!**  

            📍 **Formato:** *100% Remoto*  
            💼 **Nível:** *Pleno*  
            🕒 **Jornada:** *Full-Time (PJ)*  
            💰 **Faixa Salarial:** *Negociável*  

            ## 📋 **Requisitos:**  
            ✅ Querer atuar como **Engenheiro de Cloud Security**.  
            ✅ Ser uma pessoa curiosa, gostar de desafios e ter vontade de aprender.  
            ✅ Experiência como **Analista de Segurança da Informação** ou **Cybersecurity**.  
            ✅ Experiência com **práticas e ferramentas de segurança** em ambientes **Cloud**.  
            ✅ Experiência com **provedores de nuvem** (*AWS, Azure, Google Cloud*).  
            ✅ Conhecimento básico de **CI/CD, contêineres e orquestração** (*GitLab, GitHub, Terraform, Docker, Kubernetes*).  
            ✅ Habilidades em **resolução de problemas, trabalho em equipe e comunicação**.  

            ## 🏆 **Diferenciais:**  
            ⭐ Certificações em **AWS, Azure ou Google Cloud**.  
            ⭐ Formação em *Ciência da Computação, Sistemas ou Engenharia da Computação*.  
            ⭐ Noções de programação.  
            ⭐ Experiência com sistemas de monitoramento como **SIEM, Grafana ou similares**.  

            ## 🚀 **Benefícios:**  
            ✅ **Horário Flexível**.  
            ✅ **Parceria com Alura**.  
            ✅ **30 dias de férias remuneradas**.  
            ✅ **G4 Skills**.  

            📩 **Candidatar-se no link:**  
            🔗 [Inscrição](https://coodesh.com/jobs/cloud-security-engineer-182436615)  

            ✨ *Essa vaga foi compartilhada pela comunidade **Quintino Coders!***  
            `
    },
    {
        canal: process.env.CANAL_VAGA,
        horario: "15 13 * * 1", // Segunda-feira às 18:15
        mensagem: `
            🚀 **Oportunidade Java!**  

            💻 **Desenvolvedor Web Java Sênior (Java, Quarkus, Angular)**  
            📆 *Projeto de 5 meses*  
            🌍 *100% remoto*  

            ## 🔹 **Experiência Necessária:**  
            Mínimo de **5+ anos** com desenvolvimento web utilizando:  
            - *Java 11 ou superior*  
            - *Quarkus*  
            - *Angular 12*  
            - *Git*  

            ## 🔹 **Principais Responsabilidades:**  
            - Desenvolver e manter aplicações web robustas e escaláveis utilizando **Java 11+** e **Quarkus**.  
            - Criar interfaces dinâmicas e responsivas com **Angular 12**.  
            - Colaborar com equipes multidisciplinares para integrar soluções entre **front-end** e **back-end**.  
            - Otimizar código e resolver problemas de performance garantindo eficiência das aplicações.  
            - Implementar e gerenciar o controle de versionamento utilizando **Git**.  
            - _(Desejável)_ Contribuir com aplicações mobile usando **Ionic 3** e atuar com **scripts PL/SQL** para integrações.  

            ## 🔹 **Requisitos Técnicos:**  

            ✅ **Obrigatórios:**  
            - *Java 11 ou superior*  
            - *Quarkus*  
            - *Angular 12*  
            - *Git*  

            ⭐ **Diferenciais (Desejáveis):**  
            - *Ionic 3*  
            - *PL/SQL*  
            - *Python*  
            - *Kafka*  
            - *Jenkins*  

            ## 🔹 **Habilidades Pessoais:**  
            - Boa comunicação e capacidade de trabalhar em equipe.  
            - Proatividade e atenção aos detalhes.  
            - Capacidade de identificar e resolver problemas de performance.  
            - Independência e cumprimento de prazos.  

            ## 🔹 **Educação:**  
            - Graduação em *Ciência da Computação, Engenharia de Software, Sistemas de Informação* ou áreas correlatas.  

            ## 🔹 **Diferenciais:**  
            - Certificações Java ou frameworks correlatos.  
            - Conhecimento em *Scrum, Kanban* e práticas de *DevOps*.  

            📩 **Envie seu currículo ou indique um amigo:**  
            ✉️ **alexandre.sa@blendit.com**  
            📲 **(21) 99586-4554** (WhatsApp)  

            ✨ *Essa vaga foi compartilhada pela comunidade **Quintino Coders!***  
            `
    },

    {
        canal: process.env.CANAL_VAGA,
        horario: "15 13 * * 2", // Segunda-feira às 18:15
        mensagem:  `
            🌟 **Oportunidade para Consultores SAP!**

            A **GET Italent Consultoria** está buscando talentos para integrar seu time! Se você tem experiência em SAP e quer crescer em um ambiente dinâmico e desafiador, confira as vagas disponíveis:

            📌 **Vagas Abertas:**
            ☁️ *Analista de Cloud ALM SAP*
            💻 *Consultor Sênior Basis*
            🚀 *Consultor Sênior BTP*
            🔗 *Consultor Sênior CPI*
            🛡️ *Consultor Sênior GRC*
            🌤️ *ABAP Cloud*
            📊 *Consultor Sênior Analytics*

            📍 **Local:** *Presencial - Pinheiros*
            📆 **Duração do Projeto:** *1 ano*
            🕐 **Disponibilidade:** *Imediata*

            📩 **Envie seu currículo com pretensão salarial para:**  
            eliane.fontana@getitalent.com.br

            📢 *Indicações são bem-vindas!*  

            🚀 **Não perca essa oportunidade de impulsionar sua carreira!**

            ✨ *Essa vaga foi compartilhada pela comunidade **Quintino Coders!***  
            `
    },

    {
        canal: process.env.CANAL_CURSOS,
        horario: "15 20 * * 1", // Segunda-feira às 18:15
        mensagem:  `🛑 **Você sente que está ficando para trás no mundo da Inteligência Artificial?**  

            A IA está revolucionando o mercado de trabalho, e quem não souber utilizá-la pode perder grandes oportunidades. Mas e se você pudesse aprender de forma simples, prática e 100% gratuita?  

            📚 **Este é um CURSO GRATUITO, não um conteúdo pago!**  
            No curso **"Inteligência Artificial – 40 HORAS"**, oferecido pelo **Curso em Vídeo** com apoio da FIAP, Hostnet e Estudonauta, você vai aprender desde os fundamentos até o uso avançado de ferramentas como **ChatGPT e Gemini**.  

            💡 **Descubra como a IA pode aumentar sua produtividade, facilitar seus estudos e até impulsionar sua carreira.** Aprenda **Engenharia de Prompt** e domine as técnicas para extrair o melhor das inteligências artificiais.  

            📌 **O curso é acessível, completo e ainda conta com um assistente de IA para tirar dúvidas!**  
            👉 **Acesse agora e comece gratuitamente!**  
            https://www.cursoemvideo.com/curso/curso-gratis-de-inteligencia-artificial/

            **O futuro pertence a quem domina a IA. Não perca essa chance!**`
    },
    {
        canal: process.env.CANAL_CURSOS,
        horario: "15 20 * * 2", // Segunda-feira às 18:15
        mensagem:  ` 🛑 **Você já tentou aprender Git e GitHub, mas desistiu no meio do caminho?**  

            Se versionamento de código parece algo complexo e cheio de comandos difíceis, esse curso foi feito para você. **Aprenda Git e GitHub sem precisar decorar comandos!**  

            📚 **Este é um CURSO GRATUITO, não um conteúdo pago!**  
            No curso **"Git e GitHub [20 Horas]"**, você vai aprender na prática como gerenciar versões dos seus projetos sem precisar abrir o terminal.  

            💡 **Pare de perder código por falta de versionamento!**  
            Entenda como funciona o Git, crie repositórios no GitHub e aprenda a colaborar em equipe sem complicação.  

            📌 **O curso é acessível, 100% gratuito e perfeito para iniciantes!**  
            👉 **Acesse agora e comece gratuitamente!**  
            https://www.cursoemvideo.com/curso/curso-de-git-e-github/

            **Nunca mais perca seu código ou trabalhe sem controle de versões. Inscreva-se agora!**`
    },

    {
        canal: process.env.CANAL_CURSOS,
        horario: "15 20 * * 3", // Segunda-feira às 18:15
        mensagem: `🛑 **Você já tentou aprender JavaScript e ficou travado nos conceitos?**  

            JavaScript está em toda parte, mas aprender do jeito certo faz toda a diferença. Se você quer dominar essa linguagem sem complicação, este curso é para você!  

            📚 **Este é um CURSO GRATUITO, não um conteúdo pago!**  
            No curso **"JavaScript [40 Horas]"**, patrocinado pelo Google e ministrado pelo professor **Gustavo Guanabara**, você aprenderá desde os fundamentos até o uso prático de funções e ECMAScript.  

            💡 **Pare de se perder entre tutoriais soltos!**  
            Aqui, você vai aprender JavaScript de forma estruturada, com aulas bem explicadas e exercícios práticos para fixar o conteúdo.  

            📌 **O curso é acessível, 100% gratuito e perfeito para iniciantes!**  
            👉 **Acesse agora e comece gratuitamente!** 
            https://www.cursoemvideo.com/curso/javascript/ 

            **Domine JavaScript e abra portas para o desenvolvimento web. Comece hoje!**`
    },

    {
        canal: process.env.CANAL_CURSOS,
        horario: "15 20 * * 1", // Segunda-feira às 18:15
        mensagem: 
    },
    {
        canal: process.env.CANAL_CURSOS,
        horario: "15 20 * * 1", // Segunda-feira às 18:15
        mensagem: 
    },

    
    
];

client.once("ready", () => {
    console.log(`✅ Bot ${client.user.tag} está online!`);

    mensagensAgendadas.forEach(({ canal, horario, mensagem }) => {
        cron.schedule(
            horario,
            () => {
                const channel = client.channels.cache.get(canal);
                if (channel) {
                    channel.send(mensagem)
                        .then(() => console.log(`✅ Mensagem enviada para ${channel.name} (${canal})`))
                        .catch(err => console.error(`❌ Erro ao enviar mensagem para ${canal}:`, err));
                } else {
                    console.error(`❌ Canal não encontrado: ${canal}`);
                }
            },
            {
                timezone: "America/Sao_Paulo",
            }
        );
    });
});

// Login do bot
client
    .login(process.env.DISCORD_TOKEN)
    .then(() => console.log("✅ Login bem-sucedido! Bot online no Discord."))
    .catch((err) => console.error("❌ Erro ao fazer login no Discord:", err));
