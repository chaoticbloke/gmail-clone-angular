import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailResolverService } from './email-resolver.service';
import { EmailShowComponent } from './email-show/email-show.component';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

const routes: Routes = [
  {
    path:'', component:InboxHomeComponent,
    children:[
      {path:'not-found', component:NotFoundComponent},
      {path:'',component:PlaceholderComponent},
      {
        path:':id', component:EmailShowComponent,
        resolve:{
          //emailDetails is data and source of this data is EmailResolverService
          emailDetails:EmailResolverService
        }
      },
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
