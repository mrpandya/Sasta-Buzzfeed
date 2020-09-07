document.getElementById("fire").style.visibility="hidden";
document.getElementById("btn_text").onclick=function(){fly()};
function getStarted() {
//   window.location.replace('home');
    var path=window.location.href;
    
    window.location.replace("/home",path);
}
function fly(){
    document.getElementById("fire").style.visibility="initial";
    var spaceship=document.getElementById("fly_rocket");
    var thrust=document.getElementById("fly_fire");
    var pos=0;
    var id=setInterval(frame,2);
    function frame(){
        if(pos==-600){
            clearInterval(id);
            getStarted();
        }
        else{
            pos--;
            spaceship.style.transform="translateY("+pos+"px)";
            thrust.style.transform="translateY("+pos+"px)";
        }
    }
}
