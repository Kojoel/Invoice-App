import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromEvent, map, Observable, of, startWith } from 'rxjs';
import { Invoice } from '../model/invoice.model' ;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = '../../assets/data/data.json';

  invoiceData: Invoice[] = [];

  windowWidth$: Observable<number>;

  constructor(private http: HttpClient) { 
    // An observable that listens to the windows innerwidth

    if (typeof window !== 'undefined') {
      this.windowWidth$ = fromEvent(window, 'resize').pipe(
        map(() => window.innerWidth),
        startWith(window.innerWidth)
      );
    } else {
      // We're in a non-browser environment
      this.windowWidth$ = of(0); 
    }
  }

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.dataUrl);
  }


  

  

}
