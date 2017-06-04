import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableRoutes } from './table.route';

@NgModule({
  imports: [
    CommonModule,
    TableRoutes
  ],
  declarations: [TableComponent],
  exports: [TableComponent]
})
export class TableModule { }