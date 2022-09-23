import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
    selector: "app-component",
    templateUrl: "app.component.html", 
    styleUrls: ["app.component.css", "app.header.component.css"]
})
export class AppComponent {
    name: string = "TechnoFunnel Name";

    getName() {
        return {
            name: "Mayank",
            age: 30
        }
    }

    constructor(private _httpClient: HttpClient) {}
}


