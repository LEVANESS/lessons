import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import {RouterModule, Routes} from '@angular//router';
import {UsuariosService} from './servicios/usuarios.service';
import { UserComponent } from './user/user.component'

const routes: Routes = [
  {path: 'usuarios', component: UsuarioComponent},
  {path: 'usuarios/=id', component: UserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }