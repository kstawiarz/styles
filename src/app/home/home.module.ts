import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home-main/home-main.component';

const routes: Routes = [
  {
    path: '', component: HomeMainComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [HomeMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule {
}
