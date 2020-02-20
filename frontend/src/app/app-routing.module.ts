import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FindpersonComponent } from './person/findperson/findperson.component';
import { CreatepersonComponent } from './person/createperson/createperson.component';
import { PersonlistComponent } from './person/personlist/personlist.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'find', component: FindpersonComponent},
  {path:'create', component: CreatepersonComponent},
  {path:'list', component: PersonlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
