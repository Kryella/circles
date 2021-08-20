window.onload = function () {
    let innerCircle = document.getElementById("innerCircleID")
    let invisibleCircle = document.getElementById("invisibleCircleID")

    let mouseX = 0;
    let mouseY = 0;

    invisibleCircle.addEventListener("mousemove", onMouseUpdate);

    function onMouseUpdate(e) {
        console.log("test")
        mouseX = e.pageX;
        mouseY = e.pageY;

        innerCircle.style.left = mouseX + - 220 + 'px';
        innerCircle.style.top = mouseY + 180 + 'px';
    }
}