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
import { FarmComponent } from './farm/farm.component';
import { SiloComponent } from './farm/silo/silo.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { CvFilterComponent } from './cv-filter/cv-filter.component';
import { TestModalComponent } from './test-modal/test-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
// import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';

// import { MatToolbarModule } from '@angular/material/toolbar'; //Angular Material Toolbar Module
// import { MatButtonModule } from '@angular/material/button';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    CvComponent,
    FarmComponent,
    SiloComponent,
    CvCardComponent,
    CvFilterComponent,
    TestModalComponent,
    // SideNavBarComponent,
    // TopNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule, // over here!
	CommonModule, // over here!
	HttpClientModule, NgbModule, // over here!
	// BrowserAnimationsModule,
    // MatToolbarModule,
    // MatButtonModule
	Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
