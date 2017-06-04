import { FeatureModel } from '../models/feature.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  private itemList: FeatureModel[];
  constructor() { }

  ngOnInit() {
    this.itemList = [];
    console.log(this.itemList);
    this.itemList.push(new FeatureModel('A', 'SampleA'));
    this.itemList.push(new FeatureModel('B', 'SampleB'));
    this.itemList.push(new FeatureModel('C', 'SampleC'));
  }
}
