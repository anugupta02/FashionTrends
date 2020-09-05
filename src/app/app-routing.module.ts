import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './pages/page-not-found.component';
import { AuthGuard } from './user/auth.guard';
// import { SelectiveStrategy } from './selective-strategy.service';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full',
      data: {
        breadcrumb: 'Home'
      }
    },
    {
       path: 'products',
       canActivate: [AuthGuard],
       data: { preload: false },
       loadChildren: () =>
         import('./products/product.module').then(m => m.ProductModule)
     },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    {
      path: 'pages',
      component: PageNotFoundComponent,
      data: {
        breadcrumb: 'Pages'
      }
    },
    {
      path: '**', component: PageNotFoundComponent,
      data: {
        breadcrumb: '404 Not Found'
      }
    }
  ]
  //, {
  //   enableTracing:true, preloadingStrategy: SelectiveStrategy
  // };

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
