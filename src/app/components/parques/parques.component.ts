import { Component,  Input, Output, EventEmitter, OnChanges, SimpleChange, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit{

	@Input() nombre: string;
	@Input('metros_cuadrados') metros: number;
	public vegetacion: string;
	public abierto: boolean;

	@Output() pasameLosDatos = new EventEmitter();

  constructor() { 
  	this.nombre = 'Parque natural para caballos';
  	this.metros = 450;
  	this.vegetacion = 'Alta';
  	this.abierto = false;
  }

  
  ngOnInit(){
  	
  	console.log("Método OnInit lanzado");
  }

  ngOnChanges(changes: SimpleChange){

  	console.log(changes);
  }



  ngOnDestroy(){

  	console.log("Se va a eliminar el componente");
  }


emitirEvento(){
	this.pasameLosDatos.emit({
		'nombre': this.nombre,
  		'metros': this.metros,
  		'vegetacion': this.vegetacion,
  		'abierto': this.abierto
	});
}


 

}
