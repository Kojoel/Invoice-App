import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../model/invoice.model' ;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = '../../assets/data/data.json';

  invoiceData: Invoice[] = [];

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.dataUrl);
  }

}
