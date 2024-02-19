var servidor = require('http');
var archivos = require('fs');
var ruta = require('url');
var procesador = require('querystring');
var mongoose = require('mongoose');
var datos = '';
var procesado = '';

const conexionmongoose = 'mongodb://127.0.0.1/videojuegos';

const juegoSchema = new mongoose.Schema({
    titulo:String,
    plataforma:String,
    genero:String,
    fecha:String
})

const juego = mongoose.model("Juego",juegoSchema)

mongoose.connect(conexionmongoose,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(){
    console.log("Conectado a mongo");
})


servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var rutacompleta = ruta.parse(req.url,true);
    archivos.readFile('Plantillas/Cabecera.html',function(err,data){
        res.write(data)
        switch(req.url){
            case "/":
                archivos.readFile('inicio.html',function(err,data){
                    res.write(data)
                    res.end("")
                });
                break;
            case "/insertar":
                archivos.readFile('insertar.html',function(err,data){
                    res.write(data)
                    res.end("")
                });
                break;
            case "/inserta":
                datos = '';
                req.on('data',parte=>{
                    datos+= parte.toString();
                })
                req.on('end',()=>{
                    var cadena = datos;
                    var procesado = procesador.parse(cadena)
                    console.log(procesado);
                    var ntitulo = procesado.titulo;
                    var nplataforma = procesado.plataforma;
                    var ngenero = procesado.genero;
                    var nfecha = procesado.fecha;
                    
                    var nuevoJuego = new juego({
                        titulo:ntitulo,
                        plataforma:nplataforma,
                        genero:ngenero,
                        fecha:nfecha
                    })
                    
                    nuevoJuego.save()
                    .then(function(){
                        console.log("Insertado");
                    })
                    
                })
                break;
            case "/consultar":
                archivos.readFile('consultar.html',function(err,data){
                    res.write(data)
                    //res.end("")
                });
                juego.find()
                    .exec()
                    .then(function(juegos){
                        console.log(juegos);
                        res.write(`
                                <style>
                                table, th, td {
                                  border: 1px solid black;
                                  border-collapse: collapse;
                                }
                                th, td {
                                  padding-top: 10px;
                                  padding-bottom: 20px;
                                  padding-left: 30px;
                                  padding-right: 40px;
                                }
                                </style>
                                <table style="width:50%" height=50px>
                                  <tr>
                                    <th>Titulo</th>
                                    <th>Plataforma</th>
                                    <th>Genero</th>
                                    <th>Fecha</th>
                                  </tr>
                                </table>
                            `)
                        for(let i = 0;i<juegos.length;i++){
                            console.log(juegos[i])
                            res.write(`
                                <style>
                                table, th, td {
                                  border: 1px solid black;
                                  border-collapse: collapse;
                                }
                                th, td {
                                  padding-top: 10px;
                                  padding-bottom: 20px;
                                  padding-left: 30px;
                                  padding-right: 40px;
                                }
                                </style>
                                <table style="width:50%" height=50px>
                                  <tr>
                                    <td>`+juegos[i].titulo+`</td>
                                    <td>`+juegos[i].plataforma+`</td>
                                    <td>`+juegos[i].genero+`</td>
                                    <td>`+juegos[i].fecha+`</td>
                                  </tr>
                                </table>
                            `)
                        }
                    })
                break;
            case "/modificar":
                archivos.readFile('modificar.html',function(err,data){
                    res.write(data)
                    res.end("")
                });
                break;
            case "/modifica":
                datos = '';
                req.on('data',parte=>{
                    datos+= parte.toString();
                })
                req.on('end',()=>{
                    var cadena = datos;
                    var procesado = procesador.parse(cadena)
                    console.log(procesado);
                    var tituloantiguo = procesado.condicion;
                    var ntitulo = procesado.titulo;
                    var nplataforma = procesado.plataforma;
                    var ngenero = procesado.genero;
                    var nfecha = procesado.fecha;
                    
                    juego.updateOne({titulo:tituloantiguo},{$set:{titulo:ntitulo,plataforma:nplataforma,genero:ngenero,fecha:nfecha}})
                    .then(function(){
                        console.log("Modificado");
                    })
                    
                })
                break;
            case "/eliminar":
                archivos.readFile('eliminar.html',function(err,data){
                    res.write(data)
                    res.end("")
                });
                break;
            case "/elimina":
                datos = '';
                req.on('data',parte=>{
                    datos+= parte.toString();
                })
                req.on('end',()=>{
                    procesado = procesador.parse(datos)
                    juego.deleteOne({titulo:procesado.titulo})
                    .then(function(){
                        console.log("Juego Eliminado");
                        console.log(procesado.titulo);
                    })
                })
                break;
            default:
                res.end("Página no encontrada");
        }
        archivos.readFile('Plantillas/Pie de pagina.html',function(err,data){
            res.write(data)
            res.end("")
        });
    });

    if(req.url != "/favicon.ico"){
        var fecha = new Date();
         archivos.appendFile("registro.txt",fecha.getFullYear()+","+(fecha.getMonth()+1)+","+fecha.getDate()+","+fecha.getHours()+","+fecha.getMinutes()+","+fecha.getSeconds()+","+rutacompleta.host+","+rutacompleta.pathname+","+rutacompleta.search+","+req.url+"\n",function(err){
            if(err) throw err;
        })
    }
}).listen(8080)