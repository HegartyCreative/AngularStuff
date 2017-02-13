import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-short-profile',
  templateUrl: './short-profile.component.html',
  styleUrls: ['./short-profile.component.css']
})
export class ShortProfileComponent implements OnInit {

  @Input() profile;

  constructor() { }

  ngOnInit() {
  }

}
