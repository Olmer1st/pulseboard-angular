import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Campaign } from '../../core/models';
import { ActionMenu, ActionMenuItem } from '../action-menu/action-menu';
import { StatusBadge } from '../status-badge/status-badge';

const ROW_ACTIONS: ActionMenuItem[] = [
  { label: 'View details', action: 'view' },
  { label: 'Edit campaign', action: 'edit' },
  { label: 'Duplicate', action: 'duplicate' },
  { label: 'Pause campaign', action: 'pause' },
  { label: 'Delete', action: 'delete', danger: true },
];

@Component({
  selector: 'app-campaign-table',
  imports: [CurrencyPipe, DatePipe, StatusBadge, ActionMenu],
  templateUrl: './campaign-table.html',
  styleUrl: './campaign-table.scss',
})
export class CampaignTable {
  campaigns = input.required<Campaign[]>();

  rowActions(): ActionMenuItem[] {
    return ROW_ACTIONS;
  }

  roas(campaign: Campaign): string {
    if (campaign.spend === 0) {
      return '—';
    }
    return `${(campaign.revenue / campaign.spend).toFixed(2)}x`;
  }
}
