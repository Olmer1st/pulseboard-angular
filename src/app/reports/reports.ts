import { Component } from '@angular/core';
import { RevenueChart } from '../shared/revenue-chart/revenue-chart';
import { TRAFFIC_SERIES } from '../core/mock-data';

const REPORTS = [
  { id: 'r-1', name: 'Weekly Revenue Summary', period: 'Sep 8 – Sep 14, 2026' },
  { id: 'r-2', name: 'Campaign ROAS Breakdown', period: 'August 2026' },
  { id: 'r-3', name: 'Traffic Source Attribution', period: 'Q3 2026' },
];

@Component({
  selector: 'app-reports',
  imports: [RevenueChart],
  templateUrl: './reports.html',
  styleUrl: './reports.scss',
})
export class Reports {
  protected readonly traffic = TRAFFIC_SERIES;
  protected readonly reports = REPORTS;
}
