import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit, OnChanges {

  @Input() accionForm:string;
  @Input() itemForm:any;
   public formColaboradores: FormGroup;

constructor(public formbuilder:FormBuilder) {
  
this.formColaboradores=this.formbuilder.group({
"nombre": [''], 
"apellido": [''], 
"cargo": [''], 
"identificacion": [''], 
"usuarioRed": [''] 
})

}

ngOnChanges(){
  if(this.accionForm=='editar'){
    this.formColaboradores.setValue({
      nombre:this.itemForm.nombre,
      apellido:this.itemForm.apellido,
      cargo:this.itemForm.cargo,
      identificacion:this.itemForm.identificacion,
      usuarioRed:this.itemForm.usuarioRed
    })
  }
  console.log(this.accionForm,this.itemForm);
}

  ngOnInit(): void {
  }

}
