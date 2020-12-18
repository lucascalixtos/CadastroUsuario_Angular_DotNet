import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { EditUser } from '../models/edituser.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  private url : string = 'https://localhost:44339/api/usuarios'

  constructor(private httpClient: HttpClient) { }

  public RegisterUser(user: User):Observable<any>{
    return this.httpClient.post(`${this.url}`,user);
  }

  public ListUsers():Observable<any>{
    return this.httpClient.get(this.url);
  }

  public DeleteUser(id: number):Observable<any>{
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  public GetUser(id: number):Observable<any>{
    return this.httpClient.get(`${this.url}/${id}`);
  }

  public EditUser(user: EditUser):Observable<any>{

    return this.httpClient.put(`${this.url}/${user.Id}`,user);
  }
}
