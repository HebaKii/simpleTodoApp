$(document).ready(function () {
	var localStorageData = localStorage.getItem('app');
	var app = {
		tasks: []
	}
	if (localStorageData) {
		app = JSON.parse(localStorageData);
	}
		$('#add').click(function write() {
			var newtask = $('#newtask').val();
			
			$('#list').append('<li><input class="complete"  id="item" type="checkbox"/>' + newtask + '<span aria-hidden="true"  class="deletetask">&times;</span></li>');
			app.tasks.push(newtask);
			localStorage.setItem('app', JSON.stringify(app));
			$('#newtask').val("");
		});
	});