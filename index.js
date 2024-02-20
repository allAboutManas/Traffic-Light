function red(){
    document.getElementsByClassName('stop')[0].style.backgroundColor = "red";
    document.getElementsByClassName('wait')[0].style.backgroundColor = "black";
    document.getElementsByClassName('go')[0].style.backgroundColor = "black";
 }
 function yellow(){
    document.getElementsByClassName('wait')[0].style.backgroundColor = "yellow";
    document.getElementsByClassName('stop')[0].style.backgroundColor = "black";
    document.getElementsByClassName('go')[0].style.backgroundColor = "black";
 }
 function green(){
    document.getElementsByClassName('go')[0].style.backgroundColor = "green";
    document.getElementsByClassName('wait')[0].style.backgroundColor = "black";
    document.getElementsByClassName('stop')[0].style.backgroundColor = "black";
 }
