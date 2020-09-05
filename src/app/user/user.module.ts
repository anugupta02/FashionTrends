import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';

import {SharedModule} from '../shared/shared.module';
import {RegistrationComponent} from './registration/registration.component';
import {HomeComponent} from '../home/home.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      breadcrumb: 'Log In'
    }
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    data: {
      breadcrumb: 'Sign Up'
    }
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent
  ]
})
export class UserModule {
}
