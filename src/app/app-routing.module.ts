import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './theme/home/home.component';
import { TermComponent } from './theme/term/term.component';
import { CarddetailComponent } from './theme/carddetail/carddetail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'term', component: TermComponent },
  { path: 'carddetail', component: CarddetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
