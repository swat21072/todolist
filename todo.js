function addlist() {
    document.getElementById("list").innerHTML = "<textarea>Some text...</textarea>"; // окно записи текста 
    // document.getElementById("list").onclick = add() {
          
  }

  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var save = document.getElementsByClassName("save")[0];  // кнопка сохранения
save.onclick = function() {

  writenote();

  modal.style.display = "none";
  
}



delet.onclick = function(){
  
  var note =  document.getElementById('output');
  note.appendChild.remove();

}

function writenote(){   

  const keep = [];
  let i = 0;
  const keep2 =[];

  keep2.push(document.getElementById("heading").value);  // запись заголовка
  var list = document.getElementById('output')
  var li = document.createElement('H2')
  li.innerHTML = keep2[i]
  list.appendChild(li)

  keep.push(document.getElementById("note").value);  // запись заметки
  var list = document.getElementById('output')
  var li = document.createElement('LI')
  li.innerHTML = keep[i]
  list.appendChild(li)
 
  i++;

}


