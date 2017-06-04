import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';

import { environment } from './configs/enviroments/enviroment';


import { AuthToken } from './services/auth/auth.token';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth.guard';

import { routes } from './app.routing';

import { HomeModule } from './modules/home/';
import { FeatureModule } from './modules/feature/';
import { LoginModule } from './modules/login/';
import { LogoutModule } from './modules/logout/';
import { SignupModule } from './modules/signup/';
import { UserModule } from './modules/user/';

import { AppComponent } from './components/app/';
import { HeaderComponent } from './components/header/';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule.forRoot(),

    // Import Modules
    HomeModule,
    FeatureModule,
    LoginModule,
    LogoutModule,
    SignupModule,
    UserModule,

    // Default Root
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    AuthGuard,
    AuthService,
    AuthToken
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
