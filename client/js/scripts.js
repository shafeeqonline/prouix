  var newbox = $('<div>').addClass('newpackages');
  $('<input>').attr('name','package').appendTo(newbox).attr('placeholder', 'Package name');
  $('<input>').attr('name','version').appendTo(newbox).attr('placeholder', 'Version number');

  $('form#package .addmore').on('click', function(){
  	var dupbox = newbox.clone();
  	dupbox.insertAfter($('form#package div:last'))
})

$('form#package').on('submit', function(e){
	e.preventDefault();
	var packagedata = {}, dataToSend = {};

	dataToSend.projectname = $(this).find('input[name="projectname"]').val();
	console.log($(this).find('input[name="projectname"]').val())
	dataToSend.cssname = $(this).find('input[name="cssname"]').val();
	console.log(packagedata)
	$(this).find('.predefined input:checkbox').each(function(i, v){
		if($(v).prop('checked')){
			var version = $(v).parent().find('input:text').val();
			version = version || "latest";
			packagedata[$(v).attr('name').toLowerCase()] = version;
		}
	})
	$('.newpackages').each(function(i, v){
		var version = $(v).find("input[name='version']").val();
		version = version || "latest";
		packagedata[$(v).find("input[name='package']").val().toLowerCase()] = version;
	})

	dataToSend['packagedata'] = packagedata ;

	$.ajax({
	  type: "POST",
	  url: '/createpackage',
	  data: dataToSend,
	  success: function(data){
	  	console.log("Its done ", data)
	  }
	});
})
