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

function toggleText(item){ 
  parentEl = item.parentNode.parentNode; 
  targetEl = parentEl.nextSibling.nextSibling.children[0];
  targetCont = parentEl.nextSibling.nextSibling;

 // var children = targetCont.childNodes;
 // var array = Array.prototype.slice.call(children);
 // children.forEach(function(item){
 //   item.style.display = "none";
 // });

 for(var child=targetCont.firstChild; child!==null; child=child.nextElementSibling) {
   child.style.display = "none";
}


  if (targetEl.style.display === "none") {
     targetEl.style.display = "block";
   } else {
     targetEl.style.display = "none";
   }
}

function myTextArea(item){ 
  parentEl = item.parentNode.parentNode; 
  targetEl = parentEl.nextSibling.nextSibling.children[1];
  targetCont = parentEl.nextSibling.nextSibling;

 for(var child=targetCont.firstChild; child!==null; child=child.nextElementSibling) {
   child.style.display = "none";
}

  if (targetEl.style.display === "none") {
     targetEl.style.display = "block";
   } else {
     targetEl.style.display = "none";
   }
}

function myCheckBox(item){ 
  parentEl = item.parentNode.parentNode; 
  targetEl = parentEl.nextSibling.nextSibling.children[2];
  targetCont = parentEl.nextSibling.nextSibling;

 for(var child=targetCont.firstChild; child!==null; child=child.nextElementSibling) {
   child.style.display = "none";
}

  if (targetEl.style.display === "none") {
     targetEl.style.display = "block";
   } else {
     targetEl.style.display = "none";
   }
}

document.getElementById("newsectionbtn").onclick = function() {
  console.log("hi");
 var tile = document.getElementById("tile");
 var section = document.getElementById("mainsection");
 var clone = tile.cloneNode(true)                                            // Create a clone to avoid overwriting
 var num = document.getElementById("mainsection").childElementCount;         // Count number of children in mainsection
 clone.setAttribute("id","tile"+num);                                        // Set new id as tile + num eg: tile1,tile2,tile3
 section.appendChild(clone);                                                 // Add clone tile to the existing section, don't add sections to tiles
}

// Always include script tags after the document body and css files before the document body

// removing div on buttton click

function removeQuestion(){
  var remQue=document.getElementById("tile");
  remQue.remove();
}

