import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { GridComponent } from './grid/grid.component';
import { ExperienceComponent } from './experience/experience.component';
import { PhotosComponent } from './photos/photos.component';
import { ContextComponent } from './context/context.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    GridComponent,
    ExperienceComponent,
    PhotosComponent,
    ContextComponent,
   CarouselBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
