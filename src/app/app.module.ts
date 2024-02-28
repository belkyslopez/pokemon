import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { MayusculaPipe } from './mayuscula.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    PokemonComponent,
    MayusculaPipe
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
