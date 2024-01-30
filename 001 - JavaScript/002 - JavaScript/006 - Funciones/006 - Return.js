function saluda(nombre,edad,email){
    cadena = "";
    cadena += "Me llamo " + nombre + ".\n";
    cadena += "Tengo " + edad + " años\n";
    cadena += "Mi correo es " + email + "\n";
    return cadena;
}

console.log(saluda("Salva",33,"salva@correo.com"));
console.log(saluda("Pablo",25,"pablo@pablo.es"));
console.log(saluda("Marisa",30,"marisa@correo.com"));