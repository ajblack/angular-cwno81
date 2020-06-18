import { Component, OnInit, Input, Output,EventEmitter, OnChanges } from '@angular/core';
import { ProductService } from '../product.service';
import {ProductListing } from '../store-listing-interfaces';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit, OnChanges{
  potomacProducts: ProductListing[];
  resultsShowing: ProductListing[];
  page: number = 1;
  pageSize: number = 20;
  numResults: number = 0;
  @Input() search: string='';
  @Output('buy-product') buyProduct:EventEmitter<string> = new EventEmitter<string>();

  constructor(private productService: ProductService) {
   }


  ngOnInit() {
    this.productService.getPotomacBourbon()
      .subscribe((data) => {
        this.potomacProducts = data;
        this.resultsShowing = this.potomacProducts;
        this.numResults = this.potomacProducts.length;
      },
      (err) => console.log(err),
      () => console.log("done"));
      
  }

  filterProducts(){
    this.resultsShowing = [];
    this.resultsShowing = this.potomacProducts.filter((product)=>{
      if(product.name.toLowerCase().includes(this.search.toLowerCase())){
        return true;
      }
      else{
        return false;
      }
    });
    this.numResults = this.resultsShowing.length;
  }

  goToLink(mylink){
    window.open(mylink, "_self");
  }

  ngOnChanges(){
    if(this.potomacProducts){
      this.filterProducts();
    }
  }

  buyClick(){
    console.log('buy button clicked in product container');
    this.buyProduct.emit("buy this product from product container");
  }

}