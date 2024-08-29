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
  imports: [CommonModule, NgIf, AsyncPipe],
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoices$: Observable<Invoice[]>;

  //Variables for toggling
  filterClicked: boolean = false;


  constructor(private store: Store, private dataService: DataService) {
    this.invoices$ = this.store.select(selectAllInvoices); // Gets data from store
    // this.invoices$ = this.dataService.getInvoices();  // Gets data from service
  }

  ngOnInit(): void {
    this.store.dispatch(loadInvoices());

    // Subscribe to obeservable from store...
    this.invoices$.subscribe(invoices => {
      console.log('Array of Invoices:', invoices);
    });

    // SUbscribe to observable from data service...
    // this.dataService.getInvoices().subscribe(invoices => {
    //   console.log('Array of Invoices:', invoices);
    // });
  }

  togglefilter() {
    this.filterClicked = !this.filterClicked;
  }
}
