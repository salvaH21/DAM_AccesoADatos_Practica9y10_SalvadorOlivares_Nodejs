var mysql = require('mysql'); //npm install mysql
var conexion = mysql.createConnection({
    host:"localhost",
    user:"nodejs",
    password:"nodejs",
    database: "nodejs"
});

conexion.connect(function(err){
    if(err) throw err;
    console.log("Conexion realizada")
    conexion.query(`
        INSERT INTO entradas VALUES
        (
            NULL,
            'Titulo de la entrada',
            'Texto de la entrada',
            '2024-02-13'
        )
    `,function(err,result){
        if(err) throw err;
        console.log("Se ha insertado el registro")
    })
})