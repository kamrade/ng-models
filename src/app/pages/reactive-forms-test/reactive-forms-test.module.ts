import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

import { ReactiveFormsPageComponent } from './reactive-forms-page/reactive-forms-page.component';
import { ReactiveFormsBasicWidgetComponent } from './reactive-forms-basic-widget/reactive-forms-basic-widget.component';
import { DynamicFormsWidgetComponent } from './dynamic-forms-widget/dynamic-forms-widget.component';
import { BooleanIndicatorComponent } from './boolean-indicator/boolean-indicator.component';

const routes: Routes = [{
  path: '',
  component: ReactiveFormsPageComponent,
  children: [{
    path: '',
    redirectTo: 'basic-forms',
    pathMatch: 'full'
  }, {
    path: 'basic-forms',
    component: ReactiveFormsBasicWidgetComponent
  }, {
    path: 'dynamic-forms',
    component: DynamicFormsWidgetComponent
  }]
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedComponentsModule,
  ],
  declarations: [
    ReactiveFormsPageComponent,
    ReactiveFormsBasicWidgetComponent,
    DynamicFormsWidgetComponent,
    BooleanIndicatorComponent,
  ]
})
export class ReactiveFormsTestModule { }
