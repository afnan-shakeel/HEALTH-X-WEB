import { Component } from '@angular/core';
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'
import { AxiosService } from 'src/app/services/axios.service';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.sass']
})
export class UserManagementComponent {

  searchBoxes: any[] = [
    {
      title: "ID",
      name: "id",
      type: "text",
      options: null,
      placeholder: "Enter ID",
      value: null,
      required: true,
      disabled: false,
      readonly: false,
      minLength: 1,
      maxLength: 100,
      pattern: "^[0-9]*$",
      patternMessage: "Only numbers are allowed",
      errorMessage: "Please enter valid ID",
      validationMessage: "ID is required",
      colStyle: 'sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'
    },
    {
      title: "User Name",
      name: "username",
      type: "text",
      options: null,
      placeholder: "Enter username",
      value: null,
      required: true,
      disabled: false,
      readonly: false,
      minLength: 1,
      maxLength: 100,
      pattern: "^[0-9]*$",
      patternMessage: "Only numbers are allowed",
      errorMessage: "Please enter valid ID",
      validationMessage: "ID is required",
      colStyle: 'sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'
    },
    {
      title: "Email",
      name: "email",
      type: "text",
      options: null,
      placeholder: "Enter email",
      value: null,
      required: true,
      disabled: false,
      readonly: false,
      minLength: 1,
      maxLength: 100,
      pattern: "^[0-9]*$",
      patternMessage: "Only numbers are allowed",
      errorMessage: "Please enter valid ID",
      validationMessage: "ID is required",
      colStyle: 'sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'
    },
    {
      title: "Mobile",
      name: "mobile",
      type: "number",
      options: null,
      placeholder: "Enter Mobile Number",
      value: null,
      required: true,
      disabled: false,
      readonly: false,
      minLength: 1,
      maxLength: 100,
      pattern: "^[0-9]*$",
      patternMessage: "Only numbers are allowed",
      errorMessage: "Please enter valid ID",
      validationMessage: "ID is required",
      colStyle: 'sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'
    },
    {
      title: "Status",
      name: "status",
      type: "dropdown",
      options: [{ name: "Active", value: "active" }, { name: "Inactive", value: "inactive" }],
      placeholder: "",
      value: null,
      required: true,
      disabled: false,
      readonly: false,
      minLength: 1,
      maxLength: 100,
      pattern: "^[0-9]*$",
      patternMessage: "Only numbers are allowed",
      errorMessage: "Please enter valid ID",
      validationMessage: "ID is required",
      colStyle: 'sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'
    },
    {
      title: "From",
      name: "FromDate",
      type: "date",
      options: null,
      placeholder: "Select From Date",
      value: null,
      required: true,
      disabled: false,
      readonly: false,
      minLength: 1,
      maxLength: 100,
      pattern: "^[0-9]*$",
      patternMessage: "Only numbers are allowed",
      errorMessage: "Please enter valid ID",
      validationMessage: "ID is required",
      colStyle: 'sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'
    },
    {
      title: "To",
      name: "ToDate",
      type: "date",
      options: null,
      placeholder: "Select To Date",
      value: null,
      required: true,
      disabled: false,
      readonly: false,
      minLength: 1,
      maxLength: 100,
      pattern: "^[0-9]*$",
      patternMessage: "Only numbers are allowed",
      errorMessage: "Please enter valid ID",
      validationMessage: "ID is required",
      colStyle: 'sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'
    },
  ]
  searchEventId: string = "user-search-event";
  userList: any[] = [];
  perPage: number = 10;
  cursorId: string = "1";
  pageId: number = 0;
  searchCriteria: any[] = [];
  pagination: any;
  _pagination: any;
  isFormOpen: boolean = false;
 
  constructor(private axiosService: AxiosService ) { }


  handleUserSearchEvent(event: any) {
    this.searchCriteria = []
    if (event.name == 'user-search-event') {
      var obj;
      for (let key of Object.keys(event.data)) {
        if (event.data[key] == null || event.data[key] == "") {
          continue
        }
        else {
          if (["mobile", "id"].includes(key)) {
            this.searchCriteria.push({ "key": key, "type": "3", "value": Number(event.data[key]) })
            continue
          }
          if(["FromDate","ToDate"].includes(key)){
          }
          if(["status"].includes(key)){
            this.searchCriteria.push({ "key": key, "type": "2", "value": event.data[key] })
            continue
          }
          this.searchCriteria.push({ "key": key, "type": "1", "value": event.data[key] })
        }
      }
      console.log(this.searchCriteria)
      obj = this.userPayload('page', this.pageId, this.perPage, this.searchCriteria)
      console.log(obj)
      this.fetchUser(obj)
    }
  }
  handleUserTableEvent(event: any) {
    var obj: any = {};
    if (event.data.mode == 'page') {
      this.pageId = event.data.value
      obj = this.userPayload('page', event.data.value - 1, this.perPage, this.searchCriteria)
    }
    else if (event.data.mode == 'cursor') {
      this.cursorId = event.data.value
      obj = this.userPayload('cursor', event.data.value, this.perPage, this.searchCriteria)
    }
    console.log(this.searchCriteria)
    console.log(obj)
    this.fetchUser(obj)
  }

  rangeList = (num: number) => Array.from({ length: num }, (_, i) => i + 1);

  async fetchUser(payload: any = null) {
    const res = await this.axiosService.postData('/user', payload)
    this.userList = res.data.data || []
    this.pagination = res.data.meta || []

    this._pagination = {
      totalRecords: this.pagination.total_record,
      totalPages: this.rangeList(Math.ceil(this.pagination.total_record / this.perPage)),
      currentPage: this.pagination.page.current_page,
      perPage: this.perPage,
      mode: 'default'
    }
    console.log(this.userList)
  }

  userPayload(pageMode: string, paginationValue: string | number, perPage: number, searchArr: any[] | null) {
    return {
      "pageId": (pageMode == "page") && Number(paginationValue),
      "cursorId": (pageMode == "cursor") && paginationValue,
      "pageLimit": perPage,
      "sortField": null,
      "sortType": null,
      "searchQuery": searchArr
    }
  }

  async fetchUserByPage(page: string) {
    this.pageId = Number(page)
    var obj = this.userPayload('page', page, this.perPage, null)
    console.log(obj)
    this.fetchUser(obj)
  }

  async fetchUserByCursor(cursor: string) {
    this.cursorId = cursor
    var obj = this.userPayload('cursor', cursor, this.perPage, null)
    console.log(obj)
    this.fetchUser(obj)
  }

  editData: any;
  handleUserEdit(event: any) {
    console.log('edit',event.data)
    this.editData = event.data
    this.setFormOpen(true)

  }

  formModal: any;
  async setFormOpen(value: boolean) {
    this.isFormOpen = value;
  }
  closeForm() {
    this.setFormOpen(false)
  }

  ngOnInit(): void {
    this.fetchUser(this.userPayload('page', 0, this.perPage, []))
  }

}
