import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../../pages/register/register.component';
import { EditarComponent } from '../../pages/tables/editar/editar.component';
import { InfoBPaseadComponent } from '../../pages/info-b-pasead/info-b-pasead.component';
import { OrdenPagoUsuComponent } from '../../pages/orden-pago-usu/orden-pago-usu.component';
import { OrdenPagoPasComponent } from '../../pages/orden-pago-pas/orden-pago-pas.component';
import { DetallesPasComponent } from '../../pages/orden-pago-pas/detalles-pas/detalles-pas.component';
import { DispersionDePagosComponent } from '../../pages/dispersion-de-pagos/dispersion-de-pagos.component';
import { CostosDescuentosComponent } from '../../pages/costos-descuentos/costos-descuentos.component';
import { EditcostComponent } from '../../pages/costos-descuentos/editcost/editcost.component';
import { DetPaseadComponent } from '../../pages/info-b-pasead/det-pasead/det-pasead.component';
import { DetallesUsuComponent } from '../../pages/orden-pago-usu/detalles-usu/detalles-usu.component';
import { PlacasVinculComponent } from '../../pages/placas-vincul/placas-vincul.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { DetalleslecComponent } from '../../pages/placas-vincul/detalleslec/detalleslec.component';
import { FilterRPipe } from '../../pipes/filter-r.pipe';
import { FilterNombrePipe } from '../../pipes/filter-nombre.pipe';
import { FilterEstadoPipe } from '../../pipes/filter-estado.pipe';
import { FilterBancoPipe } from '../../pipes/filter-banco.pipe';
import { FilterClaveibPipe } from '../../pipes/filter-ordenPas.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
// ---------------------------------------------- Jorge -------------------------------------
import { UsuariosComponent } from '../../pages/usuarios/usuarios.component';
import { FilteruidPipe } from '../../pipes/filteruid.pipe';
import { DetallesUsuarioComponent } from '../../pages/usuarios/detalles-usuario/detalles-usuario.component';
import { ConsumoDeServiciosComponent } from '../../pages/usuarios/consumo-de-servicios/consumo-de-servicios.component';
import { FilterjPipe } from '../../pipes/filterj.pipe';
import { PerrosDeUsuarioComponent } from '../../pages/usuarios/perros-de-usuario/perros-de-usuario.component';
import { OrdenesDeCompraComponent } from '../../pages/usuarios/ordenes-de-compra/ordenes-de-compra.component';
import { FilteruidordPipe } from '../../pipes/filteruidord.pipe';
import { DetalleComponent } from '../../pages/usuarios/ordenes-de-compra/detalle/detalle.component';
import { ConsultaPerrosComponent } from '../../pages/usuarios/consulta-perros/consulta-perros.component';
import { FilterperrosPipe } from '../../pipes/filterperros.pipe';
import { PaseoactivoComponent } from '../../pages/paseos/paseoactivo/paseoactivo.component';
import { ActivodetalleComponent } from '../../pages/paseos/paseoactivo/activodetalle/activodetalle.component';
import { FilterpaseoactivoPipe } from '../../pipes/filterpaseoactivo.pipe';
import { PaseofinalizadoComponent } from '../../pages/paseos/paseofinalizado/paseofinalizado.component';
import { FilterfinalizadoPipe } from '../../pipes/filterfinalizado.pipe';
import { DetallepaseofinalizadoComponent } from '../../pages/paseos/paseofinalizado/detallepaseofinalizado/detallepaseofinalizado.component';
import { PaquetesPorAsignarComponent } from '../../pages/paseos/paquetes-por-asignar/paquetes-por-asignar.component';
import { DetallepaqueteComponent } from '../../pages/paseos/paquetes-por-asignar/detallepaquete/detallepaquete.component';
import { FilternombrePipe } from '../../pipes/filternombre.pipe';
// -----------------------------------------------Gerardo ------------------------------------------------------------------------------
import { CandidatosPComponent } from '../../pages/candidatos-p/candidatos-p.component';
import { FiltergnombrePipe } from '../../pipes/filtergnombre.pipe';
import { FiltergRPipe } from '../../pipes/filterg-r.pipe';
import { FilterEmailPipe } from '../../pipes/filter-email.pipe';
import { FilterFechaPipe } from '../../pipes/filter-fecha.pipe';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    NgxPaginationModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    EditarComponent,
    InfoBPaseadComponent,
    OrdenPagoUsuComponent,
    OrdenPagoPasComponent,
    DetallesPasComponent,
    DispersionDePagosComponent,
    CostosDescuentosComponent,
    RegisterComponent,
    DetPaseadComponent,
    DetallesUsuComponent,
    PlacasVinculComponent,
    DetalleslecComponent,
    FilterPipe,
    FilterRPipe,
    FilterNombrePipe,
    FilterEstadoPipe,
    FilterBancoPipe,
    FilterClaveibPipe,
    EditcostComponent,
    // -------------------------------------------- Jorge --------------------------------------------
    UsuariosComponent,
    FilteruidPipe,
    DetallesUsuarioComponent,
    ConsumoDeServiciosComponent,
    FilterjPipe,
    PerrosDeUsuarioComponent,
    OrdenesDeCompraComponent,
    FilteruidordPipe,
    DetalleComponent,
    ConsultaPerrosComponent,
    FilterperrosPipe,
    PaseoactivoComponent,
    FilterpaseoactivoPipe,
    ActivodetalleComponent,
    PaseofinalizadoComponent,
    FilterfinalizadoPipe,
    DetallepaseofinalizadoComponent,
    PaquetesPorAsignarComponent,
    DetallepaqueteComponent,
    FilternombrePipe,
    // ------------------------------------------------ Gerardo -------------------------------------------
    CandidatosPComponent,
    FiltergnombrePipe,
    FiltergRPipe,
    FilterEmailPipe,
    FilterFechaPipe,
    

  ]
})

export class AdminLayoutModule {}
