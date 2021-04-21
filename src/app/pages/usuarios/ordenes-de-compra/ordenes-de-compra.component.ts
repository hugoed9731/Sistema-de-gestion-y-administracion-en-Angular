import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthUService } from 'src/app/services/auth-u.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-ordenes-de-compra',
  templateUrl: './ordenes-de-compra.component.html',
  styleUrls: ['./ordenes-de-compra.component.scss']
})
export class OrdenesDeCompraComponent implements OnInit {

  servicios: UsuarioModel[] = [];
  cargando = false;
   constructor(db: AngularFireDatabase, private authSerrvice: AuthUService) { }
   pageActual: number = 1;
   filterPostt = '';
   filterPostnom = '';
   ngOnInit() {
    this.cargando = true;
    this.authSerrvice.getConsumoservicio()
  .subscribe( resp => {
  this.servicios = resp;
  this.cargando = false;
  });

   }
   takeAction(){
    this.pageActual=1;
   }
 }
