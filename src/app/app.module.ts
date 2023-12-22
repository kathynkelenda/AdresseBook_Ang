import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        BrowserModule,
        RouterOutlet,
        AppRoutingModule,
        MatButtonModule
    ],
    declarations: [
        AppComponent
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