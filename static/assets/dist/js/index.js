//toggle view

// function myText() {
//     var x = document.getElementById("text");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }

//   }

//   function myTextArea(){

//     var x = document.getElementById("textArea");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }

// }

// function myCheckBox(){
//     var x = document.getElementById("checkBox");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
// }

function toggleText(item) {
  parentEl = item.parentNode.parentNode;
  targetEl = parentEl.nextSibling.nextSibling.children[0];
  targetCont = parentEl.nextSibling.nextSibling;

  // var children = targetCont.childNodes;
  // var array = Array.prototype.slice.call(children);
  // children.forEach(function(item){
  //   item.style.display = "none";
  // });

  for (
    var child = targetCont.firstChild;
    child !== null;
    child = child.nextElementSibling
  ) {
    child.style.display = "none";
  }

  if (targetEl.style.display === "none") {
    targetEl.style.display = "block";
    temp = 0;
  } else {
    targetEl.style.display = "none";
  }
}

function myTextArea(item) {
  parentEl = item.parentNode.parentNode;
  targetEl = parentEl.nextSibling.nextSibling.children[1];
  targetCont = parentEl.nextSibling.nextSibling;

  for (
    var child = targetCont.firstChild;
    child !== null;
    child = child.nextElementSibling
  ) {
    child.style.display = "none";
  }

  if (targetEl.style.display === "none") {
    targetEl.style.display = "block";
    temp = 1;
  } else {
    targetEl.style.display = "none";
  }
}

function myCheckBox(item) {
  parentEl = item.parentNode.parentNode;
  targetEl = parentEl.nextSibling.nextSibling.children[2];
  targetCont = parentEl.nextSibling.nextSibling;

  for (
    var child = targetCont.firstChild;
    child !== null;
    child = child.nextElementSibling
  ) {
    child.style.display = "none";
  }

  if (targetEl.style.display === "none") {
    targetEl.style.display = "block";
    temp = 2;
  } else {
    targetEl.style.display = "none";
  }
}

document.getElementById("newsectionbtn").onclick = function () {
  var tile = document.getElementById("tile");
  var section = document.getElementById("mainsection");

  var clone = tile.cloneNode(true); // Create a clone to avoid overwriting
  var num = document.getElementById("mainsection").childElementCount; // Count number of children in mainsection
  clone.setAttribute("id", "tile" + num);
  // Set new id as tile + num eg: tile1,tile2,tile3
  section.appendChild(clone);

  // Add clone tile to the existing section, don't add sections to tiles
};

// document.getElementById("Submit").onclick=function(){

//   var num = document.getElementById("mainsection").childElementCount;
//   var shortAnswer=document.getElementById("textId");
//   var longAnswer=document.getElementById("longAnswer");
//   var checkBox=document.getElementById("checkBoxId");

//   for(var i=1;i<=num;i++){
//     // var shortAnswer=document.getElementById("textId");
//     // var longAnswer=document.getElementById("longAnswer");
//     // var checkBox=document.getElementById("checkBoxId");
//     var section=document.getElementById("tile"+i)
//     shortAnswer.setAttribute("id","textId"+i)
//     longAnswer.setAttribute("id","longAnswer"+i)
//     checkBox.setAttribute("id","checkBoxId"+i)
//    }

// }

// Always include script tags after the document body and css files before the document body

// removing div on buttton click

var temp = 0;

function select() {
  var num = document.getElementById("mainsection").childElementCount;

  for (var i = 0; i < num; i++) {
    var ele = $("#tile" + i).find("#answers");
    // console.log(ele);
    $(".answers:visible").each(console.log("Visible"));

    var res = $("ele > :visible");
    console.log(res);
  }
}
