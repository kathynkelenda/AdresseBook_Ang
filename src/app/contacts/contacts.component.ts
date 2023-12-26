import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../dialogs/update-dialog/update-dialog.component';

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
  constructor(private contacstService: ContactsService,
              private dialog: MatDialog ){}

  ngOnInit(){
    this.contactsDataArray = this.contacstService.getContacts();
    console.log(this.contacstService.getContacts());
  }

  //Ouvre ce "sous-composant"
  onUpdate(contact: Contact){
    let dialogRef = this.dialog.open(UpdateDialogComponent, {
      height: '500px',
      width: '500px',
      data: contact,
    });
  }

}
