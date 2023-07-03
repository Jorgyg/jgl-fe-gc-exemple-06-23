class Persona {
    nombre: string;
    edad: number;
    dni: string;
    sexo: 'H' | 'M';
    peso: number;
    altura: number;

    constructor(nombre: string = '', edad: number = 0, dni: string = '', sexo: 'H' | 'M' = 'H', peso: number = 0, altura: number = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}