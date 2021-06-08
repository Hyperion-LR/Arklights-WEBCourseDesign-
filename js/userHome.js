function loginOut(){
    location.href="./signIn.html";
}

var pageMeanu = document.getElementById("pageMeanu");

function meanuOut(){
    pageMeanu.style.top = "-100vh";
}

function meanuButton(){
    pageMeanu.style.top = "0vh";
}