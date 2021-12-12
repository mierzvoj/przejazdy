import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TransitReserveComponent } from './components/transits/transit-reserve/transit-reserve.component';
=======
import { OverviewComponent } from './components/overview/overview.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
import { TransitsComponent } from './components/transits/transits.component';
import { UserregComponent } from './components/userreg/userreg.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {
    path: '',
    // component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'register',
<<<<<<< HEAD
        component: UserregComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
=======
        component: UserregComponent
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
      },
      {
        path: 'overview',
        canActivate: [AuthGuard],
        component: OverviewComponent,
        children: [
          {
            path: '',
            redirectTo: 'schedule',
            pathMatch: 'full',
          },
          {
            path: 'schedule',
            component: ScheduleComponent,
          },
          {
            path: 'transits',
            component: TransitsComponent,
<<<<<<< HEAD
            children: [
              {
                path: '',
                redirectTo: 'transit-reserve',
                pathMatch: 'full',
              },
              {
                path: 'transit-reserve',
                component: TransitReserveComponent,
              },
              {
                path: 'transits',
                component: TransitsComponent,
              },
            ],
          },
=======
          }
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
        ],
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
<<<<<<< HEAD
export class AppRoutingModule {}
=======
export class AppRoutingModule { }
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
