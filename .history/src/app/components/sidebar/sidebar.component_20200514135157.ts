import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsuarioModel } from '../../models/usuario.model';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/user-profile', title: 'Perfil de Usuario',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Usuarios del Sistema',  icon:'fas fa-users text-blue', class: '' },
    { path: '/info-b-pasead', title: 'Informacion bancaria Paseador',  icon: 'ni-bullet-list-67 fas fa-walking text-red', class: '' },
    { path: '/orden-pago-usu', title: 'Orden de pago de usuario', icon:'ni-circle-08 text-pink', class: '' },
    { path: '/orden-pago-pas', title: 'Orden de pago de Paseador', icon:'ni-bullet-list-67 fas fa-walking text-red', class: '' },
    { path: '/dispersion-de-pagos', title: 'Dispercion de Pagos', icon: 'ni-key-25 fas fa-hand-holding-usd text-green', class: ''  },
    { path: '/costos-descuentos', title: 'Costos y descuentos', icon: 'ni-key-25 fas fa-hand-holding-usd text-green', class: ''  },
    { path: '/placas-vincul', title: 'Placas Vinculadas', icon: 'ni-key-25 fas fa-paw text-blue', class: ''  },
    // -------------------------------------------------------- Jorge -----------------------------------------------
    { path: '/usuarios', title: 'Usuarios',  icon: 'fas fa-users', class: '' },
    { path: '/ordenes-de-compra', title: ' Consumo de servicios',  icon: 'fas fa-signal', class: '' },
    { path: '/consulta-perros', title: 'Perros',  icon: 'fas fa-paw', class: '' },
    { path: '/paseoactivo', title: 'Paseos Activos',  icon: 'far fa-calendar-check', class: '' },
    { path: '/paseofinalizado', title: 'Paseos Finalizados',  icon: 'far fa-calendar-alt', class: '' },
    { path: '/paquetes-por-asignar', title: 'Paseos Agendados',  icon: 'fas fa-calendar-alt', class: '' },

    // ---------------------------------------------------------Gerardo ---------------------------------------------
    { path: '/candidatos-p', title: 'Candidatos en proceso',  icon: 'ni-bullet-list-67 text-red', class: '' },
    { path: '/candidatos-f', title: 'Candidatos Finalizados',  icon: 'ni-bullet-list-67 text-red', class: '' },
    { path: '/paseadores', title: 'Paseadores',  icon: 'ni-bullet-list-67 text-red', class: '' },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  usuario: UsuarioModel = new UsuarioModel();
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router, private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });


   const uid = this.route.snapshot.paramMap.get('uid');
  var localId = localStorage.getItem('uid');
  console.log('uidchida', localId);
  if (localId !== 'nuevo') {

  this.authService.getUsuarioPerfil( localId).subscribe( (resp: UsuarioModel) => {
    this.usuario = resp;
    this.usuario.uid = localId;
  });
}


this.authService.perfilUsuario(this.usuario)
  .subscribe(resp => {
    console.log('segundo', resp);
  // this.usuario.PhotoUrl = resp.PhotoURL;
  // this.usuario.email = resp.email;
  // this.usuario.nombre = resp.nombre;
  // this.usuario.apellidoPaterno = resp.apellidoPaterno;
  });
}
  }

