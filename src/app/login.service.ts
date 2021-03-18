import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  arr:any
abc:any

  constructor(private http:HttpClient) { }

  getservice(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
   }

   insertData(myData:NgForm){
    return this.http.post('http://localhost:3000/insertData', myData,{
      headers: new HttpHeaders({
        'Content-Type' :'application/json'
       })
    } )
  }

  getBackendData(){
    return this.http.get('http://localhost:3000/getData')
  }

  deleteData(data:NgForm){
    return this.http.post('http://localhost:3000/del',data ,{
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }

  updateData(data:any){
    return this.http.put('http://localhost:3000/update',data ,{
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }

  onDel(arr:any){
    return this.http.post('http://localhost:3000/del',arr,{
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
}
