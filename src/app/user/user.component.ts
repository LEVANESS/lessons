import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  usuario: any;
  constructor(private route: ActivatedRoute, private UsuariosService: UsuariosService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.usuario = this.UsuariosService.getUsuario(Number(id));
  }

}
