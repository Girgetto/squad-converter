import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable({
  providedIn: "root"
})
export class LinkedinService {
  public person: Array<string> = [];
  constructor(public http: HttpClient, public Http: Http) {}

  getToken(params) {
    return this.http.get(`${environment.BASE_URL}/api/oauth/linkedin/callback/?code=${params.code}&state=${params.state}`)
    .map(res => res)
  }

  getCode() {
    return this.http.get(`${environment.BASE_URL}/api/oauth/linkedin`)
    .map(res=> res)
  }

  sharePost(data) {
    return this.http.post(`${environment.BASE_URL}/api/submit`,{data}).map(res=> res);
  }
}