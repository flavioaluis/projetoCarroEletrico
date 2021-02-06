$(document).ready(function(){
$("#button").click(function(){
    const rodados = $("#descricao").val();
    if(!rodados)
    return; //clausula guarda
    var consumo1;
    var reais1;
    var consumo2;
    var reais2;
  consumo1 = rodados / 10 * 2 ;
  reais1 =  consumo1 * 0,50;
  consumo2 = rodados / 10;
  reais2= consumo2 * 5;
  $("#consumoenergia").prepend(`<li>${consumo1}<li>`);
  $("#consumoenergia").prepend(`<li>${reais1}<li>`);
  $("#gasolina").prepend(`<li>${consumo2}<li>`);
  $("#gasreais").prepend(`<li>${reais2}<li>`);
    
})


})