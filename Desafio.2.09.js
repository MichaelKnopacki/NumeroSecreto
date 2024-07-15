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

*/