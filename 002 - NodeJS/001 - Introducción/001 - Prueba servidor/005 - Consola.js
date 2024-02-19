var servidor = require('http'); //palabra reservada de nodejs que permite importar un módulo

servidor.createServer(function(req,res){
    //req es request, lo que me pide
    //res es result, lo que devuelvo
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("Hola mundo desde Node.js");
    console.log("Alguien ha cargado la web");
}).listen(8080)//escuchas en un puerto, el que quieras, en este caso el 80
//AHORA MISMO HAY UN SERVIDOR CREADO