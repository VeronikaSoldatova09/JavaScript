const question1 = 'Enter input:';
const input = prompt(question1);
const question2 = 'Enter the value of lating:';
const late = prompt(question2);
const question3 = 'Enter the value of string:';
const str = prompt(question3);
const question = 'Enter the number of menu: 1.First 2.Second 3.Third';
const menu = prompt(question);
switch (menu) {
    case 1:
        const str = income + late / 3 * 20;
        if(str%50 == 0){
            const str = str / 50 * 100;
        }
        else{
            const str = str / 50 * 100 + 100;
        }
        break;
    case 2:
       const late = str / 100 * 50 - income;
       if(late < 20){
        alert('its possible for Vasya lating only 2 times');
       }
       else{
        const late = late / 20 * 3 + 2;
       }
        break;
    case 3:
       const income = str/100 *50 - late/3 *20;
       if(income <= 0){
        alert('Vasya will be without salary');
       }
       else{
        alert(`Vasya will have ${income} dollars`);
       }
        break;

    default:
        alert('You enter the wrong number!');
        break;
}