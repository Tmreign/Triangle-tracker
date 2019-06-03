
// //  function join_numbers(){
   

//   var number1 =parseInt(prompt( document.getElementsByid('length')));
//   var number2 =parseInt(prompt( document.getElementsByid('width')));  
//   var number3 =parseInt(prompt( document.getElementsByid('height')));
function join()
{
    var number1 = parseFloat(document.getElementById('length').value);
    var number2 = parseFloat(document.getElementById('width').value);
    var number3 = parseFloat(document.getElementById('height').value);
 if(number1>0 && number2>0 && number3>0) 
      {
      if(number1===number2 && number2===number3 && number3===number1)
      {
        alert("equilateral");
      }
      else if(number1+number2<=number3 || number1+number3<=number2 || number2+number3<=number1)
      {
      alert("Not a triangle");
      }
      else if(number1===number2 || number2===number3 || number3===number1)
      {
        alert("issoceles");
      }
      else  if(number1 !==number2 && number1!==number3 && number2 !==number3)
      {
      alert("scalene");
      }
      else
    {
      alert("Values must be greater than zero")
    }
  }
}