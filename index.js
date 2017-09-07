var server = require('http').createServer(),
    fs = require('fs'),
    picURL = 'https://goo.gl/dmZHRQ',
    fileContent = '';

fs.readFile('./index.html', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    } else {
        fileContent = data;
    }
});

server.on('request', (request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (request.method === 'GET' && request.url === '/') {
        response.write(fileContent);
        response.end();
    } else {
        response.statusCode = 404;
        response.write(`<img src="${picURL}" alt="error 404">`);
        response.end();
    }
});

server.listen(9000);
