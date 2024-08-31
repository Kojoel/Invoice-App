import { createReducer, on } from '@ngrx/store';
import { Invoice } from '../model/invoice.model';
import * as InvoiceActions from './invoice.actions';
import { deleteInvoice, deleteInvoiceSuccess } from './invoice.actions';

export interface InvoiceState {
  invoices: Invoice[];
  loading: boolean;
  error: string | null;
}

export const initialState: InvoiceState = {
  invoices: [],
  loading: false,
  error: null
};

export const invoiceReducer = createReducer(
  initialState,
  on(InvoiceActions.loadInvoices, state => ({
    ...state,
    loading: true
  })),
  on(InvoiceActions.loadInvoicesSuccess, (state, { invoices }) => ({
    ...state,
    invoices,
    loading: false
  })),
  on(InvoiceActions.deleteInvoice, (state, { id }) => ({
    ...state,
    invoices: state.invoices.filter(invoice => invoice.id !== id)
  }))
);