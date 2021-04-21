import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import Swal from 'sweetalert2';
import { AuthUService } from '../../services/auth-u.service';

@Component({
  selector: 'app-lecturadplacas',
  templateUrl: './lecturadplacas.component.html',
  styleUrls: ['./lecturadplacas.component.scss']
})
export class LecturadplacasComponent implements OnInit {
  perros: UsuarioModel[] = [];
  pageActual: number = 1;
  cargando = false;
  filterPost = '';
  constructor( private authService: AuthUService) { }

  ngOnInit() {

    this.cargando = true;
    this.authService.getPerros().subscribe( resp => { this.perros =
      resp; this.cargando = false; });
  }

}
