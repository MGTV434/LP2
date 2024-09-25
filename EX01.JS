 
                               class homen {
    constructor(altura,pesso)
     {
        this.altura = altura;
        this.pesso = pesso;
        
    }
}

//Objetos em JavaScript, assiMcomo em muitas outraslinguagens de programação,podem ser comparados comobjetos na vida real. Oconceito de objetos emJavaScript pode serentedido com objetostangíveis da vida real//

var minhaMoto = new Object();
minhaMoto.fabricacao = "honda";
minhaMoto.modelo = "CG150";
minhaMoto.ano = "2022";


/*Atributos de uma classe
também conhecido como
propriedades, descrevem
um intervalo de valores
que as instâncias da
classe podem apresentar.
Um atributo é uma
variável que pertence a
um objeto. Os dados de um
objeto são armazenados
nos seus atributos. */

/*NA LINHA 33 E NA 34 TEMOS DOIS EXENPLOS DE ATRIBUTO ALTURA E , PESSO. */
class homen {
  constructor(altura, pesso) {
    this.altura = altura;
    this.pesso = pesso;
  }
}

/*AQUI ESRTÁ UM EXENPLO DE METODO */

var person = {
    nome : "maicon",
    sayName : function() {
        console.log("person.name");
    }
}
person.sayName();

/*aqui se enconta um exenplo de herança */


// Função construtora pai
function Animal(nome) {
  this.nome = nome;
}

Animal.prototype.falar = function() {
  console.log(`${this.nome} faz um barulho.`);
};

// Função construtora filho
function Cachorro(nome) {
  Animal.call(this, nome); // Chama o construtor pai
}

// Estabelece a herança
Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;

// Método específico do filho
Cachorro.prototype.falar = function() {
  console.log(`${this.nome} late.`);
};

// Uso
const meuCachorro = new Cachorro('Rex');
meuCachorro.falar(); // Rex late.


/*aqui está um exemplo de poliformismo */
// Classe base
class Animal {
  falar() {
      console.log('O animal faz um barulho.');
  }
}

// Classe derivada 1
class Cachorro extends Animal {
  falar() {
      console.log('O cachorro late.');
  }
}

// Classe derivada 2
class Gato extends Animal {
  falar() {
      console.log('O gato mia.');
  }
}

// Função que utiliza polimorfismo
function fazerAnimalFalar(animal) {
  animal.falar();
}

// Uso
const meuCachorro = new Cachorro();
const meuGato = new Gato();

fazerAnimalFalar(meuCachorro); // O cachorro late.
fazerAnimalFalar(meuGato);      // O gato mia.


/*aui está um exemplo de ligação dinamica */
void viver (mortal v) {
  v.viver ();
}