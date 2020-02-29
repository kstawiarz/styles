import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home/home-main/home-main.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
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
    path: 'toolbox',
    loadChildren: () => import('./toolbox/toolbox.module').then(module => module.ToolboxModule)
  },
  {
    path: 'announcements',
    loadChildren: () => import('./announcements/announcements.module').then(module => module.AnnouncementsModule)
  },
  {
    path: 'sections',
    loadChildren: () => import('./sections/sections.module').then(module => module.SectionsModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(module => module.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
