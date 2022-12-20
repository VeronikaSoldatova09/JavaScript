const questionHeight = 'Enter the height';
const heightcylinder = prompt(questionHeight);
const questionDiameter = 'Enter the base diameter';
const diameter = prompt(questionDiameter);
const cylinderVolume = diameter * diameter * 3.14 * heightcylinder;
const answer = `The volume of cylinder - ${cylinderVolume}м3`;
alert(answer)