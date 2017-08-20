$(function() {
	if(localStorage.getItem('htapp') === null || typeof init != "undefined"){
		var init = {
			first: true,
			start: '',
			target: 0,
			units: 'metric'
		}

		firstStart();

	} else {
		var init = JSON.parse(localStorage.getItem('htapp'));

		$('.init-container').hide();

		console.log('profile found');
	}

	function firstStart(){
		var inputTarget = $('#target');
		var date, d, m, y;

		date = new Date();
		d = date.getDate();
		m = date.getMonth();
		y = date.getFullYear();

		var startDate = d+'/'+m+'/'+y; // set current date

		$('#fs-tg-save').on('click', function(){

			var errors = [];

			if(inputTarget.val() == ''){ // check target is set
				errors.push('Please enter a daily goal');
			}

			if(errors.length <= 0){ // continue
				init.target = toString(inputTarget.val());
				init.start = startDate;

				init.first = false;

				console.log('setup success');

				$('.init-container').hide();

				localStorage.setItem('htapp', JSON.stringify(init)); // save settings
			} else { // errors output to user
				var outputErrors = '';

				for(var i=0; i< errors.length; i++){
					outputErrors += errors[i]+'\n';
					console.log(errors[i]);
				}

				alert(outputErrors);
			}

		});

	} // end.firstStart()

	$(".water-container .wc-content").swipe( {
    	//Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        	if(direction == 'right'){
				$('.wc-content .wcc-pages').css('left','0');
				$('.wc-content .wcc-current-page ul li:nth-child(2)').removeClass('active');
				$('.wc-content .wcc-current-page ul li:nth-child(1)').addClass('active');
			}

			if(direction == 'left'){
				$('.wc-content .wcc-pages').css('left','-100%');
				$('.wc-content .wcc-current-page ul li:nth-child(1)').removeClass('active');
				$('.wc-content .wcc-current-page ul li:nth-child(2)').addClass('active');
			}
        }

    });

});
