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

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

12 ) Desafio -> Boas práticas de programação

Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

    alert('Boas práticas de Programação');
    console.log("Boas-vidas");

13 ) Desafio -> Boas práticas de programação

Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

    alert('Boas práticas de Programação');
    let nome = "Michael Carlos Knopacki";
    console.log("Ola," + nome);

14 ) Desafio -> Boas práticas de programação

Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

    let nome = "Michael Carlos Knopacki";
    alert(`Ola ${nome}`);

15 ) Desafio -> Boas práticas de programação

Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. 
Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

    let linguagem = prompt(" Qual linguagem de programação você mais gosta ?")
    console.log("A linguagem que mais gosto é: " + linguagem);

16 ) Desafio -> Boas práticas de programação

Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

    let valor1 = 5;
    let valor2 = 6;

    resultado = valor1 + valor2;

    console.log(" A soma de " + valor1 + " e " + valor2 + " é igual " + resultado )

17 ) Desafio -> Boas práticas de programação

Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

    let valor1 = 6;
    let valor2 = 5;

    resultado = valor1 - valor2;

    console.log(" A diferença de " + valor1 + " e " + valor2 + " é igual " + resultado )

18 ) Desafio -> Boas práticas de programação

Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

    idade = prompt ("Insira sua idade: ");

    if (idade >= 18){
        console.log (" Você é maior de idade");
    }else{
        console.log (" Você é menor de idade");
    }

19 ) Desafio -> Boas práticas de programação

Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

    numero = prompt("Digite um número : ")

    if( numero > 0){
        console.log(" Este número é positivo ");
    }else if (numero < 0 ){
        console.log(" Este número é negativo ");
    }else{
        console.log(" Você digitou zero ");
    } 

20 ) Desafio -> Boas práticas de programação

Use um loop while para imprimir os números de 1 a 10 no console.

    let numero = 0;

    while ( numero <= 10){
        console.log (numero);
        numero++;
    }

21 ) Desafio -> Boas práticas de programação

Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

    let nota = 5;

    if (nota >= 7){
        console.log ("Aprovado");
    }else {
        console.log ("Reprovado");
    }

22 ) Desafio -> Boas práticas de programação

Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

    numero = Math.random();
    console.log(numero);

23 ) Desafio -> Boas práticas de programação

Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

    numero = parseInt(Math.random() * 10 + 1 );
    console.log(numero);

24 ) Desafio -> Boas práticas de programação

    numero = parseInt(Math.random() * 1000 + 1 );
    console.log(numero);

Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
>>> Todos desafios com resolução em : https://github.com/alura-cursos/logica-js/tree/desafios

*/