let items = document.querySelectorAll('.card_animal');
document.querySelector('.slider_btn_prev').addEventListener('click',function() {
    
});


let placeInArray = function(){     //Функция, создаёт массив рандомных чисел(блоков), которые будут на странице прогружаться
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7],
        newArr = [],
        createRandomIndex = function(){
            return Math.floor(Math.random() * (numbers.length)); // generate random index in the current range
        },
        loopArray = function(){
            for (let i = 0; i < 10; i++){
                newArr.push(createRandomIndex());
            }
            newArr = Array.from(new Set(newArr));
        };

    while (newArr.length !== 8) {loopArray();}

    return newArr;
}

console.log(placeInArray());













    /* prev = document.querySelector('.prev'),
    next = document.querySelector('.next'); */
/* let currentItem = 0;
let isEnabled = true; */



    /* function changeCurrentItem(n){
    currentItem = (n + items.length) % items.length;
}

document.querySelector('.slider_btn_prev').addEventListener('click',function() {
    if (isEnabled) {
        previousItem(currentItem);
    }
});
 */