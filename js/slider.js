let lis = document.querySelectorAll('#slider li');
slider.appendChild(lis[0].cloneNode(true));
slider.style.width = lis[0].offsetWidth * (lis.length + 1) + 'px';
let index = 0;
let timeId = setInterval(function () {
    index++;
    startMove(slider, {
        left: -1920 * index
    }, 1000, 'linear', function () {
        if (index == lis.length) {
            index = 0;
            slider.style.left = 0;
        }
    })
}, 2000)