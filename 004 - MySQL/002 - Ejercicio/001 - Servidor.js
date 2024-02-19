var servidor = require('http');
var archivos = require('fs');
var ruta = require('url');
var procesador = require('querystring');
var mysql = require('mysql');
var datos = '';
var procesado = '';

var conexion = mysql.createConnection({
    host:"localhost",
    user:"nodejs",
    password:"nodejs",
    database: "videojuegos"
});

conexion.connect(function(err){
    if(err) throw err;
    console.log("Conexion realizada")
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
                    procesado = procesador.parse(datos)
                    conexion.query(`
                        INSERT INTO juegos VALUES
                        (
                            NULL,
                            '${procesado.titulo}',
                            '${procesado.plataforma}',
                            '${procesado.genero}',
                            '${procesado.fecha}'
                        )
                    `,function(err,result){
                        if(err) throw err;
                        console.log("Registro insertado")
                        console.log(procesado.titulo);
                        console.log(procesado.plataforma);
                        console.log(procesado.genero);
                        console.log(procesado.fecha);
                    })
                })
                break;
            case "/consultar":
                archivos.readFile('consultar.html',function(err,data){
                    res.write(data)
                    res.end("")
                });

                conexion.query(`
                    SELECT * FROM juegos
                `,function(err,result,fields){
                    if(err) throw err;
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
                    for(let i = 0;i<result.length;i++){
                        console.log(result[i])
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
                                <td>`+result[i].titulo+`</td>
                                <td>`+result[i].plataforma+`</td>
                                <td>`+result[i].genero+`</td>
                                <td>`+result[i].fecha+`</td>
                              </tr>
                            </table>
                        `)
                    }
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
                    conexion.query(`
                        DELETE FROM juegos WHERE titulo = '${procesado.titulo}'
                    `,function(err,result){
                        if(err) throw err;
                        console.log("Registro eliminado")
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