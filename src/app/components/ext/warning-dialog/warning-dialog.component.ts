import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-warning-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './warning-dialog.component.html',
  styleUrl: './warning-dialog.component.sass'
})
export class WarningDialogComponent {

  @Input() warningData: any;

  @Output() cancelDialog = new EventEmitter<any>();
  @Output() confirmDialog = new EventEmitter<any>();

  cancel(){
    this.cancelDialog.emit()
  }
  confirm(){
    this.confirmDialog.emit(this.warningData.data)
  }
}
