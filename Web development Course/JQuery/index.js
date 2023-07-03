$("h1").css("color", "blue");

$("input").keypress(function(event){
      var inputValue = event.key;
      $("h1").text(inputValue);
})