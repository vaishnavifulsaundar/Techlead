import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UserdetaislComponent } from './userdetaisl/userdetaisl.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
 {path:'toolbar',component:ToolbarComponent},
 {path:'sidenav',component:SidenavComponent},
 {path:'userdetails',component:UserdetaislComponent},
 {path:'layout',component:LayoutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
