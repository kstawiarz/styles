import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SectionsMainComponent } from './sections-main/sections-main.component';

const routes: Routes = [
  {
    path: '', component: SectionsMainComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [SectionsMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SectionsModule {
}
