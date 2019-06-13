import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthService } from './auth.service';
import { LibSharedModule } from 'lib-shared';
import { LibCoreModule } from 'lib-core';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    LibSharedModule,
    LibCoreModule
  ],
  providers: [
    AuthService
  ]
})
export class LoginModule { }
