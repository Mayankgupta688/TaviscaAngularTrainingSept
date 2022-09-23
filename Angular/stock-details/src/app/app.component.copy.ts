import { Component } from "@angular/core";

@Component({
    selector: "app-component-copy",
    template: `
        <div>
            <h1>This is {{ getName().name + " Age is " + getName().age }}</h1>
            <h2>Welcome to {{ name }}</h2>
            <h3>Hello World Component</h3>
        </div>
    `, styles: ["h1{color:red}", "h2{color: green}", "h3{color: grey}"]
})
export class AppComponent {
    name: string = "TechnoFunnel Name";

    getName() {

        console.log("qweqweq")
        return {
            name: "Mayank",
            age: 30
        }
    }
}


