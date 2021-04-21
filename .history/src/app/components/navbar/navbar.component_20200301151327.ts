import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../../../.history/src/app/models/user_20200122174213';
import { UsuarioModel } from '../../models/usuario.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  usuario: UsuarioModel = new UsuarioModel();
  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location,  private element: ElementRef, private router: Router,
    private authService: AuthService, private route: ActivatedRoute
    ) {
    this.location = location;
  }
  // user: UserInterface = {
  //   name: '',
  //   email: '',
  //   apellidoPaterno: '',
  //   photoUrl: ''
  // };
  public providerId: String = 'null';
  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    // this.auth.isAuth().subscribe(user  => {
    //   if (user) {
    //     this.user.name = user.displayName;
    //     this.user.email = user.email;
    //     this.user.photoUrl = user.photoURL;
    //     this.providerId = user.providerData[0].providerId;
    //     console.log('USER', user);
    //   }
    // });



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
      this.usuario.photoUrl = resp.PhotoURL;
      this.usuario.email = resp.email;
      this.usuario.nombre = resp.nombre;
      this.usuario.apellidoPaterno = resp.apellidoPaterno;
      });

  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#') {
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }
  salir() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
      }
}

