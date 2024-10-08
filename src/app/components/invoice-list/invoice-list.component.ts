import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Invoice } from '../../model/invoice.model';
import { Store } from '@ngrx/store';
import { selectAllInvoices } from '../../store/invoice.selectors';
import { loadInvoices } from '../../store/invoice.actions';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [CommonModule, NgIf, AsyncPipe, FormsModule,],
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoices$: Observable<Invoice[]>;
  filteredInvoices$: Observable<Invoice[]> | undefined;


  //Variables for toggling
  filterClicked: boolean = false;
  windowWidth: number = 0;
  filter: any = {
    draft: false,
    pending: false,
    paid: false
  };


  constructor(private store: Store, private dataService: DataService, private router: Router) {
    this.invoices$ = this.store.select(selectAllInvoices); // Gets data from store
  }

  ngOnInit(): void {
    this.store.dispatch(loadInvoices());


    this.dataService.windowWidth$.subscribe(width => {
      this.windowWidth = width;
    });

    // FIltering status
    this.filteredInvoices$ = this.invoices$;
    
  }

  togglefilter(shouldshow: boolean) {
    this.filterClicked = shouldshow;
  }

  filterInvoices(): void {
    this.filteredInvoices$ = this.invoices$.pipe(
      map((invoices: any[]) => {
        const selectedFilters = Object.keys(this.filter).filter(key => this.filter[key]);
        if (selectedFilters.length === 0) {
          return invoices;
        }
        return invoices.filter(invoice => this.filter[invoice.status])
      })
    );

  }

  viewInvoiceDetails(invoice: Invoice): void {
    this.router.navigate(['/details', invoice.id]);
  }
}
