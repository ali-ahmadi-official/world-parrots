// ==== اسلایدر تصاویر ====
const parrotInformation = [
    { src: "/static/img/1.png" },
    { src: "/static/img/2.png" },
    { src: "/static/img/3.png" },
    { src: "/static/img/4.png" },
    { src: "/static/img/5.png" },
    { src: "/static/img/6.png" },
    { src: "/static/img/7.png" },
    { src: "/static/img/8.png" },
    { src: "/static/img/9.png" },
    { src: "/static/img/10.png" },
    { src: "/static/img/11.png" },
    { src: "/static/img/12.png" },
    { src: "/static/img/13.png" },
    { src: "/static/img/14.png" },
    { src: "/static/img/15.png" },
    { src: "/static/img/16.png" },
    { src: "/static/img/17.png" },
    { src: "/static/img/18.png" },
    { src: "/static/img/19.png" },
    { src: "/static/img/20.png" },
    { src: "/static/img/21.png" },
    { src: "/static/img/22.png" },
    { src: "/static/img/23.png" },
    { src: "/static/img/24.png" },
    { src: "/static/img/25.png" },
    { src: "/static/img/26.png" },
    { src: "/static/img/27.png" },
    { src: "/static/img/28.png" },
    { src: "/static/img/29.png" },
    { src: "/static/img/30.png" },
];

const slider1 = document.getElementById("imageSlider1");
parrotInformation.slice(1, 30).forEach(e => {
    const img = document.createElement("img");
    img.src = e.src;
    img.className = "pe-1";
    slider1.appendChild(img);
});

const slider2 = document.getElementById("imageSlider2");
parrotInformation.slice(7, 30).reverse().forEach(e => {
    const img = document.createElement("img");
    img.src = e.src;
    img.className = "pe-1";
    slider2.appendChild(img);
});

function autoScrollSlider(slider, speed = 1, reverse = false) {
    let scrollAmount = reverse ? slider.scrollWidth - slider.clientWidth : 0;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    function scrollStep() {
        if (reverse) {
            scrollAmount -= speed;
            if (scrollAmount <= 0) {
                scrollAmount = maxScroll;
            }
        } else {
            scrollAmount += speed;
            if (scrollAmount >= maxScroll) {
                scrollAmount = 0;
            }
        }
        slider.scrollLeft = scrollAmount;
        requestAnimationFrame(scrollStep);
    }

    requestAnimationFrame(scrollStep);
}

autoScrollSlider(slider1, 1, false);  // حرکت معمولی
autoScrollSlider(slider2, 1, true);   // حرکت معکوس
