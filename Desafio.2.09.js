/* 
1) Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

    alert('Boas vindas ao nosso site!');

    dia = prompt ( ' Que dia é hoje? ' )
    console.log (dia);

    if ( dia == 'Domingo' || dia == 'Sábado'){
        alert(`Hoje é ${dia}, bom fim de semana`);
    } else{
        alert('Boa semana');
    }

2 ) Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

    alert('Boas vindas ao nosso site!');

    numero = prompt ( ' Digite um número: ' )
    console.log (numero);

    if ( numero > 0 ){
        alert(`Você escolheu o número ${numero}, este número é positivo`);
    } else{
        alert(`Você escolheu o número ${numero}, este número é negativo`);
    }

3 ) Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

    alert('Boas vindas ao nosso site!');

    numero = prompt ( ' Digite um número: ' )
    console.log (numero);

    if ( numero >= 100 ){
        alert('Parabéns, você venceu!');
    } else{
        alert('Tente novamente para ganhar');
    }

4 ) Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

    alert('Boas vindas ao nosso site!');

    saldo = 1000
    console.log (saldo);

    alert (`Seu saldo é R$ ${saldo}`);

5 ) Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome

    alert('Boas vindas ao nosso site!');

    nome = prompt ( 'Qual seu nome ? ');

    alert(`Seja bem vindo(a) ${nome}`);

6 ) Loops e tentativas -> Aula 02 - Novas condições

    alert('Boas vindas ao nosso site!');

    numeroSecreto = 5;
    chute = prompt ( 'Chute um número: ');

    if ( chute > numeroSecreto) {
        alert(`Você escolheu ${chute}, este número é maior que o número secreto`)
    }else {
        alert(`Você escolheu ${chute}, este número é menor que o número secreto`)
    }

7 ) Loops e tentativas -> Aula 03 Enquanto

    alert('Boas vindas ao nosso site!');

    let numeroSecreto = 5;
    let chute;
    let tentativas = 1;

    while ( chute != numeroSecreto){
        chute = prompt ( 'Chute um número de 0 a 10: ');

            if ( chute == numeroSecreto){
                alert(`Você acertou o número secreto : ${numeroSecreto} , em ${tentativas} tentativas` )
            }else{
                if ( chute > numeroSecreto) {
                    alert(`Você escolheu ${chute}, este número é maior que o número secreto`);
                } else {
                alert(`Você escolheu ${chute}, este número é menor que o número secreto`);
            }
            tentativas ++;
        }
    }

8 ) Desafio -> Loops e tentativas

    * Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número

    alert('Boas vindas ao nosso site!');

    let numero = 1;

    while ( numero <= 10){
        console.log (numero);
        numero++;
}

9 ) Desafio -> Loops e tentativas

    * Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

    alert('Boas vindas ao nosso site!');

    let numero = 10;

    while ( numero => 0){
        console.log (numero);
        numero--;
    }

10 ) Desafio -> Loops e tentativas

    * Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

    let numero = prompt ('Digite um número: ');

    while ( numero >= 0){
        console.log (numero);
        numero--;
    }
    

11 ) Desafio -> Loops e tentativas

    * Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

    let numero = prompt ('Digite um número: ');

    while ( 0 <= numero){
        console.log (numero);
        numero++;
    }


*/