import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'otp-verify',
    loadChildren: () => import('./otp-verify/otp-verify.module').then(m => m.OtpVerifyPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'my-jobs',
    loadChildren: () => import('./my-jobs/my-jobs.module').then(m => m.MyJobsPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'select-category',
    loadChildren: () => import('./select-category/select-category.module').then(m => m.SelectCategoryPageModule)
  },
  {
    path: 'job-details',
    loadChildren: () => import('./job-details/job-details.module').then(m => m.JobDetailsPageModule)
  },
  {
    path: 'professional-details',
    loadChildren: () => import('./settings/professional-details/professional-details.module').then(m => m.ProfessionalDetailsPageModule)
  },
  {
    path: 'kyc',
    loadChildren: () => import('./settings/kyc/kyc.module').then(m => m.KycPageModule)
  },
  {
    path: 'quotation',
    loadChildren: () => import('./quotation/quotation.module').then(m => m.QuotationPageModule)
  },
  {
    path: 'update-quotation',
    loadChildren: () => import('./update-quotation/update-quotation.module').then(m => m.UpdateQuotationPageModule)
  },
  {
    path: 'reference',
    loadChildren: () => import('./settings/reference/reference.module').then(m => m.ReferencePageModule)
  },
  {
    path: 'schedule-training',
    loadChildren: () => import('./settings/schedule-training/schedule-training.module').then(m => m.ScheduleTrainingPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./settings/reviews/reviews.module').then(m => m.ReviewsPageModule)
  },
  {
    path: 'help-and-support',
    loadChildren: () => import('./settings/help-and-support/help-and-support.module').then(m => m.HelpAndSupportPageModule)
  },
  {
    path: 'update-quotation',
    loadChildren: () => import('./update-quotation/update-quotation.module').then(m => m.UpdateQuotationPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
