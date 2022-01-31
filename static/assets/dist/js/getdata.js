const question = document.getElementById("question");
const shortAnswer = document.getElementById("textId");
const LongAnswer = document.getElementById("longAnswer");
const checkbox = document.getElementById("checkBoxId");

// document.getElementById("newsectionbtn").addEventListener("click",function () {
//   const question = document.getElementById("question");
//   const shortAnswer = document.getElementById("textId");
//   const LongAnswer = document.getElementById("longAnswer");
//   const checkbox = document.getElementById("checkBoxId");
//  console.log(question)

// });

document.getElementById("newsectionbtn").addEventListener("click", function () {
  var tile_child = document.getElementById("mainsection").children;

  for (var i = 0; i < tile_child.length; i++) {
    console.log(tile_child[i]);
  }
});

// function func(){
//     var xml=new XMLHttpRequest();
//     xml.open("POST","{{url_for(func)}}",true);
//     xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//     xml.onload=function(){
//         var dataReply=JSON.parse(this.responseText)
//         alert(dataReply)
//     }
//     document.getElementById("Submit").addEventListener("click",function(){
//         var tile_child=document.getElementById("mainsection").children
//         dataSend=JSON.stringify({'data':tile_child})
//     })
//     xml.send(dataSend)
// }
