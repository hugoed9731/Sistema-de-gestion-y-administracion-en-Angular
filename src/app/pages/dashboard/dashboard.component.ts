import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { AuthService } from '../../services/auth.service';
import { UsuarioModel } from '../../models/usuario.model';
import { Router, ActivatedRoute } from '@angular/router';
// core components


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  usuario: UsuarioModel = new UsuarioModel();
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router,private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {

    
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