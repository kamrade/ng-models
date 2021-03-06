import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

import { StudentsService, SubjectsService, TeachersService  } from './services';

import { UsingStorePageComponent } from './using-store-page/using-store-page.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { SubjectsListComponent } from './subjects-list/subjects-list.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';

const routes: Routes = [{
  path: '',
  component: UsingStorePageComponent,
  children: [{
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  }, {
    path: 'students',
    component: StudentsListComponent
  }, {
    path: 'subjects',
    component: SubjectsListComponent
  }, {
    path: 'teachers',
    component: TeachersListComponent
  }]
}];


@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    StudentsService, SubjectsService, TeachersService
  ],
  declarations: [
    UsingStorePageComponent,
    StudentsListComponent,
    SubjectsListComponent,
    TeachersListComponent
  ]
})
export class UsingStoreModule { }
