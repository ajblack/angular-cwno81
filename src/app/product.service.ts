import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {ProductListing} from './store-listing-interfaces';
import { HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  potomacBourbon: Array<any> = [];


  constructor(private httpClient: HttpClient) {

   }

  getPotomacBourbon():Observable<any>{
    return this.httpClient.get<ProductListing[]>('/assets/potomac-products.json');
  }




}