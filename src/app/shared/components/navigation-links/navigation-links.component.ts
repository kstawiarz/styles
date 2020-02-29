import { Component, Input, OnInit } from '@angular/core';
import { NavigationLinkModel } from '../../models/navigation-links.model';

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.scss']
})
export class NavigationLinksComponent implements OnInit {

  @Input() links: NavigationLinkModel[];
  @Input() isMobile: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
