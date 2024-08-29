import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../../model/invoice.model';
import { Store } from '@ngrx/store';
import { selectAllInvoices } from '../../store/invoice.selectors';
import { loadInvoices } from '../../store/invoice.actions';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [CommonModule, NgIf, AsyncPipe], // Use valid standalone components, directives, pipes, or NgModules
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoices$: Observable<Invoice[]>;

  constructor(private store: Store, private dataService: DataService) {
    // this.invoices$ = this.store.select(selectAllInvoices);
    this.invoices$ = this.dataService.getInvoices();
  }

  ngOnInit(): void {
    this.store.dispatch(loadInvoices());

    // this.invoices$.subscribe(invoices => {
    //   console.log('Array of Invoices:', invoices);
    // });

    this.dataService.getInvoices().subscribe(invoices => {
      console.log('Array of Invoices:', invoices);
    });
  }
}
