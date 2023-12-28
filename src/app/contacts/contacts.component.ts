import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../dialogs/update-dialog/update-dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-contacts',
  // standalone: true,
  // imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {

  contactsDataArray: Contact[] = [];

  //Cration d'une instance de datasource class(1)
  dataSource = new MatTableDataSource<Contact>;

  columnsToDisplay = ['FirstName','LastName','PhoneNumber','Address','Update','Delete'];

  //Injection du service dans le constructeur
  constructor(private contacstService: ContactsService,
              private dialog: MatDialog ){}

  ngOnInit(){
    this.contactsDataArray = this.contacstService.getContacts();

    //Cration d'une instance de datasource class(2)
    this.dataSource = new MatTableDataSource<Contact>(this.contactsDataArray);

    console.log(this.contacstService.getContacts());
  }

  //Ouvre ce "sous-composant", la boite de dialogue ici.
  onUpdate(contact: Contact){
    let dialogRef = this.dialog.open(UpdateDialogComponent, {
      height: '500px',
      width: '500px',
      data: contact,
    });

     //Rafraichie la liste des contacts après fermeture de la boite de dialogue
     dialogRef.afterClosed().subscribe(result => {
      this.updateDataSource(this.contactsDataArray);
    });
    
  }

  onDelete(contact: Contact){
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '500px',
      width: '500px',
      data: contact,
    });

    //Rafraichie la liste des contacts après fermeture de la boite de dialogue
    dialogRef.afterClosed().subscribe(result => {
      this.updateDataSource(this.contactsDataArray);
    });
  
  }

  //Rafraichie la liste des contacts
  updateDataSource(dataArray: Contact[]){
    this.dataSource.connect().next(dataArray);
  }

}
