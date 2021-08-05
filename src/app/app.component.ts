import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { navItems } from './_nav';

import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';
import { AuthService } from './service/auth.service';
import { StorageService } from './service/storage.service';

@Component({
  // tslint:disable-next-line
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IconSetService],
})
export class AppComponent implements OnInit { 
  storage: Storage;
  constructor(
    private router: Router,
    public iconSet: IconSetService,
    public authService:AuthService,
    private storageService: StorageService
  ) {
    // iconSet singleton
    iconSet.icons = { ...freeSet };
    this.storage = this.storageService.get();
  }
  uLoggedIn:boolean;
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  ngOnInit() { 
    const uData = this.storage.getItem('userData');
    if(uData && uData != '4'){
      debugger
      this.authService.uLoggedInSubject$.next(true)
      this.authService.uLoggedInSubject$.subscribe(resp => this.uLoggedIn = resp)
  } else {
    this.storage.setItem('userData','4')
  }
    
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
