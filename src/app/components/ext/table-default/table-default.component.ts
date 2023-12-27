import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-default',
  templateUrl: './table-default.component.html',
  styleUrls: ['./table-default.component.sass']
})
export class TableDefaultComponent {
  @Output() tableEventEmitter = new EventEmitter<any>();
  @Input() eventId: string | undefined;
  @Input() TableConfig: any = {
    editRecord: true,
    deleteRecord: true,
    viewRecord: true,
    updateStatus: true,
    allowPagination: true,
    allowSort: true,
    allowExport: true,
    allowRowSelection: true,
    allowRowExpand: true,
    PatientAppointment: true,
  }
  @Input() Headers: any[] = [];
  @Input() Records: any[] = [];
  rangeList = (num: number) => Array.from({length: num}, (_, i) => i + 1);
  @Input() Pagination: any;

  constructor() { }
  selectedRecord(item: any){

  }


  paginationMode (mode: string, value: number){
    this.tableEventEmitter.emit({name: this.eventId, data: {mode: mode, value: value}});
  }
}
