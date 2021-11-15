import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url = 'http://localhost:8888/'

  constructor(private http:HttpClient) { }

  listFullCV () {
	  return this.http.get( this.url + "full_cv_details" );
  }

  listFullCV_limit (limit: number) {
	  return this.http.get( this.url + "full_cv_details?limit=" + limit );
  }
  
  update ( key:string, d:any ) {
	  return this.http.put( this.url+"?id="+key, d );
  }

  delete (key:string) {
	  return this.http.delete( this.url+"?id=" + key);
	  // then return back to books.component and add on to delete() using .subscribe()
  }

  listSchedule(page:string){
    return this.http.get(this.url + "schedule")
  }
  deleteSchedule(page:string,key:string){
    return this.http.delete(this.url+ "schedule" + '?id='+key)
  }
  saveSchedule(page:string,d:any)
  {
    return this.http.post(this.url+ "schedule",d)
  }
  updateSchedule(page:string,key:string, d:any)
  {
    return this.http.put(this.url + "schedule" + key, d)
  }
  loadSchedule(page:string, key:string)
  {
    return this.http.get(this.url + "schedule" + key)
  }
}

export interface PostObject {
  data: any
}
