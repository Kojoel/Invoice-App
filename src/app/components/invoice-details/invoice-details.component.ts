import { Component } from '@angular/core';
import { InvoiceListComponent } from '../invoice-list/invoice-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllInvoices } from '../../store/invoice.selectors';
import { Invoice } from '../../model/invoice.model';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { deleteInvoice } from '../../store/invoice.actions';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { DeleteModalService } from '../../services/delete-modal.service';

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [InvoiceListComponent, NgIf, AsyncPipe, CommonModule, DeleteModalComponent],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.scss'
})
export class InvoiceDetailsComponent {
  invoice$: Observable<Invoice | undefined> | undefined;

  constructor(
    private router: Router, 
    private store: Store, 
    private route: ActivatedRoute,
    public deleteModalService: DeleteModalService,
  ) {
      // this.invoice$ = this.store.select(selectAllInvoices);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.invoice$ = this.store.select(selectAllInvoices).pipe(
      map(invoices => invoices.find(invoice => invoice.id === id))
    );
    this.invoice$.subscribe(invoice => console.log(invoice));
  }


  // onDeleteInvoice(id: string): void {
  //   this.store.dispatch(deleteInvoice({ id }));
  // }
  onDeleteInvoice(id: string): void {
    this.deleteModalService.toggleModal();
    this.deleteModalService.modalIndex = id;
    // console.log(this.deleteModalService.showModal);
    // console.log(this.deleteModalService.modalIndex);
  }

  gotoList(): void {
    this.router.navigate(['/home']);
  }
}
