let birthYear = 2003;
let currentYear = new Date().getFullYear();

function updateAge(){

    let age = currentYear - birthYear;
    document.getElementById("age").innerHTML = age;
    
}

updateAge();

setInterval(() => {
    currentYear = new Date().getFullYear();
    updateAge();
}, 31536000000);