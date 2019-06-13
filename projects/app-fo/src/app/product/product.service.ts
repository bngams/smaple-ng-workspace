import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResourceService } from 'lib-core';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ResourceService<number, Product> {

  constructor(private http: HttpClient) {
    super(environment.apiBaseUrl, http, 'product');
  }

}
