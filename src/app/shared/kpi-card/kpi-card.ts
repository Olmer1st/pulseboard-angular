import { Component, input } from '@angular/core';
import { KpiMetric } from '../../core/models';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-kpi-card',
  imports: [Icon],
  templateUrl: './kpi-card.html',
  styleUrl: './kpi-card.scss',
})
export class KpiCard {
  metric = input.required<KpiMetric>();

  isPositive(): boolean {
    return this.metric().trend >= 0;
  }
}
