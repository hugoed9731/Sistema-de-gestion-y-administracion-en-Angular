import { Component, OnInit } from '@angular/core';
import { PaseadorModel } from '../../models/paseador.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthUService } from '../../services/auth-u.service';
import { newModel } from '../../models/new.model';

@Component({
  selector: 'app-nuevopaseador',
  templateUrl: './nuevopaseador.component.html',
  styleUrls: ['./nuevopaseador.component.scss']
})
export class NuevopaseadorComponent implements OnInit {

  testBoolean:boolean=false;
  new: newModel=new newModel();
  paseador: PaseadorModel= new PaseadorModel();

  constructor(private router:Router,
    public auth: AuthUService, public creacion: AuthUService) { }

  ngOnInit() {
    this.new = new newModel();
    this.paseador=new PaseadorModel();
  }

  onButtonClick(){
    this.testBoolean=!this.testBoolean;
  }
  guardar(form: NgForm) {
    if (form.invalid) { return; }
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
        this.auth.nuevoUsuario(this.new)
        .subscribe(resp1 => {
          console.log(resp1);
          
          //en caso de no jalar
          this.paseador.uid=resp1['localId'];
          this.creacion.crearInfo(this.paseador)
         .subscribe(resp =>{
          console.log(resp);
         
          this.paseador=resp;
         });
         Swal.close(); 
         // this.router.navigateByUrl('/home');
       }, (err) => {
         console.log(err.error.error.message);
         Swal.fire({
           icon: 'error',
           title: 'Error al autenticar',
           text: err.error.error.message
         });
       });
         
        //  para creacion de informacion de usuario
         

   }

}

