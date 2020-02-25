import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsMainComponent } from './news-main/news-main.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: NewsMainComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [NewsMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NewsModule {
}
