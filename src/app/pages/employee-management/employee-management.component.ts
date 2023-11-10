import { Component } from '@angular/core';
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.sass']
})
export class EmployeeManagementComponent {

  searchBoxes: any[] = [
    {
      title:"ID",
      name:"id",
      type:"text",
      options: null,
      placeholder:"Enter ID",
      value: null,
      required:true,
      disabled:false,
      readonly:false,
      minLength:1,
      maxLength:100,
      pattern:"^[0-9]*$",
      patternMessage:"Only numbers are allowed",
      errorMessage:"Please enter valid ID",
      validationMessage:"ID is required",
      colStyle:'sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'
    },
    {
      title:"Name",
      name:"name",
      type:"text",
      options: null,
      placeholder:"Enter Name",
      value: null,
      required:true,
      disabled:false,
      readonly:false,
      minLength:1,
      maxLength:100,
      pattern:"^[0-9]*$",
      patternMessage:"Only numbers are allowed",
      errorMessage:"Please enter valid ID",
      validationMessage:"ID is required",
      colStyle:'sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-1'
    },
    {
      title:"Status",
      name:"status",
      type:"dropdown",
      options:[{name:"Active", value:"active"},{name:"Inactive", value:"inactive"}],
      placeholder:"Select Status",
      value: null,
      required:true,
      disabled:false,
      readonly:false,
      minLength:1,
      maxLength:100,
      pattern:"^[0-9]*$",
      patternMessage:"...",
      errorMessage:".. .",
      validationMessage:"...",
      colStyle:'sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-1'
    },
    {
      title:"Mobile",
      name:"mobile",
      type:"number",
      options:null,
      placeholder:"Enter Mobile Number",
      value: null,
      required:true,
      disabled:false,
      readonly:false,
      minLength:1,
      maxLength:100,
      pattern:"^[0-9]*$",
      patternMessage:"...",
      errorMessage:".. .",
      validationMessage:"...",
      colStyle:'sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-1'
    },
    {
      title:"From",
      name:"FromDate",
      type:"date",
      options:null,
      placeholder:"Select Date",
      value: null,
      required:true,
      disabled:false,
      readonly:false,
      minLength:1,
      maxLength:100,
      pattern:"^[0-9]*$",
      patternMessage:"...",
      errorMessage:".. .",
      validationMessage:"...",
      colStyle:'sm:col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-1'
    },
    
  ] 
  openForm(){
    const $modalElement: HTMLElement = document.querySelector('#modalEl')!;

    const modalOptions: ModalOptions = {
      placement: 'center',
      backdrop: 'dynamic',
      backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
      closable: true,
      onHide: () => {
        console.log('modal is hidden');
      },
      onShow: () => {
        console.log('modal is shown');
      },
      onToggle: () => {
        console.log('modal has been toggled');
      }
    }

    const modal: ModalInterface = new Modal($modalElement, modalOptions);

    modal.show();
  }
}
