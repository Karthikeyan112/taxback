import { Component, OnInit, ViewChild  } from '@angular/core';
import {Router} from "@angular/router";
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { AppService } from '../app.service';
import { DialogOverviewExampleDialog } from '../dialogue/dialogue.component';


@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
    displayedColumns = ['id', 'user','amount', 'txn_date', 'Options'];
    dataSource = new MatTableDataSource();
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private appService: AppService, private router: Router, public dialog: MatDialog) {}

    openDialog(data) {
        let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
          width: '300px',
          data: 'Are you sure want to remove?'
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed'+ result);
          if(result === true) {
            console.log(data);
            this.deleteMember(data);
          }
          
        });
      }
      editTranx(tran) {
          this.router.navigate(['/transactions/edit/'+tran.id]);
      }
      applyFilter(value: string) {
        value = value.trim().toLowerCase();
        this.dataSource.filter = value;
      }
    getRecord(row) {
        console.log(row);
        this.router.navigate(['transactions/'+row.id]);
    }
    createNew() {
        console.log('new');
        this.appService.tranx = {};
        this.router.navigate(['transactions/create']);
    }
    deleteMember(data) {
        console.log(data);
        this.appService.deleteTranx(data).subscribe(data => {
            console.log(data);
            window.location.reload();
        });
    }
    ngOnInit() {
        this.appService.getAllTraxns().subscribe(data => {
            this.dataSource.data = data;
            this.appService.tranxList = data;
        },err => {
            console.log(err);
        });
        
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
      }
}
