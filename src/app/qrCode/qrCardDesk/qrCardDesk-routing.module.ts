import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QrCardDeskComponent } from './qrCardDesk.component';


const routes: Routes = [
  {
    path: '',
    component: QrCardDeskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrCardDeskModule {}

