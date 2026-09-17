import { Component, input } from '@angular/core';
import { CampaignStatus } from '../../core/models';

@Component({
  selector: 'app-status-badge',
  template: `<span class="badge" [class]="status()">{{ label() }}</span>`,
  styleUrl: './status-badge.scss',
})
export class StatusBadge {
  status = input.required<CampaignStatus>();

  private readonly labels: Record<CampaignStatus, string> = {
    active: 'Active',
    paused: 'Paused',
    draft: 'Draft',
    ended: 'Ended',
  };

  label(): string {
    return this.labels[this.status()];
  }
}
