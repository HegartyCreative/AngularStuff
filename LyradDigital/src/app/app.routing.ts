import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { NotFoundComponent } from './not-found.component';



const routes: Routes = [
        {
          path: '',
          component: PlayersListComponent
        },

        {
          path: '**',
          component: NotFoundComponent
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }