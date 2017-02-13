import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-similar-list',
  templateUrl: './similar-list.component.html',
  styleUrls: ['./similar-list.component.css']
})
export class SimilarListComponent implements OnInit {

  profiles = [
    'Hot man',
    'Hot woman',
    'Hot dog'
  ];

  constructor() { }

  ngOnInit() {
  }

}
