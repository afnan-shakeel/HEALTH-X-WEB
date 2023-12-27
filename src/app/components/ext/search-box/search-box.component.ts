import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedDataService } from '../../../services/shared-data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.sass']
})
export class SearchBoxComponent {
  @Output() eventEmitter = new EventEmitter<any>();
  @Input() eventId: string | undefined;
  @Input() seachBoxTitle: string = "Search Box";
  @Input() searchBoxObj: any[] = [];
  form: FormGroup;
  fields: any[] = this.searchBoxObj;
  constructor(private fb: FormBuilder, private sharedService: SharedDataService) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.searchBoxObj.forEach(field => {
      this.form.addControl(field.name, this.fb.control(null));
    });
  }
  submit() {
    console.log(this.form.value)

    var values = this.form.value;
    const transformedValues: any = {};
    for (const key in values) {
      if (typeof values[key] === 'string') {
        transformedValues[key] = values[key].trim();
      } else {
        transformedValues[key] = values[key];
      }
    }
    this.eventEmitter.emit({ name: this.eventId, data: transformedValues });

    // Trigger the valueChanges observable by calling updateValueAndValidity
    this.form.updateValueAndValidity();
  }
  reset() {
    this.form.reset()
  }
}
