import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contact } from '../../interfaces/contact';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-update-dialog',
  // standalone: true,
  // imports: [],
  templateUrl: './update-dialog.component.html',
  styleUrl: './update-dialog.component.scss'
})
export class UpdateDialogComponent implements OnInit{

  updatecontact! : Contact;

  updateForm = new FormGroup({
    FirstName: new FormControl('',[Validators.required, Validators.maxLength(50)]),
    LastName: new FormControl('', [Validators.required, Validators.maxLength(50)] ),
    PhoneNumber: new FormControl('', [Validators.required, Validators.maxLength(20)] ),
    Address: new FormControl('',[Validators.required, Validators.maxLength(200)] ),
  });

  contactToUpdate!: Contact;

  //Injection des data provenant de la meth onUpdate() de ContactsComponent
  constructor( @Inject(MAT_DIALOG_DATA) public data: Contact,
              private ContactsService: ContactsService,
              public dialogRef: MatDialogRef<UpdateDialogComponent>){
    this.contactToUpdate = data;
  }

  ngOnInit(){
    //Permet de charger les données d'un contact déjà existant 
    this.updateForm.controls['FirstName'].setValue(this.contactToUpdate.FirstName);
    this.updateForm.controls['LastName'].setValue(this.contactToUpdate.LastName);
    this.updateForm.controls['PhoneNumber'].setValue(this.contactToUpdate.PhoneNumber);
    this.updateForm.controls['Address'].setValue(this.contactToUpdate.Address);

    console.log(this.contactToUpdate);
  }

  onSubmit(){
    this.updatecontact = {
      Id: this.contactToUpdate.Id,
      FirstName: this.updateForm.controls['FirstName'].value as string,
      LastName: this.updateForm.controls['LastName'].value as string,
      PhoneNumber: this.updateForm.controls['PhoneNumber'].value as string,
      Address: this.updateForm.controls['Address'].value as string
    }

    this.ContactsService.updateContact(this.updatecontact);

    console.log(this.ContactsService.getContacts());

    //Ferme la boite de dialogue
    this.dialogRef.close();

  }


}
