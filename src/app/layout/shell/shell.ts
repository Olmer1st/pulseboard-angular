import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { NAV_ITEMS } from '../../core/mock-data';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Icon],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class Shell {
  private readonly router = inject(Router);

  protected readonly navItems = NAV_ITEMS;
  protected readonly mobileNavOpen = signal(false);

  protected readonly pageHeading = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.currentHeading()),
      startWith(this.currentHeading()),
    ),
    { initialValue: 'Dashboard' },
  );

  constructor() {
    effect(() => {
      document.body.classList.toggle('nav-open', this.mobileNavOpen());
    });
  }

  openNav(): void {
    this.mobileNavOpen.set(true);
  }

  closeNav(): void {
    this.mobileNavOpen.set(false);
  }

  private currentHeading(): string {
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return (route.data['heading'] as string) ?? 'Dashboard';
  }
}
