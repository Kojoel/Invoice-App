import { Routes } from '@angular/router';
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';

export const routes: Routes = [
    { path: 'home', component: InvoiceListComponent },
    { path: 'details', component: InvoiceDetailsComponent },
];
