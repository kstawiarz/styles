import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolkitMainComponent } from './toolkit-main/toolkit-main.component';
import { CategoriesListComponent } from './toolkit-main/components/categories-list/categories-list.component';
import { CategoriesCardComponent } from './toolkit-main/components/categories-card/categories-card.component';
import { SharedModule } from '../shared/shared.module';
import { CategoriesService } from './toolkit-main/services/categories.service';

const routes: Routes = [
  {
    path: '',
    component: ToolkitMainComponent,
    children: [
      {
        path: '',
        component: CategoriesListComponent
      }
    ]
  }
];

@NgModule({
  declarations: [ToolkitMainComponent, CategoriesListComponent, CategoriesCardComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [CategoriesService]
})
export class ToolkitModule {
}
