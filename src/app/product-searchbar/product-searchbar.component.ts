import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-searchbar',
  templateUrl: './product-searchbar.component.html',
  styleUrls: ['./product-searchbar.component.css']
})
export class ProductSearchbarComponent implements OnInit {
  searchText: string;
  @Output('update') change: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked(){
    //console.log("search text is: "+this.searchText);
  }

  onSearchChange(){
    this.change.emit(this.searchText);
  }

}