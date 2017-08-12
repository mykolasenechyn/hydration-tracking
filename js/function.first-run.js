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
	
}