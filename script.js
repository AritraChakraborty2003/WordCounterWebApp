console.log("Hello World")
var ele=document.getElementById("submitBtn");
function scrollToWork(){
    var ele=document.getElementById("banner");
    ele.scrollIntoView(true);
    window.location.reload();
}
function resultDispatcher(){
    document.getElementById("outputManager").style.display='block';
    document.getElementById("outputManager").scrollIntoView(true);

    var dataSmall=document.getElementById("smallScreenInput").value;
    var dataLarge=document.getElementById("largeScreenInput").value;
    if(dataSmall==="" && dataLarge===""){
         alert("Please Enter the text material in the box");
         var ele=document.getElementById("banner");
         ele.scrollIntoView(true);
         document.getElementById("outputManager").style.display='none';
    }
    else if(dataSmall==="" && dataLarge!=""){
            let resArrWord=dataLarge.split(" ");
            let resArrChar=dataLarge.split("");
            let wordCount=resArrWord.length;
            let charCount=resArrChar.length;
            let wordBox=document.getElementById("resWords");
            let charBox=document.getElementById("resChars");
            wordBox.innerHTML=wordCount;
            charBox.innerHTML=charCount;
    }
    else{
        let resArrWord=dataSmall.split(" ");
        let resArrChar=dataSmall.split("");
        let wordCount=resArrWord.length;
        let charCount=resArrChar.length;
        let wordBox=document.getElementById("resWords");
        let charBox=document.getElementById("resChars");
        wordBox.innerHTML=wordCount;
        charBox.innerHTML=charCount;
          
    }


    var resBtn=document.getElementById("resBtn");
    resBtn.addEventListener("click",scrollToWork);


}



ele.addEventListener("click",resultDispatcher);