class Personagem {
    constructor(nome, descricao, imagem) {
      this.nome = nome;
      this.pontuacao = 0; 
    }
  
    adicionarPonto(pontos) {
      this.pontuacao += pontos;
    }
  }
  
  class Quiz {
    constructor() {
        this.personagens = [
            new Personagem("Guerreiro"),
            new Personagem("Mago"),
            new Personagem("Ladino"),
            new Personagem("Clérigo")
          ];
          
  
          this.perguntas = [
            {
              texto: "Qual desses objetos mágicos você escolheria?",
              opcoes: [
                { texto: "Um machado flamejante", pontos: [3,1,1,2] },
                { texto: "Um grimório antigo", pontos: [1,3,1,1] },
                { texto: "Um anel de invisibilidade", pontos: [1,1,3,1] },
                { texto: "Um amuleto sagrado", pontos: [2,1,1,3] }
              ]
            }

            // mais 9 perguntas e blablabla
         ];
  
        } 
    } 