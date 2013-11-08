var express = require('express');
var app = express();

app.get('/', function(req, res){
  var body = "<!DOCTYPE HTML>" +
		"<html>" +
		"<head>" +
			"<meta charset='UTF-8'>" +
			"<link rel='stylesheet' type='text/css' href='./css/style.css'>" +
			"<title>Scraper</title>" +
		"</head>" +
  		"<body>" +
		"<div id='pageGlobal'>" +
			"<img src='img/barres/barreHaut.png' width='100%' height='25px' alt='barre haute'>" +
			"<form name='formulaire' method='post' action='/'>" +

				"<header>" +
					
					"<input type='text' name='recherche'   placeholder='#hashtag'>" +
					"<input type='submit' value='Rafraichir' name='rafraichir' id='submit'>" +
					
				"</header>" +
			
				
				"<div id='url'>" +
					"<table border='1' id='entete'>" +
						"<thead style='font-size:140%;'>" +
							"<tr> " +
								"<th>Links scraped</th>" +
							"</tr>" +
						"</thead>" +
					"</table>" +
					"<div id='corp'>" +
						"<table border='0'>" +
							"<tbody>" +
								"<tr> " +
									"<td>plop</td>" +
								"</tr>" +
								

							
							"</tbody>" +
							"<tfoot style='font-size:60%;'>" +
								"<tr> " +
									"<td>fin du tableau</td>" +
								"</tr>" +
							"</tfoot>" +
						"</table>" +
					"</div>" +
				"</div>" +
				"<div id='infoUrl'>" +
					"<table border='1' id='nameUrl'>" +
						"<thead style='font-size:140%;'>" +
							"<tr> " +
								"<th>INFOS URL</th>" +
							"</tr>" +
						"</thead>" +
					"</table>" +
					"<div id='infoCorp'>" +
						"<table border='0'>" +
							"<tbody>" +
								"<tr> " +
									"<td width='40%'>The link: </td>" +
									"<td id='link'>http://test.fr</td>" +
								"</tr>" +
								"<tr> " +
									"<td width='40%'>Language/server: </td>" +
									"<td id='pageLanguage'>Apache</td>" +
								"</tr>" +
								"<tr> " +
									"<td width='40%'>Page size: </td>" +
									"<td id='pageSize'>3763</td>" +
								"</tr>" +
								"<tr> " +
									"<td width='40%'>Compression: </td>" +
									"<td id='compression'>Accept-Encoding</td>" +
								"</tr>" +
								"<tr> " +
									"<td width='40%'>Content-Type: </td>" +
									"<td id='pageContentType'>text/html</td>" +
								"</tr>" +

							"</tbody>" +
							"<tfoot style='font-size:60%;'>" +
								"<tr > " +
									"<td colspan='2' ><hr width='100%'></td>" +
								"</tr>" +
							"</tfoot>" +
						"</table>" +
					"</div>" +
				"</div>" +
				
			"</form>" +
			"<img src='img/barres/barreBas.png' width='100%' height='25px' alt='barre basse'>" +
		"<div>" +
	"</body>" +
	"</html>";

 // res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});
app.get('/index.html', function(req, res){
  res.read('/app/index.html');
});
app.listen(3000);
console.log('Listening on port 3000');