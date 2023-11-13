$(document).ready(function() {
  $(".car-left").click(function() {
    $(".mover-left").animate({left: "2000px"}, 2000);
    $(".mover-left").animate({top: "-200px"}, 250);
    $(".mover-left").animate({left: "-500px"}, 250);
    $(".mover-left").animate({top: "0px"}, 250);
    $(".mover-left").animate({left: "0px"}, 2000);
  });
  $(".car-right").click(function() {
    $(".mover-right").animate({left: "-2000px"}, 2000);
    $(".mover-right").animate({top: "-200px"}, 250);
    $(".mover-right").animate({left: "500px"}, 250);
    $(".mover-right").animate({top: "0px"}, 250);
    $(".mover-right").animate({left: "0px"}, 2000);
  });
});

function results() {
	const amount = document.querySelector('#amount').value;
	const interest_rate = document.querySelector('#int_rate').value;
	const months = document.querySelector('#months').value;
	const interest = (amount * (interest_rate * 0.01)) / months;
	
	let payment = ((amount / months) + interest).toFixed(2);
	
	payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	
	return document.querySelector('#payment').innerHTML = `Monthly Payment = ${payment}`
}

function car_submission() {
  var amount = document.querySelector("#car_price");
  var money = amount.options[amount.selectedIndex].value;
  if (money == "less_twenty" || money == "great_twenty") {
    window.location.href = "../html/new_Cars.html";
  }
  else if (money == "Price") {
    alert("Please select a price range")
  }
  else {
    window.location.href = "../html/used_Cars.html";
  }
}

function imgScroll () {
  var x = 0;
  var wheel = ["../images/img-wheel01.jpeg", "../images/img-wheel02.jpg", "../images/img-wheel03.jpg", "../images/img-wheel04.jpg", "../images/img-wheel05.jpg"];
  var scroll = setInterval( function() {
      if(wheel.length <= x) {
          x = 0;
      }
      else {
        document.getElementById("scrolling-img").src = wheel[x]; 
        x++;
      }
  },
  5000);
}