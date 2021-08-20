let wjuh;
const speed = 525;
const speed1 = speed * 0.33;
const speed2 = speed * 0.67;
const pageWidth = window.visualViewport.width/15;
const countWidth = 15;
const countHeight = 8;
const countHeightOffset = 100;
window.onload = function () {
    const btnCreateCircles = document.getElementById("btnCircleNumber");
    wjuh = document.getElementById("wjuh");
    btnCreateCircles.addEventListener("click", createCircles);
}

function get_random_color() {
    let color = Math.floor(Math.random() * 16777216).toString(16);
    return '#000000'.slice(0, -color.length) + color;
}

async function createCircles() {
    delEte();
    console.log("creating circles");
    let maw = document.getElementById("section");
    let circleNumber = document.getElementById("klassnyiID").value;
    let i = circleNumber;
    while (--circleNumber >= 0) {
        let newCircle = document.createElement("div");
        newCircle.classList.add("circle");
        newCircle.style.paddingTop = pageWidth + "px";
        newCircle.style.width = pageWidth+"px";
        newCircle.style.left = circleNumber % countWidth * pageWidth + "px";
        newCircle.style.top = Math.floor(circleNumber/countWidth)%countHeight*pageWidth+countHeightOffset+"px";
        newCircle.id = circleNumber;
        newCircle.animate([{ opacity: (0)}, { opacity: (1)}],
            { duration: 500, iterations: 1, easing: "ease" });
        newCircle.style.opacity = "1";
        newCircle.style.backgroundColor = get_random_color();
        maw.appendChild(newCircle);
        await new Promise(r => setTimeout(r, 25));
    }
    await new Promise(r => setTimeout(r, 750));
    await Sortik(i);
}

function Smallest(circleNumber) {
    let i = 0;
    let a = 16777216;
    let b;
    while (i < circleNumber){
        let bruh = document.getElementById(i);
        let bruhColor = getRGB(bruh.style.backgroundColor);
        if (a > bruhColor && !bruh.classList.contains("poop")) {
            a = bruhColor;
            b = bruh;
        }
        i++;
    }
    return b;
}

function getRGB(color) {
    let digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
    if (digits == null)
        return (16777216);
    let red = parseInt(digits[2]);
    let green = parseInt(digits[3]);
    let blue = parseInt(digits[4]);
    return (parseInt((blue | (green << 8) | (red << 16)), 10));
}

async function Sortik(circleNumber) {
    let i = circleNumber-1;
    while (i >= 0){
        let kit = Smallest(circleNumber);
        if (kit === undefined) {
            console.log("SORTIK ERROR!");
            return;
        }
        kit.classList.add("poop");
        kit.classList.add("cid" + i.toString());
        i--;
    }
    await swapEverything(circleNumber);
}

async function swapEverything(circleNumber) {
    let i = 0;

    while (i < circleNumber) {
        let kit = document.querySelector(".cid" + i);
        let swp = document.getElementById(i);
        let temp = kit.id;

        kit.id = swp.id;
        swp.id = temp;

        console.log(i);
        console.log(kit.id);

        if (kit !== swp) {
            kit.style.zIndex = i + 100;
            swp.style.zIndex = i + 100;
            kit.style.left = (i) % countWidth * pageWidth + "px";
            swp.style.left = (swp.id) % countWidth * pageWidth + "px";
            await new Promise(r => setTimeout(r, speed1));
            kit.style.top = Math.floor((i) / countWidth) % countHeight * pageWidth + countHeightOffset + "px";
            swp.style.top = Math.floor((swp.id) / countWidth) % countHeight * pageWidth + countHeightOffset + "px";
            await new Promise(r => setTimeout(r, speed2));
        }
        i++;
    }
}

function delEte() {
    let maw = document.getElementById("section");
    console.log("executing delete");
    while (maw.firstChild != null) {
        maw.removeChild(maw.lastChild);
    }
}