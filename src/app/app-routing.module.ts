import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCompComponent } from './new-comp/new-comp.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: '', component: NewCompComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'transaction', component: TransactionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }