import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// routes
// import { XComponent } from "./x/x.component";
import { HomeComponent } from "./home/home.component";
import { BooksComponent} from "./books/books.component";
import { CvComponent } from "./cv/cv.component";

// change this for the routing, needs to be imported
const routes: Routes = [
	// {path: "x", component: XComponent}
	// the path is when: "http://localhost:4200/home"
	//{path: "/", component: HomeComponent},
	{path: "home", component: HomeComponent},
	{path: "books", component: BooksComponent},
	{path: "cv", component: CvComponent},
	// define a default page, anything else => **
	{path: "**", component: HomeComponent},
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
