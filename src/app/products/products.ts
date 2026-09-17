import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { PRODUCTS } from '../core/mock-data';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  protected readonly products = PRODUCTS;
}
