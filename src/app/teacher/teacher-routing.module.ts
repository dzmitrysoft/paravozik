import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherPage } from './teacher.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TeacherPage,
    children: [
      {
        path: 'works',
        loadChildren: () => import('./works/works.module').then( m => m.WorksPageModule)
      },
      {
        path: 'students',
        loadChildren: () => import('./students/students.module').then( m => m.StudentsPageModule)
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherPageRoutingModule {}
