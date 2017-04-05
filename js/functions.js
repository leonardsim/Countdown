$(document).ready(function(){

	// target the element for countdown to be injected
	// plugin will add class 'is-countdown', which will add span with class 'countdown-row countdown-show4'
	// 
	$('.my-countdown').countdown({

		// $.countdown.UTCDate( timezone, year (4 digits), month (0-11), day(1-31), hours(0-23), mins(0-59), secs(0-59), ms(0, 999));
		// Haley Comet [July 28, 2061]
		// https://www.timeanddate.com/time/map
		// keith-wood.name/countdownt.html
		until: $.countdown.UTCDate(
			+11, 2018, 6, 28, 22, 0, 0, 0
			)/*,
		format: 'dhm',
		layout: '<p>{dl}, {dn}</p>' // dl = days label, dn = days number*/
	});
});