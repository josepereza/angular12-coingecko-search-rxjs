import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Coin } from './interfaces/coin'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-coingecko-api';
  coin:Coin[]=[]
  filterCoin:Coin[]=[]

  searchText='';
  constructor(private http:HttpClient){
  
  }
  ngOnInit(){
  
  }
  
}
