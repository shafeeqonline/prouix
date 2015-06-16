  var newbox = $('<div>').addClass('newpackages');
  $('<input>').attr('name','package').appendTo(newbox).attr('placeholder', 'Package name');
  $('<input>').attr('name','version').appendTo(newbox).attr('placeholder', 'Version number');

  $('form#package .addmore').on('click', function(){
  	var dupbox = newbox.clone();
  	dupbox.insertBefore($(this))
})

$('form#package').on('submit', function(e){
	e.preventDefault();
	var packagedata = {}, dataToSend = {}, bowerdata = {};

	$('#package').hide();
	$('#successmsg').show();
	$('#successmsg h3:first-child').text($('#successmsg h3:first-child').text() + ' ' + $(this).find('input[name="projectname"]').val())

	dataToSend.projectname = $(this).find('input[name="projectname"]').val();
	dataToSend.cssname = $(this).find('input[name="cssname"]').val();
	$(this).find('#packagejson .predefined input:checkbox').each(function(i, v){
		if($(v).prop('checked')){
			var version = $(v).parent().find('input:text').val();
			version = version || "latest";
			packagedata[$(v).attr('name').toLowerCase()] = version;
		}
	})
	$('#packagejson .newpackages').each(function(i, v){
		var version = $(v).find("input[name='version']").val();
		version = version || "latest";
		packagedata[$(v).find("input[name='package']").val().toLowerCase()] = version;
	})
	dataToSend['packagedata'] = packagedata ;

	$(this).find('#bowerjson .predefined input:checkbox').each(function(i, v){
		if($(v).prop('checked')){
			var version = $(v).parent().find('input:text').val();
			version = version || "latest";
			bowerdata[$(v).attr('name').toLowerCase()] = version;
		}
	})
	$('#bowerjson .newpackages').each(function(i, v){
		var version = $(v).find("input[name='version']").val();
		version = version || "latest";
		bowerdata[$(v).find("input[name='package']").val().toLowerCase()] = version;
	})
	dataToSend['bowerdata'] = bowerdata ;

	console.log(dataToSend)

	$.ajax({
	  type: "POST",
	  url: '/createpackage',
	  data: dataToSend,
	  success: function(data){
	  	console.log("Its done ", data)
	  }
	});
})
