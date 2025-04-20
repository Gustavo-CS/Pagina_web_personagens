class Personagem {
    constructor(nome, descricao, imagem) {
      this.nome = nome;
      this.descricao = descricao;
      this.pontuacao = 0;
    }
  
    adicionarPonto(pontos) {
      this.pontuacao += pontos;
    }
  }
  
  class Quiz {
    constructor() {
        this.personagens = [
            new Personagem("Hermione Granger", "Inteligente e determinada. Ama livros e justiça."),
            new Personagem("Harry Potter", "Corajoso, leal e sempre pronto pra lutar pelo bem."),
            new Personagem("Draco Malfoy", "Astuto e ambicioso. Um verdadeiro sonserino."),
            new Personagem("Ron Weasley", "Leal, engraçado e sempre ao lado dos amigos, mesmo nas horas mais difíceis.")
          ];
          
  
          this.perguntas = [
            {
              texto: "O que você faria em seu tempo livre em Hogwarts?",
              opcoes: [
                { texto: "Ler livros na biblioteca", pontos: [3,1,2,1] },
                { texto: "Praticar Quadribol", pontos: [1,3,2,2] },
                { texto: "Planejar como liderar sua casa à vitória", pontos: [2,1,3,1] }
              ]
            }
         ];
  
        } 
    } 