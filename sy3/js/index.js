var p = document.querySelectorAll(".m-item");
var li = document.querySelectorAll("li.m-item");

document.getElementById("p1").onclick=function(){changeColor()};
p[1].onclick=function(){changeDate()};
p[2].onclick=function(){addClass()};
p[3].onclick=function(){removeChild()};
p[4].onclick=function(){openNewWindow()};
p[5].onclick=function(){addNewLi()};
p[6].onclick=function(){changeWidth()};





function changeColor() {
  alert("序号:p1");
  document.getElementById("p1").style.color="red";
}

function changeDate() {
  alert("序号:p2");
  var today = new Date();
  var y = today.getFullYear();
  var m = today.getMonth();
  var d = today.getDate();
  var h1 = document.querySelector("h1");
  h1.innerHTML=y+"-"+m+"-"+d;
}

function addClass() {
  alert("序号:p3");
  for(var i=0;i<li.length;i++){
    li[i].classList.add("fn-active");
  }
}

function removeChild() {
  alert("序号:p4");
  li[7].parentNode.removeChild(li[7]);
}

function openNewWindow() {
  alert("序号:p5");
  window.open("https://www.taobao.com")
}

function addNewLi() {
  alert("序号:p6");
  var para = document.createElement("li");
  var p9 = document.createTextNode("p9");
  para.appendChild(p9);
  var element = document.querySelector("ul");
  element.appendChild(para);
}

function changeWidth() {
  alert("序号:p7");
  var screenWidth = screen.availWidth;
  document.querySelector(".m-box").style.width = screenWidth+'px';
}

