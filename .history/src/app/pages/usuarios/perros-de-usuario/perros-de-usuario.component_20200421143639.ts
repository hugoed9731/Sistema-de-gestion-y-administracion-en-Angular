import { Component, OnInit } from '@angular/core';
import { AuthUService } from 'src/app/services/auth-u.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { AngularFireDatabase } from '@angular/fire/database';
import { PerroModel } from 'src/app/models/perro.model';

@Component({
  selector: 'app-perros-de-usuario',
  templateUrl: './perros-de-usuario.component.html',
  styleUrls: ['./perros-de-usuario.component.scss']
})
export class PerrosDeUsuarioComponent implements OnInit {

  perros: PerroModel[] = [];
  cargando = false;
  constructor(private authService: AuthUService, private route: ActivatedRoute, db: AngularFireDatabase) { }
  pageActual: number = 1;
  filterPost = '';
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
   if ( id !== 'nuevo') {
    this.authService.getPerro(id)
    .subscribe( resp => {
      // console.log('f', resp);
      this.perros = resp;
      // console.log('f', resp);
      this.cargando = false;
      });
  }
  }

}
