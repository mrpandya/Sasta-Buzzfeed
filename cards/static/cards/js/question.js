var section=[]
var c=0;
document.getElementById("answer").style.display="none";

if(c==0){
    document.getElementById("previous").style.display="none";
}
for (var i = 1;i<=5;i++){
    if(document.getElementById(i)){
        section.push(document.getElementById(i));
    }
}
// hiding all the questions except the first one
for(var i=1;i<section.length;i++){
    section[i].style.display="none";
}

  

//typewriter effect
function typewriter(x){
    document.getElementsByClassName("choice_field")[x].style.visibility="hidden";
    var text = document.getElementsByClassName("question_text")[x].text;
    var i=0;
    document.getElementsByClassName("question_text")[x].innerHTML="";
    function text_anim(){
        if(i<text.length){
            document.getElementsByClassName("question_text")[x].innerHTML+=text.charAt(i);
            i++;
            setTimeout( text_anim,100);
        }
        else{
            console.log("hello");
            document.getElementsByClassName("choice_field")[x].style.visibility="visible";
        }
    }
    text_anim();
}

typewriter(0);
// 0 series
document.getElementsByClassName("a")[0].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        if(c!=section.length){
            section[c].style.display="none";
            c++;    
            section[c].style.display="initial";
            typewriter(c);
        }
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("b")[0].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("c")[0].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("d")[0].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("e")[0].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("f")[0].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

// 1 series

document.getElementsByClassName("a")[1].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("b")[1].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("c")[1].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
   if(c<=section.length){
    section[c].style.display="none";
    c++;
    if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("d")[1].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("e")[1].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("f")[1].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

// 2 series

document.getElementsByClassName("a")[2].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("b")[2].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            console.log(c);
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("c")[2].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("d")[2].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("e")[2].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("f")[2].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

//3 series

document.getElementsByClassName("a")[3].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("b")[3].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("c")[3].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("d")[3].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("e")[3].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("f")[3].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        // console.log(document.getElementById("choice1").value);
    }
}

//4 series

var txt=document.getElementById("answer_txt").innerHTML;
var i=0;
document.getElementById("answer_txt").innerHTML="";
function ans_type_anim(){
    if(i<txt.length){
        // document.getElementById("answer_txt").innerHTML+="|";
        document.getElementById("answer_txt").innerHTML+=txt.charAt(i++);
        setTimeout(ans_type_anim,50);
    }
}

document.getElementsByClassName("a")[4].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        if(c==section.length){
            document.getElementById("previous").style.display="none";
            document.getElementById("answer").style.display="flex";
            ans_type_anim();
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("b")[4].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        if(c==section.length){
            document.getElementById("previous").style.display="none";
            document.getElementById("answer").style.display="flex";
            ans_type_anim();
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("c")[4].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        if(c==section.length){
            document.getElementById("previous").style.display="none";
            document.getElementById("answer").style.display="flex";
            ans_type_anim();
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("d")[4].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        if(c==section.length){
            document.getElementById("previous").style.display="none";
            document.getElementById("answer").style.display="flex";
            ans_type_anim();
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("e")[4].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        if(c==section.length){
            document.getElementById("previous").style.display="none";
            document.getElementById("answer").style.display="flex";
            ans_type_anim();
        }
        // console.log(document.getElementById("choice1").value);
    }
}

document.getElementsByClassName("f")[4].onclick=function(){
    console.log(section.length);
    //hiding the current question and making the next one visible
    if(c<=section.length){
        section[c].style.display="none";
        c++;
        if(c>0){
            document.getElementById("previous").style.display="initial";
        }
        if(c!=section.length){
            section[c].style.display="initial";
            typewriter(c);
        }
        if(c==section.length){
            document.getElementById("previous").style.display="none";
            document.getElementById("answer").style.display="flex";
            ans_type_anim();
        }
        // console.log(document.getElementById("choice1").value);
    }
}



//5 series

// document.getElementsByClassName("a")[5].onclick=function(){
//     console.log(section.length);
//     //hiding the current question and making the next one visible
//     if(c<=section.length){
//         if(c>0){
//             document.getElementById("previous").style.display="initial";
//         }
//         section[c++].style.display="none";
//         if(c!=section.length){
//             section[c].style.display="initial";
//         }
//         // console.log(document.getElementById("choice1").value);
//         typewriter(c);
//     }
// }

// document.getElementsByClassName("b")[5].onclick=function(){
//     console.log(section.length);
//     //hiding the current question and making the next one visible
//     if(c<=section.length){
//         if(c>0){
//             document.getElementById("previous").style.display="initial";
//         }
//         section[c++].style.display="none";
//         if(c!=section.length){
//             section[c].style.display="initial";
//         }
//         // console.log(document.getElementById("choice1").value);
//         typewriter(c);
//     }
// }

// document.getElementsByClassName("c")[5].onclick=function(){
//     console.log(section.length);
//     //hiding the current question and making the next one visible
//     if(c<=section.length){
//         if(c>0){
//             document.getElementById("previous").style.display="initial";
//         }
//         section[c++].style.display="none";
//         if(c!=section.length){
//             section[c].style.display="initial";
//         }
//         // console.log(document.getElementById("choice1").value);
//         typewriter(c);
//     }
// }

// document.getElementsByClassName("d")[5].onclick=function(){
//     console.log(section.length);
//     //hiding the current question and making the next one visible
//     if(c<=section.length){
//         if(c>0){
//             document.getElementById("previous").style.display="initial";
//         }
//         section[c++].style.display="none";
//         if(c!=section.length){
//             section[c].style.display="initial";
//         }
//         // console.log(document.getElementById("choice1").value);
//         typewriter(c);
//     }
// }

// document.getElementsByClassName("e")[5].onclick=function(){
//     console.log(section.length);
//     //hiding the current question and making the next one visible
//     if(c<=section.length){
//         if(c>0){
//             document.getElementById("previous").style.display="initial";
//         }
//         section[c++].style.display="none";
//         if(c!=section.length){
//             section[c].style.display="initial";
//         }
//         // console.log(document.getElementById("choice1").value);
//         typewriter(c);
//     }
// }

// document.getElementsByClassName("f")[5].onclick=function(){
//     console.log(section.length);
//     //hiding the current question and making the next one visible
//     if(c<=section.length){
//         if(c>0){
//             document.getElementById("previous").style.display="initial";
//         }
//         section[c++].style.display="none";
//         if(c!=section.length){
//             section[c].style.display="initial";
//         }
//         // console.log(document.getElementById("choice1").value);
//         typewriter(c);
//     }
// }



// document.getElementById("choice2").onclick=function(){
//     //hiding the current question and making the next one visible
//     if(c<section.length-1){
//         if(c>0){
//             document.getElementById("previous").style.display="initial";
//         }
//         section[c++].style.display="none";
//         section[c].style.display="initial";
//         typewriter(c);
//     }
// }
// document.getElementById("choice3").onclick=function(){
//     //hiding the current question and making the next one visible
//     if(c<section.length-1){
//         if(c>0){
//             document.getElementById("previous").style.display="initial";
//         }
//         section[c++].style.display="none";
//         section[c].style.display="initial";
//         typewriter(c);
//     }
// }
// document.getElementById("choice4").onclick=function(){
//     //hiding the current question and making the next one visible
//     if(c<section.length-1){
//         if(c>0){
//             document.getElementById("previous").style.display="initial";
//         }
//         section[c++].style.display="none";
//         section[c].style.display="initial";
//         typewriter(c);
//     }
// }
// document.getElementById("choice5").onclick=function(){
//     //hiding the current question and making the next one visible
//     if(c<section.length-1){
//         if(c>0){
//             document.getElementById("previous").style.display="initial";
//         }
//         section[c++].style.display="none";
//         section[c].style.display="initial";
//         typewriter(c);
//     }
// }
// document.getElementById("choice6").onclick=function(){
//     //hiding the current question and making the next one visible
//     if(c<section.length-1){
//         if(c>0){
//             document.getElementById("previous").style.display="initial";
//         }
//         section[c++].style.display="none";
//         section[c].style.display="initial";
//         typewriter(c);
//     }
// }

    // //to go to the previous question
    if(document.getElementById("previous")){
        document.getElementById("previous").onclick=function(){
            console.log("entered previous");
            if(c<section.length){
                section[c--].style.display="none";
                section[c].style.display="initial";
                typewriter(c);
            }
            if(c==0){
                document.getElementById("previous").style.display="none";
            }
        }
    }

if(document.getElementById("answer")){
    console.log("answer");
}