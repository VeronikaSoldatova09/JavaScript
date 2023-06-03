// 1. Сума елементів
// Написати функцію, яка приймає масив чисел та повертає суму всіх чисел
// function arrSum(nums){
//     let res = 0;
//     for (let i = 0; i < nums.length; i++) {
//         res += nums[i];
//     }
//     return res;
// }
// console.log(arrSum([22, 4, 3.3]));
// console.log(arrSum([2, -4, 15]));

// 2. Більше нуля
// Написати функцію, яка приймає масив чисел та повертає число - кількість чисел більше нуля
// function arrCountGT0(nums) {
//     let res = 0;
//     for (let i = 0; i < nums.length; i++) {
//     if(nums[i] > 0){
//         res++
//         }
//     }
//     return res;
// }
// console.log(arrCountGT0([22, 4, 3.3]));
// console.log(arrCountGT0([2, -4, 15]));

// 3. Менше середнього
// Написати функцію, яка приймає масив чисел та повертає масив чисел, які меньше середнього числа масиву
// function arrFilterLTM(nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   const average = sum / nums.length;

//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < average) {
//       result.push(nums[i]);
//     }
//   }
//   return result;
// }
// console.log(arrFilterLTM([22, 4, 3.3]));
// console.log(arrFilterLTM([2, -4, 15]));

// 4. Сортування
// Написати функцію, яка приймає масив чисел та повертає відсортований масив
// function arrSort(nums) {
//     return nums.sort(function(a, b) {
//         return a - b;
//       });
// }
// console.log(arrSort([22, 4, 3.3]));
// console.log(arrSort([2, -4, 15]));
// console.log(arrSort([2, -4, 15, 22]));

// 5. Зворотнє сортування
// Написати функцію, яка приймає масив чисел та повертає відсортований масив у зворотньому порядку
// function arrSortReverse(nums) {
//   return nums.sort(function (a, b) {
//     return b - a;
//   });
// }
// console.log(arrSortReverse([22, 4, 3.3]));
// console.log(arrSortReverse([2, -4, 15]));
// console.log(arrSortReverse([2, -4, 15, 22]));