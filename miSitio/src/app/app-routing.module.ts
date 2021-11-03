import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CebeceraComponent } from './componentes/cebecera/cebecera.component';
import { EditarpublicacionComponent } from './componentes/editarpublicacion/editarpublicacion.component';
import { GeneralComponent } from './componentes/general/general.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { VerpublicacionesComponent } from './componentes/verpublicaciones/verpublicaciones.component';
import { ValidadorGuard } from './utilidades/validador.guard';

const routes: Routes = [
  {path: 'cabecera', component: CebeceraComponent},
  {path: 'login', component: LoginComponent , canActivate:[ValidadorGuard] },
  {path: 'registro', component: RegistroComponent},
  {path: 'publicaciones/:id_rubro', component: VerpublicacionesComponent},
  {path: 'editar', component: EditarpublicacionComponent},
  {path: 'publicaciones', redirectTo:'publicaciones/0'},
  {path: '', redirectTo:'publicaciones/0', pathMatch:'full'},
  {path: '**', component: NoEncontradoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
