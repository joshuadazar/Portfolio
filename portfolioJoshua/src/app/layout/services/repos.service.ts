import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  private API_URI: string = 'https://api.github.com/users';
  private API_Be: string = 'https://api.behance.net';

  constructor(private httpClient: HttpClient) { }
  getUsers(user: string) {
    return this.httpClient.get<any[]>(`${this.API_URI}/${user}/repos`);
  }
}
