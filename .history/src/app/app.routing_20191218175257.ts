import { NgModule } from '@angular/core';
// import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

// import { AuthGuard } from '../../src/app/guards/auth.guard';
// import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  {path: '', component: UserProfileComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'user-profile'},
  { path: '', redirectTo: 'login', pathMatch: 'full', },
  { path: '', component: AdminLayoutComponent,  children: [
  { path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  }, {
    path: '', component: AuthLayoutComponent,  children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  }, {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    // CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
