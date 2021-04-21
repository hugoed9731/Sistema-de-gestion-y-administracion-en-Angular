import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthUService } from '../../services/auth-u.service';

@Component({
  selector: 'app-costos-descuentos',
  templateUrl: './costos-descuentos.component.html',
  styleUrls: ['./costos-descuentos.component.scss']
})
export class CostosDescuentosComponent implements OnInit {

  costos: UsuarioModel[] = [];
  cargando = false;
  

  constructor( private authService: AuthUService) { }

  ngOnInit() {
    this.cargando = true;
    this.authService.getCostos().subscribe( resp => {this.costos = 
      resp; this.cargando = false; });
      // console.log(resp);
      // this.usuarios = resp;
      // this.cargando = false;
  }
  }

}
