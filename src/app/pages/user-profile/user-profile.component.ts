import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsuarioModel } from '../../models/usuario.model';
import { UsuModel } from '../../models/usu.model';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  usu: UsuModel;



  constructor( private authService: AuthService, private route: ActivatedRoute, private storage: AngularFireStorage) {}


  uploadPercent: Observable<number>;
    urlImage: Observable<string>;

  ngOnInit() {


    this.usuario = new UsuarioModel();
    this.usu = new UsuModel();

    const uid = this.route.snapshot.paramMap.get('uid');
    var localId = localStorage.getItem('uid');
    console.log('uidchida', localId);
    if (localId !== 'nuevo') {
      this.authService.getUsuarioPerfil( localId).subscribe( (resp: UsuarioModel) => {
        this.usuario = resp;
        this.usuario.uid = localId;
      });
    }

    this.authService.perfilUsuario(this.usuario)
      .subscribe(resp => {
        console.log('segundo', resp);
      // this.usuario.photoUrl = resp.PhotoURL;
      this.usuario.email = resp.email;
      // this.usuario.nombre = resp.nombre;
      // this.usuario.apellidoPaterno = resp.apellidoPaterno;
      });

  }
// ---------------------------------------------------- Actualizar foto de perfil ----------------------------------------
  onUpload(e) {
      // console.log('subir', e.target.file[0]);
      const uid = Math.random().toString(36).substring(2); /*Generamos uid aleatorio*/
      const file = e.target.files[0]; /* aqui es donde tendremos el archivo*/
      const filePath = `uploads/profile_${uid}`; /*la ruta del fichero*/
      const ref = this.storage.ref(filePath); /*le pasamos la ruta*/
      const task = this.storage.upload(filePath, file); /*aqui se realiza la subida del fichero(filePath:ruta,file:fichero) */
      this.uploadPercent = task.percentageChanges(); /* porcentaje de carga del fichero*/
      Swal.fire({
        title: 'Espere',
        text: 'Actualizando foto de perfil',
        icon: 'info',
        allowOutsideClick: false
      });
      Swal.showLoading();
      // let peticion: Observable<any>;
      task.snapshotChanges().pipe(  /*Recuperar la url del fichero*/
        finalize(() => {
         this.urlImage = ref.getDownloadURL();
          this.urlImage.subscribe(url => {  console.log("url "+url);
          this.usuario.PhotoUrl = url;
          console.log("model " + this.usuario.PhotoUrl);
          this.authService.actualizarFoto( this.usuario)
          .subscribe(  resp =>   {
                console.log(resp );
              this.usu = resp;
              Swal.fire({
                title: this.usuario.nombre,
                text: 'Tu foto se actualizo correctamente',
                icon: 'success'
            });
            });
          // if ( this.usuario.uid) {
            // peticion =
            //  this.authService.actualizarFoto( this.usuario);
            // console.log("que pasa", this.usuario);
          // } else {
            // console.log('No paso nada ya tienes foto de perfil');
          // }
        });
        }   )
      )
      .subscribe();
  }

}
