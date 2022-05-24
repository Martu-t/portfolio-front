import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Login } from 'src/modelos/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiServerUrl=environment.apiBaseUrl;

  
  constructor(private http: HttpClient) { }

  public login(credentials:Login) : Observable<Boolean> {
    return this.http.post<Boolean>(`${this.apiServerUrl}/login`, credentials).pipe(
      tap((response: Boolean) => {
        if (response)
          sessionStorage.setItem("user", "admin");
      })
    );
  }

  public logout() {
    sessionStorage.removeItem("user");
  }

  public isUserLogged():boolean {
    return sessionStorage.getItem("user") !== null;
  }
}
