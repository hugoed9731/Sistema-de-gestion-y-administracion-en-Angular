import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { UsuarioModel } from '../models/usuario.model';
import {map} from 'rxjs/operators';
import { UsuModel } from '../../app/models/usu.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  public usuario: any = {};
  private url = 'https://caminandogbeta.firebaseio.com';

  constructor( private http: HttpClient, private afs: AngularFireDatabase, public afAuth: AngularFireAuth) {}

  crearInfo( usu: UsuModel) {

      return this.http.put(`${ this.url }/Usuarios_Sistema/${usu.uid}.json`, usu)
      .pipe(
        map((resp: any) => {
          usu.uid = resp.uid;
          return usu;
        })
      );
    }
  }


