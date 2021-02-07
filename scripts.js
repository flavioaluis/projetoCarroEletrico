$(document).ready(function(){
  
//
// -------------------- Carro Elétrico --------------------------
//

$("#rangeEletrico").on("slide", function()) {
 console.log ($("#rangeEletrico").getValue());
 console.log("auhsasuha");
});


$("#100km").click(function(){
 // const todo = $("#campo").val();
    console.log("dsdasdadas");  
     
    const consumo = $("#100km").val();
    

    // consumo = 100 / 10 * 2 ;
    // reais =  consumo * 0.50;
     

     $("#consumoenergia").prepend(`<li>${consumo}<li>`);
     $("consumo").val();
     $("#energiareais").prepend(`<li>${reais}<li>`);
     $(reais).val();

});

$("#200km").click(function(){
    var consumo;
    var reais;

     consumo = 200 / 10 * 2 ;
     reais =  consumo * 0.50;
     

     $("#consumoenergia").prepend(`<li>${consumo}<li>`);
     $(consumo).val();
     $("#energiareais").prepend(`<li>${reais}<li>`);
     $(reais).val();

});

$("#300km").click(function(){
    var consumo;
    var reais;

     consumo = 300 / 10 * 2 ;
     reais =  consumo * 0.50;
     

     $("#consumoenergia").prepend(`<li>${consumo}<li>`);
     $(consumo).val();
     $("#energiareais").prepend(`<li>${reais}<li>`);
     $(reais).val();

});

$("#400km").click(function(){
    var consumo;
    var reais;

     consumo = 400 / 10 * 2 ;
     reais =  consumo * 0.50;
     

     $("#consumoenergia").prepend(`<li>${consumo}<li>`);
     $(consumo).val();
     $("#energiareais").prepend(`<li>${reais}<li>`);
     $(reais).val();

});

$("#500km").click(function(){
    var consumo;
    var reais;

     consumo = 500 / 10 * 2 ;
     reais =  consumo * 0.50;
     

     $("#consumoenergia").prepend(`<li>${consumo}<li>`);
     $(consumo).val();
     $("#energiareais").prepend(`<li>${reais}<li>`);
     $(reais).val();

});

$("#600km").click(function(){
 var consumo;
 var reais;

  consumo = 600 / 10 * 2 ;
  reais =  consumo * 0.50;
  

  $("#consumoenergia").prepend(`<li>${consumo}<li>`);
  $(consumo).val();
  $("#energiareais").prepend(`<li>${reais}<li>`);
  $(reais).val();

});


//
// -------------------- Carro Combustão --------------------------
//


$("#100kmm").click(function(){
 var consumo;
 var reais;

  consumo = 100 / 10 * 2 ;
  reais =  consumo * 0.50;
  

  $("#consumoenergia").prepend(`<li>${consumo}<li>`);
  $(consumo).val();
  $("#energiareais").prepend(`<li>${reais}<li>`);
  $(reais).val();

});

$("#200kmm").click(function(){
 var consumo;
 var reais;

  consumo = 200 / 10 * 2 ;
  reais =  consumo * 0.50;
  

  $("#consumoenergia").prepend(`<li>${consumo}<li>`);
  $(consumo).val();
  $("#energiareais").prepend(`<li>${reais}<li>`);
  $(reais).val();

});

$("#300kmm").click(function(){
 var consumo;
 var reais;

  consumo = 300 / 10 * 2 ;
  reais =  consumo * 0.50;
  

  $("#consumoenergia").prepend(`<li>${consumo}<li>`);
  $(consumo).val();
  $("#energiareais").prepend(`<li>${reais}<li>`);
  $(reais).val();

});

$("#400kmm").click(function(){
 var consumo;
 var reais;

  consumo = 400 / 10 * 2 ;
  reais =  consumo * 0.50;
  

  $("#consumoenergia").prepend(`<li>${consumo}<li>`);
  $(consumo).val();
  $("#energiareais").prepend(`<li>${reais}<li>`);
  $(reais).val();

});

$("#500kmm").click(function(){
    var consumo;
    var reais;

     consumo = 500 / 10 * 2 ;
     reais =  consumo * 0.50;
     

     $("#consumoenergia").prepend(`<li>${consumo}<li>`);
     $(consumo).val();
     $("#energiareais").prepend(`<li>${reais}<li>`);
     $(reais).val();

});

$("#600kmm").click(function(){
 var consumo;
 var reais;

  consumo = 600 / 10 * 2 ;
  reais =  consumo * 0.50;
  

  $("#consumoenergia").prepend(`<li>${consumo}<li>`);
  $(consumo).val();
  $("#energiareais").prepend(`<li>${reais}<li>`);
  $(reais).val();

});

})