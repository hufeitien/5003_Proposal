

ityped.init('#ityped', {
    strings:['that connects you and your deceased loved ones.', 'where you can send messages to your loved ones', 'where you can tell secrets without revealing yourself'],
    startDelay: 200,
    loop: true
  });

function ShowTheMessage() {
  var NameOfSomeone = document.getElementById("ToSomeone");
}

function send(){
var user= document.querySelector("#ToSomeone").value;
var content=
document.querySelector("textarea").value;

var output= "Dear "+user+","+content;

var letter=document.querySelector("#DearMessage")

letter.innerHTML=output;

}
