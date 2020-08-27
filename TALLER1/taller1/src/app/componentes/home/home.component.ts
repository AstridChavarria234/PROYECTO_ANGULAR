import { Component, OnInit } from '@angular/core';
import{ServicioService} from '../../servicios/servicio.service';
import{Colaboradores} from '../../modelos/colaboradores.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public accion:string=''; 
  public item:any;
  public colaboradores:Colaboradores[]=[];

  public i:number=2;
/*enviar numero que selecciono*/
  constructor(public servicio:ServicioService) { }

  ngOnInit(): void {
    this.servicio.getData().subscribe(res=>this.organizarDatos(res));
  }

  public organizarDatos(res){

    let colaborador
    res.slice(0,this.i).forEach(res=>{
      colaborador = new Colaboradores(
              res.usuarioRed,
              res.nombre, 
              res.apellido,
              res.cargo,
              res.identificacion
      )
           this.colaboradores.push(colaborador);
      })

      console.log(this.colaboradores);
       /*res.map(datos=>{
      colaborador = new Colaboradores(
        datos.usuarioRed,
        datos.nombre, 
        datos.apellido,
        datos.cargo,
        datos.identificacion
      )
      this.colaboradores.push(colaborador);
    })
    console.log(this.colaboradores);
    */
  }
  

  public accionColaborador(item,accion:string){
    this.accion=accion;
    this.item=item;

  }

}
