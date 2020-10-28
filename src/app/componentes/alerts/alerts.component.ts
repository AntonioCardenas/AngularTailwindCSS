import { Component, OnInit } from '@angular/core';
import { OpenLinkService } from '../open-link.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  constructor(private link: OpenLinkService) { }

  ngOnInit(): void {
  }

  navigate(url): void {
    this.link.open(url);
  }

}
