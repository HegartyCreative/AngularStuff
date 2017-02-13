import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TeamListComponent } from './team-list/team-list.component';

import { TeamRoutingModule} from './team.routing';

@NgModule({
  declarations: [
    TeamListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TeamRoutingModule
  ]
  
})
export class TeamsModule { }