const questionDistance = 'Enter the distance between the two cities: ';
const answerDistance = prompt(questionDistance);
const questionHour = 'Enter value of the hour: ';
const answerHour = prompt(questionHour);
const speed = answerDistance/answerHour;
const result = `Speed = ${speed}km/h`;
alert(result)