import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";

import { PersonService } from './person/person.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FindpersonComponent } from './person/findperson/findperson.component';
import { CreatepersonComponent } from './person/createperson/createperson.component';
import { PersonlistComponent } from './person/personlist/personlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FindpersonComponent,
    CreatepersonComponent,
    PersonlistComponent
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
