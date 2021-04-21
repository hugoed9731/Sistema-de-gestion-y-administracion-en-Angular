import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthUService } from 'src/app/services/auth-u.service';
import Swal from 'sweetalert2';
import { PaseoModel } from 'src/app/models/paseo.model';

@Component({
  selector: 'app-paquetes-por-asignar',
  templateUrl: './paquetes-por-asignar.component.html',
  styleUrls: ['./paquetes-por-asignar.component.scss']
})
export class PaquetesPorAsignarComponent implements OnInit {

  paseos: PaseoModel[] = [];
  cargando = false;

  constructor(db: AngularFireDatabase, private authSerrvice: AuthUService) { }
  pageActual: number = 1;
  filterPost = '';
  filterPostnombre = '';
  filterPostnom = '';
  ngOnInit() {
    this.cargando = true;
    this.authSerrvice.getPaseosag()
  .subscribe( resp => {
  this.paseos = resp;
  this.cargando = false;
  });
  }
  takeAction(){
    this.pageActual=1;
   }
}
