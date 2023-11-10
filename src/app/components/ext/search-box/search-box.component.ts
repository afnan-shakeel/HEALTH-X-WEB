import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.sass']
})
export class SearchBoxComponent {

  @Input() seachBoxTitle: string = "Search Box";
  @Input() searchBoxObj: any[] = [];
  form: FormGroup;
  fields: any[] = this.searchBoxObj;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.searchBoxObj.forEach(field => {
      this.form.addControl(field.name, this.fb.control(null));
    });
    console.log(this.form)

  }
  submit() {
    console.log(this.form.value)
  }
  reset(){
    this.form.reset()
  }
}
