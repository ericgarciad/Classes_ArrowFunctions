//Nivel 1

/* Ejercicio1 - Imprimir per pantalla el resultat d'una arrow function autoinvocable que sumi 
dos nombres.
*/

let sumarDosNumeros = (() => console.log(8 + 2))();


//Nivel 2

/* Ejercicio1 - Crear una arrow function que, rebent un paràmetre, retorni un objecte amb un
atribut que tingui com a valor el paràmetre rebut.
*/
let color = "Rojo";

let retornoObjeto = parametro => ({coche: parametro});

console.log(retornoObjeto(color))

/* Ejercicio2 - Crear una classe Persona que rebi un paràmetre 'nom' a l'ésser creat. 
La classe inclourà un mètode decirNombre que imprimeixi per consola el paràmetre 'Nom'. 
Invocar el mètode decirNombre des de fora de la classe.
*/

class Persona {
    constructor(nom){
        this.nom = nom;
    }
    //Método
    decirNombre(){
        console.log(this.nom);
    }
}

let nomPersona = new Persona("Eric");

nomPersona.decirNombre();

//Nivel 3

/* Ejercicio1 - Crear una function creadora d'objectes, abstraient la definició de les classes. 
Invocar-amb diferents definicions.
*/

class Coche {
    constructor(marca, modelo, color, tipo){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.tipo = tipo;
    }

    mostrarMarca(){
        console.log(this.marca);
    }
    mostrarModelo(){
        console.log(this.modelo);
    }
    mostrarColor(){
        console.log(this.color);
    }
    mostrarTipo(){
        console.log(this.tipo);
    }
}


let vehiculo = new Coche("Opel", "Astra", "Blanco", "Berlina");

console.log(vehiculo);