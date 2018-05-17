import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'

@Injectable()
export class UsersService {

    constructor(
        private _http: HttpClient,
    ){
    }
 
    getUsers():Promise<any> {
        return this._http.get("https://jsonplaceholder.typicode.com/users").toPromise();
    }
  
}
