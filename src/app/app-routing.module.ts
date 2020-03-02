import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cows',
    pathMatch: 'full'
  },
  {
    path: 'cows',
    loadChildren: './modules/cow/cow.module#CowModule',
    data: { title: 'Cows title' }
  },
  {
    path: '**',
    redirectTo: 'cows'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
