import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CoinService } from 'src/app/services/coin.service';
import { Coin } from '../../interfaces/coin'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchText: string = ''
 
  constructor(private coinservice: CoinService) { }

  ngOnInit(): void {
  }
  buscar() {
        
   this.coinservice.coin$.next(this.searchText)



  }
}
