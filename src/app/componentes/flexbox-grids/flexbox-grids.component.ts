import { Component, OnInit } from '@angular/core';
import { OpenLinkService } from '../open-link.service';

@Component({
  selector: 'app-flexbox-grids',
  templateUrl: './flexbox-grids.component.html',
  styleUrls: ['./flexbox-grids.component.scss']
})
export class FlexboxGridsComponent implements OnInit {

  constructor(private link: OpenLinkService) { }

  ngOnInit(): void {
  }

  navigate(url): void {
    this.link.open(url);
  }
}
