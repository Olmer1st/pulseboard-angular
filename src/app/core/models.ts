export type CampaignStatus = 'active' | 'paused' | 'draft' | 'ended';

export interface Campaign {
  id: string;
  name: string;
  channel: string;
  status: CampaignStatus;
  spend: number;
  revenue: number;
  updated: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  unitsSold: number;
  stock: number;
}

export interface ActivityItem {
  id: string;
  actor: string;
  action: string;
  target: string;
  timestamp: string;
}

export type AlertSeverity = 'critical' | 'warning' | 'info';

export interface AlertItem {
  id: string;
  severity: AlertSeverity;
  message: string;
  timestamp: string;
}

export interface KpiMetric {
  id: string;
  label: string;
  value: string;
  trend: number;
  trendLabel: string;
  icon: IconName;
}

export type IconName =
  | 'grid'
  | 'megaphone'
  | 'box'
  | 'bar-chart'
  | 'settings'
  | 'dollar-sign'
  | 'shopping-cart'
  | 'target'
  | 'search'
  | 'bell'
  | 'chevron-down'
  | 'menu'
  | 'x'
  | 'arrow-up'
  | 'arrow-down'
  | 'alert-triangle'
  | 'user';

export interface NavItem {
  label: string;
  route: string;
  icon: IconName;
}

export interface TrafficPoint {
  label: string;
  visits: number;
  revenue: number;
}
