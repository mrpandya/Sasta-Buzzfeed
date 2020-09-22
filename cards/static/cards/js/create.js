document.getElementById("1").style.display = "none";
document.getElementById("2").style.display = "none";
document.getElementById("3").style.display = "none";
document.getElementById("4").style.display = "none";
document.getElementById("5").style.display = "none";
document.getElementsByClassName("bar")[0].style.background="lightcoral";
document.getElementById("sub_btn").style.display = "none";

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
}

document.getElementsByClassName("submit_btn")[0].onclick = function(){
    console.log("submit button pressed");
    window.location.replace("/home/");
}