$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    let sentence = $("input#sentence").val(); 
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
   
    let sentenceArray = sentence.split(''); 
    for(let index = 0; index < sentenceArray.length; index++) {
      if (vowels.includes(sentenceArray[index])){ 
        sentenceArray[index] = "-"; 
      }      
    }
    
    let result = sentenceArray.join(""); 

    $(".output").text(result);
  });
});