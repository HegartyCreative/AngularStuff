import { Component } from '@angular/core';
import { OfferService } from './offer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor(private _offerService: OfferService) {

}

  ngOnInit() {
        this.title = this._offerService.message();
    }
}
