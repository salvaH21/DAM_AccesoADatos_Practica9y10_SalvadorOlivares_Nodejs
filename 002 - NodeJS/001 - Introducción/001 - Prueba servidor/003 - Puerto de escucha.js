var servidor = require('http'); //palabra reservada de nodejs que permite importar un módulo

servidor.createServer(function(req,res){
    //req es request, lo que me pide
    //res es response, lo que devuelvo
}).listen(80)//escuchas en un puerto, el que quieras, en este caso el 80