import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
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
