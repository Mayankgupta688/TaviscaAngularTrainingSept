import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import AppService from 'src/services/app.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent {
  stockImage: string = "https://tse2.mm.bing.net/th?id=OIP.JQfr65xH4sE27c1qnG2CmgHaEK&pid=Api&P=0";
  currentPrice: number = 0
  stockData: any = {}

  constructor(private _httpClient: HttpClient, private _appService: AppService) {
    this.currentPrice = this._appService.currentStockPrice;
    setInterval(() => {
      var myObservable = this._httpClient.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI");
      myObservable.subscribe((response) =>{
        this.stockData = response;
      })
    }, 2000)
  }
}
