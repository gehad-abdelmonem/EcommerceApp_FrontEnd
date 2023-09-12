import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './component/shared/shared.module';
import { ErrorInterceptor } from './component/core/interceptors/error.interceptor';
import { CoreModule } from './component/core/core.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingInterceptor } from './component/core/interceptors/loading.interceptor';
@NgModule({
  declarations: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi: true}
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule
  
  ],
})
export class AppModule {}
