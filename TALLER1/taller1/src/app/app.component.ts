import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TALLER 1 ANGULAR';
  public show:boolean =true;
  public miVector: Array<string> = ["angular", "java" , "python"];
  public nota: number= 1;
  public nota1: string= "gano";
  public mensajeParaHijo: string = "¡Curso Angular!";
  public mensajeDesdeHijo:string='';

  constructor(public router:Router){}

  /*No importa el nombre de variable $event*/
  public recibido($event){
   this.mensajeDesdeHijo=$event;
  }

  public redireccion(){
     this.router.navigate(['/pag2']);
  }

}
