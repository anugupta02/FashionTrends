import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductsComponent} from './product.module/products.component';

import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from '../home/home.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    data: {
      breadcrumb: 'Products'
    }
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductsComponent,

  ]
})
export class ProductModule {
}
