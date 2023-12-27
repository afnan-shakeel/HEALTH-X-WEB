import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  form: FormGroup;
  constructor(private axiosService : AxiosService, private fb : FormBuilder, private router : Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      instCode: ['']
    });
    // this.router = router;
  }

  reset() {
    this.form.reset();
  }

  async submit() {
    if (!this.form.valid) {
      window.alert("required fields are missing");
      return;
    }
    console.log(this.form.value);
    const loginData = {
      username: this.form.value.username,
      passcode: this.form.value.password,
      inst_code: this.form.value.instCode
    };

    const res = await this.axiosService.postAuth('/auth/login', loginData).catch((err) => {
      console.log(err);
      // window.alert(err.response.data.message);
      return err.response.data;
    });
    console.log(res);
    if(res.statuscode !== 200){
      window.alert(res.message);
      return;
    }
    this.router.navigate(['/dashboard']);
  }

  

}
