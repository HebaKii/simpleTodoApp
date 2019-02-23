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



	/*
      var arr = [];
  
      $("#add").click(function () {
          $("#newtask").show(function () {
              var arr = [];
              arr.push(string);
              for (var tasks = 0; tasks < arr.length; tasks++) {
                  consol.log(tasks);
              }
              });
  
  
      })
  
      $("#newtask").append("#list");
     
      -----------------------------------------------------------------------------------
      */




	// var newtask = [];

	// $('#list').html(localStorage.getItem('list'));

	$('todo').submit(function (event) {
		event.preventDefault();


	});

	$("#new").click(
		function () {
			$("#newtask").show(function show() {

				$('#add').click(function write() {

					var newtask = $('#newtask').val();


					$('#list').append('<li><input class="complete"  id="item" type="checkbox"/>' + newtask + '<span aria-hidden="true"  class="deletetask">&times;</span></li>');
					app.tasks.push(newtask);
					localStorage.setItem('app', JSON.stringify(app));
					$('#newtask').val("");






				});

			});

		});

});