
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatedataComponent } from './createdata/createdata.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'create',component:CreatedataComponent},
  {path:'display',component:DisplaydataComponent },
  {path:'add/:id',component:CreatedataComponent}, 
  {path:'edit/:id',component:CreatedataComponent},
  {path:'list/:id',component:ListComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
