import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PlayersListComponent } from './players-list/players-list.component';

import { PlayersRoutingModule} from './players.routing';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    PlayersRoutingModule
  ],

  declarations: [
    PlayersListComponent
  ]

})
export class PlayersModule { }