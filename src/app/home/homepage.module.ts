import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './home.component';
import {FeaturedProductsComponent} from './featured-products/featured-products.component';
import { CategoriesGridComponent } from './categories-grid/categories-grid.component';
import { FlashDealsComponent } from './flash-deals/flash-deals.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import {MainSliderComponent} from './main-slider/main-slider.component';


@NgModule({
  declarations: [
    HomeComponent,
    FeaturedProductsComponent,
    MainSliderComponent,
    CategoriesGridComponent,
    FlashDealsComponent,
    TopCategoriesComponent,
  ],
  imports: [SharedModule,
    CommonModule
  ],
  exports: [
    CommonModule,
    MainSliderComponent
  ]
})
export class HomepageModule {
}
