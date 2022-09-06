
let number1 = Number(prompt ('הזן את המספר הראשון: '));  
let number2 = Number(prompt ('הזן את המספר השני: '));
let operator = prompt('הזן את פעולת המחשבון ( או +, -, * או / ): '); 
if(isNaN(number1)){
    alert('הערך הראשון אינו מספר');
}else if(isNaN(number2)){
    alert('הערך השני אינו מספר');
}else{
    let result;
if (operator == '+') { 
    result = number1 + number2;  
} 
else if((operator == '-')) {  
    result = number1 - number2;  
}  
else if( (operator == '*')) {
    result = number1 * number2;  
}  
else if(operator=='/') { 
    result = number1 / number2;  
} 
else{
    result='בבקשה הזן אופרטור נכון';
}

window.alert(" התשובה  היא  " + result);
}