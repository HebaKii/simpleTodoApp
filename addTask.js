$(document).ready(function () {
	var localStorageData = localStorage.getItem('app');
	var app = {
		tasks: [],
	}
	
	var $add =$('#add');	
	var $new =$('#newtask');


	$add.on('click' , writeNewTask);

	if (localStorageData) {
		app = JSON.parse(localStorageData);
	}
		
		
		function writeNewTask() {
			var newtask = $new.val();
			
			$('#list').append('<li><input class="complete"  id="item" type="checkbox"/>' + newtask + '<span aria-hidden="true"  class="deletetask">&times;</span></li>');
			app.tasks.push(newtask);
			localStorage.setItem('app', JSON.stringify(app));
			$new.val("");
		};

		
		
			




	});