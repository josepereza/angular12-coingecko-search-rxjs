import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Coin } from '../interfaces/coin'

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  public coin$ = new Subject<string>()

  constructor(private http: HttpClient) { }
  getCoin() {
    return this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')

  }

}
