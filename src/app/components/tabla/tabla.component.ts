import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoinService } from 'src/app/services/coin.service';
import { Coin } from '../../interfaces/coin'
import { debounceTime, distinctUntilChanged, switchMap, map, share, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit, OnDestroy {
  filterCoin: Coin[] = []
  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.coinService.getCoin().subscribe(data => {
      this.filterCoin = data
    })

    this.coinService.coin$.pipe(
      debounceTime(500),
      distinctUntilChanged(),


    ).subscribe(search => {
      this.coinService.getCoin().subscribe(coins => {
        this.filterCoin = coins.filter(micoin =>
          micoin.name.toLowerCase().includes(search.toLowerCase()))
      }
      )

    })


  }

  ngOnDestroy(): void {
   this.coinService.coin$.unsubscribe();
  }
}
