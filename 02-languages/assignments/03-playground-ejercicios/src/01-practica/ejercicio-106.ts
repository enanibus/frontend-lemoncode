console.log("************** PRACTICE 106 *********************");

// Dices
function dices() {
  let dice1 = null;
  let dice2 = null;
  return {
    reset: function () {
      dice1 = null;
      dice2 = null;
      console.log("Dados reseteados!!");
    },
    throwDices: function () {
      console.log("Tira los dados, por favor!");
      dice1 = Math.floor(Math.random() * 6) + 1;
      dice2 = Math.floor(Math.random() * 6) + 1;
    },
    print: function () {
      console.log(
        "El resultado de tirar los dados es: " + dice1 + " y " + dice2
      );
      if (dice1 == 6 && dice2 == 6) {
        console.log("Enhorabuena, doble 6!!, tienes una tirada extra!");
      }
    },
  };
}

const dados = dices();
dados.reset();
dados.throwDices();
dados.print();


