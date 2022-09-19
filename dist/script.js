var carta1 = {
  nome: "Geralt de Rivia",
  imagem:
    "https://meups.com.br/wp-content/uploads/2018/03/the-witcher-3-900x503.jpg",
  atributos: {
    Força: 8,
    Destreza: 9,
    Constituição: 7,
    Sabedoria: 6,
    Carisma: 4,
    Inteligência: 5
  }
};

var carta2 = {
  nome: "Cirilla Fiona Elen Riannon",
  imagem:
    "http://pm1.narvii.com/6396/b7e5ab244a5ca8bdb74481b3bfd80f1505dec961_00.jpg",
  atributos: {
    Força: 5,
    Destreza: 10,
    Constituição: 6,
    Sabedoria: 6,
    Carisma: 4,
    Inteligência: 8
  }
};

var carta3 = {
  nome: "Barão Sanguinário",
  imagem:
    "http://pm1.narvii.com/7117/a84e1f13211575b9efe7d24c74e887291a728b6cr1-1024-850v2_00.jpg",
  atributos: {
    Força: 9,
    Destreza: 4,
    Constituição: 8,
    Sabedoria: 6,
    Carisma: 9,
    Inteligência: 3
  }
};

var carta4 = {
  nome: "Yennefer de Vengerberg",
  imagem:
    "https://cdn.80.lv/api/upload/post/6714/images/5d2da6ccb19b4/widen_1220x0.jpg",
  atributos: {
    Força: 4,
    Destreza: 5,
    Constituição: 4,
    Sabedoria: 8,
    Carisma: 8,
    Inteligência: 10
  }
};

var carta5 = {
  nome: "Eredin Bréacc Glas",
  imagem:
    "https://i.pinimg.com/474x/e8/d6/23/e8d623aa3ce0bafcbd28a047bacc656c.jpg",
  atributos: {
    Força: 10,
    Destreza: 6,
    Constituição: 8,
    Sabedoria: 5,
    Carisma: 5,
    Inteligência: 5
  }
};

// Objetos dentro de um Array:

var cartas = [carta1, carta2, carta3, carta4, carta5];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 5);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 5);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 5);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
  exibirCartaMaquina();
}

function obterAtributoSelecionado() {
  var radiosAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radiosAtributos.length; i++) {
    if (radiosAtributos[i].checked == true) {
      return radiosAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obterAtributoSelecionado();
  //var elementoResultado = document.getElementById("resultado");
  //var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  //var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você venceu!</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado =
      "<p class='resultado-final'>Não foi dessa vez! A vitória foi do seu adversário.</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empate!</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id= 'opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }

  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  //divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = '<div = id="opcoes" class="carta-status">';
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p input type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }

  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

// Por meio dos pontos '.' é possível "navegar" de objeto para objeto.

//Math.random() É UMA FUNCTION que retorna um número pseudo-aleatório no intervalo [0, 1] , ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado.

//'while' = enquanto. É uma estrutura de laço e, lembra, de alguma forma, o 'for' só que ao invés de executar uma só vez, executa ENQUANTO for verdade, não só se UMA vez for verdade.

// Na function exibirOpcoes() o 'for' é o 'para cada' e o 'in' é o 'dentro de'.

// Sempre lembrar de NUNCA misturar aspas duplas " com as aspas simpes '.