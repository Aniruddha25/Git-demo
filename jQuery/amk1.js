function addtext()
{
    $("#p1").html('This is paragraph 1');
    $("#p2").html('This is paragraph 2');
    $("#p3").text('This is paragraph 3');
    




}
function add()
{
  const n1 = parseInt(document.getElementById('n1').value);
  
  const n2 = parseInt(document.getElementById('n2').value);
  const result = n1+n2;
  $("#result").html('Result is :'+ result);
  $("#result").css('font-weight','bold');
  





}
