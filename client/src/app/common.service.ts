import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url = 'http://localhost:8888/'

  constructor(private http:HttpClient) { }
  list() {
    return this.http.get(this.url)
  }
  
  listFullCV () {
	  return this.http.get( this.url + "full_cv_details" );
  }
  
  save(d:any) {
    return this.http.post(this.url,d)
  }
}

export interface PostObject {
  data: any
}
