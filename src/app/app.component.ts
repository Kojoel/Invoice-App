import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvoiceListComponent, InvoiceDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Invoice-App';
}
