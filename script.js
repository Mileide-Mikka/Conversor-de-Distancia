//variavel que armazena a distanci
let distanceLY = prompt("Qual a distância em Anos Luz?");

let chosenOption = prompt("Para qual unidade devo converter?\n1. Parse(pc)\n2. unidade Astronômica" + "\n3. Quilômetros (Km)\n\n(Digite o numero da opção desejada)");

let chosenUnity; // variavel para guarda a unidade escolhida pelo usuario
let convertedDistance; // variavel para guarda a distancia convertida

switch(chosenOption) {
    case "1":
        chosenUnity = "Parsec";
        convertedDistance = distanceLY * 0.306601;
        break
        
    case "2":
        chosenUnity = "Unidade Astronômica";
        convertedDistance = distanceLY * 63241.1;
        break

    case "3":
        chosenUnity = "Quilômetros";
        convertedDistance = distanceLY * 9.5 * Math.pow(10, 12); //Math.pow vai converter o valor para conseguir sua elevação (numero elevado a x)
        break

    default:
        chosenUnity = "Unidade não indentificada";
        convertedDistance = "Conversão fora do padrão";
}

alert("A distância em Anos Luz: " + distanceLY + "\n" + chosenUnity + ":" + convertedDistance);