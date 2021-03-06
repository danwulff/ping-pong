// business logic
//takes a number and creates an array of elements following the ping pong pattern
var pingPong = function(number) {
  var numbers = [];
  for (index = 1; index <= number; index++) {
    //temp variable that will be changed to string if criteria is met
    var temp = index;
    //if divisble by 5 & 3, print pingpong
    if (temp % 5 === 0 && temp % 3 === 0) {
      temp = "pingpong";
    }
    //if divisble by 5 print pong
    else if (temp % 5 === 0) {
      temp = "pong";
    }
    //if divisble by 3 print ping
    else if (temp % 3 === 0) {
      temp = "ping";
    }
    //push number
    numbers.push(temp);
  }
  return numbers;
};


// $(output).append("<li>" + temp + "</li>");

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
      //clear previous list
      $("#number-list").html("");
      //call pingPong function and save to list array
      var list = pingPong(number);
      //for each list item, append into html list
      list.forEach(function(item) {
        $("#number-list").append("<li>" + item + "</li>");
      });
    }
  });
});
