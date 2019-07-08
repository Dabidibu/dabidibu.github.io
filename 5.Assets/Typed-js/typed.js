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