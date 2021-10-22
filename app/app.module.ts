import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
// then, add these 2 imported thingy into the @NgModule import part

// for interating with backend stuff
import { HttpClientModule } from "@angular/common/http";
// then, import into the @NgModule import part
// this is then connected to the backend, using REST

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { CvComponent } from './cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule, // over here!
	CommonModule, // over here!
	HttpClientModule, // over here! 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
