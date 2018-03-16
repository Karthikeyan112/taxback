import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import {Location} from '@angular/common';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ListComponent } from './list-transactions/list.component';
import { TranxDetailsComponent } from './trasacrion-details/tranx-details.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { DialogOverviewExampleDialog } from './dialogue/dialogue.component';

const appRoutes: Routes = [
  { path: 'transactions', component: ListComponent },
  {path: 'transactions/create', component: CreateTransactionComponent},
  {path: 'transactions/edit/:id', component: CreateTransactionComponent},
  {path: 'transactions/:id', component: TranxDetailsComponent},
  { path: '', pathMatch: 'full', redirectTo: 'transactions' },
  { path: '**', pathMatch: 'full', redirectTo: 'transactions' }
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TranxDetailsComponent,
    CreateTransactionComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [
    DatePipe,
    AppService,
    Location
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
