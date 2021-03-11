import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
