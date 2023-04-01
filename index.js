// var yourName=prompt("What is your Name? You can skip if you wish.");
// var firstletter = yourName.slice(0,1);
// var capitalised = firstletter.toUpperCase();
// var remaing = yourName.slice(1,yourName.length);
// var lowered = remaing.toLowerCase();
// alert('Hello '+capitalised+lowered+'!, welcome to my website.')

const text = document.querySelector(".sec-text");

const textLoad = () => {
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

textLoad();
setInterval(textLoad, 12000);