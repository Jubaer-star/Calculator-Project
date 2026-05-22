let inputDisplay = document.getElementById("inputDisplay");
let resultDisplay = document.getElementById("resultDisplay");

let expression = "";

function appendValue(value){
    expression += value;
    inputDisplay.innerText = expression;
}

function clearDisplay(){
    expression = "";
    inputDisplay.innerText = "";
    resultDisplay.innerText = "0";
}

function deleteLast(){
    expression = expression.slice(0, -1);
    inputDisplay.innerText = expression;
}


function fixPercentage(expr){
    return expr

        .replace(/(\d+)%/g, "($1/100)");
}

function calculate(){
    try{
        let fixedExpression = fixPercentage(expression);

        let result = eval(fixedExpression);
        resultDisplay.innerText = result;
    }
    catch{
        resultDisplay.innerText = "Error";
    }
}