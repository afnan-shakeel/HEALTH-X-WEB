import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AxiosService } from 'src/app/services/axios.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass'],
})
export class UserFormComponent {
  userForm: FormGroup;
  @Output() userFormClose = new EventEmitter<any>();
  @Input() editData: any;
  constructor(private formBuilder: FormBuilder, private axiosService: AxiosService) {
    this.userForm = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      mobile: ['', Validators.required],
      passcode: ['', Validators.required],
      role: [],
      roleIds: [],
      additionalScopes: [],
      scopeIds: []
    });
  }
  isRoleModalOpen: boolean = false;
  roleOptions: any[] = [];
  scopeOptions: any[] = [];
  roleScopes: any = null;
  ngOnInit(): void {
    console.log('xx', this.editData)
    if (this.editData) {
      this.userForm.patchValue({
        id: this.editData.id,
        username: this.editData.username,
        mobile: this.editData.mobile,
      })
    }
    this.fetchRoleScope()
  }

  async fetchRoleScope() {
    const roleRes = await this.axiosService.getData('/role/master-roles')
    const scopeRes = await this.axiosService.getData('/role/master-scopes')
    if (roleRes.statuscode !== 200) {
      window.alert(roleRes.message)
    }
    if (scopeRes.statuscode !== 200) {
      window.alert(scopeRes.message)
    }
    console.log('roleRes', roleRes)
    console.log('scopeRes', scopeRes)
    this.roleOptions = roleRes.data.map((item: any) => {
      return {
        value: item.id,
        name: item.name,
        isSelected: false
      }
    });
    this.scopeOptions = scopeRes.data.map((item: any) => {
      return {
        value: item.id,
        name: item.name,
        isSelected: false
      }
    });
  }

  async fetchScopeByRole(roleId: any) {
    console.log('fetchScopeByRole', roleId)
    if (!roleId) return;
    const res = await this.axiosService.getData(`/role/master-scope-by-role?role_id=${roleId}`)
    if (res.statuscode !== 200) {
      window.alert(res.message)
    }
    this.roleScopes = res.data
    
    // Filter scopeOptions to values that are not in roleScopes
    this.scopeOptions = this.scopeOptions.filter((scope) => {
      return !this.roleScopes.some((roleScope: any) => roleScope.id === scope.value);
    });
  }

  setRoleModalOpen( value: boolean) {
    this.isRoleModalOpen = !this.isRoleModalOpen;
  }
  closeModal() {
    this.userFormClose.emit({ data: false })
  }

  async submit() {
    if (this.userForm.invalid) {
      window.alert("Please fill all the fields")
      return;
    }
    console.log(this.userForm.value);
    let obj = this.userForm.value
    delete obj.passcode
    const res = await this.axiosService.postAuth('/auth/register', this.userForm.value)
    if (res.statuscode !== 200) {
      window.alert(res.message)
    }
  }

  handleRoleSelectEvent(event: any) {
    console.log('handleSelectEvent', event);
    this.userForm.patchValue({
      roleIds: event.map((x: any) => x.id)
    })
    this.fetchScopeByRole(event[0].id)
  }
  handleScopeSelectEvent(event: any) {
    console.log('handleSelectEvent', event);
    this.userForm.patchValue({
      scopeIds: event.map((x: any) => x.id)
    })
  }
}


