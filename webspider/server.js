function get_page_info(page_url){
		var EventEmitter = require('events').EventEmitter;
		var em = new EventEmitter();
		var request = require('request');
		em.emit('page:scraping', page_url);
		
		request({
			url:page_url,
		}, function(error, http_client_response, html_str){
			//take more information in the headers
			try{
				document.getElementById('link').innerHTML = "<tr><td>"+page_url+"</tr></td>";
				console.yellow('Serveur:'+http_client_response.headers.server);
				document.getElementById('pageLanguage').innerHTML = "<tr><td>"+http_client_response.headers.server+"</tr></td>";
				console.yellow('Page size:'+http_client_response.headers['content-length']);
				document.getElementById('pageSize').innerHTML = "<tr><td>"+http_client_response.headers['content-length']+"</tr></td>";	
				console.yellow('Compression:'+http_client_response.headers.vary);
				document.getElementById('compression').innerHTML = "<tr><td>"+http_client_response.headers.vary+"</tr></td>";
				console.yellow('Content-Type:'+http_client_response.headers['content-type']);
				document.getElementById('pageContentType').innerHTML = "<tr><td>"+http_client_response.headers['content-type']+"</tr></td>";
			}catch(err){
				console.yellow("Error,no information");
			}
			
			if(error){
				em.emit('page:error', page_url, error);
				return;
			}
		});
}