alert('Boas vindas ao nosso site!');

let numeroMaximo = 10;
let numeroSecreto = parseInt( Math.random() * numeroMaximo + 1 );
let chute;
let tentativas = 1;

while ( chute != numeroSecreto){
    chute = prompt (`Chute um número de 0 a ${numeroMaximo}: `);

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


let qtdatentaivas = tentativas > 1 ? 'tentativas' : 'tentaiva';
alert(`Você acertou o número secreto : ${numeroSecreto} , em ${tentativas} ${qtdatentaivas}`);

