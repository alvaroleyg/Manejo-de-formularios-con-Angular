import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ProvidersTableComponent } from './components/providers-table/providers-table.component';
import { AddProviderComponent } from './components/add-provider/add-provider.component';
import { EditProviderComponent } from './components/edit-provider/edit-provider.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvidersTableComponent,
    AddProviderComponent,
    EditProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
