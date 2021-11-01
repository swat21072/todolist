  // Get the modal
var modal = document.getElementById("myModal");
var modaledit = document.getElementById("editModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modaledit.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let numbernote = 0;
let editstatus = 0;

var save = document.getElementsByClassName("save")[0];  // кнопка сохранения
save.onclick = function() {

  writenote();
  
  modal.style.display = "none";
  document.getElementById("heading").value = "";
  document.getElementById("note").value = "";
}

function delet(val) {
  var kk = parseInt(val.match(/\d+/));
  let spis = 'spisok'+kk;
  var note = document.getElementById(kk);
  var spisok = document.getElementById(spis);
  note.remove();
  spisok.remove();
}

let N = 0;
function writenote(){   
  const keep = [];
  let i = 0;
  const keep2 =[];
  let spis = 'spisok'+N;
  let spisn = 'spisokn'+N;
  let but = 'but'+N;
  let but1 = 'butt'+N;

  keep2.push(document.getElementById("heading").value);  // запись заголовка
  var list = document.getElementById('output')
  var note = document.createElement('note');
  note.setAttribute("class","noteHi");
  note.setAttribute("id",N);
  var h2 = document.createElement('H2')
  h2.setAttribute('id','h2')
  h2.innerHTML = keep2[i]
  list.appendChild(note)
  note.appendChild(h2);
   
  keep.push(document.getElementById("note").value);  // запись заметки
  var li = document.createElement('LI')
  li.setAttribute("class","noteLi")
  li.setAttribute('id','li')
  li.innerHTML = keep[i]
  note.appendChild(li)

  var button = document.createElement('button'); // кнопка удалить заметку
  button.setAttribute("class","delet");
  button.setAttribute('onclick','delet(this.id)');
  button.setAttribute("type","button");
  button.setAttribute("id",but);
  button.innerHTML = "удалить";
  note.appendChild(button);

  var edit = document.createElement('button');  // кнопка редактировать заметку
  edit.setAttribute("class","delet");
  edit.setAttribute('onclick','edit(this.id)');
  edit.setAttribute("type","button");
  edit.setAttribute("id",but1);
  edit.innerHTML = 'редактировать';
  note.appendChild(edit);

  var spisok = document.getElementById('list');  // ссылки на зметки
  var number = document.createElement('li');
  number.setAttribute('id',spis);
  var a = document.createElement('a');
  a.setAttribute('href','#'+N);
  a.setAttribute('id',spisn);
  number.setAttribute('class','list');
  a.innerHTML = keep2[i];
  spisok.appendChild(number);
  number.appendChild(a);



  N++;
  i++;

}

function edit(val){

  modaledit.style.display = "block"  //open modal
  var kk = parseInt(val.match(/\d+/));
  let but = 'buttt'+kk;
  var note = document.getElementById(kk);
  var h2 = note.childNodes[0].firstChild;
  var li = note.childNodes[1].firstChild;
  var H = document.getElementById('edithead');
  var L = document.getElementById('editnote');
  H.value = h2.nodeValue;
  L.value = li.nodeValue;
  numbernote = kk;
  
}

var saved = document.getElementById('saveedit1');

saved.onclick = function (){
  saveeeed(numbernote);
  modaledit.style.display = "none";
}

function saveeeed(val){
  var note = document.getElementById(val);
    let spisok = 'spisokn'+val;
    let Hvar;
    let Lvar;
    const keep3=[];
    const keep4=[];
    let i = 0;
    keep3.push(document.getElementById("edithead").value);
    keep4.push(document.getElementById("editnote").value);
    Hvar = keep3[i];
    Lvar = keep4[i];    
    i++;
    var note = document.getElementById(val);
    var h2 = note.childNodes[0].firstChild;
    var li = note.childNodes[1].firstChild;

    h2.nodeValue = Hvar;
    li.nodeValue = Lvar;
    var list = document.getElementById(spisok);
    list.innerText = Hvar;

}
