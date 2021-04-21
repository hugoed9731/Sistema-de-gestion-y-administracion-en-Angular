import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import {map, delay} from 'rxjs/operators';
import { User } from 'firebase';
// REC
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
// GOOGLE
import { auth } from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import { UsuModel } from '../../app/models/usu.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url = 'https://identitytoolkit.googleapis.com/v1';
  private urlu = 'https://caminandogbeta.firebaseio.com';
  private apikey = 'AIzaSyBGGIC3EgF3tzXx702UTPnFLVxJ-xphJKw ';

  // scope: 'openid profile';
  

  userToken: string;
  // REC
  user: User;
  currentUser: User;
  public usuario: any = {};


  constructor( private http: HttpClient, public  afAuth: AngularFireAuth, public  router: Router) {


    this.lerToken();
   // REC
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        localStorage.setItem('uid', JSON.stringify(this.user.uid));
        localStorage.setItem('emailVerified', JSON.stringify(this.user.emailVerified));
        // console.log('hhh',this.user.emailVerified );
        
      } else {
        localStorage.setItem('user', null);
        // localStorage.setItem('emailVerified', null);

      }
    });

   }
   // REC
   async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
 }
 // Enviar Verficacion de Correo electronico

   logout() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['login']);
      localStorage.clear();
    });
  }
  loginWithGoogle() {
   return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  login(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(`${this.url}/accounts:signInWithPassword?key=${this.apikey}`, authData)
    
    .pipe(map(resp => {

  this.guardarToken(resp['idToken']);
  console.log('respuesta', resp);
  return resp;
    })
    );
  }
 

  nuevoUsuario(usuario: UsuarioModel) {
   const authData = {
    ...usuario,
    returnSecureToken: true
  };
  return this.http.post(`${this.url}/accounts:signUp?key=${this.apikey}`, authData)
  .pipe(map(resp => {
this.guardarToken(resp['idToken']);
return resp;
  })
  );
  }

private guardarToken(idToken: string) {
  this.userToken = idToken;
  localStorage.setItem('token', idToken);

  let hoy = new Date();
  hoy.setSeconds(3600);
  localStorage.setItem('expira', hoy.getTime().toString());
}

lerToken() {
if (localStorage.getItem('token')){
  this.userToken = localStorage.getItem('token');
} else {
  this.userToken = '';
}
return this.userToken;
}

estaAutenticando(): boolean {
if (this.userToken.length < 2 ) {
  return false;
}

const expira = Number(localStorage.getItem('expira'));
const expiraDate = new Date();
expiraDate.setTime(expira);

if (expiraDate > new Date()) {
  return true;
} else {
  return false;
}

}
sendVerificationMail(usuario: UsuarioModel){
  const authDatas = {
    requestType: "VERIFY_EMAIL",
    idToken: this.userToken
    };
    console.log('Envia correo',);
    console.log('idToken', this.userToken);
    
   return this.http.post(`${this.url}/accounts:sendOobCode?key=${this.apikey}`, authDatas)
   .pipe(map(resp => {
 
    this.guardarToken(resp['idToken']);
    return resp;
    
     }))
}

// verifyEmail(usuario: UsuarioModel) {
//   const authDatas = {
//       oobCode: "VERIFICATION_CODE"
//     };
//     console.log('Confirmar correo');
    
//    return this.http.post(`${this.url}/accounts:update?key=${this.apikey}`, authDatas);
// }

isAuth() {
  return this.afAuth.authState.pipe(map( auth => auth));
}

// Perfil del Usuario

perfilUsuario(usuario: UsuarioModel) {
  const authDatas = {
  idToken: this.userToken
  };
  console.log('Entra');
  
 return this.http.post(`${this.url}/accounts:lookup?key=${this.apikey}`, authDatas)
 .pipe(map(resp => {
 

var primero =  resp['users'];
var perfil  = primero[0];
var uid = perfil.localId;
// var PhotoUrl = perfil.PhotoUrl;
// var apellidoPaterno = perfil.apellidoPaterno;

console.log(uid);
// console.log(PhotoUrl);
return perfil;
// podemos poner perfil
 })
 );
 }

 getUsuarioPerfil( uid: string ) {
  return this.http.get(`${ this.urlu }/Usuarios_Sistema/${uid}.json`);
}



actualizarFoto( usuario: UsuModel) {

  return this.http.put(`${ this.urlu }/Usuarios_Sistema/${usuario.uid}.json`, usuario)
  .pipe(
    map((resp: any) => {
      usuario.uid = resp.uid;
      return usuario;
    })
  );
}

borrarCandidato(idPaseador:string){
    
  return  this.http.delete(`${this.urlu}/Candidatos/${idPaseador}.json`);
 }


// actualizarFoto( usuario: UsuarioModel) {

//   const usuarioTemp = {
//     ...usuario
//   };
//   delete usuarioTemp.uid;
//   return this.http.put(`${this.urlu}/Usuarios_Sistema/${usuario.uid}.json`, usuarioTemp);
// }
}
