const options = ['Piedra', 'Papel', 'Tijeras'];
let player = null;
let bot = null;

const getBotValue = () => {
  return Math.round(Math.random() * 2);
};

/**
 *
 * @param {Number} indexBot (recibe el indice de el bot para compararlo con las opcione3)
 * @param {Number} indexPlayer (recibe el indice de el jugador para compararlo con las opcione3)
 * @param {Array} optionsGame (recibe el array de opciones)
 * @return {String} retorna un alert con el mensaje,
 */
const showWinMessage = (indexBot, indexPlayer, optionsGame) => {
  return alert(
    `Ganaste!!! \nEl bot elije ${optionsGame[indexBot]}. \nVos elejiste ${optionsGame[indexPlayer]}.`
  );
};

const startGame = () => {
  bot = getBotValue();
  player = parseInt(
    prompt(
      'Ingresa un numero del 0 al 2. \n Piedra = 0 \n Papel = 1 \n Tijeras = 2'
    )
  );

  if (player >= 0 && player <= 2) {
    switch (true) {
      case player === bot:
        alert('Empate');
        break;
      case player === 0 && bot === 2:
        showWinMessage(bot, player, options);
        break;
      case player === 1 && bot === 0:
        showWinMessage(bot, player, options);
        break;
      case player === 2 && bot === 1:
        showWinMessage(bot, player, options);
        break;
      default:
        alert('A la casa papi!');
        break;
    }
  } else {
    alert('Si queres jugar, ingresáaa bien zoquete');
  }
};

console.log(Math);
