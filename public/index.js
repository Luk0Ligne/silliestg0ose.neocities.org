document.addEventListener("DOMContentLoaded", function (){
    const myImg = document.querySelectorAll("img[data-src]");

    const handleIntersect = (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.src = entry.target.dataset.src;
            }
        });     
    }
    const observer = new IntersectionObserver(handleIntersect);
    myImg.forEach((img) => observer.observe(img)) 
});