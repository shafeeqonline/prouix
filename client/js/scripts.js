    var newbox = $('<div>').addClass('newpackages row');
    $('<input>').attr({
      'type':'text',
      'name':'package',
      'placeholder':'Package name',
      'class': 'form-control'
    }).appendTo(newbox).wrap('<div class="col-md-6"></div>');
    $('<input>').attr({
      'type':'text',
      'name':'version',
      'placeholder':'Version',
      'class': 'form-control'
    }).appendTo(newbox).wrap('<div class="col-md-6"></div>');

    var newboxbower = $('<div>').addClass('newpackages row');
    $('<input>').attr({
        'type':'text',
        'name':'package',
        'placeholder':'Package name',
        'class': 'form-control'
    }).appendTo(newboxbower).wrap('<div class="col-md-6"></div>');
    $('<input>').attr({
        'type':'text',
        'name':'version',
        'placeholder':'Version',
        'class': 'form-control'
    }).appendTo(newboxbower).wrap('<div class="col-md-6"></div>');
  //$('<input>').attr('name','package').appendTo(newboxbower).attr('placeholder', 'Package name').attr('list', 'bowers');
  //$('<input>').attr('name','version').appendTo(newboxbower).attr('placeholder', 'Version number');  

  $('form#package #packagejson .addmore').on('click', function(){
  	var dupbox = newbox.clone();
  	dupbox.insertBefore($(this))
})
    $('form#package #bowerjson .addmore').on('click', function(){
  	var dupbox = newboxbower.clone();
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
	dataToSend.contwidth = $(this).find('input[name="contwidth"]').val();
	dataToSend.gutterwidth = $(this).find('input[name="gutterwidth"]').val();
	dataToSend.lrgdeskbrkpnt = $(this).find('input[name="lrgdeskbrkpnt"]').val();
	dataToSend.deskbrkpnt = $(this).find('input[name="deskbrkpnt"]').val();
	dataToSend.tabbrkpnt = $(this).find('input[name="tabbrkpnt"]').val();
	dataToSend.basefont = $(this).find('input[name="basefont"]').val();
	$(this).find('#packagejson .predefined input:checkbox').each(function(i, v){
		if($(v).prop('checked')){
			var version = $(v).parent().parent().find('input:text').val();
			version = version || "latest";
			packagedata[$(v).attr('name').toLowerCase()] = version;
		}
	})
	$('#packagejson .newpackages').each(function(i, v){
		var version = $(v).find("input[name='version']").val();
		version = version || "latest";
		if($(v).find("input[name='package']").val().toLowerCase() != 0)
			packagedata[$(v).find("input[name='package']").val().toLowerCase()] = version;
	})
	dataToSend['packagedata'] = packagedata ;

	$(this).find('#bowerjson .predefined input:checkbox').each(function(i, v){
		if($(v).prop('checked')){
			var version = $(v).parent().parent().find('input:text').val();
			version = version || "latest";
			bowerdata[$(v).attr('name').toLowerCase()] = version;
		}
	})
	$('#bowerjson .newpackages').each(function(i, v){
		var version = $(v).find("input[name='version']").val();
		version = version || "latest";
		if($(v).find("input[name='package']").val().toLowerCase() != 0)
		bowerdata[$(v).find("input[name='package']").val().toLowerCase()] = version;
	})
	dataToSend['bowerdata'] = bowerdata ;

	console.log(dataToSend);

	$.ajax({
	  type: "POST",
	  url: '/createpackage',
	  data: dataToSend,
	  success: function(data){
	  	console.log("Its done ", data);
	  }
	});
})
