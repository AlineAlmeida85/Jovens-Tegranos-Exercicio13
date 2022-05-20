function calcular() {
    

    num1 = document.getElementById("input1").value;
    num2 = document.getElementById("input2").value;


    if (num1 > 100) {
        valorA = (num1 - 100) * 2.0 + 50.00;        
    } else {
        valorA = "R$50.00";
    }  
    
    if (num2 > 100) {
        valorB = (num2 - 100) * 2.0 + 50.00;        
    } else {
        valorB = "R$50.00";
    }

    valor1.innerHTML = valorA.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    valor2.innerHTML = valorB.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
   
}




    
    

