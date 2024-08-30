import { Injectable } from '@angular/core';
import { deleteInvoice } from '../store/invoice.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeleteModalService {

  showModal: boolean = false;
  modalIndex: string = '';

  constructor(private store: Store, private router: Router) { }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  onDeleteInvoice(id: string): void {
    this.store.dispatch(deleteInvoice({ id }));
    this.toggleModal();
    this.gotoList();
  }

  gotoList(): void {
    this.router.navigate(['/home']);
  }
  
}
