import { Component } from '@angular/core';
import { Dropdown } from "flowbite";
import type { DropdownOptions, DropdownInterface } from "flowbite";
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-layout',
  templateUrl: './session-layout.component.html',
  styleUrls: ['./session-layout.component.sass']
})
export class SessionLayoutComponent {

  settingsMenu: boolean = false;
  mobileMenu: boolean = false;
  profileMenuOpen: boolean = false;
  pageHeader: string = '';
  constructor(private router: Router) { }
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

  routeTo(to: string, item: any) {
    console.log(to, item)
    this.router.navigateByUrl(to);
    item.isActive = false;
  }

  toggleMenuDropdown(value: boolean,item: any) {
    this.menusList.forEach((element: any) => {
      element.isActive = false;
    });

    item.isActive = value;
  }
  
  _signOut() {
    window.localStorage.clear();
    window.sessionStorage.clear();
    // this.router.navigate(['/login']);
  }

  setProfileMenu(value: boolean) {
    this.profileMenuOpen = value;
  }
}
