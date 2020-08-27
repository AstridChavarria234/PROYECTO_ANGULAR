import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { ResultadosComponent } from './componentes/resultados/resultados.component';
import { FinalComponent } from './componentes/final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultadosComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
