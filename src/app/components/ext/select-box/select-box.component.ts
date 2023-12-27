import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-box.component.html',
  styleUrl: './select-box.component.sass'
})
export class SelectBoxComponent {
  constructor() { }
  selectedOptionString : any = null;
  selectedOption : any = [];
  @Input() padding: any = {x:'default', y: 'default'};
  @Input() options: any[] = [];
  @Input() label: string = 'Select';
  @Input() allowMultiSelect: boolean = false;
  @Input() initialVal: any;
  @Output() selectedOptionChange = new EventEmitter<any>();
  isDropdownOpen: boolean = false;
  ngOnInit(): void {
    if(this.initialVal){
      this.selectedOptionString = this.options.filter((item) => item.value === this.initialVal.value).map((item) => item.name).join(', ');
      this.selectedOption = this.options.filter((item) => item.value === this.initialVal.value);
      this.options.forEach((item) => {
        item.isSelected = false;
      });
      this.initialVal.isSelected = true;
    }
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  selectOption(option: any) {
    if(this.allowMultiSelect){
      option.isSelected = !option.isSelected;
      this.selectedOptionString = this.options.filter((item) => item.isSelected).map((item) => item.name).join(', ');
      this.selectedOption = this.options.filter((item) => item.isSelected);
      this.selectedOptionChange.emit(this.selectedOption);
      return;
    }
    this.selectedOptionString = option.name;
    this.selectedOption = [option];
    this.options.forEach((item) => {
      item.isSelected = false;
    });
    option.isSelected = true;
    this.toggleDropdown();
    this.selectedOptionChange.emit(this.selectedOption);
  }
}
