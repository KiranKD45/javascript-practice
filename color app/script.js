const pink = document.querySelector(".pink")
const orange = document.querySelector(".orange")
const red = document.querySelector(".red")
const purple = document.querySelector(".purple")
const white = document.querySelector(".white")

const  result= document.querySelector(".result")

const getbgColor = (selectedColor)=>{
    return window.getComputedStyle(selectedColor).backgroundColor;
};

const magicColor = (element, color)=>{
    return element.addEventListener("mouseenter", ()=>{
        result.style.background = color;
    }
     );
};
magicColor(red, getbgColor(red));
magicColor(pink, getbgColor(pink));
magicColor(orange, getbgColor(orange));
magicColor(purple, getbgColor(purple));
magicColor(white, getbgColor(white));
