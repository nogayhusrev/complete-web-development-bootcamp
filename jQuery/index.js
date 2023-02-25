$("h1").css("color", "red");
console.log($("h1").css("color"))

$("h1").addClass("big-title");

$("button").text("change")


// $("button").click(function () {
//     $("h1").slideToggle()
// })

$("button").click(function () {
    $("h1").slideUp().slideDown().animate({margin: 0, opacity: 0.5})
})


$(document).keypress(function (event) {
    $("h1").text(event.key)
})



