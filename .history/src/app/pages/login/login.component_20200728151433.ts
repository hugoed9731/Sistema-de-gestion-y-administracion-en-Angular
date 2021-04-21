import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

// google
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;


  constructor(private auth: AuthService,
    private router: Router, db: AngularFirestore) {

    }

  ngOnInit() {
    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }
  ngOnDestroy() {
  }

  login(form: NgForm) {
    if (form.invalid) {return; }
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

      this.auth.login(this.usuario)
      .subscribe(resp => {
        console.log(resp);
        Swal.close();

    if (this.recordarme) {
      localStorage.setItem('email', this.usuario.email);
    }

    localStorage.setItem('uid', resp['localId']);
    localStorage.setItem('email', resp['email']);

    this.auth.perfilUsuario(this.usuario)
      .subscribe(resp => {
        console.log('segundo', resp);
      this.usuario.email = resp.email;

      if (resp.emailVerified == false){
        this.auth.sendVerificationMail(this.usuario).subscribe(resp => {
          console.log('jaja',resp );
        }); 
        this.auth.logout();
        Swal.fire({
          icon: 'error',
          title: '¡Error,correo no verificado!',
          text: 'Por favor, verifique su correo, te lo hemos enviado nuevamente'
        });
      } else if (resp.emailVerified == true) {
        // this.router.navigateByUrl('/dashboard');
        console.log('antes del servicio');
        var localId=localStorage.getItem('uid');
        var ref = firebase.database().ref(`Usuarios_Sistema/${localId}`);
        ref.once('value', function(snapshot) {
          if (snapshot.exists()) {
            location.assign('#/dashboard');
            console.log('Si existe en USUARIOS');
          } else {
              alert("No estas registrado como Usuario")
          }
        // var entrar=this.router.navigateByUrl('/dashboard');
        // var NoEsta=this.auth.logout();
        // ref.once('value')
        // .then(function(snapshot) {
        //   var b = snapshot.exists();
        //   console.log('Despues del servicio',b);
        //   if (b===true){
        //     entrar;
        //   } else if(b===false){
        //     console.log('respuesta5', resp);
        //     Swal.fire({
        //       icon: 'error',
        //       title: 'No se encuentra en la base de datos',
        //       text:'La credencial ingresada no se encuentra en Usuarios del Sistema'
        //     });
        //     NoEsta;
        //   }
        // });
      }
      });
      }, (err) => {
    console.log(err.error.error.message);
    Swal.fire({
      icon: 'error',
      title: 'Error al autenticar',
      text: err.error.error.message
    });
    Swal.fire({
      icon: 'error',
      title: 'Error correo no verificado',
      text: err.error.error.message
    });
      });
      }
    }