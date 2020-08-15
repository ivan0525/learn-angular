import { Component, OnInit } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products = products;

  handleShare() {
    window.alert('The product has been shared!');
  }

  handleNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
