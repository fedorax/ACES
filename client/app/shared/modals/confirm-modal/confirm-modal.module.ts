import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './confirm-modal.component';

import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
  ],
  declarations: [ConfirmModalComponent],
  exports: [ConfirmModalComponent]
})
export class ConfirmModalModule { }