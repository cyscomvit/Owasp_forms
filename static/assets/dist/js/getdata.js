const question = document.getElementById("question");
const shortAnswer = document.getElementById("textId");
const LongAnswer = document.getElementById("longAnswer");
const checkbox = document.getElementById("checkBoxId");


document.getElementById("newsectionbtn").addEventListener("click",function () {
  const question = document.getElementById("question");
  const shortAnswer = document.getElementById("textId");
  const LongAnswer = document.getElementById("longAnswer");
  const checkbox = document.getElementById("checkBoxId");
 console.log(question)
 
});

document.getElementById("shortAnswerId").addEventListener("click",function(){
    console.log("Short answer added")
})

document.getElementById("ParagraphId").addEventListener("click",function(){
    console.log("Long answer added")
})


document.getElementById("checkBoxId").addEventListener("click",function(){
    console.log("checkbox added")
})




