import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { navItems } from './_nav';

import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';
import { AuthService } from './service/auth.service';

@Component({
  // tslint:disable-next-line
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IconSetService],
})
export class AppComponent implements OnInit { 
  constructor(
    private router: Router,
    public iconSet: IconSetService,
    public authService:AuthService
  ) {
    // iconSet singleton
    iconSet.icons = { ...freeSet };
  }
  uLoggedIn:boolean;
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  ngOnInit() { 
    this.authService.uLoggedInSubject$.subscribe(resp => this.uLoggedIn = resp)
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  logout(){
    this.authService.logoutUser();
    this.authService.uLoggedInSubject$.next(false);
    this.router.navigate(['/login'])
  }
}
