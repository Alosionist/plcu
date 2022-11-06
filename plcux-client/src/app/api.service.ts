import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Market } from './models/market';
import { DataPoint } from './models/dataPoint';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly MARKETS = '/api/markets';

  constructor(private http: HttpClient) { }

  get markets$(): Observable<string[]> {
    return this.http.get<string[]>(this.MARKETS);
  }

  getMerket(market: string): Observable<Market> {
    return this.http.get<Market>(`${this.MARKETS}/${market}`);
  }

  getHistory(market: string, from?: Date, to?: Date): Observable<DataPoint[]> {
    return this.http.get<DataPoint[]>(`${this.MARKETS}/${market}/history`);
  }
}
