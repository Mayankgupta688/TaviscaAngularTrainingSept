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
  newPrice = "100";

  constructor(private _httpClient: HttpClient, public appService: AppService) {
    this.currentPrice = this.appService.currentStockPrice;

    this.appService.dataChangeEvent.subscribe((newValue) => {
      this.currentPrice = newValue;
      debugger;
    });

    setInterval(() => {
      var myObservable = this._httpClient.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI");
      myObservable.subscribe((response) =>{
        this.stockData = response;
      })
    }, 2000);
  }

  changeRequiredPrice(event: Event) {
    this.newPrice = (event.target as HTMLInputElement).value;
  }

  showNewRequiredPrice() {
    this.appService.setStockPriceAsRequired(this.newPrice);
  }

  showData(companyName: any) {
    alert("Company Name is: " + companyName)
  }

  changeData() {
    this.appService.setStockPrice();
  }
}
