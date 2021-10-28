import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// routes
// import { XComponent } from "./x/x.component";
import { HomeComponent } from "./home/home.component";
import { BooksComponent} from "./books/books.component";
import { CvComponent } from "./cv/cv.component";
import { FarmComponent } from "./farm/farm.component";
import { TestModalComponent } from "./test-modal/test-modal.component";
// import { TopNavBarComponent } from "./top-nav-bar/top-nav-bar.component";
// import { SideNavBarComponent } from "./../side-nav-bar/side-nav-bar.component";


// change this for the routing, needs to be imported
const routes: Routes = [
	// {path: "x", component: XComponent}
	// the path is when: "http://localhost:4200/home"
	//{path: "/", component: HomeComponent},
	{path: "home", component: HomeComponent},
	{path: "books", component: BooksComponent},
	{path: "cv", component: CvComponent},
	{path: "farm", component: FarmComponent},
	{path: "modal", component: TestModalComponent},
	// define a default page, anything else => **
	{path: "**", component: HomeComponent},
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
