import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },

      {
        path: 'myjobs',
        loadChildren: () => import('../../app/my-jobs/my-jobs.module').then(m => m.MyJobsPageModule)
      },

      {
        path: 'settings',
        loadChildren: () => import('../../app/settings/settings.module').then(m => m.SettingsPageModule)
      },

      {
        path: 'payments',
        loadChildren: () => import('../../app/payments/payments.module').then(m => m.PaymentsPageModule)
      },

      {
        path: 'notifications',
        loadChildren: () => import('../../app/notification/notification.module').then(m => m.NotificationPageModule)
      },




      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
