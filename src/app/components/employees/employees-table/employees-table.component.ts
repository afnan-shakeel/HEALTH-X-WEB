import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.sass']
})
export class EmployeesTableComponent {
  empList: any[] = []
  
  selectedRecord(item: any){

  }
  paginationMode (mode: string, value: number){

  }
}
