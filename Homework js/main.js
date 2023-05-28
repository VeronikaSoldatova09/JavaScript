// Hm1
//Напишіть функцію, що отримує два числа. A та B. A менше B. Виведіть масив з усіх чисел між A та B включно.

// function genAB(a,b){
//     const arr = [];
//     while(a <= b){
//        for(let i = a; i <= b; i++)
//        arr.push(i);
//     }
//     return arr;
// }
// console.log(genAB(3, 10)); // [3, 4, 5, 6, 7, 8, 9, 10]
// console.log(genAB(33, 35)); // [33, 34, 35]
// console.log(genAB(16, 17)); // [16, 17]

//Hm2
//Напишіть функцію, що отримує довжину C. Виведіть масив довжиною C із випадкових чисел від 0 до 10.

// function randArr010(c) {
//     const arr = [];
//     for(let i = 0; i < c; i++){
//     const randomNum = Math.floor(Math.random() * 11); 
//     arr.push(randomNum); 
//     }
//     return arr;
// }
// console.log(randArr010(5)); // [3, 0, 5, 1, 7]
// console.log(randArr010(2)); // [1, 6]
// console.log(randArr010(3)); // [10, 4, 0]

//Hm3
//Напишіть функцію, що отримує довжину C та два числа FROM, TO. FROM < TO. Виведіть масив довжиною C із випадкових чисел від FROM до TO.

// function randArrFT(c,from,to) {
//     const arr = [];
//       for(let i = 0; i < c; i++){
//             const randomNum = Math.floor(Math.random() * (to - from +1)) + from; 
//             arr.push(randomNum)
//       }
//       return arr;
//     }
// console.log(randArrFT(5, 3, 100)); // [43, 90, 65, 11, 7]
// console.log(randArrFT(2, 4, 5)); // [5, 5]
// console.log(randArrFT(3, 100, 1000)); // [120, 492, 306]

//HM4
//Напишіть функцію, що отримує масив змішаних даних. Відфільтруйте тільки числа та виведіть у новому масиві.

// function filterNums(num) {
//     const result = num.filter((Element) => typeof Element === 'number');
//     return result;
// }
// console.log(filterNums([true, null, 'hello', 4, 'h', false, 11]));
// console.log(filterNums(['hello', 24, 33, 1, -121]));
// console.log(filterNums([true, null, 'hello', 'h', false, null, { name : 'one' } ])); 

//Hm5
//Напишіть функцію, що отримує масив змішаних даних. Відфільтруйте тільки рядки та виведіть у новому масиві.

// function filterStr(num) {
//     const result = num.filter((Element) => typeof Element === 'string');
//     return result;
// }
// console.log(filterStr([true, null, 'hello', 4, 'h', false, 11]));
// console.log(filterStr(['hello', 24, 33, 1, -121]));
// console.log(filterStr([true, null, false, null, { name : 'one' } ]));

//Hm6
//Напишіть функцію, що отримує масив змішаних даних. Відфільтруйте тільки boolean та виведіть у новому масиві.

// function filterBool(num) {
//     const result = num.filter((Element) => typeof Element === 'boolean');
//     return result;
// }
// console.log(filterBool([true, null, 'hello', 4, 'h', false, 11]));
// console.log(filterBool(['hello', 24, 33, 1, -121]));
// console.log(filterBool([true, null, null, { name : 'one' } ]));