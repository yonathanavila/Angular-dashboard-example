import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { DatabaseComponent } from './components/database/database.component'


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'database',
    component: DatabaseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
