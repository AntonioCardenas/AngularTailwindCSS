import { Component, OnInit } from '@angular/core';
import { OpenLinkService } from '../open-link.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(private link: OpenLinkService) { }

  ngOnInit(): void {
  }

  navigate(url): void {
    this.link.open(url);
  }


}
