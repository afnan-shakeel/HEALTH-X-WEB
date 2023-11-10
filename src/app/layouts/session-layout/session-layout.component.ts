import { Component } from '@angular/core';
import { Dropdown } from "flowbite";
import type { DropdownOptions, DropdownInterface } from "flowbite";

@Component({
  selector: 'app-session-layout',
  templateUrl: './session-layout.component.html',
  styleUrls: ['./session-layout.component.sass']
})
export class SessionLayoutComponent {

  settingsMenu: boolean = false;
  mobileMenu: boolean = false;
  pageHeader: string = '';
  menusList = [
    {
      id: 1,
      title: "Dashboard",
      isActive: false,
      to: "/dashboard",
 
    },
    {
      id: 3,
      title: "User",
      isActive: false,
      to: "/user",
      subMenu: [
        { id: 1, title: "User Management", to: "/user" }
      ]
    },
    {
      id: 4,
      title: "Employees",
      isActive: false,
      subMenu: [
        { id: 2, title: "Employee Management", to: "/employee" },
      ]
    },
    {
      id: 5,
      title: "Patients",
      isActive: false,
      subMenu: [
        { id: 2, title: "Patient Management", to: "/patient" },
      ]
    },
    {
      id: 2,
      title: "Appointments",
      isActive: false,
      subMenu: [
        // { id:1, title: "Form", to:"/form" },
        { id: 2, title: "General", to: "/user" },
        { id: 2, title: "Walk-in", to: "/user" },
        { id: 2, title: "Pre-Booking", to: "/user" },

      ]
    },
    {
      id: 6,
      title: "Diagnosis",
      isActive: false,
      to: "/diagnose"
 
    },
  ]
  subMenuDropdown(item: any) {
    const $targetEl = document.getElementById(item.id);
    const $triggerEl = document.getElementById(item.id);
    console.log($targetEl?.id)
    // options with default values
    const options: DropdownOptions = {
      placement: 'bottom',
      triggerType: 'click',
      // offsetSkidding: 0,
      // offsetDistance: 10,
      delay: 300,
      onHide: () => {
        console.log('dropdown has been hidden');
      },
      onShow: () => {
        console.log('dropdown has been shown');
      },
      onToggle: () => {
        console.log('dropdown has been toggled');
      }
    };
    const dropdown: DropdownInterface = new Dropdown($targetEl, $triggerEl, options);

    // show the dropdown
    dropdown.show();

  }
  routeTo(index: number, to: any, item: any) {

  }
  toggleDarkMode() {

  }

  _signOut() {

  }
}
