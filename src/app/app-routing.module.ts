import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './content/about/about.component';
import { TetrisComponent } from './content/tetris/tetris.component';
import { NineStarsComponent } from './content/nine-stars/nine-stars.component';
import { CardmatchingComponent } from './content/cardmatching/cardmatching.component';
import { ColorLinesComponent } from './content/lines/lines';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AboutComponent },
  { path: 'tetris', component: TetrisComponent },
  { path: 'nine-stars', component: NineStarsComponent },
  { path: 'cardmatching', component: CardmatchingComponent },
  { path: 'color-lines', component: ColorLinesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
