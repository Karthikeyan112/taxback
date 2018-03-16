import { NgModule } from '@angular/core';
import {MatInputModule, MatTableModule, 
  MatPaginatorModule, MatCardModule,
  MatListModule, MatGridListModule,
  MatButtonModule, MatSelectModule,
  MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';



@NgModule({
    declarations: [
    ],
    imports: [
      MatInputModule,
      MatTableModule,
      MatPaginatorModule,
      MatCardModule,
      MatListModule,
      MatGridListModule,
      MatButtonModule,
      MatSelectModule,
      MatDialogModule
    ],
    exports: [
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
        MatListModule,
        MatGridListModule,
        MatButtonModule,
        MatSelectModule,
        MatDialogModule
    ],
    providers: [
      {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
    bootstrap: []
  })

  export class MaterialModule { }