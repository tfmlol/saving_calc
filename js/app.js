function calculateSavings(data){
	// determine the number of months between now and the goal date.

	var today = new Date();

	var currentMonth = today.getMonth();
	var currentYear = today.getYear();

	var numberOfMonths = 10;
	return numberOfMonths * data.monthlyContributions;
}

$(document).ready(function(){

	console.log('jQuery loaded.');

	$('form').submit(function(event){

		// get the form data

		var formData = {
			'savingsGoalReason': $('#savingsGoalReason').val(),
			'goalMonth': $('#goalMonth').val(),
			'goalYear': $('#goalYear').val(),
			'savingsGoalAmount': $('#savingsGoalAmount').val(),
			'monthlyContributions': $('#monthlyContributions').val(),
		};

		// validate the form data


		// process the form data

		totalSavings = calculateSavings(formData);

		console.log(totalSavings);

		if (totalSavings >= savingsGoalAmount){
			var message = "You are on track for your savings goal.";
		} else {
			var message = "Sorry, you need to increase your monthly contribution."
		}

		$('#results').text(message);

		event.preventDefault();

	});
});