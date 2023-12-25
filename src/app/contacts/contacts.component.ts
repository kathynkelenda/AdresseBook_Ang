import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-contacts',
  // standalone: true,
  // imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {

  contactsDataArray: Contact[] = [];
  columnsToDisplay = ['FirstName','LastName','PhoneNumber','Address','Update','Delete'];

  //Injection du service dans le constructeur
  constructor(private contacstService: ContactsService ){}

  ngOnInit(){
    this.contactsDataArray = this.contacstService.getContacts();
    console.log(this.contacstService.getContacts());
  }


}
