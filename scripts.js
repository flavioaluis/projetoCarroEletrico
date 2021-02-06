$(document).ready(function(){
  

    

//
// -------------------- Carro Elétrico --------------------------
//

    $("#10km").click(function(){
       var consumo1;
       var reais1;
   
        consumo1 = 10 / 10 * 2 ;
        reais1 =  consumo1 * 0.50;
        
  
        $("#consumoenergia").prepend(`<li>${consumo1}<li>`);
        $(consumo1).val();
        $("#energiareais").prepend(`<li>${reais1}<li>`);
        $(reais1).val();

});

$("#50km").click(function(){
    var consumo;
    var reais;

     consumo = 50 / 10 * 2 ;
     reais =  consumo * 0.50;
     

     $("#consumoenergia").prepend(`<li>${consumo}<li>`);
     $(consumo).val();
     $("#energiareais").prepend(`<li>${reais}<li>`);
     $(reais).val();

});

$("#100km").click(function(){
    var consumo;
    var reais;

     consumo = 100 / 10 * 2 ;
     reais =  consumo * 0.50;
     

     $("#consumoenergia").prepend(`<li>${consumo}<li>`);
     $(consumo).val();
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


//
// -------------------- Carro Combustão --------------------------
//


$("#10kmm").click(function(){
    var consumo1;
    var reais1;

     consumo1 = 10 / 10 * 2 ;
     reais1 =  consumo1 * 0.50;
     

     $("#consumoenergia").prepend(`<li>${consumo1}<li>`);
     $(consumo1).val();
     $("#energiareais").prepend(`<li>${reais1}<li>`);
     $(reais1).val();

});

$("#50kmm").click(function(){
 var consumo;
 var reais;

  consumo = 50 / 10 * 2 ;
  reais =  consumo * 0.50;
  

  $("#consumoenergia").prepend(`<li>${consumo}<li>`);
  $(consumo).val();
  $("#energiareais").prepend(`<li>${reais}<li>`);
  $(reais).val();

});

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

})