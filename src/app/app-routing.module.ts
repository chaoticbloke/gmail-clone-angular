import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {
    path:'inbox',loadChildren:()=>import('./inbox/inbox.module').then(m=>m.InboxModule)
  },
  {path:'signout', component:SignoutComponent},
  {path:'signup', component:SignupComponent},
  {path:'',component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
