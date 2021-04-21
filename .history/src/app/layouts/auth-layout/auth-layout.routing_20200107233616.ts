import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { ResetpassComponent } from '../../pages/resetpass/resetpass.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'resetpass',      component: ResetpassComponent},
];
