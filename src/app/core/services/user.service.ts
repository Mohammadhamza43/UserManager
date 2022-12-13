import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiResponse} from "../models/IApiResponse";
import IUser from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://randomuser.me/api/?seed=foobar&page=1&results='
  count = 10
  constructor(private httpClient: HttpClient) {
    const item = localStorage.getItem('results');
    this.count = item ? +item : this.count
  }

  getUserRecords(count = 0): Observable<IApiResponse<IUser[]>> {
    this.count = this.count + count;
    localStorage.setItem('results', this.count.toString())
    return this.httpClient.get<IApiResponse<IUser[]>>(this.baseUrl + this.count)
  }
}
