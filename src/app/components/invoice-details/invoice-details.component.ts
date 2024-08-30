import { Component } from '@angular/core';
import { InvoiceListComponent } from '../invoice-list/invoice-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllInvoices } from '../../store/invoice.selectors';
import { Invoice } from '../../model/invoice.model';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { deleteInvoice } from '../../store/invoice.actions';

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [InvoiceListComponent, NgIf, AsyncPipe, CommonModule],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.scss'
})
export class InvoiceDetailsComponent {
  invoice$: Observable<Invoice | undefined> | undefined;

  constructor(
    private router: Router, 
    private store: Store, 
    private route: ActivatedRoute,) {
      // this.invoice$ = this.store.select(selectAllInvoices);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.invoice$ = this.store.select(selectAllInvoices).pipe(
      map(invoices => invoices.find(invoice => invoice.id === id))
    );
    this.invoice$.subscribe(invoice => console.log(invoice));
  }


  onDeleteInvoice(id: string): void {
    if (confirm('Are you sure you want to delete this invoice?')) {
      this.store.dispatch(deleteInvoice({ id }));
      this.gotoList();
    }
  }

  gotoList(): void {
    this.router.navigate(['/home']);
  }
}
