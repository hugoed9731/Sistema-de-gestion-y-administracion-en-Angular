import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsuarioModel } from '../../models/usuario.model';
import { XLSX } from '../../../../node_modules/xlsx/xlsx';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dispersion-de-pagos',
  templateUrl: './dispersion-de-pagos.component.html',
  styleUrls: ['./dispersion-de-pagos.component.scss']
})
export class DispersionDePagosComponent implements OnInit {

  Dispersion: UsuarioModel[] = [];
  pageActual: number = 1;
  cargando = false;
  filterPost = '';
  fileName = 'ExcelSheet.xlsx';

  constructor( private authSerrvice: AuthService) { }

  ngOnInit() {
    this.cargando = true;
    this.authSerrvice.getDispersion().subscribe( resp => { this.Dispersion  =
      resp; this.cargando = false; });
  }
  exportexcel (): void { 
      //  el id de la tabla se pasa aquí * /
       const element = document.getElementById ('excel-table'); 
       const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet (element);

      //  generar libro de trabajo y agregar la hoja de trabajo 
       const wb: XLSX.WorkBook = XLSX.utils.book_new ();
       XLSX.utils.book_append_sheet (wb, ws, 'Sheet1');

        // guardar en archivo
       XLSX.writeFile (wb, this.fileName);

}
}
