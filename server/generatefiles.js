var fs = require('fs'),
replace = require('replace'),
fse = require('fs-extra'),
path = require('path');

var readForm = function(request, response){

//Creates a directory with project name if it doesn't exist
	var destdir = path.join(__dirname,'../../../', request.body.projectname);
	if (!fs.existsSync(destdir)){
	    fs.mkdirSync(destdir);
	}

//Package JSON file will be added here by adding the required dependencies
	fs.readFile('./server/skeletons/package.json', 'utf8', function (err,data) {
		if (err) 
			return console.log(err);
		data = JSON.parse(data);
		for (var attrname in request.body.packagedata) { data.devDependencies[attrname] = request.body.packagedata[attrname]; }
		fs.writeFile(path.join(destdir, '/package.json'), JSON.stringify(data, null, 4), function(err) {
		    if(err)
		      console.log(err);
		}); 
	});

//Bower JSON is added to the project by adding the required modules
	fs.readFile('./server/skeletons/bower.json', 'utf8', function (err,data) {
		if (err)
			return console.log(err);
		data = JSON.parse(data);
		for (var attrname in request.body.bowerdata) { data.dependencies[attrname] = request.body.bowerdata[attrname]; }
		fs.writeFile(path.join(destdir, '/bower.json'), JSON.stringify(data, null, 4), function(err) {
		    if(err)
		      console.log(err);
		}); 

	});

//Grunt file copied
	fse.copy('./server/skeletons/Gruntfile.js', destdir+'/Gruntfile.js', function (err) {
	  if (err) return console.error(err)
	})

//Copies entire source code and replaces the necessary variables in code
	fse.copy('./server/skeletons/src', destdir+'/src', function (err) {
	  if (err) return console.error(err)
	  	console.log("All files saved to "+ destdir);
			replace({
			  regex: "nmspjs",
			  replacement: request.body.cssname.toUpperCase(),
			  paths: [destdir +'/src/scripts', destdir +'/src/templates/partials'],
			  recursive: true, 
			  silent: true,
			});
			replace({
			  regex: "nmspc",
			  replacement: request.body.cssname.toLowerCase(),
			  paths: [destdir +'/src/sass', destdir +'/src/templates'],
			  recursive: true, 
			  silent: true,
			});
			replace({
			  regex: "fnlprjt",
			  replacement: request.body.projectname.toLowerCase(),
			  paths: [destdir],
			  recursive: true,
			  silent: true,
			});
			replace({
			  regex: "gutrwdth",
			  replacement: request.body.gutterwidth,
			  paths: [destdir +'/src/sass/components'],
			  recursive: true, 
			  silent: true,
			});
			replace({
			  regex: "contwidth",
			  replacement: request.body.contwidth,
			  paths: [destdir +'/src/sass/components'],
			  recursive: true, 
			  silent: true,
			});
			replace({
			  regex: "basfont",
			  replacement: request.body.basefont,
			  paths: [destdir +'/src/sass/components'],
			  recursive: true, 
			  silent: true,
			});
			replace({
			  regex: "tabbrkpnt",
			  replacement: request.body.tabbrkpnt,
			  paths: [destdir +'/src/sass/components', destdir +'/src/scripts/components'],
			  recursive: true, 
			  silent: true,
			});
			replace({
			  regex: "deskbrkpnt",
			  replacement: request.body.deskbrkpnt,
			  paths: [destdir +'/src/sass/components', destdir +'/src/scripts/components'],
			  recursive: true, 
			  silent: true,
			});
			replace({
			  regex: "lgdskbrkpnt",
			  replacement: request.body.lrgdeskbrkpnt,
			  paths: [destdir +'/src/sass/components', destdir +'/src/scripts/components'],
			  recursive: true, 
			  silent: true,
			});
		fs.rename(destdir+'/src/scripts/project.main.js', destdir+'/src/scripts/'+ request.body.projectname.toLowerCase() +'.main.js', function(err) {
		    if ( err ) console.log('ERROR: ' + err);
		});
	}) // copies src directory

//Sends back success code if all goes well
    response.end('{"success" : "Updated Successfully", "status" : 200}');
}

module.exports.readForm = readForm;