// потрібно створити функцію яка буде формувати чергу в магазині
// 1 перший параметр масив, кілікість елементів це кількість покіпців, значення елементу масиву це час який покупець витратить на касі
// 2 параметр це кількість кас
// Повертає обєкт де ключ це номер касси, значення це час черги на касі
// 12 + 2 + 15 = 29
// 3 + 5 + 6 + 7 = 21
// { 1 : 29, 2 : 21}

function fn(arr, count) {
 const  obj = {}

 for (let i = 1; i <= count; i +=1){
    obj[i] = 0;
 }
console.log(obj);
arr.forEach(element => {
    const values = Object.values(obj);
    const min = Math.min(...values)
    const idx = values.indexOf(min)+1;
    // console.log(idx);
    obj[idx] += element;


    // console.log(min);
    // console.log(values);
    // console.log(element);
});
return obj
}

 


console.log(fn([12, 3, 5, 6, 2, 15, 7], 2));