import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import {map, delay} from 'rxjs/operators';
import { PaseadorModel } from '../models/paseador.model';
import { PerroModel } from '../models/perro.model';
import { PaseoModel } from '../models/paseo.model';
import { CandidatoModel } from '../models/candidato.model';
import { User } from 'firebase';
import { newModel } from '../models/new.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthUService {
  candidato:CandidatoModel=new CandidatoModel();
  paseador:PaseadorModel=new PaseadorModel();
  uid:string;
  email:string;
  idToken:string;

  private url = 'https://caminandogbeta.firebaseio.com';
  private urlu = 'https://identitytoolkit.googleapis.com/v1';
  private apikey = 'AIzaSyBGGIC3EgF3tzXx702UTPnFLVxJ-xphJKw ';
  userToken: string;
  // REC
  user: User;

  public usuario: any = {};
  public perro: any = {};
  public perro2: any = {};
  public paseo: any = {};

  constructor( private http: HttpClient, public  afAuth: AngularFireAuth, public  router: Router, 
    private db:AngularFireDatabase) { }
  

// ------------------------------ Modulo Usuarios del Sistema -------------------------
  borrarUsuario( uid: string ) {

    return this.http.delete(`${ this.url }/Usuarios_Sistema/${ uid }.json`);

  }
    getUsuario( uid: string ) {
      return this.http.get(`${ this.url }/Usuarios_Sistema/${ uid }.json`);
    }

    getUsuarios() {
      return this.http.get(`${ this.url}/Usuarios_Sistema.json`)
      .pipe(
        map(this.crearArreglo),
        delay(0)
      );
    }
    private crearArreglo (usuariosObj: object) {
      
      const usuarios: UsuarioModel[] = [];
      console.log(usuariosObj);
      if (usuariosObj == null) {return[]; }

      Object.keys( usuariosObj ).forEach( key => {
        const usuario: UsuarioModel = usuariosObj [key];
        usuario.uid = key;
        usuarios.push(usuario);
      });
      return usuarios;
    }
     actualizarUsuario ( usuario: UsuarioModel ) {
  //  esto es para que el uid no se actualice por uno nuevo y se mantenga el mismo
      const usuarioTemp = {
        ...usuario
      };

      delete usuarioTemp.uid;
      return this.http.put(`${this.url}/Usuarios_Sistema/${ usuario.uid }.json`, usuarioTemp);
     }

     banned_uids(usuario: UsuarioModel) {

      const usuarioTemp = {
        ...usuario
    };
    delete usuarioTemp.uid;
    
      return this.http.put(`${ this.url }/banned_uids/${usuario.uid}.json`, usuarioTemp.activo);
    }
  
    borrarUsuariobaner( uid: string) {

      return this.http.delete(`${ this.url }/banned_uids/${uid}.json`);
    
    }

    //  ------------------------------ Modulo de Finanzas ---------------------------------
  
  
    getPaseadores() {
      return this.http.get(`${ this.url}/Paseadores.json`)
      .pipe(
        map(this.crearArreglopaseadores),
        delay(0)
      );
      }

      private crearArreglopaseadores (paseadoresObj: object) {
      
        const paseadores: PaseadorModel[] = [];
        console.log(paseadoresObj);
        if (paseadoresObj == null) {return[]; }
  
        Object.keys( paseadoresObj ).forEach( key => {
          const paseador: PaseadorModel = paseadoresObj [key];
          paseador.uid = key;
          paseadores.push(paseador);
        });
        return paseadores;
      }

      getPaseador( uid: string ) {
        return this.http.get(`${ this.url }/Paseadores/${ uid }.json`);
      }


      actualizarPaseador ( paseador: PaseadorModel ) {
        //  esto es para que el uid no se actualice por uno nuevo y se mantenga el mismo
            const paseadorTemp = {
              ...paseador
            };
        
            delete paseadorTemp.uid;
        
            return this.http.put(`${this.url}/Paseadores/${ paseador.uid }.json`, paseadorTemp);
           }

   
     
      getOrdenpaseador() {
        return this.http.get(`${ this.url}/Paseos_paseadores.json`)
        .pipe(
          map(this.crearOrden),
          delay(0)
        );
      }
      private crearOrden (paseadoresObj: object) {
        
        const usuarios: UsuarioModel[] = [];
        var uid = '';
        if (paseadoresObj == null) {return[]; }

        Object.keys( paseadoresObj ).forEach( key => {
          const usuario: UsuarioModel = paseadoresObj [key];
          console.log(key);
          uid = key;

          Object.keys( usuario ).forEach( key => {
            const usuario2: UsuarioModel = usuario [key];
            usuario2.uid = uid;
            usuarios.push(usuario2);

        });
      });
          // usuarios.push(usuario);
          return usuarios;
    }

    getIdOrdePaseador(uid: string, order_id: string) {
      return this.http.get(`${ this.url }/Paseos_paseadores/${uid}/${order_id}.json`);
    }

    getOrdenusuarios() {

      return this.http.get(`${ this.url}/Paseos_usuarios/.json`)
      .pipe(
        map(this.crearOrdenUsu),
        delay(0)
      );
      }
      private crearOrdenUsu (usuariossObj: object) {
  
        const usuarios: UsuarioModel[] = [];
        var uid = '';
        if (usuariossObj == null) {return[]; }
  
        Object.keys( usuariossObj ).forEach( key => {
          const usuario: UsuarioModel = usuariossObj [key];
          console.log(key);
          uid = key;
  
          Object.keys( usuario ).forEach( key => {
            const usuario2: UsuarioModel = usuario [key];
            usuario2.uid = uid;
            usuarios.push(usuario2);
  
        });
      });
          return usuarios;
    }

    getIdOrdeUsu(uid: string, order_id: string) {
      return this.http.get(`${ this.url }/Paseos_usuarios/${uid}/${order_id}.json`);
    }

    getDispersion() {
      return this.http.get(`${ this.url}/Paseos_paseadores.json`)
      .pipe(
        map(this.disperOrden),
        delay(0)
      );
    }
    private disperOrden (dispersionesObj: object) {
        
      const usuarios: UsuarioModel[] = [];
      var uid = '';
      if (dispersionesObj == null) {return[]; }

      Object.keys( dispersionesObj ).forEach( key => {
        const usuario: UsuarioModel = dispersionesObj [key];
        console.log(key);
        uid = key;

        Object.keys( usuario ).forEach( key => {
          const usuario2: UsuarioModel = usuario [key];
          usuario2.uid = uid;
          usuarios.push(usuario2);

      });
    });
        // usuarios.push(usuario);
        return usuarios;
  }

  // getDispersionp() {
  //   return this.http.get(`${ this.url}/Paseadores.json`)
  //   .pipe(
  //     map(this.disperOrden),
  //     delay(0)
  //   );
  // }
  
    // ---------------------------------------- RecuperanDog -----------------------------------


    getPerros() {
      return this.http.get(`${ this.url}/Recuperandog.json`)
      .pipe(
        map(this.crearArregloperros),
        delay(0)
      );
  }

  // private crearArregloperros (perrosObj: object) {
      
  //   const usuarios: UsuarioModel[] = [];
  //   console.log(perrosObj);
  //   if (perrosObj == null) {return[]; }

  //   Object.keys( perrosObj ).forEach( key => {
  //     const usuario: UsuarioModel = perrosObj [key];
  //     usuario.uid = key;
  //     usuarios.push(usuario);
  //   });
  //   return usuarios;
  // }
  
  private crearArregloperros (perrosqrObj: object) {
  const usuarios: UsuarioModel[] = [];
  if (perrosqrObj === null) { return[]; }
  Object.keys(perrosqrObj).forEach( key => {
    const usuario: UsuarioModel = perrosqrObj [key];
    usuario.uid = key;
    if (usuario.QR !== ''){
      usuarios.push(usuario);
    }
  });
return usuarios;
}

  getDog( uid: string ) {
    return this.http.get(`${ this.url }/Recuperandog/${ uid }.json`);
  }

  getCostos() {
    return this.http.get(`${ this.url}/Costos.json`)
    .pipe(
      map(this.crearArreglo),
      delay(0)
    );
  }
  getCosto( uid: string ) {
    return this.http.get(`${ this.url }/Costos/${ uid }.json`);
  }
  actualizarCosto ( usuario: UsuarioModel ) {
    //  esto es para que el uid no se actualice por uno nuevo y se mantenga el mismo
        const usuarioTemp = {
          ...usuario
        };

        delete usuarioTemp.uid;

        return this.http.put(`${this.url}/Costos/${ usuario.uid }.json`, usuarioTemp);
       }


      //  -------------------------------------------- Jorge -------------------------------------------------------
// ------ Modulo usuarios ---------------------------------------------

getUsuariosj() {
  return this.http.get(`${ this.url}/Usuarios.json`)
  .pipe(
    map(this.crearArreglo ),
     delay(0)
  );
}

borrarUsuarioj( uid: string) {

  return this.http.delete(`${ this.url }/Usuarios/${ uid }.json`);

}

getUsuarioj( id: string) {
  return this.http.get(`${ this.url }/Usuarios/${ id }.json`);
}


actualizarUsuarioj (usuario: UsuarioModel ) {

  const usuarioTemp = {
    ...usuario
};
delete usuarioTemp.id;

  return this.http.put(`${ this.url }/Usuarios/${ usuario.id }.json`, usuarioTemp);
}

banned_uidsj (usuario: UsuarioModel ) {

  const usuarioTemp = {
    ...usuario
};
delete usuarioTemp.id;

  return this.http.put(`${ this.url }/banned_uids/${ usuario.id }.json`, usuarioTemp.estatus);
}

borrarUsuariobanerj( uid: string) {

  return this.http.delete(`${ this.url }/banned_uids/${ uid }.json`);

}

getordenusu(uid: string) {
  return this.http.get(`${ this.url }/Paseos_usuarios/${ uid }.json`)
  .pipe(
    map(this.crearArregloOd ),
     delay(0)
     );

}
// detalle de ordenes por usuario
private crearArregloOd (ordenesObj: object) {

  const ordenes: UsuarioModel[] = [];
  var id = '';
  if (ordenesObj == null) { return[]; }
  Object.keys( ordenesObj ).forEach( key => {
    const orden: UsuarioModel = ordenesObj[key];
    // console.log("g",key);
   id = key;
   ordenes.push(orden);

  });
return ordenes;

}


getPerro(id: string) {
  return this.http.get(`${ this.url }/Perros/${ id }.json`)
  .pipe(
    map(this.crearArregloPd ),
     delay(0)
     );

}
// perros detalle
private crearArregloPd (perrosObj: object) {

  const perros: PerroModel[] = [];
  var id = '';
  if (perrosObj == null) { return[]; }

  Object.keys( perrosObj ).forEach( key => {
    const perro: PerroModel = perrosObj [key];
    console.log('f',key);
   id = key;
   perros.push(perro);
   
  });
return perros;
}

getConsumoservicio() {
  return this.http.get(`${ this.url }/Paseos_usuarios.json`)
  .pipe(
    map(this.crearArregloConserv ),
     delay(0)
  );

}

private crearArregloConserv (servObj: object) {

  const servicios: UsuarioModel[] = [];
  var uid = '';
  if (servObj === null) { return[]; }

  Object.keys( servObj ).forEach( key => {
    const servicio: UsuarioModel = servObj [key];
    
   uid = key;
   Object.keys(servicio).forEach( key => {
   const servicio2: UsuarioModel = servicio [key];

   servicio2.uid = uid;
   servicios.push(servicio2);
   });
  });
return servicios;
}

getUsuariopaseo( uid: string , order_id: string ) {
  return this.http.get(`${ this.url }/Paseos_usuarios/${ uid }/${ order_id }.json`);
}



getPerrosj() {
  return this.http.get(`${ this.url }/Perros.json`)
  .pipe(
    map(this.crearArregloP ),
     delay(0)
  );

}
// perros
private crearArregloP (perrosObj: object) {

  const perros: PerroModel[] = [];
  var uid = '';
  if (perrosObj == null) { return[]; }

  Object.keys( perrosObj ).forEach( key => {
    const perro: PerroModel = perrosObj [key];
    console.log(key);
   uid = key;
   Object.keys(perro).forEach( key => {
   const perro2: PerroModel = perro [key];

   perro2.uid = uid;
   perros.push(perro2);
   });
  });
return perros;
}

// ----------------------------------------------- Paseos ---------------------------------------------

getPaseosactivo() {
  return this.http.get(`${ this.url }/Paseadores.json`)
  .pipe(
    map(this.crearArregloactivo ),
     delay(0)
  );
}
private crearArregloactivo(paseosactivosObj: object) {

  const paseos: PaseoModel[] = [];

  if (paseosactivosObj === null) { return[]; }

  Object.keys( paseosactivosObj ).forEach( key => {
    const paseo: PaseoModel = paseosactivosObj [key];
    paseo.id = key;
    if (paseo.paseosActivos != undefined){
       paseos.push(paseo);
    }
     });
return paseos;
}



getPaseoact( id: string) {
  return this.http.get(`${ this.url }/Paseadores/${ id }/paseosActivos.json`)
  .pipe(
    map(this.crearArreglodetalleactivo ),
     delay(0)
     );
}
private crearArreglodetalleactivo (detalleactivoObj: object) {

  const paseos: PaseoModel[] = [];
//  console.log(usuariosObj);
  if (detalleactivoObj == null) { return[]; }

  Object.keys( detalleactivoObj ).forEach( key => {
    const paseo: PaseoModel = detalleactivoObj [key];
    paseo.id = key;
  
    paseos.push(paseo);
  });
return paseos;
}
getPaseosfinalizados() {
  return this.http.get(`${ this.url }/Paseos_usuarios.json`)
  .pipe(
    map(this.crearArreglofinalizado ),
     delay(0)
  );
}
private crearArreglofinalizado(paseosfinalObj: object) {

  const paseos: PaseoModel[] = [];
var id='';

  if (paseosfinalObj === null) { return[]; }

  Object.keys( paseosfinalObj ).forEach( key => {
    const paseo: PaseoModel = paseosfinalObj [key];
    id = key;
    Object.keys(paseo).forEach(key =>{
      const paseo2: PaseoModel = paseo[key];
      paseo2.id = id;
      if (paseo2.estatusPaseo != undefined && paseo2.estatusPaseo['estatus'] === 'terminado') {
        paseos.push(paseo2);
      }
    });
     });
return paseos;
}

getdetallepaseofinalizado( uid: string , order_id: string ) {
  return this.http.get(`${ this.url }/Paseos_usuarios/${ uid }/${ order_id }.json`);
}


getPaseosag() {
  return this.http.get(`${ this.url }/Agendados.json`)
  .pipe(
    map(this.crearArregloag ),
     delay(0)
  );
}
private crearArregloag (paseosagObj: object) {
  const paseos: PaseoModel[] = [];
  if (paseosagObj === null) { return[]; }
  Object.keys( paseosagObj ).forEach( key => {
    const paseo: PaseoModel = paseosagObj [key];
    paseo.id = key;
    if (paseo.id_paseador === 'no_asignado'){
      paseos.push(paseo);
    }
  });
return paseos;
}

getPaseoag( id: string) {
  return this.http.get(`${ this.url }/Agendados/${ id }.json`);
}

actualizarPaseo (paseo: PaseoModel ) {

  const paseoTemp = {
    ...paseo
};
delete paseoTemp.id;

  return this.http.put(`${ this.url }/Agendados/${ paseo.id }.json`, paseoTemp);
}


// ------------------------------------------------------------- Gerardo ------------------------------------------

getCandidatos(){
  return this.http.get(`${this.url}/Candidatos.json`)
  .pipe(
    map(this.crearArreglo1),
    delay(0)
  );
}
private crearArreglo1(candiObj:object){
  const candidatos:CandidatoModel[]=[];
  var id='';
  if (candiObj === null) {return[];}
  Object.keys(candiObj).forEach(key=>{
   const candidato:CandidatoModel=candiObj[key];
   candidato.idPaseador=key;
   if(candidato.etapa === '1-En proceso'){
   candidatos.push(candidato);
  }
  });
return candidatos;
}

borrarCandidato(idPaseador:string){
    
  return  this.http.delete(`${this.url}/Candidatos/${idPaseador}.json`);
 }

 getCandidato(idPaseador:string){
  return this.http.get(`${this.url}/Candidatos/${idPaseador}.json`);
}

actualizar(candi:CandidatoModel){

  const candidatoTemp = {
    ...candi
  };
  
  delete candidatoTemp.idPaseador;

  return this.http.put(`${this.url}/Candidatos/${candi.idPaseador}.json`, candidatoTemp);
 }

 getCandidatos2(){
  return this.http.get(`${this.url}/Candidatos.json`)
  .pipe(
    map(this.crearArreglo2),
    delay(0)
  );
}

private crearArreglo2(candiObj:object){
  const candidatos:CandidatoModel[]=[];
  var id='';
  if (candiObj === null) {return[];}
  Object.keys(candiObj).forEach(key=>{
   const candidato:CandidatoModel=candiObj[key];
   candidato.idPaseador=key;
   if(candidato.etapa === '2-En evaluacion'){
   candidatos.push(candidato);
  }
  });
return candidatos;
}

ObtuvoContrato( uid: string ){
  return this.http.get(`${ this.url }/Candidatos/${uid}.json`);
}

getPaseadoresg(){
  return this.http.get(`${this.url}/Paseadores.json`)
  .pipe(
    map(this.crearArreglog),
    delay(0)
  );
}

private crearArreglog(PaseObj:object){
  const paseadores:PaseadorModel[]=[];
  if (PaseObj === null) {return[];}
  Object.keys(PaseObj).forEach(key=>{
   const paseador:PaseadorModel=PaseObj[key];
   paseador.idPaseador=key;
   paseadores.push(paseador);
  });
return  paseadores;
}

borrarPase(idPaseador:string){
  return  this.http.delete(`${this.url}/Paseadores/${idPaseador}.json`);
 }

 getPaseadorg(idPaseador:string){
  return this.http.get(`${this.url}/Paseadores/${idPaseador}.json`);
}

actualizarg(Pase:PaseadorModel){
  const paseadorTemp = {
    ...Pase
  };
  
  delete paseadorTemp.uid;

  return this.http.put(`${this.url}/Paseadores/${Pase.idPaseador}.json`, paseadorTemp);
 }

 creaPase(Pase:PaseadorModel){
  return this.http.put(`${this.url}/Paseadores.json`,Pase)
  .pipe(
    map((resp:any)=>{
      Pase.idPaseador= resp.name;
      return Pase;
    })
  );
  }

  nuevoUsuario(usuario: newModel) {
    const authData = {
     ...usuario,
     returnSecureToken: true
   };
   return this.http.post(`${this.urlu}/accounts:signUp?key=${this.apikey}`, authData)
   .pipe(map(resp => {
 
 this.guardarToken(resp['idToken']);
 return resp;
   })
   );
   }

   sendVerificationMail(usuario: newModel){
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

   async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
 }

 verifyEmail(): Promise<void> {
  return this.afAuth.auth.currentUser.sendEmailVerification();
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

crearInfo( paseador: PaseadorModel) {
  return this.http.patch(`${this.url}/Paseadores/${paseador.uid}.json`, paseador)
  .pipe(
    map((resp:any)=>{
   paseador.uid=resp.name;
     paseador.uid=resp.uid;
         return paseador;
    })
    );
 }

}
