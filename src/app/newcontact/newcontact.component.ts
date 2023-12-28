import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';


@Component({
  selector: 'app-newcontact',
  // standalone: true,
  // imports: [],
  templateUrl: './newcontact.component.html',
  styleUrl: './newcontact.component.scss'
})
export class NewcontactComponent {

  newcontact!: Contact;

  contactForm = new FormGroup({
    FirstName: new FormControl('',[Validators.required, Validators.maxLength(50)]),
    LastName: new FormControl('', [Validators.required, Validators.maxLength(50)] ),
    PhoneNumber: new FormControl('', [Validators.required, Validators.maxLength(20)] ),
    Address: new FormControl('',[Validators.required, Validators.maxLength(200)] ),
  });

  //Injection du routeur
  constructor(private router: Router,
              private contactsService: ContactsService){}

  onSubmit(){
    this.newcontact = {
      Id: 0,
      FirstName: this.contactForm.controls['FirstName'].value as string,
      LastName: this.contactForm.controls['LastName'].value as string,
      PhoneNumber: this.contactForm.controls['PhoneNumber'].value as string,
      Address: this.contactForm.controls['Address'].value as string
    }

    this.contactsService.createContacts(this.newcontact);

    console.log(this.contactsService.getContacts());

    this.router.navigate(['/contacts']);
  }

  onCancel(){
    this.router.navigate(['/contacts']);
  }

}
