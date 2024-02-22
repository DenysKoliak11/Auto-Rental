document.getElementById("main__action").onclick = function () {
    document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
}
const buttons = document.getElementsByClassName("car__button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({ behavior: "smooth" });
    }
}
document.getElementById("price__action").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Заполните поле имя!!");
    } else if (document.getElementById("number__phone").value === "") {
        alert("Заполните поле телефон!!");
    } else if (document.getElementById("car").value === "") {
        alert("Заполните поле автомобиль!!");
    } else {
        alert("Спасибо за заявку, мы свяжемс с вами в ближайшае время!")
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price__image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 10) + 'px,' + ((event.clientY * 0.3) / 10) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.25 * window.pageYOffset) + 'px';
    })
});