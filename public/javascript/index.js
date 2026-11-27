document.addEventListener("DOMContentLoaded", function (){
    const myImg = document.querySelectorAll("img[data-src]");
    const handleIntersect = (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target);
            }
        });     
    }
    const options = {  root: null,  rootMargin: '0px',  threshold: 0.0 };
    const observer = new IntersectionObserver(handleIntersect, options);
    myImg.forEach((img) => observer.observe(img)) ;

    const sfx = new Audio("https://files.catbox.moe/gfqdok.mp3");
    sfx.volume = 0.2;
       function playSound(){
        sfx.volume = 0.2;
        sfx.loop = true;
        sfx.play();
    };
    window.addEventListener("pageshow", (e) => {
    if (e.persisted) {
        playSound();
    }
});
    playSound();
});