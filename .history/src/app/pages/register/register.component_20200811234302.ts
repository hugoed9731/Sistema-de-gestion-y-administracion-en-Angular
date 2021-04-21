import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { InfoService } from '../../services/info.service';
import { UsuModel } from '../../models/usu.model';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  recordarme = false;
  usu: UsuModel;
  usuario: UsuarioModel;
  // selectedVal: string;
  // responseMessage: string = '';
  // responseMessageType: string = '';
  // emailInput: string;
  // passwordInput: string;
  // isForgotPassword: boolean;
  // userDetails: any;

  constructor(private auth: AuthService,
    private router: Router,
    private storage: AngularFireStorage,
    private infor: InfoService) {

    }

    uploadPercent: Observable<number>;
    urlImage: Observable<string>;

  ngOnInit() {
    this.usuario = new UsuarioModel();
    this.usu = new UsuModel();
  }

  onUpload(e) {
      // console.log('subir', e.target.file[0]);
      const uid = Math.random().toString(36).substring(2);
      const file = e.target.files[0];
      const filePath = `uploads/profile_${uid}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.uploadPercent = task.percentageChanges();
      task.snapshotChanges().pipe(
        finalize(() => {
         this.urlImage = ref.getDownloadURL()
          this.urlImage.subscribe(url => {  console.log("url "+url)
          this.usu.PhotoUrl = url;
      
          console.log("model "+this.usu.PhotoUrl);
      
        });
        })
      )
      .subscribe();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) { return; }
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();
    // Swal.fire({
    //   title: '¡Alta de usuario exitosa!',
    //   text: 'Por favor, indique al nuevo usuario que verifique su correo electronico para tener acceso al sistema',
    //   icon: 'info',
    //   allowOutsideClick: false
    // });
        this.auth.nuevoUsuario(this.usuario)
        .subscribe(resp1 => {
          console.log(resp1);
          this.auth.sendVerificationMail(this.usuario).subscribe(resp => {
            console.log('jaja',resp );
          }); 

          this.usu.uid = resp1['localId'];
          this.infor.crearInfo( this.usu)
          .subscribe(  resp =>   {
                console.log(resp );
              this.usu = resp;
            });
            
          Swal.close();
          if (this.recordarme) {
            localStorage.setItem('email', this.usu.email);
          }   
          this.auth.logout();
          // this.router.navigateByUrl('/home');
        }, (err) => {
          console.log(err.error.error.message);
          Swal.fire({
            icon: 'error',
            title: 'Error al autenticar',
            text: err.error.error.message
          });
        });
      }


      // showMessage(type, msg) {
      //   this.responseMessageType = type;
      //   this.responseMessage = msg;
      //   setTimeout(() => {
      //     this.responseMessage = "";
      //   }, 2000);
      // }
    }
