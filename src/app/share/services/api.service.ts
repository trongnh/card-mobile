import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { JwtService } from './jwt.service';
import { Router } from '@angular/router';

@Injectable()
export class ApiService {
    constructor(
        private http: Http,
        private router: Router,
        private jwtService: JwtService
    ) { }

    private setHeaders(): Headers {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        if (this.jwtService.getToken()) {
            headersConfig['Authorization'] = `Bearer ${this.jwtService.getToken()}`;
        }
        return new Headers(headersConfig);
    }

    private formatErrors(error: any) {
      if (error.status === 401) {
        this.router.navigateByUrl('/auth/login');
        this.jwtService.destroyToken();
        this.jwtService.destroyRefreshToken();
        this.jwtService.destroyEmail();
      }
        return Observable.throw(error.json());
    }

    get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
        return this.http.get(`${environment.api_url}${path}`, { headers: this.setHeaders(), search: params })
            .catch((error) => this.formatErrors(error))
            .map((res: Response) => res.json());
    }

    put(path: string, body: Object = {}): Observable<any> {
        return this.http.put(
            `${environment.api_url}${path}`,
            JSON.stringify(body),
            { headers: this.setHeaders() }
        )
            .catch((error) => this.formatErrors(error))
            .map((res: Response) => res.json());
    }

    patch(path: string, body: Object = {}): Observable<any> {
      return this.http.patch(
          `${environment.api_url}${path}`,
          JSON.stringify(body),
          { headers: this.setHeaders() }
      )
          .catch((error) => this.formatErrors(error))
          .map((res: Response) => res.json());
    }

    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(
            `${environment.api_url}${path}`,
            JSON.stringify(body),
            { headers: this.setHeaders() }
        )
            .catch((error) => this.formatErrors(error))
            .map((res: Response) => res.json());
    }

    delete(path): Observable<any> {
        return this.http.delete(
            `${environment.api_url}${path}`,
            { headers: this.setHeaders() }
        )
            .catch((error) => this.formatErrors(error))
            .map((res: Response) => res.json());
    }
}
