import { Component, OnInit } from '@angular/core';
import {PerroModel} from 'src/app/models/perro.model';
import { AuthUService } from 'src/app/services/auth-u.service';

import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';


import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-consulta-perros',
  templateUrl: './consulta-perros.component.html',
  styleUrls: ['./consulta-perros.component.scss']
})
export class ConsultaPerrosComponent implements OnInit {

  perros: PerroModel[] = [];
  
  cargando = false;
  
  constructor(db: AngularFireDatabase, private authSerrvice: AuthUService) { }
  // tslint:disable-next-line:no-inferrable-types
  pageActual: number = 1;
  filterPost = '';
  filterPostnom = '';
  ngOnInit() {
    this.cargando = true;
     this.authSerrvice.getPerrosj()
   .subscribe( resp => {
   this.perros = resp;
   this.cargando = false;
   });

  }
  takeAction(){
    this.pageActual=1;
   }
}
