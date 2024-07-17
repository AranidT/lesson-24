// easy
// 1
// for (let i = 2; i <= 20; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// 2
// let summ = 0;
// for (let i = 1; i < 10; i++){
//     summ += i;
// }
// console.log(summ)

// 3
// let factoraial = 1;
// for (i = 1; i <= 5; i++){
//     factoraial *= i
// }
// console.log(factoraial)

// 4
// let stroka = "Hello, World!"
// for (i = 0; i < stroka.length; i++){
//     console.log(stroka[i])
// }

// 5
// let array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++){
//     console.log(array[i])
// }

// 6
// let summ = 0;
// let array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++){
//     summ += array[i]
// }
// console.log(summ)

// 7
// let array = [1, 2, 3, 4, 5];
// let max = array[0];
// for (let i = 1; i < array.length; i++){
//     if(array[i] > max){
//         max = array[i]
//     }
// }
// console.log(max)

// 8
// let array = [1, 2, 3, 1, 2, 1];
// let repeat = 0;
// for (i = 0; i < array.length; i++){
//     if (array[i] == 1){
//         repeat += 1
//     }
// }
// console.log(repeat)

// 9
// let arr = [];
// for (i = 1; i <= 10; i++){
//     arr.push(i**2);
// }
// console.log(arr)

// 10
// for (i = 10; i > 0; i--){
//     console.log(i);
// }

// 11
// let array = [];
// let number = 2;
// for (i = 0; i < 10; i++){
//     array.push(number ** i)
// }
// console.log(array)

// 12
// let array = [5, 9, 3, 7, 2, 8, 1, 6, 4];
// let min = array[0];
// for (i = 0; i < array.length; i++){
//     if (array[i] < min){
//         min = array[i]
//     }
// }
// console.log(min)

// 13
// let stroka = "Hello, World!";
// let newStroka = []
// for (i = stroka.length; i > -1; i--){
//     newStroka.push(stroka[i])
// }
// let arrToStr = newStroka.join('');
// console.log(arrToStr)

// 14
// let arr = [10, 12, 31, 40, 15];
// for (i = 0; i < arr.length; i++){
//     if (arr[i] == 31){
//         console.log(i)
//     }
// }

// 15
// 1 способ
// let arr = [1, 1, 1, 1, 1];
// let allArr = true;
// for (i = 0; i < arr.length; i++){
//     if (arr[i] !== 1){
//         allArr = false;
//         break;
//     }
// }
// console.log(allArr)

// 2 способ
// let arr = [1, 1, 1, 1, 1];
// let allArr = arr.every(element => element == 1);
// console.log(allArr);

// Medium
// 1
// let stroka = "radar";
// let newArr = [];
// for (let i = stroka.length; i > -1; i--){
//     newArr.push(stroka[i])
// }
// let newStroka = newArr.join('');
// if (stroka == newStroka){
//     console.log("Слово является палиндромом.");
// } else{
//     console.log("Слово не является палиндромом.")
// }


// 2
// let arr = [1, 2, 3, 4, 3, 2, 1];
// let valueToRemove = 3;
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (arr[i] === valueToRemove) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr); 

// 3
// let summ = 0;
// for (i = 0; i <= 100; i++){
//     if ((i % 3 == 0) || (i % 5 == 0)){
//         summ += i;
//     }
// }
// console.log(summ);

// 4
// let arr = [5, 9, 3, 7, 2, 8, 1, 6, 4];
// let summ = 0;
// let average = 0;
// for (i = 0; i < arr.length; i++){
//     summ += arr[i]
//     average = summ / arr.length
// }
// console.log(average)

// 5
// let number = 1234;
// console.log(String(number).length)