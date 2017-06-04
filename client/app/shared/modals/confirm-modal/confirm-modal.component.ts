import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-confirm-modal',
  templateUrl: 'confirm-modal.component.html'
})

export class ConfirmModalComponent implements OnInit {
  headerText: string;
  bodyText: string;
  submitText: string;
  cancelText: string;
  alertType: string;

  @ViewChild('confirmModal')
  public modal: ModalDirective;

  @Output() 
  onSubmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  info(headerText = '', bodyText = '', submitText = 'OK', cancelText = 'Cancel'){
    this.alertType = 'info';
    this.show(headerText, bodyText, submitText, cancelText);
  }
  error(headerText = '', bodyText = '', submitText = 'OK', cancelText = 'Cancel'){
    this.alertType = 'error';
    this.show(headerText, bodyText, submitText, cancelText);
  }
  success(headerText = '', bodyText = '', submitText = 'OK', cancelText = 'Cancel'){
    this.alertType = 'success';
    this.show(headerText, bodyText, submitText, cancelText);
  }
  warn(headerText = '', bodyText = '', submitText = 'OK', cancelText = 'Cancel'){
    this.alertType = 'warn';
    this.show(headerText, bodyText, submitText, cancelText);
  }
  open(headerText = '', bodyText = '', submitText = 'OK', cancelText = 'Cancel') {
    this.alertType = '';
    this.show(headerText, bodyText, submitText, cancelText);
  }

  private show(headerText = '', bodyText = '', submitText = 'OK', cancelText = 'Cancel') {
    this.headerText = headerText;
    this.bodyText = bodyText;
    this.submitText = submitText;
    this.cancelText = cancelText;
    this.modal.show();
  }

  submit(): void {
    this.onSubmit.emit(true);
    this.close();
  }

  close(): void {
    this.modal.hide();
  }
}
