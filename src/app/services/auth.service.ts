import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../auth/types/registerRequest.interface';
import { map, Observable, of } from 'rxjs';
import { CurrentUserInterface } from '../shared/types/currentUser.interface';
import { AuthResponseInterface } from '../auth/types/authResponse.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(payload: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users`; 
    const response = this.http.post<AuthResponseInterface>(url, payload);
    return response.pipe(map((res) => res.user));
  }
}
