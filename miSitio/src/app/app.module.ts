import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { CebeceraComponent } from './componentes/cebecera/cebecera.component';
import { PieComponent } from './componentes/pie/pie.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PublicacionComponent } from './componentes/publicacion/publicacion.component';
import { VerpublicacionesComponent } from './componentes/verpublicaciones/verpublicaciones.component';
import { ColorDirective } from './color.directive';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { EditarpublicacionComponent } from './componentes/editarpublicacion/editarpublicacion.component';
import { NuevapublicacionComponent } from './componentes/nuevapublicacion/nuevapublicacion.component';
import { MensajeExitoComponent } from './componentes/mensaje-exito/mensaje-exito.component';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    CebeceraComponent,
    PieComponent,
    LoginComponent,
    RegistroComponent,
    NoEncontradoComponent,
    PublicacionComponent,
    VerpublicacionesComponent,
    ColorDirective,
    EditarpublicacionComponent,
    NuevapublicacionComponent,
    MensajeExitoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpClient, {provide: LOCALE_ID, useValue: 'es'}], 
  bootstrap: [AppComponent],

})
export class AppModule { }
