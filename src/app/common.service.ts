import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url_vacancy = "http://localhost:8888/vacancy"
  constructor(private http: HttpClient) {}

   view_vacancy(d:any){
    return this.http.get(this.url_vacancy+'?id='+d.id)
   }
   
   list_vacancy(){
     return this.http.get(this.url_vacancy)
   }

   save_vacancy(d:any){
     return this.http.post(this.url_vacancy, d)
   }

   update_vacancy(id:string,d:any){
     return this.http.put(this.url_vacancy+'?id='+id, d)
   }

   delete_vacancy(id:string){
     return this.http.delete(this.url_vacancy+'?id='+id)
   }

}
export interface PostObject {
  data: any
}