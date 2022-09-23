import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import AppService from "src/services/app.service";

@Component({
    selector: "app-component",
    templateUrl: "app.component.html", 
    styleUrls: ["app.component.css", "app.header.component.css"]
})
export class AppComponent {
    name: string = "TechnoFunnel Name";
    currentPrice: number = 0;
    getName() {
        return {
            name: "Mayank",
            age: 30
        }
    }

    constructor(private _httpClient: HttpClient, public appService: AppService) {
        this.currentPrice = this.appService.currentStockPrice;

        this.appService.dataChangeEvent.subscribe((newValue) => {
            this.currentPrice = newValue;
        });
    }
}


