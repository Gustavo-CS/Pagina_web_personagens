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
    "pergunta 1",
    ["1a", "b", "c", "d"],
    [
      { "Guerreiro": 3, "Bardo": 2, "Clérigo": 1 },
      { "Bardo": 3, "Ladino": 2, "Guerreiro": 1 },
      { "Ladino": 3, "Guerreiro": 2, "Bardo": 1 },
      { "Guerreiro": 3, "Ladino": 2, "Bardo": 1 },
    ],
  ),
  new Pergunta(
    "pergunta 2",
    ["2a", "b", "c", "d"],
    [
      { "Clérigo": 3, "Mago": 2, "Guerreiro": 1 },
      { "Clérigo": 3, "Bardo": 2, "Mago": 1 },
      { "Mago": 3, "Clérigo": 2, "Ladino": 1 },
      { "Mago": 3, "Clérigo": 2, "Ladino": 1 },
    ],
  ),
  new Pergunta(
    "pergunta 3",
    ["3a", "b", "c", "d"],
    [
      { "Guerreiro": 3, "Bardo": 2, "Clérigo": 1 },
      { "Bardo": 3, "Ladino": 2, "Guerreiro": 1 },
      { "Ladino": 3, "Guerreiro": 2, "Bardo": 1 },
      { "Guerreiro": 3, "Ladino": 2, "Bardo": 1 },
    ],
  ),
  new Pergunta(
    "pergunta 4",
    ["4a", "b", "c", "d"],
    [
      { "Clérigo": 3, "Mago": 2, "Guerreiro": 1 },
      { "Clérigo": 3, "Bardo": 2, "Mago": 1 },
      { "Mago": 3, "Clérigo": 2, "Ladino": 1 },
      { "Mago": 3, "Clérigo": 2, "Ladino": 1 },
    ],
  ),
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