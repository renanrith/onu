// Immediately invoked function expression
// to not pollute the global scope
(function () {
  const wheel = document.querySelector(".wheel");
  const startButton = document.querySelector(".button");
  const display = document.querySelector("#display");
  const selecione = document.getElementById("paisesConselho");

  let deg = 0;
  let zoneSize = 24; // deg

  // Counter clockwise
  const symbolSegments = {
    1: "<img class='bandeira' src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' alt='Bandeira dos Estados Unidos'> <br> País: Estados Unidos <br> Mandato Atual: Permanente <br> Região: América do Norte <br> Grupos economicos: OTAN, NAFTA, OEA ",
    2: "<img class='bandeira' src='https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/11/bandeira-franca.jpg' alt='Bandeira da França'> <br> País: França <br> Mandato Atual: Permanente <br> Região: Europa <br> Grupos economicos: União Europeia, OMC, SCP, COI, OTAN, AEC, OIF, OCDE, Interpol, OIF ",
    3: "<img class='bandeira' src='https://static.todamateria.com.br/upload/ba/nd/bandeiradoreinounido-cke.jpg' alt='Bandeira do Reino Unido'> <br> País: Reino Unido <br> Mandato Atual: Permanente <br> Região: Europa <br> Grupos economicos: G8, G7, G20, OTAN, OCDE, OMC, OSCE",
    4: "<img class='bandeira' src='https://www.infoescola.com/wp-content/uploads/2017/04/gabao-bandeira.png' alt='Bandeira do Gabão'> <br> País: Gabão <br> Mandato atual: 2022-2023 <br> Região: África <br> Grupos econômicos: OMC, União Africana",
    5: "<img class='bandeira' src='https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg' alt='Bandeira de Gana'> <br> País: Gana <br> Mandato atual: 2022-2023 <br> Região: África <br> Grupos econômicos: OMC União Africana",
    6: "<img class='bandeira' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png' alt='Bandeira da Índia'> <br> País: Índia <br> Mandato atual: 2021-2022 <br> Região: Ásia-Pacífico <br> Grupos econômicos: Brics",
    7: "<img class='bandeira' src='https://s1.static.brasilescola.uol.com.br/be/e/emirados.jpg' alt='Bandeira dos Emirados Árabes Unidos'> <br> País: Emirados Árabes Unidos <br> Mandato atual: 2022-2023 <br> Região: Ásia-Pacífico <br> Grupos econômicos: OMC-OPEP",
    8: "<img class='bandeira' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1200px-Flag_of_Albania.svg.png' alt='Bandeira da Albânia'> <br> País: Albânia <br> Mandato atual: 2022-2023 <br> Região: Europa Oriental <br> Grupos econômicos:OMC ",
    9: "<img class='bandeira' src='http://geo5.net/imagens/Bandeira-do-Quenia.png ' alt='Bandeira do Quênia'> <br> País: Quênia <br> Mandato atual: 2021-2022 <br> Região: África Oriental <br> Grupos econômicos: União africana ",
    10: "<img class='bandeira' src='https://www.estudopratico.com.br/wp-content/uploads/2016/09/bandeira-irlanda-e1584543726944.jpg' alt='Bandeira da Irlanda'> <br> País: Irlanda <br> Mandato atual: 2021-2022 <br> Região: Europa <br> Grupos econômicos: União Europeia ",
    11: "<img class='bandeira' src='https://www.estudopratico.com.br/wp-content/uploads/2016/03/bandeira-noruega-significado-1200x675.jpg ' alt='Bandeira da Noruega'> <br> País: Noruega <br> Mandato atual: 2021-2022 <br> Região: Europa <br> Grupos econômicos: Nenhum",
    12: "<img class='bandeira' src='https://s3.static.brasilescola.uol.com.br/be/2021/11/bandeira-do-brasil.jpg' alt='Bandeira do Brasil'> <br> País: Brasil <br> Mandato atual: 2022-2023 <br> Região: América do sul <br> Grupos econômicos: Mercosul",
    13: "<img class='bandeira' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png' alt='Bandeira do México'> <br> País: México <br> Mandato atual: 2021-2022 <br> Região: América do norte <br> Grupos econômicos: Nafta",
    14: "<img class='bandeira' src='http://geo5.net/imagens/Bandeira-da-China-grande.png' alt='Bandeira da China'> <br> País: China <br> Mandato Atual: Permanente <br> Região: Ásia <br> Grupos economicos: BRICS, MNA",
    15: "<img class='bandeira' src='https://static.preparaenem.com/2022/02/bandeira-da-russia.jpg' alt='Bandeira da Rússia'> <br> País: Rússia <br> Mandato Atual: Permanente <br> Região: Europa Oriental/Ásia <br> Grupos economicos: U BRICS, Conselho da Europa, OSCE, APEC, CEI, EurAsEC,",
  };

  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    display.innerHTML = symbolSegments[winningSymbolNr];
  };

  startButton.addEventListener("click", () => {
    // Reset display
    display.innerHTML = "<img src='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/onu.jpg' alt='Bandeira da Onu' class='bandeira' /> <br>  País: <br> Mandato: <br> Região: <br> Grupos econômicos: ";
    // Disable button during spin
    startButton.style.pointerEvents = "none";
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(1000 + Math.random() * 1500);
    // Set the transition on the wheel
    wheel.style.transition = "all 3s ease-out";
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    selecione.selectedIndex = 0;
  });

  wheel.addEventListener("transitionend", () => {
    // Remove blur
    wheel.classList.remove("blur");
    // Enable button when spin is over
    startButton.style.pointerEvents = "auto";
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = "none";
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    // Calculate and display the winning symbol
    handleWin(actualDeg);
  });
})();
function myFunction() {
  var x = document.getElementById("paisesConselho").selectedIndex;

  const symbolSegments = {
    0: "<img src='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/onu.jpg' alt='Bandeira da Onu' class='bandeira' /> <br>  País: ",
    1: "<img class='bandeira' src='http://geo5.net/imagens/Bandeira-da-China-grande.png' alt='Bandeira da China'> <br> País: China <br> Mandato Atual: Permanente <br> Região: Ásia <br> Grupos economicos: BRICS, MNA",
    2: "<img class='bandeira' src='https://static.preparaenem.com/2022/02/bandeira-da-russia.jpg' alt='Bandeira da Rússia'> <br> País: Rússia <br> Mandato Atual: Permanente <br> Região: Europa Oriental/Ásia <br> Grupos economicos: U BRICS, Conselho da Europa, OSCE, APEC, CEI, EurAsEC,OTSC, OCX",
    3: "<img class='bandeira' src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' alt='Bandeira dos Estados Unidos'> <br> País: Estados Unidos <br> Mandato Atual: Permanente <br> Região: América do Norte <br> Grupos economicos: OTAN, NAFTA, OEA ",
    4: "<img class='bandeira' src='https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/11/bandeira-franca.jpg' alt='Bandeira da França'> <br> País: França <br> Mandato Atual: Permanente <br> Região: Europa <br> Grupos economicos: União Europeia, OMC, SCP, COI, OTAN, AEC, OIF, OCDE, Interpol, OIF ",
    5: "<img class='bandeira' src='https://static.todamateria.com.br/upload/ba/nd/bandeiradoreinounido-cke.jpg' alt='Bandeira do Reino Unido'> <br> País: Reino Unido <br> Mandato Atual: Permanente <br> Região: Europa <br> Grupos economicos: G8, G7, G20, OTAN, OCDE, OMC, OSCE",
    6: "<img class='bandeira' src='https://www.infoescola.com/wp-content/uploads/2017/04/gabao-bandeira.png' alt='Bandeira do Gabão'> <br>  País: Gabão <br> Mandato atual: 2022-2023 <br> Região: África <br> Grupos econômicos: OMC, União Africana",
    7: "<img class='bandeira' src='https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg' alt='Bandeira de Gana'> <br>  País: Gana <br> Mandato atual: 2022-2023 <br> Região: África <br> Grupos econômicos: OMC União Africana",
    8: "<img class='bandeira' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png' alt='Bandeira da Índia'> <br> País: Índia <br> Mandato atual: 2021-2022 <br> Região: Ásia-Pacífico <br> Grupos econômicos: Brics",
    9: "<img class='bandeira' src='https://s1.static.brasilescola.uol.com.br/be/e/emirados.jpg' alt='Bandeira dos Emirados Árabes Unidos'> <br> País: Emirados Árabes Unidos <br> Mandato atual: 2022-2023 <br> Região: Ásia-Pacífico <br> Grupos econômicos: OMC-OPEP",
    10: "<img class='bandeira' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/1200px-Flag_of_Albania.svg.png' alt='Bandeira da Albânia'> <br> País: Albânia <br> Mandato atual: 2022-2023 <br> Região: Europa Oriental <br> Grupos econômicos:OMC ",
    11: "<img class='bandeira' src='http://geo5.net/imagens/Bandeira-do-Quenia.png ' alt='Bandeira do Quênia'> <br> País: Quênia <br> Mandato atual: 2021-2022 <br> Região: África Oriental <br> Grupos econômicos: União africana ",
    12: "<img class='bandeira' src='https://www.estudopratico.com.br/wp-content/uploads/2016/09/bandeira-irlanda-e1584543726944.jpg' alt='Bandeira da Irlanda'> <br> País: Irlanda <br> Mandato atual: 2021-2022 <br> Região: Europa <br> Grupos econômicos: União Europeia ",
    13: "<img class='bandeira' src='https://www.estudopratico.com.br/wp-content/uploads/2016/03/bandeira-noruega-significado-1200x675.jpg ' alt='Bandeira da Noruega'> <br> País: Noruega <br> Mandato atual: 2021-2022 <br> Região: Europa <br> Grupos econômicos: Nenhum",
    14: "<img class='bandeira' src='https://s3.static.brasilescola.uol.com.br/be/2021/11/bandeira-do-brasil.jpg' alt='Bandeira do Brasil'> <br> País: Brasil <br> Mandato atual: 2022-2023 <br> Região: América do sul <br> Grupos econômicos: Mercosul",
    15: "<img class='bandeira' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png' alt='Bandeira do México'> <br> País: México <br> Mandato atual: 2021-2022 <br> Região: América do norte <br> Grupos econômicos: Nafta",

  };
  const winningSymbolNr = x;
  display.innerHTML = symbolSegments[winningSymbolNr];
}
