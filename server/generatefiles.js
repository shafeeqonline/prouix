var fs = require('fs'),
replace = require('replace'),
fse = require('fs-extra'),
path = require('path');

var readForm = function(request, response){

	var destdir = path.join(__dirname,'..', request.body.projectname);
	if (!fs.existsSync(destdir)){
	    fs.mkdirSync(destdir);
	}

//Package JSON file will be added here by adding the required dependencies
	fs.readFile('./server/skeletons/package.json', 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		data = JSON.parse(data);
		for (var attrname in request.body.packagedata) { data.devDependencies[attrname] = request.body.packagedata[attrname]; }
		var dataToWrite = data,
		outputFilename = path.join(destdir, '/package.json');

		fs.writeFile(outputFilename, JSON.stringify(dataToWrite, null, 4), function(err) {
		    if(err) {
		      console.log(err);
		    } else {
		      console.log("JSON saved to " + outputFilename);
		    }
		}); 

	});

//Bower JSON is added to the project by adding the required modules
	fs.readFile('./server/skeletons/bower.json', 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		data = JSON.parse(data);
		for (var attrname in request.body.packagedata) { data.dependencies[attrname] = request.body.packagedata[attrname]; }
		var dataToWrite = data,
		outputFilename = path.join(destdir, '/bower.json');

		fs.writeFile(outputFilename, JSON.stringify(dataToWrite, null, 4), function(err) {
		    if(err) {
		      console.log(err);
		    } else {
		      console.log("JSON saved to " + outputFilename);
		    }
		}); 

	});

	fse.copy('./server/skeletons/src', destdir+'/src', function (err) {
	  if (err) return console.error(err)
	  	console.log("All files saved to "+ destdir)
	 		replace({
			  regex: "nmspc",
			  replacement: request.body.cssname,
			  paths: [destdir +'/src/sass/components'],
			  recursive: true, 
			  silent: true,
			});
			replace({
			  regex: "fnlprjtjs",
			  replacement: request.body.projectname.toLowerCase(),
			  paths: [destdir],
			  recursive: false,
			  silent: true,
			});	
	fs.rename(destdir+'/src/scripts/project.main.js', destdir+'/src/scripts/'+ request.body.projectname.toLowerCase() +'.main.js', function(err) {
	    if ( err ) console.log('ERROR: ' + err);
	});
	}) // copies file


    response.end('{"success" : "Updated Successfully", "status" : 200}');
}

module.exports.readForm = readForm;