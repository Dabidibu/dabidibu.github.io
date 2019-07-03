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
        strings: ["wonderful", "beauteous", "incredible", "terrific", "fantastic", "breathtaking"],
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

am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // var iconPath = "M53.5,476c0,14,6.833,21,20.5,21s20.5-7,20.5-21V287h21v189c0,14,6.834,21,20.5,21 c13.667,0,20.5-7,20.5-21V154h10v116c0,7.334,2.5,12.667,7.5,16s10.167,3.333,15.5,0s8-8.667,8-16V145c0-13.334-4.5-23.667-13.5-31 s-21.5-11-37.5-11h-82c-15.333,0-27.833,3.333-37.5,10s-14.5,17-14.5,31v133c0,6,2.667,10.333,8,13s10.5,2.667,15.5,0s7.5-7,7.5-13 V154h10V476 M61.5,42.5c0,11.667,4.167,21.667,12.5,30S92.333,85,104,85s21.667-4.167,30-12.5S146.5,54,146.5,42 c0-11.335-4.167-21.168-12.5-29.5C125.667,4.167,115.667,0,104,0S82.333,4.167,74,12.5S61.5,30.833,61.5,42.5z"
    var iconPath = "m490.9 500.68l-2.5 9.11-4.96 9.11s-1.6 3.21-2.82 5.63c-0.73 1.47-1.32 2.65-1.32 2.65l2.49-15.73s0.82 2.48 0.82-14.91 0.83-53 0.83-53l-3.31-26.5v-20.7l13.25 38.1 0.82 21.52s-3.3 44.72-3.3 44.72zm-207.47-38.44c-1.28 6.16-0.89 7.11-0.38 9.98 2.49 14.07-2.56 26.81-2.56 26.81v13.24l-4.98-4.96-1.64-9.94 0.81-24.84 2.23-35.99 5.75 20.33s2.05-0.75 0.77 5.37zm259.65-80.81l-4.14-35.6s-15.73-27.33-4.14-35.61c11.6-8.28 8.28-3.31 0.83-14.08-7.46-10.76-8.29-27.32-14.91-45.55-6.63-18.21-18.4-20.86-18.95-22.24-0.56-1.38-8.56-11.32-10.77-14.09-2.21-2.76-53.3-32.59-53.3-32.59s-6.63-1.1-9.95-2.21c-3.31-1.1-9.39-5.52-9.39-5.52s-1.1 0.83-6.35-1.1c-5.25-1.94-8.56-6.63-8.56-6.63s-0.83-21.55 0.28-25.41c1.1-3.86 2.48-10.77 5.24-11.32 2.76-0.56 3.04-8.84 4.15-14.92 1.1-6.07-1.39-8.56-2.49-8.56s-1.39-1.93-1.39-1.93-1.1-6.357 0.84-9.118c1.93-2.757 0.82-17.401 0.27-23.197-0.55-5.8-4.69-6.909-4.69-6.909l-4.97-7.453-9.11-8.285-5.53-4.419-5.53-3.593s-10.76-1.93-18.49-1.658c-7.74 0.281-19.61 9.116-27.63 16.574-8 7.454-7.73 19.332-7.73 19.332l-0.83 13.807s1.38 7.182 1.38 7.182l-4.48 12.667v11.59s5.8 0.83 5.8 0.83 2.48 9.1 2.48 9.1l6.62 16.57s-1.65 27.32-1.65 27.32l-8.28 1.66-6.63 4.97-13.25 9.94s-11.6 9.11-31.48 19.87c-19.88 10.77-29.83 25.67-37.28 49.69-7.46 24.01-25.68 42.23-25.68 42.23l9.11 5.79 11.6 11.6s4.14 44.71 0 54.65-1.66 32.29-1.66 63.76 8.28 37.26 8.28 37.26l4.98 46.39v33.12l4.97 21.53 18.22 13.25 13.26 10.76s8.28 84.46 10.76 136.63c2.49 52.18 19.06 123.39 19.06 123.39s-0.83 0.83-7.46 4.14 5.8 11.6 5.8 11.6 7.45 9.93 7.45 9.93-15.73 10.77-20.7 15.73c-4.97 4.97-4.15 8.29-4.15 8.29l4.97 4.13-11.59 13.26s-6.63 15.73-8.29 23.18c-1.65 7.45 11.6 16.57 28.17 17.4 16.57 0.82 25.67-6.63 33.96-10.77 8.28-4.14 9.11-19.05 9.11-19.05l2.49-16.56 13.25-5.79 9.94-7.46 2.49-13.25v-8.28l7.45-4.97 3.31-8.28-4.96-13.25s-4.15-48.03-4.15-48.03l-1.65-120.08 4.14-43.88 4.97-67.08 4.14 47.2 8.29 20.71 7.45 23.18s6.63 92.75 2.49 127.53c-4.15 34.78 5.8 56.31 5.8 56.31s2.48 4.97 2.48 4.97l1.65 9.93s4.15 9.11 4.15 9.11l12.42 10.77s-4.13 8.28-4.13 8.28l9.11 10.77 5.8 4.97 2.48 16.56 12.42 20.7s8.29 4.97 24.86 5.79c16.56 0.83 21.54-6.62 21.54-6.62l8.28-16.56-8.28-33.95-8.29-12.42-13.25-8.29 4.97-9.11v-18.21l-6.63-1.66 4.13-11.59 2.5-37.26s-6.63-25.68-3.31-33.13c3.31-7.45-1.66-67.07 0.81-92.74 2.5-25.68-10.76-72.87-10.76-72.87l42.25-27.33 19.05-33.96-2.48-11.59-5.8-24.02 9.11-73.69s3.31-52.18 3.31-52.18z";

    var chart = am4core.create("chartdiv", am4charts.SlicedChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    chart.dataSource.url = "5.Assets/amcharts/data.json";
    // chart.data = 
    var series = chart.series.push(new am4charts.PictorialStackedSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "name";
    series.alignLabels = true;
    series.maskSprite.path = iconPath;
    series.ticks.template.locationX = 1;
    series.ticks.template.locationY = 0.5;
    //
    // var fillModifier = new am4core.LinearGradientModifier();
    // fillModifier.brightnesses = [-0.5, 1, -0.5];
    // fillModifier.offsets = [0, 0.5, 1];
    // series.slices.template.fillModifier = fillModifier;

    series.colors.list = [
        am4core.color("#B131FF"),
        am4core.color("#B676E0"),
        am4core.color("#D9ABFD"),
        am4core.color("#D7B9E1"),
        am4core.color("#FAF09F"), //
        //
        am4core.color("#FAEA68"),
        am4core.color("#F7DA1F")
    ];
    //
    series.labelsContainer.width = 200;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "left";
    // chart.legend.valign = "center";

}); // end am4core.ready()


/*

 [{
     "JavaScript": {
         "name": "JavaScript",
         "value": 354
     },

     "HTML": {
         "name": "HTML",
         "value": 245
     },

     "CSS": {
         "name": "CSS",
         "value": 187
     },

     "SCSS/SASS": {
         "name": "SCSS/SASS",
         "value": 123
     },

     "jQuery": {
         "name": "jQuery",
         "value": 87
     },

     "Vue.js": {
         "name": "Vue.js",
         "value": 45
     },

     "Other": {
         "name": "Other",
         "value": 23
     }
 }]

*/