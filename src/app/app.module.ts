import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './content/about/about.component';
import { TetrisComponent } from './content/tetris/tetris.component';
import { AppRoutingModule } from './app-routing.module';
import { NineStarsComponent } from './content/nine-stars/nine-stars.component';
import { CardmatchingComponent } from './content/cardmatching/cardmatching.component';
import { ColorLinesComponent } from './content/lines/lines';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    TetrisComponent,
    NineStarsComponent,
    CardmatchingComponent,
    ColorLinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
