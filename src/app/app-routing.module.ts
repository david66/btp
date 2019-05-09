import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'findyourrole',
    loadChildren: './components/findyourrole/findyourrole.module#FindyourroleModule'},
  { path: 'role/:id',
    loadChildren: './components/role/role.module#RoleModule'
  },
  { path: 'apply',
    loadChildren: './components/apply/apply.module#ApplyModule'
  },
  { path: 'apply-process',
    loadChildren: './components/apply-process/apply-process.module#ApplyProcessModule'
  },
  { path: 'tokyo2020',
    loadChildren: './components/tokyo2020/tokyo2020.module#Tokyo2020Module'
  },
  { path: 'contact',
    loadChildren: './components/contact/contact.module#ContactModule'
  },
  { path: 'stories',
    loadChildren: './components/stories/stories.module#StoriesModule'
  },
  { path: 'subscribe/confirm/:id1/:id2', component: SubscribeComponent },
  { path: 'confirmation',
    loadChildren: './components/confirmation/confirmation.module#ConfirmationModule'
  },
  { path: 'apply-closed',
    loadChildren: './components/apply-closed/apply-closed.module#ApplyClosedModule'
  },
  { path: 'error/:id',
    loadChildren: './components/error/error.module#ErrorModule'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
