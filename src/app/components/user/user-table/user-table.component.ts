import { Component } from '@angular/core';
import { AxiosService } from 'src/app/services/axios.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.sass']
})
export class UserTableComponent {
  constructor(private axiosService: AxiosService, private sharedService: SharedDataService) {

  }
  data: any;
  userList: any[] = [];
  page_limit: number = 10;
  cursor_id: string = "1";
  page_id: number = 1;
  total_pages: any[] = [1,2,3];
  ngOnInit(): void {
    // this.fetchUser()
    this.sharedService.createEvent('event1');
    this.sharedService.getEvent('event1')?.subscribe(data => {
      console.log('recieved',data)
    });
    console.log(this.data)
  }
  async fetchUser(searchArr: any[] | null = null) {
    // let searchArr: any[] = []
    var obj = this.paginationPayload('page', 1, searchArr)
    const res = await this.axiosService.postData('/user', obj)
    this.userList = res.data.users || []  
    console.log(this.userList)
  }


  paginationPayload(mode: string, value: number, searchArr: any[] | null) {
    return {
      "pageId": (mode == "page") && this.page_id,
      "cursorId": (mode == "cursor") && this.cursor_id,
      "pageLimit": value,
      "sortField": null,
      "sortType": null,
      "searchQuery": searchArr
    }
  }

  paginationMode(mode: String, value: any){

  }
}
