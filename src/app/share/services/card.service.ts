import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
// import { User } from '../models';
export class Category {
  type: string;
  info: string;
  order: string;
  id: string;
}

@Injectable()
export class CategoryService {

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  // public isShowNoti: boolean = false;
  constructor (
    private apiService: ApiService,
    private http: Http,
    private jwtService: JwtService
  ) {}

  add(category: Category): Observable<Category> {
    return this.apiService
    .post('/post-category', category)
    .map(data => {
      // if (data.message === 'Success') {
      //   this.isShowNoti = true;
      // }
      return data;
    });
  }

  // Update the user on the server (email, pass, etc)
  update(category: Category): Observable<Category> {
    return this.apiService
    .patch('/post-category/' + category.id, category)
    .map(data => {
      // Update the currentUser observable
      console.log(data);
      return data;
    });
  }

  delete(categoryId: string): Observable<Category> {
    return this.apiService
    .delete('/post-category/' + categoryId)
    .map(data => {
      // Update the currentUser observable
      return data;
    });
  }

  getAll(productId, quantity) {
    let param = '';

    // if (filter) {
    //   param = Object.entries(filter).map(([key, val]) => `${key}=${val}`).join('&');
    //   console.log('filter', param);
    // }

    if (quantity) {
      param += '?query=[{"productId": '+ JSON.stringify(productId) + ', "quantity": '+ JSON.stringify(quantity) + '}]';
    }
    return this.apiService
      .get('/payment/get-card-partner/' + param)
      .map(data => {
        return data;
      });
  }

  get(Param: any) {
    return this.apiService
    .get('/payment/get-card-partner/?query=[{"productId": 1,%20"quantity": 1}]')
    .map(data => {
      return data;
    });
  }
}
