// 26. Создать переменную “age_1” и присвоить ей значение 10
// 27. Создать переменную “age_2” и присвоить ей значение 18
// 28. Создать переменную “age_3” и присвоить ей значение 60
// 29. Создать if в котором будите проверять значение переменной age_1
// 30. Если age_1  age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
// 31. Если age_1 =  age_2 и age_1   age_3, вывести в консоль “Welcome  !”
// 32. Если age_1   age_3, вывести в консоль “Keep calm and look Culture channel”.
// 33. Иначе выводите “Technical work”.


// let age_1 = 10;
// let age_2 = 18;
// let age_3 = 60;

// if (age_1 < age_2){
//     console.log("You do not have access cause your age is " + age_1 + " It is less then")
// }
// else if (age_1 >= age_2 && age_1 < age_3){
//     console.log("Welcome")
// }
// else if (age_1 > age_3){
//     console.log("Keep calm and look Culture channel")
// }
// else{
//     console.log("Technical Work")
// }

// 1*:
//  Преоразовать код в функцию, принимающую на вход возраст.

// let age_1 = 10;
// let age_2 = 18;
// let age_3 = 60;


// const checkAge = function(age) {
//     if (age < age_2){
//         console.log("You do not have access cause your age is " + age + " It is less then " + age_2)
//     }
//     else if (age >= age_2 && age < age_3){
//         console.log("Welcome")
//     }
//     else if (age > age_3){
//         console.log("Keep calm and look Culture channel")
//     }
//     else{
//         console.log("Technical Work")
//     }
// }

// checkAge(15)




// 2*:
//  Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.


// let age_1 = 10;
// let age_2 = 18;
// let age_3 = 60;


// const checkAge = function(age) {
//     if(typeof age == "number") {

//     if (age < age_2){
//         console.log("You do not have access cause your age is " + age + " It is less then " + age_2)
//     }
//     else if (age >= age_2 && age < age_3){
//         console.log("Welcome")
//     }
//     else if (age > age_3){
//         console.log("Keep calm and look Culture channel")
//     }
//     else{
//         console.log("Technical Work")
//     }
// } else {console.log('Not number')}
// }

// checkAge("regewgwr")