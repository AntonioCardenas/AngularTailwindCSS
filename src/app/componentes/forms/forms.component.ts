import { Component, OnInit } from '@angular/core';
import { OpenLinkService } from '../open-link.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(private link: OpenLinkService) { }

  ngOnInit(): void {
  }

  navigate(url): void {
    this.link.open(url);
  }


}
