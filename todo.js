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
  document.getElementById("heading").value = "";
  document.getElementById("note").value = "";
  
}



function delet(val) {
  var kk = parseInt(val.match(/\d+/));
  var note = document.getElementById(kk);
  note.remove();
}

let N = 0;
function writenote(){   

  const keep = [];
  let i = 0;
  const keep2 =[];
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

  N++;
  i++;

}
let editstatus = 0;
function edit(val){

  if (editstatus == 0){
    editstatus = 1;
  document.getElementById(val).disabled = true;
  var kk = parseInt(val.match(/\d+/));
  let but = 'buttt'+kk;
  var note = document.getElementById(kk);
  var h2 = note.childNodes[0].firstChild;
  var li = note.childNodes[1].firstChild;

  var input = document.createElement('input');// заголоков заметки
  input.setAttribute("class",'edith');
  input.setAttribute("size",'30');
  input.setAttribute('id','Hiedit')
  input.value=h2.nodeValue;
  note.appendChild(input);

  var text=document.createElement('textarea'); //текс заметки
  text.setAttribute('style','editli');
  text.setAttribute("cols",'75');
  text.setAttribute('id','liedit');
  text.value=li.nodeValue;
  note.appendChild(text);

  var save = document.createElement('button'); // кнопка сохранить редактированный текст
  save.setAttribute("class","ppdel");
  save.setAttribute('onclick','saveedit(this.id)');
  save.setAttribute("type","button");
  save.setAttribute('id',but);
  save.innerHTML = 'сохранить';
  note.appendChild(save);
  }
  else{
  return;
  }
}

  function saveedit(val) {
    var kk = parseInt(val.match(/\d+/));
    let Hvar;
    let Lvar;
    const keep3=[];
    const keep4=[];
    let i = 0;
    let butedit = 'butt'+kk;
    keep3.push(document.getElementById("Hiedit").value);
    keep4.push(document.getElementById("liedit").value);
    Hvar = keep3[i];
    Lvar = keep4[i];    
    i++;
    
    var note = document.getElementById(kk);
    var h2 = note.childNodes[0].firstChild;
    var li = note.childNodes[1].firstChild;

    h2.nodeValue = Hvar;
    li.nodeValue = Lvar;
  


    var hedit = document.getElementById('Hiedit');
    var liedit = document.getElementById('liedit');
  
    var button = document.getElementById(val);
    editstatus = 0;     // возвращает статут редактирования
    button.remove();
    hedit.remove();
    liedit.remove();
    document.getElementById(butedit).disabled = false;  // включает кнопку редактирования

    


}