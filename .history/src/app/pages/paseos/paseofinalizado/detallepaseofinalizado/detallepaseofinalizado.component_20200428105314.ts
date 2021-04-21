import { Component, OnInit } from '@angular/core';
import { AuthUService } from 'src/app/services/auth-u.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-detallepaseofinalizado',
  templateUrl: './detallepaseofinalizado.component.html',
  styleUrls: ['./detallepaseofinalizado.component.scss']
})
export class DetallepaseofinalizadoComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  constructor(private authService: AuthUService, private route: ActivatedRoute) { }

  ngOnInit() {
    const uid = this.route.snapshot.paramMap.get('id');
    const order_id = this.route.snapshot.paramMap.get('order_id');
    if ( uid !== 'nuevo') {
      this.authService.getdetallepaseofinalizado(uid, order_id)
      .subscribe( (resp: UsuarioModel) => {
        this.usuario = resp;
        this.usuario.uid = uid;
        this.usuario.order_id = order_id;
      });
    }
  }

}
