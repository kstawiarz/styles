import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home/home-main/home-main.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeMainComponent
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(module => module.NewsModule)
  },
  {
    path: 'departments',
    loadChildren: () => import('./departments/departments.module').then(module => module.DepartmentsModule)
  },
  {
    path: 'toolkit',
    loadChildren: () => import('./toolkit/toolkit.module').then(module => module.ToolkitModule)
  },
  {
    path: 'advertisements',
    loadChildren: () => import('./ads/ads.module').then(module => module.AdsModule)
  },
  {
    path: 'sections',
    loadChildren: () => import('./sections/sections.module').then(module => module.SectionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
