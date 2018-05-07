import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

  getEmail(): String {
    return window.localStorage['jwtEmail'];
  }

  saveEmail(email: String) {
    window.localStorage['jwtEmail'] = email;
  }

  destroyEmail() {
    window.localStorage.removeItem('jwtEmail');
  }

  getRefreshToken(): String {
    return window.localStorage['jwtRefreshToken'];
  }

  saveRefreshToken(token: String) {
    window.localStorage['jwtRefreshToken'] = token;
  }

  destroyRefreshToken() {
    window.localStorage.removeItem('jwtRefreshToken');
  }
}
