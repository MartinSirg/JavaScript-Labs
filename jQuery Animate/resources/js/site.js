$(document).ready(function () {
    $(document).on("keydown", function (event) {
        // alert(event.which);
        let box = $("#movingBox");
        if(event.which === 87) box.animate({top : "-=10"}, 0); // W
        if(event.which === 83) box.animate({top : "+=10"}, 0); // S
        if(event.which === 68) box.animate({left : "+=10"}, 0); // D
        if(event.which === 65) box.animate({left : "-=10"}, 0); // A

    })
});