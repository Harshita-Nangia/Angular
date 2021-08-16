import { EmployeesComponent } from './components/employees/employees.component';
import { PostsComponent } from './components/posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:"/posts", pathMatch:"full"},
  { path:"posts", component: PostsComponent},
  { path:"employees", component: EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
