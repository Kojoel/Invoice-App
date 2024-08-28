import { createAction, props } from '@ngrx/store';
import { Invoice } from '../model/invoice.model';

export const loadInvoices = createAction('[Invoice] Load Invoices');
export const loadInvoicesSuccess = createAction('[Invoice] Load Invoices Success', props<{ invoices: Invoice[] }>());