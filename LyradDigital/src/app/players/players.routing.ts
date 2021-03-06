import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PlayersListComponent } from './players-list/players-list.component';



const routes: Routes = [
        {
          path: 'players',
          component: PlayersListComponent
        }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PlayersRoutingModule { }