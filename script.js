const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você se depara com uma foto de um casal homossexual nas redes sociais e, ao ler os comentários, encontra diversas manifestações de julgamento e crítica. o que você pensa a respeito?",
        alternativas: [
            {
                texto: "Eu acho que isso mostra como a intolerância ainda está presente em muitas pessoas. Infelizmente, tem muita gente que não aceita a diversidade e sente que tem o direito de julgar, o que é bem errado. As redes sociais acabam amplificando esse tipo de comentário, mas também podem ser usadas para ensinar as pessoas sobre respeito e igualdade."
                afirmacao: "Você acredita que a mudança depende de cada um de nós. A gente precisa aprender mais sobre empatia, ser mais educado e combater o preconceito no dia a dia, tanto online quanto offline, para que todo mundo, independentemente da sexualidade, seja respeitado."
            },
            {
                texto: "Acho que as redes sociais são um lugar onde as pessoas têm opiniões bem diferentes, mas também vejo isso como uma chance de normalizar o amor entre pessoas do mesmo sexo. Mesmo com comentários negativos, eu acredito que quanto mais visibilidade e apoio as pessoas LGBTQIA+ tiverem, mais a sociedade vai aprender a respeitar e aceitar."
                afirmacao: "Você vê as redes sociais como uma ferramenta para aumentar a visibilidade e o respeito, acreditando que, com o tempo, a sociedade vai se tornar mais aberta e menos preconceituosa, ajudando a reduzir esses julgamentos."
            }
        ]
    },
    {
        enunciado: "Você posta uma foto em seu Instagram, porém é alvo de haters. Como você reage?
        alternativas: [
            {
                texto: "Ignorar e não responder aos haters",
                afirmacao:  "Optar por não responder aos haters pode ajudar a manter a saúde mental, evitando alimentar um ciclo de negatividade que pode afetar emocionalmente."
            },
            {
                texto: "Responder de forma educada e construtiva",
                afirmacao: "Responder com empatia e respeito pode transformar uma situação negativa em uma oportunidade de diálogo e reflexão, além de reforçar a importância de manter um ambiente saudável nas redes sociais.",
        ]
    },
    {
        enunciado: "Você está na escola com seus amigos, assistindo a vídeos no tik tok, e aparece um vídeo de alguém acima do peso, alguns de seus amigos querem comentar algo inapropriado que claramente poderá entristecer a pessoa do vídeo, o que você faz?
        alternativas: [
            {
                texto: "Eu falaria para eles pararem e os lembraria de que, antes de comentar qualquer coisa, é importante pensar no impacto que isso pode ter na pessoa do vídeo. Ninguém merece ser alvo de piadas por causa do corpo, e a gente tem que ser mais consciente sobre o que compartilhamos nas redes.",
                afirmacao: "Você entende que as palavras podem causar muito mais impacto do que imaginamos, e acredita que a mudança começa com atitudes mais conscientes. A sua intervenção pode ajudar a criar um ambiente mais respeitoso online e nas interações do dia a dia."
            },
            {
                texto: "Eu ficaria na minha e não diria nada. Sei que é errado, mas, às vezes, é difícil interromper uma piada ou se opor ao que os outros estão fazendo, principalmente para não causar um desconforto no grupo."
                afirmacao: "Você percebe que, embora a pressão social possa fazer você hesitar, é importante refletir sobre o que pode ser feito para não alimentar comportamentos tóxicos. Isso te faz pensar sobre como seria mais fácil fazer a coisa certa se tivéssemos mais coragem para agir contra o que é errado."
        ]
    },
    {
        enunciado: "Você acompanha um influencer nas redes sociais, o mesmo parece ter uma vida perfeita, corpo bem desenvolvido, vida social ativa e vida profissional eficiente. Como você se sente sobre isso? Isso te afeta emocionalmente?",
        alternativas: [
            {
                texto: "Você se sente motivado e inspirado, vendo essas conquistas, e isso te impulsiona a melhorar sua própria vida em certos aspectos. Para você, não é algo que te afeta negativamente, porque você não se importa tanto com o que os outros mostram nas redes sociais."
                afirmacao: "Ver a vida de outras pessoas de forma positiva pode ser uma fonte de inspiração, mas se você não se importa tanto com os padrões impostos online, consegue se concentrar em sua própria jornada e não se deixar afetar pelas comparações."
            },
            {
                texto: "Você sente que as comparações estão afetando sua autoestima, fazendo você se questionar sobre sua própria vida e suas realizações."
                afirmacao: As comparações podem ser prejudiciais à saúde mental, pois nem sempre a realidade da pessoa é aquilo que ela mostra online, e isso pode criar um padrão irreal e difícil de alcançar."
            }
        ]
    },
    {
        enunciado: "Você está rolando o Instagram e se depara com uma foto de um churrasco que seu amigo organizou, onde está o seu grupo de amigos inteiro, mas você não foi convidado. Como você se sente ao ver isso e como reage?",
        alternativas: [
            {
                texto: "Você se sente chateado e excluído, questionando por que não foi convidado. Isso te afeta emocionalmente, principalmente porque as redes sociais tendem a amplificar essas situações, fazendo você se comparar e se sentir ainda mais isolado."
                afirmacao: "Ver momentos importantes sendo compartilhados nas redes sociais pode gerar sentimentos de rejeição e insegurança, especialmente se você sentir que está sendo deixado de fora. Isso pode afetar a saúde emocional, criando uma sensação de inadequação."


            {
                texto: "Você não se sente muito afetado, entende que nem sempre pode estar presente em todos os eventos e segue em frente. Nas redes sociais, você prefere se focar no que te traz felicidade e não se deixar abalar pelas escolhas alheias.",
                afirmacao: "Desapegar das comparações e perceber que as redes sociais mostram apenas um recorte da vida dos outros pode ser um passo importante para proteger a saúde emocional, evitando que momentos isolados te afetem de forma negativa."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
