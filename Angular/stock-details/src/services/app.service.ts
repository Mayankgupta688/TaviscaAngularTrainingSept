import { Injectable, EventEmitter } from "@angular/core";
@Injectable({
    providedIn: "root"
})
export default class AppService {
    currentStockPrice: number = 300;
    dataChangeEvent = new EventEmitter<number>();

    getStockPrice() {
        return this.currentStockPrice;
    }

    setStockPrice() {
        this.currentStockPrice += 1;
        this.dataChangeEvent.emit(this.currentStockPrice);
    }

    setStockPriceAsRequired(somePrice: any) {
        this.currentStockPrice = somePrice;
        this.dataChangeEvent.emit(this.currentStockPrice);
    }
}