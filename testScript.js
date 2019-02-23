$(document).ready(function () {

	var localStorageData = localStorage.getItem('app');
	var app = {
		tasks: []
	}
	if (localStorageData) {
		app = JSON.parse(localStorageData);
	}

	if (app.tasks.length) {
		for (var i = 0; i < app.tasks.length; i++) {
			$('#list').append('<li><input class="complete"  id="item" type="checkbox"/>' + app.tasks[i] + '<span aria-hidden="true"  class="deletetask">&times;</span></li>');
		}

	}


	$("#list").on('change', '.complete', complete);

	function complete() {
		$(this).parent().toggleClass('done');

	}

	

	$("#list").on('click', '.deletetask', deletetask);

	function deletetask() {
		var deletedTask = $(this).parent().text();
		deletedTask = deletedTask.substring(0, deletedTask.length - 1);
		var index = app.tasks.indexOf(deletedTask);
		if (index !== -1) app.tasks.splice(index, 1);
		localStorage.setItem('app', JSON.stringify(app));
		$(this).parent().remove();

	}

	$('todo').submit(function (event) {
		event.preventDefault();


	});

});