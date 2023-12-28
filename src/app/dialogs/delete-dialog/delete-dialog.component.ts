import { Component, Inject, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-delete-dialog',
  // standalone: true,
  // imports: [],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent implements OnInit {
  contactToDelete!: Contact;

  deleteForm = new FormGroup({
    FirstName: new FormControl({value:'',disabled:true}),
    LastName: new FormControl({value:'',disabled:true}),
    PhoneNumber: new FormControl({value:'',disabled:true}),
    Address: new FormControl({value:'',disabled:true})
  });

  idToDelete!: number;

  constructor( public dialogRef: MatDialogRef<DeleteDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Contact,
               private ContactsService: ContactsService){
    this.contactToDelete = data;
  }

  ngOnInit(){
    //Permet de charger les données d'un contact déjà existant 
    this.deleteForm.controls['FirstName'].setValue(this.contactToDelete.FirstName);
    this.deleteForm.controls['LastName'].setValue(this.contactToDelete.LastName);
    this.deleteForm.controls['PhoneNumber'].setValue(this.contactToDelete.PhoneNumber);
    this.deleteForm.controls['Address'].setValue(this.contactToDelete.Address);

    // console.log(this.contactToDelete);
  }

  onSubmit(){

    let contactId = this.contactToDelete.Id;

    this.ContactsService.deleteContact(contactId); 

    console.log(this.ContactsService.getContacts());

    //Ferme la boite de dialogue
    this.dialogRef.close();

    //console.log(this.ContactsService.getContacts());
  }


}
