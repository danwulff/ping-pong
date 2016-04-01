// business logic
var pingPong = function(number, output) {

  for (index = 1; index <= number; index++) {
    var temp = index;
    if (temp % 5 === 0 && temp % 3 === 0) {
      temp = "pingpong";
    }
    else if (temp % 5 === 0) {
      temp = "pong";
    }
    else if (temp % 3 === 0) {
      temp = "ping";
    }
    $(output).append("<li>" + temp + "</li>");
  }
};



// user interface logic
$(document).ready(function(){
  $("#input").submit(function(event) {
    event.preventDefault();
    //get value from form
    var number = parseInt($("#number").val());
    //check for number input
    if (isNaN(number)) {
      alert("Please enter a number!");
    } else {
      //call pingPong function
      pingPong(number, "#number-list");
    }
  });
});
