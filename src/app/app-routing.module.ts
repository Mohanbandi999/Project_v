import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpComponent } from './http/http.component';
import { PipesComponent } from './pipes/pipes.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
 {path:'http',component:HttpComponent},
 {path:'subject',component:SubjectComponent},
 {path:'pipes',component:PipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
