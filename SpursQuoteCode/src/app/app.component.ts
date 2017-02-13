import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Welcome to my App!';
  users = [
  {
    id: 47,
    name: "Sean",
    username: "Happy Coder",
    image: 'http://i.dailymail.co.uk/i/pix/2017/02/07/18/3CD2A09400000578-0-image-m-16_1486491448252.jpg';
  },

  {
    id: 33,
    name: "Jack",
    username: "Fast runner"
  },

  {
    id: 10,
    name: "Lucy",
    username: "Lovely girl"
  },

  {
    id: 88,
    name: "Reagan",
    username: "Big boozer"
  }
  ];

  activeUser;

  selectUser(user){
    this.activeUser = user;
  }
}
