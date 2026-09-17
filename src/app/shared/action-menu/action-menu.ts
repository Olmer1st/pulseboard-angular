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
  protected readonly menuStyle = signal<Record<string, string>>({});

  toggle(event: MouseEvent): void {
    event.stopPropagation();
    if (this.open()) {
      this.close();
      return;
    }
    const trigger = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const menuWidth = 190;
    const left = Math.min(trigger.right - menuWidth, window.innerWidth - menuWidth - 8);

    this.menuStyle.set({
      position: 'fixed',
      top: `${trigger.bottom + 4}px`,
      left: `${Math.max(left, 8)}px`,
      width: `${menuWidth}px`,
    });
    this.open.set(true);
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
