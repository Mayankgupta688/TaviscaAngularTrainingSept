import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employeeFilterText: string = "adsa";
  employeeList: any[] = [];
  filteredEmployeeList: any[] = [];
  employeeImage: string = "https://tse3.mm.bing.net/th?id=OIP.VogRLtwwF0rxBiAm5KTkSAHaG8&pid=Api&P=0";

  constructor(private _httpClient: HttpClient) { 
    this._httpClient.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").subscribe((response: any) => {
      this.employeeList = response;
      this.filteredEmployeeList = response;
    })
  }

  filterEmployees(filterValue: string) {
    this.filteredEmployeeList = this.employeeList.filter((employee) => {
      if(employee.name.toLocaleLowerCase().indexOf(filterValue.toLocaleLowerCase()) > -1)  {
        return true;
      } else {
        return false
      }
    })
  }
}
