import { Component, OnInit } from '@angular/core';
import { AuthUService } from 'src/app/services/auth-u.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-consumo-de-servicios',
  templateUrl: './consumo-de-servicios.component.html',
  styleUrls: ['./consumo-de-servicios.component.scss']
})
export class ConsumoDeServiciosComponent implements OnInit {

  ordenes: UsuarioModel[] = [];
  cargando = false;
  constructor(private authService: AuthUService, private route: ActivatedRoute, db: AngularFireDatabase) { }
  pageActual: number = 1;
  filterPost = '';
  ngOnInit() {
    const uid = this.route.snapshot.paramMap.get('id');
    if ( uid !== 'nuevo') {
     this.authService.getordenusu(uid)
     .subscribe( resp => {
    //  console.log("f",resp);
       this.ordenes = resp;
     this.cargando = false;
       });
   }
  }

}
