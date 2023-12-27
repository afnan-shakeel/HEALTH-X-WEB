import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-user-role-form',
  templateUrl: './user-role-form.component.html',
  styleUrl: './user-role-form.component.sass'
})
export class UserRoleFormComponent {
  form: FormGroup;
  scopes: any[] = [];
  roles: any[] = [];
  constructor( private fb: FormBuilder, private axiosService: AxiosService) {
    this.form = this.fb.group({
      role: [''],
      scopes:[]
    });
   }

  ngOnInit(): void {
    this.fetchData()
  }

  async fetchData() {
    const scopeRes = await this.axiosService.getData('/role/scopes')
    console.log(scopeRes.data)
    if (scopeRes.statuscode !== 200) {
      window.alert(scopeRes.message)
    }
    this.scopes = scopeRes.data 

    const roleRes = await this.axiosService.getData('/role/roles')
    if (roleRes.statuscode !== 200) {
      window.alert(roleRes.message)
    }
    this.roles = roleRes.data 
  }
  submit() {
    console.log(this.form.value)
  }
}
