var yourName=prompt("What is your Name? You can skip if you wish.");
var firstletter = yourName.slice(0,1);
var capitalised = firstletter.toUpperCase();
var remaing = yourName.slice(1,yourName.length);
var lowered = remaing.toLowerCase();
alert('Hello '+capitalised+lowered+'!, welcome to my website.')