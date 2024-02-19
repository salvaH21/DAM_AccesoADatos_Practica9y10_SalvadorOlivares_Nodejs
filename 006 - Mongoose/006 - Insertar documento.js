var mongoose = require('mongoose');

const conexion = 'mongodb://127.0.0.1/contacto';

const formularioSchema = new mongoose.Schema({
    nombre:String,
    asunto:String,
    mensaje:String,
    fecha:String
})

const formulario = mongoose.model("Formulario",formularioSchema)

const NuevoFormulario = new formulario({
    nombre:"Salva",
    asunto:"Correo desde node",
    mensaje:"Este es el cuerpo del mensaje",
    fecha:"2024-02-15"
})

mongoose.connect(conexion,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(){
    console.log("Conectado a mongo");
    NuevoFormulario.save()
        .then(function(){
            console.log("Insertado");
        })
})