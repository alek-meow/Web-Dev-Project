import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthToken} from "../models";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private client: HttpClient) { }

  BASE_URL = "http://127.0.0.1:8000/api/"

  login(username: string, password: string): Observable<AuthToken>{
    return this.client.post<AuthToken>(
      `${this.BASE_URL}login/`,
      {username, password}
    )
  }
}
