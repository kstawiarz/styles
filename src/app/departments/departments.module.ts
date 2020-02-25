import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsMainComponent } from './departments-main/departments-main.component';

const routes: Routes = [
  {
    path: '', component: DepartmentsMainComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [DepartmentsMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DepartmentsModule {
}
