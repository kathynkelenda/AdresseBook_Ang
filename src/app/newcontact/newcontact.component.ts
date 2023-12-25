import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newcontact',
  // standalone: true,
  // imports: [],
  templateUrl: './newcontact.component.html',
  styleUrl: './newcontact.component.scss'
})
export class NewcontactComponent {

  profileForm = new FormGroup({
    FirstName: new FormControl('',[Validators.required, Validators.maxLength(50)]),
    LastName: new FormControl('', [Validators.required, Validators.maxLength(50)] ),
    PhoneNumber: new FormControl('', [Validators.required, Validators.maxLength(20)] ),
    Address: new FormControl('',[Validators.required, Validators.maxLength(200)] ),
  });

  //Injection du routeur
  constructor(private router: Router){}

  onSubmit(){

  }

  onCancel(){
    this.router.navigate(['/contacts']);
  }

}
