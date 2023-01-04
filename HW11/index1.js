var question = 'Enter the value of num1 :';
var num1 = prompt(question);
var question0 = 'Enter 1.+, 2.-, 3.*, 4./: ';
var operator = prompt(question0);
var question1 = 'Enter the value of num2 :';
var num2 = prompt(question1);
function calc(num1,num2) {
    var res = num1 + num2;
    var res1 = num1 - num2;
    var res2 = num1 * num2;
    var res3 = num1/num2;
switch (operator) {
    case 1:
        if(operator == 1)
        alert(res);
        break;
    case 2:
        if(operator == 2)
        alert(res1);
        break;
    case 3:
        if(operator == 3)
        alert(res2);
        break;
    case 4:
        if(operator == 4)
        alert(res3);
        break;

    default:
        alert('ERROR');
        break;
}
}