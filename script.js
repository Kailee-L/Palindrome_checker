
function checkPalindrome(){
  let result="";
  let cleantext="";
  const palindrome= document.getElementById("text-input");

  if (palindrome.value== ""){

    alert("Please input a value");
  }
  else {

    cleantext= palindrome.value.replace(/[^a-zA-Z0-9]/g,'');
    cleantext= cleantext.toLowerCase();

    result = document.getElementById("result");
    result.innerHTML= cleantext +' is a palindrome';

    let reversedtext= cleantext.split('').reverse().join('');

    if (cleantext===reversedtext){
      result = document.getElementById("result");
      result.innerHTML= palindrome.value+' is a palindrome';
    }

    else{
      result = document.getElementById("result");
      result.innerHTML= palindrome.value+' is not a palindrome';
    }
    
  }
  
}