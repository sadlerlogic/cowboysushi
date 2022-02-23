let blink = document.getElementById("blink");
blink.addEventListener("mouseover", function( event ) {
  event.target.style.color = "red";
   setTimeout(function() {
      event.target.style.color = "";
       }, 500);
       }, false);
       blink.addEventListener("mouseover", function( event ) {
         event.target.style.color = "yellow";
         setTimeout(function() {
            event.target.style.color = "";
            }, 500);
            }, false);

