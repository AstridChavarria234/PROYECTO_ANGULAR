import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica1';
  public index:number=0; 
  public arrayNumeros:number[]=[];
    
  ngOnInit(): void {
    this.arrayNumeros.push(1);
    this.arrayNumeros.push(2);
    this.arrayNumeros.push(3);
    this.arrayNumeros.push(4);
    this.arrayNumeros.push(5);
    this.arrayNumeros.push(6);
    this.arrayNumeros.push(7);
    this.arrayNumeros.push(8);
    this.arrayNumeros.push(9);
  
  }

  
  public accionColaborador(index:number){
    this.index=index;
  
  
  }

}


