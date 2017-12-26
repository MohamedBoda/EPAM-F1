$(document).ready(function(){
    
     jQuery("body").fitText(2.5, { minFontSize: '1px', maxFontSize: '25px' });

     
 });
 
 function openNav() {
   document.getElementById("myNav").style.width = "100%";
}


function closeNav() {
   document.getElementById("myNav").style.width = "0%";
}



$(document).ready(function() {
  
  'use strict';
 
  new WOW().init();
  
});