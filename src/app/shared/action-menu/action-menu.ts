import { Component, HostListener, input, signal } from '@angular/core';

export interface ActionMenuItem {
  label: string;
  action: string;
  danger?: boolean;
}

@Component({
  selector: 'app-action-menu',
  templateUrl: './action-menu.html',
  styleUrl: './action-menu.scss',
})
export class ActionMenu {
  items = input.required<ActionMenuItem[]>();

  protected readonly open = signal(false);

  toggle(event: MouseEvent): void {
    event.stopPropagation();
    this.open.update((value) => !value);
  }

  select(item: ActionMenuItem): void {
    this.close();
  }

  close(): void {
    this.open.set(false);
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.close();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }
}
