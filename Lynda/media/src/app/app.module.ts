import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaListComponent } from './media-list/media-list.component';
import { FavoriteDirective } from './favourite.directive';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaListComponent,
    FavoriteDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
