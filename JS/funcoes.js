function somar(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 + num2;
    document.getElementById("resultado").innerHTML = "A soma dos números é: " + res;
}//fim do método

function subtrair(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 - num2;
    document.getElementById("resultado").innerHTML = "A subtração dos números é: " + res;
}//fim do método

function multiplicar(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 * num2;
    document.getElementById("resultado").innerHTML = "A multiplicação dos números é: " + res;
}//fim do método

function dividir(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    if(num2 <= 0){
        res = "Impossível dividir por número menores ou iguais a zero!";
    }else{
        res = num1 / num2;
    }
    //Faço a resposta
    document.getElementById("resultado").innerHTML = "A divisão dos números é: " + res;
}//fim do método

function tabuada(){
    var num1;
    var num2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    var resNum1 = "Tabuada do " + num1;
    var resNum2 = "Tabuada do " + num2;

    for(i = 0; i <= 10; i++){
        resNum1 += "\n" + num1 + " * " + i + " = " + (num1 * i);
        resNum2 += "\n" + num2 + " * " + i + " = " + (num2 * i);
    }

    document.getElementById("resultado").innerHTML = "\n" + resNum1 + "\n\n" + resNum2;
}//fim do método

function potencia(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    // Realizando o cálculo de potência
    res = Math.pow(num1, num2);//Usando a função Math.pow() para calcular a potência
    //Atualizando o resultado no documento
    document.getElementById("resultado").innerHTML = "A potência de " + num1 + " elevado a " + num2 + " é: " + res;
}//fim do método

function raiz(){
    var num1;//Declarando uma variável 
    var num2;
    var res1, res2; 
    //Coletando os dados dos campos
    num1 = parseFloat(document.getElementById("tpNum").value);
    num2 = parseFloat(document.getElementById("tsNum").value);
    //Calculando a raiz quadrada
    res1 = Math.sqrt(num1);
    res2 = Math.sqrt(num2);
    document.getElementById("resultado").innerHTML = "A raiz quadrada de " + num1 + " é " + res1  + "; a raiz quadrada de " + num2 + " é " + res2+".";
}//fim do método

function bhaskara(){
    var a;
    var b;
    var c;
    var delta;
    var x1;
    var x2;

    a = parseInt(document.getElementById("tpNum").value);
    b = parseInt(document.getElementById("tsNum").value);
    c = parseInt(document.getElementById("ttNum").value);

    //1ª Calcular delta
    delta = Math.pow(b,2) - 4 * a * c;

    //2ª Parte: Calcular x1 e x2 se delta não for negativo
    if(delta >= 0){
        x1 = (-b + Math.sqrt(delta))/(2*a);
        x2 = (-b - Math.sqrt(delta))/(2*a);
    }else{
        x1 = "Impossível calcular x1, pois o delta é negativo";
        x2 = "Impossível calcular x2, pois o delta é negativo";
    }

    //Mostrar na tela
    document.getElementById("resultado").innerHTML = 
    "\nDelta: " + delta + "\n\nX1: " + x1 + "\nX2: " + x2;
}//fim do método

function parImpar() {
    var num = document.getElementById("tpNum").value;
    num = parseFloat(num);
    
    //Verifica se o número é par ou ímpar
    if (num % 2 === 0) {
        document.getElementById("resultado").innerHTML = "Número par!";
    } else {
        document.getElementById("resultado").innerHTML = "Número ímpar!";
    }
}

function positivoNegativo() {
    var num = document.getElementById("tpNum").value;
    num = parseFloat(document.getElementById("tpNum").value);

    //Verifica se o número é positivo ou negativo
    if (num < 0) {
        document.getElementById("resultado").innerHTML = "Número negativo!";
    } else if (num > 0) {
        document.getElementById("resultado").innerHTML = "Número positivo!";
    } else {
        document.getElementById("resultado").innerHTML = "Zero!";
    }
}


