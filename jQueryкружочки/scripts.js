$(document).ready(function() {
    let radius = 176;
    $(document).on('mousemove', function(e){
        let maxMove = radius;
        let maxMoveSqr = radius * radius;

        let mouseX = e.pageX - 50 - 180;
        let mouseY = e.pageY - 50 - 180;

        let len = mouseX * mouseX + mouseY * mouseY;
        if (maxMoveSqr < len) {
            $('#innerCircleID').css({
                left: mouseX / Math.sqrt(len) * maxMove + 185,
                top: mouseY / Math.sqrt(len) * maxMove + 185
            });
        }
        else {
            $('#innerCircleID').css({
                left: mouseX + 185,
                top: mouseY + 185
            });
        }
    });
});