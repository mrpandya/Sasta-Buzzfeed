document.getElementById("1").style.display = "none";
document.getElementById("2").style.display = "none";
document.getElementById("3").style.display = "none";
document.getElementById("4").style.display = "none";
document.getElementById("5").style.display = "none";
document.getElementsByClassName("bar")[0].style.background="lightcoral";
document.getElementById("sub_btn").style.display = "none";
document.getElementById("successful_msg").style.display ="none";

var c=0;
document.getElementById("next").onclick=function(){
    if(c<4){
        document.getElementsByClassName("bar")[c].style.background="lightgreen";
        document.getElementById(c++).style.display="none";
        document.getElementsByClassName("bar")[c].style.background="lightcoral";
        document.getElementById(c).style.display="grid";
    }
    else{
        document.getElementById(c).style.display="none";
        document.getElementsByClassName("bar")[c].style.background="lightgreen";
        document.getElementsByClassName("bar")[++c].style.background="lightcoral";
        document.getElementById(c).style.display="grid";
        document.getElementById("next").style.display="none";
        document.getElementById("sub_btn").style.display = "flex";
    }
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
}

function goto(x){
    document.getElementById(c).style.display="none";
    c=x;
    document.getElementById(c).style.display="grid";
    document.getElementsByClassName("bar")[c].style.background="lightcoral";
    if(x==5){
        document.getElementById("next").style.display="none";
        document.getElementById("sub_btn").style.display = "flex";
    }
    else{
        document.getElementById('next').style.display="initial";
        document.getElementById("sub_btn").style.display = "none";
    }
}

document.getElementsByClassName("bar")[0].onclick=function(){
    goto(0);
}
document.getElementsByClassName("bar")[1].onclick=function(){
    goto(1);
}
document.getElementsByClassName("bar")[2].onclick=function(){
    goto(2);
}
document.getElementsByClassName("bar")[3].onclick=function(){
    goto(3);
}
document.getElementsByClassName("bar")[4].onclick=function(){
    goto(4);
}
document.getElementsByClassName("bar")[5].onclick=function(){
    goto(5);
}

// document.getElementsByClassName("submit_btn")[0].onclick = function(){
//     console.log("submit button pressed");
//     window.location.replace("/home/");
// }
// document.getElementById('sub_btn').onclick = function(){
//     console.log("submit button pressed");
//     window.location.replace("/home/");
// }
document.getElementById("button_pressed").onclick=function(){created_form()}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function created_form() {
    test++;
    var snac=document.getElementById('snackbar');
    snac.className = "show";
    console.log("create button pressed");
    sleep(10000);
    // document.getElementsByClassName("bar")[5].style.background="lightgreen";
    setTimeout(function(){ snac.className = snac.className.replace("show", ""); }, 5000);
    // document.getElementsByClassName("form")[0].style.display="none";
    // document.getElementById("successful_msg").style.display="grid";
    window.location.replace('/home');
}
var test=0;
console.log(test);