import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  name = 'Angular';
  iscalled = false;
  currentSearch: string ='';
  @Input() buyProduct : string='';

  constructor() { }

  ngOnInit() {
  }

  updateSearchString(event){
    //this.currentSearch = event;
    this.currentSearch = event;
    this.iscalled = true;
  }

  bP(event){
    
    console.log("buying "+event+ "from app component");
  }
}