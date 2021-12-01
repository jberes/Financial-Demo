import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinancialGridDataService {
  constructor(private http: HttpClient) { }

  public getFinTechDataSource(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/c9f74ff47e524722b8aa4151aba9e935`);
  }
}
