var servidor = require('http');//palabra reservada de nodejs que permite importar un módulo
var archivos = require('fs');//file system

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    
    switch(req.url){
        case "/":
            archivos.readFile('inicio.html',function(err,data){
                res.write(data)
                res.end("")
            });
            break;
        case "/PlayStation":
            archivos.readFile('PlayStation.html',function(err,data){
                res.write(data)
                res.end("")
            });
            break;
        case "/Xbox":
            archivos.readFile('Xbox.html',function(err,data){
                res.write(data)
                res.end("")
            });
            break;
        case "/Switch":
            archivos.readFile('Switch.html',function(err,data){
                res.write(data)
                res.end("")
            });
            break;
        default:
            res.end("Página no encontrada");
    }
    
}).listen(8080)