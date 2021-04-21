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
  // name = '';
  data: any = [{
    uid: 'usuario.uid',
    order_id: '',
    num_perros: '',
    categoria: '',
    amount: ''
  // {
  //   eid: 'e102',
  //   ename: 'ram',
  //   esal: 2000
  // },
  // {
  //   eid: 'e103',
  //   ename: 'rajesh',
  //   esal: 3000
  }];

  Dispersion: UsuarioModel[] = [];
  Dpagos: UsuarioModel[] = [];
  pageActual: number = 1;
  cargando = false;
  filterPost = '';
  fileName = 'ExcelSheet.xlsx';

  constructor( private authService: AuthUService, private excelService: ExcelService) { }

  ngOnInit() {
    this.cargando = true;
    this.authService.getDispersion().subscribe( resp => { this.Dispersion  =
      resp; this.cargando = false; });
  }
  // exportexcel (): void { 
      //  el id de la tabla se pasa aquí * /
      //  let element = document.getElementById ('excel-table'); 
      //  const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet (element);

      //  generar libro de trabajo y agregar la hoja de trabajo 
      //  const wb: XLSX.WorkBook = XLSX.utils.book_new ();
      //  XLSX.utils.book_append_sheet (wb, ws, 'Sheet1');

        // guardar en archivo
      //  XLSX.writeFile (wb, this.fileName);
// }

exportAsXLSX():void {
  this.excelService.exportAsExcelFile(this.data, 'Dispersion_De_Pagos');
}
}
