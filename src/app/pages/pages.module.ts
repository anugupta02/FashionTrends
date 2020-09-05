import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../user/login/login.component';
import {RegistrationComponent} from '../user/registration/registration.component';
import {PageNotFoundComponent} from './page-not-found.component';
import { PagesComponent } from './pages.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';

const routes: Routes = [

  {
    path: 'about-us',
    component: AboutUsPageComponent,
    data: {
      breadcrumb: 'About Us',
      page: 'about-us'
    }
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
    data: {
      breadcrumb: 'Our Contacts',
      page: 'contacts'
    }
  }

];

@NgModule({
  declarations: [PageNotFoundComponent, PagesComponent, AboutUsPageComponent, ContactsPageComponent],
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class PagesModule { }
