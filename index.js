function red(){
    document.getElementsByClassName('stop')[0].style.backgroundColor = "red";
    document.getElementsByClassName('wait')[0].style.backgroundColor = "rgb(242, 242, 148)";
    document.getElementsByClassName('go')[0].style.backgroundColor = "rgb(140, 226, 140)";
 }
 function yellow(){
    document.getElementsByClassName('wait')[0].style.backgroundColor = "yellow";
    document.getElementsByClassName('stop')[0].style.backgroundColor = "rgb(230, 118, 118)";
    document.getElementsByClassName('go')[0].style.backgroundColor = "rgb(140, 226, 140)";
 }
 function green(){
    document.getElementsByClassName('go')[0].style.backgroundColor = "green";
    document.getElementsByClassName('wait')[0].style.backgroundColor = "rgb(242, 242, 148)";
    document.getElementsByClassName('stop')[0].style.backgroundColor = "rgb(230, 118, 118)";
 }