import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms"
import AppService from "src/services/app.service";
import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
    imports: [ BrowserModule, HttpClientModule, FormsModule ],
    declarations: [AppComponent, StockDetailsComponent, EmployeeListComponent],
    bootstrap: [EmployeeListComponent]
})
export class AppModule { }

