import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TransactionComponent } from './transaction/transaction.component';
import { DeleteComponent } from './delete/delete.component';
import { FilterPipe } from './bankpipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    RegisterComponent,
    HomeComponent,
    TransactionComponent,
    DeleteComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
