import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'details',component: ProductDetailsComponent},
  {path:'home',component:HomepageComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}