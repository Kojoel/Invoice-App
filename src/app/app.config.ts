import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { invoiceReducer } from './store/invoice.reducer';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http'; // Correctly import HttpClientModule
import { InvoiceEffects } from './store/invoice.effects';
import { provideState } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [
    HttpClientModule, // Include HttpClientModule in providers
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    provideState({ name: 'invoices', reducer: invoiceReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(InvoiceEffects),
    provideRouterStore(),
    provideHttpClient(withFetch())
  ]
};