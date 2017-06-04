import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutes } from './feature.routing';
import { FeatureComponent } from './components/feature.component';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutes
  ],
  declarations: [FeatureComponent],
  exports: [
    FeatureComponent
  ]
})
export class FeatureModule { }