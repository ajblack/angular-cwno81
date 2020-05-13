import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProductContainerComponent } from './product-container/product-container.component';
import { ProductService } from './product.service';
import { ProductSearchbarComponent } from './product-searchbar/product-searchbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, NgbModule],
  declarations: [ AppComponent, ProductContainerComponent, ProductSearchbarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
