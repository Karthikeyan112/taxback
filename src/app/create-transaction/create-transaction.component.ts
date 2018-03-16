import { Component, OnInit  } from '@angular/core';
import { DatePipe } from '@angular/common';
import {Router, ActivatedRoute} from "@angular/router";

import { AppService } from '../app.service';

@Component ({
    templateUrl: './create-transaction.component.html',
    styleUrls: ['./create-transaction.component.css']
})

export class CreateTransactionComponent implements OnInit{
    tranx ={};
    buttonName = '';
    amountTypes = ['EUR', 'INR', 'GBP', 'USD'];
    constructor(private datePipe: DatePipe, private appService: AppService, private router: Router, 
        private activeRoute: ActivatedRoute) {}

    createNew() {
        if(this.buttonName === 'Update'){
            this.appService.updateTranx(this.tranx).subscribe(data => {
                this.router.navigate(['/transactions'])
            });
        }else {
            this.tranx['txn_date'] = this.datePipe.transform(new Date(), 'yyy-MM-dd');
            this.appService.createNewTranx(this.tranx).subscribe(data => {
                console.log(data);
                this.router.navigate(['/transactions'])
            }, err => {
                console.log(err);
            });
        }
       
    }
    ngOnInit() {
        let arr = window.location.href.split('/');
        if(arr[arr.length-2] === 'edit') {
            this.buttonName = 'Update';
            this.appService.getTraxns(arr[arr.length-1]).subscribe(data => {
                this.tranx = data;
            });
        }else {
            this.buttonName = 'Create';
        }
    }
}