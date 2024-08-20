import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrCardDeskComponent } from './qrCode/qrCardDesk/qrCardDesk.component';

const routes: Routes = [
  {
    path: 'qrCardDeskView',
    loadChildren: () => import('./qrCode/qrCardDesk/grCardDesk.module').then(m => m.qrCardRealModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
