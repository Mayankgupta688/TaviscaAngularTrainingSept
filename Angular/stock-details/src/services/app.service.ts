import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export default class AppService {
    currentStockPrice: number = 300;

    getStockPrice() {
        return this.currentStockPrice;
    }
}