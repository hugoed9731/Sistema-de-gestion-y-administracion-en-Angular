import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { ResetpassComponent } from '../../pages/resetpass/resetpass.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'resetpass',      component: ResetpassComponent},
    { path: 'user-profile/:uid',   component: UserProfileComponent},
];
