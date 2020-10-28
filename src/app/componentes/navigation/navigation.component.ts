import { Component, OnInit } from '@angular/core';
import { OpenLinkService } from '../open-link.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private link: OpenLinkService) { }

  ngOnInit(): void {
  }

  navigate(url): void {
    this.link.open(url);
  }


}
