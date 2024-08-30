import { Component } from '@angular/core';
import { InvoiceListComponent } from '../invoice-list/invoice-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [InvoiceListComponent],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.scss'
})
export class InvoiceDetailsComponent {

  constructor(private router: Router) {}



  gotoList(): void {
    this.router.navigate(['/home']);
  }
}
