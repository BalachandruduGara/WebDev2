$(document).ready(function(){
    $('audio#pop')[0].play()
    $("#start").click(function(){
        window.location.href = "login.html";
       console.log("play");
    });
    $("#rules").click(function(){
        window.location.href = "rules.html";
        console.log("rules"); 
    });
});