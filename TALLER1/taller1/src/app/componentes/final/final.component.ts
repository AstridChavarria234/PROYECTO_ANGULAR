import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  
  @Input() mensajeRecibidoHijo:string;
  @Output() emisionMensaje = new EventEmitter<string>();
  
  public autor :string='Astrid Chavarria Serna'; 
  public agno :string = "2020";

  constructor() { }

  ngOnInit(): void {
    this.emisionMensaje.emit('Primer Proyecto en Angular');
  }

}
