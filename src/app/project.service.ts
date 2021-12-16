import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './model/user';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http:HttpClient) {
    
  }
  getdata():Observable<Data[]>{
    return this.http.get<Data[]>(`http://localhost:3000/users/`).pipe(
      map((res)=>{
        console.log("asd",res);
        return res; 
      })
    )
    
   }
   getId(id:number):Observable<Data>{
     console.log(id);
     return this.http.get<Data>(`http://localhost:3000/users/`+id)
   }
 postdata(data:any):Observable<Data>{
   console.log("service post",data);
   return this.http.post<Data>(`http://localhost:3000/users/`,data).pipe(
     map((res)=>{
       return res;
       
     })
   )
 }

 updateData(id:number,obj:Data):Observable<Data>{
   return this.http.put<Data>(`http://localhost:3000/users/`+id,obj)
 }
 deletedata(id:any):Observable<Data>{
   console.log("ser",id);

  return this.http.delete<Data>("http://localhost:3000/users/"+id)
 }
}
