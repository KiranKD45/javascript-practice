const courses = [
    {
        name : "React course",
        price: "2.5"
    },
    {
        name : "C++ course",
        price: "2.1"
    },
    {
        name : "Python course",
        price: "2.2"
    },
    {
        name : "JS course",
        price: "2.8"
    },
    {
        name : "Angular course",
        price: "2.9"
    },
]




function CourseList() {

    const ul = document.querySelector(".list-group");
    ul.innerHTML = "" 
    courses.forEach(course =>{
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name)

        const span = document.createElement("span");
        const price = document.createTextNode("$ "+ course.price);
        span.appendChild(price);
        
        li.appendChild(span);
        ul.appendChild(li);

    })
}

// CourseList();

window.addEventListener("load", CourseList)
 
//for decreasing order
const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", ()=>{
    courses.sort( (a,b)=>(b.price - a.price));
    CourseList();
})

//for increasing order
const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", ()=>{
    courses.sort( (a,b)=>(a.price - b.price));
    CourseList();
})

