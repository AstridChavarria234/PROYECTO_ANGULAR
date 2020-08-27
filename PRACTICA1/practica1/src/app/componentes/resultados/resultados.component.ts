import { Component,Input,  OnInit,OnChanges } from '@angular/core';
import{ServicioService} from '../../servicios/servicio.service';
import{Colaboradores} from '../../modelos/colaboradores.models';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  @Input() accionForm:number;
  public colaboradores:Colaboradores[]=[];

  constructor(public servicio:ServicioService) { }

  ngOnChanges(){
      console.log(this.accionForm);
      this.servicio.getData(this.accionForm).subscribe(res=>this.organizarDatos(res)); 
    }
  
  ngOnInit(): void {}

  public organizarDatos(res){

    let colaborador
    this.colaboradores=[];
    res.results.map(datos=>{
      colaborador = new Colaboradores(
      datos.name.first,
      datos.name.last,
      datos.gender,
      datos.email,
      datos.location.city
      )
      this.colaboradores.push(colaborador);
    })
    console.log(this.colaboradores);
    

    /*res.map(datos=>{
      colaborador = new Colaboradores(
       datos.results.gender,
       "345",
       "000",
       "567",
       "890"
      )
      this.colaboradores.push(colaborador);
    })
    console.log(this.colaboradores);
    
  }

    res.slice(0,index).forEach(res=>{
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
       */

    
} 
}
