import { Component, OnInit } from '@angular/core';
import { PaseadorModel } from '../../../models/paseador.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthUService } from '../../../services/auth-u.service';

@Component({
  selector: 'app-detallepaseadorg',
  templateUrl: './detallepaseadorg.component.html',
  styleUrls: ['./detallepaseadorg.component.scss']
})
export class DetallepaseadorgComponent implements OnInit {

  paseador: PaseadorModel = new PaseadorModel();

  constructor(private paseadorService: AuthUService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'nuevo'){
      this.paseadorService.getPaseadorg(id)
      .subscribe((resp:PaseadorModel)=>{
       this.paseador=resp;
       this.paseador.idPaseador=id;
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
    
    if (this.paseador.uid){
      peticion = this.paseadorService.actualizarg(this.paseador);
    
    }else{
    //  peticion = this.paseadorService.creaPase(this.paseador);
    }
    
    peticion.subscribe(resp=>{
    Swal.fire({
    title:this.paseador.nombre,
    text:'Se actualizo correctamente',
    icon:'success'
    });
    });
    
     }

}

