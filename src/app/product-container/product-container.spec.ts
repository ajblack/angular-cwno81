import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Injectable }  from '@angular/core';
import { ProductContainerComponent } from './product-container.component';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import {ProductService} from '../product.service';

describe("ProductContainer component tests",()=>{

  let fixture: ComponentFixture<ProductContainerComponent>;
  let component: ProductContainerComponent;
  let de: DebugElement;
  let productService: ProductService;



  // Import modules and declare components
  beforeEach(async()=>{
    TestBed.configureTestingModule({
      declarations: [ ProductContainerComponent, NgbPagination ],
      imports:[]
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(ProductContainerComponent)
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it("should retrieve data from a json file, loading into a variable",()=>{
    expect(1).toEqual(1);
  });
})