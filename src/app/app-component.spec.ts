import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement }  from '@angular/core';
import { ProductSearchbarComponent } from './product-searchbar/product-searchbar.component';
import { FormsModule } from '@angular/forms';

//

describe('Integration::ProductSearchbarComponent', () => {

  beforeEach(async() =>{
    TestBed.configureTestingModule({
      declarations: [ ProductSearchbarComponent ],
      imports:[FormsModule]
    }).compileComponents();
    
  });

  it('should bind the input value to searchText', async()=>{
    const fixture = TestBed.createComponent(ProductSearchbarComponent);
    const app = fixture.componentInstance;
    const input_element = fixture.nativeElement.querySelector('input');
    
    // Forces a change detection cycle in Angular
    fixture.detectChanges();
    input_element.value = "Test Search";

    // Dispatches a DOM event so that Angular acknowledges the input value change
    input_element.dispatchEvent(new Event('input'))

    expect(app.searchText).toBe("Test Search")
  });

  it('should emit an event when searchText is changed', async()=>{
    const fixture = TestBed.createComponent(ProductSearchbarComponent);
    const app = fixture.componentInstance;
    const input_element = fixture.nativeElement.querySelector('input');
    // Forces a change detection cycle in Angular
    fixture.detectChanges();
    spyOn(app.change, 'emit')
    input_element.value = "Test Search";
    input_element.dispatchEvent(new Event('input'))
    expect(app.change.emit).toHaveBeenCalled()
    expect(app.change.emit).toHaveBeenCalledWith("Test Search")
  });
});
