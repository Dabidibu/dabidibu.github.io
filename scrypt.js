// When the user scrolls the page, execute progressBar 
window.onscroll = function() { progressBar() };

function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

//плавный переход по якорям
$(document).ready(function() {

    //ID блока с ссылками #prime_nav
    $(".header__menu").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '5.Assets/Particles-js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});
//Animate On Scroll Library
AOS.init();
//typed.js
$('document').ready(function() {
    var typed = new Typed('#typed', {
        strings: ["wonderful", "beauteous", "incredible", "terrific", "fantastic"],
        stringsElement: "#typed-strings",
        typeSpeed: 100,
        backDelay: 4000,
        backSpeed: 50,
        shuffle: true,
        loop: true,
    });
});

// //hover for projects
// const cards = document.querySelectorAll('.card-block');
// for (let i = 0; i < cards.length; i++) {
//     const card = cards[i];
//     card.addEventListener('mousemove', startRotate);
//     card.addEventListener('mouseout', stopRotate);
// }

// function startRotate(event) {
//     const cardItem = this.querySelector('.card-item');
//     const halfHeight = cardItem.offsetHeight / 2;
//     const halfWidth = cardItem.offsetWidth / 2;
//     cardItem.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 7 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 20 + 'deg)'
// }

// function stopRotate(event) {
//     const cardItem = this.querySelector('.card-item');
//     cardItem.style.transform = 'rotate(0)'
// }

// скролл колесиком
// var anchors = [];
// var currentAnchor = -1;
// var isAnimating = false;

// $(function() {

//     function updateAnchors() {
//         anchors = [];
//         $('.anchor').each(function(i, element) {
//             anchors.push($(element).offset().top);
//         });
//     }

//     $('body').on('mousewheel', function(e) {
//         e.preventDefault();
//         e.stopPropagation();
//         if (isAnimating) {
//             return false;
//         }
//         isAnimating = true;
//         // Increase or reset current anchor
//         if (e.originalEvent.wheelDelta >= 0) {
//             currentAnchor--;
//         } else {
//             currentAnchor++;
//         }
//         if (currentAnchor > (anchors.length - 1) ||
//             currentAnchor < 0) {
//             currentAnchor = 0;
//         }
//         isAnimating = true;
//         $('html, body').animate({
//             scrollTop: parseInt(anchors[currentAnchor])
//         }, 500, 'swing', function() {
//             isAnimating = false;
//         });
//     });

//     updateAnchors();

// });