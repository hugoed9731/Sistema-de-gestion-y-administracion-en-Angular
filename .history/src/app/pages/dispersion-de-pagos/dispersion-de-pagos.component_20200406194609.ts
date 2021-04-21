import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
import { UsuarioModel } from '../../models/usuario.model';
import { XLSX } from '../../../../node_modules/xlsx/xlsx';
import Swal from 'sweetalert2';
import { AuthUService } from '../../services/auth-u.service';
import { ExcelService } from '../../services/excel.service';

@Component({
  selector: 'app-dispersion-de-pagos',
  templateUrl: './dispersion-de-pagos.component.html',
  styleUrls: ['./dispersion-de-pagos.component.scss']
})
export class DispersionDePagosComponent implements OnInit {

  Dispersion: UsuarioModel[] = [];
  Dpagos: UsuarioModel[] = [];
  pageActual: number = 1;
  cargando = false;
  filterClaveib= '';
  takeAction() {
    this.pageActual = 1;
  }
  fileName = 'ExcelSheet.xlsx';

  constructor( private authService: AuthUService, private excelService: ExcelService) { }

  ngOnInit() {
    this.cargando = true;
    this.authService.getDispersion().subscribe( resp => { this.Dispersion  =
      resp; this.cargando = false; });
  }

exportAsXLSX():void {
  this.excelService.exportAsExcelFile(this.Dispersion, 'Dispersion_De_Pagos');
}
}
