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

      this.authService.getCostosInside().subscribe( resp => {this.costos =
        resp; this.cargando = false; });


  }
  }


