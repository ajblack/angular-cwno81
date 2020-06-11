import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component, NO_ERRORS_SCHEMA,Input, Output, EventEmitter }  from '@angular/core';
import {MockComponent, ngMocks} from 'ng-mocks';
import { AppComponent } from './app.component';
import { ProductSearchbarComponent } from './product-searchbar/product-searchbar.component';
import { ProductContainerComponent } from './product-container/product-container.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector:'app-product-searchbar',
  template:'',
  providers:[
    {
      provide:ProductSearchbarComponent,
      useClass: ProductSearchbarStub
    }
  ]
})
export class ProductSearchbarStub{
  @Output('update') change: EventEmitter<string> = new EventEmitter<string>();
}

describe("App Component Tests",() =>{
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let de: DebugElement;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [AppComponent, MockComponent(ProductContainerComponent),ProductSearchbarComponent],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it("should run a test",()=>{
    expect("here").toEqual("here")
  });

  it("should update base search text when searchbar updates",()=>{
    fixture.detectChanges();
    const searchBar = de.query(By.css('input')).nativeElement;
    de.query(By.css('input')).componentInstance.change.emit("Test String");

    fixture.detectChanges();
    expect(component.currentSearch).toEqual("Test String");
  });



});