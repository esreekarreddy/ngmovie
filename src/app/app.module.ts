import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { VoteTakerComponentComponent } from './vote-taker-component/vote-taker-component.component';
import { VoteComponentComponent } from './vote-component/vote-component.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { GenresComponent } from './pages/genres/genres.component';
import { SliderComponent } from './components/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    VoteTakerComponentComponent,
    VoteComponentComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvShowsComponent,
    GenresComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
