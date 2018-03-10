import { NgModule } from '@angular/core';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { FormsModule } from '@angular/forms';
import { AuthRouting } from './auth-routing.module';

@NgModule({
  declarations: [
    SinginComponent,
    SingupComponent
  ],
  imports: [
    FormsModule,
    AuthRouting
  ],
  exports: [
    AuthRouting
  ]
})
export class AuthModule {}
