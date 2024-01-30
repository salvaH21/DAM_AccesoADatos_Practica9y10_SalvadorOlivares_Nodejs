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