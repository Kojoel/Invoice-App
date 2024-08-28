import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../model/invoice';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = './assets/data/invoices.json';

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.dataUrl);
  }
}
