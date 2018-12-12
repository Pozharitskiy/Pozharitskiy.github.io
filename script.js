// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
var mas=[];
var mas=document.querySelector(".put").value;
var one=document.querySelector(".list");
var two=document.querySelector(".all");
var ccc=function(){
  one.style.display='block';
  two.style.display='none';
  document.querySelector(".close").style.display='none';
}
var back=function(){
  one.style.display='none';
  two.style.display='flex';
  document.querySelector(".close").style.display='block'; 
}
