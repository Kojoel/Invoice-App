import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InvoiceState } from './invoice.reducer';

export const selectInvoiceState = createFeatureSelector<InvoiceState>('invoices');

export const selectAllInvoices = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.invoices
);