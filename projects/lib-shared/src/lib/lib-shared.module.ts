import { NgModule } from '@angular/core';
import { TruncatePipe } from './pipes/truncate.pipe';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TruncatePipe],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    TruncatePipe,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class LibSharedModule { }
