import { Component } from '@angular/core';
import { ACTIVITY, ALERTS, CAMPAIGNS, KPI_METRICS, TRAFFIC_SERIES } from '../core/mock-data';
import { Icon } from '../shared/icon/icon';
import { CampaignTable } from '../shared/campaign-table/campaign-table';
import { KpiCard } from '../shared/kpi-card/kpi-card';
import { RevenueChart } from '../shared/revenue-chart/revenue-chart';

@Component({
  selector: 'app-dashboard',
  imports: [Icon, CampaignTable, KpiCard, RevenueChart],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  protected readonly kpis = KPI_METRICS;
  protected readonly traffic = TRAFFIC_SERIES;
  protected readonly alerts = ALERTS;
  protected readonly activity = ACTIVITY;
  protected readonly topCampaigns = CAMPAIGNS.slice(0, 6);
}
