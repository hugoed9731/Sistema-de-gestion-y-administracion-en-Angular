import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AuthUService } from '../../services/auth-u.service';
import { CandidatoModel } from '../../models/candidato.model';
import Swal from 'sweetalert2';
import { ExcelService } from '../../services/excel.service';
import { XLSX } from '../../../../node_modules/xlsx/xlsx';

@Component({
  selector: 'app-candidatos-p',
  templateUrl: './candidatos-p.component.html',
  styleUrls: ['./candidatos-p.component.scss']
})
export class CandidatosPComponent implements OnInit {

  candidatos:CandidatoModel[]=[];
  pageActual: number = 1;
  filPost= '';
cargando=true;
filterR  = '';
filterNombre = '';
filterEmail = '';
filterFecha = '';
fileName = 'ExcelSheet.xlsx';
takeAction(){
  this.pageActual = 1;
}

  constructor(private authService: AuthUService, private excelService: ExcelService) { }

  ngOnInit() {
    this.cargando=true;
    this.authService.getCandidatos()
    .subscribe(resp=>{
      this.candidatos=resp;
      this.cargando=false;
    });
  }

  borrarCandi(candidato:CandidatoModel, i:number){

    Swal.fire({
      title:'¿Esta seguro?',
      text:`Esta seguro que desea borrar a ${candidato.nombre}`,
      icon:'question',
      showConfirmButton:true,
      showCancelButton:true
    }).then(resp=>{
       if(resp.value){
        this.candidatos.splice(i, 1);
          this.authService.borrarCandidato(candidato.idPaseador).subscribe();
        
        
        
      
       }
    });

  
    }

    exportAsXLSX():void {
      this.excelService.exportAsExcelFile(this.candidatos, 'Candidatos en proceso');
    }

}
