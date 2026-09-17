import { Component, computed, signal } from '@angular/core';
import { CAMPAIGNS } from '../core/mock-data';
import { CampaignStatus } from '../core/models';
import { CampaignTable } from '../shared/campaign-table/campaign-table';
import { Icon } from '../shared/icon/icon';

interface StatusOption {
  value: CampaignStatus | 'all';
  label: string;
}

const STATUS_OPTIONS: StatusOption[] = [
  { value: 'all', label: 'All statuses' },
  { value: 'active', label: 'Active' },
  { value: 'paused', label: 'Paused' },
  { value: 'draft', label: 'Draft' },
  { value: 'ended', label: 'Ended' },
];

@Component({
  selector: 'app-campaigns',
  imports: [CampaignTable, Icon],
  templateUrl: './campaigns.html',
  styleUrl: './campaigns.scss',
})
export class Campaigns {
  protected readonly statusOptions = STATUS_OPTIONS;
  protected readonly search = signal('');
  protected readonly statusFilter = signal<StatusOption['value']>('all');

  protected readonly filteredCampaigns = computed(() => {
    const query = this.search().trim().toLowerCase();
    const status = this.statusFilter();

    return CAMPAIGNS.filter((campaign) => {
      const matchesQuery = query.length === 0 || campaign.name.toLowerCase().includes(query);
      const matchesStatus = status === 'all' || campaign.status === status;
      return matchesQuery && matchesStatus;
    });
  });

  onSearchInput(event: Event): void {
    this.search.set((event.target as HTMLInputElement).value);
  }

  onStatusChange(event: Event): void {
    this.statusFilter.set((event.target as HTMLSelectElement).value as StatusOption['value']);
  }
}
