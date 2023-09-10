import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './component/home/home.module';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ServerErrorComponent } from './component/server-error/server-error.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from "./component/shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        ServerErrorComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HomeModule,
        SharedModule,
        ToastrModule.forRoot({
            timeOut: 1000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
    ]
})
export class AppModule {}
