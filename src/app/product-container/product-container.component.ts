import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductService } from '../product.service';
import {ProductListing } from '../store-listing-interfaces';

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
    console.log("this search is: "+this.search);
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

}