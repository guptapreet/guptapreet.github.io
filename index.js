$(document).ready(function(){
    $(window).scroll(function(){
        var typed = new Typed(".auto-type",{
            strings:  ["Web Developer","Programmer","Engineer"],
            typeSpeed : 100,
            backSpeed : 60,
            loop: true

        });
    });
});