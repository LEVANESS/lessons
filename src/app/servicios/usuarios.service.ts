import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios= [
    {id: 1, nombre: 'administrador', password: 'xxx'},
    {id: 2, nombre: 'usuario1', password: 'xxx'},
    {id: 3, nombre: 'usuario2', password: 'xxx'},
    {id: 4, nombre: 'usuario3', password: 'xxx'}
  ]

  constructor() { }
  getUsuarios(){
    return this.usuarios;
  }
  getUsuario(id: number){
    return this.getUsuarios().find(usuario => usuario.id === id);
  }
}
