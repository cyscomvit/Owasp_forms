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

//console.log(lastSibling(document.getElementById("container")))

// document.getElementById("newsectionbtn").addEventListener("click", function () {
//   var tile_child = document.getElementById("mainsection").children;
//   var tiles_num = tile_child.length


//   console.log(selectDisplayed("tile"))
//   for (var i = 1; i < tile_child.length; i++) {
//     var tile_string = "tile" + i
//     console.log(tile_string)
//     console.log(selectDisplayed(tile_string)[0].children[0].value);
//   }
//   console.log("break");
// });


function lastSibling(node){
    return node.children[node.children.length - 1]                // Custom function to get last Sibling of any node
}

function selectDisplayed(node) {
    return Array.from(lastSibling(document.getElementById(node)).children).filter(s =>      // Make Nodelist of all children of a given node and filter using display property 
      window.getComputedStyle(s).getPropertyValue('display') != 'none'
  );
}

function  getValues() {                                                     // Use getValues to get whole form data when submitting form
  var tile_child = document.getElementById("mainsection").children;
  var tiles_num = tile_child.length

  console.log("tile")
  console.log(selectDisplayed("tile")[0].children[0].value)
  for (var i = 1; i < tile_child.length; i++) {
    var tile_string = "tile" + i
    console.log(tile_string)
    console.log(selectDisplayed(tile_string)[0].children[0].value);
  }
  console.log("break");                                                     // console statement break to distinguish different tile outputs
}

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
