import { ThisReceiver } from "@angular/compiler";

export class identidad{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;

    constructor (nombre: String, apellido: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}