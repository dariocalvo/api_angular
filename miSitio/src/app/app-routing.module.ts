import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CebeceraComponent } from './componentes/cebecera/cebecera.component';
import { EditarpublicacionComponent } from './componentes/editarpublicacion/editarpublicacion.component';
import { LoginComponent } from './componentes/login/login.component';
import { MensajeExitoComponent } from './componentes/mensaje-exito/mensaje-exito.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { NuevapublicacionComponent } from './componentes/nuevapublicacion/nuevapublicacion.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { VerpublicacionesComponent } from './componentes/verpublicaciones/verpublicaciones.component';
import { ValidadorGuard } from './utilidades/validador.guard';

const routes: Routes = [
  {path: 'cabecera', component: CebeceraComponent},
  {path: 'exito', component: MensajeExitoComponent},
  {path: 'login', component: LoginComponent , canActivate:[ValidadorGuard] },
  {path: 'registro', component: RegistroComponent, canActivate:[ValidadorGuard]},
  {path: 'publicaciones/:id_rubro', component: VerpublicacionesComponent},
  {path: 'editar', component: EditarpublicacionComponent},
  {path: 'nueva', component: NuevapublicacionComponent},
  {path: 'publicaciones', redirectTo:'publicaciones/0'},
  {path: '', redirectTo:'publicaciones/0', pathMatch:'full'},
  {path: '**', component: NoEncontradoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
