import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-searchbar',
  templateUrl: './product-searchbar.component.html',
  styleUrls: ['./product-searchbar.component.css']
})
export class ProductSearchbarComponent implements OnInit, OnChanges {
  searchText: string='';
  @Output('update') change: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log('on init called');
  }

  ngDoCheck(){
    console.log('do check called');
  }

// Called whenever and data-bound input property changes
  ngOnChanges(){
    console.log('on changes called');
    this.change.emit(this.searchText);
  }

  ngAfterContentChecked(){
    //console.log("search text is: "+this.searchText);
  }

  onSearchChange(){
    this.change.emit(this.searchText);
  }

  onSearchChangeTest(val){
    console.log("value is: "+val);
    this.searchText = val;
    this.change.emit(val);
  }


}