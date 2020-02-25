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
      title: 'Strona główna',
      url: '/home'
    },
    {
      title: 'Wiadomości',
      url: '/news'
    },
    {
      title: 'Departamenty',
      url: '/departments'
    },
    {
      title: 'Niezbędnik',
      url: '/toolkit'
    },
    {
      title: 'Ogłoszenia',
      url: '/advertisements'
    },
    {
      title: 'Sekcje',
      url: '/sections'
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
