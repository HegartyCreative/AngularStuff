import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CribsListingComponent } from './cribs-listing/cribs-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CribsListingComponent,
    CribCardComponent
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
