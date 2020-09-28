// var x=document.getElementById("1").innerHTML;
// console.log(x);
(function()
{
  if( window.localStorage )
  {
    if( !localStorage.getItem('firstLoad') )
    {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }  
    else
      localStorage.removeItem('firstLoad');
  }
})();

var questions=[];
for(var i=1;i<=5;i++){
    if(document.getElementById(i)){
        questions[i-1]=document.getElementById(i).innerHTML;
    }
}
for(var i=1;i<=5;i++){
    if(document.getElementById(i)){
        document.getElementById(i).display="none";
    }
}
console.log(questions);

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

// fly away functions
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


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
    left();
    // var id = setInterval(left,1);
    async function left() {
        for(var i=1;i<=500;i++){
            console.log(up);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
            await sleep(1);
        }
        // if (pos<500||up==3000) {
        //     // clearInterval(id);
        //     // clearInterval(id);
        //     console.log(up);
        //     pos++;
        //     ufo.style.transform="translateY("+up+"px)";
        //     ufo.style.transform="translateX("+pos+"px)";
        // }
        // else if(pos==500){
        setTimeout(left1,1000);
        // }
    }
    async function left1() {
        if (pos==800) {
            console.log("ending left 1");
            // clearInterval(id);
            // url for the next page will go here 
            var url=window.location.href;
            window.location.replace(questions[0], url);
        }
        else{
            var show=setInterval(fade,10);
            console.log("left 1 ",pos);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
            await sleep(1);
            left1();
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

//nishit
function fly_away2(){
    console.log("hello1");
    var pos=0;
    var up=0;
    document.getElementById("ufo1").style.display="initial";
    // document.getElementById("title1").style.visibility="hidden";
    var ufo=document.getElementById("ufo1");
    var title=document.getElementById("title2");
    var opa=1;
    var box=0;
    left();
    // var id = setInterval(left,1);
    async function left() {
        for(var i=1;i<=500;i++){
            console.log(up);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
            await sleep(1);
        }
        // if (pos<500||up==3000) {
        //     // clearInterval(id);
        //     // clearInterval(id);
        //     console.log(up);
        //     pos++;
        //     ufo.style.transform="translateY("+up+"px)";
        //     ufo.style.transform="translateX("+pos+"px)";
        // }
        // else if(pos==500){
        setTimeout(left1,1000);
        // }
    }
    async function left1() {
        if (pos==800) {
            console.log("ending left 1");
            // clearInterval(id);
            // url for the next page will go here 
            var url=window.location.href;
            window.location.replace(questions[1], url);
        }
        else{
            var show=setInterval(fade,10);
            console.log("left 1 ",pos);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
            await sleep(1);
            left1();
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
    }
}

function fly_away3(){
    console.log("hello1");
    var pos=0;
    var up=0;
    document.getElementById("ufo1").style.display="initial";
    // document.getElementById("title1").style.visibility="hidden";
    var ufo=document.getElementById("ufo1");
    var title=document.getElementById("title3");
    var opa=1;
    var box=0;
    left();
    // var id = setInterval(left,1);
    async function left() {
        for(var i=1;i<=500;i++){
            console.log(up);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
            await sleep(1);
        }
        // if (pos<500||up==3000) {
        //     // clearInterval(id);
        //     // clearInterval(id);
        //     console.log(up);
        //     pos++;
        //     ufo.style.transform="translateY("+up+"px)";
        //     ufo.style.transform="translateX("+pos+"px)";
        // }
        // else if(pos==500){
        setTimeout(left1,1000);
        // }
    }
    async function left1() {
        if (pos==800) {
            console.log("ending left 1");
            // clearInterval(id);
            // url for the next page will go here 
            var url=window.location.href;
            window.location.replace(questions[2], url);
        }
        else{
            var show=setInterval(fade,10);
            console.log("left 1 ",pos);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
            await sleep(1);
            left1();
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
    }
}

function fly_away4(){
    console.log("hello1");
    var pos=0;
    var up=0;
    document.getElementById("ufo1").style.display="initial";
    // document.getElementById("title1").style.visibility="hidden";
    var ufo=document.getElementById("ufo1");
    var title=document.getElementById("title4");
    var opa=1;
    var box=0;
    left();
    // var id = setInterval(left,1);
    async function left() {
        for(var i=1;i<=500;i++){
            console.log(up);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
            await sleep(1);
        }
        // if (pos<500||up==3000) {
        //     // clearInterval(id);
        //     // clearInterval(id);
        //     console.log(up);
        //     pos++;
        //     ufo.style.transform="translateY("+up+"px)";
        //     ufo.style.transform="translateX("+pos+"px)";
        // }
        // else if(pos==500){
        setTimeout(left1,1000);
        // }
    }
    async function left1() {
        if (pos==800) {
            console.log("ending left 1");
            // clearInterval(id);
            // url for the next page will go here 
            var url=window.location.href;
            window.location.replace(questions[3], url);
        }
        else{
            var show=setInterval(fade,10);
            console.log("left 1 ",pos);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
            await sleep(1);
            left1();
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
    console.log("hello1");
    var pos=0;
    var up=0;
    document.getElementById("ufo1").style.display="initial";
    // document.getElementById("title1").style.visibility="hidden";
    var ufo=document.getElementById("ufo1");
    var title=document.getElementById("title5");
    var opa=1;
    var box=0;
    left();
    // var id = setInterval(left,1);
    async function left() {
        for(var i=1;i<=500;i++){
            console.log(up);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
            await sleep(1);
        }
        // if (pos<500||up==3000) {
        //     // clearInterval(id);
        //     // clearInterval(id);
        //     console.log(up);
        //     pos++;
        //     ufo.style.transform="translateY("+up+"px)";
        //     ufo.style.transform="translateX("+pos+"px)";
        // }
        // else if(pos==500){
        setTimeout(left1,1000);
        // }
    }
    async function left1() {
        if (pos==800) {
            console.log("ending left 1");
            // clearInterval(id);
            // url for the next page will go here 
            var url=window.location.href;
            window.location.replace(questions[4], url);
        }
        else{
            var show=setInterval(fade,10);
            console.log("left 1 ",pos);
            pos++;
            ufo.style.transform="translateY("+up+"px)";
            ufo.style.transform="translateX("+pos+"px)";
            await sleep(1);
            left1();
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