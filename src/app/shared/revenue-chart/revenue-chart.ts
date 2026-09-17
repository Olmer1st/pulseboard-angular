import { CurrencyPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { TrafficPoint } from '../../core/models';

interface ChartPoint {
  x: number;
  y: number;
  label: string;
  revenue: number;
}

const WIDTH = 640;
const HEIGHT = 220;
const PADDING_X = 16;
const PADDING_Y = 20;

@Component({
  selector: 'app-revenue-chart',
  imports: [CurrencyPipe],
  templateUrl: './revenue-chart.html',
  styleUrl: './revenue-chart.scss',
})
export class RevenueChart {
  data = input.required<TrafficPoint[]>();

  readonly viewBox = `0 0 ${WIDTH} ${HEIGHT}`;

  readonly points = computed<ChartPoint[]>(() => {
    const series = this.data();
    const max = Math.max(...series.map((point) => point.revenue));
    const step = (WIDTH - PADDING_X * 2) / Math.max(series.length - 1, 1);

    return series.map((point, index) => ({
      x: PADDING_X + step * index,
      y: HEIGHT - PADDING_Y - (point.revenue / max) * (HEIGHT - PADDING_Y * 2),
      label: point.label,
      revenue: point.revenue,
    }));
  });

  readonly linePath = computed(() =>
    this.points()
      .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
      .join(' '),
  );

  readonly areaPath = computed(() => {
    const pts = this.points();
    if (pts.length === 0) {
      return '';
    }
    const first = pts[0];
    const last = pts[pts.length - 1];
    return `${this.linePath()} L ${last.x} ${HEIGHT - PADDING_Y} L ${first.x} ${HEIGHT - PADDING_Y} Z`;
  });
}
