import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContact } from '../models/contactModel';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  readonly contactUrl = environment.baseURL;

  constructor(private http: HttpClient) { }

  getContact(): Observable<IContact[]> {
    return this.http.get<IContact[]>(this.contactUrl);
  }

  saveContact(contact: IContact) {
    return this.http.post(this.contactUrl, contact);
  }

  updatecontact(contact: IContact) {
    return this.http.put(this.contactUrl + `/${contact._id}`, contact);
  }

  deleteContact(id: string) {
    return this.http.delete(this.contactUrl + `/${id}`);
  }

  // getContactSearch(name: string, surname: string){
  //  return this.http.get(this.contactUrl + `/${name}` + `/${surname}`);
  // }
}

