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



function delet(N) {
  
  var note =  document.getElementById('N');
  
  
  note.parentNode.removeChild(note);

}

let N = 0;

function writenote(){   

  const keep = [];
  let i = 0;
  const keep2 =[];
  

  keep2.push(document.getElementById("heading").value);  // запись заголовка
  var list = document.getElementById('output')
  var note = document.createElement('note');
  note.setAttribute("class","note");
  note.setAttribute("id","N");
  var h2 = document.createElement('H2')
  h2.setAttribute('id','h2')
  h2.innerHTML = keep2[i]
  list.appendChild(note)
  note.appendChild(h2);
   
  
  keep.push(document.getElementById("note").value);  // запись заметки
  var li = document.createElement('LI')
  li.setAttribute("class","notee")
  li.setAttribute('id','li')
  li.innerHTML = keep[i]
  note.appendChild(li)

  var button = document.createElement('button');
  button.setAttribute("class","delet");
  button.setAttribute('onclick','delet(N)');
  button.setAttribute("type","button");
  button.innerHTML = "удалить";
  note.appendChild(button);

  var edit = document.createElement('button');
  edit.setAttribute("class","delet");
  edit.setAttribute('onclick','edit(N)');
  edit.setAttribute("type","button");
  edit.innerHTML = 'редактировать';
  note.appendChild(edit);


  N++;
  i++;

}


function edit(N){

  var note = document.getElementById('N')
  
  var h2 = note.childNodes[0].firstChild;
  var li = note.childNodes[1].firstChild;
 
  var input = document.createElement('input');
  input.setAttribute('type','text');
  input.setAttribute('class','edit');
  input.setAttribute('size','60');
  input.setAttribute('raw','30');
  
  note.childNodes[1].appendChild(input);
  







  // h2.textContent= 'kek';


}