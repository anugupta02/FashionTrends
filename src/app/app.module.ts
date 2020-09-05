import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {UserModule} from './user/user.module';
import {HttpClientModule} from '@angular/common/http';
import {BreadcrumbComponent} from './shared/breadcrumb/breadcrumb.component';
import {PagesModule} from './pages/pages.module';
import {SharedModule} from './shared/shared.module';
import {FooterComponent} from './shared/footer/footer.component';
import {HeaderComponent} from './shared/header/header.component';
import {HomepageModule} from './home/homepage.module';
import {ProductModule} from './products/product.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomepageModule,
    SharedModule,
    UserModule,
    PagesModule,
    ProductModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
