import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User, Users } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private httpClient: HttpClient
  ) {}

  public getUsers(name: string): Observable<User[]> {
    return this.httpClient
      .get<Users>(
        `${this.baseUrl}/search/users?q=${name}&sort=stars&per_page=20`
      )
      .pipe(map((response: Users) => response.items));
  }

  public getUser(login: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/users/${login}`);
  }
}
