import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  protected readonly language = signal('en-US');
  protected readonly timezone = signal('America/New_York');
  protected readonly theme = signal<'light' | 'dark' | 'system'>('light');
  protected readonly density = signal<'comfortable' | 'compact'>('comfortable');

  protected readonly emailNotifications = signal(true);
  protected readonly weeklySummary = signal(true);
  protected readonly alertNotifications = signal(true);
  protected readonly productUpdates = signal(false);

  setLanguage(event: Event): void {
    this.language.set((event.target as HTMLSelectElement).value);
  }

  setTimezone(event: Event): void {
    this.timezone.set((event.target as HTMLSelectElement).value);
  }

  setTheme(value: 'light' | 'dark' | 'system'): void {
    this.theme.set(value);
  }

  setDensity(value: 'comfortable' | 'compact'): void {
    this.density.set(value);
  }
}
