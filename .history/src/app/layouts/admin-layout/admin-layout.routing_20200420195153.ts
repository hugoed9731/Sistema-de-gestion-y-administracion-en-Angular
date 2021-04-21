import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AuthGuard } from '../../guards/auth.guard';
import { EditarComponent } from '../../pages/tables/editar/editar.component';
import { InfoBPaseadComponent } from '../../pages/info-b-pasead/info-b-pasead.component';
import { OrdenPagoUsuComponent } from '../../pages/orden-pago-usu/orden-pago-usu.component';
import { OrdenPagoPasComponent } from '../../pages/orden-pago-pas/orden-pago-pas.component';
import { DispersionDePagosComponent } from '../../pages/dispersion-de-pagos/dispersion-de-pagos.component';
import { CostosDescuentosComponent } from '../../pages/costos-descuentos/costos-descuentos.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { DetPaseadComponent } from '../../pages/info-b-pasead/det-pasead/det-pasead.component';
import { PlacasVinculComponent } from '../../pages/placas-vincul/placas-vincul.component';
import { DetallesPasComponent } from '../../pages/orden-pago-pas/detalles-pas/detalles-pas.component';
import { EditcostComponent } from '../../pages/costos-descuentos/editcost/editcost.component';
import { DetallesUsuComponent } from '../../pages/orden-pago-usu/detalles-usu/detalles-usu.component';
import { DetalleslecComponent } from 'src/app/pages/placas-vincul/detalleslec/detalleslec.component';
import { UsuariosComponent } from '../../pages/usuarios/usuarios.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'user-profile',   component: UserProfileComponent, canActivate: [AuthGuard] },
    { path: 'register',       component: RegisterComponent, canActivate: [AuthGuard] },
    { path: 'tables',         component: TablesComponent, canActivate: [AuthGuard] },
    { path: 'editar/:uid',    component: EditarComponent , canActivate: [AuthGuard]},
    { path: 'info-b-pasead',  component: InfoBPaseadComponent , canActivate: [AuthGuard]},
    { path: 'orden-pago-usu', component: OrdenPagoUsuComponent, canActivate: [AuthGuard]},
    { path: 'detalles-usu/:id/:order_id', component: DetallesUsuComponent, canActivate: [AuthGuard]},
    { path: 'orden-pago-pas', component: OrdenPagoPasComponent, canActivate: [AuthGuard]},
    { path: 'detalles-pas/:id/:order_id', component: DetallesPasComponent, canActivate: [AuthGuard]},
    { path: 'dispersion-de-pagos', component: DispersionDePagosComponent, canActivate: [AuthGuard]},
    { path: 'det-pasead/:uid', component: DetPaseadComponent, canActivate: [AuthGuard]},
    { path: 'costos-descuentos', component: CostosDescuentosComponent, canActivate: [AuthGuard]},
    { path: 'editcost/:uid', component: EditcostComponent, canActivate: [AuthGuard]},
    { path: 'placas-vincul', component: PlacasVinculComponent, canActivate: [AuthGuard]},
    { path: 'detalleslec/:uid', component: DetalleslecComponent, canActivate: [AuthGuard]},
    // ----------------------------------------- Jorge -------------------------------------------------------
    { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard]},
];
