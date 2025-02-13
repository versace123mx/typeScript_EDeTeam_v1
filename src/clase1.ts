class EscuelaDigital{
    nombre: string;
    cursos: string[] = [];

    constructor(nombre: string){
        this.nombre = nombre;
    }

    //Metodo para agregar cursos
    agregarCurso(curso: string){
        this.cursos.push(curso);
    }

    //Metodo para obtener los cursos
    verCursos(){
        
        console.log(`Cursos de ${this.nombre}:`);

        if(this.cursos.length === 0){
            console.log('No hay cursos');
            return;
        }

        this.cursos.forEach(curso => {
            console.log(curso); 
        });

    }
}

const escuela = new EscuelaDigital('EDteam');
escuela.agregarCurso('JavaScript');
escuela.agregarCurso('TypeScript');
escuela.agregarCurso('Angular');
escuela.verCursos();