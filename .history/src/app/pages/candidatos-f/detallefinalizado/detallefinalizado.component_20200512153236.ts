import { Component, OnInit } from '@angular/core';
import { CandidatoModel } from '../../../models/candidato.model';
import {NgForm} from '@angular/forms';
import { AuthUService } from '../../../services/auth-u.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { PaseadorModel } from '../../../models/paseador.model';
import * as firebase from 'firebase';
import { newModel } from '../../../models/new.model';

@Component({
  selector: 'app-detallefinalizado',
  templateUrl: './detallefinalizado.component.html',
  styleUrls: ['./detallefinalizado.component.scss']
})
export class DetallefinalizadoComponent implements OnInit {

  candidato: CandidatoModel =new CandidatoModel();
  paseador: PaseadorModel=new PaseadorModel();
  new: newModel=new newModel();
  imageToShow: any;

  constructor( private candidatoService: AuthUService, 
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'nuevo'){
      this.candidatoService.getCandidato(id)
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
      peticion = this.candidatoService.actualizar(this.candidato);
    
    }else{
    //  peticion = this.candidatoService.creaPase(this.candidato);
    }
    
    peticion.subscribe(resp=>{
    Swal.fire({
    title:this.candidato.nombre,
    text:'Se actualizo correctamente',
    icon:'success'
    });
    });
    
     }
    
     guardar2(form:NgForm){
    
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
        peticion = this.candidatoService.actualizar(this.candidato);
        this.candidato.regproceso = '11-Datos correctos';
      
      }else{
      //  peticion = this.candidatoService.creaPase(this.candidato);
      }
      
      peticion.subscribe(resp=>{
      Swal.fire({
      title:this.candidato.nombre,
      text:'Completo los datos correctos',
      icon:'success'
      });
      });
      
       }
    
       guardar3(form:NgForm){
    
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
          peticion = this.candidatoService.actualizar(this.candidato);
          this.candidato.regproceso = '12-Comprobacion de coordenadas';
        
        }else{
        //  peticion = this.candidatoService.creaPase(this.candidato);
        }
        
        peticion.subscribe(resp=>{
        Swal.fire({
        title:this.candidato.nombre,
        text:'Completo la comprobacion de coordenadas',
        icon:'success'
        });
        });
        
         }
    
         guardar4(form:NgForm){
    
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
            peticion = this.candidatoService.actualizar(this.candidato);
            this.candidato.regproceso = '13-Referencias Personales';
          
          }else{
          //  peticion = this.candidatoService.creaPase(this.candidato);
          }
          
          peticion.subscribe(resp=>{
          Swal.fire({
          title:this.candidato.nombre,
          text:'Completo las referencias personales',
          icon:'success'
          });
          });
          
           }
    
           guardar5(form:NgForm){
    
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
              peticion = this.candidatoService.actualizar(this.candidato);
              this.candidato.regproceso = '14-Documentacion correcta';
            
            }else{
            //  peticion = this.candidatoService.creaPase(this.candidato);
            }
            
            peticion.subscribe(resp=>{
            Swal.fire({
            title:this.candidato.nombre,
            text:'Completo la documentacion correcta',
            icon:'success'
            });
            });
            
             }
    
             guardar6(form:NgForm){
    
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
                peticion = this.candidatoService.actualizar(this.candidato);
                this.candidato.regproceso = '15-Visita a Domicilio';
              
              }else{
              //  peticion = this.candidatoService.creaPase(this.candidato);
              }
              
              peticion.subscribe(resp=>{
              Swal.fire({
              title:this.candidato.nombre,
              text:'Completo la visita a domicilio',
              icon:'success'
              });
              });
              
               }
    
               guardar7(form:NgForm){
    
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
                  peticion = this.candidatoService.actualizar(this.candidato);
                  this.candidato.regproceso = '16-Cuenta de banco';
                
                }else{
                //  peticion = this.candidatoService.creaPase(this.candidato);
                }
                
                peticion.subscribe(resp=>{
                Swal.fire({
                title:this.candidato.nombre,
                text:'Completo la visita a domicilio',
                icon:'success'
                });
                });
                
                 }
    
                 guardar8(form:NgForm){
    
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
                    peticion = this.candidatoService.actualizar(this.candidato);
                    this.candidato.regproceso = '17-Kit paseador entregado';
                  
                  }else{
                  //  peticion = this.candidatoService.creaPase(this.candidato);
                  }
                  
                  peticion.subscribe(resp=>{
                  Swal.fire({
                  title:this.candidato.nombre,
                  text:'Completo el kit paseador entregado',
                  icon:'success'
                  });
                  });
                  
                   }
    
     createImageFromBlob(image: Blob) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
         this.imageToShow = reader.result;
      }, false);
    
      if (image) {
         reader.readAsDataURL(image);
      }
    }
    
    BotonContrato(){
      if(this.candidato.regproceso === '17-Kit paseador entregado'){
        Swal.fire({
          title:'Este candidato ahora forma parte de paseadores',
          text:'Buscarlo en la ventana de paseadores',
          icon:'success'
          });
        const uid= this.candidato.idPaseador;
        this.candidatoService.ObtuvoContrato(uid)
        .subscribe(resp=>{
          console.log(resp);
          var fecha = new Date(); //Fecha actual
        var mes = fecha.getMonth() + 1; //obteniendo mes
        var dia = fecha.getDate(); //obteniendo dia
        var ano = fecha.getFullYear(); //obteniendo año
        
          this.paseador.fecha_contratacion = dia + "/" + mes + "/" + ano;
          this.paseador.email=resp['email'];
          this.paseador.idPaseador=uid;
          this.paseador.nombre=resp['nombre'];
          this.paseador.apellidopa=resp['apellidopa'];
          this.paseador.apellidoma=resp['apellidoma'];
          this.paseador.genero=resp['genero'];
          this.paseador.fnacimiento=resp['fnacimiento'];
          this.paseador.edad=resp['edad'];
          this.paseador.telefono=resp['telefono'];
          this.paseador.celular=resp['celular'];
          this.paseador.tallaplay=resp['talla'];
          this.paseador.calle=resp['calle'];
          this.paseador.numero=resp['numero'];
          this.paseador.ninterior=resp['ninterior'];
          this.paseador.colonia=resp['colonia'];
          this.paseador.cpostal=resp['cpostal'];
          this.paseador.municipio=resp['municipio'];
          this.paseador.estado=resp['estado'];
          this.paseador.Latitude=resp['Latitude'];
          this.paseador.Longitude=resp['Longitude'];
          this.paseador.pais=resp['pais'];
          this.paseador.direcfoto=resp['direcfoto'];
          this.paseador.disponibilidad=resp['disponibilidad'];
          this.paseador.expecingreso=resp['expecingreso'];
          this.paseador.gbdata=resp['gbdata'];
          this.paseador.muntrabajo=resp['muntrabajo'];
          this.paseador.menteraste=resp['menteraste'];
          this.paseador.exppaseador=resp['exppaseador'];
          this.paseador.exptipo=resp['exptipo'];
          this.paseador.exptiempo=resp['exptiempo'];
          this.paseador.estatustest=resp['estatustest'];
          this.paseador.calitutorial=resp['calitutorial'];
          this.paseador.precapacita=resp['precapacita'];
          this.paseador.costopromedio=resp['costopromedio'];
          this.paseador.plataformas=resp['plataformas'];
          this.paseador.promoplata=resp['promoplata'];
          this.paseador.banco=resp['banco'];
          this.paseador.claveib=resp['claveib'];
          this.paseador.ncuenta=resp['ncuenta'];
          this.paseador.ntarjeta=resp['ntarjeta'];
          this.paseador.kitpaseador=resp['kitpaseador'];
          this.paseador.confirmar='0';
          this.paseador.confirmar='';
          this.paseador.ok='';
          this.paseador.status='1';
          this.paseador.solicitud='1';
          var task = firebase.database().ref("Paseadores/" + this.paseador.idPaseador);
        task.child("idPaseador").set(this.paseador.idPaseador);
        task.child("email").set(this.paseador.email);
        task.child("nombre").set(this.paseador.nombre);
        task.child("apellidopa").set(this.paseador.apellidopa);
        task.child("apellidoma").set(this.paseador.apellidoma);
        task.child("genero").set(this.paseador.genero);
        task.child("fnacimiento").set(this.paseador.fnacimiento);
        task.child("edad").set(this.paseador.edad);
        task.child("telefono").set(this.paseador.telefono);
        task.child("celular").set(this.paseador.celular);
        task.child("talla").set(this.paseador.tallaplay);
        task.child("calle").set(this.paseador.calle);
        task.child("numero").set(this.paseador.numero);
        task.child("ninterior").set(this.paseador.ninterior);
        task.child("colonia").set(this.paseador.colonia);
        task.child("cpostal").set(this.paseador.cpostal);
        task.child("municipio").set(this.paseador.municipio);
        task.child("estado").set(this.paseador.estado);
        task.child("Latitude").set(this.paseador.Latitude);
        task.child("Longitude").set(this.paseador.Longitude);
        task.child("pais").set(this.paseador.pais);
        task.child("direcfoto").set(this.paseador.direcfoto);
        task.child("disponibilidad").set(this.paseador.disponibilidad);
        task.child("expecingreso").set(this.paseador.expecingreso);
        task.child("gbdata").set(this.paseador.gbdata);
        task.child("muntrabajo").set(this.paseador.muntrabajo);
        task.child("menteraste").set(this.paseador.menteraste);
        task.child("exppaseador").set(this.paseador.exppaseador);
        task.child("exptipo").set(this.paseador.exptipo);
        task.child("exptiempo").set(this.paseador.exptiempo);
        task.child("estatustest").set(this.paseador.estatustest);
        task.child("calitutorial").set(this.paseador.calitutorial);
        task.child("precapacita").set(this.paseador.precapacita);
        task.child("costopromedio").set(this.paseador.costopromedio);
        task.child("plataformas").set(this.paseador.plataformas);
        task.child("promoplata").set(this.paseador.promoplata);
        task.child("banco").set(this.paseador.banco);
        task.child("claveib").set(this.paseador.claveib);
        task.child("ncuenta").set(this.paseador.ncuenta);
        task.child("ntarjeta").set(this.paseador.ntarjeta);
        task.child("kitpaseador").set(this.paseador.kitpaseador);
        task.child("comprobacion/ok").set(this.paseador.ok);
        task.child("confirmar/confirmar").set(this.paseador.confirmar);
        task.child("solicitud/solicitud").set(this.paseador.solicitud);
        task.child("fecha_contratacion").set(this.paseador.fecha_contratacion)
        //ahora se borra de candidatos
        this.candidatoService.borrarCandidato(this.candidato.idPaseador).subscribe();
        this.router.navigateByUrl('/candidatof');
      });
      }else{
        Swal.fire({
          title:'Este candidato no esta en la etapa 17',
          text:'Porfavor completar la evaluacion',
          icon:'error'
          });
      }
      
    }
    
    
    }
    
    


