document.addEventListener("DOMContentLoaded", function (){
    const myImg = document.querySelectorAll("img[data-src]");
    const handleIntersect = (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.src = entry.target.dataset.src;
            }
        });     
    }
    const options = {  root: null,  rootMargin: '0px',  threshold: 0.0 };
    const observer = new IntersectionObserver(handleIntersect, options);
    myImg.forEach((img) => observer.observe(img)) 
});