import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../../model/invoice.model';
import { Store } from '@ngrx/store';
import { selectAllInvoices } from '../../store/invoice.selectors';
import { loadInvoices } from '../../store/invoice.actions';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [CommonModule], // Use valid standalone components, directives, pipes, or NgModules
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoices$: Observable<Invoice[]>;

  invoiceItems : Invoice[] = [];

  constructor(private store: Store) {
    this.invoices$ = this.store.select(selectAllInvoices);
  }

  ngOnInit(): void {
    this.store.dispatch(loadInvoices());

    this.invoices$.subscribe(item => this.invoiceItems = item);
    console.log(this.invoiceItems);
  }

  // trackInvoice(index: number, invoice: Invoice): string {
  //   return invoice.id;
  // }
}
