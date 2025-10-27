const randomColor = function () {
    const hexSet = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexSet[Math.floor(Math.random() * 16)];
    }
    return color;
}


let interval = null;

document.querySelector('#start').addEventListener('click', function () {
    if (!interval) {
        interval = setInterval(function(){
            document.body.style.backgroundColor = randomColor();
        }, 2000)
    }
})

document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(interval);
    interval = null;
})