let saludo:string = 'Bienvenido a TypeScript';
console.log(saludo);

let fecha:Date = new Date();
console.log(fecha);

//Arreglos de tipo string
let cursos:string[] = ['TypeScript', 'Angular', 'NodeJS'];
console.log(cursos);

//Arreglo de tipo string con el tipo de dato Array
let nombres:Array<string> = ['Juan', 'Pedro', 'Luis'];
console.log(nombres);

//Arreglo de tipo number y string
let arreglo:(string | number)[] = ['Juan', 22];
console.log(arreglo[0])

//Tuplas
let info:[string, number] = ['Juan', 22];
console.log(info[1]);

//Enum
enum Estado{
    Offline,
    Indefinido,
    Online
}
let conectado:Estado = Estado.Offline;
console.log(conectado);//este devuelve 0
console.log(Estado[conectado]);//aqui devuelve el nombre del indice

enum Mes{
    Enero = 'Enero',
    Febrero = 'Febrero',
    Marzo = 'Marzo',
    Abril = 'Abril',
    Mayo = 'Mayo',
    Junio = 'Junio',
    Julio = 'Julio',
    Agosto = 'Agosto',
    Septiembre = 'Septiembre',
    Octubre = 'Octubre',
    Noviembre = 'Noviembre',
    Diciembr = 'Diciembr'
}
//mesActual es de tipo Mes, donde Mes es un enum, por lo cual tengo acceso a los valores de Mes
let mesActual:Mes = Mes.Enero;
console.log(mesActual);