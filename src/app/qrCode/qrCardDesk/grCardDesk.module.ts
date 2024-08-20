import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QrCardDeskComponent } from './qrCardDesk.component';
import { QrCardDeskModule } from './qrCardDesk-routing.module';



@NgModule({
    declarations: [
        QrCardDeskComponent,
    ],
 
    imports: [
    CommonModule,
    QrCardDeskModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class qrCardRealModule { }

