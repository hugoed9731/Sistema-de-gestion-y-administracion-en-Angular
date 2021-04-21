import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
import { PaseadorModel } from '../../models/paseador.model';
import Swal from 'sweetalert2';
import { AuthUService } from '../../services/auth-u.service';


@Component({
  selector: 'app-info-b-pasead',
  templateUrl: './info-b-pasead.component.html',
  styleUrls: ['./info-b-pasead.component.scss']
})
export class InfoBPaseadComponent implements OnInit {

  Paseadores: PaseadorModel[] = [];
  pageActual: number = 1;
  cargando = false;
  filPost = '';
  filbank = '';

  constructor(private authSerrvice: AuthUService) { }

  ngOnInit() {

    this.cargando = true;
    this.authSerrvice.getPaseadores().subscribe( resp => { this.Paseadores  = 
      resp; this.cargando = false; });
  }

}
