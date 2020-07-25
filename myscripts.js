function BinaryToDecimal() {
    var binary = document.getElementById("binary").value;
    if (binary != ""){
        if(ValidateBinary(binary)) {
            var decimal = parseInt(binary,2);
            document.getElementById("decimal").value = decimal;
            HideError("binary-msg");
        } else {
            ShowError("binary-msg");
        }
    } else{
        HideError("binary-msg");
        document.getElementById("decimal").value = "";
    }
}

function DecimalToBinary() {
    var stack = [];
    var decimal = document.getElementById("decimal").value;
    var binary = "";
    if(decimal != ""){
        if(ValidateDecimal(decimal)) {
            HideError("decimal-msg");
            decimal = parseInt(decimal)
            if (decimal === 0){
                stack.push(parseInt(0));
            }
            while(decimal > 0) {
                stack.push(decimal%2);
                decimal = parseInt(decimal/2);
            }
            binary = stack.pop().toString();
            while(stack.length > 0) {
                binary = binary.concat(stack.pop().toString());       
            }
            document.getElementById("binary").value = binary;
        } else {
            ShowError("decimal-msg");
        }
    } else {
        HideError("decimal-msg");
        document.getElementById("binary").value = "";
    }
}

function ValidateBinary(binary) {
    for(var i = 0; i < binary.length; i++) {
        var number = parseInt(binary.charAt(i));
        if (!isNaN(number)) {
            if(parseInt(binary.charAt(i)) < 0 || parseInt(binary.charAt(i)) > 1) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

function ValidateDecimal(decimal) {
    for(var i = 0; i < decimal.length; i++) {
        var number = parseInt(decimal.charAt(i));
        if (!isNaN(number)) {
            if(parseInt(decimal.charAt(i)) < 0 || parseInt(decimal.charAt(i)) > 9) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

function ShowError(id) {
    document.getElementById(id).style.display = "block";
}

function HideError(id) {
    document.getElementById(id).style.display = "none";
}