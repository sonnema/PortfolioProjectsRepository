$(document).ready(function(){
  //var resultVal = 0;  
  //var inputLabel = $('#inputValue').html();
  var currentVal = '';
  //alert(inputLabel);
  $('.btn').click(function(obj){
    var btnPressed = $(this).html();
    if(btnPressed === 'CE')
      {
        currentVal = '';
        $('#inputValue').html(currentVal);
      }
    if($.isNumeric(btnPressed))
      {
        currentVal  += parseFloat(btnPressed); 
        $('#inputValue').html(currentVal);
      }
    else if(btnPressed === '+')
      {
            currentVal += '+';
            $('#inputValue').html(currentVal);
      }
    else if(btnPressed === '-')
      {
            currentVal += '-';
            $('#inputValue').html(currentVal);
      }
    else if(btnPressed === '*')
      {
            currentVal += '*';
            $('#inputValue').html(currentVal);
      }
    else if(btnPressed === '/')
      {
            currentVal += '/';
            $('#inputValue').html(currentVal);
      }
    else if(btnPressed === '.')
      {
            currentVal += '.';
            $('#inputValue').html(currentVal);
      }
    else if(btnPressed === '=')
      {
        console.log(eval(currentVal));
        $('#inputValue').html(eval(currentVal));
      }     
  });
});
