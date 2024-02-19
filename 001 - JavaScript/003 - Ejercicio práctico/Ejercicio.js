class Persona{
    constructor(){
        this.nombre = ""
        this.edad = 0
        this.ciudad = ""
    }
    setNombre(nuevonombre){
        this.nombre = nuevonombre
    }
    getNombre(){
        return this.nombre
    }
    setEdad(nuevaedad){
        this.edad = nuevaedad
    }
    getEdad(){
        return this.edad
    }
    setCiudad(nuevaciudad){
        this.ciudad = nuevaciudad
    }
    getCiudad(){
        return this.ciudad
    }
}

function personaNueva(nombre,edad,ciudad){
    var persona = new Persona();
    persona.setNombre(nombre);
    persona.setEdad(edad);
    persona.setCiudad(ciudad);
    return persona
}


var fecha = new Date();
var tablaPersonas = []
var estanteria = []

tablaPersonas.push(personaNueva("Marisa",30,"Madrid"));
tablaPersonas.push(personaNueva("Salva",33,"Jaén"));
tablaPersonas.push(personaNueva("Pablo",10,"Badajoz"));
tablaPersonas.push(personaNueva("Carmen",46,"Valencia"));
console.table(tablaPersonas);
console.log(tablaPersonas);
tablaPersonas.pop();
console.table(tablaPersonas);
console.log(tablaPersonas);

estanteria[0] = [
    {
        "nombre":tablaPersonas[0].getNombre(),
        "peliculas":[
            "harry potter",
            "la sirenita",
            "matilda"
        ],
        "libros":[
            "la sombra del viento",
            "crepusculo",
            "perdona si te llamo amor"
        ],
        "videojuegos":[
            
        ]
    }
]

estanteria[1] = [
    {
        "nombre":tablaPersonas[1].getNombre(),
        "peliculas":[
            "el señor de los anillos",
            "matrix",
            "el club de la lucha"
        ],
        "libros":[
            "el silmarillion",
            "el ultimo deseo",
        ],
        "videojuegos":[
            "bloodborne",
            "the witcher",
            "halo"
        ]
    }
]

estanteria[2] = [
    {
        "nombre":tablaPersonas[2].getNombre(),
        "peliculas":[
            "jurassic park",
            "el rey leon"
        ],
        "libros":[
            
        ],
        "videojuegos":[
            "tetris",
            "super mario",
            "pokemon"
        ]
    }
]
    
for(let i = 0;i<estanteria.length;i++){
    //console.log(estanteria[i])
    if(tablaPersonas[i].getEdad()>=18){
        console.log(estanteria[i])
    }
}

var opcion = 1;
switch(opcion){
case 0:
    console.log(estanteria[0])
    break;
case 1:
    console.log(estanteria[1])
    break;
case 2:
    console.log(estanteria[2])
    break;
default:
    console.log("No has escrito un día")
}

console.log("Última consulta realizada: " + fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()+" a las "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds());
