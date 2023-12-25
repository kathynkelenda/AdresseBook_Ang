import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[] = [
    {Id:1, FirstName: 'John', LastName: 'Johnson', PhoneNumber:'444-444-4444', Address: '10 Thiers avenue, Minneapolis, MN 55001'},
    {Id:2, FirstName: 'Jack', LastName: 'Jacquie', PhoneNumber:'444-444-4444', Address: '10 Thiers avenue, Minneapolis, MN 55001'},
    {Id:3, FirstName: 'Kathy', LastName: 'Nkelenda', PhoneNumber:'444-444-4444', Address: '10 Thiers avenue, Minneapolis, MN 55001'}
  ]
  
  constructor() { }

  getContacts(){
    return this.contacts;
  }

}
