function BinaryToDecimal() {
    var binary = document.getElementById("binary").value;
    var decimal = parseInt(binary,2);
    document.getElementById("decimal").value = decimal;
    //console.log(decimal);
}

function DecimalToBinary() {
    var pilha = [];
    var decimal = document.getElementById("decimal").value;
    var binary = "";

    decimal = parseInt(decimal)

    while(decimal > 0) {
         pilha.push(decimal%2);
         decimal = parseInt(decimal/2);
    }
    binary = pilha.pop().toString();
    while(pilha.length > 0) {
        binary = binary.concat(pilha.pop().toString());       
    }
    document.getElementById("binary").value = binary;
}