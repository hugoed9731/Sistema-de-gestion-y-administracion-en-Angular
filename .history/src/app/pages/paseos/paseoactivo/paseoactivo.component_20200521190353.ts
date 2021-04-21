import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import {PaseoModel} from 'src/app/models/paseo.model';
import { AuthUService } from 'src/app/services/auth-u.service';

@Component({
  selector: 'app-paseoactivo',
  templateUrl: './paseoactivo.component.html',
  styleUrls: ['./paseoactivo.component.scss']
})
export class PaseoactivoComponent implements OnInit {

  paseos: PaseoModel[] = [];
  cargando = false;
  constructor(db: AngularFireDatabase, private authSerrvice: AuthUService) { }
  pageActual: number = 1;
  filterPost = '';
  filterPostnom = '';
  ngOnInit() {
    this.cargando = true;
     this.authSerrvice.getPaseosactivo()
   .subscribe( resp => {
   this.paseos = resp;
   this.cargando = false;
   });
  }
  takeAction(){
    this.pageActual=1;
   }
}
