/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '5.Assets/Particles-js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});
//Animate On Scroll Library
AOS.init();
//typed.js
$('document').ready(function() {
    var typed = new Typed('#typed', {
        strings: ["wonderful", "great again", "incredible", "terrific", "fantastic"],
        stringsElement: "#typed-strings",
        typeSpeed: 100,
        backDelay: 4000,
        backSpeed: 50,
        shuffle: true,
        loop: true,



    });
});