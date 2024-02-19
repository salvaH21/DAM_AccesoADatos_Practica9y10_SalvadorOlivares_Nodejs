var servidor = require('http');
var ruta = require('url');
var procesador = require('querystring');
var archivos = require('fs');
var mensajes = [];

servidor.createServer(function(req,res){
    
    
    if(req.url == "/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        console.log("Principal");
        archivos.readFile('front.html',function(err,data){
            if(err) throw err;
            res.end(data)
        });
    }else if(req.url == "/recibe"){
        console.log("Recibe");
        res.writeHead(200,{'Content-Type':'text/json'});
        res.end(JSON.stringify(mensajes))
    }else if(req.url.includes("/envia")){
        console.log("Envia");
        var parametros = ruta.parse(req.url,true).query;
        console.log(parametros.mensaje);
        var mifecha = Date.now();
        mensajes.push({
            fecha:mifecha,
            mensaje:parametros.mensaje
        })
        console.log(mensajes)
        res.end("")
    }
}).listen(8080);