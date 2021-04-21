import { Component, OnInit } from '@angular/core';
import { AuthUService } from 'src/app/services/auth-u.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

import { AngularFireDatabase } from '@angular/fire/database';
import { PaseoModel } from 'src/app/models/paseo.model';

@Component({
  selector: 'app-activodetalle',
  templateUrl: './activodetalle.component.html',
  styleUrls: ['./activodetalle.component.scss']
})
export class ActivodetalleComponent implements OnInit {

  paseos:PaseoModel[] = [];
  cargando = false;
  constructor(private authService: AuthUService, private route: ActivatedRoute, db: AngularFireDatabase) { }
  pageActual: number = 1;
  filterPost = '';
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
   if ( id !== 'nuevo') {
    this.authService.getPaseoact(id)
    .subscribe( resp => {
      this.paseos = resp;
      this.cargando = false;
      });
  }

  }

}
