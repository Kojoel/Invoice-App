import { createAction, props } from '@ngrx/store';
import { Invoice } from '../model/invoice.model';

export const loadInvoices = createAction('[Invoice] Load Invoices');
export const loadInvoicesSuccess = createAction('[Invoice] Load Invoices Success', props<{ invoices: Invoice[] }>());

export const deleteInvoice = createAction(
    '[Invoice] Delete Invoice',
    props<{ id: string }>()
);

export const deleteInvoiceSuccess = createAction(
    '[Invoice] Delete Invoice Success',
    props<{ id: string }>()
);