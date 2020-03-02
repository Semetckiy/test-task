import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CowListViewComponent } from './components/cow-list-view/cow-list-view.component';


const routes: Routes = [
  {
    path: '',
    component: CowListViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CowRoutingModule { }
