$(document).ready(function () {
    $(".burger-menu").click(function () {
        $(".navbar-container-mobile").slideToggle("slow");
        $(".burger-menu").toggleClass("black");
    });
});