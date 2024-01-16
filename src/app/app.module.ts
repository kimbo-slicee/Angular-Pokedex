import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PokemonModule} from "./pokemon/pokemon.module";
import { NavBarComponent } from './share/nav-bar/nav-bar.component';
import { FooterComponent } from './share/footer/footer.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {ApiService} from "./pokemon/services/api.service";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PokemonModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ApiService,{dataEncapsulation:false})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
