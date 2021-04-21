import { Component, OnInit } from '@angular/core';
import { CandidatoModel } from '../../../models/candidato.model';
import {NgForm} from '@angular/forms';
import { AuthUService } from '../../../services/auth-u.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallecandidato',
  templateUrl: './detallecandidato.component.html',
  styleUrls: ['./detallecandidato.component.scss']
})
export class DetallecandidatoComponent implements OnInit {

  candidato: CandidatoModel =new CandidatoModel();

  constructor( private authService: AuthUService, 
    private route:ActivatedRoute) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'nuevo'){
      this.authService.getCandidato(id)
      .subscribe((resp:CandidatoModel)=>{
       this.candidato=resp;
       this.candidato.idPaseador=id;
      });
    }
  }

  guardar(form:NgForm){

    if (form.invalid){
      console.log('Formulario no valido');
      return;
    }
    
    Swal.fire({
      title:'Espere',
      text:'Guardando Informacion',
      icon:'info',
      allowOutsideClick: false
    });
    Swal.showLoading();
    
    let peticion:Observable<any>;
    
    if (this.candidato.idPaseador){
      peticion = this.authService.actualizar(this.candidato);
    
    }else{
    //  peticion = this.candidatoService.creaCandi(this.candidato);
    }
    
    peticion.subscribe(resp=>{
    Swal.fire({
    title:this.candidato.nombre,
    text:'Se actualizo correctamente',
    icon:'success'
    });
    });
    
     }
    
    }
    


