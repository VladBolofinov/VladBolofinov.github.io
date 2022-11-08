let leftCtrl = document.querySelector('.slider_btn.prev');
let slides = document.querySelectorAll('.container_carousel');
let cards = document.querySelectorAll('.container_carousel.active .card_animal');

console.log(cards[6].classList.contains('show'));


/* leftCtrl.addEventListener('click', () => {
    slides[0].classList.remove('.active');
    slides[0].classList.add('non-active');
    slides[1].classList.remove('non-active');
    slides[1].classList.add('active');
}); */



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
let arrNumbers = placeInArray();

function mixCarousel(){
    for (let i = 0; i < 8; i++){
        if (cards[i].classList.contains('hide')){
            cards[i].classList.remove('.hide');
            cards[i].classList.add('.show');
            cards[i-1].classList.remove('.show');
            cards[i-1].classList.add('.hide');
        }
        cards[i].innerHTML = cards[arrNumbers[i]].innerHTML;
        cards[arrNumbers[i]].innerHTML = cards[i].innerHTML;
    }
}
mixCarousel();











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