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

  // updateContacts(newcontact: Contact){
  //   //find the highest Id
  //   let highestId = 0;
  //   this.contacts.forEach(contactObject => {
  //     if(contactObject.Id > highestId) {
  //       highestId = contactObject.Id;
  //     }
  //   })

  //   this.contacts.push({
  //     Id: highestId + 1,
  //     FirstName: newcontact.FirstName,
  //     LastName: newcontact.LastName,
  //     PhoneNumber: newcontact.PhoneNumber,
  //     Address: newcontact.Address
  //   })
  // }

  createContacts(newcontact: Contact){
    //find the highest Id
    let highestId = 0;
    this.contacts.forEach(contactObject => {
      if(contactObject.Id > highestId) {
        highestId = contactObject.Id;
      }
    })

    this.contacts.push({
      Id: highestId + 1,
      FirstName: newcontact.FirstName,
      LastName: newcontact.LastName,
      PhoneNumber: newcontact.PhoneNumber,
      Address: newcontact.Address
    })
  }

  updateContact(updateContact: Contact){
    /*Via l'Id du contac, on va retrouver l'index de chaque élément du tb et par cela ns allons MAJ les info 
      de ce conatct*/
      const index =  this.contacts.findIndex(contact =>contact.Id == updateContact.Id);
      this.contacts[index].FirstName = updateContact.FirstName;
      this.contacts[index].LastName = updateContact.LastName;
      this.contacts[index].PhoneNumber = updateContact.PhoneNumber;
      this.contacts[index].Address = updateContact.Address;
  }
}
