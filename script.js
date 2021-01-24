const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
});

document.getElementById("mobile").addEventListener("click", ()=> {
    document.querySelector(".mobile-menu").classList.add('active');
});

function cls() {
    document.querySelector(".mobile-menu").classList.remove('active');
}

