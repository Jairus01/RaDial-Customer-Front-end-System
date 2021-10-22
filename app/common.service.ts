import { Injectable } from '@angular/core';
// for backend stuff
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // get ready the url for getting posting etc request method
  // this is the server's ip address, not angular front end ip
  url = "http://localhost:10565/";
  // parameter - private http of type HttpClient
  constructor( private http:HttpClient ) { }
  
  list () {
	  return this.http.get( this.url );
  }
  // and then go to the ts file that will be getting stuff, here its book.components.ts
	// import CommonService from common.service file

  save ( d:any ) {
	  return this.http.post( this.url, d );
  }
  
  update ( key:string, d:any ) {
	  return this.http.put( this.url+"?id="+key, d );
  }

  delete (key:string) {
	  return this.http.delete( this.url+"?id=" + key);
	  // then return back to books.component and add on to delete() using .subscribe()
  }
  
}

// after this go back to books.component.ts, need to import some stuff there
export interface PostObject {
	data:any;
}