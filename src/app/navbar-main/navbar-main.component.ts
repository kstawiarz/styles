import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavigationLinkModel } from '../shared/models/navigation-links.model';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss']
})
export class NavbarMainComponent {

  links: NavigationLinkModel[] = [
    {
      title: 'Homepage',
      url: '/home'
    },
    {
      title: 'News',
      url: '/news'
    },
    {
      title: 'Departments',
      url: '/departments'
    },
    {
      title: 'Toolbox',
      url: '/toolbox'
    },
    {
      title: 'Announcements',
      url: '/announcements'
    },
    {
      title: 'Sections',
      url: '/sections'
    },
    {
      title: 'About',
      url: '/about'
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

}
