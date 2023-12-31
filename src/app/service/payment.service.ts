import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private route:Router,private http:HttpClient) { }

  baseUrl='http://localhost:8080/api/v1/payments'

  public paymentDetails(payment:Payment):Observable<any>{
    return this.http.post(`${this.baseUrl}`,payment);
  }
}
