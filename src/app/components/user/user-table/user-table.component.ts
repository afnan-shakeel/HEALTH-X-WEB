import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AxiosService } from 'src/app/services/axios.service';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.sass']
})
export class UserTableComponent {
  constructor(private axiosService: AxiosService) {

  }
  data: any;
  userList: any[] = [];
  page_limit: number = 10;
  cursor_id: string = "1";
  page_id: number = 1;
  total_pages: any[] = [1, 2, 3];
  @Input() Records: any[] = [];
  @Input() Pagination: any;
  @Output() userPaginationEvent = new EventEmitter<any>();
  @Output() userEditEvent = new EventEmitter<any>();
  ngOnInit(): void {
    // this.fetchUser()

    console.log(this.data)
  }
  statusOption: any[] = [
    { value: 'active', name: 'Active' },
    { value: 'inactive', name: 'Inactive' },
    { value: 'suspended', name: 'Suspended' },
    { value: 'closed', name: 'Closed' },
  ]


  editRecord(data: any) {
    this.userEditEvent.emit({ data: data })
  }



  warningDialogData: any = {
    title: "Update User Status",
    message: "",
    cancelText: "Cancel",
    confirmText: "Update"
  }
  handleStatusSelectEvent(event: any, item: any) {
    console.log('x -> handleStatusSelectEvent', event)
    this.setWarningDialog()
    this.warningDialogData.data = item
    this.warningDialogData.message = `Are you sure you want to update ${item.username}'s status?`
  }

  showWarningDialog: boolean = false;
  setWarningDialog() {
    this.showWarningDialog = !this.showWarningDialog
  }
  updateUserStatus(event: any){
    console.log('to update user status. coming soon!', event)
    window.alert(`..Still in development :(  [${event?.username}]` )
    this.setWarningDialog()
    // this.fetchUser()
  }
  



  paginationMode(mode: String, value: any) {
    this.userPaginationEvent.emit({ data: { mode: mode, value: value } })
  }
}
