import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component';

import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
