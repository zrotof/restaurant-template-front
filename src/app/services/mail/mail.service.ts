import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  headers = {
    headers : new HttpHeaders({
      'Content-Type':"application/json"
    })
  };

  constructor(private http: HttpClient) { }

  sendContactMail(data: any ) : Observable<any>{
    return this.http.post("http://localhost:3000/mail/contact", data, this.headers);
  }

  sendOrder(data: any ) : Observable<any>{
    return this.http.post("http://localhost:3000/mail/order", data, this.headers);
  }
}
