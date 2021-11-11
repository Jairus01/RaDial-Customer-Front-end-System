import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url = 'http://localhost:8888/'
  constructor(private http:HttpClient) { 

  }

  list(page:string){
    return this.http.get(this.url + page)
  }
  delete(page:string,key:string){
    return this.http.delete(this.url+ page + '?id='+key)
  }
  save(page:string,d:any)
  {
    return this.http.post(this.url+ page,d)
  }
  update(page:string,key:string, d:any)
  {
    return this.http.put(this.url + page + key,d)
  }
  load(page:string, key:string)
  {
    return this.http.get(this.url + page + key)
  }


}
export interface PostObject {
  data:any
}
