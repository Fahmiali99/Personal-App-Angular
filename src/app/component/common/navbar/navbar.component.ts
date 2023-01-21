import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Output()
  readonly darkModeSwitched = new EventEmitter<boolean>();

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  LogoNavbar: string;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.LogoNavbar = '/assets/image/logo.png';
  }

  onDarkModeSwitched({ checked }: MatSlideToggleChange) {
    this.darkModeSwitched.emit(checked);
  }

  toggleTheme({ checked }: MatSlideToggleChange) {
    this.darkModeSwitched.emit(checked);
  }
  // navbar open/close
  navbarOpen = false;
  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

  navbar: any[] = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Portfolio',
      href: '/portfolio',
    },
    {
      title: 'Resume',
      href: '/resume',
    },
  ];
}
