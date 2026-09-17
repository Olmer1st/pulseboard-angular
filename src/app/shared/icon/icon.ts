import { Component, input } from '@angular/core';
import { IconName } from '../../core/models';

export type { IconName };

@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  name = input.required<IconName>();
}
