import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { Pag2Component } from './componentes/pag2/pag2.component';
import { Pag1Component } from './componentes/pag1/pag1.component';


const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},/* A donde quiere que se redireccione cuando este
  localhost:4200*/
  {path:'home',component:HomeComponent},
  {path:'pag1',component:Pag1Component},
  {path:'pag2',component:Pag2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
