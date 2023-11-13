
$(document).ready(function() {
  $("#left_car_button").click(function() {
    var pos = $("#mover").position();
    $("#mover").animate({left: "2000px"}, 2000);
    $("#mover").animate({top: "-200px"}, 250);
    $("#mover").animate({left: "-500px"}, 250);
    $("#mover").animate({top: "0px"}, 250);
    $("#mover").animate({left: "0px"}, 2000);
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
