import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { CoreRoutingModule } from './core-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [NotFoundComponent, ServerErrorComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgxSpinnerModule
  ],
  exports:[NgxSpinnerModule]
})
export class CoreModule {}
