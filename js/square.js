// ele é um montador de elementos - ele sabe tudo que um quadrado precisa para ser um quadrado
// montar uma função que tem todas as propriedades que formam o quadrado
// no 2o. Orientação a Objeto  - Classe - mostra como um objeto deve ser 
// Classe como um gabarito
// Classe uma receita de um bolo
const Square = function (posX, posY, width, height, color, velocidade, image) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.velocidade = velocidade;
    this.image = image;
}