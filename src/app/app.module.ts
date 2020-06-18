import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProductContainerComponent } from './product-container/product-container.component';
import { ProductService } from './product.service';
import { ProductSearchbarComponent } from './product-searchbar/product-searchbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import {AppRoutingModule} from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, NgbModule,AppRoutingModule],
  declarations: [ AppComponent, ProductContainerComponent, ProductSearchbarComponent, ProductDetailsComponent, HomepageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
