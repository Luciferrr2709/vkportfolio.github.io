const text = document.querySelector(".sec-text");
const textLoad1 = () => {
    setTimeout(() =>{
        text.textContent = "Python Developer";
    }, 0);
    setTimeout(() =>{
        text.textContent = "Web Developer";
    }, 4000);
    setTimeout(() =>{
        text.textContent = "App Developer";
    }, 8000);
    setTimeout(() =>{
        text.textContent = "Machine Learning Intermediate";
    }, 12000);
}

textLoad1();
setInterval(textLoad1, 16000);