import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { NewcontactComponent } from "./newcontact/newcontact.component";

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactsComponent,
        NewcontactComponent
    ],
    imports: [
        BrowserModule,
        RouterOutlet,
        AppRoutingModule,

        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatCardModule,
        ReactiveFormsModule,
        MatInputModule
        
    ],
    providers: [],
    exports: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}