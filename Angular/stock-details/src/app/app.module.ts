import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    imports: [ BrowserModule, HttpClientModule ],
    declarations: [AppComponent, StockDetailsComponent],
    bootstrap: [StockDetailsComponent]
})
export class AppModule { }

