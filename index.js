require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const cron = require("node-cron");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

// Carregando os IDs dos canais do arquivo .env
const mensagensAgendadas = [
    {
        canal: process.env.CANAL_LIVRO,
        horario: "15 8 * * 1", // Segunda-feira às 8:15
        mensagem: `🧠 **A maior barreira na programação está na sua mente.**  

Programar envolve errar, quebrar a cabeça e tentar de novo. Mas sua mente pode ser treinada para aguentar tudo isso com resiliência.  

📘 *Nada Pode Me Ferir*  
Autor: David Goggins  

💡 Um livro sobre como superar limites, dominar o desconforto e transformar dor em foco. A força mental que você precisa para encarar qualquer código.  

🔗 [Garanta o seu agora na Amazon!](https://amzn.to/3EJjw0B)  
🖼️ Imagem: https://cdn.discordapp.com/attachments/1338990204870201436/1339000900844523593/2e071cc5430ede828ee7d67ef40bcdeb.jpg?ex=67ad2144&is=67abcfc4&hm=70ebae4b47660526ef573e10ba43988348b5f9826f63b65a98ab7bde7c61b4b6&  

**Você é o único obstáculo entre você e seu futuro.**`
    },

    {
        canal: process.env.CANAL_LIVRO,
        horario: "15 8 * * 2", // Segunda-feira às 8:15
        mensagem: `💰 **Você está construindo uma carreira ou só apagando incêndios?**  

📘 *O Homem Mais Rico da Babilônia*  
Autor: George S. Clason  

💡 Aprenda os fundamentos da riqueza e aplique no seu crescimento como dev. Entenda como investir no seu conhecimento e colher resultados reais.  

🔗 [Garanta o seu agora na Amazon!](https://amzn.to/3WYYy4p)  
🖼️ Imagem: https://cdn.discordapp.com/attachments/1338990204870201436/1339001041366024193/99d43d0914919e0b30dfba93c21829fa.jpg?ex=67ad2165&is=67abcfe5&hm=023d13b31601dc3eba62f129b9c97af2ed1bef7ef44d0cbbce3d1215f2052726&  

**Invista na sua mente antes de qualquer coisa.**`
    },

    {
        canal: process.env.CANAL_LIVRO,
        horario: "15 8 * * 3", // Segunda-feira às 8:15
        mensagem: `🙏 **A gratidão pode acelerar sua evolução como programador.**  

📘 *#Um Dia Sem Reclamar*  
Autores: Davi Lago e Marcelo Galuppo  

💡 Em vez de focar no que dá errado, celebre cada linha que funciona. Gratidão muda seu foco e multiplica sua motivação.  

🔗 [Garanta o seu agora na Amazon!](https://amzn.to/41cbXIW)  
🖼️ Imagem: https://cdn.discordapp.com/attachments/1338990204870201436/1339001130625011884/ff4802eaf403a340da1654c421b4cf36.jpg?ex=67ad217a&is=67abcffa&hm=a2871fd8d0c0fbd75fa2166c165ea8be7e848b3ef13d2940e6fa1fe70c78fe66&  

**Você progride mais quando reconhece o valor de cada passo.**`
    },
    {
        canal: process.env.CANAL_LIVRO,
        horario: "15 8 * * 4", // Segunda-feira às 8:15
        mensagem: `⚡ **Você está programando para agradar os outros ou para evoluir de verdade?**  

📘 *A Coragem de Não Agradar*  
Autores: Ichiro Kishimi e Fumitake Koga  

💡 Liberte-se da dependência de aprovação. Aprenda a escrever, errar e crescer com confiança e autonomia.  

🔗 [Garanta o seu agora na Amazon!](https://amzn.to/42SJpFA)  
🖼️ Imagem: https://cdn.discordapp.com/attachments/1338990204870201436/1339001240557846579/b64110965fc784d955efd84ecabc0f4f.jpg?ex=67ad2195&is=67abd015&hm=ec4dd047e7d2f608d675c65831352a316db805f79e1aa53687e3387055b46e11&  

**Cresça no seu ritmo. Seja fiel ao seu processo.**`
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
        horario: "15 8 * * 6", // Segunda-feira às 8:15
        mensagem: `🧠 **Suas decisões de hoje moldam sua carreira na programação.**  

📘 *A Psicologia Financeira*  
Autor: Morgan Housel  

💡 Programar bem é sobre escolhas inteligentes — no código, na rotina e nas finanças. Aprenda como atitudes simples constroem resultados extraordinários.  

🔗 [Garanta o seu agora na Amazon!](https://amzn.to/4jQe1NP)  

**O segredo não está no recurso, mas em como você usa.**`
    },
    {
        canal: process.env.CANAL_LIVRO,
        horario: "15 8 * * 0", // Segunda-feira às 8:15
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
        horario: "15 18 * * *", // Segunda-feira às 18:15
        mensagem: `
              💻 **Estágio em Segurança da Informação**

📍 Formato: 100% Remoto  
🎓 Nível: Estágio  
📅 Jornada: Parcial (compatível com ensino superior)

## 📋 Requisitos:
- Estar cursando *Sistemas de Informação, Ciência da Computação, Segurança da Informação* ou áreas correlatas;  
- Boa capacidade de comunicação escrita e verbal;  
- Facilidade para trabalhar em equipe e vontade de aprender.

📩 Candidatar-se no link:  
🔗 https://cortex.gupy.io/jobs/8842047

✨ *Essa oportunidade foi compartilhada pela comunidade **Quintino Coders!***  
🚀 Entre no nosso Discord para mais vagas, conteúdos e apoio para sua carreira em tecnologia!
            `
    },
    {
        canal: process.env.CANAL_VAGA,
        horario: "15 8 * * *", // Segunda-feira às 18:15
        mensagem: `
            💻 **Estágio em Desenvolvimento de Software**

📍 Formato: 100% Remoto  
🎓 Nível: Estágio  
📅 Jornada: Parcial (compatível com ensino superior)

## 👀 Quem buscamos?
Estudantes apaixonados por **tecnologia e inovação**, que queiram aprender e crescer em um ambiente desafiador.  
Se você é **curioso, proativo** e gosta de resolver problemas, essa vaga pode ser perfeita pra você!

📩 Envie seu **currículo e histórico escolar** para:  
✉️ rh@intuitivecare.com

✨ *Essa oportunidade foi compartilhada pela comunidade **Quintino Coders!***  
🚀 Entre no nosso Discord para mais vagas, conteúdos e apoio para sua carreira em tecnologia!  
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
        canal: process.env.CANAL_VAGA,
        horario: "15 13 * * 3", // Segunda-feira às 18:15
        mensagem: ` 🚀 **Oportunidade para Analista de Segurança Cibernética!**  

📍 **Formato:** *100% Remoto*  
💼 **Nível:** *Júnior / Pleno*  
🕒 **Jornada:** *Full-Time (CLT)*  
💰 **Faixa Salarial:** *Negociável*  

## 📋 **Requisitos:**  
✅ **Conhecimento em Segurança Cibernética**: Práticas e ferramentas de segurança.  
✅ **Experiência com Ferramentas de Segurança**: Firewalls, sistemas de detecção de intrusão e software antivírus.  
✅ **Habilidades de Programação**: Conhecimento em *Python* para automação de tarefas de segurança.  
✅ **Trabalho em Equipe**: Capacidade de colaboração e autonomia.  
✅ **Resolução de Problemas**: Habilidade analítica e capacidade de abstração.  

## 🏆 **Diferenciais:**  
⭐ **Experiência em Ambientes de Nuvem** (*GCP*).  
⭐ **Familiaridade com Ferramentas de Monitoramento e Pentest** (*Metasploit, Burp Suite*).  
⭐ **Experiência com Frameworks de Pentest** (*PTES*).  
⭐ **Certificações**: *CISSP, CISM, OSCP, CEH* (opcional).  

## 🚀 **Benefícios:**  
✅ **Auxílio viagem**  
✅ **Vale refeição**  
✅ **Assistência médica**  
✅ **Adiantamento de salário**  
✅ **Assistência odontológica**  
✅ **Auxílio home-office**  
✅ **Creditas**  
✅ **TotalPass**  

📩 **Candidatar-se no link:**  
🔗 [Inscrição](https://coodesh.com/jobs/analista-de-seguranca-cibernetica-181035967)  

✨ *Essa vaga foi compartilhada pela comunidade **Quintino Coders!***  
🚀 Junte-se ao nosso Discord para mais oportunidades e conteúdos exclusivos!
`
    },
{
        canal: process.env.CANAL_VAGA,
        horario: "15 14 * * 3", // Segunda-feira às 18:15
        mensagem: `
🚀 **Oportunidade para Analista de Segurança Cibernética!**  

📍 **Formato:** *100% Remoto*  
💼 **Nível:** *Júnior / Pleno*  
🕒 **Jornada:** *Full-Time (CLT)*  
💰 **Faixa Salarial:** *Negociável*  

## 📋 **Requisitos:**  
✅ **Conhecimento em Segurança Cibernética**: Práticas e ferramentas de segurança.  
✅ **Experiência com Ferramentas de Segurança**: Firewalls, sistemas de detecção de intrusão e software antivírus.  
✅ **Habilidades de Programação**: Conhecimento em *Python* para automação de tarefas de segurança.  
✅ **Trabalho em Equipe**: Capacidade de colaboração e autonomia.  
✅ **Resolução de Problemas**: Habilidade analítica e capacidade de abstração.  

## 🏆 **Diferenciais:**  
⭐ **Experiência em Ambientes de Nuvem** (*GCP*).  
⭐ **Familiaridade com Ferramentas de Monitoramento e Pentest** (*Metasploit, Burp Suite*).  
⭐ **Experiência com Frameworks de Pentest** (*PTES*).  
⭐ **Certificações**: *CISSP, CISM, OSCP, CEH* (opcional).  

## 🚀 **Benefícios:**  
✅ **Auxílio viagem**  
✅ **Vale refeição**  
✅ **Assistência médica**  
✅ **Adiantamento de salário**  
✅ **Assistência odontológica**  
✅ **Auxílio home-office**  
✅ **Creditas**  
✅ **TotalPass**  

📩 **Candidatar-se no link:**  
🔗 [Inscrição](https://coodesh.com/jobs/analista-de-seguranca-cibernetica-181035967)  

✨ *Essa vaga foi compartilhada pela comunidade **Quintino Coders!***  
🚀 Junte-se ao nosso Discord para mais oportunidades e conteúdos exclusivos! `
    }
    
    
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
