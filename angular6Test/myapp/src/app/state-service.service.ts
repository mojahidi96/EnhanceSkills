import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {

  constructor(private httpClient: HttpClient) { }

  getStates() {
    return this.httpClient.get(`http://localhost:3000/users/states`);
  }
}
