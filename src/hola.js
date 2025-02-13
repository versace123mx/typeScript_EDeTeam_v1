"use strict";
let saludo = 'Bienvenido a TypeScript';
console.log(saludo);
let fecha = new Date();
console.log(fecha);
//Arreglos de tipo string
let cursos = ['TypeScript', 'Angular', 'NodeJS'];
console.log(cursos);
//Arreglo de tipo string con el tipo de dato Array
let nombres = ['Juan', 'Pedro', 'Luis'];
console.log(nombres);
//Arreglo de tipo number y string
let arreglo = ['Juan', 22];
console.log(arreglo[0]);
//Tuplas
let info = ['Juan', 22];
console.log(info[1]);
//Enum
var Estado;
(function (Estado) {
    Estado[Estado["Offline"] = 0] = "Offline";
    Estado[Estado["Indefinido"] = 1] = "Indefinido";
    Estado[Estado["Online"] = 2] = "Online";
})(Estado || (Estado = {}));
let conectado = Estado.Offline;
console.log(conectado); //este devuelve 0
console.log(Estado[conectado]); //aqui devuelve el nombre del indice
var Mes;
(function (Mes) {
    Mes["Enero"] = "Enero";
    Mes["Febrero"] = "Febrero";
    Mes["Marzo"] = "Marzo";
    Mes["Abril"] = "Abril";
    Mes["Mayo"] = "Mayo";
    Mes["Junio"] = "Junio";
    Mes["Julio"] = "Julio";
    Mes["Agosto"] = "Agosto";
    Mes["Septiembre"] = "Septiembre";
    Mes["Octubre"] = "Octubre";
    Mes["Noviembre"] = "Noviembre";
    Mes["Diciembr"] = "Diciembr";
})(Mes || (Mes = {}));
//mesActual es de tipo Mes, donde Mes es un enum, por lo cual tengo acceso a los valores de Mes
let mesActual = Mes.Enero;
console.log(mesActual);
