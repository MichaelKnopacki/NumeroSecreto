alert('Boas vindas ao nosso site!');

let numeroSecreto = 5;
let chute;
let tentativas = 1;

while ( chute != numeroSecreto){
    chute = prompt ( 'Chute um número de 0 a 10: ');

        if ( chute == numeroSecreto){
           break;
        }else{
            if ( chute > numeroSecreto) {
                alert(`Você escolheu ${chute}, este número é maior que o número secreto`);
            } else {
            alert(`Você escolheu ${chute}, este número é menor que o número secreto`);
        }
        tentativas ++;
    }
}

if ( tentativas > 1){
    alert(`Você acertou o número secreto : ${numeroSecreto} , em ${tentativas} tentativas` )
} else{
    alert(`Você acertou o número secreto : ${numeroSecreto} , em ${tentativas} tentativa` )
}
