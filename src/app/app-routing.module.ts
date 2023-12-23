import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewcontactComponent } from './newcontact/newcontact.component';

const routes: Routes = [
  //{path:'/', pathMatch:'full', redirectTo:''},
  {path:'', component: HomeComponent},
  {path:'contacts', component: ContactsComponent},
  {path:'newcontact', component: NewcontactComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    RouterOutlet
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
