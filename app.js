let myList = document.querySelectorAll('li')
for (let i = 0 ; i < myList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
 }

let list = document.querySelector('ul');
 list.addEventListener('click', function(e) {
   if (e.target.tagName === 'LI') {
     e.target.classList.toggle('checked');
   }
 });

 let close = document.querySelectorAll('.close')
 for (let i = 0; i < close.length; i++) {
     close[i].addEventListener('click', function(e){
         e.target.parentElement.style.display = "none"
     })
 }

let addButton = document.querySelector('.add')
addButton.addEventListener('click', function(){
    let li = document.createElement("LI");
    let inputText = document.querySelector(".inputText").value
    let text = document.createTextNode(inputText);
    li.appendChild(text)
    if (inputText === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
      }
    document.querySelector(".inputText").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    let close = document.querySelectorAll('.close')
    for (let i = 0; i < close.length; i++) {
     close[i].addEventListener('click', function(e){
         e.target.parentElement.style.display = "none"
     })
 }
})


