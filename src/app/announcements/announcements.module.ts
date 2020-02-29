import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementsMainComponent } from './announcements-main/announcements-main.component';

const routes: Routes = [
  {
    path: '', component: AnnouncementsMainComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AnnouncementsMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AnnouncementsModule {
}
