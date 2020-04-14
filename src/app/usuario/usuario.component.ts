import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuarios: any[];
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
this.usuarios = this.usuariosService.getUsuarios();

  }

}
