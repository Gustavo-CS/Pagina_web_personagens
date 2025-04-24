class Personagem {
  constructor(nome, descricao, imagem) {
    this.nome = nome;
    this.pontuacao = 0;
  }
}

var personagens = [
  new Personagem("Guerreiro"),
  new Personagem("Mago"),
  new Personagem("Ladino"),
  new Personagem("Clérigo"),
  new Personagem("Bárbaro"),
  new Personagem("Bardo"),
];

class Pergunta {
  constructor(texto, opcoes, pontos) {
    this.texto = texto;
    this.opcoes = opcoes;
    this.pontos = pontos;
  }
}

var perguntas = [
  new Pergunta(
    "Qual dessas atividades você mais gostaria de fazer?",
    ["Lutar com honra em um torneio", "Decifrar um grimório antigo", "Explorar masmorras secretas"],
    [
      { "Guerreiro": 3, "Bárbaro": 2, "Clérigo": 1 },
      { "Mago": 3, "Clérigo": 2, "Bardo": 1 },
      { "Ladino": 3, "Guerreiro": 2, "Mago": 1 }
    ]
  ),
  new Pergunta(
    "Você encontra um obstáculo no caminho. Como resolve?",
    ["Arrebenta tudo na força bruta", "Usa uma ilusão mágica", "Tenta desarmar silenciosamente"],
    [
      { "Bárbaro": 3, "Guerreiro": 2, "Ladino": 1 },
      { "Mago": 3, "Bardo": 2, "Clérigo": 1 },
      { "Ladino": 3, "Bardo": 2, "Guerreiro": 1 }
    ]
  ),
  new Pergunta(
    "Em uma taverna, você prefere...",
    ["Contar histórias e animar o lugar", "Observar quieto e ouvir conversas", "Conversar sobre batalhas e glórias"],
    [
      { "Bardo": 3, "Clérigo": 2, "Mago": 1 },
      { "Ladino": 3, "Mago": 2, "Bardo": 1 },
      { "Guerreiro": 3, "Bárbaro": 2, "Clérigo": 1 }
    ]
  ),
  new Pergunta(
    "Um inimigo aparece de surpresa. Sua reação é...",
    ["Partir pra cima com tudo", "Atacar com magia à distância", "Esperar o momento certo pra agir"],
    [
      { "Bárbaro": 3, "Guerreiro": 2, "Ladino": 1 },
      { "Mago": 3, "Clérigo": 2, "Bardo": 1 },
      { "Ladino": 3, "Bardo": 2, "Mago": 1 }
    ]
  ),
  new Pergunta(
    "Qual dessas qualidades te define melhor?",
    ["Sabedoria", "Coragem", "Astúcia"],
    [
      { "Clérigo": 3, "Mago": 2, "Bardo": 1 },
      { "Guerreiro": 3, "Bárbaro": 2, "Clérigo": 1 },
      { "Ladino": 3, "Bardo": 2, "Mago": 1 }
    ]
  ),
  new Pergunta(
    "Você precisa escolher uma arma. Qual prefere?",
    ["Espada e escudo", "Cajado arcano", "Adagas envenenadas"],
    [
      { "Guerreiro": 3, "Bárbaro": 2, "Ladino": 1 },
      { "Mago": 3, "Clérigo": 2, "Bardo": 1 },
      { "Ladino": 3, "Bardo": 2, "Guerreiro": 1 }
    ]
  ),
  new Pergunta(
    "Alguém está ferido no seu grupo. Você...",
    ["Usa magia de cura", "Canta para levantar o moral", "Segue em frente com frieza"],
    [
      { "Clérigo": 3, "Mago": 2, "Bardo": 1 },
      { "Bardo": 3, "Clérigo": 2, "Mago": 1 },
      { "Ladino": 3, "Bárbaro": 2, "Guerreiro": 1 }
    ]
  ),
  new Pergunta(
    "Qual seu maior medo?",
    ["Perder a razão", "Ser ignorado", "Ser traído por aliados"],
    [
      { "Mago": 3, "Clérigo": 2, "Bardo": 1 },
      { "Bardo": 3, "Ladino": 2, "Clérigo": 1 },
      { "Ladino": 3, "Guerreiro": 2, "Bárbaro": 1 }
    ]
  ),
  new Pergunta(
    "Na hora de agir, você prefere...",
    ["Força e impulso", "Planejamento e estratégia", "Inspirar os outros com palavras"],
    [
      { "Bárbaro": 3, "Guerreiro": 2, "Ladino": 1 },
      { "Mago": 3, "Clérigo": 2, "Guerreiro": 1 },
      { "Bardo": 3, "Clérigo": 2, "Mago": 1 }
    ]
  ),
  new Pergunta(
    "Você foi chamado para uma missão. Quem quer ao seu lado?",
    ["Um mago sábio e calmo", "Um bardo carismático", "Um guerreiro destemido"],
    [
      { "Mago": 3, "Clérigo": 2, "Bardo": 1 },
      { "Bardo": 3, "Ladino": 2, "Clérigo": 1 },
      { "Guerreiro": 3, "Bárbaro": 2, "Ladino": 1 }
    ]
  )
];



function reiniciarPage() {
  const inicial = document.getElementById('tela-inicial');
  const questionario = document.getElementById('questionario');
  const resultado = document.getElementById('resultado');

  inicial.style.display = 'block';
  questionario.style.display = 'none';
  resultado.style.display = 'none';
  for (let i = 0; i < personagens.length; i++) {
    personagens[i].pontuacao = 0
  }
}

function iniciarQuiz() {
  const inicial = document.getElementById('tela-inicial');
  const questionario = document.getElementById('questionario');
  inicial.style.display = 'none';
  questionario.style.display = 'block';

  gerarQuiz(0);
}

function calcPontuacao(num, pontuacao) {

  return function () {
    for (let nome in pontuacao) {
      let personagem = personagens.find(p => p.nome === nome);
      personagem.pontuacao += pontuacao[nome];
    }
    gerarQuiz(num);
  };
}

function gerarQuiz(num) {
  if (num >= perguntas.length) {
    return gerarResultado();
  }

  const questionario = document.getElementById('questionario');

  questionario.querySelector('h1').textContent = "Pergunta "+ (num + 1);
  questionario.querySelector('p').textContent = perguntas[num].texto;

  const botoes = questionario.querySelectorAll('button');
  for (let j = 0; j < botoes.length; j++) {
    botoes[j].textContent = perguntas[num].opcoes[j];
    botoes[j].onclick = calcPontuacao(num + 1, perguntas[num].pontos[j]);
  }
}

function gerarResultado() {
  const resultado = document.getElementById('resultado');
  const questionario = document.getElementById('questionario');
  resultado.style.display = 'block';
  questionario.style.display = 'none';
  let youIs = personagens.reduce((max, atual) => atual.pontuacao > max.pontuacao ? atual : max);
  resultado.querySelector('h1').textContent = youIs.nome
}