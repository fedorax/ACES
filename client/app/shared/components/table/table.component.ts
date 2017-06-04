import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    @Input()
    showCheckbox: boolean;
    @Input()
    showEdit: boolean;
    @Input()
    showDelete: boolean;
    @Input()
    itemHeader: String[];
    @Input()
    itemBody: String[][];

  constructor() { }

  ngOnInit() {
  }

}
