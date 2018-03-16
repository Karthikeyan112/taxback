import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable()
export class AppService {
    url: String = environment.base_url;
    tranxList = [];
    tranx = {};
    constructor(private httpClient: HttpClient) {

    }

    getAllTraxns(): Observable<any> {
         return this.httpClient.get(this.url+'/priya@gmail.com');
    }
    
    getTraxns(id: String): Observable<any> {
        return this.httpClient.get(this.url+'/priya@gmail.com/'+id)
    }

    createNewTranx(data){
        return this.httpClient.post(this.url+'/'+data.user,data);
    }
    deleteTranx(data) {
        return this.httpClient.delete(this.url+'/'+data.user+'/'+data.id);
    }
    updateTranx(data) {
        return this.httpClient.post(this.url+'/'+data.user+'/'+data.id,data);
    }
}

