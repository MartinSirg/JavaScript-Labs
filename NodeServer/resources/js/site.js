$(document).ready(function () {
   $("#button") .click(function () {
       $("#content").load("http://127.0.0.1:3000/counter");
   })
});
