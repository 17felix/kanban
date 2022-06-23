import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/shared/home-page/home-page.component';
import { AuthGuard } from './modules/user/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    component: HomePageComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/user/user.module').then(m => 
    m.UserModule)
  },
  {
    path: 'kanban',
    loadChildren: () => import('./modules/kanban/kanban.module').then(m => 
    m.KanbanModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
