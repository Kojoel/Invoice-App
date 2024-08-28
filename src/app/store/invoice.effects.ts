import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import * as InvoiceActions from './invoice.actions';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../model/invoice.model';

@Injectable()
export class InvoiceEffects {
  private invoicesUrl = '../assets/data/data.json';

  constructor(private actions$: Actions, private http: HttpClient) {}

  loadInvoices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InvoiceActions.loadInvoices),
      mergeMap(() =>
        this.http.get<Invoice[]>(this.invoicesUrl).pipe(
          map(invoices => InvoiceActions.loadInvoicesSuccess({ invoices })),
        )
      )
    )
  );
}