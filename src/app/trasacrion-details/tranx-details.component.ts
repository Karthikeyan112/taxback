import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

import { AppService } from '../app.service';

@Component({
    templateUrl: './tranx-details.component.html',
    styleUrls: ['./tranx-details.component.css']
})

export class TranxDetailsComponent implements OnInit  {
    details = {};
    name = '';
    id = '';

    constructor(private appService: AppService, private activeRoute: ActivatedRoute, private router: Router,
    private location: Location){}
    editDetails() {
        //transactions/edit
        this.router.navigate(['/transactions/edit/'+this.id]);
    }
    goBack() {
        this.location.back();
    }
    ngOnInit() {
        this.activeRoute.params.subscribe(param =>{
            this.id = param.id;
        });
        this.appService.getTraxns(this.id)
        .subscribe(data => {
            this.details = data;
            this.appService.tranx = data;   
            console.log(data.user);
            this.name = data.user.split('@')[0];
        })
    }
}