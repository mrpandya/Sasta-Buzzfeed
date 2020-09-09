document.getElementById("ufo1").style.display="none";

if(document.getElementById("title1")){
    document.getElementById("title1").onclick=function(){
        fly_away1();
    };
}
if(document.getElementById("title2")){
    document.getElementById("title2").onclick=function(){
        fly_away2();
    };
}
if(document.getElementById("title3")){
    document.getElementById("title3").onclick=function(){
        fly_away3();
    };
}
if(document.getElementById("title4")){
    document.getElementById("title4").onclick=function(){
        fly_away4();
    };
}
if(document.getElementById("title5")){
    document.getElementById("title5").onclick=function(){
        fly_away5();
    };
}
// document.getElementById("title3").onclick=function(){fly_away3();};
// document.getElementById("title4").onclick=function(){fly_away4();};
// document.getElementById("title5").onclick=function(){fly_away5();};


function fly_away1(){
    console.log("hello1");
    var pos=0;
    var up=0;
    document.getElementById("ufo1").style.display="initial";
    // document.getElementById("title1").style.visibility="hidden";
    var ufo=document.getElementById("ufo1");
    var title=document.getElementById("title1");
    var opa=1;
    var box=0;
    var id = setInterval(left,5);
    function left() {
        if (pos==500||up==3000) {
            setTimeout(left1,1000);
            // clearInterval(id);
        }
        else{
            console.log(up);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
        }
    }
    function left1() {
        if (pos==800||up==3000) {
            clearInterval(id);
            // url for the next page will go here 
            window.location.replace("#");

        }
        else{
            var show=setInterval(fade,1);
            console.log(up);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
        }
    }
    function fade(){
        var move_box =document.getElementById("box1");
        if(opa==0){
            clearInterval(show);
        }
        else{
            opa-=0.002;
            box++;
            if(box<400){
                move_box.style.transform="translateX("+box+"px)";
            }else{
                move_box.style.opacity=0;
            }
            title.style.opacity=opa;
        }
    }
}

function fly_away2(){
    console.log("hello2");
    var pos=0;
    var up=0;
    document.getElementById("ufo1").style.display="initial";
    // document.getElementById("title1").style.visibility="hidden";
    var ufo=document.getElementById("ufo1");
    var title=document.getElementById("title2");
    var opa=1;
    var box=0;
    var id = setInterval(left,5);
    function left() {
        if (pos==500||up==3000) {
            setTimeout(left1,1000);
            // clearInterval(id);
        }
        else{
            console.log(up);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
        }
    }
    function left1() {
        if (pos==800||up==3000) {
            clearInterval(id);
            // url for the next page will go here
            window.location.replace("#");

        }
        else{
            var show=setInterval(fade,1);
            console.log(up);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
        }
    }
    function fade(){
        var move_box =document.getElementById("box2");
        if(opa==0){
            clearInterval(show);
        }
        else{
            opa-=0.002;
            box++;
            if(box<400){
                move_box.style.transform="translateX("+box+"px)";
            }else{
                move_box.style.opacity=0;
            }
            title.style.opacity=opa;
        }
}}

function fly_away3(){
    console.log("hello3");
    var pos=0;
    var up=0;
    document.getElementById("ufo1").style.display="initial";
    // document.getElementById("title1").style.visibility="hidden";
    var ufo=document.getElementById("ufo1");
    var title=document.getElementById("title3");
    var opa=1;
    var box=0;
    var id = setInterval(left,5);
    function left() {
        if (pos==500||up==3000) {
            setTimeout(left1,1000);
            // clearInterval(id);
        }
        else{
            console.log(up);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
        }
    }
    function left1() {
        if (pos==800||up==3000) {
            clearInterval(id);
            // url for the next page will go here
            window.location.replace("#");
        }
        else{
            var show=setInterval(fade,1);
            console.log(up);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
        }
    }
    function fade(){
        var move_box =document.getElementById("box3");
        if(opa==0){
            clearInterval(show);
        }
        else{
            opa-=0.002;
            box++;
            if(box<400){
                move_box.style.transform="translateX("+box+"px)";
            }else{
                move_box.style.opacity=0;
            }
            title.style.opacity=opa;
        }
}}

function fly_away4(){
    console.log("hello4");
    var pos=0;
    var up=0;
    document.getElementById("ufo1").style.display="initial";
    // document.getElementById("title1").style.visibility="hidden";
    var ufo=document.getElementById("ufo1");
    var title=document.getElementById("title4");
    var opa=1;
    var box=0;
    var id = setInterval(left,5);
    function left() {
        if (pos==500||up==3000) {
            setTimeout(left1,1000);
            // clearInterval(id);
        }
        else{
            console.log(up);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
        }
    }
    function left1() {
        if (pos==800||up==3000) {
            clearInterval(id);
            // url for the next page will go here
            window.location.replace("#");
        }
        else{
            var show=setInterval(fade,1);
            console.log(up);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
        }
    }
    function fade(){
        var move_box =document.getElementById("box4");
        if(opa==0){
            clearInterval(show);
        }
        else{
            opa-=0.002;
            box++;
            if(box<400){
                move_box.style.transform="translateX("+box+"px)";
            }else{
                move_box.style.opacity=0;
            }
            title.style.opacity=opa;
        }
}
}

function fly_away5(){
    console.log("hello5");
    var pos=0;
    var up=0;
    document.getElementById("ufo1").style.display="initial";
    // document.getElementById("title1").style.visibility="hidden";
    var ufo=document.getElementById("ufo1");
    var title=document.getElementById("title5");
    var opa=1;
    var box=0;
    var id = setInterval(left,5);
    function left() {
        if (pos==500||up==3000) {
            setTimeout(left1,1000);
            // clearInterval(id);
        }
        else{
            console.log(up);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
        }
    }
    function left1() {
        if (pos==800||up==3000) {
            clearInterval(id);
            // url for the next page will go over here
            window.location.replace("#");

        }
        else{
            var show=setInterval(fade,1);
            console.log(up);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
        }
    }
    function fade(){
        var move_box =document.getElementById("box5");
        if(opa==0){
            clearInterval(show);
        }
        else{
            opa-=0.002;
            box++;
            if(box<400){
                move_box.style.transform="translateX("+box+"px)";
            }else{
                move_box.style.opacity=0;
            }
            title.style.opacity=opa;
        }
    }
}