import { nameLabel } from './pipes/name-label.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SimilarListComponent } from './similar-list/similar-list.component';
import { ShortProfileComponent } from './short-profile/short-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SimilarListComponent,
    ShortProfileComponent,
    nameLabel
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
