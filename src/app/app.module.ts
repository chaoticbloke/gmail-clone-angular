import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthHtppInterceptor } from './auth/auth-htpp-interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthHtppInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
