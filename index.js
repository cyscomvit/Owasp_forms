//toggle view



function myText() {
  var x = document.getElementById("text");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}

function myTextArea(){

  var x = document.getElementById("textArea");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}

function myCheckBox(){
  var x = document.getElementById("checkBox");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.getElementById("newsectionbtn").onclick = function() {
var tile = document.getElementById("tile");
var section = document.getElementById("mainsection");
var clone = tile.cloneNode(true)                                            // Create a clone to avoid overwriting
var num = document.getElementById("mainsection").childElementCount;         // Count number of children in mainsection
clone.setAttribute("id","tile"+num);                                        // Set new id as tile + num eg: tile1,tile2,tile3
section.appendChild(clone);                                                 // Add clone tile to the existing section, don't add sections to tiles
}

// Always include script tags after the document body and css files before the document body