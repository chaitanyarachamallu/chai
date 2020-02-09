const http = require('hhtp');
const fs=require('fs');
const server = http.createServer((req,res)=> {
    const url = req.url;
if(url==='/'){
    res.write('<html>');
    res.write('<head><title>My App</title></head>');
    res.write('<body>form method="POST" action="/message">');
    res.write('<input type="text" name="box">');
    res.write('</form><body>');
    res.write('<html>');
    return res.end();
}

if(url === '/message' && req.method === 'POST'){
    fs.writeFileSync('message.txt','hello Text');
    res.statusCode = 302;
    res.setHeader('Content-Type','text/html');
    res.write('<h1>hello</h1>');
    return res.end();


//write alternate message
});
server.listen(3000);

