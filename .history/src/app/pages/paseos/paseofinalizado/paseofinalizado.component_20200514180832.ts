import { Component, OnInit } from '@angular/core';

import { AuthUService } from 'src/app/services/auth-u.service';
import { ActivatedRoute } from '@angular/router';
import {PaseoModel} from 'src/app/models/paseo.model';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-paseofinalizado',
  templateUrl: './paseofinalizado.component.html',
  styleUrls: ['./paseofinalizado.component.scss']
})
export class PaseofinalizadoComponent implements OnInit {

  paseos: PaseoModel[] = [];
  cargando = false;
   constructor(db: AngularFireDatabase, private authSerrvice: AuthUService) { }
   pageActual: number = 1;
   filterPost = '';
   filterPostnom = '';
   ngOnInit() {
    this.cargando = true;
    this.authSerrvice.getPaseosfinalizados()
  .subscribe( resp => {
  this.paseos = resp;
  this.cargando = false;
  });
   }
   takeAction(){
    this.pageActual=1;
   }
}
