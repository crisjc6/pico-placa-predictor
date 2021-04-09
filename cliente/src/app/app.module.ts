import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Componentes
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import { FormularioPlacaComponent } from './components/formulario-placa/formulario-placa.component';
import { ResultadoPlacaComponent } from './components/resultado-placa/resultado-placa.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PlacaService} from './services/plate.service';


@NgModule({
  declarations: [
    AppComponent,
    FormularioPlacaComponent,
    ResultadoPlacaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [PlacaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
