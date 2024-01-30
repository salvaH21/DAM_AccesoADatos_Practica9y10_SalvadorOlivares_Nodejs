//Salidas por consola
console.log("Hola")
console.warn("Advertencia en la consola");
console.error("Esto es un error");
//TABLAS
console.log("<<<<<<<<<<<<<TABLAS<<<<<<<<<<<<<")
agenda = [];
agenda[0] = "Salva"
agenda[1] = "Olivares"
console.table(agenda);
console.log(agenda);
//OPERADORES ARITMETICOS
console.log("<<<<<<<<<<<<<OPERADORES ARITMETICOS<<<<<<<<<<<<<")
console.log(4+3);
console.log(4-3);
console.log(4*3);
console.log(4/3);
console.log(4%3);
//OPERADORES DE COMPARACION
console.log("<<<<<<<<<<<<<OPERADORES DE COMPARACION<<<<<<<<<<<<<")
console.log(4<3);
console.log(4>3);
console.log(4<=3);
console.log(4>=3);
console.log(4==3);
console.log(4!=3);
console.log(4=="4");// la doble igualdad comprueba el valor
console.log(4==="4");// la triple igualdad comprueba el valor, y además, el tipo de dato
//OPERADORES BOOLEANOS
console.log("<<<<<<<<<<<<<OPERADORES BOOLEANOS<<<<<<<<<<<<<")
console.log(3 == 3 && 4 == 4);
console.log(3 == 3 && 4 == 4 && 5 == 5);
console.log(3 == 3 && 4 == 4 && 5 == 4);
console.log(3 == 3 || 4 == 4 || 5 == 5);
console.log(3 == 3 || 4 == 4 || 5 == 4);
console.log(3 == 3 || 4 == 3 || 5 == 4);
console.log(3 == 2 || 4 == 3 || 5 == 4);
//VARIABLES
console.log("<<<<<<<<<<<<<VARIABLES<<<<<<<<<<<<<")
var edad = 33;
console.log("Tu edad es de: " + edad + " años");
edad++;
console.log("Tu edad es de: " + edad + " años");
edad--;
console.log("Tu edad es de: " + edad + " años");
console.log("Tu edad es de: " + edad + " años");
edad += 2; // edad = edad + 2
console.log("Tu edad es de: " + edad + " años");
edad -= 2;
console.log("Tu edad es de: " + edad + " años");
edad *= 2;
console.log("Tu edad es de: " + edad + " años");
edad /= 2;
console.log("Tu edad es de: " + edad + " años");
let numero = 33;// Solo será visible a nivel de bloque, no saldrá de la estructura en la que se está trabajando
console.log("El numero es el : " + numero);
const PI = 3.1416;// Es buena práctica declarar las constantes en mayúcula
//PI = 2;
console.log("El valor de PI es : " + PI);
//ARRAYS
console.log("<<<<<<<<<<<<<ARRAYS<<<<<<<<<<<<<")
var agenda = [];
agenda[0] = "Salva";
console.table(agenda);
agenda[1] = "Marisa";
console.table(agenda);
agenda[2] = "Pablo";
console.table(agenda);
agenda.push("Hermelo");
console.table(agenda);
agenda.pop();
console.table(agenda);
agenda.splice(0,1);// Se le dice el índice y el número de elementos que quiero quitar
console.table(agenda);
agenda2 = [];
agenda2[0] = [];
agenda2[0]['nombre'] = "Salva";
agenda2[0]['telefono'] = "12345";
agenda2[0]['email'] = "correo@correo.com";
agenda2[1] = [];
agenda2[1]['nombre'] = "Luis";
agenda2[1]['telefono'] = "67898";
agenda2[1]['email'] = "luis@luis.es";
console.table(agenda2);
//JSON
console.log("<<<<<<<<<<<<<JSON<<<<<<<<<<<<<")
//DECLARACION DE UN JSON
var entrada = {
    "nombre":"Salva",
    "telefono":12345,
    "email":"salva@correo.com"
}
console.log(entrada)
//ARRAY DENTRO DE UN JSON
var entrada = {
    "nombre":"Salva",
    "telefono":12345,
    "email":[
        "salva@correo.com",
        "otroemail@otro.es",
        "unomas@email.com"
    ]
}
console.log(entrada)
//JSON DENTRO DE UN ARRAY
var agenda = [
    {
        "nombre":"Salva",
        "telefono":12345,
        "email":[
            "salva@correo.com",
            "otroemail@otro.es",
            "unomas@email.com"
        ]
    },
    {
        "nombre":"Marisa",
        "telefono":56789,
        "email":[
            "salva@correo.com",
            "marisa@email.es",
            "otro@otro.com"
        ]
    }
]
console.log(agenda)
//BUCLES FOR, WHILE, Y DO WHILE
console.log("<<<<<<<<<<<<<BUCLES<<<<<<<<<<<<<")
for(let dia = 1;dia<=7;dia++){
    console.log("Hoy es el día " + dia + " de la semana")
}
console.log("Ahora con el while")
var dia = 1
while(dia<=7){
    console.log("Hoy es el día " + dia + " del mes")
    dia++;
}
console.log("Bucle do while")
var cifra = 10
do{
    console.log("Todo ok")
}while(cifra<5);
//IF, ElSE, IF ELSE, SWITCH
console.log("<<<<<<<<<<<<<ESTRUCTURAS CONDICIONALES<<<<<<<<<<<<<")
edad = 45
if(edad < 30){
   console.log("Eres un joven")
}else{
    console.log("Ya no eres tan joven")
}
var diadelasemana = "jueves"
if(diadelasemana == "lunes"){
   console.log("Hoy es el peor día de la semana")
}else if(diadelasemana == "martes"){
    console.log("Hoy es el segundo peor día de la semana")
}else if(diadelasemana == "miercoles"){
    console.log("Ya estamos a mitad de semana")
}else if(diadelasemana == "jueves"){
    console.log("Mañana ya es viernes")
}else if(diadelasemana == "viernes"){
    console.log("Por fin es viernes")
}else if(diadelasemana == "sabado"){
    console.log("El mejor día de la semana")
}else if(diadelasemana == "domingo"){
    console.log("Mañana vuelve a ser lunes")
}else{
    console.log("No has escrito un día")
}
var diadelasemana2 = "viernes"
switch(diadelasemana2){
case "lunes":
    console.log("Hoy es el peor día de la semana")
    break;
case "martes":
    console.log("Hoy es el segundo peor día de la semana")
    break;
case "miercoles":
    console.log("Ya estamos a mitad de semana")
    break;
case "jueves":
    console.log("Mañana ya es viernes")
    break;
case "viernes":
    console.log("Por fin es viernes")
    break;
case "sabado":
    console.log("El mejor día de la semana")
    break;
case "domingo":
    console.log("Mañana vuelve a ser lunes")
    break;
default:
    console.log("No has escrito un día")
}
//FUNCIONES
console.log("<<<<<<<<<<<<<FUNCIONES<<<<<<<<<<<<<")
function saluda(nombre,edad,email){
    console.log("Me llamo " + nombre);
    console.log("Tengo " + edad + " años");
    console.log("Mi correo es " + email);
}
saluda("Salva",33,"salva@correo.com");
saluda("Pablo",25,"pablo@pablo.es");
saluda("Marisa",30,"marisa@correo.com\n");

function saluda2(nombre,edad,email){
    cadena = "";
    cadena += "Me llamo " + nombre + ".\n";
    cadena += "Tengo " + edad + " años\n";
    cadena += "Mi correo es " + email + "\n";
    return cadena;
}

console.log(saluda2("Salva",33,"salva@correo.com"));
console.log(saluda2("Pablo",25,"pablo@pablo.es"));
console.log(saluda2("Marisa",30,"marisa@correo.com"));
//OBJETOS
console.log("<<<<<<<<<<<<<OBJETOS<<<<<<<<<<<<<")
class Animal{
    constructor(){
        
    }
    respira(){
        return "El animal está respirando"
    }
}
class Persona extends Animal{
    constructor(){
        super();
        this.edad = 0
        this.nombre = ""
    }
    setEdad(nuevaedad){
        this.edad = nuevaedad
    }
    getEdad(){
        return this.edad
    }
    setNombre(nuevonombre){
        this.nombre = nuevonombre
    }
    getNombre(){
        return this.nombre
    }
    saluda(){
        return "Hola, me llamo " + this.nombre + " y tengo " + this.edad + " años"
    }
}
var persona1 = new Persona();
persona1.setEdad(33);
persona1.setNombre("Salva");
console.log(persona1);
console.log(persona1.saluda());
console.log(persona1.respira());
//LIBRERIAS
console.log("<<<<<<<<<<<<<LIBRERIAS<<<<<<<<<<<<<")
console.log("Matemática")
var nota = 4.6;
console.log(Math.round(nota));// Redondeo natural
console.log(Math.ceil(nota));// Redondeo a la alta
console.log(Math.floor(nota));// Redondeo a la baja
var aleatorio = Math.random();// Entre 0 y 1
console.log(aleatorio);
var angulo = 0
console.log("Coseno: "+Math.cos(angulo));
console.log("Seno: "+Math.sin(angulo));
angulo = Math.PI/2
console.log("Coseno: "+Math.cos(angulo));
console.log("Seno: "+Math.sin(angulo));
console.log("FECHAS")
var fecha = new Date();
console.log("El año es: " + fecha.getFullYear());
console.log("El mes es: " + fecha.getMonth()+1);
console.log("El día es: " + fecha.getDate());
console.log("La hora es: " + fecha.getHours());
console.log("El minuto es: " + fecha.getMinutes());
console.log("El segundo es: " + fecha.getSeconds());
