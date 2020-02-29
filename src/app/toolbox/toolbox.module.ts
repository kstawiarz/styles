import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolboxMainComponent } from './toolbox-main/toolbox-main.component';
import { CategoriesListComponent } from './toolbox-main/components/categories-list/categories-list.component';
import { CategoriesCardComponent } from './toolbox-main/components/categories-card/categories-card.component';
import { SharedModule } from '../shared/shared.module';
import { CategoriesService } from './toolbox-main/services/categories.service';

const routes: Routes = [
  {
    path: '',
    component: ToolboxMainComponent,
    children: [
      {
        path: '',
        component: CategoriesListComponent
      }
    ]
  }
];

@NgModule({
  declarations: [ToolboxMainComponent, CategoriesListComponent, CategoriesCardComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [CategoriesService]
})
export class ToolboxModule {
}
