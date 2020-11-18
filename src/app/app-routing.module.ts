import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatuserComponent } from './creatuser/creatuser.component';
import { ListuserComponent } from './listuser/listuser.component';


const routes: Routes = [
  {path: '', component:ListuserComponent},
  {path: 'create', component:CreatuserComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
