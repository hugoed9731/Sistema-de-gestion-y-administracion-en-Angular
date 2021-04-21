import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { CandidatoModel } from '../../models/candidato.model';
import Swal from 'sweetalert2';
import { PaseadorModel } from '../../models/paseador.model';
import { AuthUService } from '../../services/auth-u.service';
import { ExcelService } from '../../services/excel.service';
import { XLSX } from '../../../../node_modules/xlsx/xlsx';

@Component({
  selector: 'app-paseadores',
  templateUrl: './paseadores.component.html',
  styleUrls: ['./paseadores.component.scss']
})
export class PaseadoresComponent implements OnInit {
  paseadores:PaseadorModel[]=[];
  pageActual: number = 1;
  cargando=true;
  filterR  = '';
  fileName = 'ExcelSheet.xlsx';
takeAction(){
  this.pageActual = 1;
}

  constructor(private paseadoresService: AuthUService, private excelService: ExcelService) { }

  ngOnInit() {

    this.cargando=true;
    this.paseadoresService.getPaseadores()
    .subscribe(resp=>{
      this.paseadores=resp;
      this.cargando=false;
    });
  }
  borrarPase(paseador:PaseadorModel, i:number){

    Swal.fire({
      title:'¿Esta seguro?',
      text:`Esta seguro que desea borrar a ${paseador.nombre}`,
      icon:'question',
      showConfirmButton:true,
      showCancelButton:true
    }).then(resp=>{
       if(resp.value){
        this.paseadores.splice(i, 1);
        this.paseadoresService.borrarPase(paseador.idPaseador).subscribe();
       }
    });

  
    }

    
    exportAsXLSX():void {
      this.excelService.exportAsExcelFile(this.paseadores, 'Paseadores');
    }

}

