import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';
//import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { GridComponent } from './grid/grid.component';
import { ExperienceComponent } from './experience/experience.component';
import { PhotosComponent } from './photos/photos.component';
import { ContextComponent } from './context/context.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { RegistrationComponent } from './registration/registration.component';
//import {PhotosComponent } from './photos/photos.component';
const appRoutes: Routes = [
  { path: 'aboutus', component: PhotosComponent }, 
  { path: 'registration', component: RegistrationComponent },  
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    GridComponent,
    ExperienceComponent,
    PhotosComponent,
    ContextComponent,
   CarouselBasicComponent,
   RegistrationComponent
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      //appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
   
   
      { path: 'aboutus', component: PhotosComponent },
      { path: 'registration', component: RegistrationComponent }, 
       ]   )
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
