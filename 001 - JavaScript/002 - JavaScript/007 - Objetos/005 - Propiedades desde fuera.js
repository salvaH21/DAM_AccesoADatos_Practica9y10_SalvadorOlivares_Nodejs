class Persona{
    constructor(){
        this.edad = 0
        this.nombre = ""
    }
    saluda(){
        console.log("Hola, me llamo " + this.nombre + " y tengo " + this.edad + " años")
    }
}

var persona1 = new Persona();
persona1.edad = 33;
persona1.nombre = "Salva";
console.log(persona1);
persona1.saluda();