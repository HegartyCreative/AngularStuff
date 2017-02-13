import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  onMediaItemDelete(mediaItem){

  }

  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: 879776,
    isFavorite: false
  };
}