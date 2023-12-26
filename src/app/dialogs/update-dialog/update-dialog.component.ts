import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../../interfaces/contact';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-dialog',
  // standalone: true,
  // imports: [],
  templateUrl: './update-dialog.component.html',
  styleUrl: './update-dialog.component.scss'
})
export class UpdateDialogComponent implements OnInit{

  updateForm = new FormGroup({
    FirstName: new FormControl('',[Validators.required, Validators.maxLength(50)]),
    LastName: new FormControl('', [Validators.required, Validators.maxLength(50)] ),
    PhoneNumber: new FormControl('', [Validators.required, Validators.maxLength(20)] ),
    Address: new FormControl('',[Validators.required, Validators.maxLength(200)] ),
  });

  contactToUpdate!: Contact;

  constructor( @Inject(MAT_DIALOG_DATA) public data: Contact){
    this.contactToUpdate = data;
  }

  ngOnInit(){
    console.log(this.contactToUpdate)
    
  }

  onCancel(){

  }

  onSubmit(){

  }


}
