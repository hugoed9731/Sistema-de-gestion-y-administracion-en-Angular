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
    OrdenesDeCompraComponent

    
  ]
})

export class AdminLayoutModule {}
