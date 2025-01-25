import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EmployeeDetails } from "../model/EmpDetails";

@Injectable({
    providedIn: 'root'
})

export class DataService{

    constructor(private http : HttpClient){ }

    getData() : Observable<any>{
        return this.http.get("https://jsonplaceholder.typicode.com/users");
    }
}