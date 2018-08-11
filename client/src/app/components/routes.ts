import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandButtonComponent } from './hand-button/hand-button.component';
import { SpaceshipComponent } from './spaceship/spaceship.component';
import { BoardingComponent } from './boarding/boarding.component';



export const routes: Routes = [
        { path: 'handButton', component: HandButtonComponent},
        { path: 'spaceship', component: SpaceshipComponent},
        { path: 'boarding', component: BoardingComponent}
      ];

